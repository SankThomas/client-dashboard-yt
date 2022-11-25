import React, { useState, useEffect } from "react";

export default function Assets() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    try {
      const getPhotos = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setPhotos(data.slice(0, 20));
        console.log(data.slice(0, 20));
      };
      getPhotos();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <section className="max-width">
        <h1>Assets</h1>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <article key={photo.id} className="article">
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
