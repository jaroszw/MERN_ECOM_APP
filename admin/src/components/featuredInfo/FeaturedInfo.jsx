import './featuredInfo.css';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featruedMoneyContainer">
          <span className="featuredMoney">$2,419</span>
          <span className="featuredMoneyRate">
            -11.20 <ArrowDownwardIcon className="featuredIcons negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featruedMoneyContainer">
          <span className="featuredMoney">$3,419</span>
          <span className="featuredMoneyRate">
            +2.20 <ArrowUpwardIcon className="featuredIcons" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featruedMoneyContainer">
          <span className="featuredMoney">$1,419</span>
          <span className="featuredMoneyRate">
            +1.20 <ArrowUpwardIcon className="featuredIcons" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
