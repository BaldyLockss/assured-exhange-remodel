import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
