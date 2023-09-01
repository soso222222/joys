import React from "react";
import { RemoteControl, TitleWork, Wrapper } from "./styled.Work";
import { Tag } from "../../Common";
import { aceBed, admin, lifePlus } from "./data.Work";

function Work() {
    return (
        <>
            <TitleWork>works</TitleWork>
            <Wrapper id="works">
                <section id="ace" className="page on right">
                    <div className="photo-box">
                        <p className="photo">
                            <img
                                alt="Ace Bed clone"
                                src="/images/works-acebed.png"
                            />
                        </p>
                    </div>
                    <div className="content">
                        <div className="box">
                            <ul className="tags">
                                <li>
                                    <span>#반응형</span>
                                </li>
                                <li>
                                    <span>#클론코딩</span>
                                </li>
                            </ul>
                            <p className="title">에이스 침대</p>
                            <p className="text">
                                에이스 침대 페이지를 <br />
                                접근성을 고려하여 클론코딩하였습니다. <br />
                            </p>
                            <Tag tags={aceBed} bg="SB_300" />
                            <ul className="btn-group type-2">
                                <li>
                                    <a
                                        href="https://github.com/soso222222/acebed"
                                        target="_blank"
                                    >
                                        <span>Github</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://crenew.cafe24.com/DINO_03/joy/acebed/"
                                        target="_blank"
                                    >
                                        <span>View</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="lp" className="page on left">
                    <div className="content">
                        <div className="box">
                            <ul className="tags">
                                <li>
                                    <span>#only PC</span>
                                </li>
                                <li>
                                    <span>#클론코딩</span>
                                </li>
                            </ul>
                            <p className="title">LIFE PLUS</p>
                            <p className="text">
                                LIFE PLUS 페이지를 <br />
                                접근성을 고려하여 클론코딩하였습니다.
                            </p>
                            <Tag tags={lifePlus} bg="SB_300" />
                            <ul className="btn-group type-2">
                                <li>
                                    <a
                                        href="https://github.com/soso222222/lifeplus"
                                        target="_blank"
                                    >
                                        <span>Github</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://crenew.cafe24.com/DINO_03/joy/lifeplus/"
                                        target="_blank"
                                    >
                                        <span>View</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="photo-box">
                        <p className="photo">
                            <img
                                alt="LifePlus clone"
                                src="/images/works-lifeplus.png"
                            />
                        </p>
                    </div>
                </section>
                <section id="admin" className="page on right">
                    <div className="photo-box">
                        <p className="photo">
                            <img alt="Admin" src="/images/works-admin.png" />
                        </p>
                    </div>
                    <div className="content">
                        <div className="box">
                            <ul className="tags">
                                <li>
                                    <span>#제작</span>
                                </li>
                            </ul>
                            <p className="title">관리자 페이지</p>
                            <p className="text">
                                관리자 페이지를 <br />
                                제작하였습니다. <br />
                                PC환경에 최적화 되어있습니다.
                            </p>
                            <Tag tags={admin} bg="SB_300" />
                            <ul className="btn-group type-2">
                                <li>
                                    <a
                                        href="https://github.com/soso222222/admin"
                                        target="_blank"
                                    >
                                        <span>Github</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://crenew.cafe24.com/DINO_03/joy/admin/"
                                        target="_blank"
                                    >
                                        <span>View</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Wrapper>

            <RemoteControl id="aside">
                <ul className="tab">
                    <li className="on">
                        <a href="#ace">
                            에이스 침대<span>1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#lp">
                            LifePlus<span>2</span>
                        </a>
                    </li>
                    <li>
                        <a href="#admin">
                            관리자<span>3</span>
                        </a>
                    </li>
                </ul>
            </RemoteControl>
        </>
    );
}

export default Work;
