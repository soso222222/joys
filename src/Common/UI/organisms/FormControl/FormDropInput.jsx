import Box from "Common/UI/atoms/Box";
import DropInput from "Common/UI/molecules/DropInput";
import LabelBox from "Common/UI/molecules/LabelBox";
import React from "react";
import { Wrapper } from "./styled";

function FormDropInput({
    label,
    isEdit = true,
    size = 44,
    value,
    onChange,
    ...props
}) {
    return (
        <Wrapper>
            <LabelBox label={label}>
                {isEdit ? (
                    <Box gap={8}>
                        <DropInput
                            size={size}
                            onChange={onChange}
                            value={value}
                            {...props}
                        />
                    </Box>
                ) : (
                    <p className="value">{value}</p>
                )}
            </LabelBox>
        </Wrapper>
    );
}
export default FormDropInput;
