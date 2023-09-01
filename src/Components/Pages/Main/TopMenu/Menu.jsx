import React from "react";
import Main from "../Main/Main";
import About from "../../../Pages/About/About";
import Work from "../../../Pages/Work/Work";
import Skill from "../../../Pages/Skill/Skill";
import Contact from "../../../Pages/Contact/Contact";

function Menu() {
    return [
        {
            en: "",
            kr: "",
            url: "/",
            el: <Main />,
            hide: true,
        },
        {
            en: "about",
            kr: "소개",
            url: "/about",
            el: <About />,
        },
        {
            en: "works",
            kr: "작업물",
            url: "/works",
            el: <Work />,
        },
        {
            en: "skills",
            kr: "기술",
            url: "/skills",
            el: <Skill />,
        },
        {
            en: "contact",
            kr: "문의",
            url: "/contact",
            el: <Contact />,
        },
    ];
}

export default Menu;
