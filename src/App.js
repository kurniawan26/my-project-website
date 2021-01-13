import PageWrapper from './components/PageWrapper'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Common/Portfolio';
import Services from './components/Common/Services';

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

        <Route
        exact={true}
        path="/services"
        component={Services}
        />



      </PageWrapper>
    </Router>

  );
}

export default App;
