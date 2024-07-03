import React from "react";
import whoWeAreImg from "../../public/Media/Rectangle 24.png";
import { MdArrowOutward } from "react-icons/md";
const WhoWeAre = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-10 lg:gap-40">
                                  {/* left side */}
      <div className="space-y-6 lg:space-y-12 lg:w-1/2 text-center lg:text-start">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-8 py-2 w-fit mx-auto lg:mx-0">
          Who we are
        </h3>
        <h1 className="text-3xl md:text-3xl lg:text-5xl text-[#020043] font-bold">
          We Help To Get <br /> Soultions
        </h1>
        <p className="text-[#020043] text-xl font-semibold">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
          <div className="mt-6 lg:mt-12">
            <btn className="btn text-[#020043] btn-outline font-semibold text-xl">
              Learn more <MdArrowOutward />
            </btn>
          </div>
        </p>
      </div>
                                {/* right side */}
      <div className="lg:w-1/2 relative">
        <div>
          <img className="w-full h-full opacity-90" src={whoWeAreImg} alt="" />
        </div>
        <div>
          <div className="shadow-xl bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute -left-28 -bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-4xl font-semibold">Our mission is simple</h2>
            <p className="text-xl font-medium">
              To provide high-quality healthcare services <br /> that are
              accessible, personalized, and <br /> patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
