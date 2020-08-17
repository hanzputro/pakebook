import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch, DefaultRootState } from "react-redux";
import Routes from "./../routes";
import styled from "styled-components";

interface MainProps {
 auth?: false;
 name?: string;
}

const SMain: React.FC<MainProps> = () => {
 return (
  <StyledMain>
   <section>
    {Routes?.map((route) => {
     return (
      <Route
       path={route.path}
       component={route.component}
       exact={!!route.exact && true}
      />
     );
    })}
   </section>
   <aside>sidebar</aside>
  </StyledMain>
 );
};

const StyledMain = styled.main`
 background: pink;

 .auth {
  float: right;
 }
`;

export default SMain;
