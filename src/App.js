import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Header, Footer } from "./Components/UI/organisms";
import Menu from "./Components/UI/organisms/TopMenu/Menu";
function App() {
    const menu = Menu();
    return (
        <Layout>
            <Header />
            <main className="custom-scroll">
                <Routes>
                    {menu?.map((i) => {
                        return <Route element={i.el} path={i.url} />;
                    })}
                </Routes>
            </main>
            <Footer />
        </Layout>
    );
}

export default App;
