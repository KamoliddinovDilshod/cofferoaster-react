import Header from "./Components/Header/Header";
import Collection from "./Components/Main/Collection/Collection";
import Hero from "./Components/Main/Hero/Hero";
import Select from "./Components/Main/Select/Select";
import Works from "./Components/Main/Works/Works";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <Hero/>
        <Collection/>
        <Select/>
        <Works/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;