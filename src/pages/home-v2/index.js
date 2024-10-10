import MainLayout from "layout-v2/main";
import "style/home-v2/index.css"
import React from "react";
import HomeSectionWelcome from "../../components/home-v2/home-section-welcome";
import HomeSectionStats from "../../components/home-v2/home-section-stats";
import HomeSectionTools from "../../components/home-v2/home-section-tools";

export default function HomePageV2() {
  return <MainLayout>
    <HomeSectionWelcome />
    <HomeSectionTools />
    <HomeSectionStats />
  </MainLayout>;
}
