import "./Rating.css";

function Star({ selected }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;
  return <span className={className}>★</span>;
}

const RATINGS = [1, 2, 3, 4, 5];

function Rating({ rating }) {
  return (
    <>
      {RATINGS.map((value) => (
        <Star key={value} selected={value <= (rating + 1) / 2} />
      ))}
    </>
  );
}
export default Rating;
