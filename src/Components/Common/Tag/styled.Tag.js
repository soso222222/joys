import styled from "styled-components";

export const Wrapper = styled.ul`
    ${({ bg }) => `
    li {
        float: left;
        box-sizing: border-box;
        padding: 0.5em 0.8em;
        margin-bottom: 0.5em;

        ${bg ? `background: var(--${bg});` : ""}
    }
    li + li {
        margin-left: 0.5em;
    }
    li span {
        font-size: 14px;
        font-weight: 300;
    }
    `}
`;
