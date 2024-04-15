import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <article>
      <h2>{title}</h2>
      <small>{year}</small>
      <Image src={image} alt="art-piece" width={240} height={130} />
      <h3>{artist}</h3>
      <p> {genre}</p>
    </article>
  );
}
