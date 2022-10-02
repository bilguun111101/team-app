export const styles = {
    usedBySection: theme => ({
        width: "100%",
        height: "40vh",
        marginTop: "3em",
        padding: "3em 140px",
        backgroundColor: "#252B3B",
        display: "flex",
        [theme.breakpoints.down("md")]: {
            padding: "1em 30px",
        }
    })
}