import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./../logo.svg";

interface FooterProps {
 auth?: false;
 name?: string;
}

const SFooter: React.FC<FooterProps> = ({ auth, name }) => {
 //  const [openMenu, setOpenMenu] = useState<boolean>(false);

 return (
  <StyledFooter>
   <small>@All Right Reserved</small>
  </StyledFooter>
 );
};

const StyledFooter = styled.footer`
 background: grey;
`;

export default SFooter;
