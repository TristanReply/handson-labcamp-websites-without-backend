import React, { Component } from "react";

import firebase from "firebase";

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      products: [{
        name: "Product 1",
        count: 10
      },{
        name: "product 2",
        count: 20
      }]
    };
  }

  componentDidMount = () => {
    // TODO step 5 - fetch data from Firebase
    let ref = firebase.database().ref('/group-4');
    ref.on('value',function(data) {
      console.log(data.val());
    });
    
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <ul className="list-group">
            
            { /* <li className="list-group-item">
              Product 1
              <span className="badge badge-pill badge-success">10</span>
            </li>
            <li className="list-group-item">
              Product 2
              <span className="badge badge-pill badge-success">20</span>
            </li> */ }

            {/* TODO step 3 - bring to life this list dynamic (using state) */
            this.state.products.map((product, index) => {
              return (
                <li className="list-group-item" key={index}>{product.name}
                  <span className="badge badge-pill badge-success">
                    {product.count}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
}

export default ProductsList;
