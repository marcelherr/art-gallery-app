import Heart from "@/assets/heart.svg";
import styled from "styled-components";

const FavoriteHeart = styled(Heart)`
  position: absolute;
  top: -2.5rem;
  right: 0.5rem;
  width: 2rem;
  fill: ${({ isFavorite }) => (isFavorite ? "red" : "black")};
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <FavoriteHeart
      isFavorite={isFavorite}
      onClick={() => {
        onToggleFavorite(slug);
      }}
    ></FavoriteHeart>
  );
}
