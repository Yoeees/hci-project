
const BASE_URL = 'https://dummyjson.com'

export async function fetchProducts() {
  try {
    // Fetch all products by setting limit to 0 or a high number
    const response = await fetch(`${BASE_URL}/products?limit=0`)
    const data = await response.json()
    
    // Normalize the data - ensure each product has both 'name' and 'title'
    const products = (data.products || data).map(product => ({
      ...product,
      name: product.title || product.name,
      title: product.title || product.name
    }))
    
    return { products }
  } catch (error) {
    console.error('Error fetching products:', error)
    return { products: [] }
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    const product = await response.json()
    
    // Normalize the product data
    return {
      ...product,
      name: product.title || product.name,
      title: product.title || product.name
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function fetchProductsByCategory(category) {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`)
    const data = await response.json()
    
    const products = (data.products || data).map(product => ({
      ...product,
      name: product.title || product.name,
      title: product.title || product.name
    }))
    
    return { products }
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return { products: [] }
  }
}