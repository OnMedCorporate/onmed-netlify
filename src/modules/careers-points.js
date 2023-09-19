import React from "react";
import ListFigureGrid from "../components/list-figure-grid";
import ListFigureGridItem from "../components/list-figure-grid-item";
import SvgNewWindow from "../components/svgs/new-window";
import { Link } from "gatsby";
import { ImgHexWalkIn } from "../components/images/hex-walk-in";

const modal = document.querySelector("#modal");
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");

if (modal) {
  openModal &&
    openModal.addEventListener("click", () => modal.showModal());

  closeModal &&
    closeModal.addEventListener("click", () => modal.close());
}

const CareerPoints = (props) => {
    return (
        <>
            <h2 className="text-center mb-5">
                The OnMed Care Station Experience
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
                    img={<ImgHexWalkIn alt="An OnMed Care Station" />}
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
                    img={<ImgHexWalkIn alt="An OnMed Care Station" />}
                />
                <ListFigureGridItem
                    headline="Benefits"
                    body={
                        <p>
                            Our Employees’ Well-Being is as Important as the Patients We Serve. <br /><br />
                            <button id="openModal">Open the modal</button>

                            <dialog id="modal">
                              <p>Modal content of your choice. Click the below button or press the escape key to close this.</p>
                              <button id="closeModal">Close this modal</button>
                            </dialog>
                        </p>
                    }
                    img={<ImgHexWalkIn alt="An OnMed Care Station" />}
                />
                <div className="w-100"></div>
                
            </ListFigureGrid>
        </>
    );
};

export default CareerPoints;
