import Container from '@/components/Shared/Container';
import Image from 'next/image';
import React from 'react';

const History = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="text-2xl font-bold text-slate-800 p-5">History</h1>
          <p className="mt-5 text-slate-600 p-5">
          A sporting institution with a remarkable history that dates back to 1948. 
          Founded by the distinguished alumni of Jaffna Hindu College, our club has been 
          a beacon of excellence and camaraderie for over seven decades. As we approach our 
          momentous 75th anniversary, we reflect upon our journey and celebrate the milestones that 
          have shaped our organization.

          Jolly Stars Sports Club was established by former students of Jaffna Hindu College, 
          driven by a shared passion for sports and a desire to create a platform for athletic prowess. 
          Since our inception, we have remained steadfast in our commitment to providing opportunities for 
          sports enthusiasts from our alma mater to showcase their talents and compete in a range of 
          thrilling sporting events.
          </p><br></br>
          <p className="mt-5 text-slate-600 p-5">
          With a diverse array of sports on offer, including football, cricket, badminton, athletics, 
          basketball, volleyball, hockey, table tennis, and weightlifting, Jolly Stars Sports Club 
          caters to a wide range of interests and abilities. These sports have been the cornerstone of 
          our organization, fueling a sense of passion, competition, and camaraderie among our members.
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
          Throughout the years, our club has nurtured and produced countless talented sportsmen and 
          athletes who have achieved remarkable success both within our organization and on larger 
          platforms. Their achievements have not only brought glory to our club but have also served 
          as a source of inspiration for aspiring athletes within our community.

          Jolly Stars Sports Club has consistently set the bar high, acting as a trailblazer for other 
          sports clubs in terms of achievements and organizational functioning. Our dedication to 
          excellence has propelled us to the forefront of the sporting arena, and we take pride in the 
          impact we have had on the local sports community.
          </p><br></br>
          <p className="mt-5 text-slate-600 p-5">
          As we embark on our 75th anniversary, we continue to uphold our mission of fostering a sense 
          of unity, sportsmanship, and personal growth among our members. Jolly Stars Sports Club stands
           as a testament to the values instilled in us by Jaffna Hindu College, emphasizing the 
           importance of discipline, teamwork, and leadership both on and off the field.

          We invite you to become a part of our historic legacy. Join Jolly Stars Sports Club and
           experience the spirit of sportsmanship, the thrill of competition, and the bonds of 
           friendship that have been cherished for generations. Together, let us carry forward the 
           rich heritage of our club and create new chapters in the annals of sporting excellence.

          Jolly Stars Sports Club - Celebrating 75 Years of Sporting Legacy!
          </p>
        </Container>
      </div>
    </>
  );
};

export default History;
