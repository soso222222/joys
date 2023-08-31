import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ size, theme: { modal } }) => {
        const modalSize = size ? `${modal.size[size]}rem` : '700rem';
        return css`
            width: ${modalSize};
        `;
    }}
    box-shadow:var(--Elevation_008);
    border-radius: 12rem;
    background-color: var(--White);
`;
export const InnerBox = styled.div`
    padding: 32rem;
`;

export const Content = styled.div``;
export const Title = styled.div`
    display: flex;
    gap: 14rem;
    font-weight: 500;
    font-size: 20rem;
    line-height: 172%;
    letter-spacing: -0.03em;
    color: var(--G_900);
    .btnClose {
        margin-left: auto;
    }
    + .modalContent {
        margin-top:28rem;
    }
`;
export const Sub = styled.div`
    margin-top: 8rem;
    font-weight: 400;
    font-size: 14rem;
    line-height: 172%;
    letter-spacing: -0.03em;
    color: var(--G_500);
    + .modalContent {
        margin-top: 28rem;
    }
`;

export const BottomGroup = styled.div`
    display: flex;
    padding: 12rem 38rem;
    background-color: var(--G_25);
    border-radius: 0 0 12rem 12rem;
    .rightBtn {
        display: flex;
        gap: 52rem;
        margin-left: auto;
    }
    .dsec {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14rem;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: var(--G_300);
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    gap: 32rem;
`;

