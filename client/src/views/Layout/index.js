/* eslint-disable */
import React from "react";
import { withRouter } from "react-router-dom";
import BattleRoutes from "Routes/Battle";
import PageContent from "./PageContent";
import PageHeader from "./PageHeader";
import { Container } from "react-bootstrap";

const index = ({ }) => {
  return (
    <Container>
      <PageHeader/>
      <PageContent routes={BattleRoutes}/>
    </Container>
  )
};

export default withRouter(index);
