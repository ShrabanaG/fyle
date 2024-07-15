import ClientFeedback from "../../components/clientsfeedback/ClientFeedback";
import Footer from "../../components/footer/Footer";
import Growth from "../../components/growth/Growth";
import HeroSection from "../../components/heroSection/HeroSection";
import Project from "../../components/projects/Projects";
import WhatWeDo from "../../components/whatwedo/WhatWeDo";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";

const Home = () => {
    return (
        <div className="main-container">
            <HeroSection />
            <WhatWeDo />
            <WhyChooseUs />
            <Project />
            <Growth />
            <ClientFeedback />
            <Footer />
        </div>
    )
}

export default Home;