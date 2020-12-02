import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Destination from './pages/Destination'
import About from './pages/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/destination" component={Destination} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
