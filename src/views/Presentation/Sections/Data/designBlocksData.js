/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// const imagesPrefix =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgBar from "@/assets/img/Attractions/bar.webp";
import imgClub from "@/assets/img/Attractions/club.webp";
// import imgHotel from "@/assets/img/Attractions/hotel.webp";
import imgRestaurant1 from "@/assets/img/Attractions/Restaurant1.jpg";
import imgRestaurant2 from "@/assets/img/Attractions/Restaurant2.jpg";
import imgRestaurant3 from "@/assets/img/Attractions/Restaurant3.jpg";
import imgRestaurant4 from "@/assets/img/Attractions/Restaurant4.jpg";
import imgRestaurant5 from "@/assets/img/Attractions/Restaurant5.jpg";
import imgRestaurant6 from "@/assets/img/Attractions/Restaurant6.jpg";
import imgVilla1 from "@/assets/img/Attractions/Villa1.jpg";
import imgVilla2 from "@/assets/img/Attractions/Villa2.jpg";
import imgVilla3 from "@/assets/img/Attractions/Villa3.jpg";
import imgVilla4 from "@/assets/img/Attractions/Villa4.jpg";
import imgVilla5 from "@/assets/img/Attractions/Villa5.jpg";
import imgVilla6 from "@/assets/img/Attractions/Villa6.jpg";
import imgCar from "@/assets/img/Attractions/Car.jpg";
import imgCar2 from "@/assets/img/Attractions/Car2.jpg";

export default [
  {
    heading: "Beer Bar",
    description:
      "200+ spectacle bars provide you with fun entertainment and exquiste drinks",
    items: [
      {
        image: imgBar,
        title: "Soi 6 Bar",
        subtitle: "100 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgBar,
        title: "Soi Buakhao Bar",
        subtitle: "140 Views",
        route: "presentation",
        pro: true,
      },
    ],
  },
  {
    heading: "Night Club",
    description: "20+ exclusive nightclubs enlighten your night in Pattaya",
    items: [
      {
        image: imgClub,
        title: "Hollywood Club",
        subtitle: "140 Views",
        route: "presentation",
        pro: true,
      },
    ],
  },
  {
    heading: "Restaurant",
    description: "500+ Restaurant that you will get best Restaurant for you ",
    items: [
      {
        image: imgRestaurant1,
        title: "Restaurant Hotel",
        subtitle: "325 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgRestaurant2,
        title: "Tai Restaurant",
        subtitle: "381 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgRestaurant3,
        title: "Tai Restaurant",
        subtitle: "516 Views",
        route: "presentation",
        pro: true,
      }, {
        image: imgRestaurant4,
        title: "Tai Restaurant",
        subtitle: "216 Views",
        route: "presentation",
        pro: true,
      }, {
        image: imgRestaurant5,
        title: "Tai Restaurant",
        subtitle: "155 Views",
        route: "presentation",
        pro: true,
      }, {
        image: imgRestaurant6,
        title: "Tai Restaurant",
        subtitle: "162 Views",
        route: "presentation",
        pro: true,
      },
    ],
  },
  // {
  //   heading: "Restaurant",
  //   description:
  //     "20+ Fully Restaurant allows you to experience the most authentic cultural characteristics and local enthusiasm",
  //   items: [
  //     {
  //       image: imgMarket,
  //       title: "East Market",
  //       subtitle: "4 Views",
  //       route: "presentation",
  //       pro: true,
  //     },
  //     {
  //       image: imgMarket,
  //       title: "West Market",
  //       subtitle: "3 Views",
  //       route: "presentation",
  //       pro: true,
  //     },
  //     {
  //       image: imgMarket,
  //       title: "North Market",
  //       subtitle: "2 Views",
  //       route: "presentation",
  //       pro: true,
  //     },
  //     {
  //       image: imgMarket,
  //       title: "South Market",
  //       subtitle: "5 Views",
  //       route: "presentation",
  //       pro: true,
  //     },
  //   ],
  // },
  {
    heading: "Villa",
    description:
      "80+ ancient monuments and scenic spots will leave you wanting more and giving you a thorough understanding of Thai Villa",
    items: [
      {
        image: imgVilla1,
        title: "The Villa of Model 1",
        subtitle: "160 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgVilla2,
        title: "The Villa of Model 2",
        subtitle: "221 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgVilla3,
        title: "The Villa of Model 3",
        subtitle: "123 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgVilla4,
        title: "The Villa of Model 4",
        subtitle: "322 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgVilla5,
        title: "The Villa of Model 5",
        subtitle: "222 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgVilla6,
        title: "Call Me Right Now !",
        subtitle: "126 Views",
        route: "presentation",
        pro: false,
      },
    ],
  },
  {
    heading: "Transportation",
    description: "2000+ professional drivers provide you with service",
    items: [
      {
        image: imgCar,
        title: "Pattaya Motorcade",
        subtitle: "60 Views",
        route: "presentation",
        pro: true,
      },
      {
        image: imgCar2,
        title: "Bangkok Motorcade",
        subtitle: "30 Views",
        route: "presentation",
        pro: true,
      },
    ],
  },
];
