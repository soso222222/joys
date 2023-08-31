import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
`

export const LeftSectoin = styled.div`
    width:240rem;
    flex:0 0 auto;
    margin-right:24rem;
    .modalTit {
        margin-bottom:28rem;
    }
`
export const RightSection = styled.div`
    width:100%;
    .titleBox {
        padding:10rem 12rem;
        margin-bottom:20rem;
        border-bottom:1px solid var(--G_800)
    }
    .tit {
        display:flex;
        width:100%;
        min-height:24rem;
        font-weight: 400;
        font-size: 14rem;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: var(--G_800);
    }
    .textBox {
        padding-left:12rem;
        strong{
            font-weight: 400;
            font-size: 14rem;
            line-height: 172%;
            letter-spacing: -0.03em;
            color: var(--G_500);

        }
        p{
            margin-top:4rem;
            font-weight: 400;
            font-size: 14rem;
            line-height: 172%;
            letter-spacing: -0.03em;
            color: var(--G_700);
        }
        + .textBox {
            margin-top:24rem;
        }
    }
`

export const Inner = styled.div`
    margin-bottom:8rem;
    height:404rem;
    display:flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    
`

export const SearchList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top:8rem;
    .list {
        display:flex;
        align-items: center;
        padding:10rem 20rem;
        transition: all .2s;
        .name {
            ${({theme:{ellipsis}}) => {
                return ellipsis(1);
            }}
            font-weight: 500;
            font-size: 14rem;
            line-height: 172%;
            letter-spacing: -0.03em;
            color: var(--G_700);
            span {
                color:var(--P_500);
            }
        }
        i {
            width:36rem;
            height:36rem;
            margin-right:8rem;
            border-radisu:100px;
        }
        + .list {
            margin-top:8rem;
        }
        &:hover {
            background: var(--P_60);
            border-radius: 8px;
        }
    }
`
export const Tip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .tipTit {
        margin-bottom:16rem;
    }
`


export const SelectInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    strong {
        font-weight: 400;
        font-size: 14rem;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: var(---G_800);
    }
    p {
        margin-top:8rem;
        font-weight: 400;
        font-size: 12rem;
        line-height: 170%;
        letter-spacing: -0.03em;
        color: var(--G_500);
    }
`