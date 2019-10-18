import React from "react";
import SideBarCategory from "../categories/SidebarCategory";

function Sidebar() {
  return (
    <div className="col-lg-3">
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <SideBarCategory />
        <SideBarCategory />
        <SideBarCategory />
        <SideBarCategory />
      </div>
    </div>
  );
}

export default Sidebar;
