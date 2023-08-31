import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;

    div.bg {
        position: relative;
        height: calc(100vh - 170rem);
        background: url(/images/bg.jpg) center center no-repeat;
        background-size: cover;
        opacity: 0;
        transition: opacity 1.8s;
    }
    div.text {
        position: fixed;
        top: 40%;
        left: 60rem;
    }
    div.text p {
        position: relative;
        display: block;
        width: 0px;
        height: 1.5em;
        line-height: 1.5em;
        overflow: hidden;
        margin-top: 0.8em;
        font-family: "GowunBatang", "sans-serif";
        font-size: 22px;
        background: #fff;
        text-align: center;
    }
    div.bg.on {
        opacity: 1;
    }
    div.text p.on:first-child {
        width: 5.5em;
        transition: width 0.8s;
    }
    div.text p.on:last-child {
        width: 14.5em;
        transition: width 2.8s;
    }

    @media screen and (max-width: 1024px) {
        position: relative;
        div.bg {
            position: relative;
            background: url(/images/bg.jpg) center center no-repeat;
            background-size: cover;
            opacity: 0;
            transition: opacity 1.8s;
        }
        div.text {
            position: absolute;
            top: 32%;
            left: 2%;
        }
        div.text p {
            position: relative;
            display: block;
            width: 0px;
            height: 1.5em;
            line-height: 1.5em;
            overflow: hidden;
            margin-top: 0.8em;
            font-size: 24px;
            background: #fff;
        }
        div.bg.on {
            opacity: 1;
        }
        div.text p.on:first-child {
            width: 120px;
            transition: width 0.8s;
        }
        div.text p.on:last-child {
            width: 320px;
            transition: width 1.8s;
        }
    }
`;
