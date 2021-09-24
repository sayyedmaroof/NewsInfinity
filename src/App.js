import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state = { progress: 0 }

  setProgress = progress => {
    this.setState({ progress: progress })
  }

  render() {
    const apiKey = process.env.REACT_APP_NEWSAPI_KEY

    return (
      <Router>
        <NavBar />

        <LoadingBar color="#fff" progress={this.state.progress} />

        <Route path="/technology" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="technology"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/sports" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="sports"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/science" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="science"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/health" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="health"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/general" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="general"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/entertainment" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="entertainment"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/business" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="business"
            apiKey={apiKey}
          />
        </Route>
        <Route path="/" exact>
          <News
            setProgress={this.setProgress}
            pageSize={10}
            country="in"
            category="general"
            apiKey={apiKey}
          />
        </Route>
      </Router>
    )
  }
}

export default App
