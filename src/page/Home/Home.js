import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Services from "./Services";
import Support from "./Support";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="pb-20">
      <Header />
      <Banner />
      <Services />
      <Support />
      <Footer />
    </div>
  );
}
