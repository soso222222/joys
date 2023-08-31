import React from 'react';
import { BottomGroup, Content, InnerBox, Sub, Title, Wrapper } from './styled';
import Overlays from '../../atoms/Overlays';
import TextButton from '../../atoms/TextButton';
import Icon from '../../atoms/IconBox';
import Confirm from './Confirm';
import Share from './Share';
import SelectCard from './SelectCard';

function Modal({
    isActive,
    isBlind,
    title,
    titleIcon,
    subTit,
    children,
    onSuccess,
    onClose,
    successText = '확인',
    cancelText = '취소',
    successForm,
    leftContent,
    close = true,
    timer,
    zIndex,
    blur,
    className,
    size,
}) {
    return (
        <Overlays
            isActive={isActive}
            isBlind={isBlind}
            blur={blur}
            timer={timer}
            zIndex={zIndex}
            onClose={onClose}
        >
            <Wrapper className={className} size={size}>
                <InnerBox>
                    {title ? (
                        <Title>
                            {titleIcon}
                            {title}
                            {close && (
                                <button
                                    onClick={() => onClose()}
                                    type="button"
                                    className="btnClose"
                                >
                                    <Icon.Closer size="xxs" />
                                </button>
                            )}
                        </Title>
                    ) : (
                        ''
                    )}
                    {subTit ? <Sub>{subTit}</Sub> : ''}
                    {children ? <Content className='modalContent'>{children}</Content> : ''}
                </InnerBox>
                <BottomGroup>
                    {leftContent}
                    <div className="rightBtn">
                        {cancelText && (
                            <TextButton size="md" onClick={onClose}>
                                {cancelText}
                            </TextButton>
                        )}
                        {successText && (
                            <TextButton
                                size="md"
                                type="submit"
                                form={successForm}
                                Theme={'primary'}
                                onClick={onSuccess}
                            >
                                {successText}
                            </TextButton>
                        )}
                    </div>
                </BottomGroup>
            </Wrapper>
        </Overlays>
    );
}
Modal.Confirm = Confirm;
Modal.Share = Share;
Modal.SelectCard = SelectCard;
export default Modal;
