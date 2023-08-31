import React from "react";
import Text from "../../../../Common/UI/atoms/Text/Text";
import { Wrapper } from "./styled.Footer";

function Footer() {
    return (
        <Wrapper id="footer">
            <Text size={14} weight={600}>
                2022PORTFOLIO
            </Text>
        </Wrapper>
    );
}

export default Footer;
