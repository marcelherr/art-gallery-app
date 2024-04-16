import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const ArtPieceContainer = styled.article`
  width: var(--width-wrapper);
`;

export default function SpotlightPage({ data, artPiecesInfo }) {
  console.log(artPiecesInfo);
  console.log(artPiecesInfo);
  return <ArtPieces pieces={data} artPiecesInfo={artPiecesInfo} />;
}
