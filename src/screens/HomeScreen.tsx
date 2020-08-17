import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps, match } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { InitialProps } from "./../redux/store";
import { listProducts } from "./../redux/actions/productActions";
// import Rating from "../components/Rating";

interface HomescreenProps extends RouteComponentProps {
 id: string;
}

function HomeScreen(props: HomescreenProps) {
 console.log(props);
 const [searchKeyword, setSearchKeyword] = useState("");
 const [sortOrder, setSortOrder] = useState("");
 //  const category = props.match.params.id ? props.match.params.id : "";
 const productList = useSelector((state: InitialProps) => state?.productList);
 const { products, loading, error } = productList;
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(listProducts());

  return () => {
   //
  };
 }, []);

 const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // dispatch(listProducts(category, searchKeyword, sortOrder));
 };
 const sortHandler = (e: any) => {
  setSortOrder(e.target.value);
  // dispatch(listProducts(category, searchKeyword, sortOrder));
 };

 return (
  <>
   tess
   {/* {category && <h2>{category}</h2>} */}
   {/* <ul className="filter">
    <li>
     <form onSubmit={submitHandler}>
      <input
       name="searchKeyword"
       onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
     </form>
    </li>
    <li>
     Sort By{" "}
     <select name="sortOrder" onChange={sortHandler}>
      <option value="">Newest</option>
      <option value="lowest">Lowest</option>
      <option value="highest">Highest</option>
     </select>
    </li>
   </ul>
   {loading ? (
    <div>Loading...</div>
   ) : error ? (
    <div>{error}</div>
   ) : (
    <ul className="products">
     {products.map((product) => (
      <li key={product._id}>
       <div className="product">
        <Link to={"/product/" + product._id}>
         <img className="product-image" src={product.image} alt="product" />
        </Link>
        <div className="product-name">
         <Link to={"/product/" + product._id}>{product.name}</Link>
        </div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">
         <Rating
          value={product.rating}
          text={product.numReviews + " reviews"}
         />
        </div>
       </div>
      </li>
     ))}
    </ul>
   )} */}
  </>
 );
}
export default HomeScreen;
