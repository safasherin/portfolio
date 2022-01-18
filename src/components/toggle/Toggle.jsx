import React, { useContext } from 'react'
import "./toggle.css";
// import Moon from "../../images/moon.png"
// import Sun from "../../images/sun.png"
import { ThemeContext } from '../../context';
export default function Toggle() {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })

    }
    return (
        <div className="t" >
            <img src="https://res.cloudinary.com/dv3uj18zo/image/upload/v1642505188/portfolio/moon_dekdbf.png" alt="" className="t-icon" />
            <img src="https://res.cloudinary.com/dv3uj18zo/image/upload/v1642505195/portfolio/sun_ruc1un.png" alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick}
                style={{ left: theme.state.darkMode ? "0px" : "25px" }}
            ></div>
        </div>
    )
}
