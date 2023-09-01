import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-auto-rows: 130rem calc(100vh - 170rem) 40rem;
    padding: 0 100rem 0 100rem;
    overflow: hidden;

    main {
        position: relative;
    }

    section.container {
        position: relative;
    }
    section.container::after {
        content: "";
        display: block;
        clear: both;
    }
    section.container + section.container {
        margin-top: 20px;
    }
    section.container > section {
        float: left;
        position: relative;
        min-height: 100px;
        padding: 10px 15px 20px 15px;
        box-sizing: border-box;
        border: 1px solid #999;
        border-radius: 4px;
        background-color: #ffffff;
    }
    section.container > section.card {
        padding: 0;
    }
    section.container > section + section {
        margin-left: 20px;
    }
    section.container.type-1 > section {
        width: 100%;
    }
    section.container.type-2 > section {
        width: calc(50% - 10px);
    }
    section.container.type-3 > section {
        width: calc(33.33% - 13.33px);
    }
    section.container.type-4 > section {
        width: calc(25% - 15px);
    }
    section.container.type-1-2 > section:nth-child(1) {
        width: calc(33.33% - 13.33px);
    }
    section.container.type-1-2 > section:nth-child(2) {
        width: calc(66.66% - 6.66px);
    }
    section.container.type-2-1 > section:nth-child(1) {
        width: calc(66.66% - 6.66px);
    }
    section.container.type-2-1 > section:nth-child(2) {
        width: calc(33.33% - 13.33px);
    }
    section.container.type-1-3 > section:nth-child(1) {
        width: calc(25% - 15px);
    }
    section.container.type-1-3 > section:nth-child(2) {
        width: calc(75% - 5px);
    }
    section.container.type-3-1 > section:nth-child(1) {
        width: calc(75% - 5px);
    }
    section.container.type-3-1 > section:nth-child(2) {
        width: calc(25% - 15px);
    }
    section.container.type-1-1-2 > section {
        width: calc(25% - 15px);
    }
    section.container.type-1-1-2 > section:nth-child(3) {
        width: calc(50% - 10px);
    }
    section.container.type-2-1-1 > section {
        width: calc(25% - 15px);
    }
    section.container.type-2-1-1 > section:nth-child(1) {
        width: calc(50% - 10px);
    }
    section.container > section h3 {
        font-size: 19px;
        font-weight: 400;
        margin-bottom: 1em;
    }

    .custom-scroll {
        overflow: auto;
    }
    .custom-scroll::-webkit-scrollbar {
        width: 10px;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
        transition: background-color 0.3s;
    }
    .custom-scroll:hover::-webkit-scrollbar-thumb {
        background-color: #e8e8e8;
    }
    .custom-scroll::-webkit-scrollbar-track {
        background-color: transparent;
    }

    @media screen and (max-width: 1024px) {
        display: grid;
        grid-auto-rows: 130rem calc(100vh - 170rem) 20rem;
        padding: 0;
    }
`;
