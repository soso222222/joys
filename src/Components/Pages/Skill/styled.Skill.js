import styled from "styled-components";

export const Wrapper = styled.section`
    h2 {
        text-align: right;
        background-color: #fff;
        padding: 20px 0;
        z-index: 100;
    }
    h2::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 10%;
        width: calc(100% - 12em);
        height: 1px;
        border-top: 1px solid #000000;
    }
    .content-box {
        position: relative;
        width: calc(100% - 200px);
        padding: 50px 0 30px 0;
        margin: 0 auto;
    }

    h2,
    .content-box {
        opacity: 0;
        transform: translateY(30%);
        transition: all 0.8s;
    }
    h2.on,
    .content-box.on {
        transform: translateY(0);
        opacity: 1;
    }

    @media screen and (max-width: 1024px) {
        width: calc(100% - 20ren);
        margin: 0 auto;
        h2 {
            text-align: right;
            background-color: #fff;
            padding: 20rem 60rem;
            z-index: 100;
        }
        h2::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 15%;
            width: calc(100% - 12em);
            height: 1px;
            border-top: 1px solid #000000;
        }
        .content-box {
            position: relative;
            width: calc(100% - 80px);
            padding: 60px 0 30px 0;
            margin: 0 auto;
        }

        h2,
        .content-box {
            opacity: 0;
            transform: translateY(30%);
            transition: all 0.8s;
        }
        h2.on,
        .content-box.on {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
