import React from "react";

const RatingStar = ({ max, value, color = "#f8e825" }) => {
    return (
        <span>
            <i
                className={value >= max ? "fas fa-star" : value >= max - 0.5 ? "fas fa-star-half-alt" : "far fa-star"}
                style={{ color }}
            ></i>
        </span>
    );
};

export default RatingStar;
