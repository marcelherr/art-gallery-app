import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <Spotlight
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
