import React, { useState } from "react";
import { Gnb, Wrapper } from "./styled.TopMenu";
import TopMenuItem from "./TopMenuItem";
import Menu from "./Menu";
import { useClass } from "../../../../Hooks";
import Icon from "../../../Common/IconBox";
import { IconButton, TextButton } from "../../../Common";

function TopMenu() {
    const allMenus = Menu();
    const menus = allMenus?.filter((i) => !i?.hide);
    const [mBtn, setMBtn] = useState({ isOpen: false, icon: Icon.Menu });
    const { addClass, removeClass } = useClass();

    const onMobileClick = (isOpen) => {
        isOpen ? openMenu() : closeMenu();
    };
    const openMenu = () => {
        addClass(document.querySelector(".top"), "show");
        setMBtn({ isOpen: true, icon: Icon.Cross });
    };
    const closeMenu = () => {
        removeClass(document.querySelector(".top"), "show");
        setMBtn({ isOpen: false, icon: Icon.Menu });
    };

    return (
        <Wrapper className="top">
            <TextButton
                Theme={"textButtonNoAct"}
                weight="800"
                size="title"
                style={`letter-spacing: 0.5em;`}
                to={"/"}
            >
                JOY
            </TextButton>

            <div className="mobile-menu mobile">
                <IconButton
                    Icon={mBtn.icon}
                    Theme={"textButtonNoAct"}
                    size="xxl"
                    iconSize={52}
                    onClick={() => onMobileClick(!mBtn?.isOpen)}
                />
            </div>
            <Gnb id="gnb">
                <ul className="menu">
                    {menus?.map((i, idx) => {
                        return <TopMenuItem menu={i} closeM={closeMenu} />;
                    })}
                </ul>
            </Gnb>
        </Wrapper>
    );
}
export default TopMenu;
