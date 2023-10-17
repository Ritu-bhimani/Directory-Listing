// components
import Charts from "../../Components/Charts/Charts";
import Features from "../../Components/Charts/totalChart";
import HomeTable from "../../Components/HomeTable/HomeTable";
import DashboardCard from "../../Components/dashboardCard/cards";

const Home = () => {
  return (
    <div className="home">
      <DashboardCard />
      <div className="featuresAndCharts">
        <Features />
        <Charts height={540} />
      </div>
      {/* <div className="home-table">
        <h1>last transaction</h1>
        <HomeTable />
      </div> */}
    </div>
  );
};

export default Home;
