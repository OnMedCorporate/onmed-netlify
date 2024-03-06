import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitAnnaYounger(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/Anna-Younger.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
