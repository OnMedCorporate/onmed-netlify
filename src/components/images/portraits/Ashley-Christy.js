import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitAshleyChristy(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/Ashley-Christy.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
