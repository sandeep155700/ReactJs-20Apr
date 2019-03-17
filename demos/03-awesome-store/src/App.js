import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import ProductCatalog from './ProductCatalog';
import ProductDetail from './ProductDetail';

const App = ( props ) => {
    return (
        <div>
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Awesome Store</Link>
                </div>
            
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/catalog">Catalog</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <Route path="/" exact component={About} />
                <Route path="/catalog" exact component={ProductCatalog} />
                <Route path="/catalog/:id" component={ProductDetail} />
            </div>
        </div>
    );
};

export default App;