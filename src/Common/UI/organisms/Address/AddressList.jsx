import Box from "Common/UI/atoms/Box";
import React from "react";
import { ListItem } from "./styled";

function AddressList({ list, onClick }) {
    return (
        <Box column gap={"8rem"}>
            {list.map((i, idx) => {
                return (
                    <ListItem key={idx} onClick={() => onClick(i)}>
                        <span className="zipNo">{i.zipNo}</span>
                        <Box column gap={0} width={"100%"}>
                            <p>
                                <span>도로명</span>
                                {i.road}
                            </p>
                            <p>
                                <span>지번</span>
                                {i.jibun}
                            </p>
                        </Box>
                    </ListItem>
                );
            })}
        </Box>
    );
}

export default AddressList;
