import { createRoot } from "react-dom/client";
import Card from "./Card.jsx";
import './Card.css'
import { StrictMode } from "react";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
    <Card value='Nishant' />
    <App/>
    </StrictMode>
);