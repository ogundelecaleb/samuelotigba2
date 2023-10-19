import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import ProductDesign from "./component/ProductDesign";
import JourneyAccordion from "./component/JourneyAccordion";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import Branding from "./component/Branding";
import Marketing from "./component/Marketing";
import Brands from "./component/Brands";

const Layout = () => {
  const [product, setProduct] = useState("productdesign");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section
        id="hero"
        // ref={topEl}
        className=" relative h-[926px] md:h-[900px] bg-no-repeat bg-contain sm:bg-center py-[24px] px-[16px]  md:py-[32px] md:px-[48px]"
      >
        <img
          className="absolute top-0 left-0 -z-10 h-full object-cover hidden md:flex"
          src="/heroImageBig.png"
          alt=""
        />
        <img
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover md:hidden "
          src="/heroImagesmall.png"
          alt=""
        />
        <div className="w-full h-full absolute bg-[#000000]/30 left-0 top-0 -z-[8]"></div>

        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="" />{" "}
          <div className="hidden md:block">
            <ul className="flex text-white text-[18px] font-medium gap-[8px]">
              <li>ABOUT</li>
              <li>PORTFOLIO</li>
              <li>JOURNEY</li>
              <li>COLLABORATIONS</li>
            </ul>
          </div>
          <button
            //   onClick={() => {
            //     scrollingBottom();
            //     setContactBox(!contactbox);
            //   }}
            className="border-white border md:px-[20px] md:py-[12px] lg:px-[20px] lg:py-[12px] rounded-[40px] text-white text-[18px] font-medium md:block hidden"
          >
            WORK WITH ME
          </button>
          <button
            //   onClick={() => {
            //     scrollingBottom();
            //     setContactBox(!contactbox);
            //   }}
            className="border-white border px-[16px] py-[10px] md:px-[20px] md:py-[12px] lg:px-[20px] lg:py-[12px] rounded-[40px] text-white text-[18px] font-medium md:hidden "
          >
            MENU
          </button>
        </div>
        <div className="mt-[600px] md:mt-[300px] md:w-[50%] lg:w-[43%]">
          <p className="text-white md:text-[24px] text-left ">
            Hi! 👋 <br />I am Samuel Otigba, a daily Product Growth and
            Marketing Specialist and also a Product/ Industrial designer every
            other night. I am a visionary(Sam calls me that LOL) who currently
            lives in Lagos, Nigeria.
          </p>
        </div>
        <button
          // onClick={scrollingBottom}
          className="text-white text-[16px]  md:text-[24px] absolute  cursor-pointer flex gap-1 items-center bottom-[23px] z-20 left-[16px]  md:bottom-[32px] md:left-[48px]"
        >
          <p>scroll down</p> <AiOutlineArrowDown className="animate-bounce " />
        </button>
      </section>
      <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
        <button className="text-white border-[0.4px] border-[#DBDBDB] rounded-[40px] px-[34px] py-[16px]">
          ABOUT ME
        </button>

        <h2 className="text-[34px] md:text-[52px] lg:text-[72px] font-semibold leading-[40px] md:leading-[60px] lg:leading-[86px] my-[16px] text-white">
          Hi! I'm Samuel, a versatile individual with diverse interests and
          skills.
        </h2>
        <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
          I thrive as a daily Growth Hacker and Product Marketing Specialist.
        </p>
        <p className="text-white">
          By night, I channel my creativity as a Product/Industrial Designer. I
          excel in connecting people over good food and whisky, earning me the
          title of Super connector. I'm known as a visionary, a nickname given
          by my good friend Sam. Originally from Manchester, UK, I now reside in
          Lagos,{" "}
          <span className={`${open ? "block" : "hidden"}`}>
            {" "}
            Nigeria. I have an appreciation for all things beautiful and possess
            a sophisticated taste. When I'm not out and about, I enjoy being a
            homebody and curating amazing home pieces for the soulful
            minimalist, Check out{" "}
            <a
              href="https://instagram.com/blvckapron_?igshid=NTc4MTIwNjQ2YQ== "
              target="blank"
              className="underline"
            >
              Blvck Apron
            </a>{" "}
            . I'm constantly pushing my boundaries to create unique and engaging
            <a href="www.google.com" target="blank" className="underline">
              content
            </a>
            . My heart belongs to{" "}
            <a href="www.google.com" target="blank" className="underline">
              Dr. Bisola
            </a>
            , my energetic and gorgeous yin. Although I'm now in my 30s, I used
            to be a lot more fun! Marvel comics and movies are my obsessions.
            Sharing my knowledge and teaching{" "}
            <a href="www.google.com" target="blank" className="underline">
              digital designs
            </a>{" "}
            brings me joy. If you're interested, I have a more detailed{" "}
            <a href="www.google.com" target="blank" className="underline">
              résumé
            </a>
            showcasing my professional journey. As a digital philanthropist, I
            enjoy giving back through{" "}
            <a href="www.google.com" target="blank" className="underline">
              job
            </a>
            opportunities and helping others. Mango Lassi is my ultimate
            addiction. With years of experience, I bring a wealth of knowledge
            and expertise to everything I do. Every encounter I have is an
            opportunity to tell a story., and you can find most of it on{" "}
            <a href="www.google.com" target="blank" className="underline">
              @samuelotigba
            </a>
            . Stay tuned because there are many more exciting things to come
            from me.
          </span>
        </p>
        <div className="w-full flex justify-center">
          {open && (
            <button
              onClick={() => setOpen(!open)}
              className="text-black flex gap-1 text-[14px] lg:text-[16px] items-center bg-slate-50 border-[0.4px] border-[#DBDBDB] rounded-[40px] px-[10px] py-[8px] mb-[16px]"
            >
              Show Less{" "}
            
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4591 7.52495L7.19906 4.26495C6.81406 3.87995 6.18406 3.87995 5.79906 4.26495L2.53906 7.52495"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          )}
          {open === false && (
            <button
              onClick={() => setOpen(!open)}
              className="text-black flex gap-1 items-center bg-slate-50 border-[0.4px] border-[#DBDBDB] rounded-[40px] px-[10px] py-[8px] mb-[16px] text-[14px] lg:text-[16px]"
            >
              Continue Reading{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.95906 4.47498L6.69906 7.73498C6.31406 8.11998 5.68406 8.11998 5.29906 7.73498L2.03906 4.47498"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>




            </button>
          )}
        </div>

        <button className="text-white border-[0.4px] border-[#DBDBDB] rounded-[40px] px-[34px] py-[16px] mt-[40px] md:mt-[70px] lg:mt-[104px] mb-[16px]">
          PORTFOLIO
        </button>
        <h3 className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-[24px] md:mb-[48px] lg:mb-[64px]">
          Deliverables from some Marketing & growth initiatives, product designs
          and branding development projects that I’ve led.
        </h3>

        <div>
          <ul className="flex justify-between  gap-[2px] lg:border-b border-b-white pb-[20px] lg:pb-0">
            <li
              onClick={() => setProduct("productdesign")}
              className={`cursor-pointer whitespace-nowrap   ${
                product === "productdesign" ? "text-white" : "text-[#C1C1C1]"
              } text-[16px] md:text-[20px] lg:text-[24px] flex flex-col gap-[24px] `}
            >
              Product Designs{" "}
              <div className="hidden lg:block">
                <span
                  className={`w-[112px] h-[4px]  ${
                    product === "productdesign" ? "block" : "hidden"
                  } bg-white rounded-md`}
                ></span>
              </div>
            </li>
            <li
              onClick={() => setProduct("branding")}
              className={` cursor-pointer whitespace-nowrap   ${
                product === "branding" ? "text-white" : "text-[#C1C1C1]"
              } text-[16px] md:text-[20px] lg:text-[24px] flex flex-col gap-[24px] `}
            >
              Branding{" "}
              <div className="hidden lg:block">
                <span
                  className={`w-[112px] h-[4px] ${
                    product === "branding" ? "block" : "hidden"
                  } bg-white rounded-md`}
                ></span>
              </div>
            </li>
            <li
              onClick={() => setProduct("market")}
              className={`cursor-pointer whitespace-nowrap   ${
                product === "market" ? "text-white" : "text-[#C1C1C1]"
              } text-[16px] md:text-[20px] lg:text-[24px] flex flex-col gap-[24px] `}
            >
              Marketing
              <div className="hidden lg:block">
                <span
                  className={`w-[112px] h-[4px] ${
                    product === "market" ? "block" : "hidden"
                  } bg-white rounded-md`}
                ></span>
              </div>
            </li>
            <li
              onClick={() => setProduct("brand")}
              className={` cursor-pointer whitespace-nowrap  ${
                product === "brand" ? "text-white" : "text-[#C1C1C1]"
              } text-[16px] md:text-[20px] lg:text-[24px] flex flex-col gap-[24px] `}
            >
              Brand{" "}
              <div className="hidden lg:block">
                <span
                  className={`w-[112px] h-[4px] ${
                    product === "brand" ? "block" : "hidden"
                  } bg-white rounded-md`}
                ></span>
              </div>
            </li>
          </ul>
        </div>
        {product === "productdesign" && (
          <div>
            <ProductDesign />
          </div>
        )}
        {product === "branding" && (
          <div className="text-white">
            <Branding />
          </div>
        )}
        {product === "market" && (
          <div className="text-white">
            <Marketing />
          </div>
        )}
        {product === "brand" && (
          <div className="text-white">
            <Brands />
          </div>
        )}
      </section>
      <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
        <div className="mb-[24px]">
          <button className="text-white border border-[#DBDBDB] rounded-[40px] px-[34px] py-[10px] lg:py-[16px] mb-[16px] text-[12px] md:text-base lg:text-[18px] ">
            JOURNEY
          </button>
          <div>
            <p className="text-[14px] md:text-[24px] lg:text-[28px] text-white w-full ">
              Here is where I get to be quite serious.
              <br />
              I’ve gone through quite a number of phases in my career life, and
              each of them has shaped my current work ethos and philosophy.
              <br />
              <br />I have excelled in a number of project management roles in
              diverse industries, and believe that my number one asset is my
              ability to adapt to any challenge that is thrown my way.
            </p>
          </div>
        </div>
        <JourneyAccordion
          company={"Bezi"}
          position={"Chief Growth Officer"}
          date={""}
          more={"false"}
        />
        <JourneyAccordion
          company={"Meta"}
          position={"Product Marketing Manager (NPE)"}
          date={"June ‘22 - Sept '22"}
          more={"false"}
        />
        <JourneyAccordion
          company={"AVANTEFLY"}
          position={"Chief Operating Officer"}
          date={"Since March 2021"}
          more={"true"}
        />
        <JourneyAccordion
          company={"Smart Edge"}
          position={"Senior Partner (Client Development)/Business Consultant)"}
          date={"Oct '19 - Jan '21"}
          more={"true"}
        />
        <JourneyAccordion
          company={"CAX Africa"}
          position={"Head Digital Communications/Digital Marketing Consultant"}
          date={"Nov '19 - Jan '20"}
          more={"true"}
        />
        <JourneyAccordion
          company={"Nemakeathon"}
          position={"Panelist/Facilitator/Mentor"}
          extra={"Under The Office Of The Vice President Of Nigeria"}
          date={"Feb '18 - Jun '18"}
          more={"true"}
        />
        <JourneyAccordion
          company={"United Nations NGO: Youth Charter"}
          position={"Digital Advisory Board Member"}
          date={"'17"}
          more={"true"}
        />
        <JourneyAccordion
          company={"MP Andy Burnham Campaign"}
          position={"Campaign and Reputation Brand Strategist"}
          date={"Jan '17 - May '17"}
          more={"true"}
        />
        <JourneyAccordion
          company={"Wildings Solicitor/Incubox"}
          position={"Digital MArketing Exec. Design Lead"}
          date={"'15 - '16"}
          more={"true"}
        />
        <JourneyAccordion
          company={"University of Salford"}
          position={"Lead Designer for the Mooc Animation & Book"}
          date={"'15 - '16"}
          more={"true"}
        />
        <JourneyAccordion
          company={"Al Alhi Csr Group, UAE"}
          position={"Digital Innovation Lead - Hemitna Project"}
          date={"2015"}
          more={"true"}
        />

        <button className="underline text-white">
          My resume has got more..
        </button>
      </section>
      <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
        <button className="text-white border border-[#DBDBDB] rounded-[40px] px-[34px] py-[10px] lg:py-[16px] mb-[16px] text-[12px] md:text-base lg:text-[18px] ">
          JOURNEY
        </button>

        {/* <m.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        > */}
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
          duration={1.3}
          offset={200}
        >
          <div className=" hidden md:grid grid-cols-5 gap-[40px] ">
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Armani
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Wakanow
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Maggi
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              NdaniTV
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              UBA
            </div>
          </div>
        </ScrollAnimation>
        {/* </m.div> */}
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
          duration={1.3}
        >
          <div className=" hidden md:grid grid-cols-5 gap-[40px] mt-[40px] ">
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Mavins Records
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Ninie Lagos
            </div>

            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Essenza
            </div>

            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Piggyvest
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Infinix
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] text-center rounded-full flex justify-center items-center border border-white text-white">
              FreshPrep by Eros
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Sunlight
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Newton & David
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Ciroc
            </div>
            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] xl:h-[218px] xl:w-[218px] rounded-full flex justify-center items-center border border-white text-white">
              Golden Penny
            </div>
          </div>
        </ScrollAnimation>
        <div className=" md:hidden">
          <Marquee pauseOnHover={true} className="mb-5">
            <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
              ARMANI &nbsp; MARTELL &nbsp; PRIME VIDEO &nbsp; MOET &nbsp; HOUSE
              OF LUNNETTE &nbsp; SUNLIGHT &nbsp; NEWTON & DAVID &nbsp; CHIVAS
              &nbsp; WAKA NOW &nbsp; PENNY
            </p>
          </Marquee>
          <Marquee pauseOnHover={true} direction="right">
            <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
              SHOWMAX &nbsp; ARMANI &nbsp; BALVENIE &nbsp; CHIVITA &nbsp; TEAM
              &nbsp; INFINIX &nbsp; CIROC &nbsp; PIGGYVEST &nbsp; WAKA NOW
              &nbsp; GOLDEN PENNY
            </p>
          </Marquee>
          <Marquee pauseOnHover={true} className="mb-5">
            <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
              INFINIX &nbsp; CIROC &nbsp; PIGGYVEST &nbsp; WAKA NOW &nbsp;
              GOLDEN PENNY &nbsp; ARMANI &nbsp; MARTELL &nbsp; PRIME VIDEO
              &nbsp;
            </p>
          </Marquee>
          <Marquee pauseOnHover={true} direction="right" className="mb-5">
            <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
              FRESHPREP BY EROS &nbsp; MAGGI &nbsp; ESSENZA &nbsp; UBA &nbsp;
              CHIVITA &nbsp; TEAM &nbsp; INFINIX &nbsp; CIROC &nbsp; PIGGYVEST
              &nbsp;
            </p>
          </Marquee>
          <Marquee pauseOnHover={true} className="mb-5">
            <p className="text-[#FFF] italic opacity-70 text-[18px] md:text-[48px] ">
              SUNLIGHT &nbsp; NEWTON & DAVID &nbsp; CHIVAS &nbsp; WAKA NOW
              &nbsp; PENNY&nbsp; CIROC &nbsp; PIGGYVEST &nbsp; WAKA NOW &nbsp;
              GOLDEN PENNY
            </p>
          </Marquee>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
        <button className="text-white border border-[#DBDBDB] rounded-[40px] px-[34px] py-[10px] lg:py-[16px] mb-[16px] text-[12px] md:text-base lg:text-[18px] ">
          AWARDS
        </button>
        <div className="hidden md:block">
          <Marquee pauseOnHover={true} className="mb-5">
            <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
              DRAGONS DEN . YNAIJA! . UNI OF SALFORD . GLOBAL YOUTH FORUM UAE .
            </p>
          </Marquee>
          <Marquee pauseOnHover={true} direction="right">
            <p className="text-[#FFFFFFB8] opacity-70 text-[18px] md:text-[48px] ">
              GLOBAL YOUTH FORUM UAE . ALJAZEERA . YNAIJA! . DRAGONS DEN .{" "}
            </p>
          </Marquee>
        </div>
        <div>
          <ul className="text-[#fff] text-[18px] leading-[-0.216px] flex flex-col gap-[8px] font-light md:hidden">
            <li>DRAGONS DEN </li>
            <li>YNAIJA</li>
            <li>UNI OF SALFORD </li>
            <li>GLOBAL YOUTH FORUM UAE</li>
          </ul>
        </div>
      </section>
      <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
        <button className="text-white border border-[#DBDBDB] rounded-[40px] px-[34px] py-[10px] lg:py-[16px] mb-[16px] text-[12px] md:text-base lg:text-[18px] ">
          WORK WITH ME
        </button>
        <div className="overflow-x-scroll flex md:hidden gap-[16px]  scrollbar-thumb-[#39ff14]  scrollbar-thin  scrollbar-track-white pb-[32px] ">
          <div className="flex-shrink-0">
            <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
              01
            </h2>
            <h2 className="text-[32px] font-medium text-white">
              Brand Strategy
            </h2>
          </div>
          <div className="flex-shrink-0">
            <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
              02
            </h2>
            <h2 className="text-[32px] font-medium text-white">
              {" "}
              PRODUCT DESIGN
            </h2>
          </div>
          <div className="flex-shrink-0">
            <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
              03
            </h2>
            <h2 className="text-[32px] font-medium text-white">NETWORKING</h2>
          </div>
          <div className="flex-shrink-0">
            <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
              04
            </h2>
            <h2 className="text-[32px] font-medium text-white">
              DIGITAL MARKETING
            </h2>
          </div>
          <div className="flex-shrink-0">
            <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
              05
            </h2>
            <h2 className="text-[32px] font-medium text-white">
              BUSINESS CONSULTING
            </h2>
          </div>
          <div className="flex-shrink-0">
            <h2 className="text-[56px] text-white font-semibold leading-[56px] tracking-[-0.672px] pb-[16px]">
              06
            </h2>
            <h2 className="text-[32px] font-medium text-white">
              BRAND COLLABORATIONS & ENDORSEMENT
            </h2>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-[20px] hidden ">
          <div className=" pt-[48px] px-[30px] pb-[36px] lg:pt-[75px] lg:px-[40px] lg:pb-[44px] bg-white max-w-[435px] rounded-[16px]">
            <img src="/brand.png" alt="icon" className="mb-[24px]" />
            <h3 className="text-[22px] lg:text-[26px] text-black font-medium">
              BRANDING STRATEGY
            </h3>
          </div>
          <div className=" pt-[48px] px-[30px] pb-[36px] lg:pt-[75px] lg:px-[40px] lg:pb-[44px] bg-white max-w-[435px] rounded-[16px]">
            <img src="/design.png" alt="icon" className="mb-[24px]" />
            <h3 className="text-[22px] lg:text-[26px] text-black font-medium">
              PRODUCT DESIGN
            </h3>
          </div>
          <div className=" pt-[48px] px-[30px] pb-[36px] lg:pt-[75px] lg:px-[40px] lg:pb-[44px] bg-white max-w-[435px] rounded-[16px]">
            <img src="/networking.png" alt="icon" className="mb-[24px]" />
            <h3 className="text-[22px] lg:text-[26px] text-black font-medium">
              NETWORKING
            </h3>
          </div>
          <div className=" pt-[48px] px-[30px] pb-[36px] lg:pt-[75px] lg:px-[40px] lg:pb-[44px] bg-white max-w-[435px] rounded-[16px]">
            <img src="/digital.png" alt="icon" className="mb-[24px]" />
            <h3 className="text-[22px] lg:text-[26px] text-black font-medium">
              DIGITAL MARKETING
            </h3>
          </div>
          <div className=" pt-[48px] px-[30px] pb-[36px] lg:pt-[75px] lg:px-[40px] lg:pb-[44px] bg-white max-w-[435px] rounded-[16px]">
            <img src="/consult.png" alt="icon" className="mb-[24px]" />
            <h3 className="text-[22px] lg:text-[26px] text-black font-medium">
              BUSINESS CONSULTING
            </h3>
          </div>
          <div className=" pt-[48px] px-[30px] pb-[36px] lg:pt-[47px] lg:px-[40px] lg:pb-[44px] bg-white max-w-[435px] rounded-[16px]">
            <img src="/collab.png" alt="icon" className="mb-[24px]" />
            <h3 className="text-[22px] lg:text-[26px] text-black font-medium">
              BRAND COLLABORATIONS & ENDORSEMENT
            </h3>
          </div>
        </div>

        <button className="text-white border flex gap-[8px] border-[#DBDBDB] rounded-[40px] px-[16px]  lg:px-[24px] py-[10px] lg:py-[16px] text-[12px] md:text-base lg:text-[18px] mt-[40px] md:mt-[70px] lg:mt-[100px]  ">
          Ready to get in touch?{" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8223 4.44727L15.3748 8.99976L10.8223 13.5523"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.625 9H15.2475"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </section>
      <section className="pt-[40px] md:pt-[70px] lg:pt-[104px] px-[16px] md:px-[36px] lg:px-[48px] bg-[#111]">
        <div className="flex justify-between text-center">
          <div className="text-white">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
          <div className="hidden lg:block">
            <ul className="text-white flex gap-[20px] xl[40px]">
              <li>PRIVACY</li>
              <li>POLICY</li>
              <li>PRESS</li>
            </ul>
          </div>
          <div className="flex items-center ">
            <img src="/twitter.png" alt="twitter" />
            <img src="/instagram.png" alt="instagram" />
            <img src="/linkedin.png" alt="linkedin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
