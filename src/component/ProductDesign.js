import React from "react";
import PortfolioAccordion from "./PortfolioAccordion";

const ProductDesign = () => {
  return (
    <div>
      <div className="pb-[24px] md:pb-[48px] lg:pb-[64px]  lg:pt-[24px] border-b-white">
        <h3 className="text-[14px] md:text-[24px] lg:text-[28px] text-white w-full md:w-[70%] lg:w-[50%]">
          I strive for the perfect balance between form and function in my work.
          Simplicity is at the core of my design ideology, where every element
          has a purpose. My style is uniquely defined by uncluttered aesthetics,
          characterized by clean lines, shapes, and fonts.
        </h3>
      </div>
      <div>
        <PortfolioAccordion
          company={"AFRILEISURE COLLECTION: SOxTDA"}
          client={"TDAxSAMUEL OTIGBA"}
        />
        <PortfolioAccordion
          company={"AFRILEISURE COLLECTION: SOxAFA SPORTS"}
          client={"AFA SPORTS"}
        />
        <PortfolioAccordion
          company={"OLYMPICS NIGERIA BASKETBALL JERSEY 2021"}
          client={"AFA SPORTS"}
        />
       

      </div>
    </div>
  );
};

export default ProductDesign;
