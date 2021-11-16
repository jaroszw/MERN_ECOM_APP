import './homepage.css';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import Chart from '../components/chart/Chart';
import WidgetSm from '../components/widgetSm/WidgetSm';
import WidgetLg from '../components/widgetLg/WidgetLg';

import { userData } from '../dummyData';

const Homepage = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        grid
        data={userData}
        title="Users Analytics"
        dataKey="name"
        axisName="Active Users"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Homepage;
