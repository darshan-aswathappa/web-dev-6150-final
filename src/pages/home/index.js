import MainLayout from "layout/main";
import React from "react";
import HomeSectionWelcome from "../home-section-welcome";
import HomeSectionCards from "../home-section-cards";

export default function HomePage() {
  return <MainLayout>
    <HomeSectionWelcome />
    <HomeSectionCards />
  </MainLayout>;
}
