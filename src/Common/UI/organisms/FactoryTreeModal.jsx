import React, { forwardRef } from 'react';
import useTree from '../../../Hooks/useTree';
import Icon from '../../atoms/IconBox';
import { Wrapper } from './styled';
import TreeChildComponet from './TreeChildComponet';

const FactoryTreeComponent = forwardRef(({ data, onClick }, ref) => {
    const { onClickMenu } = useTree();

    const onClickTree = (e, id) => {
        onClickMenu(e, id);
        onClick(id);
    };
    const tree = (data, index = 0) => {
        return (
            <ul className={index === 0 ? 'parent' : ''}>
                {data?.map((i, idx) => {
                    const { id, name } = i;
                    const childTeams = data?.filter((j) => j?.parentID === id);
                    const haveChild = childTeams && childTeams.length > 0;
                    return (
                        (index > 0 || i?.parentID === null) && (
                            <TreeChildComponet
                                key={idx}
                                className={`depth${index}`}
                            >
                                {haveChild && (
                                    <input
                                        id={id}
                                        className="toggleBtn"
                                        type="checkbox"
                                    />
                                )}
                                <div
                                    className={`${
                                        i.isActive ? 'box active' : 'box'
                                    }`}
                                >
                                    {index === 0 && <Icon.Company size="12" />}
                                    <span
                                        className={`${
                                            haveChild ? 'tit' : 'tit last'
                                        }`}
                                    >
                                        <button
                                            onClick={(e) => onClickTree(e, i)}
                                            type="button"
                                        >
                                            {name}
                                        </button>
                                        {/* <button onClick={(e)=>onClickTree(e, i.team)} type="button">{teamName}</button> */}
                                    </span>
                                    {haveChild && (
                                        <label htmlFor={id}>
                                            <Icon.Arrow skin="main" size="8" />
                                        </label>
                                    )}
                                </div>

                                {haveChild ? (
                                    <>{tree(childTeams, index + 1)}</>
                                ) : null}
                            </TreeChildComponet>
                        )
                    );
                })}
            </ul>
        );
    };
    return (
        <Wrapper ref={ref} className="treeMenu">
            {tree(data)}
        </Wrapper>
    );
});

FactoryTreeComponent.defaultProps = {
    onClick: () => {},
};

export default FactoryTreeComponent;
