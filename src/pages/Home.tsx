import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import { HeroSection } from "../components";

const Home = () => {
  return (
    <LandingLayout>
      <HeroSection/>
      <div style={{height: '100vh', width: '100vw', backgroundColor: 'lightblue'}}></div>
    </LandingLayout>
  )
}

export default Home;