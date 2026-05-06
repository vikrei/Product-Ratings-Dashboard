console.log('JS connected');
async function getProducts() {
    const status = document.querySelector("#status");
    try {

        status.textContent = "Loading product data...";
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        console.log(products);
        status.textContent = "Products loaded successfully!";

        const categories = {};
        products.forEach(product => {

            const category = product.category;
            const rating = product.rating.rate;

            if (!categories[category]) {

                categories[category] = [];

            }

            categories[category].push(rating);

});

console.log(categories);

const averageRatings = [];

for (const category in categories) {

    const ratings = categories[category];

    const total = ratings.reduce((sum, rating) => sum + rating, 0);

    const average = total / ratings.length;

    averageRatings.push({
        name: category,
        y: Number(average.toFixed(2))
    });

}

console.log(averageRatings);
Highcharts.chart("category-chart", {

    chart: {
        type: "column"
    },

    title: {
        text: "Average Rating by Category"
    },

    accessibility: {
        enabled: true
    },

    xAxis: {
        type: "category",
        title: {
            text: "Categories"
        }
    },

    yAxis: {
        title: {
            text: "Average Rating"
        }
    },

    tooltip: {
        pointFormat: "Average rating: <b>{point.y}</b>"
    },

    series: [{
        name: "Rating",
        data: averageRatings
    }]

});

    } catch(error) {

        console.log(error);
        status.textContent = "Something went wrong while loading data.";
    }
}

getProducts();