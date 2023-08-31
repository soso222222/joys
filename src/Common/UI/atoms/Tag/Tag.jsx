import React from "react";
import { Wrapper } from "./styled.Tag";

function Tag({ tags = [], bg = "Pu_300" }) {
    const items = tags?.map(({ name }) => (
        <li>
            <span>{name}</span>
        </li>
    ));

    return <Wrapper bg={bg}>{items}</Wrapper>;
}
export default Tag;
