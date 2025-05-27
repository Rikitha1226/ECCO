// Product data
const products = {
    kitchen: [
        {
            id: 'k1',
            name: 'Bamboo Cutlery Set.jpg',
            price: 599,
            image: 'cutlery_set.png',
            description: 'Eco-friendly bamboo cutlery set with carrying case',
            category: 'kitchen'
        },
        {
            id: 'k2',
            name: 'Stainless Steel Water Bottle',
            price: 799,
            image: 'steel_bottle.png',
            description: 'Double-walled insulated water bottle',
            category: 'kitchen'
        }
    ],
    stationery: [
        {
            id: 's1',
            name: 'Recycled Paper Notebook',
            price: 299,
            image: 'notebook.png',
            description: '100% recycled paper notebook with 200 pages',
            category: 'stationery'
        },
        {
            id: 's2',
            name: 'Bamboo Pen Set',
            price: 399,
            image: 'bamboo_pen.png',
            description: 'Set of 3 bamboo pens with refills',
            category: 'stationery'
        }
    ],
    kids: [
        {
            id: 'kd1',
            name: 'Organic Cotton Florel Printed Frock',
            price: 499,
            image: 'cotten.jpg',
            description: '100% organic cotton t-shirt for kids',
            category: 'kids'
        },
        {
            id: 'kd2',
            name: 'Wooden Building Blocks',
            price: 899,
            image: 'wooden_blocks.png',
            description: 'Natural wooden building blocks set',
            category: 'kids'
        }
    ],
    women: [
        {
            id: 'w1',
            name: 'Organic Cotton Dress',
            price: 1299,
            image: 'cotton_dress.png',
            description: 'Eco-friendly cotton dress',
            category: 'women'
        },
        {
            id: 'w2',
            name: 'Bamboo Fiber Scarf',
            price: 699,
            image: 'bamboo_scarf.png',
            description: 'Soft bamboo fiber scarf',
            category: 'women'
        }
    ],
    men: [
        {
            id: 'm1',
            name: 'Organic Cotton Shirt',
            price: 999,
            image: 'cotton_shirt.png',
            description: '100% organic cotton casual shirt',
            category: 'men'
        },
        {
            id: 'm2',
            name: 'Hemp Backpack',
            price: 1499,
            image: 'hemp_backpack.png',
            description: 'Durable hemp backpack',
            category: 'men'
        }
    ],
    pets: [
        {
            id: 'p1',
            name: 'Organic Pet Bed',
            price: 1299,
            image: 'pet_bed.png',
            description: 'Eco-friendly pet bed',
            category: 'pets'
        },
        {
            id: 'p2',
            name: 'Natural Pet Toys',
            price: 499,
            image: 'pet_toys.png',
            description: 'Set of natural rubber pet toys',
            category: 'pets'
        }
    ],
    home: [
        {
            id: 'h1',
            name: 'Solar Power Bank',
            price: 1999,
            image: 'solar_powerbank.png',
            description: 'Solar-powered portable charger',
            category: 'home'
        },
        {
            id: 'h2',
            name: 'LED Solar Lights',
            price: 799,
            image: 'solar_lights.png',
            description: 'Outdoor solar-powered LED lights',
            category: 'home'
        }
    ],
    sanitization: [
        {
            id: 'sn1',
            name: 'Natural Hand Sanitizer',
            price: 299,
            image: 'hand_sanitizer.png',
            description: 'Alcohol-free natural hand sanitizer',
            category: 'sanitization'
        },
        {
            id: 'sn2',
            name: 'Bamboo Face Masks',
            price: 399,
            image: 'face_masks.png',
            description: 'Pack of 5 reusable bamboo face masks',
            category: 'sanitization'
        }
    ]
};

// Popular eco-friendly search terms
const popularSearches = [
    "bamboo products",
    "organic cotton",
    "zero waste",
    "reusable bags",
    "eco-friendly kitchen",
    "sustainable fashion",
    "natural cleaning",
    "recycled paper"
];

// Featured Products Data
const featuredProducts = [
    {
        id: 'k1',
            name: 'Bamboo Cutlery Set',
            price: 150,
            image: 'cutlery_set.png',
            description: 'Eco-friendly bamboo cutlery set with carrying case',
            category: 'kitchen'
    },
    {
        id: 'k2',
            name: 'Stainless Steel Water Bottle',
            price: 500,
            image: 'steel_bottle.png',
            description: 'Double-walled insulated water bottle',
            category: 'kitchen'
    },
    {
        id: 'k3',
        name: 'Eco-Friendly Lunch Box',
        price: 499,
        image: 'lunch_box.png',
        description: 'Stainless steel lunch box with bamboo lid',
        category: 'kitchen',
        featured: true
    },
    {
        id: 'k4',
        name: 'Bamboo Cooking Utensils',
        price: 999,
        image: 'bamboo_cooking_utensils.png',
        description: 'Set of 7 bamboo cooking utensils',
        category: 'kitchen',
        featured: true
    },
    {
        id: 's3',
        name: 'Eco Pencil Set',
        price: 150,
        image: 'pencil_set.png',
        description: 'Set of 12 recycled paper pencils',
        category: 'stationery',
        featured: true
    },
    {
        id: 's4',
        name: 'Bamboo Desk Organizer',
        price: 399,
        image: 'bamboo_desk_organizer.png',
        description: 'Sustainable bamboo desk organizer',
        category: 'stationery',
        featured: true
    },
    {
        id: 'h3',
        name: 'Solar Garden Lights',
        price: 1499,
        image: 'solar_garden_lights.png',
        description: 'Set of 4 solar-powered garden lights',
        category: 'home',
        featured: true
    },
    {
        id: 'h4',
        name: 'Bamboo Storage Baskets',
        price: 499,
        image: 'bamboo_storage_baskets.png',
        description: 'Set of 3 woven bamboo storage baskets',
        category: 'home',
        featured: true
    },
    {
        id: 'w3',
        name: 'Organic Cotton Tote Bag',
        price: 299,
        image: 'organic_cotton_tote_bag.png',
        description: 'Handmade organic cotton tote bag',
        category: 'women',
        featured: true
    },
    {
        id: 'w4',
        name: 'Bamboo Fiber Socks',
        price: 199,
        image: 'bamboo_fiber_socks.png',
        description: 'Pack of 3 bamboo fiber socks',
        category: 'women',
        featured: true
    },
    {
        id: 'm3',
        name: 'Hemp Wallet',
        price: 799,
        image: 'hemp_wallet.png',
        description: 'Handcrafted hemp wallet',
        category: 'men',
        featured: true
    },
    {
        id: 'm4',
        name: 'Organic Cotton Cap',
        price: 299,
        image: 'organic_cotton_cap.png',
        description: '100% organic cotton baseball cap',
        category: 'men',
        featured: true
    }
];

