import Box from "Common/UI/atoms/Box";
import { InputComponent } from "Common/UI/atoms/Input";
import LabelBox from "Common/UI/molecules/LabelBox";
import { getBirth } from "Common/Utils";
import React, { useEffect, useState } from "react";
import { BirthBox, Wrapper } from "./styled";

function Birth({
    label = "생년월일 및 성별",
    isEdit = true,
    value,
    onChange,
    size = "44",
    name,
    disabled,
    ...props
}) {
    const [state, setState] = useState({
        birth: value?.birth || "",
        last: value?.last || "",
    });

    const [birth, internationalBirth, sex] = getBirth(
        value?.split("-")[0],
        value?.split("-")[1]
    );
    const setChange = (e, limit) => {
        const {
            target: { value, name },
        } = e;
        if (value.length > limit) return;
        setState({
            ...state,
            [name]: value,
        });
    };

    const valueSetting = () => {
        const slice = value?.split("-") || [];
        setState({
            birth: slice[0] || "",
            last: slice[1] || "",
        });
    };

    useEffect(() => {
        isEdit && valueSetting();
    }, [value, isEdit]);

    useEffect(() => {
        isEdit &&
            onChange &&
            onChange(
                {
                    target: {
                        value: `${state.birth}-${state.last}`,
                        name: name,
                    },
                },
                true
            );
    }, [state.birth, state.last]);
    return (
        <Wrapper>
            <LabelBox label={label}>
                {isEdit ? (
                    <BirthBox>
                        <InputComponent
                            size={size}
                            name={"birth"}
                            value={state?.birth}
                            placeholder="생년월일 6자리"
                            onChange={(e) => setChange(e, 6)}
                            type="number"
                            disabled={disabled}
                            {...props}
                        />
                        <span className="dash">-</span>
                        <Box className="lastNum">
                            <InputComponent
                                size={size}
                                name={"last"}
                                value={state?.last}
                                placeholder="뒤 한자리"
                                onChange={(e) => setChange(e, 1)}
                                type="number"
                                disabled={disabled}
                                {...props}
                            />
                            <Box gap={"16rem"} className="dotBox">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </Box>
                        </Box>
                    </BirthBox>
                ) : (
                    <Box gap={24}>
                        <span>{value && value.padEnd(14, "*")}</span>
                        <span>{value && `${internationalBirth} / ${sex}`}</span>
                    </Box>
                )}
            </LabelBox>
        </Wrapper>
    );
}

export default Birth;
