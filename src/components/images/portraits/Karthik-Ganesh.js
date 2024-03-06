import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitKarthikGanesh(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/Karthik-Ganesh.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
