import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../actions/productsActions';
import './EditProduct.css';

const EditProduct = ({ product, onSave }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);
    const dispatch = useDispatch();

    const handleEditProduct = () => {
        if (!name.trim() || !description.trim() || (!price.toString().trim())) {
            alert('All fields are required');
            return;
        }

        const editedProduct = {
            ...product,
            name,
            description,
            price: parseFloat(price),
            available
        };
        dispatch(editProduct(editedProduct));
        onSave();
    };

    return (
        <div className='edit-component-wrap'>
            <h3>Edit Product</h3>
            <input
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
                Available
            </label>
            <button onClick={handleEditProduct}>Save Changes</button>
        </div>
    );
};

export default EditProduct;


