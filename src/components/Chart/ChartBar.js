import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHegiht = "0%";
  if (props.maxValue > 0) {
    barFillHegiht = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner ">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHegiht }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
