export const styles = {
    sayAboutUsSection: theme => ({
        width: "100vw",
        height: "auto",
        marginTop: "5em",
        marginBottom: "5em",
        padding: "2em 140px",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
            padding: "0 3em",
        }
    }),
    titleSection: theme => ({
        width: "100%",
        display: "flex",
        justifyContent: "center",
    }),
    title: theme => ({
        color: "#000",
        fontWeight: 10,
        fontSize: "4em",
        textAlign: "center", 
        [theme.breakpoints.down("lg")]: {
            fontSize: "70px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "50px",
        },
    }),
    peopleSection: theme => ({
        gap: "1em",
        width: "100%",
        height: "57vh",
        padding: "0 1em",
        display: "flex",
        marginTop: "2em",
        overflow: "scroll",
        alignItems: "center",
    }),
}