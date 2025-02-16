import ListViewer from "@/components/ListViewer";
import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import React from "react";
import img2 from "../../public/assets2/banner/mani.jpg";
import unavailable from "../../public/assets2/unavailable.jpg";
import Shajeekan from "../../public/assets2/kobi/shajee.jpg";
import kobi from "../../public/assets2/kobi/kobi.jpg";
import uma from "../../public/assets2/banner/uma.jpg";

const PastPresidents = () => {
  const members = [
    {
      id: 1,
      title: "Past Presidents",
      members: [
        { id: 0, name: "member" },
        { id: 1, name: "member" },
        { id: 2, name: "member" },
        { id: 3, name: "member" },
        { id: 4, name: "member" },
        { id: 5, name: "member" },
      ],
    },
  ];
  //   1990 - Premnath
  // 1991 - Did Not Play
  // 1992 - Kapilan
  // 1993 - Naren
  // 1994 - Navali
  // 1995 - Sinna Varthan
  // 1996 - Did Not Play
  // 1997 - Ahilan
  // 1998 - Sivarajh
  // 1999 - Sivarajh
  // 2000 - Jeyandran
  // 2001 - S. Garthik
  // 2002 - Did Not Play
  // 2003 - Luxmikanth
  // 2004 - Luxmikanth
  // 2005 - Luxmikanth

  const caption = [
    {
      name: "Kobiram",
      year: "2024",
      img: kobi,
    },
    {
      name: "J. Shajeekan",
      year: "2023",
      img: Shajeekan,
    },
    {
      name: "J.Shajeekan",
      year: "2022",
      img: Shajeekan,
    },
    {
      name: "Kirushoban",
      year: "2021",
      img: unavailable,
    },
    {
      name: "Kirushoban",
      year: "2020",
      img: unavailable,
    },
    {
      name: "Kirushoban",
      year: "2019",
      img: unavailable,
    },
    {
      name: "Vamanan",
      year: "2018",
      img: unavailable,
    },
    {
      name: "Janarthanan",
      year: "2017",
      img: unavailable,
    },
    {
      name: "Pirasanna",
      year: "2016",
      img: unavailable,
    },
    {
      name: "Arunkumar",
      year: "2015",
      img: unavailable,
    },
    {
      name: "Priyatharsan",
      year: "2014",
      img: unavailable,
    },
    {
      name: "Manivannan",
      year: "2013",
      img: img2,
    },
    {
      name: "Saileswaran",
      year: "2012",
      img: unavailable,
    },
    {
      name: "Manivannan",
      year: "2011",
      img: unavailable,
    },
    {
      name: "Umadaran",
      year: "2010",
      img: uma,
    },
    {
      name: "Umadaran",
      year: "2009",
      img: uma,
    },
    {
      name: "Pakeerathan",
      year: "2008",
      img: unavailable,
    },
    {
      name: "Pakeerathan",
      year: "2007",
      img: unavailable,
    },
    {
      name: "Did Not Play",
      year: "2006",
      img: unavailable,
    },
    {
      name: "Luxmikanth",
      year: "2005",
      img: unavailable,
    },
    {
      name: "Luxmikanth",
      year: "2004",
      img: unavailable,
    },
    {
      name: "Luxmikanth",
      year: "2003",
      img: unavailable,
    },
    {
      name: "Did Not Play",
      year: "2002",
      img: unavailable,
    },
    {
      name: "S. Garthik",
      year: "2001",
      img: unavailable,
    },
    {
      name: "Jeyandran",
      year: "2000",
      img: unavailable,
    },
    {
      name: "Sivarajh",
      year: "1999",
      img: unavailable,
    },
    {
      name: "Sivarajh",
      year: "1998",
      img: unavailable,
    },
    {
      name: "Ahilan",
      year: "1997",
      img: unavailable,
    },
    {
      name: "Did Not Play",
      year: "1996",
      img: unavailable,
    },
    {
      name: "Sinna Varthan",
      year: "1995",
      img: unavailable,
    },
    {
      name: "Navali",
      year: "1994",
      img: unavailable,
    },
    {
      name: "Naren",
      year: "1993",
      img: unavailable,
    },
    {
      name: "Kapilan",
      year: "1992",
      img: unavailable,
    },
    {
      name: "Did Not Play",
      year: "1991",
      img: unavailable,
    },
    {
      name: "Premnath",
      year: "1990",
      img: unavailable,
    },
  ];

  const vicecaption = [
    {
      name: "Kobiram",
      year: "2024",
      img: kobi,
    },
    {
      name: "J. Shajeekan",
      year: "2023",
      img: Shajeekan,
    },
    {
      name: "J.Shajeekan",
      year: "2022",
      img: Shajeekan,
    },
    {
      name: "Kirushoban",
      year: "2021",
      img: unavailable,
    },
  ];
  return (
    <div className="bg-white">
      <Container>
        <h1 className="text-2xl font-bold text-slate-800 p-5">Our Past Captains</h1>
        <div className="min-h-screen flex items-start justify-center p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {caption.map((item, i) => (
              <UserCard
                key={i}
                picture={item.img}
                name={item.name}
                occupation={`Captain (${item.year})`}
              />
            ))}
          </div>
        </div>
        <br /> <br />
        {/* <h1 className="text-2xl font-bold text-slate-800 p-5">
          {" "}
          Vice Captains
        </h1>
        <div className="min-h-screen flex items-start justify-center p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {vicecaption.map((item, i) => (
              <UserCard
                key={i}
                picture={item.img}
                name={item.name}
                occupation={`Captain (${item.year})`}
              />
            ))}
          </div>
        </div> */}
        {/* <ListViewer data={members} /> */}
      </Container>
    </div>
  );
};

export default PastPresidents;
