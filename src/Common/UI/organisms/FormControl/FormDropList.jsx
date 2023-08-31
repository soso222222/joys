import DropBox from "Common/UI/atoms/DropBox";
import LabelBox from "Common/UI/molecules/LabelBox";
import React from "react";
import { Wrapper } from "./styled";

const FormDropList = ({
    label,
    isEdit = true,
    option,
    placeholder,
    value,
    name,
    onChange,
    disabled,
    size = 44,
}) => {
    const filter = option?.map((i) => {
        const selected = String(i.value) === String(value) || i.selected;
        return { ...i, selected };
    });

    return (
        <Wrapper className="formInput">
            <LabelBox label={label}>
                {isEdit ? (
                    <DropBox
                        size={size}
                        disabled={disabled}
                        name={name}
                        placeholder={placeholder}
                        option={filter}
                        onChange={onChange}
                        line
                    />
                ) : (
                    <p className="value">
                        {filter?.filter((i) => i.selected)[0]?.title}
                    </p>
                )}
            </LabelBox>
        </Wrapper>
    );
};

export default FormDropList;
