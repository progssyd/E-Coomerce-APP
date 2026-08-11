import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {

  // الحصول على رقم المنتج من الرابط
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });

  }, [id]);


  // أثناء تحميل المنتج
  if (loading) {
    return (
      <div className="container text-center py-5">

        <div
          className="spinner-border text-primary"
          role="status"
        ></div>

        <p className="mt-3">
          جاري تحميل تفاصيل المنتج...
        </p>

      </div>
    );
  }


  return (
    <div className="container py-5" dir="rtl">

      {/* العودة للمنتجات */}
      <Link
        to="/"
        className="btn btn-outline-secondary mb-4"
      >
        ← العودة للمنتجات
      </Link>


      <div className="card shadow border-0">

        <div className="row g-0 align-items-center">

          {/* صورة المنتج */}
          <div className="col-md-5 text-center">

            <img
              src={product.image}
              alt={product.title}
              className="img-fluid p-5"
              style={{
                height: "400px",
                objectFit: "contain"
              }}
            />

          </div>


          {/* تفاصيل المنتج */}
          <div className="col-md-7">

            <div className="card-body p-5">

              <h1 className="fw-bold mb-3">
                {product.title}
              </h1>


              {/* التصنيف */}
              <span className="badge bg-secondary mb-3">
                {product.category}
              </span>


              {/* الوصف */}
              <p className="text-muted lh-lg">
                {product.description}
              </p>


              {/* السعر */}
              <h2 className="text-success fw-bold mb-4">
                ${product.price}
              </h2>


              {/* التقييم */}
              <div className="mb-4">

                <strong>
                  التقييم:
                </strong>

                <span className="ms-2">
                  ⭐ {product.rating.rate}
                </span>

                <span className="text-muted ms-2">
                  ({product.rating.count} تقييم)
                </span>

              </div>


              {/* زر إضافة للسلة */}
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