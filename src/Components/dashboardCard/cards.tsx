// required
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Cards = () => {
  const cardData = [
    {
      title: "Visits",
      days: "monthly",
      p2: {
        icon: "up",
        span: "+5 %",
      },
      number: "24,103",
      compare: "Compare to last week",
    },
    {
      title: "Growth",
      days: "weekly",
      p2: {
        icon: "down",
        span: "+2 %",
      },
      number: "+15%",
      compare: "Compare to last week",
    },
    {
      title: "Bookings",
      days: "Daily",
      p2: {
        icon: "up",
        span: "+12 %",
      },
      number: "1,443",
      compare: "Compare to yesterday",
    },
  ];
  return (
    <div className="wedgets">
      {cardData.map((data: any, index: any) => (
        <div className="widget-single" key={index}>
          <div className="wedget-single-line1">
            <p>{data.title}</p>
            <p className="daybox">
              <span>{data.days} </span>
            </p>
          </div>
          <div className="wedget-single-line2">
            <h3>{data.number}</h3>
          </div>
          <div className="wedget-single-line3">
            <p>{data.compare}</p>
            <p
              style={{ display: "flex" }}
              className={data.p2.icon === "up" ? "up" : "down"}
            >
              {data.p2.icon === "up" ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
              <span>{data.p2.span} </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
