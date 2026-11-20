
function SideBar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">C</div>
        <h2>Contactly</h2>
      </div>

      <p className="menu-title">منوی اصلی</p>

      <div className="menu-item active">
        <span>▦</span>
        همه مخاطبین
      </div>
      <div className="sidebar-bottom">
        <div className="profile">
          <div className="profile-avatar">P</div>
          <div>
            <strong>مدیر سیستم</strong>
            <small>Parham Javidrad</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;