import styled, { css } from "styled-components";

const TextButtonPropsStyle = css`
    ${({ size, Theme, theme: { textButton, button, colors } }) => {
        const propsSize = size ? size : "lg";

        const propsTheme = Theme ? Theme : "textButtonDefault";
        return css`
            ${textButton.size[propsSize]};
            ${button.theme[propsTheme]};
            gap: ${(props) => (props.gap ? `${props.gap}rem` : "8rem")};
            color: ${colors.primaryText};
            &:not(:disabled):not(:focus):hover {
                ${button.theme[propsTheme].hover}
            }
            &:active {
                ${button.theme[propsTheme].active}
            }
            &:disabled {
                cursor: no-drop;
                ${button.theme[propsTheme].disabled}
            }
            &:not(:active):focus {
                ${button.theme[propsTheme].focus}
            }
        `;
    }}
`;
export const Wrapper = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 4rem;
    width: ${(props) => (props.fill ? "100%" : "auto")};
    flex: ${(props) => (props.fill ? "0 1 auto" : "0 0 auto;")};
    font-weight: ${(props) => (props.weight ? props.weight : 400)};
    border: 1px solid transparent;
    border-radius: 8px;
    .tit {
        position: relative;
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
        ${(props) => props.styles};
    }
    ${TextButtonPropsStyle}
`;
