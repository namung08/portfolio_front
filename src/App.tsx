import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { Activity } from "./components/Activity";
import Footer from "./components/Footer";
import developerImg from "./assets/img/developer.jpg";
import { educationInfo } from "./data/educationInfo";
import { personalHistory } from "./data/personalHistory";

function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      <img
        className="w-full h-40 object-cover md:h-64 lg:h-80"
        src={developerImg}
        alt="header img"
      />
      <main className="mx-auto max-w-lg md:max-w-xl lg:max-w-2xl pt-16 mb-10 px-4">
        <AboutMe />
        <Activity title="🖥️ personal history" content={personalHistory} />
        <Activity title="📖 education" content={educationInfo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
