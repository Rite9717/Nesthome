import { Card } from "./Card";
import "../App.css";

export const Home = () => {
  return (
    <div className="first">
      <div className="textcontainer">
        <h1 className="big-text">We Got All Services You Need</h1>
      </div>
      <div className="card_container">
        <Card />
      </div>
    </div>
  );
};
