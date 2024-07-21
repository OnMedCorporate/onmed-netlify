import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitAsgharHusain(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/Asghar-Husain.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
