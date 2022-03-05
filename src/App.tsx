import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}))
const App: React.FC = () => {
  const classes = useStyles()
  return <div className={classes.root}></div>
}

export default App
