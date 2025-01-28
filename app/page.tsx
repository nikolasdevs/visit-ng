import React from "react";
import Hero from "./component/Hero";
import { Looking } from "./component/Looking";
import { Header } from "./component/Header";
import { MustVisit } from "./component/MustVisit";
import { TravelAdvice } from "./component/TravelAdvice";
import { Accommodation } from "./component/Accommodation";
import { SelectedAcc } from "./component/SelectedAcc";
import ThingsToDo from "./component/ThingsToDo";

const page = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Looking />
      <MustVisit />
      <TravelAdvice />
      <ThingsToDo slides={[1, 2, 3]} />
      <Accommodation />
      <SelectedAcc />
    </div>
  );
};

export default page;
