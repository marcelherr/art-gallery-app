import { StyledImage } from "./StyledImage";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({ image, title, artist, isFavorite }) {
  return (
    <article>
      <h2>{title}</h2>
      <StyledImage
        src={image}
        alt="art-piece"
        width={240}
        height={160}
        layout="responsive"
      />
      <h3>{artist}</h3>
      <FavoriteButton isFavorite={isFavorite}></FavoriteButton>
    </article>
  );
}
