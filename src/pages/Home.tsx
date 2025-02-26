import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import { HeroSection, About } from "../components";

const Home = () => {
  return (
    <LandingLayout>
      <HeroSection/>
      <About />
    </LandingLayout>
  )
}

export default Home;