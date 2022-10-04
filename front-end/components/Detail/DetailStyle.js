export const styles = {
  detailPage: (theme) => ({
    gap: "3em",
    width: "100vw",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    padding: "15em 440px",
    flexDirection: "column",
    [theme.breakpoints.down("xl")]: {
      padding: "14em 330px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "10em 220px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10em 110px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10em 2em",
    },
  }),
  title: (theme) => ({
    width: "70%",
    color: "#000",
    fontWeight: 10,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      fontSize: "40px",
    },
  }),
};
