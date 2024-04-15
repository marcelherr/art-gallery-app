import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <article>
      <h1>{title}</h1>
      <small>{year}</small>
      <Image src={image} alt="art-piece" width={240} height={130} />
      <h2>{artist}</h2>
      <p> {genre}</p>
    </article>
  );
}