// DOM Elements
const searchInput = document.querySelector('.search-form input');
const searchSuggestions = document.querySelector('.search-suggestions');
const featuredProductsContainer = document.getElementById('featured-products');

// Search Functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    if (searchTerm.length < 2) {
        searchSuggestions.style.display = 'none';
        return;
    }

    const matchedProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    const matchedSearches = popularSearches.filter(term => 
        term.toLowerCase().includes(searchTerm)
    );

    displaySearchSuggestions([...matchedProducts, ...matchedSearches]);
}

function displaySearchSuggestions(suggestions) {
    if (suggestions.length === 0) {
        searchSuggestions.style.display = 'none';
        return;
    }

    searchSuggestions.innerHTML = suggestions.map(suggestion => {
        if (suggestion.name) {
            // Product suggestion
            return `
                <div class="suggestion-item">
                    <img src="${suggestion.image}" alt="${suggestion.name}" class="suggestion-image">
                    <div class="suggestion-details">
                        <div class="suggestion-name">${suggestion.name}</div>
                        <div class="suggestion-category">${suggestion.category}</div>
                    </div>
                </div>
            `;
        } else {
            // Search term suggestion
            return `
                <div class="suggestion-item">
                    <i class="fas fa-search"></i>
                    <span>${suggestion}</span>
                </div>
            `;
        }
    }).join('');

    searchSuggestions.style.display = 'block';
}

// Function to display products by category
function displayProducts(category) {
    const productGrid = document.getElementById('featured-products');
    const categoryProducts = products[category] || [];
    
    productGrid.innerHTML = categoryProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-price">₹${product.price}</p>
                <a href="product.html?id=${product.id}" class="view-product-btn">View Product</a>
            </div>
        </div>
    `).join('');
}

// Event Listeners
searchInput?.addEventListener('input', handleSearch);
searchInput?.addEventListener('focus', () => {
    if (searchInput.value.length >= 2) {
        handleSearch({ target: searchInput });
    }
});

document.addEventListener('click', (event) => {
    if (!searchSuggestions.contains(event.target) && event.target !== searchInput) {
        searchSuggestions.style.display = 'none';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts('kitchen');
    displayProducts('stationery');
    displayProducts('kids');
    displayProducts('women');
    displayProducts('men');
    displayProducts('pets');
    displayProducts('home');
    displayProducts('sanitization');
    displayFeaturedProducts();
});

// Back to Top functionality
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Toggle functionality
const themeSwitch = document.getElementById('theme-switch');
const themeSwitchIcon = themeSwitch.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeSwitch(savedTheme);

themeSwitch.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeSwitch(newTheme);
});

function updateThemeSwitch(theme) {
    if (theme === 'dark') {
        themeSwitchIcon.className = 'fas fa-sun';
        themeSwitch.setAttribute('aria-label', 'Switch to light mode');
    } else {
        themeSwitchIcon.className = 'fas fa-moon';
        themeSwitch.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// Accessibility improvements for the newsletter form
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = newsletterForm.querySelector('input[type="email"]');

emailInput.addEventListener('invalid', (e) => {
    e.preventDefault();
    emailInput.setAttribute('aria-invalid', 'true');
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';
    errorMessage.setAttribute('role', 'alert');
    errorMessage.textContent = 'Please enter a valid email address';
    
    // Remove any existing error message
    const existingError = newsletterForm.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    newsletterForm.appendChild(errorMessage);
});

emailInput.addEventListener('input', () => {
    emailInput.removeAttribute('aria-invalid');
    const errorMessage = newsletterForm.querySelector('.error-message');
    if (errorMessage) errorMessage.remove();
});

// Account dropdown close on click outside
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.account-dropdown');
    if (!dropdown) return;
    const menu = dropdown.querySelector('.account-menu');
    if (!dropdown.contains(e.target)) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Function to display featured products
function displayFeaturedProducts() {
    const productGrid = document.getElementById('featured-products');
    
    productGrid.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-badge">Featured</div>
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-price-row">
                    <p class="product-price">₹${product.price}</p>
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
                <div class="product-actions">
                    <a href="product.html?id=${product.id}" class="view-product-btn">View Details</a>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart function
function addToCart(productId) {
    console.log(`Added product ${productId} to cart`);
    // Add your cart functionality here
} 