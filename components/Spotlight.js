import { StyledImage } from "./StyledImage";

export default function Spotlight({ data }) {
  const randomIndex = Math.floor(Math.random() * (data.length - 1) + 0);
  const spotlightPiece = data[randomIndex];

  return (
    <article>
      <StyledImage
        src={spotlightPiece.imageSource}
        alt="art-piece"
        width={240}
        height={160}
        layout="responsive"
      />
      <h3>{spotlightPiece.artist}</h3>
    </article>
  );
}
