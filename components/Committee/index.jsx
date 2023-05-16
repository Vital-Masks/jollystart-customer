import React from 'react';
import Footer from '../Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';


const Committee = () => {
    <div className={`${inter.className}`}>
    <HomeBanner />
    <div className="bg-slate-100">
      <Container className="text-left">
        <h1 className="text-2xl font-bold text-slate-800">
        CURRENT COMMITTEE 2022/23
        </h1>
      
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((img) => (
            <div key={img}>
              <Image
                src={
                  'https://images.unsplash.com/photo-1578742209285-c4dbba4af948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvY2tleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                }
                width={720}
                height={720}
                className="aspect-square"
                alt="gg"
              />
            </div>
          ))}
        </div>

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
      </Container>
    </div>

    <br></br>
    <Footer/>
  </div>
};

export default Committee;