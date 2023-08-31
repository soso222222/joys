import Box from "Common/UI/atoms/Box";
import Button from "Common/UI/atoms/Button/Button";
import InputComponent from "Common/UI/atoms/Input/InputComponent";
import LabelBox from "Common/UI/molecules/LabelBox";
import React, { useEffect, useState } from "react";
import { ModalAddress } from "../Address";
import { Wrapper } from "./styled";

function Address({
    label,
    isEdit = true,
    name = "address",
    value = " , , ",
    onChange,
    disabled,
}) {
    const [isActive, setIsActive] = useState(false);
    const [address, setAddress] = useState({
        no: "",
        road: "",
        detail: "",
    });
    const [detailValue, setDetailValue] = useState("");

    const addressSetting = () => {
        const [no = "", road = "", ...array] =
            value?.split("|") || "".split("|");
        let detail = "";
        array?.map((i, key) => (detail += key ? `,${i}` : i));
        setAddress({
            no,
            road,
            detail,
        });
        setDetailValue(detail);
    };
    const onAddress = ({ target: { value: detail } }) => {
        const textSetting = address?.no + "|" + address?.road + "|" + detail;
        setDetailValue(detail);
        onChange && onChange({ name, value: textSetting });
    };

    useEffect(() => {
        addressSetting();
    }, [value]);
    return (
        <>
            <Wrapper>
                <LabelBox label={label}>
                    {isEdit ? (
                        <Box valign="top" gap={8}>
                            <Button
                                onClick={() => setIsActive(true)}
                                Theme="line"
                                disabled={disabled}
                            >
                                우편번호 찾기
                            </Button>
                            <Box
                                style={`flex: 1 1;`}
                                className="address"
                                column
                                gap={8}
                            >
                                <InputComponent
                                    size={44}
                                    name={"address1"}
                                    value={`${
                                        address?.no ? `(${address?.no}) ` : ""
                                    }${address?.road || ""}`}
                                    placeholder="도로명 주소"
                                    disabled
                                />
                                <InputComponent
                                    name={"address2"}
                                    value={detailValue}
                                    size={44}
                                    placeholder="상세주소"
                                    onChange={onAddress}
                                    disabled={disabled}
                                />
                            </Box>
                        </Box>
                    ) : (
                        <p className="value">{`${
                            address?.no ? `(${address?.no})` : ""
                        }${address?.road || ""} ${address?.detail || ""}`}</p>
                    )}
                </LabelBox>
            </Wrapper>

            <ModalAddress
                onSuccess={({ zipNo, road }) =>
                    onChange({ name, value: zipNo + "|" + road })
                }
                isActive={isActive}
                onClose={() => setIsActive(false)}
            />
        </>
    );
}
export default Address;
