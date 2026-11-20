function Header({ onAdd }) {
  return (
    <header className="header">
      <div>
        <h1>مدیریت مخاطبین</h1>
        <p>تمام مخاطبین خود را در یک مکان مدیریت کنید.</p>
      </div>

      <button className="primary-btn" onClick={onAdd}>
        <span>＋</span>
        مخاطب جدید
      </button>
    </header>
  );
}

export default Header;
