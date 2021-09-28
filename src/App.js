import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)

  const changeProgreess = progress => {
    setProgress(progress)
  }

  const apiKey = process.env.REACT_APP_NEWSAPI_KEY

  return (
    <Router>
      <NavBar />

      <LoadingBar color="#fff" progress={progress} />

      <Route path="/technology" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="technology"
          apiKey={apiKey}
        />
      </Route>
      <Route path="/sports" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="sports"
          apiKey={apiKey}
        />
      </Route>
      <Route path="/science" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="science"
          apiKey={apiKey}
        />
      </Route>
      <Route path="/health" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="health"
          apiKey={apiKey}
        />
      </Route>
      <Route path="/general" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="general"
          apiKey={apiKey}
        />
      </Route>
      <Route path="/entertainment" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="entertainment"
          apiKey={apiKey}
        />
      </Route>
      <Route path="/business" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="business"
          apiKey={apiKey}
        />
      </Route>
      <Route path="/" exact>
        <News
          setProgress={changeProgreess}
          pageSize={10}
          country="in"
          category="general"
          apiKey={apiKey}
        />
      </Route>
    </Router>
  )
}

export default App
