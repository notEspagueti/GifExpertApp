import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Categories } from "./GifExpertApp";
import './helpers/EnterKey';


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Categories />
    </StrictMode>
);

