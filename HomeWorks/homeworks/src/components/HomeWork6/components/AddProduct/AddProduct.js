import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/productsActions";
import './AddProduct.css';

function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        if (name.trim() === '' || description.trim() === '' || price.trim() === '') {
            alert('All fields are required');
            return;
        }
        dispatch(addProduct({ name, description, price: parseFloat(price) }));
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <div className="add-product-wrap">
            <h3>Add product</h3>
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
            <button className="add-product-btn" onClick={handleAddProduct}>Add product</button>
        </div>
    );
}

export default AddProduct;