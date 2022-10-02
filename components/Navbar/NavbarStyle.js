export const styles = {
    navbarSection: theme => ({
        top: "0%",
        zIndex: 10,
        height: "10vh",
        width: "100vw", 
        display: "flex", 
        position: "fixed",
        alignItems: "center", 
        backgroundColor: "#000",
        justifyContent: "space-between",
        padding: "0 140px", 
        [theme.breakpoints.down("md")]: {
            padding: "0 3em",
        },
    }),
    navbarSectionTrans: theme => ({
        top: "0%",
        zIndex: 10,
        height: "10vh",
        width: "100vw", 
        display: "flex", 
        position: "fixed",
        alignItems: "center", 
        backgroundColor: "transparent",
        justifyContent: "space-between",
        padding: "0 140px", 
        [theme.breakpoints.down("md")]: {
            padding: "0 3em",
        },
    }),
    btns: theme => ({
        display: "flex", 
        [theme.breakpoints.down("700px")]: {
            
        }
    })
}