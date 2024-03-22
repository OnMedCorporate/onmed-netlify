import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitJaimeDictenberg(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/Jaime-Dictenberg.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
