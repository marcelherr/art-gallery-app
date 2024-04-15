import Image from "next/image";

export default function Spotlight({ data }) {
  const randomIndex = Math.floor(Math.random() * (data.length - 1) + 0);
  const spotlightPiece = data[randomIndex];

  return (
    <article>
      <Image
        src={spotlightPiece.imageSource}
        alt="art-piece"
        width={240}
        height={130}
      />
      <h3>{spotlightPiece.artist}</h3>
    </article>
  );
}
