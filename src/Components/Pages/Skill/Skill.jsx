import React, { useEffect } from "react";
import { Wrapper } from "./styled.Skill";
import { useTransition } from "../../../Common/Hooks";
import Tag from "../../../Common/UI/atoms/Tag/Tag";
import {
    backend,
    certificate,
    design,
    frontend,
    versionControl,
} from "./data.Skill";

function Skill() {
    const { setTrans } = useTransition();
    useEffect(() => {
        setTrans("#skill h2", 400);
        setTrans("#skill > div", 800);
    }, []);
    return (
        <Wrapper id="skill">
            <h2>Skills</h2>
            <div className="content-box">
                <section className="container type-1">
                    <section>
                        <h3>Frontend</h3>
                        <Tag tags={frontend} />
                    </section>
                </section>
                <section className="container type-1">
                    <section>
                        <h3>Backend</h3>
                        <Tag tags={backend} />
                    </section>
                </section>
                <section className="container type-1">
                    <section>
                        <h3>Design</h3>
                        <Tag tags={design} />
                    </section>
                </section>
                <section className="container type-1">
                    <section>
                        <h3>Version Control</h3>
                        <Tag tags={versionControl} />
                    </section>
                </section>
                <section className="container type-1">
                    <section>
                        <h3>Certificate</h3>
                        <Tag tags={certificate} />
                    </section>
                </section>
            </div>
        </Wrapper>
    );
}

export default Skill;
