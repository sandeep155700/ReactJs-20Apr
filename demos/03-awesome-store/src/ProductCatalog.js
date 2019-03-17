import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const INITIALIZING = 'Please wait. App is being initialized...';
const FETCH_PRODUCTS = 'Please wait. Products are being fetched...';
const FETCHED_PRODUCTS = 'Products fetched successfully';
const FETCH_PRODUCTS_ERROR = 'Failed to fetch products';

class ProductCatalog extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            status: INITIALIZING,
            items: []
        };
    }

    getPagination() {
        if( this.state.items.length > 2 ) {
            return (
                <ul class="pagination pagination-sm">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&raquo;</a></li>
                </ul>
            );
        } else {
            return null;
        }
    }
    
    // React.Fragment avoids extra enclosing div container 
    render() {
        const productImageStyle = {
            width: '25%',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
        };

        switch( this.state.status ) {
            case FETCHED_PRODUCTS:
                return (
                    <React.Fragment>
                        <div className="container">
                            <h1>Product Catalog</h1>
                            <hr />
                            {this.getPagination()}
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr><th>Image</th><th>Name</th><th>Description</th><th>Price</th><th>Rating</th></tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.items.map( item => (
                                                <tr>
                                                    <td><img src={item.imageUrl} style={productImageStyle} /></td>
                                                    <td>
                                                        <Link to={"/catalog/" + item.id}>
                                                            {item.name}
                                                        </Link>
                                                    </td>
                                                    <td>{item.description}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.starRating}</td>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </React.Fragment>
                );
            default:
                return <div className="container"><div className="alert alert-info">{this.state.status}</div></div>
        }
    }

    componentDidMount() {
        this.setState(
            {
                status: FETCH_PRODUCTS
            },
            () => {
                axios.get( 'https://awesome-store-server.herokuapp.com/products' )
                    .then( response => {
                        this.setState({
                            items: response.data,
                            status: FETCHED_PRODUCTS
                        });
                        console.log( 'after setState call' );
                    })
                    .catch( error => {
                        this.setState({
                            error: error,
                            status: FETCH_PRODUCTS_ERROR
                        });
                    });
            }
        );
    }
}

export default ProductCatalog;