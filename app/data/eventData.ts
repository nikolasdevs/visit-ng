import Img1 from "@/public/Img3.jpg";
import Img2 from "@/public/Img4.jpg";
import Img3 from "@/public/nature-1.jpg";
import Img4 from "@/public/nature-2.jpg";
import Img5 from "@/public/nature-5.jpg";
import Img6 from "@/public/nature-7.jpg";
import Img7 from "@/public/nature-8.jpg";
import { StaticImageData } from "next/image";

type Months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

interface EventData {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  link: string;
  month: string;
  date: string;
}

export const eventData: Record<Months, EventData[]> = {
  January: [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: Img1,
      link: "#",
      month: "January",
      date: "January 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: Img2,
      link: "#",
      month: "January",
      date: "January 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: Img3,
      link: "#",
      month: "January",
      date: "January 10 - 12, 2025",
    },
  ],

  February: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img2,
      link: "#",
      month: "February",
      date: "February 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img7,
      link: "#",
      month: "February",
      date: "February 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img6,
      link: "#",
      month: "February",
      date: "February 10 - 12, 2025",
    },
  ],

  March: [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: Img5,
      link: "#",
      month: "March",
      date: "March 10 - 12, 2025",
    },
  ],

  April: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img6,
      link: "#",
      month: "April",
      date: "April 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img1,
      link: "#",
      month: "April",
      date: "April 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img4,
      link: "#",
      month: "April",
      date: "April 10 - 12, 2025",
    },
    {
      id: 4,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img2,
      link: "#",
      month: "April",
      date: "April 10 - 12, 2025",
    },
  ],

  May: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img5,
      link: "#",
      month: "May",
      date: "May 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img6,
      link: "#",
      month: "May",
      date: "May 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img1,
      link: "#",
      month: "May",
      date: "May 10 - 12, 2025",
    },
  ],

  June: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img1,
      link: "#",
      month: "June",
      date: "June 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img2,
      link: "#",
      month: "June",
      date: "June 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img7,
      link: "#",
      month: "June",
      date: "June 10 - 12, 2025",
    },
  ],

  July: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img4,
      link: "#",
      month: "July",
      date: "July 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img5,
      link: "#",
      month: "July",
      date: "July 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img6,
      link: "#",
      month: "July",
      date: "July 10 - 12, 2025",
    },
  ],
  August: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img3,
      link: "#",
      month: "August",
      date: "August 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img2,
      link: "#",
      month: "August",
      date: "August 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img1,
      link: "#",
      month: "August",
      date: "August 10 - 12, 2025",
    },
  ],
  September: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img3,
      link: "#",
      month: "September",
      date: "September 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img5,
      link: "#",
      month: "September",
      date: "September 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img7,
      link: "#",
      month: "September",
      date: "September 10 - 12, 2025",
    },
  ],
  October: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img1,
      link: "#",
      month: "October",
      date: "October 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img2,
      link: "#",
      month: "October",
      date: "October 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img4,
      link: "#",
      month: "October",
      date: "October 10 - 12, 2025",
    },
  ],

  November: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img3,
      link: "#",
      month: "November",
      date: "November 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img7,
      link: "#",
      month: "November",
      date: "November 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img6,
      link: "#",
      month: "November",
      date: "November 10 - 12, 2025",
    },
  ],
  December: [
    {
      id: 1,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img4,
      link: "#",
      month: "December",
      date: "December 10 - 12, 2025",
    },
    {
      id: 2,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img2,
      link: "#",
      month: "December",
      date: "December 10 - 12, 2025",
    },
    {
      id: 3,
      title: "Top startups to watch in 2024",
      description:
        "These are the most promising startups to keep an eye on in the upcoming year.",
      imageUrl: Img1,
      link: "#",
      month: "December",
      date: "December 10 - 12, 2025",
    },
  ],
};
