import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    h2 {
        text-align: left;
    }
    > div.content-box {
        position: relative;
        display: inline-block;
        width: 60%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
    }
    p.email {
        position: relative;
        font-size: 36px;
        border-bottom: 1px solid #000000;
        padding: 1em;
        margin-top: 5%;
        text-align: center;
    }
    p.email::before {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 70%;
        height: 50%;
        background: var(--P_300);
        transform: translate(0, -50%);
        z-index: -1;
    }
    p.text {
        font-size: 18px;
        font-weight: 300;
        color: #666666;
        text-align: left;
        padding-top: 2em;
    }

    h2,
    p.email,
    p.text {
        opacity: 0;
        transform: translateY(30%);
        transition: all 0.8s;
    }
    h2.on,
    p.email.on,
    p.text.on {
        transform: translateY(0);
        opacity: 1;
    }

    @media screen and (max-width: 1024px) {
        position: relative;
        h2 {
            text-align: left;
        }
        > div.content-box {
            position: relative;
            display: inline-block;
            width: 90%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 50%);
        }
        p.email {
            position: relative;
            font-size: 30px;
            border-bottom: 1px solid #000000;
            padding: 1em;
            margin-top: 10%;
            text-align: center;
        }
        p.email::before {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            width: 70%;
            height: 50%;
            background: rgba(255, 200, 221, 0.3);
            transform: translate(0, -50%);
            z-index: -1;
        }
        p.text {
            font-size: 18px;
            font-weight: 300;
            color: #666666;
            text-align: left;
            padding-top: 2em;
        }

        h2,
        p.email,
        p.text {
            opacity: 0;
            transform: translateY(30%);
            transition: all 0.8s;
        }
        h2.on,
        p.email.on,
        p.text.on {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
