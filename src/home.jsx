import Features from "./landing/Features";
import Hero from "./landing/Hero";
import LearningAct from "./landing/Learningact";
import ProgressTrack from "./landing/Progresstrack";
import Portfolio2 from "./landing/Portfolio2";
import Feedback_list from "./landing/Feedback_list";
import Stepguide from "./landing/Stepguide";
import SecondHero from "./landing/Secondhero";
import Subplans from "./landing/Subplans";
import FAQ from "./landing/FAQ";
import Contact from "./landing/Contact";
import Navbar from "./landing/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <LearningAct />
      <ProgressTrack />
      <Portfolio2 />
      <Feedback_list />
      <Stepguide />
      <SecondHero />
      <Subplans />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
