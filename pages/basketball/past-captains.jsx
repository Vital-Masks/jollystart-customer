import ListViewer from '@/components/ListViewer';
import Container from '@/components/Shared/Container';
import React from 'react';

const PastCaptains = () => {
  const members = [
    {
      id: 1,
      title: 'Past Captains',
      members: [
        { id: 0, name: 'member' },
        { id: 1, name: 'member' },
        { id: 2, name: 'member' },
        { id: 3, name: 'member' },
        { id: 4, name: 'member' },
        { id: 5, name: 'member' },
      ],
    },
   
  ];

  return (
    <div className="bg-white">
      <Container>
        <ListViewer data={members} />
      </Container>
    </div>
  );
};

export default PastCaptains;
