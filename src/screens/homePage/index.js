import React from "react";
import { NewRevolution } from "./new_revolution";
import NFTCollection from "./nft-collection";
import { Container } from "react-bootstrap";
import TopArtists from "./top_sellers";
import BrowseNFT from "./browse-nft";
import Footer from "../../components/footer";
import Page from "../../components/page";

const HomePage = () => {
  return (
    <Page>
      <Container>
        <NewRevolution />
        <NFTCollection />
        <TopArtists />
        <BrowseNFT />
      </Container>
      <Footer />
    </Page>
  );
};

export default HomePage;
