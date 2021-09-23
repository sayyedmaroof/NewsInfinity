import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import News from './components/News'

export class App extends Component {
  render() {
    const apiKey = process.env.REACT_APP_NEWSAPI_KEY
    return (
      <Router>
        <NavBar />
        <Route path="/technology" exact>
          <News
            pageSize={10}
            country="in"
            category="technology"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/sports" exact>
          <News pageSize={10} country="in" category="sports" apiKey={apiKey} />
        </Route>
        <Route path="/science" exact>
          <News pageSize={10} country="in" category="science" apiKey={apiKey} />
        </Route>
        <Route path="/health" exact>
          <News pageSize={10} country="in" category="health" apiKey={apiKey} />
        </Route>
        <Route path="/general" exact>
          <News pageSize={10} country="in" category="general" apiKey={apiKey} />
        </Route>
        <Route path="/entertainment" exact>
          <News
            pageSize={10}
            country="in"
            category="entertainment"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/business" exact>
          <News
            pageSize={10}
            country="in"
            category="business"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/" exact>
          <News pageSize={10} country="in" category="general" apiKey={apiKey} />
        </Route>
      </Router>
    )
  }
}

export default App
