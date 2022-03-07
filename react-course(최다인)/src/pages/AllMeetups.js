 import { useState, useEffect } from "react";
 
 import MeetupList from "../components/meetups/MeetupList";
//  import NewMeetupsPage from "./NewMeetup";
 
//  const DUMMY_DATA = [
//             {
//               id: 'm1',
//               title: '미호크 내 챙놈',
//               image:
//                 'https://image.fmkorea.com/files/attach/new/20200622/486616/1508429274/2957132497/883595cc7153594da279d0e9951357c1.jpg?c=20200623181312',
//               address: '나눈 세계 최강 검사',
//               description:
//                 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//             },
//             {
//               id: 'm2',
//               title: 'This is a second meetup',
//               image:
//                 'https://image.fmkorea.com/files/attach/new/20200622/486616/1508429274/2957132497/883595cc7153594da279d0e9951357c1.jpg?c=20200623181312',
//               address: 'Meetupstreet 5, 12345 Meetup City',
//               description:
//                 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//             },
//           ];


function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-c5f82-default-rtdb.firebaseio.com/meetups.json'
    )
     .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
        ...data[key]
        };
        
      };

      meetups.push(meetup);

      setIsLoading(false);
      setLoadedMeetups(data);
       });
  }, []);


 if (isLoading) {
   return (
   <section>
     <p>Loading...</p>
   </section>
   );
 }

 return (
 <section>
     <h1>All Meetups</h1>
     <MeetupList meetups={loadedMeetups} />
 </section>
 );
}

export default AllMeetupsPage;