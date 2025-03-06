import { Accommodation } from "./component/Accommodation";
import { Events } from "./component/Events";
import EventsSlides from "./component/EventsSlides";
import AccommodationSlides from "./component/AccommodationSlides";
import Hero from "./component/Hero";
import { Looking } from "./component/Looking";
import { MustVisit } from "./component/MustVisit";
import { TravelAdvice } from "./component/TravelAdvice";

const page = () => {
  return (
    <div className="">
      <Hero />
      <Looking />
      <MustVisit />
      <Accommodation />
      <AccommodationSlides slides={[1, 2, 3, 4, 5]} />
      <TravelAdvice />
      <Events />
      <EventsSlides slides={[1, 2, 3, 4, 5]} />
    </div>
  );
};

export default page;
