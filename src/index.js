import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <StartRating maxRating={5} />
        <StartRating
            maxRating={5}
            color="blue"
            size={30}
            defaultRating={4}
            messages={["bad", "okay", "good", "verygood", "amazing"]}
        /> */}
    </React.StrictMode>
);
