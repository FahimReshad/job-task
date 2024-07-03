import { MdArrowOutward } from "react-icons/md";
import advancedTech from "../../public/Media/Rectangle 27-2.png";
import onlineDoctor from "../../public/Media/Rectangle 27-1.png";
import consultancy from "../../public/Media/Rectangle 27.png";
const Service = () => {
  return (
    <div className="mt-10 lg:mt-28 bg-[#FFFFF5] rounded-3xl p-10 grid md:grid-cols-2 gap-8">
      <div className="space-y-4 lg:space-y-12 text-center lg:text-start">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-10 py-2 w-fit mx-auto lg:mx-0">
          Service
        </h3>
        <h1 className="text-3xl lg:text-5xl text-[#020043] font-bold">
          Empowering Health, <br /> Enriching Lives
        </h1>
        <p className="text-[#020043] text-xl font-semibold">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
          <div className="mt-6 lg:mt-12">
            <btn className="btn bg-[#FFC637] font-semibold text-xl">
              Appointment <MdArrowOutward />
            </btn>
          </div>
        </p>
      </div>
      {/* col span-2 */}
      <div className=" relative">
        <div>
          <img
            className="w-full h-full opacity-90 rounded-3xl"
            src={advancedTech}
            alt=""
          />
        </div>
        <div>
          <div className="shadow-xl bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-4xl font-semibold">
              Advanced Technology
            </h2>
            <p className="md:text-xl font-medium">
              Our surgeons are trained in the <br /> latest robotic surgical{" "}
              <br /> techniques, which allow for <br /> greater precision
            </p>
          </div>
        </div>
      </div>
      {/* col span- 3 */}
      <div className=" relative">
        <div>
          <img
            className="w-full h-full opacity-90 rounded-3xl"
            src={onlineDoctor}
            alt=""
          />
        </div>
        <div>
          <div className="shadow-xl bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-4xl font-semibold">
              Online Doctor Meet
            </h2>
            <p className="lg:text-xl font-medium">
              Our surgeons are trained in the latest <br /> robotic surgical
              techniques, which <br /> allow for greater precision
            </p>
          </div>
        </div>
      </div>
      {/* col span 4 */}
      <div className=" relative">
        <div>
          <img
            className="w-full h-full opacity-90 rounded-3xl"
            src={consultancy}
            alt=""
          />
        </div>
        <div>
          <div className="shadow-xl bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-4xl font-semibold">
              Consultancy your health
            </h2>
            <p className="lg:text-xl font-medium">
              Our surgeons are trained in the latest <br /> robotic surgical
              techniques, which <br /> allow for greater precision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
