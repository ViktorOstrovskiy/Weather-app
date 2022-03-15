export const MuiButtonStyles = {
  temp: {
    "&.MuiButton-root": {
      marginRight: "15px",
      border: "1px solid #000",
      borderRadius: "20%",
      padding: "5px",
      fontSize: "15px",
      textAlign: "center",
      color: "#000",
      marginBottom: "20px",
      marginTop: "20px",
      minWidth: "40px",

      "& .MuiTouchRipple-root": {
        display: "none",
      },
      "&.MuiButton-root:hover": {
        backgroundColor: "rgba(236, 233, 233, 0.89)",
        color: "#000",
      },
    },
  },
  tempChange: {
    "&.MuiButton-root": {
      marginRight: "15px",
      border: "1px solid #000",
      borderRadius: "20%",
      padding: "5px",
      fontSize: "15px",
      textAlign: "center",
      color: "#fff",
      marginBottom: "20px",
      marginTop: "20px",
      minWidth: "40px",
      backgroundColor: "#000",

      "& .MuiTouchRipple-root": {
        display: "none",
      },
      "&.MuiButton-root:hover": {
        backgroundColor: "#000",
        color: "#FFF",
      },
    },
  },

  days: {
    "&.MuiButton-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#696969",
      fontWeight: "bold",
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "rgba(236, 233, 233, 0.89)",
      color: "#696969",
    },
  },
  daysChange: {
    "&.MuiButton-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#000",
      fontWeight: "bold",
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "rgba(236, 233, 233, 0.89)",
      color: "#000",
    },
  },
};
