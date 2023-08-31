import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    height: 100%;

    h2 {
        text-align: center;
        padding: 6% 0 3% 0;
    }
    .content-box {
        position: relative;
        width: calc(100% - 200px);
        overflow: hidden;
        margin: 0 auto;
    }
    div.photo {
        float: left;
        width: 40%;
        height: 100%;
        margin-right: 5%;
    }
    div.circle {
        width: 450px;
        height: 450px;
        border-radius: 50%;
        background-color: var(--Y_300);
        margin: 0 auto;
    }
    div.circle img {
        width: 440px;
        height: 440px;
    }
    div.profile {
        position: relative;
        float: right;
        width: 40%;
        height: 100%;
        text-align: center;
        margin-left: 5%;
    }
    div.profile div.box {
        position: relative;
        display: inline-block;
        top: 10%;
    }
    div.profile p {
        text-align: center;
    }
    div.profile p.name {
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 0.5em;
        padding: 4% 0 8% 0;
    }
    div.profile p.text {
        position: relative;
        line-height: 1.5em;
        padding-top: 8%;
        color: #666666;
    }
    div.profile p.text::before {
        content: "";
        position: absolute;
        top: 0;
        left: -10%;
        width: 120%;
        height: 1px;
        border-bottom: 1px solid #000;
    }

    h2,
    div.photo,
    div.profile {
        opacity: 0;
        transform: translateY(30%);
        transition: all 0.8s;
    }
    h2.on,
    div.photo.on,
    div.profile.on {
        transform: translateY(0);
        opacity: 1;
    }

    @media screen and (max-width: 1024px) {
        position: relative;
        h2 {
            font-size: 30px;
            text-align: center;
            padding: 6% 0 4% 0;
        }
        .content-box {
            position: relative;
            width: calc(100% - 40rem);
            height: 90%;
            overflow: hidden;
            margin: 5% 20rem 0 20rem;
        }
        div.photo {
            width: 100%;
            height: 35%;
        }
        div.circle {
            width: 420rem;
            height: 420rem;
            border-radius: 50%;
            background-color: var(--Y_300);
            margin: 0 auto;
        }

        div.circle img {
            width: 100%;
            height: 100%;
        }
        div.profile {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            margin-top: 2%;
        }
        div.profile div.box {
            position: relative;
            display: inline-block;
            top: 10%;
        }
        div.profile p {
            text-align: center;
        }
        div.profile p.name {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.5em;
            padding-bottom: 8%;
        }
        div.profile p.text {
            position: relative;
            padding-top: 8%;
            color: #666666;
        }
        div.profile p.text::before {
            content: "";
            position: absolute;
            top: 0;
            left: -10%;
            width: 120%;
            height: 1px;
            border-bottom: 1px solid #000;
        }

        h2,
        div.photo,
        div.profile {
            opacity: 0;
            transform: translateY(30%);
            transition: all 0.8s;
        }
        h2.on,
        div.photo.on,
        div.profile.on {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
