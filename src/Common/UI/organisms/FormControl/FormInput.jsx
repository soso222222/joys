import Box from 'Common/UI/atoms/Box';
import InputComponent from 'Common/UI/atoms/Input/InputComponent';
import LabelBox from 'Common/UI/molecules/LabelBox';
import React from 'react';
import FormAddress from './FormAddress';
import FormBirth from './FormBirth';
import FormCustom from './FormCustom';
import FormBadge from './FormBadge';
import FormCheckBox from './FormCheckBox';
import FormDropInput from './FormDropInput';
import FormDropList from './FormDropList';
import { Wrapper } from './styled';

function FormInput({
    label,
    isEdit = true,
    size = 44,
    value,
    btn,
    row = false,
    align = false,
    fontSize,
    gap,
    back,
    ...props
}) {
    return (
        <Wrapper
            className="formInput"
            isPreWrap={props?.isPreWrap}
            align={align}
        >
            <LabelBox
                gap={gap}
                fontSize={fontSize}
                back={back}
                label={label}
                row={row}
            >
                {isEdit ? (
                    <Box gap={8} style={row && `flex: 1;`}>
                        <InputComponent
                            fontSize={fontSize}
                            size={size}
                            value={value}
                            {...props}
                        />
                        {btn}
                    </Box>
                ) : (
                    <p className="value">{value || '-'}</p>
                )}
            </LabelBox>
        </Wrapper>
    );
}
FormInput.Address = FormAddress;
FormInput.Custom = FormCustom;
FormInput.Badge = FormBadge;
FormInput.DropBox = FormDropList;
FormInput.DropInput = FormDropInput;
FormInput.CheckBox = FormCheckBox;
FormInput.Birth = FormBirth;
export default FormInput;
