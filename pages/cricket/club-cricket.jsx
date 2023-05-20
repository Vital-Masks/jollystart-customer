import Container from '@/components/Shared/Container';
import Image from 'next/image';
import React from 'react';

const ClubCricket = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="text-2xl font-bold text-slate-800 p-5">Club Cricket History</h1>
          <p className="mt-5 text-slate-600 p-5">
          Cricket holds a special place in the heart of our esteemed sports club, where the sound of 
          leather meeting willow echoes through the years. With a passion for the game running deep 
          within our veins, Jolly Stars Cricket Division stands as a testament to the rich tradition 
          and unwavering commitment to excellence.

        Within the hallowed grounds of our club, cricket is more than just a sport; it is a way of life. 
        We provide a nurturing environment for cricketers, honing their skills, and nurturing their passion 
        for the game. Our cricket division is known for its unwavering dedication to promoting the spirit of 
        cricket, both on and off the field.
          </p><br></br>
          <p className="mt-5 text-slate-600 p-5">
          At Jolly Stars, we boast state-of-the-art cricket facilities, including well-maintained pitches, 
          professional coaching staff, and a supportive network of fellow cricketers. Whether you're a 
          seasoned player or just starting your cricketing journey, our club provides the perfect platform
           to develop your skills, compete at various levels, and forge lifelong friendships.

          Our cricket division encompasses all formats of the game, including Test matches, One-Day, and 
          Twenty20 matches. We organize regular practice sessions, intra-club matches, and competitive 
          tournaments to ensure our cricketers have ample opportunities to showcase their talent and 
          continually raise the bar of their performance.
          </p>
          <div className="flex justify-center mt-4 p-5">
            <Image
              src={
                'https://images.unsplash.com/photo-1578742209285-c4dbba4af948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvY2tleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              }
              width={720}
              height={720}
              className="w-full h-[400px] object-cover"
              alt="gg"
            />
          </div>
          <p className="mt-5 text-slate-600 p-5">
          Jolly Stars Sports Club has produced an impressive lineage of cricketing talent that has 
          represented not only our club but also the region and the district and province with 
          distinction. Our players have earned accolades, broken records, and become beacons of 
          inspiration for aspiring cricketers. We take immense pride in their accomplishments and 
          continue to provide them with unwavering support and guidance.

          Beyond the boundaries of the game, Jolly Stars Cricket Division instills the values of 
          sportsmanship, discipline, and teamwork. We believe in nurturing not just exceptional 
          cricketers but also individuals who exhibit integrity, respect, and leadership both on 
          and off the field. Our cricketers are ambassadors of fair play and serve as role models for 
          the cricketing fraternity.

          Join us at Jolly Stars Cricket Division and immerse yourself in the world of cricketing 
          excellence. Whether you're a young talent dreaming of wearing the national colors or a 
          passionate fan looking for a community that shares your love for the game, we welcome you 
          to be a part of our rich heritage and contribute to the glorious legacy of Jolly Stars Cricket. 
          Together, let us continue to push the boundaries of the game, inspire future generations, and 
          create unforgettable cricketing moments that will be etched in history.
          </p>
        </Container>
      </div>
    </>
  );
};

export default ClubCricket;
