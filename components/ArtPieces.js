import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";
import Divider from "./Divider";

export default function ArtPieces({ pieces, artPiecesInfo }) {
  const ArtPieceContainer = styled.article`
    width: var(--width-wrapper);
  `;
  // console.log(artPiecesInfo[2].isFavorite);
  return (
    <ArtPieceContainer>
      <h1>List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece, index) => (
          <li key={piece.slug}>
            {index > 0 ? <Divider /> : null}
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              // isFavorite={artPiecesInfo[1].isFavorite}
            />
          </li>
        ))}
      </ul>
    </ArtPieceContainer>
  );
}
