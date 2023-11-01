"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "next-themes";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRef } from "react";
import './Navbar.css';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");
  const windowRef = useRef(null);

  const handleThemeChange = () => {
    setChecked(!checked);
    setTheme(checked ? "light" : "dark");
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <div className="BigNav" >
      <div
        className="flex shadow-xl shadow-sky rounded-xl p-8 gap-[8vw]"
        style={{ border: "1px solid #0077b6", backdropFilter: "blur(25px)" }}
      >
        <div className=" flex gap-1 text-blue-500 font-bold	text-xl">
          <Avatar alt="SP" src="SP.png" />
          <h2 className="m-0 p-2">Shai Pranesh</h2>
        </div>
        <div className="flex  gap-[4vw]">
          <div className=" m-2 hover:text-blue-500">
            <Link href="/blog">Blog</Link>
          </div>
          <div className=" m-2 hover:text-blue-500">
            <Link href="/project">Projects</Link>
          </div>
          <div className=" m-2 hover:text-blue-500">
            <Link href="/experience">Experience</Link>
          </div>
          <div className="">
            <Button variant="outlined">
              <div className="flex gap-2">
                <FileDownloadOutlinedIcon />
                <a href="Shai_resume (2).pdf" download>
                  CV
                </a>
              </div>
            </Button>
          </div>
          <div onClick={handleThemeChange}>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 0 }} checked={checked} />}
              label=""
            />
          </div>
        </div>
      </div>
    </div>
      <div className="SmallNav">
        <div className="flex shadow-xl shadow-sky rounded-xl p-8 gap-[4vw]"
        style={{ border: "1px solid #0077b6", backdropFilter: "blur(25px)", width:"fit-content"}}
      >
        <div className=" flex gap-1 text-blue-500 font-bold	text-xl">
          <Avatar alt="SP" src="SP.png" />
          <h3 className="m-0 p-1">Shai Pranesh</h3>
        </div>
          
          <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link href="/blog">Blog</Link></MenuItem>
        <MenuItem onClick={handleClose}>
            <Link href="/project">Projects</Link></MenuItem>
        <MenuItem onClick={handleClose}>
            <Link href="/experience">Experience</Link></MenuItem>
          <MenuItem><div onClick={handleThemeChange}>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 0 }} checked={checked} />}
              label=""
            />
          </div></MenuItem>
          <MenuItem>
          <div className="">
            <Button variant="outlined">
              <div className="flex gap-2">
                <FileDownloadOutlinedIcon />
                <a href="Shai_resume (2).pdf" download>
                  CV
                </a>
              </div>
            </Button>
          </div>
          </MenuItem>
      </Menu>
    </div>
      </div>
      </div>
    </>
  );
}