export const styles = {
    personSection: theme => ({
        height: "50vh",
        padding: "1.3em",
        borderRadius: "0",
        maxWidth: "300px",
        minWidth: "300px",
        overflow: "scroll",
        flexDirection: "column",
        boxShadow: "0 0 10px silver",
    }),
    avatarSection: theme => ({
        gap: "1em", 
        width: "100%", 
        display: "flex", 
        marginTop: "3em", 
        alignItems: "center", 
    }),
    details: theme => ({
        width: "100%",
        height: "30vh",
        overflow: "scroll",
        marginBottom: "2em",
    })
}