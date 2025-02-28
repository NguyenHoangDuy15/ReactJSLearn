import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
//import 'react-pro-sidebar/dist/css/styles.css'; // Kiểm tra xem file này có tồn tại không

//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebar } from "react-pro-sidebar";
import { FaGem, FaHeart } from "react-icons/fa";
const SideBar = () => {
  return (
    <div>
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
};
export default SideBar;
