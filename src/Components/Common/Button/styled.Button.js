import styled, { css } from "styled-components";

const ButtonPropsStyle = css`
    ${({ size, Theme, full, theme: { button } }) => {
        const propsSize = size ? size : "lg";
        const propsTheme = Theme ? Theme : "normal";
        const buttonSize = full
            ? {
                  ...button.size[propsSize],
                  padding: 0,
                  justifyContent: "center",
              }
            : button.size[propsSize];
        const colorFill =
            Theme !== "unLine" &&
            css`
                path {
                    fill: inherit;
                }
            `;
        return css`
            ${colorFill};
            ${buttonSize};
            ${button.theme[propsTheme]};
            gap: ${(props) => (props.gap ? `${props.gap}rem` : "8rem")};
            &:not(:disabled):not(:focus):hover {
                ${button.theme[propsTheme].hover}
            }
            &:active,
            &.active {
                ${button.theme[propsTheme].active}
            }
            &:disabled {
                cursor: no-drop;
                ${button.theme[propsTheme].disabled}
            }
            &:not(:active):focus {
                ${button.theme[propsTheme].focus}
            }
            input {
                &:chekced {
                    ${button.theme[propsTheme].active}
                }
            }
            background-color: ${(props) =>
                props.background ? props.background : "auto"};
        `;
    }}
`;
export const Wrapper = css`
    background-color: ${(props) =>
        props.background ? props.background : "auto"};
    display: ${(props) => (props.inline ? "inline-flex" : "flex")};
    align-items: center;
    justify-content: center;
    ${(props) => (props.center ? "justify-content: center;" : "")}
    border: 1px solid transparent;
    font-weight: 400;
    width: ${(props) => (props.full ? "100%" : "auto")};
    border-radius: 6px;
    flex: ${(props) => (props.full ? "0 1 auto" : "0 0 auto;")};
    .tit {
        display: inline-block;
        width: 100%;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
        font-weight: inherit;
    }
    i {
        display: inline-block;
        color: inherit;
        font-style: normal;
        line-height: 0;
        text-align: center;
        text-transform: none;
        vertical-align: -0.125em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        svg {
            fill: currentcolor;
            line-height: 1;
        }
    }
    ${ButtonPropsStyle}
`;

export const InputWrapper = styled.label`
    position: relative;
    ${Wrapper}
    input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
`;
export const ButtonWrapper = styled.button`
    ${Wrapper}
`;
