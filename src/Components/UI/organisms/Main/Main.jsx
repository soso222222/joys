import React, { useEffect } from "react";
import { Wrapper } from "./styled.Main";
import { useTransition } from "../../../../Common/Hooks";
function Main() {
    const { setTrans } = useTransition();

    useEffect(() => {
        // 1번 영역
        // console.log('컴포넌트가 화면에 나타남 ');
        setTrans("#main-visual div.bg", 200);
        setTrans("#main-visual div.text p:first-child", 400);
        setTrans("#main-visual div.text p:last-child", 900);

        // return () => {
        //     // 2번 영역
        //     console.log('컴포넌트가 화면에서 사라질 때  실행 공홈에서는 : clean up 이라고 표현');
        // };
    }, []);

    return (
        <Wrapper id="main-visual">
            <div className="bg">
                <div className="text">
                    <p>안녕하세요</p>
                    <p>프론트엔드개발자 이조은입니다.</p>
                </div>
            </div>
        </Wrapper>
    );
}
export default Main;
