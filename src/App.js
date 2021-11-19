import { Header } from "./components/header";
import { NewRevolution } from "./screens/new_revolution";
import NFTCollection from "./screens/nft-collection";
import { Container } from "react-bootstrap";
import TopArtists from "./screens/top_sellers";
import BrowseNFT from "./screens/browse-nft";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <NewRevolution />
        <NFTCollection />
        <TopArtists />
        <BrowseNFT />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
