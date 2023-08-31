import React, { useState } from 'react';
import styled from 'styled-components';
import Box from 'Common/UI/atoms/Box';
import Icon from 'Common/UI/atoms/IconBox';
import { useEffect } from 'react';
import Modal from '../molecules/Modal';
import Button from 'Common/UI/atoms/Button';
import InputComponent from 'Common/UI/atoms/Input/InputComponent';
import moment from 'moment';
const SearchDateModal = ({
  isActive,
  onSuccess,
  onClose,
  onCancel,
  status,
  setting,
}) => {
  const [motion, setMotion] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [value, setValue] = useState();

  const controller = {
    timer: setTimeout(() => setMotion(!motion), 700),
    start: () => controller.timer,
    cancel: () => clearTimeout(controller.timer),
  };
  const close = () => {
    onClose && onClose();
  };
  const success = () => {
    onSuccess && onSuccess();
  };
  const cancel = () => {
    onCancel && onCancel();
  };
  useEffect(() => {
    isActive && setMotion(isActive);
    controller.cancel();
    controller.start();
  }, [isActive]);
  const setAll = () => {
    setStartDate(null);
    setEndDate(null);
    setValue('전체');
  };

  const setAfterMonth = (month) => {
    const now = new Date();
    const startDate = new Date();
    const endDate = new Date(now.setMonth(now.getMonth() + month));
    const date = `${moment(startDate).format('YYYY.MM.DD')} ~ ${moment(
      endDate
    ).format('YYYY.MM.DD')}`;
    setStartDate(startDate);
    setEndDate(endDate);
    setting({ ...status, startDate, endDate, date });
    setValue(date);
  };

  return (
    <Modal
      cancelText={'취소'}
      title={'작업 검색'}
      onSuccess={success}
      isActive={isActive}
      onClose={close}
      onCancel={cancel}
      close>
      <Box top={20} bottom={40} column gap={8}>
        <Box gap={2}>
          <InputComponent
            name="search"
            value={status.search}
            onChange={(e) => {
              setting({ ...status, search: e.target.value });
            }}
            placeholder="키워드를 통해 검색하세요."
            leftIcon={<Icon.Search size={'xs'} />}
          />
          <Button size={'md'}>검색</Button>
        </Box>
      </Box>
      <Box column gap={16}>
        <h5>작업 일시</h5>
        <Box gap={8} top={'auto'}>
          <Button
            Theme={'line'}
            fill
            size={'md'}
            onClick={() => setAfterMonth(1)}>
            1개월
          </Button>
          <Button
            Theme={'line'}
            fill
            size={'md'}
            onClick={() => setAfterMonth(3)}>
            3개월
          </Button>
          <Button
            Theme={'line'}
            fill
            size={'md'}
            onClick={() => setAfterMonth(6)}>
            6개월
          </Button>
          <Button
            Theme={'line'}
            fill
            size={'md'}
            onClick={() => setAfterMonth(12)}>
            12개월
          </Button>
          <Button Theme={'line'} fill size={'md'} onClick={() => setAll()}>
            전체
          </Button>
        </Box>
        <InputComponent
          name="date"
          placeholder="기간을 선택해 주세요"
          datepicker
          monthsShown={2}
          selectsRange
          value={value}
          startDate={startDate}
          endDate={endDate}
          onChange={(e) => {
            setting({ ...status, date: e.target.value });
          }}
          setStartDate={(date) => {
            setting({ ...status, startDate: date });
            setStartDate(date);
          }}
          setEndDate={(date) => {
            setting({ ...status, endDate: date });
            setEndDate(date);
          }}
        />
      </Box>
      <Box
        valign="top"
        style={`
                    width:100%;
                    height:calc(70vh - 286rem);
                    overflow-x:scroll;
                    overflow-y:scroll;
                    &::-webkit-scrollbar {
                        width: 4rem;
                        height:4rem;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: #3C69FC;
                        border-radius: 20rem;
                    }
                `}
        left={32}
        right={32}>
        <Box width="100%" gap={16} height="max-content" column></Box>
      </Box>
    </Modal>
  );
};
SearchDateModal.defaultProps = {
  setting: () => {},
  status: {},
  onClose: () => {},
};

export default SearchDateModal;
