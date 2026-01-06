// src/api/products.js
const API_URL = 'https://dummyjson.com'

export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/products`)
  const data = await res.json()
  return data.products // returns array of products
}

export const fetchProductById = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`)
  return await res.json()
}