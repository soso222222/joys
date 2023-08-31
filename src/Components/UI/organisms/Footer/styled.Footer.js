import styled from "styled-components";

export const Wrapper = styled.footer`
    div {
        justify-content: center;
        align-items: center;
        height: 40rem;
    }

    @media screen and (max-width: 1024px) {
        position: relative;
        height: 20rem;
        div.content-box {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 0);
            margin: 20px auto;
        }
        p {
            text-align: center;
            font-size: 14px;
            font-weight: 700;
        }
    }
`;
