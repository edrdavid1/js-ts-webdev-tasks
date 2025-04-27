// Специально для Павла: громатических ощибок англиского языка вы не найдете я все перепроверил
// пс зато руских хватит

const categories = [
    "Jackets & Coats",
    "Hoodies",
    "T-shirts & Vests",
    "Shirts",
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    "Underwear",
    "Gift Sets"
];
  
const products = [
    { name: "Slub Jersey T-shirt", price: "$12.99", image: "assets/Product image.png" },
    { name: "Printed T-shirt", price: "$12.99", image: "assets/Product image(1).png" },
    { name: "Cotton T-shirt", price: "$12.99", image: "assets/Product image(2).png" },
    { name: "T-shirt with a motif", price: "$12.99", image: "assets/Product image(3).png" },
    { name: "Cotton T-shirt Regular Fit", price: "$12.99", image: "assets/Product image(4).png" },
    { name: "Slub Jersey T-shirt", price: "$12.99", image: "assets/Product image(5).png" },
];


const options = [
    { value: 'recommended', text: 'RECOMENDED' },
    { value: 'priceAsc', text: 'COST ↑' },
    { value: 'priceDesc', text: 'COST ↓' },
    { value: 'newest', text: 'NEW' }
];



const app = document.getElementById('app');

// тут я придумал как можно не писать каждый раз element.className = ''

const createElementWithClass = (tag, ...classes) => {
    const el = document.createElement(tag);
    el.classList.add(...classes);
    return el;
}


const createSidebar = (categories) => {

    const sidebar = createElementWithClass('div', 'sidebar');
  
    const nav = document.createElement('nav');
  
    categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.textContent = category;
  
    categoryDiv.addEventListener('click', () => {

        nav.querySelectorAll('div').forEach(div => div.classList.remove('active'));
        categoryDiv.classList.add('active');
    });
  
    nav.appendChild(categoryDiv);
    });
  
    sidebar.appendChild(nav);
    return sidebar;
}
  

const createProductsHeader = () => {
    const header = createElementWithClass('div', 'products-header');
  
    const itemCount = createElementWithClass('div', 'item-count');
    itemCount.textContent = `${products.length} ITEMS`;
  
    const sortDropdown = createElementWithClass('div', 'sort-dropdown');
    const sortLabel = createElementWithClass('span', 'sort-label');
    sortLabel.textContent = "SORT BY:";
  
    const dropdown = createElementWithClass('select', 'sort-dropdown');
    
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        dropdown.appendChild(opt);
    });
  
    // это задел на будущие 
    dropdown.addEventListener('change', (event) => {
        sortProducts(event.target.value); 
    });
  
    sortDropdown.appendChild(sortLabel);
    sortDropdown.appendChild(dropdown);
  
    header.appendChild(itemCount);
    header.appendChild(sortDropdown);
  
    return header;
};
  

const createProductCard = (product) => {
    const card = createElementWithClass('div', 'product-card');

    const imageWrapper = createElementWithClass('div', 'product-image');
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    imageWrapper.appendChild(img);

    const title = createElementWithClass('h3', 'product-title');
    title.textContent = product.name;

    const price = createElementWithClass('p', 'product-price');
    price.textContent = product.price;

    const button = createElementWithClass('button', 'add-to-bag');
    button.textContent = "Add to bag";

    card.appendChild(imageWrapper);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}

const createProductsGrid = () => {
    const grid = createElementWithClass('div', 'products-grid');
    products.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
    return grid;
}

const createPage = () => {

    const container = createElementWithClass('div', 'container');
    const contentWrapper = createElementWithClass('div', 'content-wrapper');
    const sidebar = createSidebar(categories);

    const mainContent = createElementWithClass('div', 'main-content');
    const header = createProductsHeader();
    const grid = createProductsGrid();

    mainContent.appendChild(header);
    mainContent.appendChild(grid);

    contentWrapper.appendChild(sidebar);
    contentWrapper.appendChild(mainContent);

    container.appendChild(contentWrapper);
    app.appendChild(container);
}

createPage();






