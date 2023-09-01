import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const IconButton = ({
    Theme,
    Icon,
    fill,
    onClick,
    children,
    iconSize,
    disabled,
    direction,
    className,
    size = "md",
    background,
    color,
    isActive,
    to,
    circle,
}) => {
    const type = {
        menu: {
            size: 56,
            icon: 52,
            radius: 8,
        },
        xxxl: {
            size: 56,
            icon: 24,
            radius: 8,
        },
        xxl: {
            size: 52,
            icon: 24,
            radius: 8,
        },
        xl: {
            size: 48,
            icon: 24,
            radius: 8,
        },
        lg: {
            size: 44,
            icon: 20,
            radius: 8,
        },
        md: {
            size: 40,
            icon: 20,
            radius: 8,
        },
        sm: {
            size: 36,
            icon: 20,
            radius: 8,
        },
        xs: {
            size: 32,
            icon: 16,
            radius: 6,
        },
        xxs: {
            size: 28,
            icon: 12,
            radius: 6,
        },
        xxxs: {
            size: 24,
            icon: 12,
            radius: 6,
        },
        xxxxs: {
            size: 20,
            icon: 8,
            radius: 6,
        },
        xxxxxs: {
            size: 16,
            icon: 8,
            radius: 6,
        },
        xxxxxxs: {
            size: 12,
            icon: 8,
            radius: 6,
        },
    };
    const setting = type[size];
    const navigate = useNavigate();
    return (
        <Wrapper
            className={className}
            fill={fill}
            disabled={disabled}
            Theme={Theme}
            bg={background}
            circle={circle}
            setting={setting}
            onClick={(e) => {
                to ? navigate(to) : onClick && onClick(e);
                e.stopPropagation();
            }}
        >
            {Icon && (
                <Icon
                    size={iconSize || setting?.icon}
                    direction={direction}
                    isActive={isActive}
                />
            )}
            {children}
        </Wrapper>
    );
};

const ButtonPropsStyle = css`
    ${({ Theme, theme: { button }, bg, fill }) => {
        const propsTheme = Theme ? Theme : "normal";
        const colorFill =
            Theme !== "unLine" &&
            css`
                ${fill ? `fill:${fill};` : ""}
                path {
                    fill: inherit;
                }
            `;
        return css`
            border: 1px solid transparent;
            ${colorFill};
            ${button.theme[propsTheme]}
            ${bg ? `background-color:var(--${bg});` : ""}
            &:not(:disabled):not(:focus):hover {
                ${button.theme[propsTheme].hover}
            }
            &:disabled {
                cursor: no-drop;
                ${button.theme[propsTheme].disabled}
            }
            &:focus {
                ${button.theme[propsTheme].focus}
            }
        `;
    }}
`;

const Wrapper = styled.button`
    ${ButtonPropsStyle}
    ${({ setting, circle, fill, onClick }) => {
        return `
                min-width:${setting.size}rem;
                height:${setting.size}rem;
                border-radius:${circle ? 300 : setting.radius}rem;
                display:flex;
                justify-content:center;
                align-items:center;
                transition:0.3s, fill 0s;
                font-size:14rem;
                fill:${fill || ""};
                ${onClick ? "" : "cursor:auto;"}
                path{
                    fill:inherit;
                }
        `;
    }}
`;

export default IconButton;
