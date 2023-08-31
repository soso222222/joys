import LabelBox from "Common/UI/molecules/LabelBox";
import React from "react";
import { Wrapper } from "./styled";

function Address({ label, children }) {
  return (
    <Wrapper>
      <LabelBox label={label}>{children}</LabelBox>
    </Wrapper>
  );
}

export default Address;
