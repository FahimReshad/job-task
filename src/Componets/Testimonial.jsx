import React from "react";
import { FaStar } from "react-icons/fa6";
import itProfessionalImg from "../../public/Media/Ellipse 10.png";
import bussinessExImg from "../../public/Media/Ellipse 10 (1).png";
import lawyerImg from "../../public/Media/Ellipse 10 (2).png";

const Testimonial = () => {
  return (
    <div className="mt-10 lg:mt-28">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-10 py-2 w-fit mx-auto lg:mx-0">
          Testimonial
        </h3>
        <h1 className="text-3xl lg:text-5xl text-[#020043] font-bold text-center lg:text-start">
          What they say about us
        </h1>
      </div>
      {/* it professional person card  */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-16">
        <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9 space-y-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#020043]">
            Expertise and Compassion Combined
          </h1>
          <p className="text-[#020043] font-medium">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-4">
            <div>
              <img src={itProfessionalImg} alt="" />
            </div>
            <div>
              <h5 className="text-[#020043]">
                <span className="font-bold text-[#020043]">Sarah D, </span> IT
                Professional
              </h5>
              <div className="flex gap-1">
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
              </div>
            </div>
          </div>
        </div>
        {/* bussiness Executive person card  */}
        <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9 space-y-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#020043]">
            Life-Saving Care, Life-Changing Experience
          </h1>
          <p className="text-[#020043] font-medium">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex gap-4">
            <div>
              <img src={bussinessExImg} alt="" />
            </div>
            <div>
              <h5 className="text-[#020043]">
                <span className="font-bold text-[#020043]">Michael R, </span>{" "}
                Business Executive
              </h5>
              <div className="flex gap-1">
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
              </div>
            </div>
          </div>
        </div>
        {/* lawyer person card  */}
        <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9 space-y-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#020043]">
            A Partner in Health and <br />
            Wellness
          </h1>
          <p className="text-[#020043] font-medium">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they've become my trusted
            partner in health and
          </p>
          <div className="flex gap-4">
            <div>
              <img src={lawyerImg} alt="" />
            </div>
            <div>
              <h5 className="text-[#020043]">
                <span className="font-bold text-[#020043]">David S, </span>{" "}
                Lawyer
              </h5>
              <div className="flex gap-1">
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
