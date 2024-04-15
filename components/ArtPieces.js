import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";
import Divider from "./Divider";

export default function ArtPieces({ pieces }) {
  const ArtPieceContainer = styled.article`
    width: var(--width-wrapper);
  `;

  return (
    <ArtPieceContainer>
      <h1>List of all Art Pieces</h1>
      <ul>
        {pieces.map((piece, index) => (
          <>
            <li key={piece.slug}>
              {index > 0 ? <Divider /> : null}
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
              />
            </li>
          </>
        ))}
      </ul>
    </ArtPieceContainer>
  );
}
