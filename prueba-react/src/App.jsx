import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css'; 

function App() {
  return (
    <main>
      <h1>Prueba de las tarjetas de producto</h1>
      
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        
        {/* Le pasamos los datos a la tarjeta usando "props" */}
        <ProductCard 
          title="Hamburguesa Clásica"
          imgSrc="https://i.imgur.com/7lHDMxe.png"
          puntos="3500"
          stockInicial={10} 
          link="/producto/1"
        />

        {/* Le pasamos los datos a la tarjeta usando "props" */}
        <ProductCard 
          title="Papas Fritas"
          imgSrc="https://i.imgur.com/nqlpJNM.png"
          puntos="1500"
          stockInicial={1} 
          link="/producto/2"
        />
        
      </div>
    </main>
  );
}

export default App;