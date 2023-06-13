const currency = "$"; // Made this a global variable to allow it be changeable and the displayed currency would adapt

// Function for getting the latest trends. Separated this to displaying in case it will be an API call
function getTrends() {
    const data = [
        {
            title: "Winter Fashion",
            image: "./images/Rectangle 1.png"
        },
        {
            title: "Boots",
            image: "./images/Rectangle 2.png"
        },
        {
            title: "Night Out",
            image: "./images/Rectangle 3.png"
        },
        {
            title: "Holidays",
            image: "./images/Rectangle 4.png"
        },
        {
            title: "Outerwear",
            image: "./images/Rectangle 5.png"
        },
        {
            title: "White Dresses",
            image: "./images/Rectangle 6.png"
        },
        {
            title: "Sweaters",
            image: "./images/Rectangle 7.png"
        },
        {
            title: "Party",
            image: "./images/Rectangle 8.png"
        }
    ]

    return data;
}

async function displayTrends() {
    const data = await getTrends();
    let html = data.map(a => {
        return `<div class="grid-item trend">
        <div class="image-container"><img src="${a.image}"></div>
        <div class="trend-title">${a.title}</div>
      </div>`;
    });

    html = html.join(" ");

    document.getElementById("trends").innerHTML = html;
}

// Function for getting the recently bought items. Separated this to displaying in case it will be an API call
function getRecentlyBought() {
    const data = [
        {
            title: "Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit",
            image: "./images/Recents 1.png",
            currentPrice: "38",
            previousPrice: ""
        },
        {
            title: "Chevron Flap Crossbody Bag",
            image: "./images/Recents 2.png",
            currentPrice: "5.77",
            previousPrice: "7.34"
        },
        {
            title: "Manilla Tan Multi Plaid Oversized Fringe Scarf",
            image: "./images/Recents 3.png",
            currentPrice: "29",
            previousPrice: "39"
        },
        {
            title: "Diamante Puff Sleeve Dress - Black",
            image: "./images/Recents 4.png",
            currentPrice: "45.99",
            previousPrice: ""
        },
        {
            title: "Banneth Open Front Formal Dress in Black",
            image: "./images/Recents 5.png",
            currentPrice: "69",
            previousPrice: "99"
        },
    ]

    return data;
}

// Function for displaying the recently bought items
async function displayRecentlyBought() {
    const data = await getRecentlyBought();

    let html = data.map(a => {
    const priceClass = a.previousPrice ? "sale-price" : "current-price"; // This is to decide what should be the style set to the price if it has a previous price or not
    const price = a.currentPrice;
    const prevPriceHTML = a.previousPrice ? `<del class="prev-price">${currency}${a.previousPrice}</del>` : "";

    return ` <div class="grid-item recent">
        <div class="image-container"><img src="${a.image}"></div>
        <div class="recent-title">${a.title}</div>
        <div class="price"><span class="${priceClass}">${currency}${price}</span>${prevPriceHTML}</div>
      </div>`;
    });

    html = html.join(" ");

    document.getElementById("recently-bought").innerHTML = html;
}

// Function for getting the instagram posts. Separated this to displaying in case it will be an API call
function getInstaPosts() {
    const data = [
        {
            key: "1232",
            user: "emma11",
            image: "./images/Insta 1.png"
        },
        {
            key: "2034",
            user: "iu_happy",
            image: "./images/Insta 2.png"
        },
        {
            key: "9887",
            user: "mackenzie_stacy",
            image: "./images/Insta 3.png"
        },
        {
            key: "45323",
            user: "anaastashia",
            image: "./images/Insta 4.png"
        },
        {
            key: "87312",
            user: "ellenrose_09",
            image: "./images/Insta 5.png"
        }
    ]

    return data;
}

// Function for displaying the instagram posts
async function displayInstaPosts() {
    const data = await getInstaPosts();

    let html = data.map(a => {
    return ` <div class="grid-item insta-post" data-id="${a.key}" data-user="${a.user}">
        <div class="image-container"><img src="${a.image}"></div>
      </div>`;
    });

    html = html.join(" ");

    document.getElementById("insta-posts").innerHTML = html;
}

// main function that will be the first function that will be called
function load() {
    displayTrends();
    displayRecentlyBought();
    displayInstaPosts();
}

// call main function after all HTML document has been loadeds
document.addEventListener('DOMContentLoaded', () => { load(); }, false);
