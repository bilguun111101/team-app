export const styles = {
  yourHubSection: (theme) => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    paddingLeft: "140px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingLeft: "20px",
      paddingTop: "4em",
      paddingBottom: "4em",
    },
  }),
  yourHubDocument: (theme) => ({
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginBottom: "3em",
    },
  }),
  yourHubSmallDocument: (theme) => ({
    color: "#000",
    fontWeight: "10",
    [theme.breakpoints.down("lg")]: {
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  }),
  imageSection: (theme) => ({
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }),
};
