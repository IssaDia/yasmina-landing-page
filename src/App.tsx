import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bandeau-site.svg' })`
  },
}))
const App: React.FC = () => {
  const classes = useStyles()
  return <div className={classes.root}></div>
}

export default App
