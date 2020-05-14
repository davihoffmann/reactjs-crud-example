import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
    }
    
    // Executar uma ação assim que o componente é criado em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        console.log(response.data.docs);
        this.setState({products: response.data.docs});
    };

    render() {
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="https://github.com/davihoffmann">Acessar</a>
                    </article>

                ))}
            </div>
        )
    }
}