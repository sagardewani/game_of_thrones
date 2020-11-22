const express = require("express");
const router = express.Router();
const Battle = require("../models/Battle");
const response = require("../response");

// @route GET /search
// @desc Search battles based on input
// @access Public

router.get("/search", async (req, res) => {
  const filters = [];
  const allowed = { "king": "king", "location": "location", "type": "battle_type" };
  for(let i in req.query) {
    const filter = req.query[i];
    if(filter && allowed[i]) {
      if(i === "king") {
        const attacker = {
          "attacker_king": { $regex: filter, $options: "i" }
        };
        const defender = {
          "defender_king": { $regex: filter, $options: "i" }
        };
        filters.push({ $or: [attacker, defender] });
        continue;
      }
      filters.push({
        [allowed[i]]: { $regex: filter, $options: "i" }
      });
    }
  }
  if(filters.length === 0) filters.push({});

  try {
    const battles = await Battle.aggregate([
      {
        $match: {
          $and: filters 
        }
      },
      {
        $project: {
          name: "$name",
        }
      },
      {
        $limit: 40
      }
    ]).collation({ locale: 'en_US', strength: 1 });
    return response.successResponse(res, battles, "Battles Found.");
  } catch (err) {
    console.error(err.message);
    return await response.errorResponse(res, {}, "Server Error.", 500);
  }
});

// @route GET /list
// @desc Get List of Battles
// @access Private

router.get("/list", async (req, res) => {
  try {
    let battles = await Battle
      .find()
      .select("location")
      .lean();

    if (!battles)
      return response.errorResponse(
        res,
        { msg: "Battles not found." },
        "Battles not found.",
        404
      );
    battles = battles.map((battle) => battle.location);
    return response.successResponse(res, battles, "Battle Found.");
  } catch (err) {
    console.log("error in battles list", err);
    return response.errorResponse(res, {}, "Server Error", 500);
  }
});

// @route GET /count
// @desc Get Count of Total Battles
// @access Private

router.get("/count", async (req, res) => {
  try {
    const battlesCount = await Battle.estimatedDocumentCount();
    return response.successResponse(res, battlesCount || 0, "Battles Count");
  } catch (err) {
    console.log("error in battles counting", err);
    return response.errorResponse(res, {}, "Server Error", 500);
  }
});



// @route GET /:battle_id
// @desc Get Details of Selected Battle
// @access Private

router.get("/:battle_id", async (req, res) => {
  try {
    const battle = await Battle
      .findById(req.params.battle_id)
      .select(
        "name year battle_number attacker_king defender_king\
        attacker_1 attacker_2 attacker_3 attacker_4\
        defender_1 defender_2 defender_3 defender_4\
        attacker_outcome battle_type major_death major_capture\
        attacker_size defender_size attacker_commander defender_commander\
        summer location region note"
      )
      .lean();

    if (!battle)
      return response.errorResponse(
        res,
        { msg: "Battle not found." },
        "Battle not found.",
        404
      );

    return response.successResponse(res, battle, "Battle Found.");
  } catch (err) {
    // console.error(err.message);
    if (err.kind == "ObjectId") {
      return response.errorResponse(
        res,
        { msg: "Battle not found." },
        "Battle not found.",
        404
      );
    }
    return response.errorResponse(res, {}, "Server Error", 500);
  }
});

module.exports = router;
