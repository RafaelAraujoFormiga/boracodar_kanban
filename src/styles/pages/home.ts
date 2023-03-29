import { styled } from "..";


export const Main = styled("aside", {
    display: "flex",
    background: "$purple50",
    width: "100vw",
    height: "100vh",
})

export const Aside = styled("aside", {
    width: "175px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
    padding: "30px",
    background: "transparent",
})

export const AsideMain = styled("main", {
    width: "113px",
    height: "188px",
    display: "flex",
    flexDirection: "column",
    gap: "36px",
})

export const AsideButton = styled("button", {
    "&": {
        width: "100%",
        minHeight: "20px",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        cursor: "pointer",
    },
    "p": {
        fontSize: "16px",
        color: "$gray400",
        fontWeight: "bold",
    },
})

export const MainWrapper = styled("main", {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    background: "#FBFAFF",
    borderTopLeftRadius: "32px",
    padding: "48px 32px 0 32px",
    overflow: "auto",
})

export const MainHeader = styled("header", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
    padding: "0 20px",
})

export const TitleUser = styled("input", {
    width: "90%",
    height: "42px",
    fontSize: "32px",
    border: "none",
    outline: "none",
    fontWeight: "bold",
    color: "$gray650",
    background: "transparent",
})

export const UserLogo = styled("img", {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
})

export const NavBar = styled("nav", {
    width: "100%",
    height: "48px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "0 24px",
})

export const ButtonNavBar = styled("button", {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
    width: "135px",
    height: "48px",
    borderRadius: "5px",
    background: "$purple50",
    color: "#FFFFFF",
    fontSize: "14px",
    cursor: "pointer",
})

export const InputNavBar = styled("input", {
    width: "90%",
    height: "48px",
    border: "none",
    borderRadius: "8px",
    color: "$gray550",
    padding: "24px",
    fontSize: "16px",
    outline: "none",
    boxShadow: "0px 2px 9px 0px rgba(227,227,227)",
})

export const BoardsContainer = styled("div", {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "16px",
    width: "100%",
    height: "100%",
    padding: "24px 0",
})

export const BoardWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "320.33px",
    height: "100%",
    "h3": {
        color: "$gray650",
    }
})

export const Board = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    minHeight: "153px",
    borderRadius: "16px",
    boxShadow: "0px 2px 9px 0px rgba(227,227,227)",
    padding: "24px",
    cursor: "grab",
    "&:active": {
        opacity: 0.5,
    },
    "h4": {
        color: "$gray650",
    },
    "p": {
        color: "$gray650",
        fontSize: "14px",
    }
})