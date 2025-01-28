interface TopTen {
  id: number;
  title: string;
  description: string;
  state: string;
  region: string;
  imageUrls: string[];
  link: string;
}

export const topTen: TopTen[] = [
  {
    id: 1,
    title: "Yankari National Park",
    description:
      "Nigeria's largest wildlife park, known for its herds of elephants, lions, baboons, and hippos. It features natural warm springs like Wikki Warm Spring, perfect for relaxation",
    state: "Bauchi",
    region: "North_Central",
    imageUrls: [
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_fill,ar_1:1,e_sharpen/v1736418999/1204920097043906569_mxqtw4.jpg",
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_fill,ar_1:1,e_sharpen/v1736418999/cjjapiyd9jfmyc5tfgbbiecmv0arge6lfxtrkofz-1656785530-compressed_e71rgs.jpg",
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_fill,ar_1:1,e_sharpen/v1736418998/Yankari_Entry_Gate_tdt4ni.jpg",
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_fill,ar_1:1,e_sharpen/v1736418998/yankari-game-reserve_kxbzcp.jpg",
    ],
    link: "tours/idanre-hill",
  },
  {
    id: 2,
    title: "Lekki Conservation Centre",
    description:
      "A peaceful nature reserve with Africa’s longest canopy walkway. Home to wildlife like monkeys, crocodiles, and exotic birds.",
    state: "Lagos",
    region: "South_West",
    imageUrls: [
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_fill,ar_1:1,e_improve,e_sharpen/v1736419688/wooden-walkway_mnjgvc.jpg",
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_fill,ar_1:1,e_improve,e_sharpen/v1736419690/omotayo-tajudeen-hbNlzEtn-CI-unsplash-1_kd0ezu.jpg",
    ],
    link: "tours/lekki-conservation-center",
  },
  {
    id: 3,
    title: "Olumo Rock ",
    description:
      "TA historic site and sacred rock used as a fortress during tribal wars. It offers panoramic views of Abeokuta from the summit..",
    state: "Ogun",
    region: "South_West",
    imageUrls: [
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_crop,ar_1:1/v1736420049/b98b0a_5aef202c037d4fdeb349f0ab974d71d6_mv2_csrskr.jpg",
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_crop,ar_1:1/v1736420049/olumo-rock_lk8xei.jpg",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "Obudu Mountain Resort",
    description:
      "A picturesque mountain resort with cool weather, lush greenery, and cable cars. It Features hiking trails, waterfalls, and luxury accommodations.",
    state: "Cross River",
    region: "South_South",
    imageUrls: [
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_crop,ar_1:1,e_improve/v1736420227/1_IhBHUHFK2K8e670kNikhsg_z5ch3m.jpg",
      "https://res.cloudinary.com/dpnzmcban/image/upload/c_crop,ar_1:1,e_improve/v1736420228/1200px-Fair_weather_clouds_on_Obudu_mountains_ek8hg4.jpg",
    ],
    link: "#",
  },
];
