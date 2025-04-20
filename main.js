const app = document.getElementById('app');

const mainCont = document.createElement('div');
mainCont.className = 'main-container';
app.appendChild(mainCont);

const titelDiv = document.createElement('div');
titelDiv.className = 'titel-container';
mainCont.appendChild(titelDiv);  

const title = document.createElement('h1');
title.textContent = 'Last works';
titelDiv.appendChild(title);

const exploreButton = document.createElement('button');
exploreButton.textContent = 'Explore Showcase';
exploreButton.className = 'top-btn';
titelDiv.appendChild(exploreButton);

const container = document.createElement('div');
container.className = 'container';
mainCont.appendChild(container);

function createCard({ title, text, btnClass = 'white', className = '' }) {
    const card = document.createElement('div');
    card.className = `card ${className}`;

    const classes = className.split(' ');

    if (classes.includes('image')) {
        const imageName = classes.find(cls => cls !== 'image');
        if (imageName) {
            card.style.backgroundImage = `url('assets/Image_${imageName}.png')`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
            card.style.color = 'white';
        }
    }

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = text;

    const btn = document.createElement('button');
    btn.textContent = 'Explore';
    btn.className = btnClass;

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(btn);

    return card;
}

const cardsData = [
    {
        title: 'Startup Framework',
        text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        className: 'grey',
    },
    {
        title: 'Web Generator',
        text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        btnClass: 'mint',
    },
    {
        title: 'Slides 4',
        text: 'All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.',
        className: 'blue',
    },
    {
        title: 'Postcards',
        text: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
        className: 'image first',
    }
];

cardsData.forEach(data => {
    const card = createCard(data);
    container.appendChild(card);
});
