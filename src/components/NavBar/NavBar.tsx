import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";


const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({

    }))
  return (
    <>
      <AppBar position="relative" color="primary">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default NavBar;