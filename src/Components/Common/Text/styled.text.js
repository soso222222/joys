import styled, { css } from "styled-components";

export const TextWrapper = styled.div`
    ${({ theme, size, color, weight, isInline }) => {
        const fontColor = color ? theme.colors[color] : "black";
        const fontSize = size ? theme.title[size] : theme.title.xxxxs;
        return css`
            display: ${isInline ? "inline-flex" : "flex"};
            color: ${fontColor};
            ${fontSize};
            font-weight: ${weight ? weight : 400};
        `;
    }}
    align-items: center;
    i {
        display: flex;
        align-items: center;
        margin-right: 10rem;
    }
`;
