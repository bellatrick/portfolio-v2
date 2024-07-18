import About from '../components/About';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import JaraLayout from '../layouts/JaraLayout';

const Page = () => {
  return (
    <JaraLayout>
      <Home />
      <About />
      <Portfolio />
    </JaraLayout>
  );
};
export default Page;
