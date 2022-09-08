import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../config/context";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./product.scss";
import ProductItem from "./ProductItem";
const ProductrDetail = () => {
  const id = useParams();
  const state = useContext(Context);
  const [products] = state.productsApi.products;
  const [detailProduct, setDetailProduct] = useState([]);
  useEffect(() => {
    if (id.id) {
      products.forEach((product) => {
        if (product._id === id.id) setDetailProduct(product);
      });
    }
  }, [id.id, products]);
  return (
    <div className="product-detail">
      {detailProduct.length === 0 ? (
        <h1>Products is not available</h1>
      ) : (
        <div className="detail-row">
          <div className="product-detail-img">
            <img src={detailProduct?.images.url} alt={detailProduct?.title} />
          </div>
          <div className="row">
            <h2>{detailProduct?.title}</h2>
            <h3>
              <CurrencyRupeeIcon />
              {detailProduct?.price}
            </h3>
            <p>{detailProduct?.desc}</p>
            <span>{detailProduct?.content}</span>
            <h6>Sold: {detailProduct?.sold} </h6>
            <Link to="/cart" className="detail-cart">
              Buy Now
            </Link>
          </div>
        </div>
      )}
      <div className="related-product">Related Products</div>
      <div className="related-item">
        {products &&
          products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
      </div>
    </div>
  );
};

export default ProductrDetail;
