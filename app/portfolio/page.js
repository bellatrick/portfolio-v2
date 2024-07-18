import dynamic from "next/dynamic";
import JaraLayout from "../../layouts/JaraLayout";

const PortfolioIsotope = dynamic(
  () => import("../../components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Page = () => {
  return (
    <JaraLayout>
      <div className="jara_tm_portfolio_page">
        <div className="jara_tm_portfolio">
          <div className="container">
            <PortfolioIsotope />
          </div>
        </div>
      </div>
    </JaraLayout>
  );
};
export default Page;
