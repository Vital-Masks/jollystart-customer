import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import SportsGames from '@/components/SportsGamesSlider';
import Membership from '@/components/Membership/membership';
import Gallery from '@/components/Gallery';
import LatestNews from '@/components/LatestNews';
import Messages from '@/components/Messages';

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="bg-slate-100">
        <Container className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            JOLLY STARS SPORTS CLUB
          </h1>
          <p className="mt-5 text-slate-600 p-5">
          Founded in 1948 by the esteemed alumni of Jaffna Hindu College, Jolly Stars Sports Club has proudly served as a symbol of sporting excellence and camaraderie for over seven decades. 
          As we approach our remarkable 75th anniversary, we reflect upon our rich history and celebrate the countless achievements that have shaped our club.

          Jolly Stars Sports Club exclusively welcomes students who have had the privilege of studying at Jaffna Hindu College, fostering a sense of unity and shared values among our members. 
          Our club has become a vibrant hub where passionate sports enthusiasts come together to showcase their talents and compete in a variety of thrilling sporting events.
          </p>
          <button className="px-4 py-2 mt-10 text-white bg-blue-900 rounded-md">
            View More
          </button>
        </Container>
      </div>
      <div className="py-20 bg-slate-200">
        <div className="mb-10 text-center responsive">
          <h1 className="text-2xl font-bold text-slate-800">
            SPORTS AND GAMES
          </h1>
          <p className="mt-3 text-slate-600">
          The Club is a great way to get involved in your community and meet new people. 
          We offer a variety of sports and games for all ages and skill levels.
          </p>
        </div>
        <SportsGames />
      </div>
      <Membership />
      <Gallery />
      <Messages />
      <LatestNews />
    </div>
  );
}
