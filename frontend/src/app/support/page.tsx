import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page | Bomboo World",
  description: "This is Support Page for Bomboo World where you can solve your queries related to products , orders , logistics here , we are here 24/7 to help you .",
  // other metadata
};

const Support = () => {
  return (
    <>
      <Breadcrumb
        pageName="Support Page"
        description="Solve your queries related to products , orders , logistics here , we are here 24/7 to help you ."
      />

      <Contact />
    </>
  );
};

export default Support;