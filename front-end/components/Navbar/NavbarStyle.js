export const styles = {
  navbarSection: (theme) => ({
    top: "0%",
    zIndex: 10,
    height: "10vh",
    width: "100vw",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    backgroundColor: "#000",
    justifyContent: "space-between",
    padding: "0 140px",
    [theme.breakpoints.down("md")]: {
      padding: "0 3em",
    },
  }),
  navbarSectionTrans: (theme) => ({
    top: "0%",
    zIndex: 10,
    height: "10vh",
    width: "100vw",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    padding: "0 140px",
    [theme.breakpoints.down("md")]: {
      padding: "0 3em",
    },
  }),
  btns: (theme) => ({
    display: "flex",
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  }),
  bar: (theme) => ({
    display: "none",
    [theme.breakpoints.down(700)]: {
      display: "block",
    },
  }),
  SecondBtns: (theme) => ({
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "center",
  }),
  SecondBtnsNone: (theme) => ({
    display: "none",
  }),
};
