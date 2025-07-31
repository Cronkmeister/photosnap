import { Img, Heading } from "../../components";
import React from "react";

export default function BetaInviteSection() {
  return (
    <>
      {/* beta invite section */}
      <div className="mt-40 self-stretch">
        <div className="flex items-start gap-[71px] bg-black md:flex-col">
          <Img
            src="images/img_television_black_900.png"
            alt="Television"
            className="h-[100px] w-[6%] object-contain md:w-full"
          />
          <div className="container-xs my-[68px] flex items-center self-center md:my-0 md:px-5 sm:flex-col">
            <Heading
              size="headinglg"
              as="h2"
              className="w-[36%] text-[40px] font-bold uppercase leading-[48px] tracking-[4.17px] !text-white md:text-[38px] sm:w-full sm:text-[36px]"
            >
              <>
                We’re in beta.
                <br />
                Get your invite today!
              </>
            </Heading>
            <div className="flex flex-1 items-center justify-end gap-4 px-1.5 sm:self-stretch">
              <Heading
                as="h3"
                className="text-[12px] font-bold tracking-[2.00px] !text-white"
              >
                GET AN INVITE
              </Heading>
              <Img
                src="images/img_arrow_left.svg"
                alt="Arrowleft"
                className="h-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
