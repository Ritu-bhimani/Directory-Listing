// required
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// components
import CustomDrawer from "../CustomDrawer/CustomDrawer";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar-content">
        <div className="navbar-part1">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="navbar-part1-searchIcon" />
        </div>
        <div className="sadekk">
          <CustomDrawer />
        </div>

        <div className="navbar-part2">
          

          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />

          <SettingsOutlinedIcon className="navbar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
