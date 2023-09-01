import styled from "styled-components";

export const Gnb = styled.nav`
    position: relative;
    width: 350rem;
    ul {
        display: inline-flex;
        gap: 30rem;
    }
    li {
        box-sizing: border-box;
    }
    li span {
        display: block;
        text-align: right;
    }
    li span.en {
        font-weight: 500;
        font-size: 18px;
        padding-bottom: 0.2em;
    }
    li span.kr {
        position: relative;
        display: flex;
        justify-content: flex-end;
        font-size: 20px;
    }
    li span.kr::before {
        content: "";
        position: absolute;
        left: -5px;
        bottom: -10px;
        width: 0;
        height: 100%;
        background: var(--Pu_300);
    }
    li:hover span.kr::before {
        width: 100%;
        transition: all 0.4s ease-out;
    }

    @media screen and (max-width: 1024px) {
        position: fixed;
        width: 100%;
        height: 0;
        top: 130rem;
        right: 0;
        z-index: 5000;
        background-color: rgba(255, 255, 255, 0.9);
        transition: height 0.8s;
        overflow: hidden;

        .mobile-menu {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
        }
        .mobile-menu > a {
            display: inline-block;
            font-size: 50px;
        }
        ul {
            display: flex;
            gap: 20rem;
            overflow: hidden;
            flex-direction: column;
        }
        ul > li {
            position: relative;
            box-sizing: border-box;
        }
        ul > li a {
            position: relative;
            display: block;
        }
        ul > li span {
            display: block;
            text-align: center;
        }
        ul > li span.en {
            font-size: 18px;
        }
        ul > li span.kr {
            font-size: 24px;
        }
        ul > li span.kr::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 100%;
            background: var(--Pu_300);
        }
    }
`;

export const Wrapper = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "LexendDeca", "sans-serif";

    @media screen and (max-width: 1024px) {
        width: 90%;
        margin: 0 auto;
        position: relative;
        &.show #gnb {
            height: 100%;
        }
        ul > li {
            margin: 0 auto;
        }
        li span.kr {
            justify-content: center;
        }
    }
`;
