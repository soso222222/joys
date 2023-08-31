import { useInput } from 'Common/Hooks';
import useAddress from 'Common/Hooks/useAddress';
import Box from 'Common/UI/atoms/Box';
import Button from 'Common/UI/atoms/Button';
import Icon from 'Common/UI/atoms/IconBox';
import InputComponent from 'Common/UI/atoms/Input/InputComponent';
import Text from 'Common/UI/atoms/Text/Text';
import PaginationComponent from 'Common/UI/molecules/Pagination/PaginationComponent';
import Scroll from 'Common/UI/molecules/Scroll';
import React from 'react';
import Modal from '../Modal/Modal';
import AddressList from './AddressList';
import { ListWrapper, TextInfo, TipBox, TotalSeach } from './styled';

function ModalAddress({ onSuccess, onClose, isActive }) {
    const { getAddress, addressState, onClick, onClickIndex, selectItem } =
        useAddress();
    const { state, onChange } = useInput();

    return (
        <Modal
            title="주서검색"
            subTit={'클릭하면 자동으로 도로명 주소가 입력됩니다.'}
            size="lg"
            isActive={isActive}
            successText={false}
            close={false}
            onClose={onClose}
        >
            <Box bottom={'26rem'}>
                <InputComponent
                    onKeyPress={() => getAddress(state?.address)}
                    onChange={onChange}
                    name="address"
                    value={state?.address}
                    leftIcon={
                        <button>
                            <Icon.Search size="14" />
                        </button>
                    }
                    placeholder={'검색어를 입력하세요.'}
                />
                <Button
                    onClick={() => getAddress(state?.address)}
                    gap={8}
                    size="sm"
                >
                    검색
                </Button>
            </Box>
            <ListWrapper>
                <TotalSeach>
                    총 <span>{addressState.totalCount}</span>건
                </TotalSeach>
                <Scroll fix height={'356rem'}>
                    {addressState.addresses.length > 0 ? (
                        <>
                            <div style={{ padding: '3rem' }}>
                                <AddressList
                                    onClick={(item) => {
                                        onClick(item);
                                        onSuccess && onSuccess(item);
                                        onClose && onClose();
                                    }}
                                    list={addressState.addresses}
                                />
                            </div>
                            <PaginationComponent
                                pageLength={Math.ceil(
                                    addressState.totalCount /
                                        addressState.countPerPage,
                                )}
                                onClick={onClickIndex}
                                seq={addressState.currentPage - 1}
                            />
                        </>
                    ) : (
                        <TipBox>
                            <Box align={'center'} column gap={'20rem'}>
                                <strong>Tip</strong>
                                <p>
                                    아래와 같은 조합으로 검색하시면
                                    <br />
                                    더욱 정확한 결과가 검색됩니다.
                                </p>
                                <TextInfo>
                                    <Text.Dot>도로명 + 건물번호</Text.Dot>
                                    <span>예) 청파로 235</span>
                                </TextInfo>
                                <TextInfo>
                                    <Text.Dot>지역명(동/리) + 번지</Text.Dot>
                                    <span>예) 서계동 239</span>
                                </TextInfo>
                                <TextInfo>
                                    <Text.Dot>지역명(동/리) + 건물명</Text.Dot>
                                    <span>예) 서계동 주연빌딩</span>
                                </TextInfo>
                            </Box>
                        </TipBox>
                    )}
                </Scroll>
            </ListWrapper>
        </Modal>
    );
}

export default ModalAddress;
