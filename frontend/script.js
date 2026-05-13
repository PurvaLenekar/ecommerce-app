const API_URL = "http://localhost:5000/api/products";

let cart = [];


// FETCH PRODUCTS
async function fetchProducts() {

    const response = await fetch(API_URL);

    const products = await response.json();

    const productsDiv = document.getElementById("products");

    productsDiv.innerHTML = "";

    products.forEach(product => {

        productsDiv.innerHTML += `
            <div class="product">

                <h3>${product.name}</h3>

                <p>Price: ₹${product.price}</p>

                <p>${product.description}</p>

                <button class="buy-btn"
                    onclick='buyProduct(${JSON.stringify(product)})'>
                    Buy
                </button>

                <button class="delete-btn"
                    onclick="deleteProduct('${product._id}')">
                    Delete
                </button>

            </div>
        `;
    });
}


// ADD PRODUCT
async function addProduct() {

    const name = document.getElementById("name").value;

    const price = document.getElementById("price").value;

    const description = document.getElementById("description").value;

    if (!name || !price || !description) {

        alert("Please fill all fields");

        return;
    }

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            price,
            description
        })

    });

    document.getElementById("name").value = "";

    document.getElementById("price").value = "";

    document.getElementById("description").value = "";

    fetchProducts();
}


// DELETE PRODUCT
async function deleteProduct(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    });

    fetchProducts();
}


// BUY PRODUCT
function buyProduct(product) {

    cart.push(product);

    renderCart();

    alert(`${product.name} added to cart`);
}


// RENDER CART
function renderCart() {

    const cartDiv = document.getElementById("cart");

    cartDiv.innerHTML = "";

    cart.forEach(item => {

        cartDiv.innerHTML += `
            <div class="cart-item">

                <h4>${item.name}</h4>

                <p>₹${item.price}</p>

            </div>
        `;
    });
}


fetchProducts();