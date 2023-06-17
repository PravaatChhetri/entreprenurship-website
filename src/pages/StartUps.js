import React from 'react'
import st from "../img/startup.jpeg"

const StartUps = () => {
  return (
    <div className="mb-10">
    <div className="">
      <div className="relative flex justify-center items-start h-[400px] w-auto">
        <img
          src={st}
          alt="Startup Background"
          className="w-full lg:h-full relative object-center object-cover"
        />
        <h1 className="absolute bottom-40 lg:bottom-10 left-0 px-6 py-10 font-bold text-white md:px-20 md:py-10 md:text-8xl">
StartUps        </h1>
      </div>
    </div>
    I
    <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
      <h2 id="vision" className="text-2xl font-bold my-4 text-[#1d83bd]">Existing</h2>
      <div className=" bg-white shadow-md rounded-lg p-6 mx-auto">
        <p className="text-gray-700 text-xl">
          To create a world where every individual with an entrepreneurial
          spirit has the opportunity to turn their ideas into successful and
          impactful ventures, contributing to economic growth and societal
          progress.{" "}
        </p>
      </div>
    </div>
    <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
      <h2 id="mission" className="text-2xl font-bold my-4 text-[#1d83bd]">Incubates</h2>
      <div className=" bg-white shadow-md rounded-lg p-6 mx-auto">
        <p className="text-gray-700 text-xl">
          <ul className="list-disc list-inside flex flex-col gap-y-[15px]">
            <li>
              <span className="font-bold">Empowering Startups:</span> Our
              mission is to empower startups by providing the resources,
              mentorship, and support they need to thrive and make a positive
              impact.
            </li>
            <li>
              <span className="font-bold">Fostering Mentorship:</span> We
              foster a community of experienced mentors who share their
              knowledge and guidance to accelerate the growth of startups.
            </li>
            <li>
              <span className="font-bold">Facilitating Collaboration:</span>{" "}
              We facilitate networking and collaboration opportunities among
              startups, mentors, investors, and industry experts.
            </li>
            <li>
              <span className="font-bold">Driving Innovation:</span> We drive
              innovation by encouraging the development and adoption of
              cutting-edge technologies and disruptive ideas.
            </li>
            <li>
              <span className="font-bold">Promoting Diversity:</span> We
              promote diversity and inclusion, creating an environment that
              welcomes entrepreneurs from all backgrounds.
            </li>
            <li>
              <span className="font-bold">Enabling Funding Access:</span> We
              enable startups to access funding opportunities by connecting
              them with potential investors and providing fundraising
              guidance.
            </li>
            <li>
              <span className="font-bold">
                Advocating for Entrepreneurship:
              </span>{" "}
              We advocate for entrepreneurship, promoting policies and
              initiatives that support the growth of startups.
            </li>
          </ul>
        </p>
      </div>
    </div>
    <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
      <h2 id="PandR" className="text-2xl font-bold my-4 text-[#1d83bd]">
        Graduates
      </h2>
      <div className=" bg-white shadow-md rounded-lg p-6 mx-auto">
        <p className="text-gray-700 text-xl">
          <ul className="list-disc list-inside flex flex-col gap-y-[15px]">
            <li>
              <span className="font-bold">Confidentiality Policy:</span> We
              maintain strict confidentiality of all sensitive information
              shared by startups, mentors, and other stakeholders.
            </li>
            <li>
              <span className="font-bold">Code of Conduct:</span> We uphold a
              code of conduct that promotes professionalism, respect, and
              ethical behavior among all participants in our community.
            </li>
            <li>
              <span className="font-bold">Data Privacy Policy:</span> We are
              committed to protecting the privacy and security of personal
              data collected and processed through our platform.
            </li>
            <li>
              <span className="font-bold">Intellectual Property Policy:</span>{" "}
              We respect and protect the intellectual property rights of
              startups and mentors, fostering an environment that encourages
              innovation and creativity.
            </li>
            <li>
              <span className="font-bold">
                Non-Disclosure Agreement (NDA):
              </span>{" "}
              We offer a standard Non-Disclosure Agreement for startups and
              mentors to safeguard their confidential information during
              engagements and collaborations.
            </li>
            <li>
              <span className="font-bold">
                Compliance with Laws and Regulations:
              </span>{" "}
              We adhere to all applicable laws, regulations, and industry
              standards to ensure the legality and integrity of our
              operations.
            </li>
          </ul>
        </p>
      </div>
    </div>
    <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
      <h2 id="framework" className="text-2xl font-bold my-4 text-[#1d83bd]">StartUps</h2>
        <div className=" bg-white shadow-md rounded-lg p-6 mx-auto">
          <p className="text-gray-700 text-xl">
            At Startup Bhutan, we follow a robust framework that combines
            industry best practices and innovative methodologies. Our
            framework encompasses strategic planning, agile development,
            continuous improvement, and stakeholder engagement. By leveraging
            this framework, we ensure the efficient and effective delivery of
            our services and support to startups and mentors.
          </p>
        </div>
    </div>



  </div>
  )
}

export default StartUps