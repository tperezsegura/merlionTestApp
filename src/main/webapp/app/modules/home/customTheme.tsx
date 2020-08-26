import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2A6A9E",
      }, 
      secondary: {
        main: "#5E99C5"
      },
      action: {
          hover: "rgba(174, 209, 230, 0.2)"
      }
    }, 
    overrides: {
        MuiButton: {
            root: {
                width: 150,
                height: 40,
                zIndex: 1,
                background:"none",
                transition: "1s",
                '&:focus': {
                    outline: "none"
                },
            },
            outlinedPrimary: {
                '&:hover': {
                    padding: "0.5em 3.5em 0.5em 0.5em",
                },
                '&::before': {
                    content: "''",
                    position:"absolute",
                    background: "#2A6A9E",
                    display: "inline-block",
                    top: 0,
                    left: 0,
                    right: "100%",
                    bottom: 0,
                    transition: ".3s .2s cubic-bezier(.1, 0, .1, 1), left .3s cubic-bezier(.1, 0, .1, 1)",
                    zIndex: -1                    
                },
                '&::after': {
                    content: "''",
                    position:"absolute",
                    display: "inline-block",
                    top: 0,
                    left: "calc(100% - 3em)",
                    right: "3em",
                    bottom: 0,
                    backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MDYuMTM0LDI0MS44NDNjLTAuMDA2LTAuMDA2LTAuMDExLTAuMDEzLTAuMDE4LTAuMDE5bC0xMDQuNTA0LTEwNGMtNy44MjktNy43OTEtMjAuNDkyLTcuNzYyLTI4LjI4NSwwLjA2OCAgICBjLTcuNzkyLDcuODI5LTcuNzYyLDIwLjQ5MiwwLjA2NywyOC4yODRMNDQzLjU1OCwyMzZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDQyMy41NTcgICAgbC03MC4xNjIsNjkuODI0Yy03LjgyOSw3Ljc5Mi03Ljg1OSwyMC40NTUtMC4wNjcsMjguMjg0YzcuNzkzLDcuODMxLDIwLjQ1Nyw3Ljg1OCwyOC4yODUsMC4wNjhsMTA0LjUwNC0xMDQgICAgYzAuMDA2LTAuMDA2LDAuMDExLTAuMDEzLDAuMDE4LTAuMDE5QzUxMy45NjgsMjYyLjMzOSw1MTMuOTQzLDI0OS42MzUsNTA2LjEzNCwyNDEuODQzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=)",
                    backgroundSize: "1.5em",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:"center",
                    transition: "right .3s cubic-bezier(.1, 0, .1, 1)",                 
                },
                '&:hover::before': {
                    left: "calc(100% - 3em)",
                    right: 0,
                    transition: ".3s cubic-bezier(.1, 0, .1, 1), left .3s .2s cubic-bezier(.1, 0, .1, 1)"
                },
                '&:hover::after': {
                    right: 0,
                    transition: "right .3s .2s cubic-bezier(.1, 0, .1, 1)"
                }
            },

            containedPrimary: {
                '&:hover': {
                    padding: "0.5em 3.5em 0.5em 0.5em",
                },
                '&::before': {
                    content: "''",
                    position:"absolute",
                    background: "#fafafa",
                    display: "inline-block",
                    top: 0,
                    left: 0,
                    right: "100%",
                    bottom: 0,
                    transition: ".3s .2s cubic-bezier(.1, 0, .1, 1), left .3s cubic-bezier(.1, 0, .1, 1)",
                    zIndex: -1                    
                },
                '&::after': {
                    content: "''",
                    position:"absolute",
                    display: "inline-block",
                    top: 0,
                    left: "calc(100% - 3em)",
                    right: "3em",
                    bottom: 0,
                    backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA1Ljk4Myw2MC43MDFjLTcuODk3LTcuNzIyLTIwLjU1OS03LjU4Mi0yOC4yODIsMC4zMTZMMTM4LDQwOC4zOTRMMzQuMywzMDIuMzVjLTcuNzIyLTcuODk4LTIwLjM4Ny04LjAzOC0yOC4yODMtMC4zMTYgICAgYy03Ljg5Nyw3LjcyMi04LjAzOSwyMC4zODUtMC4zMTYsMjguMjgybDExNy45OTgsMTIwLjY2NWMzLjY5OSwzLjc4OCw4LjgyMSw2LjAxOSwxNC4yOTQsNi4wMTkgICAgYzUuMjIzLDAsMTAuNDE1LTIuMDM4LDE0LjMwNS02LjAxN2wzNTQtMzYyQzUxNC4wMjIsODEuMDg2LDUxMy44OCw2OC40MjQsNTA1Ljk4Myw2MC43MDF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojMkE2QTlFIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==)",
                    backgroundSize: "1.5em",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:"center",
                    transition: "right .3s cubic-bezier(.1, 0, .1, 1)",                 
                },
                '&:hover::before': {
                    left: "calc(100% - 3em)",
                    right: 0,
                    transition: ".3s cubic-bezier(.1, 0, .1, 1), left .3s .2s cubic-bezier(.1, 0, .1, 1)"
                },
                '&:hover::after': {
                    right: 0,
                    transition: "right .3s .2s cubic-bezier(.1, 0, .1, 1)"
                }
            },
        },
        MuiTab: {
            root: {
                '&:focus': {
                    outline: 'none'
                },
                '&:hover': {
                    color: "#5E99C5",
                    backgroundColor: 'rgba(174, 209, 230, 0.1)'
                }, 
            }
        }
    }
  });