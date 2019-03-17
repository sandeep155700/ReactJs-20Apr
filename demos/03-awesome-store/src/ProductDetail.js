import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const INITIALIZING = 'Please wait. App is being initialized...';
const FETCH_PRODUCT = 'Please wait. Product details are being fetched...';
const FETCHED_PRODUCT = 'Product details fetched successfully';
const FETCH_PRODUCT_ERROR = 'Failed to fetch product details';

class ProductDetail extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            status: INITIALIZING,
            item: {}
        };
    }
    
    render() {
        const { item } = this.state;

        switch( this.state.status ) {
            case FETCHED_PRODUCT:
                return (
                    <React.Fragment>
                        <div className="container">
                            <h1>{item.name}</h1>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={item.imageUrl} />
                                </div>
                                <div className="col-md-6">
                                    <strong>{item.name}</strong>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
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
                status: FETCH_PRODUCT
            },
            () => {
                axios.get( 'https://awesome-store-server.herokuapp.com/products/' + this.props.match.params.id )
                    .then( response => {
                        this.setState({
                            item: response.data,
                            status: FETCHED_PRODUCT
                        });
                        console.log( 'after setState call' );
                    })
                    .catch( error => {
                        this.setState({
                            error: error,
                            status: FETCH_PRODUCT_ERROR
                        });
                    });
            }
        );
    }
}

export default ProductDetail;