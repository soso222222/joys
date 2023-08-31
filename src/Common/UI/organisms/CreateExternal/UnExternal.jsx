import React, { useEffect } from 'react';
import Modal from '../Modal/Modal';
import InputComponent from '../../atoms/Input/InputComponent';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { CreateUnRegisteredExternalTeam } from '../../../Service/Partners';
import Box from '../../atoms/Box';
import CheckBox from '../../atoms/CheckBox';
import useInput from '../../../Hooks/useInput';
import { useForm } from 'react-hook-form';
import { vaildation } from '../../../Vaildation';
function UnExternal() {
    const { onChange, state } = useInput({
        siteName: '',
        managerName: '',
        managerPhoneNumber: '',
        managerEmail: '',
    });
    const [isSelect, setIsSelect] = useState('managerPhoneNumber');

    const onClickType = (e) => setIsSelect(e.target.name);

    const addMutation = useMutation(CreateUnRegisteredExternalTeam, {
        onSuccess: (data, variables, context) => {
            alert('협력사 추가 성공');
        },
        onerror: () => {
            console.log('error');
        },
    });

    const {
        register,
        handleSubmit,
        // Read the formState before render to subscribe the form state through the Proxy
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(vaildation.email ,'vaildation.email')
    return (
        <Modal
            isActive={true}
            title="협력사 등록"
            successText="등록하기"
            successForm={'test'}
            close={false}
            onSuccess={() => onSubmit()}
            // onSuccess={() => {
            //     addMutation.mutate({
            //         userID: 1,
            //         siteID: 1,
            //         ...state,
            //     })
            // }}
            leftContent={
                <span className="dsec">
                    ※ 선택한 업체에게 정보 제공 동의 요청 알림이 발송돼요.
                </span>
            }
        >
            <form id="test" onSubmit={handleSubmit(onSubmit)}>
                <Box column gap={'4rem'} bottom={'248rem'}>
                    <InputComponent
                        label={'업체명'}
                        errors={errors}
                        {...register('siteName', {
                            required: '필수 응답 항목입니다.',
                        })}
                    />
                    <InputComponent
                        label={'담당자 이름'}
                        {...register('managerName', {
                            required: '필수 응답 항목입니다.',
                        })}
                        errors={errors}
                        name="managerName"
                    />
                    <InputComponent
                        name={isSelect}
                        errors={errors}
                        {...register(isSelect, 
                            isSelect === 'managerEmail' ?
                            vaildation.email:vaildation.phone
                        )}
                        label={
                            <Box gap="20rem">
                                <CheckBox
                                    name="managerPhoneNumber"
                                    onChange={onClickType}
                                    checked={isSelect === 'managerPhoneNumber'}
                                    type="radio"
                                >
                                    핸드폰 번호
                                </CheckBox>
                                <CheckBox
                                    name="managerEmail"
                                    onChange={onClickType}
                                    checked={isSelect === 'managerEmail'}
                                    type="radio"
                                >
                                    이메일
                                </CheckBox>
                            </Box>
                        }
                    />
                </Box>
            </form>
        </Modal>
    );
}

export default UnExternal;
