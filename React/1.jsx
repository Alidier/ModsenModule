import React from 'react';

const photos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "green",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "purple",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
];

const PhotoList = () => {
  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
