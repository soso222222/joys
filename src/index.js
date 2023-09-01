import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Style/GlobalStyles";
import App from "./App";
import { store } from "./Stores/store";
import theme from "./Style/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <BrowserRouter>
                        <GlobalStyles />
                        <App />
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
