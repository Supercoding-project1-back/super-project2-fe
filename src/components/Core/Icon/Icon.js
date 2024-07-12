import React from "react";
import * as icons from "../../../assets/icons";

function Icon({ type, className }) {

    const iconStyle = {
        display: "block",
        color: "transparent",
        background: `url(${icons[type]}) no-repeat center / contain`,
    };

    return <span><i style={iconStyle} className={className}></i></span>;
}

export default Icon;
