console.log('JS connected');
async function getProducts() {

    const status = document.querySelector("#status");

    try {

        status.textContent = "Loading product data...";

        const response = await fetch("https://fakestoreapi.com/products");

        const products = await response.json();

        console.log(products);

        status.textContent = "Products loaded successfully!";

    } catch(error) {

        console.log(error);

        status.textContent = "Something went wrong while loading data.";

    }

}

getProducts();