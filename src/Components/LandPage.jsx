import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LandPage() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">

        <div
          className="spinner-border text-primary"
          role="status"
        ></div>

        <p className="mt-2">
          جاري تحميل المنتجات...
        </p>

      </div>
    );
  }

  return (
    <div className="container py-5" dir="rtl">

      <h2 className="text-center mb-4">
        متجر المنتجات الإلكتروني
      </h2>

      <div className="row">

        {products.map((product) => (

          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 px-2"
            key={product.id}
          >

            <div className="card h-100 shadow-sm">

              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{
                  height: "200px",
                  objectFit: "contain"
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title fs-6 text-truncate">
                  {product.title}
                </h5>

                <p className="card-text fw-bold text-success mt-auto">
                  {product.price} $
                </p>

                {/* تفاصيل المنتج */}
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary w-100 mt-2"
                >
                  تفاصيل المنتج
                </Link>

                <button className="btn btn-outline-primary w-100 mt-2">
                  إضافة للسلة
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LandPage;