import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <div className="mapCoontainer">map</div>
    </div>
  );
}

export default AppLayout;
