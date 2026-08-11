function Callus() {
  return (
    <div dir="rtl">

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container py-4 text-center">

          <h1 className="fw-bold text-primary mb-3">
            اتصل بنا
          </h1>

          <p className="lead text-muted">
            يسعدنا تواصلك معنا، نحن هنا للإجابة عن استفساراتك
            ومساعدتك بكل سرور.
          </p>

        </div>
      </section>


      {/* Contact Section */}
      <section className="py-5">
        <div className="container">

          <div className="row g-4">

            {/* Contact Information */}
            <div className="col-md-5">

              <div className="card border-0 shadow-sm h-100 p-4">

                <h3 className="fw-bold mb-4">
                  معلومات التواصل
                </h3>

                <div className="mb-4">

                  <h6 className="fw-bold">
                    📍 العنوان
                  </h6>

                  <p className="text-muted">
                    المملكة العربية السعودية
                  </p>

                </div>

                <div className="mb-4">

                  <h6 className="fw-bold">
                    📞 الهاتف
                  </h6>

                  <p className="text-muted">
                    +966 50 **** ***
                  </p>

                </div>

                <div className="mb-4">

                  <h6 className="fw-bold">
                    ✉️ البريد الإلكتروني
                  </h6>

                  <p className="text-muted">
                    info@example.com
                  </p>

                </div>

                <div>

                  <h6 className="fw-bold">
                    🕐 أوقات العمل
                  </h6>

                  <p className="text-muted">
                    من الأحد إلى الخميس
                    <br />
                    9:00 صباحًا - 6:00 مساءً
                  </p>

                </div>

              </div>

            </div>


            {/* Contact Form */}
            <div className="col-md-7">

              <div className="card border-0 shadow-sm p-4">

                <h3 className="fw-bold mb-4">
                  أرسل لنا رسالة
                </h3>

                <form>

                  {/* Name */}
                  <div className="mb-3">

                    <label className="form-label">
                      الاسم
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="أدخل اسمك"
                    />

                  </div>


                  {/* Email */}
                  <div className="mb-3">

                    <label className="form-label">
                      البريد الإلكتروني
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@email.com"
                    />

                  </div>


                  {/* Subject */}
                  <div className="mb-3">

                    <label className="form-label">
                      الموضوع
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="موضوع الرسالة"
                    />

                  </div>


                  {/* Message */}
                  <div className="mb-3">

                    <label className="form-label">
                      الرسالة
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>

                  </div>


                  {/* Button */}
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    إرسال الرسالة
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Footer Message */}
      <section className="bg-primary text-white py-4">
        <div className="container text-center">

          <h5 className="fw-bold">
            نحن سعداء بتواصلك معنا
          </h5>

          <p className="mb-0">
            فريقنا جاهز لمساعدتك والإجابة عن جميع استفساراتك.
          </p>

        </div>
      </section>

    </div>
  );
}

export default Callus;