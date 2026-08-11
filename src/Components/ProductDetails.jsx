import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {

        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((data) => {

        setProduct(data);
        setLoading(false);

      })
      .catch((error) => {

        console.error(error);
        setError(true);
        setLoading(false);

      });

  }, [id]);


  // Loading
  if (loading) {
    return (
      <div
        className="container text-center py-5"
        dir="rtl"
      >

        <div
          className="spinner-border text-primary"
          role="status"
        ></div>

        <p className="mt-3">
          جاري تحميل المنتج...
        </p>

      </div>
    );
  }


  // Error
  if (error || !product) {
    return (
      <div
        className="container text-center py-5"
        dir="rtl"
      >

        <h3 className="text-danger">
          عذراً، لم يتم العثور على المنتج
        </h3>

        <Link
          to="/"
          className="btn btn-primary mt-3"
        >
          العودة للمنتجات
        </Link>

      </div>
    );
  }


  // Product Details
  return (
    <div
      className="container py-5"
      dir="rtl"
    >

      <Link
        to="/"
        className="btn btn-outline-secondary mb-4"
      >
        ← العودة للمنتجات
      </Link>


      <div className="card shadow border-0">

        <div className="row g-0 align-items-center">


          {/* Product Image */}

          <div className="col-md-5 text-center">

            <img
              src={product.image}
              alt={product.title}
              className="img-fluid p-5"
              style={{
                height: "400px",
                width: "100%",
                objectFit: "contain"
              }}
            />

          </div>


          {/* Product Information */}

          <div className="col-md-7">

            <div className="card-body p-5">

              <span className="badge bg-secondary mb-3">
                {product.category}
              </span>


              <h1 className="fw-bold mb-3">
                {product.title}
              </h1>


              <p className="text-muted lh-lg">
                {product.description}
              </p>


              <h2 className="text-success fw-bold mb-4">
                ${product.price}
              </h2>


              {/* Rating */}

              <div className="mb-4">

                <strong>
                  التقييم:
                </strong>

                <span className="ms-2">
                  ⭐ {product.rating?.rate}
                </span>

                <span className="text-muted ms-2">
                  ({product.rating?.count} تقييم)
                </span>

              </div>


              <button className="btn btn-primary btn-lg px-5">
                إضافة للسلة
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;