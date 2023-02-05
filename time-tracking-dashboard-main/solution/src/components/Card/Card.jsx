import "./Card.css";

import data from "../../data.json";
import { timeSpan } from "../../timespanStore";
import { useStore } from "@nanostores/react";
import PropTypes from "prop-types";

const timeSpans = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

const Card = (props) => {
  const $timeSpan = useStore(timeSpan);
  return (
    <div class="card">
      <div class="banner" style={{ backgroundColor: props.bannerColor }}>
        <img class="banner__icon" src={props.icon} />
      </div>
      <div class="data-card">
        <h2 class="data-card__title">{data[props.index].title}</h2>
        <button class="data-card__ellipsis">
          <img src={"svg/icon-ellipsis.svg"} />
        </button>
        <h1 class="data-card__hours">{`${
          data[props.index].timeframes[$timeSpan].current
        }hrs`}</h1>
        <h3 class="data-card__previous">{`${timeSpans[$timeSpan]} - ${
          data[props.index].timeframes[$timeSpan].previous
        }hrs`}</h3>
      </div>
    </div>
  );
};

Card.defaultProps = {
  index: 0,
  icon: "svg/icon-work.svg",
  bannerColor: "hsl(15, 100%, 70%)",
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  bannerColor: PropTypes.string.isRequired,
};

export default Card;
