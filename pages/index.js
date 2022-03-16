import Nav from '../client/components/Nav';
import Team from '../client/components/Styles/Team';
import AboutApp from '../client/components/Styles/MainFeature';
import SecondFeature from '../client/components/Styles/SecondFeature';
import Features from '../client/components/Styles/Features';

function HomePage() {
  return (
    <div>
      <Nav />
      <AboutApp />
      <SecondFeature />
      <Features />
      <Team />
    </div>
  )
}

export default HomePage;