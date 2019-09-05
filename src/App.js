import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EmployeeList from './pages/EmployeeList'
import EmployeeDetails from './pages/EmployeeDetails'
import EmployeeAdd from './pages/EmployeeAdd'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <>
        <main>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={EmployeeList}></Route>
              <Route exact path="/:details" component={EmployeeDetails}></Route>
              <Route exact path="/add" component={EmployeeAdd}></Route>
            </Switch>
          </Router>
        </main>
      </>
    )
  }
}

export default App
