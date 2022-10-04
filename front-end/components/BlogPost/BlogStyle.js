export const styles = {
    blogPostPage: theme => ({
        width: "100vw",
        height: "auto",
        translation: ".3s",
        padding: "10em 150px 0 150px",
        [theme.breakpoints.down("md")]: {
            padding: "10em 2em 0 2em",
        }
    }),
    introduction: theme => ({
        display: "flex",
        color: "#6D7D8B",
        marginTop: "1em",
        fontSize: "18px",
        marinBottom: "2em",
        lineHeight: "29px",
        fontStyle: "normal",
        fontFamily: 'Mulish',
        alignItems: "center",
    }),
    containerSection: theme => ({
        gap: "2em",
        width: "100%",
        height: "auto",
        flexWrap: "wrap",
        display: "flex", 
        paddingTop: "3em",
        alignItems: "center", 
        [theme.breakpoints.down("md")]: {
            justifyContent: "center", 
        }
    }),
}