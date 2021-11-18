import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Pan W. Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon sx={{ fontSize: "2rem" }} />
            <span className="topiconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <LanguageIcon sx={{ fontSize: "2rem" }} />
            <span className="topiconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <SettingsIcon sx={{ fontSize: "2rem" }} />
          </div>
          <Link to="/login">
            <img
              src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
              alt=""
              className="topAvatar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
