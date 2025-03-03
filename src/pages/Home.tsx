import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import { HeroSection, About, Features, Contact, Footer } from "../components";

const Home = () => {
  return (
    <LandingLayout>
      <HeroSection/>
      <About />
      <Features/>
      {/* <Story/> */}
      <Contact />
      <Footer />
    </LandingLayout>
  )
}

export default Home;