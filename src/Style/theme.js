const deviceSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "450px",
    tablet: "768px",
    tabletL: "1024px",
};

const title = {
    xxxl: {
        fontSize: "60rem",
        lineHeight: "74rem",
    },
    xxl: {
        fontSize: "40rem",
        lineHeight: "56rem",
    },
    xl: {
        fontSize: "36rem",
        lineHeight: "50rem",
    },
    lg: {
        fontSize: "32rem",
        lineHeight: "44rem",
    },
    md: {
        fontSize: "28rem",
        lineHeight: "36rem",
    },
    sm: {
        fontSize: "24rem",
        lineHeight: "34rem",
    },
    xs: {
        fontSize: "20rem",
        lineHeight: "28rem",
    },
    xxs: {
        fontSize: "16rem",
        lineHeight: "22rem",
    },
    xxxs: {
        fontSize: "14rem",
        lineHeight: "20rem",
    },
    xxxxs: {
        fontSize: "12rem",
        lineHeight: "16rem",
    },
};

const elevation = {
    Elevation__001:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 5px rgba(0, 0, 0, 0.08)",
    Elevation__002:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 6px rgba(0, 0, 0, 0.1);",
    Elevation__003:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 8px rgba(0, 0, 0, 0.1);",
    Elevation__004:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 11px rgba(0, 0, 0, 0.11)",
    Elevation__005:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 13px rgba(0, 0, 0, 0.12)",
    Elevation__006:
        "0px 0px 5px rgba(0, 0, 0, 0.06), 0px 0px 15px rgba(0, 0, 0, 0.15)",
    Elevation__007:
        "0px 0px 5px rgba(0, 0, 0, 0.06), 0px 0px 17px rgba(0, 0, 0, 0.18)",
    Elevation__008:
        "0px 0px 5px rgba(0, 0, 0, 0.08), 0px 0px 28px rgba(0, 0, 0, 0.22)",
};
const colors = {
    Black: "#000",
    White: "#fff",

    Y_300: "rgba(255, 210, 117, 0.3)",
    P_300: "rgba(255, 200, 221, 0.3)",
    SB_300: "rgba(189, 224, 254, 0.3)",
    Pu_300: "rgba(205, 180, 219, 0.3)",

    G_900: "#1D1F2B",
    G_800: "#313644",
    G_700: "#444A57",
    G_600: "#565B69",
    G_500: "#686D78",
    G_400: "#787C87",
    G_300: "#888C94",
    G_200: "#A6A9AF",
    G_150: "#BBBCC0",
    G_100: "#CECFD2",
    G_75: "#DADBDD",
    G_50: "#EBEBED",
    G_25: "#F4F5F5",
    G_20: "#F9F9FB",
};

