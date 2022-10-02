import background from "../../../image/homeWoman.png";

export const styles = {
  womanSection: (theme) => ({
    right: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    paddingLeft: "140px",
    paddingRight: "140px",
    backgroundSize: "cover",
    justifyContent: "flex-start",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundImage: `url(${background.src})`,
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }),
  introductionDocuments: (theme) => ({
    width: "45%",
    [theme.breakpoints.down("lg")]: {
      width: "55%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }),
  introduction: (theme) => ({
    height: "100vh",
    padding: "0 140px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: "0%",
    },
  }),
  title: (theme) => ({
    fontWeight: "10",
    fontSize: "80px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  }),
  explain: (theme) => ({
    marginTop: "1em",
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  }),
  inputs: (theme) => ({
    display: "flex",
    width: "100%",
    gap: "2em",
  }),
};
