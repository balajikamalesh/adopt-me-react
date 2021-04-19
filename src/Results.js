import React from "react";
import Pet from "./Pet";

export default function ({ pets }) {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets Found</h1>
      ) : (
        pets.map((pet) => {
          const { city, state } = pet.contact.address;
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              animal={pet.type}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${city}, ${state}`}
            />
          );
        })
      )}
    </div>
  );
}
