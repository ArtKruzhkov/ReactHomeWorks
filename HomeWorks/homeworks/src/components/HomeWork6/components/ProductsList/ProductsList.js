import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailable } from '../../actions/productsActions';
import EditProduct from '../EditProduct/EditProduct';
import './ProductsList.css';

function ProductsList() {
    const products = useSelector(state => state.products.products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    const handleToggleAvailable = (id) => {
        dispatch(toggleAvailable(id));
    };

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <div className='products-section'>
            <div className="products-list-wrap">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h4 className="product-title">{product.name}</h4>
                        <p className="product-desc">Description: {product.description}</p>
                        <p className="product-price">Price: {product.price}₽</p>
                        <p className="product-available">Available: {product.available ? 'Yes' : 'No'}</p>
                        <div className="btns-wrap">
                            <button className="btn-toggle" onClick={() => handleToggleAvailable(product.id)}>{product.available ? 'Set Unavailable' : 'Set Available'}</button>
                            <button className="btn-delete" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                            <button className="btn-edit" onClick={() => setSelectedProduct(product)}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && <EditProduct product={selectedProduct} onSave={() => setSelectedProduct(null)} />}
        </div>
    );
}

export default ProductsList;