import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const ArtPieceContainer = styled.article`
  width: var(--width-wrapper);
`;

export default function SpotlightPage({ data }) {
  return <ArtPieces pieces={data} />;
}
