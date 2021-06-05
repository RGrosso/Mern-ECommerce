import React from "react";
import RatingStar from "./RatingStar";

const Rating = ({ value, text, color }) => {
    return (
        <div className="rating d-flex">
            {Array.from(Array(5), (e, i) => {
                return <RatingStar value={value} max={i + 1} color={color} key={`rating-${i}`} />;
            })}
            {text && <p className="ml-2 mb-0">{text}</p>}
        </div>
    );
};

export default Rating;
