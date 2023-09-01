import React, { useEffect } from "react";
import { useState } from "react";
import { forwardRef } from "react";
import { InputWrapper } from "./styled.Button";

const Input = forwardRef(
    (
        {
            Theme,
            fill,
            paddingSm,
            color,
            className,
            size,
            loading,
            leftIcon,
            rightIcon,
            center,
            children,
            successForm,
            onChange,
            disabled,
            gap,
            isActive,
            accept,
            type,
            value,
            name,
            checked,
            multiple,
        },
        ref
    ) => {
        const [isCheck, setIsCheck] = useState(checked);
        const acceptTypes = () => {
            let text = "";
            const set = (e) => {
                switch (e) {
                    case "xls":
                    case "xlsx":
                    case "excel":
                    case "pdf":
                        return "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    case "jpg":
                    case "png":
                    case "gif":
                    case "jpeg":
                    case "image":
                    case "images":
                    case "img":
                        return "image/*";
                    default:
                        return e ? "." + e : undefined;
                }
            };
            accept?.map((i, n) => {
                text += n ? ", " + set(i) : set(i);
            });
            return text;
        };
        const acceptFilter = acceptTypes();

        useEffect(() => {
            setIsCheck(checked);
        }, [checked]);

        return (
            <InputWrapper
                className={isActive ? `${className} active` : className}
                Theme={Theme}
                full={fill}
                color={color}
                paddingSm={paddingSm}
                size={size}
                loading={loading || undefined}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                gap={gap}
                center={center}
                form={successForm}
                isCheck={isCheck}
            >
                {leftIcon ? <i className="leftIcon">{leftIcon}</i> : ""}
                <input
                    disabled={disabled}
                    type={type}
                    value={value}
                    name={name}
                    multiple={multiple}
                    ref={ref}
                    accept={accept ? acceptFilter : ""}
                    onChange={onChange}
                    checked={isCheck}
                />
                {children}
                {rightIcon ? <i className="rightIcon">{rightIcon}</i> : ""}
            </InputWrapper>
        );
    }
);

Input.defaultProps = {
    Theme: false,
    fill: false,
    color: null,
    onClick: () => {},
    disabled: false,
    className: null,
    loading: false,
    leftIcon: false,
    rightIcon: false,
};
export default Input;
