import React, { useEffect } from "react";
import { Wrapper } from "./styled.Contact";
import { useTransition } from "../../../Common/Hooks";

function Contact() {
    const { setTrans } = useTransition();
    useEffect(() => {
        setTrans("#contact-email h2", 400);
        setTrans("#contact-email p.email", 800);
        setTrans("#contact-email p.text", 1200);
    }, []);

    return (
        <Wrapper id="contact-email">
            <div className="content-box">
                <h2>Contact</h2>
                <p className="email">sortof259@gmail.com</p>
                <p className="text">문의사항은 이 쪽으로 연락 부탁드립니다.</p>
            </div>
        </Wrapper>
    );
}

export default Contact;
