import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieces({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = data.find((artPiece) => artPiece.slug === slug);

  if (!currentArtPiece) {
    return null;
  }

  const { imageSource, name, artist, year, genre } = currentArtPiece;

  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
