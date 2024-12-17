import "./cards.css";

function Cards({ text, img, bottom, alt }) {
  return (
    <div className="services-card">
      <img src={img} alt={alt} className="card-img" />
      <h2 className="title">{text}</h2>
      <div className="bottom">{bottom}</div>
    </div>
  );
}

export default Cards;