const modal = {
    size: {
        sm: 500,
        md: 700,
        lg: 900,
    },
};
const textButton = {
    size: {
        xs: {
            height: "28rem",
            fontSize: "12rem",
        },
        sm: {
            height: "32rem",
            fontSize: "14rem",
        },
        md: {
            height: "36rem",
            fontSize: "16rem",
        },
        lg: {
            height: "38rem",
            fontSize: "18rem",
        },
        xl: {
            height: "42rem",
            fontSize: "20rem",
        },
        title: {
            height: "130rem",
            fontSize: "64rem",
        },
    },
};
const button = {
    size: {
        xxxs: {
            height: "24rem",
            fontSize: "10rem",
            padding: "0 4rem",
        },
        xxs: {
            height: "28rem",
            fontSize: "12rem",
            padding: "0 8rem",
        },
        xs: {
            height: "32rem",
            fontSize: "14rem",
            padding: "0 12rem",
        },
        sm: {
            height: "36rem",
            fontSize: "14rem",
            padding: "0 16rem",
        },
        md: {
            height: "40rem",
            fontSize: "14rem",
            padding: "0 20rem",
        },
        lg: {
            height: "44rem",
            fontSize: "14rem",
            padding: "0 20rem",
        },
        xl: {
            height: "48rem",
            fontSize: "14rem",
            padding: "0 24rem",
        },
        xxl: {
            height: "52rem",
            fontSize: "14rem",
            padding: "0 28rem",
        },
        xxxl: {
            height: "56rem",
            fontSize: "16rem",
            padding: "0 32rem",
        },
    },
    theme: {
        normal: {
            color: colors.White,
            background: colors.P_500,
            fill: colors.White,
            hover: {
                background: colors.P_600,
            },
            active: {
                background: colors.P_800,
            },
            focus: {
                background: colors.P_700,
            },
            disabled: {
                color: colors.G_150,
                background: colors.G_50,
                fill: colors.G_100,
            },
        },
        line: {
            borderColor: colors.G_150,
            color: colors.G_600,
            background: colors.White,
            fill: colors.G_600,
            hover: {
                color: colors.P_500,
                background: colors.G_25,
                borderColor: colors.G_150,
                fill: colors.P_500,
                boxShadow: elevation.Elevation__001,
            },
            active: {
                color: colors.P_800,
                background: colors.G_100,
                borderColor: colors.G_300,
                fill: colors.P_800,
            },
            focus: {
                color: colors.P_700,
                background: colors.G_75,
                borderColor: colors.G_300,
                fill: colors.P_700,
            },
            disabled: {
                background: colors.G_50,
                color: colors.G_150,
                fill: colors.G_100,
                borderColor: colors.G_100,
            },
        },
        unLine: {
            color: colors.G_600,
            background: colors.White,
            fill: colors.G_600,
            hover: {
                color: colors.P_500,
                background: colors.G_25,
                fill: colors.P_500,
                boxShadow: elevation.Elevation__001,
            },
            active: {
                color: colors.P_800,
                background: colors.G_100,
                fill: colors.P_800,
            },
            focus: {
                color: colors.P_700,
                background: colors.G_75,
                fill: colors.P_700,
            },
            disabled: {
                background: colors.G_50,
                color: colors.G_150,
                fill: colors.G_100,
            },
        },
        unFill: {
            color: colors.G_600,
            fill: colors.G_600,
            hover: {
                color: colors.P_500,
                fill: colors.P_500,
                boxShadow: elevation.Elevation__001,
            },
            active: {
                color: colors.P_800,
                fill: colors.P_800,
            },
            focus: {
                color: colors.P_700,
                fill: colors.P_700,
            },
            disabled: {
                color: colors.G_150,
                fill: colors.G_100,
            },
        },
        underLine: {
            color: colors.G_600,
            borderRadius: 0,
            borderBottomColor: colors.G_600,
            hover: {
                color: colors.P_500,
                borderBottomColor: colors.P_500,
            },
            active: {
                color: colors.P_800,
                borderBottomColor: colors.P_800,
            },
            focus: {
                color: colors.P_700,
                borderBottomColor: colors.P_700,
            },
            disabled: {
                color: colors.G_150,
                fill: colors.G_100,
                borderBottomColor: "transparent",
            },
        },
        link: {
            color: colors.P_500,
            borderRadius: 0,
            borderBottomColor: colors.P_500,
            hover: {
                color: colors.P_600,
                borderBottomColor: colors.P_600,
            },
            active: {
                color: colors.P_800,
                borderBottomColor: colors.P_800,
            },
            focus: {
                color: colors.P_700,
                borderBottomColor: colors.P_700,
            },
            disabled: {
                color: colors.G_150,
                fill: colors.G_100,
                borderBottomColor: "transparent",
            },
        },
        textButtonDefault: {
            color: colors.G_600,
            hover: {
                color: colors.P_500,
                BorderColor: colors.P_500,
                background: colors.G_25,
            },
            active: {
                color: colors.P_800,
                BorderColor: colors.P_800,
                background: colors.G_50,
            },
            focus: {
                color: colors.P_700,
                BorderColor: colors.P_700,
            },
            disabled: {
                color: colors.G_150,
                fill: colors.G_100,
            },
        },
        textButtonNoAct: {
            color: colors.Black,
            hover: {
                color: colors.Black,
            },
            active: {
                color: colors.Black,
            },
            focus: {
                color: colors.Black,
            },
            disabled: {
                color: colors.G_150,
                fill: colors.G_100,
            },
        },
    },
};
const theme = {
    button,
    title,
    colors,
    textButton,
    elevation,
    modal,
};

export default theme;
