import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";
import Divider from "./Divider";

const ArtPieceContainer = styled.article`
  width: var(--width-wrapper);
  padding: 0 0 5rem 0;
`;

export default function ArtPieces({ pieces }) {
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
              slug={piece.slug}
              // isFavorite={artPiecesInfo[1].isFavorite}
            />
          </li>
        ))}
      </ul>
    </ArtPieceContainer>
  );
}
