import React from "react";
import ListFigureGrid from "../components/list-figure-grid";
import ListFigureGridItem from "../components/list-figure-grid-item2";
import SvgNewWindow from "../components/svgs/new-window";
import { Link } from "gatsby";
import { ImgWomanThouchscreen } from "../components/images/woman-touchscreen";
import { ImgPTHoltingBottleExit } from "../components/images/pt-holding-bottle-exit";
import { Imgvmc } from "../components/images/vmc";

const CareerPoints = (props) => {
    
    return (
        <>
            <h2 className="text-center mb-5">
                Careers at OnMed
            </h2>
            <ListFigureGrid hasIcons={true}>
                <ListFigureGridItem
                    headline="Why Work At OnMed"
                    body={
                        <p>
                            The Company was born out of an innovative spirit and belief that it could create a more effective way for people to receive care, including getting the medications they need quickly.
                            <br /><br />OnMed provides the opportunity to be part of the leading edge of virtual health care.  Our team is committed to providing access to quality affordable care for everyone.
                        </p>
                    }
                    img={<ImgWomanThouchscreen alt="Woman Sees Patient" />}
                />
                <ListFigureGridItem
                    headline="OnMed Careers"
                    body={
                        <p>
                            Be a part of the new world of health care and join the OnMed team. <br /><br />
                            <Link
                                to="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=3ae5dc83-4d29-4017-9f9c-481dcf3fef6d&ccId=9200854866217_2&source=LI&lang=en_US&selectedMenuKey=CurrentOpenings"
                                className="btn btn-primary text-uppercase mb-3  mx-3 d-inline-flex align-items-center"
                                target="_blank"
                            >
                                APPLY NOW
                                <SvgNewWindow
                                    className="ms-2"
                                    style={{
                                        height: "14px",
                                        width: "auto",
                                    }}
                                />
                            </Link>
                        </p>
                    }
                    img={<Imgvmc alt="Virtual Medical Center" />}
                />
                <ListFigureGridItem
                    headline="Benefits"
                    body={
                        <p>
                            Our Employees’ Well-Being is as Important as the Patients We Serve. <br /><br />
                            <Link
                                to="/benefits/"
                                className="btn btn-primary text-uppercase mb-3  mx-3 d-inline-flex align-items-center"
                                target="_blank"
                            >
                                Learn More
                                <SvgNewWindow
                                    className="ms-2"
                                    style={{
                                        height: "14px",
                                        width: "auto",
                                    }}
                                />
                            </Link>
                        </p>
                    }
                    img={<ImgPTHoltingBottleExit alt="Patient Exit OnMed Care Station" />}
                />
                <div className="w-100"></div>
                
            </ListFigureGrid>
        </>
    );
};

export default CareerPoints;
