import React from "react";
import Header from "../../components/Header";
import Banner from "./Banner";
import Services from "./Services";
import Support from "./Support";

export default function Home() {
  return (
    <div className="pb-20">
      <Header />
      <Banner />
      <Services />
      <Support />
    </div>
  );
}
