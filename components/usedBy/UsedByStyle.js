export const styles = {
  usedBySection: (theme) => ({
    width: "100%",
    height: "40vh",
    display: "flex",
    marginTop: "3em",
    padding: "3em 140px",
    backgroundColor: "#252B3B",
    [theme.breakpoints.down("md")]: {
      padding: "1em 30px",
    },
  }),
};
