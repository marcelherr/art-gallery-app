import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const ArtPieceContainer = styled.article`
  width: var(--width-wrapper);
`;

export default function ArtPiecePage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      pieces={data}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
