import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: auto;
`;

const pageLayout = (props) => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default pageLayout;
