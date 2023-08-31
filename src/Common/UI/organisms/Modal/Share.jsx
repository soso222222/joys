import React, { useState } from 'react'
import Icon from '../../atoms/IconBox';
import InputComponent from '../../atoms/Input/InputComponent';
import Modal from './Modal'

function Share({shareLink,...props}) {
    const onClickCopy = () => {
        navigator.clipboard.writeText(shareLink);
        if(props.onSuccess) props.onSuccess();
        alert('복사 성공')
    };
    return (
        <Modal 
            {...props}
            onSuccess={onClickCopy}
            subTit="이 링크는 결과 공표 14일 이후 만료됩니다."
            size={'sm'}
            close={false}
            successText="URL 복사"
            cancelText='닫기'
        >
            <InputComponent readOnly changeValue={shareLink} rightIcon={<Icon.Link  size='13'/>}/>
        </Modal>
    )
}

export default Share