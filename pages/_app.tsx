import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../Components/Layout/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../Theme/Theme";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>

    )
}