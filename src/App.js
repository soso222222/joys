import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Header, Footer } from "./Components/Pages/Main";
import Menu from "./Components/Pages/Main/TopMenu/Menu";
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
