import React from "react";
import ListFigureGrid from "../components/list-figure-grid";
import ListFigureGridItem from "../components/list-figure-grid-item2";
import SvgNewWindow from "../components/svgs/new-window";
import { Link } from "gatsby";
import { ImgWomanThouchscreen } from "../components/images/woman-touchscreen";
import { ImgPTHoltingBottleExit } from "../components/images/pt-holding-bottle-exit";
import { Imgvmc } from "../components/images/vmc";

import YouTube from "react-youtube";
import Modal from "react-bootstrap/Modal";
import { VideoShortForm } from "../components/video-short-form";
import SvgVideoCamera from "../components/svgs/video-camera";




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
                            Founded in 2013, the Company was born out of an innovative spirit and belief that it could create a more effective way for people to receive care, including getting the medications they need quickly.
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
                                to="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=3ae5dc83-4d29-4017-9f9c-481dcf3fef6d&ccId=19000101_000001&source=LI&lang=en_US&selectedMenuKey=CareerCenter"
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
                                to="/patients/"
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
                            <div className="mt-6 mt-6">
                                <Video />
                            </div>
                        </p>
                    }
                    img={<ImgPTHoltingBottleExit alt="Patient Exit OnMed Care Station" />}
                />
                <div className="w-100"></div>
                
            </ListFigureGrid>
        </>
    );
};

function Video() {
        const [lgShow, setLgShow] = useState(false);

        return (
            <>
                <Button
                    className="btn btn-primary text-uppercase mb-3 d-inline-flex align-items-center"
                    onClick={() => setLgShow(true)}
                >
                    <SvgVideoCamera
                        className="me-2
                                "
                        style={{
                            height: "14px",
                            width: "auto",
                        }}
                    />{" "}
                    Watch the video
                </Button>

                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    centered
                >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="d-flex justify-content-center align-items-center">
                        <YouTube
                            videoId="u84r7ZQar4Q"
                            className="youtube-container"
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }

export default CareerPoints;
