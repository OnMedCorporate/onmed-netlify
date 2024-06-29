import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitAnnaYounger(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/Shermona-Mapp-Akotia.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
