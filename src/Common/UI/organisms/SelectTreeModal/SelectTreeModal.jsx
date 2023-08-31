import React ,{ useState, useEffect} from 'react'
import useTree from '../../../Hooks/useTree'
import TreeComponent from '../../molecules/Tree/TreeComponent';
import SelectTable from '../../molecules/SelectTable/SelectTable';
import useSeletedItems from '../../../Hooks/useSeletedItems';
import SelectItem from '../../molecules/SelectTable/SelectItem';
import styled, { css } from 'styled-components';
import DragModal from '../../molecules/DragModal';
import CheckBox from '../../atoms/CheckBox';
import PaginationComponent from '../../molecules/Pagination/PaginationComponent';
import usePagination from '../../../Hooks/usePagination';
import Overlays from '../../atoms/Overlays';
import InputComponent from '../../atoms/Input/InputComponent';
import Icon from '../../atoms/IconBox';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import useInput from '../../../Hooks/useInput';
import selectGetType from './selectGetType';
import { dataType } from './dataFilter';

function SelectTreeModal({
    title,
    isActive,
    cancelText,
    successText,
    onCancel,
    onSuccess,
    initialState=[],
    type = 'partners'
}) {

    const [ data, setData] = useState([])
    const [ full , setFull] = useState(false);
    const dataFilter = dataType(type)
    const {state, onChange} = useInput();
    const {offset , pages, setPagination} = usePagination();
    const {
        treeData,
        setTreeData,
        selectState,
        setSelectState,
        treeRef,
        treeOnSearch,
    } = useTree();

    const seleteCheckIds = useSeletedItems();

    const get = async () => {
        const {treeDatas, selectData} = await selectGetType(type);
        const tree = await treeDatas(1);
        const selectDataAll = await selectData(1);
        const initData = tree[0].team;
        setTreeData(tree)
        setSelectState(initData)
        setData(selectDataAll)
        seleteCheckIds?.setSelectedData(getSelectList(initData , selectDataAll, tree))
    }

    const getSelectList = (item , selectDataAll , tree) => {
        console.log(item , 'item')
        console.log(selectDataAll , 'selectDataAll')
        console.log(tree , 'tree')
        const data = [];
        const getChildItem = (team , child) => {
            data.push(...selectDataAll.filter( i => i[dataFilter.id] === team.id))
            for(let i=0; i < child.length; i++){
                const item = child[i];
                data.push(...selectDataAll.filter( i => i[dataFilter.id] === item.team.id))
                if(item.childTeams.length > 0) getChildItem(item.team ,item.childTeams)

            }
        }
        const getChildTree = (item ,data) =>{
            for(let i = 0; i < data.length; i++){
                const node = data[i]
                console.log(item ,node)
                if(item.id === node.team.id) return getChildItem(node.team , node.childTeams)
                if(node.childTeams.length > 0) getChildTree(item , node.childTeams)
            }
        }
        getChildTree(item, tree)
        return data;
    }

    useEffect( () => {
        seleteCheckIds?.setState(initialState)
    },[isActive])
    useEffect( () => {
        setPagination(seleteCheckIds?.selecteds.data.length)
    },[seleteCheckIds?.selecteds.data])



    useEffect( () => {
        get();
    },[])
    useEffect( () => {
        if(!selectState) return 
        seleteCheckIds?.setSelectedData(getSelectList(selectState , data, treeData))
    },[selectState, treeData])
    



    const submit = () => {
        onSuccess&&onSuccess({...seleteCheckIds,selectState});
        onCancel&&onCancel()
    }
    return (
        <Overlays onClose={onCancel} isActive={true}>
            <Wrapper>
                <Inner>
                    <TreeSection>
                        <strong>{title}</strong>
                        <InputComponent
                            name="treeSearch"
                            placeholder={'부서명/업체명 입력'}
                            onChange={onChange}
                            onKeyPress={()=>treeOnSearch(state?.treeSearch)}
                            leftIcon={
                                <button onClick={()=>treeOnSearch(state?.treeSearch)} type="button"><Icon.Search size='xxs'/></button>
                            }
                        />
                        <TreeComponent ref={treeRef} onClick={setSelectState} data={treeData}/>
                    </TreeSection>
                    <SelectSection className={seleteCheckIds?.checkedIds?.length > 0 ? 'active' : ''}>
                        <SelectTable
                            onSearch={seleteCheckIds?.onSearch}
                            title={selectState?.teamName}
                            list={seleteCheckIds?.selecteds.data.slice(offset , offset + pages.pageView).map(i => i)}
                            className={'selectTable'}
                            {...seleteCheckIds}
                        />
                        <PaginationComponent position='static' {...pages}/>
                        <DragModal
                            isActive={seleteCheckIds?.checkedIds?.length > 0}
                            full={full}
                            onFull={() => setFull(!full)}
                            title={<CheckBox  onChange={seleteCheckIds?.onClickCurrentAll} checked={seleteCheckIds?.isCurrentAll} size={'xxs'}>{`${seleteCheckIds?.checkedIds?.length}명 선택`}</CheckBox>}
                            cancelText="삭제"
                            onCancel={ () => seleteCheckIds?.selectedDelete()}
                        >
                            {
                                    seleteCheckIds?.checkedIds?.map((i, idx) =>  <SelectItem 
                                    key={idx}
                                    item={i}
                                    checkedIds={seleteCheckIds?.currentIds}
                                    onClick={seleteCheckIds?.onClickCurrent}
                                />)
                            }
                        </DragModal>
                    </SelectSection>
                </Inner>
                <Box top={32} align={'right'} gap={8}>
                    <Button onClick={onCancel} Theme="line" size="sm">{cancelText || '취소'}</Button>
                    <Button onClick={submit} size="sm">{successText || '요청하기'}</Button>
                </Box>
            </Wrapper>
        </Overlays>
    )
}

const Wrapper = styled.div`
    width:700px;
    padding:32px;
    background: #F6F8FF;
    border-radius: 12px;
`
const Inner = styled.div`
    display:flex;
    .selectTable {
        display: flex;
        flex-direction: column;
        height:100%;
        flex: 1 1;
        transition: all .2s;
    }

`
const TreeSection = styled.div`
    width:240px;
    margin-right:24px;
    strong{
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.03em;
        color: #1A1A1A;
        + div {
            margin:24px 0 12px 0;
        }
    }
    .treeMenu {
        height:400px;
        overflow: auto;
    }
`
const SelectSection = styled.div`
    display: flex;
    position:relative;
    flex: 1 1 auto;
    flex-direction: column;
    height:544px;
    &.active {
        .selectTable {
            height:50%;
        }
    }
    .pagination {
        padding:10px 0;
    }
   
    ${props => {
        if(props.isActive) {
            return css`

            `
        }
    }}
`
export default SelectTreeModal