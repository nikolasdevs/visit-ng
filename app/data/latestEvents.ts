import Img1 from "@/public/nature-5.jpg";
import Img2 from "@/public/nature-10.jpg";
import Img3 from "@/public/Img4.jpg";
import Img4 from "@/public/nature-1.jpg";
import Img5 from "@/public/nature-2.jpg";
import Img6 from "@/public/nature-5.jpg";
import Img7 from "@/public/Img3.jpg";
import Img8 from "@/public/nature-8.jpg";
import { StaticImageData } from "next/image";

type Slides = {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  date: string;
  category: string;
};

const options = {
  // Enable or disable loop mode
  loop: false,
  // Set the initial slide index
  startIndex: 0,
  // Set the slide width
  slideWidth: 100,
  // Set the slide gap
  slideGap: 10,
  // Add more options as needed
};

export const latestEvents: Slides[] = [
  {
    id: 0,
    imageUrl: Img1,
    title: "Slide 1 description",
    date: "20 Oct, 2024",
    category: "Culture",
  },
  {
    id: 1,
    imageUrl: Img2,
    title: "Slide 2 description",
    date: "20 Oct, 2024",
    category: "Food & Drinks",
  },
  {
    id: 2,
    imageUrl: Img3,
    title: "Slide 3 description",
    date: "20 Oct, 2024",
    category: "Accommodation",
  },
  {
    id: 3,
    imageUrl: Img4,
    title: "Slide 4 description",
    date: "20 Oct, 2024",
    category: "Lounge",
  },
  {
    id: 4,
    imageUrl: Img5,
    title: "Slide 5 description",
    date: "20 Oct, 2024",
    category: "Shopping",
  },
  {
    id: 5,
    imageUrl: Img6,
    title: "Slide 6 description",
    date: "20 Oct, 2024",
    category: "Tour",
  },
  {
    id: 6,
    imageUrl: Img7,
    title: "Slide 7 description",
    date: "20 Oct, 2024",
    category: "Nightlife",
  },
  {
    id: 7,
    imageUrl: Img8,
    title: "Slide 8 description",
    date: "20 Oct, 2024",
    category: "Events",
  },
  {
    id: 8,
    imageUrl: Img1,
    title: "Slide 9 description",
    date: "20 Oct, 2024",
    category: "Culture",
  },
  {
    id: 9,
    imageUrl: Img2,
    title: "Slide 10 description",
    date: "20 Oct, 2024",
    category: "Food & Drinks",
  },
  {
    id: 10,
    imageUrl: Img3,
    title: "Slide 11 description",
    date: "20 Oct, 2024",
    category: "Accommodation",
  },
  {
    id: 11,
    imageUrl: Img4,
    title: "Slide 12 description",
    date: "20 Oct, 2024",
    category: "Lounge",
  },
  {
    id: 12,
    imageUrl: Img5,
    title: "Slide 13 description",
    date: "20 Oct, 2024",
    category: "Shopping",
  },
  {
    id: 13,
    imageUrl: Img6,
    title: "Slide 14 description",
    date: "20 Oct, 2024",
    category: "Tour",
  },
  {
    id: 14,
    imageUrl: Img7,
    title: "Slide 15 description",
    date: "20 Oct, 2024",
    category: "Nightlife",
  },
  {
    id: 15,
    imageUrl: Img8,
    title: "Slide 16 description",
    date: "20 Oct, 2024",
    category: "Events",
  },
];
