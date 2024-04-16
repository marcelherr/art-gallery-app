import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const ArtPieceContainer = styled.article`
  width: var(--width-wrapper);
  padding: 0 0 5rem 0;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ArtPieceContainer>
      <h1>List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece, index) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            index={index}
          />
        ))}
      </ul>
    </ArtPieceContainer>
  );
}
