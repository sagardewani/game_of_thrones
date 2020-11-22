const mongoose = require("mongoose");

const BattleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: Number,
  },
  battle_number: {
    type: Number,
  },
  attacker_king: {
    type: String,
  },
  defender_king: {
    type: String,
  },
  attacker_1: {
    type: String
  },
  attacker_2: {
    type: String
  },
  attacker_3: {
    type: String
  },
  attacker_4: {
    type: String
  },
  defender_1: {
    type: String
  },
  defender_2: {
    type: String
  },
  defender_3: {
    type: String
  },
  defender_4: {
    type: String
  },
  attacker_outcome: {
    type: String,
    enum: ["win", "loss"]
  },
  battle_type: {
    type: String,
    enum: ["pitched battle", "ambush", "siege", "razing"]
  },
  major_death: {
    type: Number,
    enum: [0,1]
  },
  major_capture: {
    type: Number,
    enum: [0,1]
  },
  attacker_size: {
    type: Number,
  },
  defender_size: {
    type: Number,
  },
  attacker_commander: {
    type: String,
  },
  defender_commander: {
    type: String,
  },
  summer: {
    type: Number,
    enum: [0,1]
  },
  location: {
    type: String
  },
  region: {
    type: String,
  },
  note: {
    type: String
  }
});

module.exports = Battle = mongoose.model("battle", BattleSchema);
