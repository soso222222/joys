import styled from "styled-components";

export const Wrapper = styled.header`
    position: fixed;
    left: 100rem;
    top: 0;
    width: calc(100% - 200rem);
    z-index: 10000;
    background-color: #fff;
    div.top {
        position: relative;
        width: 90%;
        margin: 1% auto;
    }

    @media screen and (max-width: 1024px) {
        // position: fixed;
        // left: 0;
        // top: 0;
        // width: 100%;
        // z-index: 10000;
        // background-color: #fff;
    }
`;

export const Bg = styled.div`
    width: 100%;
    height: 130rem;

    @media screen and (max-width: 1024px) {
        // position: fixed;
        // left: 0;
        // top: 0;
        // width: 100%;
        // z-index: 10000;
        // background-color: #fff;
    }
`;
