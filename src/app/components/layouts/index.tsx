import React from "react";

import Header from "./header";
import Footer from "./footer";

type LayooutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayooutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
