import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
    },
    fonts: {
    },
    fontSizes: {
    }
};

export default function Theme({ children }) {
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
}