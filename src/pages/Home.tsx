import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import { HeroSection, About, Features } from "../components";
import Story from "../components/layoutComponent/Landing/Story";

const Home = () => {
  return (
    <LandingLayout>
      <HeroSection/>
      <About />
      <Features/>
      <Story/>
    </LandingLayout>
  )
}

export default Home;