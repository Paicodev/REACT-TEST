import React from 'react';

// Componente funcional de React que recibe props para mostrar la tarjeta del producto
function ProductCard({ link = '#', imgSrc, title, puntos, stock }) {
  return (
    <a href={link}>
        <div className="producto">
            <div className="imagen">
                <img src={imgSrc} alt={title} />
            </div>
            
            <div className="box-detalles">
                <h3 className="producto-titulo">{title}</h3>
        
                <hr /> 
                
                <div className="producto-detalles">
                    <h3>{puntos}</h3>
                    <p>PUNTOS</p>
                    
                    {/* El <% if (locals.stock === 0) { %> de EJS se convierte en este "&&" mágico de React */}
                    {stock === 0 && (
                        <div 
                            className="badge-sin-stock" 
                          // Estilos en linea
                            style={{ backgroundColor: '#ff4d4f', color: 'white', textAlign: 'center', padding: '4px', borderRadius: '4px', marginTop: '10px', fontWeight: 'bold' }}
                        >
                            Sin stock
                        </div>
                    )}
                </div>
            </div>
        </div>
    </a>
  );
}

export default ProductCard;