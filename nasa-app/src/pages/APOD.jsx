import React, { useEffect, useState } from 'react';
import axios from 'axios';

const APOD = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/nasa/apod')
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <img src={data.url} alt={data.title} className="rounded shadow my-4 max-w-full" />
      <p>{data.explanation}</p>
    </div>
  );
};

export default APOD;
