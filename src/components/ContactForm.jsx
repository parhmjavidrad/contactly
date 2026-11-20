import { useState } from "react";

function ContactForm({ contact, onSave, onClose }) {
  const [formData, setFormData] = useState({
    firstName: contact?.firstName || "",
    lastName: contact?.lastName || "",
    email: contact?.email || "",
    phone: contact?.phone || "",
    company: contact?.company || "",
    category: contact?.category || "کاری",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "نام را وارد کنید.";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "نام خانوادگی را وارد کنید.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "ایمیل را وارد کنید.";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "ایمیل معتبر نیست.";
    }

    const phone = formData.phone;

    if (phone === "") {
      newErrors.phone = "شماره تماس را وارد کنید.";
    } else if (phone.length !== 11 || !phone.startsWith("09")) {
      newErrors.phone = "شماره باید ۱۱ رقم و با 09 شروع شود.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSave({
        ...contact,
        ...formData,
      });
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-modal">
        <div className="modal-header">
          <div>
            <h2>{contact ? "ویرایش مخاطب" : "افزودن مخاطب جدید"}</h2>
            <p>اطلاعات مخاطب را وارد کنید.</p>
          </div>

          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>نام *</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="نام مخاطب"
              />
              {errors.firstName && (
                <small className="error">{errors.firstName}</small>
              )}
            </div>

            <div className="form-group">
              <label>نام خانوادگی *</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="نام خانوادگی"
              />
              {errors.lastName && (
                <small className="error">{errors.lastName}</small>
              )}
            </div>

            <div className="form-group full">
              <label>ایمیل *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="form-group full">
              <label>شماره تماس *</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="09123456789"
                maxLength="11"
              />
              {errors.phone && <small className="error">{errors.phone}</small>}
            </div>

            <div className="form-group full">
              <label>نام شرکت</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="نام شرکت یا محل فعالیت"
              />
            </div>

            <div className="form-group full">
              <label>گروه مخاطب *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="کاری">کاری</option>
                <option value="دوستان">دوستان</option>
                <option value="خانواده">خانواده</option>
              </select>
              {errors.category && (
                <small className="error">{errors.category}</small>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              انصراف
            </button>

            <button type="submit" className="primary-btn">
              {contact ? "ذخیره تغییرات" : "افزودن مخاطب"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
