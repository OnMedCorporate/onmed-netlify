import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroClinicianStationConsultVMC(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/clinician-station-consult-vmc.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
