import React from "react";
import { forwardRef } from "react";
import { ButtonWrapper } from "./styled.Button";
import { useNavigate } from "react-router-dom";

const Button = forwardRef(
    (
        {
            Theme,
            fill,
            paddingSm,
            color,
            onClick,
            disabled,
            className,
            type,
            size,
            loading,
            leftIcon,
            rightIcon,
            center,
            children,
            successForm,
            gap,
            isActive,
            to,
            value,
            name,
            inline,
            background,
        },
        ref
    ) => {
        const navigate = useNavigate();
        return (
            <ButtonWrapper
                className={
                    isActive
                        ? `${className} active button`
                        : className + " button"
                }
                Theme={Theme}
                full={fill}
                color={color}
                onClick={(e) => {
                    to ? navigate(to) : onClick && onClick(e);
                    e.stopPropagation();
                }}
                paddingSm={paddingSm}
                disabled={disabled}
                type={type || "button"}
                size={size}
                loading={loading || undefined}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                gap={gap}
                ref={ref}
                center={center}
                form={successForm}
                value={value}
                name={name}
                inline={inline}
                background={background}
            >
                {leftIcon ? <i className="leftIcon">{leftIcon}</i> : ""}
                {children}
                {rightIcon ? <i className="rightIcon">{rightIcon}</i> : ""}
            </ButtonWrapper>
        );
    }
);

Button.defaultProps = {
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
export default Button;
