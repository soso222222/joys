import React, { useEffect } from 'react';
import {
    SearchList,
    LeftSectoin,
    Inner,
    Tip,
    RightSection,
    Wrapper,
    SelectInfo,
} from './styled';
import Modal from '../Modal/Modal';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button';
import InputComponent from '../../atoms/Input/InputComponent';
import { useState } from 'react';
import Icon from '../../atoms/IconBox';
import { useMutation } from 'react-query';
import { getExternalTeam, createrExternalTeam } from '../../../Service/Partners';
import useSearch from '../../../Hooks/useSearch';
function FindExternal({
    isActive,
}) {
    const { searchSlice, searchMatching, onSearch, searchValue, resetSearch } =
        useSearch();
    const [data, setData] = useState({
        temp: [],
        list: [],
    });
    const [selected, setSelected] = useState();
    const mutation = useMutation(getExternalTeam, {
        onSuccess: (data, variables, context) => {
            setData({
                list: [],
                temp: data,
            });
        },
    });

    const addMutation = useMutation(createrExternalTeam, {
        onSuccess: (data, variables, context) => {
            alert('협력사 추가 성공');
        },
        onerror: () => {
            console.log('error')
        }
    });

    const searchFilter = () => {
        const filter = data?.temp?.filter((i) => searchMatching([i.siteName]));
        setData({
            ...data,
            list: filter,
        });
    };

    const onClick = (item) => {
        setSelected(item);
    };
    useEffect(() => {
        mutation.mutate({
            userID: 1,
            siteID: 1,
            IsExclude:true,
        });
    }, []);
 
    return (
        <Modal
            isActive={isActive}
            successText="등록하기"
            onSuccess={() => {
                if(!selected) return;
                addMutation.mutate({
                    userID: 1,
                    siteID: 1,
                    parentTeamID:null,
                    linkedSiteID:null,
                    teamName: selected.siteName,
                })
            }}
            leftContent={
                <span className="dsec">
                    ※ 선택한 업체에게 정보 제공 동의 요청 알림이 발송돼요.
                </span>
            }
        >
            <Wrapper>
                <LeftSectoin>
                    <Title className={'modalTit'} size="xs">
                        업체 검색
                    </Title>
                    <InputComponent
                        value={searchValue}
                        onChange={onSearch}
                        name={'search'}
                        leftIcon={
                            <button onClick={() => searchFilter()}>
                                <Icon.Search size="xxs" />
                            </button>
                        }
                        placeholder={'업체를 검색하세요'}
                    />
                    <Inner>
                        {data.list.length > 0 ? (
                            <SearchList>
                                {data.list.map((i, idx) => {
                                    const title = searchSlice(i.siteName);
                                    return (
                                        <button
                                            onClick={() => onClick(i)}
                                            key={idx}
                                            className="list"
                                        >
                                            <i></i>
                                            <p className="name">{title}</p>
                                        </button>
                                    );
                                })}
                            </SearchList>
                        ) : (
                            <Tip>
                                <Title
                                    size={'xs'}
                                    className={'tipTit'}
                                    color={'P_500'}
                                    weight="500"
                                >
                                    검색 Tip
                                </Title>
                                <Text.Dot>업체 철자 확인하기</Text.Dot>
                                <Text.Dot>검색 단어 수 줄이기</Text.Dot>
                                <Text.Dot>한글로 검색하기</Text.Dot>
                            </Tip>
                        )}
                    </Inner>
                    <Button size={'sm'} Theme={'line'} fill>
                        스마플 회원사가 아니에요
                    </Button>
                </LeftSectoin>
                <RightSection>
                    <div className="titleBox">
                        <strong className="tit">
                            {selected?.siteName}
                        </strong>
                    </div>
                    {selected ? (
                        <>
                            <div className='textBox'>
                                <strong>대표자</strong>
                                <p></p>
                            </div>
                            <div className='textBox'>
                                <strong>사업자 등록번호</strong>
                                <p>{selected?.corporateRegistrationNumber}</p>
                            </div>
                            <div className='textBox'>
                                <strong>대표 번호</strong>
                                <p></p>
                            </div>
                            <div className='textBox'>
                                <strong>팩스 번호</strong>
                                <p></p>
                            </div>
                            <div className='textBox'>
                                <strong>소재지</strong>
                                <p>{selected?.address}</p>
                            </div>
                        </>
                    ) : (
                        <SelectInfo>
                            <strong>검색 결과 리스트에서 업체를 선택하세요</strong>
                            <p>스마플을 통해 안전보건 관리 및 활동을<br/>
                                하고 있는 업체의 정보를 확인할 수 있어요</p>
                        </SelectInfo>
                    )}
                </RightSection>
            </Wrapper>
        </Modal>
    );
}

export default FindExternal;
