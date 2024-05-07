import Navbar from "../components/navbar/Navbar";
import Object from "../tool/Object";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar Object={Object.Navbar} />
      <div className="bg-headerGradient mobile:flex mobile:flex-col tablet:flex tablet:flex-col">
        <Section1 Object={Object.Section1} />
        <Section2 Object={Object.Section2} />
      </div>
      <Section3 Object={Object.Section3} />
      <Section4 Object={Object.Section4} />
      <Section5 Object={Object.Section5} />
      <Section6 Object={Object.Section6} />
      <Section7 Object={Object.Section7} />
      <Footer Object={Object.Footer} />
    </div>
  );
}

export default App;
