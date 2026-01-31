import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({p, onAdd}){
  if(!p) return null
  return (
    <div className="card h-100 shadow-sm card-hover">
      <img src={p.image || ''} className="card-img-top product-img" alt={p.title || 'Product'} />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{p.title || 'No title'}</h6>
        <p className="card-text text-muted small mb-2">{p.description || ''}</p>
        <p className="fw-bold text-primary mb-3">${(p.price || 0).toFixed(2)}</p>
        <div className="mt-auto d-flex gap-2">
          <Link to={`/product/${p.id}`} className="btn btn-outline-primary btn-sm">View</Link>
          <button className="btn btn-primary btn-sm" onClick={()=> onAdd(p.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
