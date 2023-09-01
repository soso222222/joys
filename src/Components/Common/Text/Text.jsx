import React from "react";
import { TextWrapper } from "./styled.text";
function Text({ children, ...props }) {
    return <TextWrapper {...props}>{children}</TextWrapper>;
}
export default Text;
