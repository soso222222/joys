import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ sizeX, sizeY, ratio, isPreWrap, align }) => `
    .input {
        flex: 1 1;
    }
    .imgSlide {
        width: 100%;
        height: 100%;
    }
    .upload {
        ${ratio ? `aspect-ratio:${ratio};` : ''}
        width: ${sizeX};
        height: ${sizeY};
    }
    .value {
        white-space: ${isPreWrap ? 'pre-wrap' : 'inherit'};
        color:var(--G_700);
        ${isPreWrap ? 'height: max-content' : ''};
        ${align ? `justify-content: ${align}` : ''};
    }
    &.logoBox {
        ${ratio ? `aspect-ratio:${ratio};` : ''}
    }
`}
`;

export const ColumnWrapper = styled.div`
    ${({ column, fill, margin }) => {
        if (fill)
            return css`
                width: 100%;
            `;
        return `
    display: flex;
    width: 100%;
    > div {
        width:calc(100% / ${column} - ${Math.floor(
            margin ? 0 : 32 / column,
        )}rem);
        &:not(:last-child){
            ${
                margin
                    ? `margin: ${margin}`
                    : `margin-right:${Math.floor(32 / column) * 2}rem`
            }
        }
    }
`;
    }}
`;

export const FormBoxWrapper = styled.div`
    ${({ styles }) => `
    .titleWrapper {
        display: flex;
        justify-content: space-between;

        padding: 0;
    }
    .formSubTitle {
        margin-bottom: 20rem;
        font-size: 16rem;
        font-weight: 400;
        color: var(--G_500);
    }
    .formTitle {
        margin-bottom: 24rem;
        font-size: 20rem;
        line-height:1.4;
        font-weight: 500;
        color: var(--G_900);
        span {
            font-weight: 400;
            font-size: 14rem;
            line-height: 172%;
            letter-spacing: -0.03em;
            // color: var(--G_500);
        }
    }
    .alert {
        color: var(G_300);
        font-size: 14rem;
        font-weight: 400;
    }
    .sub {
        margin-bottom: 8rem;
        font-weight: 400;
        font-size: 16rem;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: var(--G_500);
    }
    ${styles || ''}
`}
`;

export const FormBoxInner = styled.div`
    ${({ bg, pd }) => `
padding: ${bg ? pd : 0};
background: ${bg ? 'var(--White)' : 'transparent'};
box-shadow: ${bg ? 'var(--Elevation_001)' : 'none'};
border-radius: 12rem;
.columnBox {
    + .columnBox {
        margin-top: 30rem;
    }
}
`}
`;

export const FormInnerBox = styled.div`
    .subTit {
        margin-bototm: 26rem;
    }
`;
export const ValueText = styled.div`
    height: ${(props) => (props.isPreLine ? 'auto' : '44rem')};
    display: flex;
    padding-left: 4rem;
    align-items: center;
    white-space: ${(props) => (props.isPreLine ? 'pre-line' : 'inherit')};
`;

export const BirthBox = styled.div`
    display: flex;
    .lastNum {
        flex: 1;
        .input {
            width: 104rem;
            flex: 0 0 104rem;
        }
    }
    .input {
    }
    .dash {
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: var(--G_800);
    }
    .dotBox {
        flex: 1;
        span {
            width: 4px;
            height: 4px;
            background: var(--G_500);
            border-radius: 100px;
        }
    }
`;

export const TagWrapper = styled.div`
    position: relative;
    width: 100%;
    gap: 12rem;
    display: flex;
    flex-flow: wrap;
    gap: 8rem 12rem;
    .dragModal {
        display: ${(props) => (props.isActive ? 'flex' : 'none !important')};
        position: absolute;
        right: -70rem;
        top: auto;
        bottom: 0;
        height: auto;
        width: 372rem;
        box-shadow: var(--Elevation_002);
        .inner {
            height: auto;
            background: var(--White);
        }
        .scroll {
            position: static;
            width: 100%;
            height: 504rem;
            overflow-y: auto;
        }
    }
    .more {
    }
`;

export const BottomButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 160rem 0;
    gap: 80rem;
    .button {
        width: 320rem;
    }
    strong {
        margin-bottom: 8rem;
        font-weight: 500;
        font-size: 20rem;
        line-height: 172%;
        text-align: center;
        color: var(--G_900);
    }
`;
