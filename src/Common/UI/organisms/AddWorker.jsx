import React, { useState } from "react";
import styled, { css } from "styled-components";

import Box from "Common/UI/atoms/Box";
import Button from "Common/UI/atoms/Button";
import InputComponent from "Common/UI/atoms/Input/InputComponent";
import Overlays from "../atoms/Overlays";
import SelectTable from "../molecules/SelectTable/SelectTable";
import useInput from "../../Hooks/useInput";

import useSeletedItems from "Common/Hooks/useSeletedItems";
const AddWorker = ({ isActive, onClose, addWorkers }) => {
  const seleteCheckIds = useSeletedItems();

  const close = () => {
    onClose && onClose();
  };

  const [memberItems, setMemberItems] = useState([]);

  const { onChange, multiSetState, state } = useInput({
    MemberName: "",
    PhoneNumber: "",
    Email: "",
  });

  const [open, setOpen] = useState(false);
  const allDelete = () => {
    setMemberItems([]);
    seleteCheckIds.setCheckData([]);
    seleteCheckIds.setSelectedData([]);
  };
  const addAll = async () => {
    await addWorkers(seleteCheckIds.checkedIds);
    allDelete();
    close();
  };
  const add = async () => {
    const memberItem = {
      memberName: state.MemberName,
      teamName: `${state.Email}|${state.PhoneNumber}`,
      ...state,
    };
    await addWorkers([memberItem]);
    multiSetState({ MemberName: "", PhoneNumber: "", Email: "" });
  };

  const addWorker = () => {
    if (!state.MemberName) return;
    const memberItem = {
      id: memberItems.length,
      memberName: state.MemberName,
      teamName: `${state.Email}|${state.PhoneNumber}`,
      ...state,
    };
    multiSetState({ MemberName: "", PhoneNumber: "", Email: "" });
    setMemberItems([...memberItems, memberItem]);
    seleteCheckIds.setCheckData([...seleteCheckIds.checkedIds, memberItem]);
    seleteCheckIds.setSelectedData([...memberItems, memberItem]);
    setOpen(true);
  };
  return (
    <Overlays isActive={isActive} onClose={close}>
      <Wrapper active={open}>
        <Inner active={open}>
          <Box column>
            <Box
              align="side"
              bottom={20}
              style={`h3{display:flex;align-items:center; gap:12rem;}`}
            >
              <strong>근로자 추가</strong>
              <Box gap={8}>
                <Button size="sm" Theme="line" onClick={() => addAll()}>
                  일괄 등록
                </Button>
              </Box>
            </Box>

            <Box column gap={16}>
              <InputComponent
                outLabel="이름"
                name="MemberName"
                value={state.MemberName}
                placeholder="홍길동"
                onChange={onChange}
              />
              <InputComponent
                outLabel={"핸드폰번호"}
                name="PhoneNumber"
                value={state.PhoneNumber}
                placeholder="'-' 제외하고 입력해주세요."
                onChange={onChange}
              />
              <InputComponent
                outLabel={"이메일"}
                name="Email"
                value={state.Email}
                placeholder="이메일을 입력해주세요."
                onChange={onChange}
              />
            </Box>
          </Box>
          <SelectSection
            active={open}
            className={seleteCheckIds.checkedIds.length > 0 ? "active" : ""}
          >
            <Box align="side">
              <span>
                추가한 근로자 총
                <span className="highlighted">
                  {seleteCheckIds.checkedIds.length}
                </span>
                명
              </span>
              <Button
                size="sm"
                Theme="line"
                onClick={() => {
                  allDelete();
                }}
              >
                전체삭제
              </Button>
            </Box>
            <SelectTable
              isTitle={false}
              isSearch={false}
              list={seleteCheckIds.selecteds.data.map((i) => i)}
              className={"selectTable"}
              {...seleteCheckIds}
            />
          </SelectSection>
        </Inner>
        <Box
          align="side"
          top={20}
          bottom={20}
          style={`h3{display:flex;align-items:center; gap:12rem;}`}
        >
          <Button size="sm" Theme="line" onClick={() => addWorker()}>
            추가
          </Button>
          <Box gap={8}>
            <Button size="sm" Theme="line" onClick={close}>
              취소
            </Button>
            <Button size="sm" onClick={() => add()}>
              등록하기
            </Button>
          </Box>
        </Box>
      </Wrapper>
    </Overlays>
  );
};
const TabMenu = styled.aside`
  ${(props) => {
    const { active } = props;
    return `
            position:fixed;
            left:${active ? 100 : -170}rem;
            top:0;
            z-index:29;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:${active > 1 ? 772 : 300}rem;
            height:100vh;
            overflow:${active > 1 ? "" : "hidden"};
            background-color:#fff;
            transition: 0.5s cubic-bezier(${
              active === 0
                ? "0.50, -0.4, 0.750, 0.750"
                : "0.250, 0.250, 0.50, 1.400"
            });
            box-sizing:border-box;
            border-radius: 0 20rem 20rem 0;
            padding:80rem 0rem 40rem ${active > 1 ? 88 : 80}rem;
            box-shadow:${
              active
                ? "4px 4px 12px rgba(0,0,0,0.04)"
                : "4px 4px 12px rgba(0,0,0,0.0)"
            };
        `;
  }}
`;
const Wrapper = styled.div`
  ${(props) => {
    const { active } = props;
    return `
        width:${active ? 640 : 320}px;
        padding: 32px;
        background: #f6f8ff;
        border-radius: 12px;
        transition: 0.5s
        cubic-bezier(
            ${
              active === 0
                ? "0.50, -0.4, 0.750, 0.750"
                : "0.250, 0.250, 0.50, 1.400"
            }
        );
        .highlighted {
            color: #3C69FC;
            font-weight: 500;
            padding-left: 5px;
            padding-right: 5px;
        }
    `;
  }}
`;
const SelectSection = styled.div`
  display: none;
  position: relative;
  flex: 1 1 auto;
  padding-left: 30px;
  flex-direction: column;
  /* height: 544px; */
  /* flex: */
  .selectTable {
    height: 60%;
  }
  &.active {
    .selectTable {
      /* height: 50%; */
    }
  }
  .pagination {
    padding: 10px 0;
  }

  ${(props) => {
    if (props.active) {
      return css`
        display: flex;
      `;
    }
  }}
`;

const Inner = styled.div`
  ${(props) => {
    const { active } = props;
    return `
        display:${active ? "flex" : "inline"};
    `;
  }}
`;
AddWorker.defaultProps = {
  setting: () => {},
  onClose: () => {},
  addWorkers: () => {},
};

export default AddWorker;
