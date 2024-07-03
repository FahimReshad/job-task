import { FaStar } from "react-icons/fa6";

const CareSection = () => {
  return (
    <div className="mt-10 lg:mt-20 grid grid-cols-2 lg:grid-cols-10 lg:grid-rows-12 gap-3 lg:gap-6 lg:max-h-96">
      <div className="lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-span-6">
        <h1 className="text-[#020043] lg:text-5xl font-bold text-center">
          Comprehensive Care for Every Patient
        </h1>
      </div>

      <div className="shadow-xl p-3 lg:p-6 rounded-3xl lg:space-y-4 lg:col-start-1 lg:col-end-3 border lg:row-start-1 lg:row-end-12">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#020043]">90%</h1>
        <p className="text-[#020043]">
          Patient satisfaction <br /> rate, reflecting our <br /> commitment.
        </p>
        <div className="flex justify-end items-end">
          <img className="w-1/4 lg:w-fit" src="../../public/Media/circle.png" alt="" />
        </div>
      </div>
      <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-4 lg:col-start-3 lg:col-end-5">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#020043]">500+</h1>
        <p className="text-[#020043]">
          Board-certified <br /> doctors
        </p>
        <div className="flex justify-end lg:-mt-4">
          <img className="" src="../../public/Media/contract.png" alt="" />
        </div>
      </div>
      <div className="shadow-xl rounded-3xl border lg:row-start-7 lg:row-end-12 py-3 px-5 space-y-2 lg:col-start-5 lg:col-end-7">
        <div className="flex items-center text-2xl lg:text-4xl gap-2">
          <h1 className=" font-bold text-[#020043]">4.8</h1>
          <FaStar className="text-[#FFE03D]" />
        </div>
        <p className="text-[#020043]">Over 20,000 Patient</p>
        <div className="">
          <img className="" src="../../public/Media/Group.png" alt="" />
        </div>
      </div>
      <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#020043]">$5000</h1>
        <p className="text-[#020043]">
          Money spend <br />
          for poor patient
        </p>
        <div className="flex justify-end -mt-4">
          <img className="" src="../../public/Media/Group1.png" alt="" />
        </div>
      </div>
      <div className="shadow-xl p-3 lg:p-6 rounded-3xl space-y-2 lg:space-y-4 border lg:row-start-1 lg:row-end-12 lg:col-start-9 lg:col-end-11">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#020043]">50+</h1>
        <p className="text-[#020043]">
          Free lession video <br />
          for patient
        </p>
        <div className="flex justify-center items-end">
          <img className="w-1/4 lg:w-fit" src="../../public/Media/Group2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CareSection;
