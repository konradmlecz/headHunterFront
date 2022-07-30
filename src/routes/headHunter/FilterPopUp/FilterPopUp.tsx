import React from "react";

import './FilterPopUp.css';

interface Props {
    setIsPopUpVisible: (bool: boolean) => void;
}

export const FilterPopUp = ({setIsPopUpVisible}: Props) => {

    const handleCancelButton = () => {
        setIsPopUpVisible(false);
    }

    return (
        <>
            <div className="popup-outer-wrapper"></div>
            <div className="popup-inner-wrapper">
                <form action="" className="popup-inner-wrapper__form">
                    <p>PopUp!!!</p>
                    <button className="popup-inner-wrapper__form__cancel-button" onClick={handleCancelButton}>Anuluj</button>
                    <input type="submit" value="Pokaż wyniki"/>
                </form>
            </div>
        </>
    );
};