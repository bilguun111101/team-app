export const style = {
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
};
