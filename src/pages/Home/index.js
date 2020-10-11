import React from "react";
import Product from "../../components/Product";
import "./style.css";
import products from "../../products";
import AmazonCarousel from "../../components/AmazonCarousel/index";

function Home() {
  return (
    <div className="container-luid">
      <AmazonCarousel />
      <div className="container">
        <div className="row">
          {products?.map(({ id, title, price, image, rating }) => (
            <div className="col-md-4 col-sm-6 col-xs-12 mt-2">
              <Product
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
