import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";

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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function handleToggleFavorite(slug) {
  setArtPiecesInfo((artPiecesInfo) => {
    const info = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );
    if (info) {
      return artPiecesInfo.map((artPieceInfo) =>
        artPieceInfo.slug === slug
          ? { ...artPieceInfo, isFavorite: !info.isFavorite }
          : artPieceInfo
      );
    } else {
      return [...artPiecesInfo, { slug: slug, isFavorite: true }];
    }
  });
}

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  // useEffect(() => {
  //   if (data) {
  //     const artPiecesInfo = data.map((piece) => ({
  //       slug: piece.slug,
  //       isFavorite: false,
  //     }));
  //     console.log(artPiecesInfo);
  //     console.log(artPiecesInfo[0].isFavorite);
  //     setArtPiecesInfo(artPiecesInfo);
  //   }
  // }, [data]);

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
          <Component
            {...pageProps}
            data={data}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
          <Layout></Layout>
        </Main>
      </SWRConfig>
    </>
  );
}
