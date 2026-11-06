import Icon from './Icon.jsx';

                                                                                            
export default function OverviewTopbar() {
  return (
    <header className="topbar">
      <div className="topbar__title">
        <p className="topbar__crumb">CAMPUSCODE / STUDENT</p>
        <h1 className="topbar__page">OVERVIEW</h1>
      </div>
      <div className="topbar__actions">
        <button className="icon-btn" type="button" aria-label="Notifications">
          <Icon name="i-bell" className="icon-btn__icon" />
          <span className="icon-btn__dot"></span>
        </button>
        <button className="refresh-btn" type="button">
          <span className="refresh-btn__icon"><svg><use href="#i-refresh" /></svg></span>
          <span className="refresh-btn__text">REFRESH</span>
        </button>
        <div className="user">
          <span className="user__avatar"><svg><use href="#avatar" /></svg></span>
          <span className="user__name">Arnav</span>
        </div>
      </div>
    </header>
  );
}
