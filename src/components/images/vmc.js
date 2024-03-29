import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Imgvmc(props) {
    return (
        <StaticImage
            src="../../../static/images/general/vmc.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
