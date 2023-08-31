import React, { useEffect } from "react";
import { Wrapper } from "./styled.About";
import { useTransition } from "../../../Common/Hooks";
function About() {
    const { setTrans } = useTransition();
    useEffect(() => {
        setTrans("#about-profile h2", 400);
        setTrans("#about-profile div.photo", 800);
        setTrans("#about-profile div.profile", 1200);
    }, []);

    return (
        <Wrapper id="about-profile">
            <h2>About</h2>
            <div className="content-box">
                <div className="photo">
                    <div className="circle">
                        <img
                            alt="이조은 미모티콘"
                            src="/images/joeun-lee-memoji.png"
                        />
                    </div>
                </div>
                <div className="profile">
                    <div className="box">
                        <p className="name">이조은</p>
                        <p className="text">
                            안녕하세요.
                            <br />
                            프론트엔드 개발자로서 역량을 키워나가고 있는 이조은
                            입니다.
                            <br />
                            저의 작업물은 이 홈페이지를 통해 확인하실 수
                            있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default About;
