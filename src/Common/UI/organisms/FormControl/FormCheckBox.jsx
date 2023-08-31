import Box from "Common/UI/atoms/Box";
import CheckBox from "Common/UI/atoms/CheckBox";
import LabelBox from "Common/UI/molecules/LabelBox";
import React from "react";
import { Wrapper } from "./styled";

const FormCheckBox = ({
    label,
    isEdit = true,
    option = [],
    type = "checkbox",
    value,
    name,
    onChange,
    size = 44,
    row,
    column,
    fontSize,
}) => {
    return (
        <Wrapper>
            <LabelBox fontSize={fontSize} row={row} label={label}>
                {type !== "radio" || isEdit ? (
                    <Box
                        height={size}
                        valign={row ? "bottom" : undefined}
                        gap={column ? 10 : 20}
                        style={column ? `flex-direction: column` : ``}
                    >
                        {option?.map((i, key) => (
                            <CheckBox
                                key={key}
                                name={name}
                                value={i?.value}
                                disabled={!isEdit || i?.disabled}
                                checked={
                                    (value !== undefined &&
                                        String(i?.value) === String(value)) ||
                                    i.checked
                                        ? true
                                        : false
                                }
                                type={type}
                                onChange={onChange}
                            >
                                {i?.title}
                            </CheckBox>
                        ))}
                    </Box>
                ) : (
                    <p className="value">
                        {
                            option?.filter(
                                (i) =>
                                    String(i.value) === String(value) ||
                                    i.checked
                            )[0]?.title
                        }
                    </p>
                )}
            </LabelBox>
        </Wrapper>
    );
};

export default FormCheckBox;
