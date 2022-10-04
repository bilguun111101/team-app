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
  name: (theme) => ({
    color: "#6d7d8b",
    fontSize: "14px",
  }),
  chatInput: (theme) => ({
    gap: "1em",
    width: "100%",
    display: "flex",
    marginTop: "1em",
  }),
  writedBySection: (theme) => ({
    gap: "1em",
    width: "90%",
    display: "flex",
    alignItems: "center",
  }),
  avatarAndName: (theme) => ({
    gap: "2px",
    display: "flex",
    flexDirection: "column",
  }),
  date: (theme) => ({
    gap: "1.5em",
    width: "100%",
    display: "flex",
    alignItems: "center",
  }),
  dash: (theme) => ({
    height: "1px",
    backgroundColor: "silver",
    width: "90%",
  }),
  image: (theme) => ({
    width: "50%",
    [theme.breakpoints.down("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }),
  chatOutSection: (theme) => ({
    width: "100%",
    height: "auto",
  }),
  sendButton: (theme) => ({
    display: "flex",
    justifyContent: "flex-start",
  }),
};
