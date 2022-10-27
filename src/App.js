import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
    const [img, setImg] = useState("");

    useEffect(() => {
        const url = "https://randomfox.ca/floof/";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.image);
                setImg(json.image);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div class = "imgbox">
            <h1>Random Fox Image</h1>
            <img src = {img} alt = "random fox"/>
        </div>
    );
};

export default App;

