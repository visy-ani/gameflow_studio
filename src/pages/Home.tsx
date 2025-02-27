import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import { HeroSection, About, Features } from "../components";

const Home = () => {
  return (
    <LandingLayout>
      <HeroSection/>
      <About />
      <Features/>
    </LandingLayout>
  )
}

export default Home;