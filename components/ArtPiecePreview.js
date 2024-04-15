import { StyledImage } from "./StyledImage";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link href={`art-pieces/${slug}`}>
        <StyledImage
          src={image}
          alt="art-piece"
          width={240}
          height={160}
          layout="responsive"
        />
      </Link>
      <h3>{artist}</h3>
    </article>
  );
}
