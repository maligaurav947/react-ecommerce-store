import { Link, useParams } from "react-router-dom";
import ProductData from "./ProductData";

const View = () => {
  const { id } = useParams();
  const item = ProductData.find((post) => post.id == id);
  const { img, title } = item;

  return (
    <>
      <div className="h-screen grid place-content-center">
        <Link to="/">GO Back</Link>
        <div className="flex  items-center justify-evenly ">
          <div
            className="border-2 border-violet-400 grid place-content-center"
            style={{
              height: "500px",
              width: "400px",
            }}
          >
            <img src={img} />
          </div>
          <div className="flex items-start">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default View;
