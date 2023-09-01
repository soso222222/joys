import React from "react";
import { Wrapper } from "./styled.textbutton";
import { useNavigate } from "react-router-dom";

function TextButton({
    Theme,
    onClick,
    weight,
    disabled,
    className,
    type,
    size,
    loading,
    leftIcon,
    rightIcon,
    children,
    gap,
    to,
    style,
}) {
    const navigate = useNavigate();
    return (
        <Wrapper
            className={className}
            Theme={Theme}
            onClick={(e) => {
                to ? navigate(to) : onClick && onClick();
                e.stopPropagation();
            }}
            disabled={disabled}
            type={type}
            size={size}
            weight={weight}
            loading={loading || undefined}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            gap={gap}
            styles={style}
        >
            {leftIcon ? <i className="leftIcon">{leftIcon}</i> : ""}
            <span className="tit">{children}</span>
            {rightIcon ? <i className="rightIcon">{rightIcon}</i> : ""}
        </Wrapper>
    );
}

TextButton.defaultProps = {
    Theme: false,
    fill: false,
    color: null,
    onClick: () => {},
    disabled: false,
    className: null,
    type: "button",
    loading: false,
    leftIcon: false,
    rightIcon: false,
};
export default TextButton;
