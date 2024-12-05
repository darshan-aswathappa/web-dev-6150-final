import MainLayout from "./layout-home/main";
import "./index.css"
import React from "react";
import HomeSectionWelcome from "./home-section-welcome";
import HomeSectionStats from "./home-section-stats";
import HomeSectionTools from "./home-section-tools";

export default function HomePage() {
  return <MainLayout>
    <HomeSectionWelcome />
    <HomeSectionTools />
    <HomeSectionStats />
  </MainLayout>
}
