import Box from "Common/UI/atoms/Box";
import React from "react";
import { FormBoxInner, FormBoxWrapper } from "./styled";

function FormBox({
    title,
    rightSide,
    gap,
    bg = true,
    children,
    className,
    padding = [40, 60],
    label,
    fill,
    style,
}) {
    const valueSet = (target) => {
        const isNumber =
            typeof target === "number" ||
            Number(target) >= 0 ||
            Number(target) <= 0;
        const array = Array.isArray(target);
        let style = "";
        array
            ? target.map((i) => {
                  return (style +=
                      typeof i === "number" ? i + "rem " : i + " ");
              })
            : (style += isNumber ? `${target}rem` : target);

        return target === undefined ? target : style;
    };
    return (
        <FormBoxWrapper
            styles={style}
            fill={fill}
            className={className ? `${className} formBox` : "formBox"}
        >
            {title && (
                <Box bottom={gap} className="titleWrapper">
                    <div className="formTitle">
                        {label ? <p className="sub">{label}</p> : null}
                        {title}
                    </div>
                    {rightSide && (
                        <Box className="alert" gap={15}>
                            {rightSide?.icon}
                            <Box gap={4}>{rightSide?.content}</Box>
                        </Box>
                    )}
                </Box>
            )}
            <FormBoxInner fill={fill} pd={valueSet(padding)} bg={bg}>
                {children}
            </FormBoxInner>
        </FormBoxWrapper>
    );
}

export default FormBox;
