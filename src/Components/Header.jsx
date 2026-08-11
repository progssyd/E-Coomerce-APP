function Heeder() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top"
      dir="rtl"
    >
      <div className="container">

        {/* اسم التطبيق */}
        <a className="navbar-brand fw-bold text-primary" href="#">
          E-Commerce
        </a>

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
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                الرئيسية
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                حولنا
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                اتصل بنا
              </a>
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

            <a
              href="#"
              className="btn btn-primary btn-sm px-3"
            >
              تسجيل الدخول
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Heeder;