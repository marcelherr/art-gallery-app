import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Spotlight data={data} />
      <ArtPieces pieces={data} />
    </>
  );
}
