import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";
import styled from "styled-components";

const fetcher = async (url) => {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
  } catch (error) {
    console.log("failed to fetch");
  }
};

export default function App({ Component, pageProps }) {
  const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Main>
          <Component {...pageProps} data={data} />
          <Layout></Layout>
        </Main>
      </SWRConfig>
    </>
  );
}
