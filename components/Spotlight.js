import { StyledImage } from "./StyledImage";
import FavoriteButton from "./FavoriteButton";
import { ArtPieceContainer } from "./ArtPieceContainer";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  margin: 5rem 0 0 0;
`;

export default function Spotlight({ data, artPiecesInfo, onToggleFavorite }) {
  const randomIndex = Math.floor(Math.random() * (data.length - 1) + 0);
  const spotlightPiece = data[randomIndex];
  const spotlightPieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === spotlightPiece.slug
  );
  const isFavorite =
    spotlightPieceInfo && spotlightPieceInfo.isFavorite === true ? true : false;

  return (
    <ArtPieceContainer>
      <Div>
        <StyledImage
          src={spotlightPiece.imageSource}
          alt="art-piece"
          width={240}
          height={160}
          layout="responsive"
        ></StyledImage>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={spotlightPiece.slug}
        ></FavoriteButton>
      </Div>
      <h3>{spotlightPiece.artist}</h3>
    </ArtPieceContainer>
  );
}
