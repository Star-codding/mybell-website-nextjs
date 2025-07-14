"use client"
import "./globals.css";
import Header from "./comman/Header";
import Footer from "./comman/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />

        </Provider>

      </body>
    </html>
  );
}
