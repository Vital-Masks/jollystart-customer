import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import SportsGames from '@/components/SportsGamesSlider';
import Membership from '@/components/Membership';
import Gallery from '@/components/Gallery';
import LatestNews from '@/components/LatestNews';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
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
          <p className="mt-5 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum lorem ligula, a viverra justo luctus fringilla. Phasellus
            lobortis dui et ipsum dictum semper. Quisque dui erat, feugiat in
            sapien ut, bibendum lobortis lectus. Vivamus id tristique tellus.
            Sed cursus sollicitudin sapien. Integer sollicitudin libero non erat
            fermentum, vel tempus arcu varius. Nunc tempor ut metus a pretium.
            Duis eget leo ut tellus aliquam pulvinar. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed vestibulum lorem ligula, a
            viverra justo luctus fringilla. Phasellus lobortis dui et ipsum
            dictum semper. Quisque dui erat, feugiat in sapien ut, bibendum
            lobortis lectus. Vivamus id tristique tellus. Sed cursus
            sollicitudin sapien.
          </p>
          <button className="px-4 py-2 mt-10 bg-blue-900 text-white rounded-md">
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
            LLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum lorem ligula, a viverra
          </p>
        </div>
        <SportsGames />
      </div>
      <Membership />
      <Gallery />
      <Messages />
      <LatestNews />
      <Container>
      <button className="px-4 py-2 mt-10 bg-blue-900 rounded-md text-white content-center">
            View More
          </button>
        </Container>
      <br></br>
      <Footer/>
    </div>
  );
}
