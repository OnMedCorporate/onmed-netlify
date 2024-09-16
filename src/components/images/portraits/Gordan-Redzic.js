import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitGordanRedzic(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/Gordan_Redzic.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth" 
        />
    );
}
