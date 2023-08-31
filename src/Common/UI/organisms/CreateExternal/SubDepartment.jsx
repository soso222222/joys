import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Wrapper } from './styled';
import Modal from '../Modal/Modal';
import InputComponent from '../../atoms/Input/InputComponent';
import Icon from '../../atoms/IconBox';
import Scroll from '../../molecules/Scroll';
import IconButton from '../../atoms/IconButton';
import TextButton from '../../atoms/TextButton';
import Box from '../../atoms/Box';
import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
function SubDepartment({ isActive }) {
    const [data, setData] = useState([
        {
            title: '',
            id: uuid(),
            name:`department-${uuid()}`
        },
    ]);

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        getValues,
        reset,
        // Read the formState before render to subscribe the form state through the Proxy
        formState: { errors },
    } = useForm();

    const onChange = (e, idx) => {
        const {
            target: { value, name },
        } = e;
        setData(data.map((i) => (i.id === idx ? { ...i, title: value } : i)));
        setValue(name, value);
    };
    
    const onCreate = useCallback(e => {
        const { name, value } = e.target;
        setData(data => ([
          ...data,
          {
            title: '',
            id: uuid(),
            name:`department-${uuid()}`
          }
         ]));
      }, []);
    const onDelete = useCallback((name , idx) => {
        setData(data => (data.filter((i) => i.id !== idx)));

    }, []);

    const onSubmit = (data) => console.log(data, 'onSubmit');
    return (
        <Modal
            isActive={isActive}
            title={'하위 항목 추가'}
            close={false}
            subTit={'유엔이 TF팀(트리에서 선택한 항목명이 표출됩니다.)'}
            successForm={'department'}
            leftContent={
                <TextButton onClick={onCreate} size="md">
                    항목 추가
                </TextButton>
            }
            size="sm"
        >
            <Scroll height={'680rem'}>
                {/* <form id="department" onSubmit={handleSubmit(onSubmit)}> */}
                    <Box column gap={24}>
                        {data.map((i, idx) => {
                            return (
                                <Box key={idx} valign={'top'} className="item">
                                    <InputComponent
                                        value={i.title}
                                        // errors={errors}
                                        // {...register(i.name, {
                                        //     required: '필수 응답 항목입니다.',
                                        // })}
                                        onChange={(e) => onChange(e, i.id)}
                                    />
                                    <IconButton
                                        Theme={'unLine'}
                                        Icon={Icon.Trash}
                                        size="sm"
                                        onClick={(e) => onDelete(`department-${uuid()}`,i.id)}
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                {/* </form> */}
            </Scroll>
        </Modal>
    );
}


export default React.memo(SubDepartment);
