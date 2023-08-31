import styled from "styled-components";

export const TitleWork = styled.h2`
    position: fixed;
    width: 90%;
    background-color: #fff;
    padding: 20px 0;
    padding-left: 5%;
    z-index: 100;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 10%;
        width: 12em;
        height: 1px;
        border-top: 1px solid #000000;
    }
    p {
        width: 80%;
        text-align: right;
        font-size: 12px;
    }
    p > span {
        position: relative;
        display: inline-block;
        margin-right: 10px;
    }

    @media screen and (max-width: 1024px) {
        position: fixed;
        width: 90%;
        background-color: #fff;
        margin-left: 10%;
        z-index: 100;
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 20%;
            width: 60%;
            height: 1px;
            border-top: 1px solid #000000;
        }
        p {
            width: 80%;
            text-align: right;
            font-size: 12px;
        }
        p > span {
            position: relative;
            display: inline-block;
            margin-right: 10px;
        }
    }
`;

export const Wrapper = styled.section`
    width: calc(100% - 100rem);
    overflow: hidden;
    padding-top: 100rem;
    margin: 0 auto;
    img {
        vertical-align: middle;
        max-width: 100%;
    }

    section.page {
        position: relative;
        height: calc(100vh - 270rem);
        overflow: hidden;
    }
    section > div.photo-box {
        width: 50%;
        height: 100%;
        text-align: center;
    }
    section > div.photo-box > p.photo {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
    }
    section > div.content {
        width: 50%;
        height: 100%;
        text-align: center;
    }
    section > div.content > div.box {
        position: relative;
        display: inline-block;
        top: 50%;
        width: 60%;
        transform: translate(0, -50%);
    }
    .right > div.photo-box {
        float: left;
        transform: translateY(30%);
        opacity: 0;
        transition: all 1.2s;
    }
    .left > div.photo-box {
        float: right;
        transform: translateY(30%);
        opacity: 0;
        transition: all 1.2s;
    }
    .right > div.content {
        float: right;
        transform: translateY(30%);
        opacity: 0;
        transition: all 1.2s;
    }
    .left > div.content {
        float: left;
        transform: translateY(30%);
        opacity: 0;
        transition: all 1.2s;
    }
    .on > div.photo-box,
    .on > div.content {
        transform: translateY(0);
        opacity: 1;
    }
    div.content ul.tags {
        overflow: hidden;
        margin-bottom: 5px;
    }
    div.content ul.tags li {
        float: left;
    }
    div.content ul.tags li + li {
        margin-left: 0.5em;
    }
    div.content ul.tags li span {
        font-size: 16px;
        font-weight: 600;
        color: #666666;
    }
    div.content p {
        text-align: left;
    }
    div.content p.title {
        font-size: 24px;
        font-weight: 800;
        margin-bottom: 1em;
    }
    div.content p.text {
        font-size: 14px;
        color: #666666;
        margin-bottom: 2em;
    }

    ul {
        overflow: hidden;
    }
    ul.btn-group {
        margin-top: 40px;
    }
    ul.btn-group > li {
        height: 50px;
        float: left;
        box-sizing: border-box;
        border: 1px solid #000000;
    }
    ul.btn-group.type-2 > li {
        width: calc(50% - 5px);
    }
    ul.btn-group.type-2 li + li {
        margin-left: 10px;
    }
    ul.btn-group li > a {
        position: relative;
        display: block;
        cursor: pointer;
    }
    ul.btn-group li span {
        line-height: 50px;
        font-size: 18px;
        font-weight: 300;
    }
    ul.btn-group li span::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        background: var(--P_300);
        z-index: -1;
    }
    ul.btn-group li > a {
        color: var(--Black);
    }
    ul.btn-group li > a:focus span::before,
    ul.btn-group li > a:hover span::before {
        height: 100%;
        transition: all 0.4s ease-out;
    }

    @media screen and (max-width: 1024px) {
        position: relative;
        top: 0;
        width: calc(100% - 100px);
        overflow: hidden;
        padding-top: 30px;
        margin: 0 auto;
        section.page {
            position: relative;
            top: 0;
            height: calc(100vh - 200px);
            padding: 50px 0;
            overflow: hidden;
        }
        section.page:first-child {
            margin-top: 20px;
        }
        section > div.photo-box {
            width: 100%;
            overflow: hidden;
            text-align: center;
        }
        section > div.photo-box > p.photo {
            display: inline-block;
            height: 100%;
            box-sizing: border-box;
        }
        /* section > div.photo-box img {height: 100%; margin: 0 auto;} */
        section > div.content {
        }
        section > div.content > div.box {
            position: relative;
            display: inline-block;
            width: 100%;
        }
        .right > div.photo-box {
            margin-bottom: 50px;
        }
        .left > div.photo-box {
            margin-bottom: 10px;
        }
        .right > div.content {
            margin-bottom: 10px;
        }
        .left > div.content {
            margin-bottom: 50px;
        }
        div.photo-box,
        div.content {
            transform: translateY(30%);
            opacity: 0;
            transition: all 1.2s;
        }
        .on > div.photo-box,
        .on > div.content {
            transform: translateY(0);
            opacity: 1;
        }
        div.content ul.tags {
            overflow: hidden;
            margin-bottom: 5px;
        }
        div.content ul.tags li {
            float: left;
        }
        div.content ul.tags li + li {
            margin-left: 0.5em;
        }
        div.content ul.tags li span {
            font-size: 16px;
            font-weight: 600;
            color: #666666;
        }
        div.content p {
            text-align: left;
        }
        div.content p.title {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 0.5em;
        }
        div.content p.text {
            font-size: 14px;
            color: #666666;
        }
        div.content ul.btn-group {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
`;

export const RemoteControl = styled.aside`
    ul.tab {
        position: fixed;
        width: 150px;
        right: 50px;
        top: 50%;
        transform: translate(0, -50%);
    }
    ul.tab > li + li {
        margin-top: 3px;
    }
    ul.tab > li > a {
        display: block;
        position: relative;
        line-height: 32px;
        font-size: 14px;
        color: #ffffff;
        background-color: #cdb4db;
        border-radius: 100px;
        padding: 0 20px;
        transition: background-color 0.3s;
    }
    ul.tab > li.on > a,
    ul.tab > li > a:hover {
        background-color: #be9fd1;
    }
    ul.tab > li > a span {
        position: absolute;
        right: 0;
        top: 0;
        width: 32px;
        height: 32px;
        border-radius: 100px;
        background-color: #ac83c3;
        text-align: center;
        font-weight: 600;
    }

    @media screen and (max-width: 1024px) {
        ul.tab {
            position: fixed;
            width: 150px;
            right: 20px;
            top: 50%;
            transform: translate(0, -50%);
        }
        ul.tab > li + li {
            margin-top: 3px;
        }
        ul.tab > li > a {
            display: block;
            position: relative;
            line-height: 32px;
            font-size: 14px;
            color: transparent;
            background-color: transparent;
            border-radius: 100px;
            padding: 0 20px;
            transition: background-color 0.3s;
        }
        ul.tab > li > a span {
            position: absolute;
            right: 0;
            top: 0;
            width: 32px;
            height: 32px;
            border-radius: 100px;
            color: #fff;
            background-color: #be9fd1;
            text-align: center;
            font-weight: 600;
        }
        ul.tab > li.on > a span {
            background-color: #ac83c3;
        }
    }
`;
