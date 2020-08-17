import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./../logo.svg";

interface HeaderProps {
 auth: false;
 name: string;
}

const SHeader: React.FC<HeaderProps> = ({ auth, name }) => {
 //  const [openMenu, setOpenMenu] = useState<boolean>(false);

 return (
  <StyledHeader>
   <h1>Pakebook</h1>
   {auth && (
    <ul className="auth">
     <label htmlFor="auth">Hi, {name}</label>
     <li>
      <a href="/logout">logout</a>
     </li>
    </ul>
   )}
  </StyledHeader>
 );
};

const StyledHeader = styled.header`
 background: pink;

 .auth {
  float: right;
 }
`;

export default SHeader;
