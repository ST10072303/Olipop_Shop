import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Ingredients } from "./Components/Ingredients/Ingredients";
import { ProductSection } from "./Components/ProductSection/ProductSection";
import { Subscribe } from "./Components/Subscribe/Subscribe";
import { Benefits } from "./Components/Benefits/Benefits";
import { Footer } from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ingredients />
        <ProductSection />
        <Benefits />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;

