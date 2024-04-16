import { StyledImage } from "./StyledImage";
import Link from "next/link";
import Divider from "./Divider";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
`;

export default function ArtPiecePreview({
  key,
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  artPiecesInfo,
  index,
}) {
  const pieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );
  const isFavorite = pieceInfo && pieceInfo.isFavorite === true ? true : false;

  return (
    <li key={key}>
      {index > 0 ? <Divider /> : null}
      <Link href={`art-pieces/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <Div>
        <StyledImage
          src={image}
          alt="art-piece"
          width={240}
          height={160}
          layout="responsive"
        />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        ></FavoriteButton>
      </Div>
      <h3>{artist}</h3>
    </li>
  );
}
