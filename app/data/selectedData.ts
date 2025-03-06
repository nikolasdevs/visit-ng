import { StaticImageData } from "next/image";
import Img7 from "../../public/Img3.jpg";
import Img3 from "../../public/Img4.jpg";
import Img4 from "../../public/nature-1.jpg";
import Img2 from "../../public/nature-10.jpg";
import Img5 from "../../public/nature-2.jpg";
import Img1 from "../../public/nature-5.jpg";
import Img6 from "../../public/nature-7.jpg";
import Img8 from "../../public/nature-8.jpg";

type Slides = {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  category: string;
};

// const options = {
//   // Enable or disable loop mode
//   loop: false,
//   // Set the initial slide index
//   startIndex: 0,
//   // Set the slide width
//   slideWidth: 100,
//   // Set the slide gap
//   slideGap: 10,
//   // Add more options as needed
// };

export const selectedData: Slides[] = [
  { id: 0, imageUrl: Img1, title: "Slide 1 description", category: "Culture" },
  {
    id: 1,
    imageUrl: Img2,
    title: "Slide 2 description",
    category: "Food & Drinks",
  },
  {
    id: 2,
    imageUrl: Img3,
    title: "Slide 3 description",
    category: "Accommodation",
  },
  { id: 3, imageUrl: Img4, title: "Slide 4 description", category: "Lounge" },
  { id: 4, imageUrl: Img5, title: "Slide 5 description", category: "Shopping" },
  { id: 5, imageUrl: Img6, title: "Slide 6 description", category: "Tour" },
  {
    id: 6,
    imageUrl: Img7,
    title: "Slide 7 description",
    category: "Nightlife",
  },
  { id: 7, imageUrl: Img8, title: "Slide 8 description", category: "Events" },
  { id: 8, imageUrl: Img1, title: "Slide 9 description", category: "Culture" },
  {
    id: 9,
    imageUrl: Img2,
    title: "Slide 10 description",
    category: "Food & Drinks",
  },
  {
    id: 10,
    imageUrl: Img3,
    title: "Slide 11 description",
    category: "Accommodation",
  },
  { id: 11, imageUrl: Img4, title: "Slide 12 description", category: "Lounge" },
  {
    id: 12,
    imageUrl: Img5,
    title: "Slide 13 description",
    category: "Shopping",
  },
  { id: 13, imageUrl: Img6, title: "Slide 14 description", category: "Tour" },
  {
    id: 14,
    imageUrl: Img7,
    title: "Slide 15 description",
    category: "Nightlife",
  },
  { id: 15, imageUrl: Img8, title: "Slide 16 description", category: "Events" },
];
