import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link href="">
        <Image src={image} alt="art-piece" width={240} height={130} />
      </Link>
      <h3>{artist}</h3>
    </article>
  );
}
