import * as React from "react";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { userStore } from "../../../types/user.types";
import { logout } from "../../../store/actions/user.actions";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { green } from "@mui/material/colors";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#005AA1",
  height: "5.5rem",
}));

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  /* min-width: 15%; */
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: white;
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// const Link = styled("a")(({ theme }) => ({
// color: "red"

// }));

const LinkContainer = styled("div")(({ theme }) => ({
  // color: "red",
  display: "flex",
  // justifyContent: "space-evenly",
  fontSize: "1rem",
  alignItems: "center",
}));

// const Link = styled.link`
//   justify-content: space-around;
//   color: blue;
// `;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const userState = useSelector((state: { user: userStore }) => state.user);
  const dispatch = useDispatch();
  // console.log("userState >>> :", userState);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function getUserData() {
    return (dispatch: any, getState: any) => {
      const state = getState();
      console.log(`!!! store state: `, state);
      // const userLoggedIn = state.currentUser.isLogged;
    };
  }

  const handleLogout = async () => {
    console.log("logout button click");
    await dispatch(logout());
    console.log("logout called");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profil</MenuItem>

      <MenuItem onClick={handleMenuClose}>Mon compte</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Message</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Nav>
      <Logo to="/" color="inherit" sx={{ marginLeft: "1%" }}>
        WeCare
      </Logo>
      <LinkContainer>
        {/* <NavLink to="/" color="inherit">
          Accueil
        </NavLink> */}

        <Box
          sx={{
            // marginRight: "1%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          {userState.isLogged ? (
            <>
              <NavLink to="/" color="inherit">
                Compte
              </NavLink>
              <NavLink onClick={handleLogout} to="/" color="inherit">
                Déconnexion
              </NavLink>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // fontWeight: "bold",
                // wrap: "nowrap",
                // width: "30%",
                // alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              <NavLink to="/register" color="inherit">
                S'inscrire
              </NavLink>
              <NavLink
                to="/login"
                color="inherit"

                // sx={{ wrap: "nowrap" }}
              >
                Se connecter
              </NavLink>
            </Box>
          )}
        </Box>
      </LinkContainer>
      {renderMobileMenu}
      {renderMenu}
    </Nav>
  );
}
