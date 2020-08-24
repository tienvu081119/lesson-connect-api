import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routers';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (    
    <Router>
    <>    
      <Menu />
      <div className="container">      
        <div className="row">
          {/* <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            
            <button type="button" className="btn btn-info mb-10">Thêm Sản Phẩm
            </button>
            <ProductList /> 
            
          </div> */}

          {showContentMenus(routes)}
        </div>
        
      </div>      
    </>
    </Router>
  );
}


const showContentMenus = (routes) => {
  var result = null;
  if(routes.length > 0) {
    result = routes.map((route, index)=>{
      return( <Route
        key = {index}
        path = {route.path}
        exact = {route.exact}
        component = {route.main}
      />)
    });    
  }
  return <Switch>{result}</Switch>;
};
export default App;
