import React from "react";
import styled from "styled-components";
const Svg = styled.svg`
    ${(props) => {
        const { sizeX, styles, isAction } = props;
        return `
            width:${sizeX}rem;
            >*{
                ${isAction === true ? "" : "transition:0.3s;"}
            }
            ${styles || ""}
            
        `;
    }}
`;

const setSize = (n) => {
    switch (n) {
        case "xxxs":
            return 12;
        case "xxs":
            return 16;
        case "xs":
            return 20;
        case "sm":
            return 24;
        case "md":
            return 28;
        case "lg":
            return 32;
        case "xl":
            return 36;
        case "xxl":
            return 40;
        default:
            return n;
    }
};

const setFill = (fill) =>
    fill?.search("#") < 0
        ? `var(--${fill?.replace("var(--", "").replace(")", "")}`
        : fill;

const IconList = (() => {
    const icons = {
        Cross: [
            "M703 4489 c-45 -22 -79 -67 -89 -117 -15 -75 -31 -58 869 -960 l852 -852 -862 -863 c-750 -750 -863 -867 -872 -902 -15 -57 0 -111 42 -153 28 -28 45 -36 86 -40 27 -2 63 -1 78 2 19 5 294 273 891 869 l862 862 863 -862 c750 -750 867 -863 902 -872 57 -15 111 0 153 42 28 28 36 45 40 86 2 27 1 63 -2 78 -5 19 -273 294 -869 891 l-862 862 852 853 c746 746 853 857 864 895 33 114 -79 226 -193 193 -38 -11 -149 -118 -896 -864 l-852 -852 -848 847 c-596 596 -858 852 -884 863 -50 20 -75 19 -125 -6z",
        ],
    };
    const Element = {};
    for (let name in icons) {
        Element[name] = ({ size = "md", style, fill }) => (
            <Svg
                isAction={fill}
                styles={style}
                width={`${setSize(size)}rem`}
                height={`${setSize(size)}rem`}
                viewBox={`0 0 512.000000 512.000000`}
            >
                <g
                    transform={`translate(0.000000,512.000000) scale(0.100000,-0.100000)`}
                    fill={
                        fill
                            ? fill === true
                                ? "currentcolor"
                                : setFill(fill)
                            : fill !== undefined
                            ? ""
                            : "var(--Black)"
                    }
                    stroke="none"
                >
                    {icons[name]?.map((i, key) => (
                        <path
                            key={key}
                            d={i}
                            fill={
                                fill
                                    ? fill === true
                                        ? "currentcolor"
                                        : setFill(fill)
                                    : fill !== undefined
                                    ? ""
                                    : "var(--Black)"
                            }
                        />
                    ))}
                </g>
            </Svg>
        );
    }

    return Element;
})();

const Menu = ({ size = 52, fill }) => {
    return (
        <Svg
            width={`${size}rem`}
            height={`${size}rem`}
            viewBox={`0 0 512.000000 512.000000`}
        >
            <g
                transform={`translate(0.000000,512.000000) scale(0.100000,-0.100000)`}
                fill={
                    fill
                        ? fill === true
                            ? "currentcolor"
                            : setFill(fill)
                        : fill !== undefined
                        ? ""
                        : "var(--Black)"
                }
                stroke="none"
            >
                <path d="M732 4780 c-97 -26 -173 -70 -248 -144 -76 -77 -119 -152 -145 -254 -19 -76 -20 -106 -17 -663 l3 -584 26 -67 c70 -179 216 -312 390 -353 96 -22 1177 -22 1263 0 195 51 355 213 401 406 22 95 22 1163 0 1258 -41 174 -174 320 -353 390 l-67 26 -590 2 c-557 2 -594 1 -663 -17z" />
                <path d="M3160 4793 c-211 -35 -396 -208 -445 -415 -23 -97 -22 -1173 1 -1262 50 -193 207 -350 400 -400 89 -23 1165 -24 1262 -1 88 21 170 65 240 130 71 65 115 131 151 223 l26 67 3 584 c3 557 2 587 -17 663 -27 104 -70 178 -150 258 -79 77 -142 114 -247 140 -73 19 -109 20 -638 19 -309 -1 -572 -4 -586 -6z" />
                <path d="M738 2405 c-84 -21 -168 -67 -236 -130 -71 -65 -115 -131 -151 -223 l-26 -67 -3 -584 c-3 -557 -2 -587 17 -663 26 -102 69 -177 145 -254 77 -76 152 -119 254 -145 76 -19 106 -20 663 -17 l584 3 67 26 c179 70 312 216 353 390 23 97 22 1173 -1 1263 -45 176 -171 316 -349 387 l-60 24 -600 2 c-486 1 -611 -1 -657 -12z" />
                <path d="M3105 2401 c-190 -54 -341 -208 -390 -397 -22 -85 -22 -1167 0 -1262 21 -88 65 -170 130 -240 65 -71 131 -115 223 -151 l67 -26 580 -3 c642 -3 662 -2 786 60 76 38 183 142 227 220 18 31 42 92 53 136 19 76 20 106 17 663 l-3 584 -26 67 c-70 181 -215 311 -391 353 -52 12 -165 15 -638 14 -514 0 -581 -2 -635 -18z" />
            </g>
        </Svg>
    );
};

const Icon = {
    ...IconList,
    Location,
    Menu,
};

export default Icon;
