import React from "react";
// Este contenedor se llama desde components/App.jsx.
const Layout = ({ children })=>{
    return(
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;
