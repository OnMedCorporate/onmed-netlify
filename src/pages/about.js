import * as React from "react";
import Layout from "../components/layout";
import MetaTags from "../components/meta-tags";
import CardColsSecondary from "../components/card-cols-secondary";
import { ImgInnovationForReal } from "../components/images/general/innovation-for-real";
import { ImgPortraitKarthikGanesh } from "../components/images/portraits/Karthik-Ganesh";
import { ImgPortraitSteveJohnston } from "../components/images/portraits/steve-johnston";
import { ImgPortraitPlaceholder } from "../components/images/portraits/placeholder";
import { ImgPortraitMikeZeman } from "../components/images/portraits/mike-zeman";
import { ImgPortraitPatriciaAgnello } from "../components/images/portraits/patricia-agnello";
import { ImgPortraitShermonaMappAkotia } from "../components/images/portraits/Shermona-Mapp-Akotia";
import { ImgPortraitAshleyChristy } from "../components/images/portraits/Ashley-Christy";
import { ImgPortraitJaimeDictenberg } from "../components/images/portraits/Jaime-Dictenberg";
import { ImgPortraitHowardGruverman } from "../components/images/portraits/howard-gruverman";
import { ImgPortraitAsgharHusain } from "../components/images/portraits/Asghar-Husain";
import { ImgPortraitGordanRedzic } from "../components/images/portraits/Gordan-Redzic";
import { ImgHeroWomanScreenWomanTouchscreen } from "../components/images/heroes/woman-screen-woman-touchscreen";

import Hero from "../components/hero";


const LeadershipItem = (props) => {
    return (
        <div className="col-md-6 col-lg-4 mb-md-6">
            {props.img}
            <h5 className="mt-3 mb-0 text-primary">{props.name}</h5>
            <p
                className="lead text-uppercase"
                dangerouslySetInnerHTML={{
                    __html: props.title,
                }}
            ></p>
        </div>
    );
};

const AboutPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroWomanScreenWomanTouchscreen
                    alt="Our story"
                    position="27% 50%"
                />
            }
        >
            Step into the future of healthcare
        </Hero>
    );

    const sectionIntro = (
        <section className="container py-4 py-md-6">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xxl-6">
                    <p>
                        OnMed was founded on the commitment to make quality
                        affordable healthcare accessible to all. The company was
                        born out of an innovative spirit and belief that it
                        could create a more effective way for people to receive
                        care, including getting the medications they need
                        quickly. Our goal was to create a patient experience
                        that maintained clinical standards and protocols to
                        provide a highly personalized empathy-based
                        clinician-patient connection. The OnMed Virtual Care
                        Platform utilizes a broad range of diagnostic and
                        interactive technologies to ensure a highly efficient
                        and effective experience, but does not sacrifice the
                        real-life dynamics of a traditional brick and mortar
                        clinic setting.
                    </p>
                    <p>
                        Beyond designing a new Primary Care model and patient
                        experience with the OnMed platform, we also envisioned a
                        new professional opportunity for clinicians to practice
                        medicine and serve patients without the normal
                        constraints or requirements of working inside hospitals
                        or clinics. Going forward, OnMed will continue to expand
                        the breadth of care provided and clinical needs
                        addressed through new technologies and services, along
                        with our on going commitment to deliver the best patient
                        experience possible.
                    </p>
                </div>
            </div>
        </section>
    );

    const sectionInnovation = (
        <CardColsSecondary
            headline="Innovation for real"
            body={
                <p>
                    Over 31 Million people in the U.S. alone do not have access
                    to healthcare. At OnMed, we believe everyone has a right to
                    affordable convenient care. This real problem can only be
                    solved with real innovation. That’s why we combined the best
                    of interactive and diagnostic technology, with the medical
                    expertise and empathy of our dedicated clinicians. Together,
                    we’re opening the door to better health everywhere. That’s
                    innovation for real.
                </p>
            }
            img={<ImgInnovationForReal />}
            imgAlignRight={false}
        />
    );

    const sectionLeadershipTeam = (
        <section className="container pt-6 pb-6 pb-md-0">
            <h2 className="text-primary text-center my-6">Leadership Team</h2>
            <div className="row">
                <LeadershipItem
                    name="Karthik Ganesh"
                    title="Chief Executive Officer"
                    img={<ImgPortraitKarthikGanesh />}
                />
                <LeadershipItem
                    name="Howard Gruverman"
                    title="President / Chief Commercial Officer"
                    img={<ImgPortraitHowardGruverman />}
                />
		<LeadershipItem
                    name="Ashley Christy"
                    title="Chief Operating Officer"
                    img={<ImgPortraitAshleyChristy />}
                />
		<LeadershipItem
                    name="Asghar Husain"
                    title="Chief Financial Officer"
                    img={<ImgPortraitAsgharHusain />}
                />
		<LeadershipItem
                    name="Gordan Redzic"
                    title="Chief Product & Technology Officer"
                    img={<ImgPortraitGordanRedzic />}
                />
		<LeadershipItem
                    name="Jaime Dictenberg"
                    title="Chief Marketing Officer"
                    img={<ImgPortraitJaimeDictenberg />}
                />
		<LeadershipItem
                    name="Patricia Agnello"
                    title="Chief People Officer & Employment Counsel"
                    img={<ImgPortraitPatriciaAgnello />}
                />
                <LeadershipItem
                    name="Shermona Mapp Akotia"
                    title="General Counsel"
                    img={<ImgPortraitShermonaMappAkotia />}
                />
		

            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionIntro}
            {sectionInnovation}
            {sectionLeadershipTeam}
        </Layout>
    );
};
 
export default AboutPage;

export const Head = () => {
    const title = "About and Leadership Team - OnMed";
    return (
        <>
            <title>{title}</title>
            <MetaTags title={title} description="About OnMed was founded on the commitment to make quality affordable healthcare accessible to all." ></MetaTags>
        </>
    )

};
