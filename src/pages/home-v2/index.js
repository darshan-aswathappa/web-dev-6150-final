import MainLayout from "layout-v2/main";
import "./index.css"
import React from "react";
import HomeSectionWelcome from "./home-section-welcome";
import HomeSectionStats from "./home-section-stats";
import HomeSectionTools from "./home-section-tools";

export default function HomePageV2() {
  return <MainLayout>
    <HomeSectionWelcome />
    <HomeSectionTools />
    <HomeSectionStats />
  </MainLayout>;
}
