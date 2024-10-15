import Add from "../Add";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    setProduct(data.products);
    console.log(product);
  };

  const selectPage = (idx) => {
    setPage(idx)
  }

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <>
      <>
        <div className="container">
          {product.length > 0 ? (
            <div className="products-item">
              {product.slice(page * 10 - 10, page * 10).map((item) => (
                <div className="prod" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          ) : (
            <h1>Data are not fetched</h1>
          )}

          <div className="pagination">
            {[...Array(Math.ceil(product.length / 10))].map((_, i) => {
              return <span className={page===i+1 ? "pagination-selected":""}
               onClick={() => selectPage(i+1)} 
              key={i}>{i + 1}</span>;
            })}
          </div>
        </div>
      </>
    </>
);
}

export default App;
