export const styles = {
  cardSection: (theme) => ({
    width: "20%",
    cursor: "pointer",
    minWidth: "300px",
    minHeight: "370px",
    borderRadius: "2em",
    "&:hover": {
      boxShadow: "0 0 20px #000",
    },
  }),
  documentSection: (theme) => ({
    width: "100%",
    padding: "10px 1.5em",
  }),
  write: (theme) => ({
    width: "100%",
    marginTop: "1em",
    padding: "0 4px",
    marginBottom: "1em",
  }),
  greyWord: (theme) => ({
    fontSize: "10px",
    color: "#6D7D8B",
  }),
};
