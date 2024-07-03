import Banner from "../../Componets/Banner";
import CareSection from "../../Componets/CareSection";
import Discount from "../../Componets/Discount";
import Faq from "../../Componets/Faq";
import Service from "../../Componets/Service";
import Testimonial from "../../Componets/Testimonial";
import WhoWeAre from "../../Componets/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CareSection></CareSection>
      <WhoWeAre></WhoWeAre>
      <Service></Service>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Discount></Discount>
    </div>
  );
};

export default Home;
