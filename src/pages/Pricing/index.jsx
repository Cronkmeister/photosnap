import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import BetaInviteSection from "../../components/BetaInviteSection";
import PricingSection from "./PricingSection";
import PricingSection1 from "./PricingSection1";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    rowthefeatures: "UNLIMITED STORY POSTING",
    rowbasicOne: true,
    rowproOne: true,
    rowbusinessOne: true,
  },
  {
    rowthefeatures: "UNLIMITED PHOTO UPLOAD",
    rowbasicOne: true,
    rowproOne: true,
    rowbusinessOne: true,
  },
  {
    rowthefeatures: "EMBEDDING CUSTOM CONTENT",
    rowbasicOne: false,
    rowproOne: true,
    rowbusinessOne: true,
  },
  {
    rowthefeatures: "CUSTOMIZE METADATA",
    rowbasicOne: false,
    rowproOne: true,
    rowbusinessOne: true,
  },
  {
    rowthefeatures: "ADVANCED METRICS",
    rowbasicOne: false,
    rowproOne: false,
    rowbusinessOne: true,
  },
  {
    rowthefeatures: "PHOTO DOWNLOADS",
    rowbasicOne: false,
    rowproOne: false,
    rowbusinessOne: true,
  },
  {
    rowthefeatures: "SEARCH ENGINE INDEXING",
    rowbasicOne: false,
    rowproOne: false,
    rowbusinessOne: true,
  },
  {
    rowthefeatures: "CUSTOM ANALYTICS",
    rowbasicOne: false,
    rowproOne: false,
    rowbusinessOne: true,
  },
];

export default function PricingPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowthefeatures", {
        cell: (info) => (
          <div className="flex">
            <Heading as="p" className="text-[12px] font-bold tracking-[2.00px]">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: () => (
          <div className="flex border-b border-black pb-4">
            <Heading
              as="h3"
              className="mb-[22px] text-[12px] font-bold tracking-[2.00px]"
            >
              THE FEATURES
            </Heading>
          </div>
        ),
        meta: { width: "230px" },
      }),
      tableColumnHelper.accessor("rowbasicOne", {
        cell: (info) => (
          <div className="flex justify-center w-full">
            {info.getValue() ? (
              <img
                src="/assets/pricing/desktop/check.svg"
                alt="Check"
                className="h-4 w-auto"
              />
            ) : (
              <span></span>
            )}
          </div>
        ),
        header: () => (
          <div className="flex justify-center w-full border-b border-black pb-4">
            <Heading
              as="h4"
              className="mb-[22px] text-[12px] font-bold tracking-[2.00px]"
            >
              BASIC
            </Heading>
          </div>
        ),
        meta: { width: "200px" },
      }),
      tableColumnHelper.accessor("rowproOne", {
        cell: (info) => (
          <div className="flex justify-center w-full">
            {info.getValue() ? (
              <img
                src="/assets/pricing/desktop/check.svg"
                alt="Check"
                className="h-4 w-auto"
              />
            ) : (
              <span></span>
            )}
          </div>
        ),
        header: () => (
          <div className="flex justify-center w-full border-b border-black pb-4">
            <Heading
              as="h5"
              className="mb-[22px] text-[12px] font-bold tracking-[2.00px]"
            >
              PRO
            </Heading>
          </div>
        ),
        meta: { width: "200px" },
      }),
      tableColumnHelper.accessor("rowbusinessOne", {
        cell: (info) => (
          <div className="flex justify-center w-full">
            {info.getValue() ? (
              <img
                src="/assets/pricing/desktop/check.svg"
                alt="Check"
                className="h-4 w-auto"
              />
            ) : (
              <span></span>
            )}
          </div>
        ),
        header: () => (
          <div className="flex justify-center w-full border-b border-black pb-4">
            <Heading
              as="h6"
              className="mb-[22px] text-[12px] font-bold tracking-[2.00px]"
            >
              BUSINESS
            </Heading>
          </div>
        ),
        meta: { width: "200px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Affordable Pricing Plans – Photosnap</title>
        <meta
          name="description"
          content="Explore our affordable pricing plans tailored for every level of photographer. Choose from Basic, Pro, or Business packages with features like unlimited story posting, advanced metrics, and more. Perfect for new, aspiring, and professional photographers."
        />
      </Helmet>
      <div className="w-full bg-white">
        <Header />
        <div className="flex flex-col items-center">
          {/* pricing section */}
          <PricingSection />

          {/* pricing section */}
          <PricingSection1 />
          <div className="container-xs mt-[152px] flex flex-col items-center gap-12 px-14 md:px-5">
            <Heading
              size="headinglg"
              as="h2"
              className="text-[40px] font-bold uppercase tracking-[4.17px] md:text-[38px] sm:text-[36px]"
            >
              COMPARE
            </Heading>

            {/* Mobile Table Layout */}
            <div className="w-full px-0 md:hidden">
              <div className="text-center mb-8">
                <h3 className="text-lg font-bold tracking-[2px] uppercase mb-4">
                  THE FEATURES
                </h3>
                <div className="w-16 h-px bg-black mx-auto"></div>
              </div>

              <div className="space-y-6">
                {tableData.map((row, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-bold tracking-[2px] uppercase ">
                        {row.rowthefeatures}
                      </h4>
                    </div>
                    <div className="flex justify-between items-start">
                      <div className="text-left md:text-center flex-1">
                        <div className="text-xs font-bold tracking-[2px] uppercase mb-2 text-gray-400 md:text-black">
                          BASIC
                        </div>
                        <div className="flex justify-start h-4">
                          {row.rowbasicOne ? (
                            <img
                              src="/assets/pricing/desktop/check.svg"
                              alt="Check"
                              className="h-4 w-auto"
                            />
                          ) : (
                            <span className="h-4"></span>
                          )}
                        </div>
                      </div>
                      <div className="text-left md:text-center flex-1">
                        <div className="text-xs font-bold tracking-[2px] uppercase mb-2 text-gray-400 md:text-black">
                          PRO
                        </div>
                        <div className="flex justify-start h-4">
                          {row.rowproOne ? (
                            <img
                              src="/assets/pricing/desktop/check.svg"
                              alt="Check"
                              className="h-4 w-auto"
                            />
                          ) : (
                            <span className="h-4"></span>
                          )}
                        </div>
                      </div>
                      <div className="text-left md:text-center flex-1">
                        <div className="text-xs font-bold tracking-[2px] uppercase mb-2 text-gray-400 md:text-black">
                          BUSINESS
                        </div>
                        <div className="flex justify-start h-4">
                          {row.rowbusinessOne ? (
                            <img
                              src="/assets/pricing/desktop/check.svg"
                              alt="Check"
                              className="h-4 w-auto"
                            />
                          ) : (
                            <span className="h-4"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop/Tablet Table Layout */}
            <div className="hidden md:block w-full">
              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <ReactTable
                    size="xs"
                    className="tablethefeature w-full mb-32 sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                    bodyProps={{ className: "" }}
                    cellProps={{
                      className: "border-grey border-b border-solid",
                    }}
                    columns={tableColumns}
                    data={tableData}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* beta invite section */}
          <BetaInviteSection />
        </div>

        <Footer />
      </div>
    </>
  );
}
