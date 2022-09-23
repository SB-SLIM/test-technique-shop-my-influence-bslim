import useStaticImages from "hooks/useStaticImages";
import React from "react";

import { HeaderFilter, TopMenu } from "./components";
import { SectionOne, SectionThree, SectionTwo } from "./components";

function Dashboard() {
  const images = useStaticImages();
  const user = { name: "jhoen Doe", img: images.img1 };
  return (
    <div>
      <TopMenu user={user} />
      <HeaderFilter />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default Dashboard;
