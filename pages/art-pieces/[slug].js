import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
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

export default function ArtPieces({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = data.find((artPiece) => artPiece.slug === slug);

  if (!currentArtPiece) {
    return null;
  }

  const { image, title, artist, year, genre } = data;

  return (
    <div>
      <ArtPieceDetails
        image={data.image}
        title={data.title}
        artist={data.artist}
        year={data.year}
        genre={data.genre}
      />
      <StyledButton
        type="button"
        name="back-button"
        onClick={() => {
          router.push("../index");
        }}
      >
        Back
      </StyledButton>
    </div>
  );
}
