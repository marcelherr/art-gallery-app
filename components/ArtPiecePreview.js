import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article>
      <h2>{title}</h2>
      <Image src={image} alt="art-piece" width={240} height={130} />
      <h3>{artist}</h3>
    </article>
  );
}
