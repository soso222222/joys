import Box from "Common/UI/atoms/Box";
import Button from "Common/UI/atoms/Button/Button";
import CheckBox from "Common/UI/atoms/CheckBox";
import Icon from "Common/UI/atoms/IconBox";
import Tag from "Common/UI/atoms/Tag";
import DragModal from "Common/UI/molecules/DragModal";
import LabelBox from "Common/UI/molecules/LabelBox";
import SelectItem from "Common/UI/molecules/SelectTable/SelectItem";
import React from "react";
import { TagWrapper, Wrapper } from "./styled";

const FormBadge = ({
    label,
    option,
    value = option,
    isEdit = true,
    onDelete,
    btn = true,
    sizeY = 44,
    btnName,
    onClick,
    size = "lg",
    disabled,
    side = "leftIcon",
    maxLength = 3,
}) => {
    return (
        <Wrapper>
            <LabelBox label={label}>
                <Box height={sizeY} gap={12} style={`flex-flow:wrap;`}>
                    {value ? (
                        value?.title ? (
                            <Tag
                                onClick={
                                    onDelete && (() => onDelete(value?.value))
                                }
                                rightIcon={<Icon.Closer size={12} />}
                                isDelete={isEdit && value?.isControll}
                                size={32}
                            >
                                {value.title}
                            </Tag>
                        ) : (
                            <TagWrapper>
                                {value?.map(
                                    (
                                        { title, value: id, isControll = true },
                                        key
                                    ) => {
                                        if (key < maxLength)
                                            return (
                                                <Tag
                                                    onClick={() => onDelete(id)}
                                                    rightIcon={
                                                        <Icon.Closer
                                                            size={12}
                                                        />
                                                    }
                                                    isDelete={
                                                        isEdit && isControll
                                                    }
                                                    size={32}
                                                    key={key}
                                                >
                                                    {title}
                                                </Tag>
                                            );
                                    }
                                )}
                                {value?.length > maxLength && (
                                    <>
                                        <Button size="xxxs">더보기</Button>
                                        <DragModal
                                            title={"title"}
                                            isActive={true}
                                            cancelText="삭제"
                                            className={"dragModal"}
                                        >
                                            {value
                                                ?.filter(
                                                    (_, idx) => idx > maxLength
                                                )
                                                .map((i, idx) => (
                                                    <SelectItem
                                                        key={idx}
                                                        item={i}
                                                    />
                                                ))}
                                        </DragModal>
                                    </>
                                )}
                            </TagWrapper>
                        )
                    ) : undefined}
                    {isEdit && btn && (
                        <Button
                            Theme="line"
                            onClick={onClick}
                            leftIcon={
                                side === "leftIcon" && <Icon.Search size={12} />
                            }
                            rightIcon={
                                side === "rightIcon" && (
                                    <Icon.Search size={12} />
                                )
                            }
                            disabled={disabled}
                            size={size}
                        >
                            {btnName || "선택하기"}
                        </Button>
                    )}
                </Box>
            </LabelBox>
        </Wrapper>
    );
};

export default FormBadge;
