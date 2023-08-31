import styled from "styled-components";

export const ListWrapper = styled.div``;

export const TotalSeach = styled.div`
    margin-bottom: 10rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14rem;
    line-height: 172%;
    letter-spacing: -0.03em;
    color: var(--G_500);
    span {
        margin: 0 4rem;
        color: var(--P_500);
    }
`;

export const TipBox = styled.div`
    padding-top: 73rem;
    strong {
        font-weight: 500;
        font-size: 20rem;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: var(--P_500);
    }
    p {
        font-weight: 400;
        font-size: 16rem;
        line-height: 172%;
        text-align: center;
        letter-spacing: -0.03em;
        color: var(--G_500);
    }
`;

export const TextInfo = styled.div`
    span {
        display: inline-block;
        width: 154rem;
        text-align: left;
        + span {
            font-size: 14rem;
            line-height: 172%;
            color: var(--P_500);
        }
    }
`;

export const ListItem = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10rem 20rem;
    background: var(--White);
    box-shadow: var(--Elevation_001);
    border-radius: 8rem;
    .zipNo {
        flex: 0 0 80rem;
        font-weight: 400;
        font-size: 16rem;
        line-height: 172%;
        text-align: center;
        letter-spacing: -0.03em;
        color: var(--G_600);
    }
    p {
        display: flex;
        width: 100%;
        font-weight: 400;
        font-size: 16rem;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: var(--G_600);
        text-align: center;
        span {
            flex: 0 0 80rem;
        }
        + p {
            color: var(--G_300);
        }
    }
    &:hover {
        background: var(--P_60);
    }
`;
