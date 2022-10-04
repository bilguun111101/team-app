export const styles = {
  simpleTaskSection: (theme) => ({
    width: "100vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    padding: "10em 0",
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: "0",
      padding: "4em 0",
      height: "auto"
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
      paddingRight: "3em",
      marginTop: "2em",
      width: "100%",
    },
  }),
  title: (theme) => ({
    color: "#000",
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
