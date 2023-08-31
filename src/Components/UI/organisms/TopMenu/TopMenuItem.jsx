import { useNavigate } from "react-router-dom";
import TextButton from "../../../../Common/UI/atoms/TextButton/TextButton";

function TopMenuItem({ menu = {}, closeM }) {
    const { en, kr, url } = menu;
    const navigate = useNavigate();

    const onClickMenu = () => {
        closeM();
        navigate(url);
    };
    return (
        <li>
            <TextButton
                size="title"
                className={"topMenuBtn"}
                Theme={"textButtonNoAct"}
                onClick={() => onClickMenu()}
            >
                <span className="en">{en}</span>
                <span className="kr">{kr}</span>
            </TextButton>
        </li>
    );
}
export default TopMenuItem;
