import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchBattle, updateSearchedBattleID, resetComponent } from "actions/search";
import AsyncSelect from "react-select/async";
import { Col } from "react-bootstrap";

const Search = ({
  loading,
  sortingParams,
  searchBattle,
  updateSearchedBattleID,
  resetComponent,
}) => {
  const initialSortingParams = {
    limit: 40,
    king: "",
    location: "",
    type: "",
  };
  const [listParams, setListParams] = useState(initialSortingParams);
  const [onlyOnce, setOnce] = useState(true);
  let delayTimer;

  const execWithDelay = (cb, input) => (delay = 750) => {
    clearTimeout(delayTimer);
    return new Promise((resolve) => {
      delayTimer = setTimeout(() => {
        resolve(cb(input));
      }, delay);
    })
  }

  const loadOptions = inputValue => {
    const params = {
      ...sortingParams,
      location: inputValue,
    };
    return searchBattle(params).then((res) => {
      if (res.data.status) {
        const data = res.data.response;
        const result = data.map((b) => ({
          value: b._id,
          label: b.name
        }));
        return result;
      }
    });
  }

  //########################## handle select ##############################
  const handleSelect = name => (value) => {
    let fieldValue = [];
    if (value) {
      if (value.length) {
        fieldValue = value.map((item) => (item.value));
      }
      else if (value.value) {
        fieldValue = value.value;
      }
    }
    switch (name) {
      case "searchBattle":
        updateSearchedBattleID(fieldValue);
        break;
    }
  };

  useMemo(() => {
    if(onlyOnce) {
      resetComponent();
      setOnce(false);
    }
    searchBattle(listParams);
  }, [resetComponent, setOnce, searchBattle, listParams]);

  return (
    <Col md={8} lg={6}>
      <AsyncSelect 
        placeholder="Search Battles..."
        cacheOptions
        isLoading={loading}
        defaultOptions
        onChange={handleSelect("searchBattle")}
        loadOptions={(input) => execWithDelay(loadOptions, input)() }
      />
    </Col>
  );
} 

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchBattle: PropTypes.func.isRequired,
  resetComponent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.search.loadingList,
  sortingParams: state.search.sortingParams,
});

export default connect(mapStateToProps, {
  searchBattle,
  updateSearchedBattleID,
  resetComponent,
})(Search);

