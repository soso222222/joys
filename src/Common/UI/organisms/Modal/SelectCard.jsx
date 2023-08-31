import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { cardData } from '../../molecules/Card/data';
import Card from '../../molecules/Card/Card';
import { CardWrapper } from './styled';

function SelectCard({
    name = 'riskAssessment',
    onClick,
    disabled = [],
    isSelected = [],
    ...props
}) {

    const [state, setState] = useState(cardData[name]);
    const { cardList } = state;
    return (
        <Modal
            size="md"
            isActive={true}
            title={state.title}
            close={false}
            {...props}
        >
            <CardWrapper>
                {cardList.map((i, idx) => {
                    return (
                        <Card
                            onClick={onClick}
                            value={idx}
                            key={idx}
                            disabled={disabled.includes(idx)}
                            isSelected={isSelected.includes(idx)}
                            {...i}
                        />
                    );
                })}
            </CardWrapper>
        </Modal>
    );
}

export default SelectCard;
