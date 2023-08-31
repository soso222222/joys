import React from "react";
import { ColumnWrapper } from "./styled";

function FormColumn({ children, column = 2, margin }) {
    const valueSet = (target) => {
        const type = typeof target;
        const array = Array.isArray(target);
        let style = "";
        array
            ? target.map((i) => {
                  return (style +=
                      typeof i === "number" ? i + "rem " : i + " ");
              })
            : (style += type === "number" ? `${target}rem` : target);
        return target === undefined ? target : style;
    };
    return (
        <ColumnWrapper column={column} margin={margin && valueSet(margin)}>
            {children}
        </ColumnWrapper>
    );
}

export default FormColumn;
