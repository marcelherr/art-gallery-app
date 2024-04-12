import Image from "next/image";

export default function SpotlightPiece({ image, artist }) {
  return (
    <article>
      <Image src={image} alt="art-piece" width={240} height={130} />
      <h3>{artist}</h3>
    </article>
  );
}
