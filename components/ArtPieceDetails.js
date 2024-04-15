import { StyledImage } from "./StyledImage";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
`;

const ArtPieceContainer = styled.article`
  width: var(--width-wrapper);
  padding: 0 0 5rem 0;
`;

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <ArtPieceContainer>
      <h1>{title}</h1>
      <h3>{year}</h3>
      <StyledImage
        src={image}
        alt="art-piece"
        width={240}
        height={160}
        layout="responsive"
      />
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
