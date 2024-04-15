import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage({ data }) {
  return (
    <>
      <Spotlight data={data} />
    </>
  );
}
