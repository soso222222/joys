import { ImgLogoUrl, SERVER_URL } from "Common/Env";
import { useUploadFile } from "Common/Hooks";
import Box from "Common/UI/atoms/Box";
import FileUploadComponent from "Common/UI/molecules/FileUpload/FileUploadComponent";
import ImgSlideComponent from "Common/UI/molecules/ImgSlide/ImgSlideComponent";
import LabelBox from "Common/UI/molecules/LabelBox";
import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";

function LogoBox({
    label,
    isEdit,
    width = 200,
    height = 200,
    value,
    onChange,
    onDelete,
}) {
    const [logoImg, setLogoImg] = useState([]);
    const { onChangeFileLoad, onDeleteFile, fileState } = useUploadFile();
    const onChangeState = (e, date) => {
        onChangeFileLoad(e);
        if (onChange) onChange(e, date);
    };
    const valueFilter = (data) => {
        return { url: SERVER_URL + data };
    };

    useEffect(() => {
        setLogoImg(
            fileState.length ? fileState : value ? [valueFilter(value)] : []
        );
    }, [fileState, value]);

    useEffect(() => {
        !isEdit && onDeleteFile(fileState[0]?.id);
    }, [isEdit]);

    const setDelete = (id) => {
        onDeleteFile(id);
        onDelete && onDelete();
    };

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
        <Wrapper sizeX={valueSet(width)} sizeY={valueSet(height)}>
            <LabelBox label={label}>
                {isEdit && logoImg.length === 0 ? (
                    <FileUploadComponent
                        btnSize={"sm"}
                        onChange={onChangeState}
                        className={"upload"}
                    />
                ) : (
                    <Box width={width} height={height}>
                        <ImgSlideComponent
                            isDelete={isEdit}
                            onDelete={setDelete}
                            pagination
                            navigation
                            slide={logoImg}
                        />
                    </Box>
                )}
            </LabelBox>
        </Wrapper>
    );
}

export default LogoBox;
