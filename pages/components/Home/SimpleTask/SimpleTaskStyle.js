export const styles = {
  simpleTaskSection: (theme) => ({
    width: "100vw",
    height: "70vh",
    display: "flex",
    padding: "7em 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }),
  documentSection: (theme) => ({
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }),
  imageSection: (theme) => ({
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "140px",
    paddingLeft: "3em",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
      width: "100%",
    },
  }),
  title: (theme) => ({
    color: "#000",
    fontSize: "5em",
    marginBottom: "0.5em",
    fontWeight: "10",
    [theme.breakpoints.down("lg")]: {
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  }),
  text: (theme) => ({
    color: "#000",
    marginBottom: "1.3em",
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  }),
};
