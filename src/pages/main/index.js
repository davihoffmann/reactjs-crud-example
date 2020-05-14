import React, { Component } from 'react';
import api from '../../services/api';

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
    };

    render() {
        return <h1>Hello Davi</h1>;
    }
}