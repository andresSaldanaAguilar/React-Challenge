import React, { useEffect } from "react";
import "./PokeCard.css";

const PokeCard = (props) => {
  const { pokemon } = props;
  const sprites = Object.entries(pokemon.sprites);
  let [spriteIdx, setSpriteIndex] = React.useState(0);

  const onNextClick = () => {
    setSpriteIndex(spriteIdx++ % sprites.length);
  };

  useEffect(() => {
    onNextClick();
  });

  return (
    <>
      <h1>Name: {pokemon.name}</h1>
      <a href={pokemon.video} target="_blank" rel="noreferrer">
        Know more
      </a>
      <h2>
        Sprites ({spriteIdx + 1} of {sprites.length})
      </h2>
      <div className="pokeCard">
        <figcaption className="pokeCard-title">
          {sprites[spriteIdx][0]}
        </figcaption>
        <img
          className="pokeCard-illustation"
          src={sprites[spriteIdx][1]}
          alt={sprites[spriteIdx][0]}
        />
      </div>
      <button onClick={onNextClick}>Next sprite</button>
    </>
  );
};
export default PokeCard;
