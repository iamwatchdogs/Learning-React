import React from "react";
import ReactDOM from "react-dom/client";

// Imported components
import App from "./App";
import { LoremPara1, LoremPara2, AnotherApp } from "./AnotherApp";
import { BehindTheScenes } from "./BehindTheScenes";
import JSXRules from "./JSXRules";

// Note that Component identifier has Camel casing notion
function MyFirstComponent() {
    return <h1>Hello World</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MyFirstComponent />
        <App />
        <AnotherApp />
        <LoremPara1 />
        <LoremPara2 />
        <BehindTheScenes />
        <JSXRules />
    </React.StrictMode>
);
