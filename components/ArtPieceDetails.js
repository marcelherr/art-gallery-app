import { StyledImage } from "./StyledImage";
import styled from "styled-components";
import { ArtPieceContainer } from "./ArtPieceContainer";
import { useRouter } from "next/router";
import FavoriteButton from "./FavoriteButton";

const StyledButton = styled.button`
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
`;

const Div = styled.div`
  position: relative;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  const router = useRouter();
  const pieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );
  const isFavorite = pieceInfo && pieceInfo.isFavorite === true ? true : false;
  return (
    <ArtPieceContainer>
      <h1>{title}</h1>
      <h3>{year}</h3>
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
      <h2>{artist}</h2>
      <p> {genre}</p>
      <StyledButton
        type="button"
        name="back-button"
        onClick={() => {
          router.back();
        }}
      >
        Back
      </StyledButton>
    </ArtPieceContainer>
  );
}
