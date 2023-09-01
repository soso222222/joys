import React from "react";
import { Bg, Wrapper } from "./styled.Header";
import TopMenu from "../TopMenu/TopMenu";

function Header() {
    return (
        <>
            <Bg />
            <Wrapper id="header">
                <TopMenu />
            </Wrapper>
        </>
    );
}

export default Header;
