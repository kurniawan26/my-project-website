import PageWrapper from './components/PageWrapper'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Common/Portfolio';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route
          exact= {true}
          path="/"
          component={Home}
        />

        <Route
        exact={true}
        path="/about"
        component={About}
        />

        <Route
        exact={true}
        path="/portfolio"
        component={Portfolio}
        />



      </PageWrapper>
    </Router>

  );
}

export default App;
