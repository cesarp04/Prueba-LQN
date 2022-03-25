import { AppBar, Typography } from '@mui/material'

type Props = {
  children: JSX.Element
}

function Layout({ children }: Props) {
  return (
    <>
      <AppBar position="static">
        <Typography align="center" variant="h4" component="div" margin={1}>
          App the Start Wars.
        </Typography>
      </AppBar>
      {children}
    </>
  )
}

export default Layout
