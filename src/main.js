const products = [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 59.99,
        image: 'https://via.placeholder.com/200x150/0000FF/FFFFFF?text=Headphones'
      },
      {
        id: 2,
        name: 'Smartwatch Fitness Tracker',
        price: 89.99,
        image: 'https://via.placeholder.com/200x150/FF0000/FFFFFF?text=Smartwatch'
      },
      {
        id: 3,
        name: 'Portable SSD 1TB',
        price: 129.99,
        image: 'https://via.placeholder.com/200x150/00FF00/FFFFFF?text=SSD'
      },
      {
        id: 4,
        name: 'Gaming Mouse RGB',
        price: 34.50,
        image: 'https://via.placeholder.com/200x150/FFFF00/000000?text=Mouse'
      },
      {
        id: 5,
        name: 'USB-C Hub Multiport',
        price: 29.99,
        image: 'https://via.placeholder.com/200x150/FF00FF/FFFFFF?text=USB-C Hub'
      },
      {
        id: 6,
        name: 'Ergonomic Keyboard',
        price: 75.00,
        image: 'https://via.placeholder.com/200x150/00FFFF/000000?text=Keyboard'
      }
    ];

    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const productListElement = document.getElementById('product-list');

    function updateCartCount() {
      cartCountElement.textContent = cartCount;
    }

    function addProductToCart(productId) {
      console.log(`Product ${productId} added to cart!`);
      cartCount++;
      updateCartCount();
      // In a real app, you would add the product to a cart array/object
      // and perhaps show a notification.
    }

    function renderProducts() {
      if (!productListElement) return;

      productListElement.innerHTML = ''; // Clear existing products

      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">$${product.price.toFixed(2)}</p>
          <button data-product-id="${product.id}">Add to Cart</button>
        `;

        const addButton = productCard.querySelector('button');
        addButton.addEventListener('click', () => addProductToCart(product.id));

        productListElement.appendChild(productCard);
      });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
      renderProducts();
      updateCartCount();
    });