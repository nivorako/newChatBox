import { createTheme } from "@mui/material";

const theme = createTheme({
    overrides:{
        MuiButton:{
            root:{
                backgroundColor: "rgb(87, 85, 85)",
                color: "white",
            },
        },
    },
})

export default theme
