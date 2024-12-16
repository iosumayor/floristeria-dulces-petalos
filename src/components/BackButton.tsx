import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_TEXTS } from "constants/textPaths";
import "styles/BackButtonStyles.css";

const BackButton: React.FC = () => {
    const navigate = useNavigate();


    return(
        <button className="back-button" onClick={() => navigate("/")}>
            {APP_TEXTS.BACK_BUTTON}
        </button>
    );
};

export default BackButton;