import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Container, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { getCount, getList, resetComponent } from "actions/list";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const loaderCSS = css`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
`;

const List = ({
  list,
  loading,
  loadingCount,
  count,
  getCount,
  getList,
  resetComponent,
}) => {
  const [onlyOnce, setOnce] = useState(true);

  useMemo(() => {
    if(onlyOnce) {
      resetComponent();
      setOnce(false);
    }
    getCount();
    getList();
  }, [resetComponent, setOnce, getCount, getList]);

  return (
    <section className="sptb p-3">
      {
        ( loading || loadingCount ) && (
        <div className="custom_overlay">
          <ClipLoader 
            css={loaderCSS}
            size={60}
            loading={true}
          />
        </div>)
      }
      <Row>
        <Col>
          <h3>{`Total Battles Occurred: ${count}`}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Battle Places</h3>
          <ul>
          {
            list.map((battle, index) => {
              return <li key={index}>{battle}</li>
            })
          }
          </ul>
        </Col>
      </Row>
    </section>
  );
} 

List.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingCount: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired,
  getCount: PropTypes.func.isRequired,
  resetComponent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.battles.loadingList,
  loadingCount: state.battles.loadingCount,
  count: state.battles.count,
  list: state.battles.list,
});

export default connect(mapStateToProps, {
  getList,
  getCount,
  resetComponent,
})(withRouter(List));

