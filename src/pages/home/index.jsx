import MainLayout from "./layout-home/main";
import "./index.css"
import React from "react";
import HomeSectionWelcome from "./home-section-welcome";
// import HomeSectionStats from "./home-section-stats";
// import HomeSectionAbout from "./home-section-about";

export default function HomePage() {
  return <MainLayout>
    <HomeSectionWelcome />
    {/*<HomeSectionAbout />*/}
    {/*<HomeSectionStats />*/}
  </MainLayout>
}
