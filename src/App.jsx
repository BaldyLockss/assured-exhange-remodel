import "./App.css";
import Landing from "./pages/landing/landing";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Section from "./pages/sections/section";
import { LandingList } from "./data/landingListData";
import { sellInfo } from "./data/sellInfoData";
import { buyInfo } from "./data/buyInfoData";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing data={LandingList} />
        <Section data={sellInfo} reverse={false} />
        <Section data={buyInfo} reverse={true} />
      </main>
      <Footer />
    </>
  );
}

export default App;
