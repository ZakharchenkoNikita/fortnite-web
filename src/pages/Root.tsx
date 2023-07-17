import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/layouts/MainNavigation";
import Container from "../components/UI/Container";

function RootLayout() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Fragment>
  );
}

export default RootLayout;
