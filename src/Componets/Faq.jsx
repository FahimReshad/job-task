import React from "react";

const Faq = () => {
  return (
    <div className="mt-10 lg:mt-28">


      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-8 py-2 w-fit mx-auto lg:mx-0">
        Faq
        </h3>
        <h1 className="text-2xl lg:text-5xl text-[#020043] font-bold text-center lg:text-start">
        Frequntly Asked Question
        </h1>
      </div>


      <div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 mt-6 md:px-6">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium text-[#020043]"> What are your office hours?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 px-6">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-[#020043]">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p>To schedule an appointment, determine the purpose and find a suitable date and time. Contact the relevant party via phone, email, or an online tool, providing necessary details. Confirm the appointment and set reminders.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 px-6">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-[#020043]">Do you accept insurance?</div>
  <div className="collapse-content">
    <p>Yes, we accept a variety of insurance plans. Please contact our office or check our website for a list of accepted providers and specific details about coverage.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 px-6">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-[#020043]">What should I bring to my appointment?</div>
  <div className="collapse-content">
    <p>For your appointment, please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records. Additionally, bring a method of payment for any co-pays or fees.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 px-6">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-[#020043]">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p>
    Yes, we offer telemedicine appointments for certain types of consultations. Please contact our office or visit our website to check eligibility and schedule a virtual visit.</p>
  </div>
</div>


    </div>
  );
};

export default Faq;
