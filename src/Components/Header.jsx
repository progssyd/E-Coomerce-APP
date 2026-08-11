import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top"
      dir="rtl"
    >
      <div className="container">

        {/* اسم التطبيق */}
        <Link
          className="navbar-brand fw-bold text-primary"
          to="/"
        >
          E-Commerce
        </Link>


        {/* زر القائمة في الجوال */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* القائمة */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* الرئيسية */}
            <li className="nav-item">

              <Link
                className="nav-link"
                to="/"
              >
                الرئيسية
              </Link>

            </li>


            {/* حولنا */}
            <li className="nav-item">

              <Link
                className="nav-link"
                to="/about"
              >
                حولنا
              </Link>

            </li>


            {/* اتصل بنا */}
            <li className="nav-item">

              <Link
                className="nav-link"
                to="/callus"
              >
                اتصل بنا
              </Link>

            </li>

          </ul>


          {/* الأزرار */}
          <div className="d-flex align-items-center gap-2">

            <button
              className="btn btn-outline-secondary btn-sm"
              type="button"
            >
              English
            </button>

            <Link
              to="/login"
              className="btn btn-primary btn-sm px-3"
            >
              تسجيل الدخول
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Header;