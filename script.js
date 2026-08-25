// Product Data
const products = [
  {
    id: 1,
    title: "Apple iPhone 15 (Black, 128 GB)",
    brand: "Apple",
    category: "mobiles",
    price: 69999,
    originalPrice: 79900,
    discount: 12,
    rating: 4.6,
    ratingCount: "1,24,567",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    description: "Experience the power of A16 Bionic chip with advanced dual camera system. Dynamic Island, Always-On display and USB-C.",
    features: ["A16 Bionic chip", "48MP Main Camera", "Dynamic Island", "USB-C charging", "Ceramic Shield"]
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 5G (Onyx Black, 256 GB)",
    brand: "Samsung",
    category: "mobiles",
    price: 74999,
    originalPrice: 89999,
    discount: 16,
    rating: 4.5,
    ratingCount: "89,234",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    description: "Galaxy AI is here. Circle to Search, Live Translate and Note Assist make your everyday smarter.",
    features: ["Snapdragon 8 Gen 3", "50MP Triple Camera", "Galaxy AI", "120Hz AMOLED", "IP68"]
  },
  {
    id: 3,
    title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 128 GB)",
    brand: "OnePlus",
    category: "mobiles",
    price: 17999,
    originalPrice: 21999,
    discount: 18,
    rating: 4.3,
    ratingCount: "2,45,890",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
    description: "Powerful performance with 108MP camera and 67W SUPERVOOC charging.",
    features: ["Snapdragon 695 5G", "108MP Camera", "67W SUPERVOOC", "5000mAh Battery", "90Hz Display"]
  },
  {
    id: 4,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    category: "electronics",
    price: 24990,
    originalPrice: 34990,
    discount: 28,
    rating: 4.7,
    ratingCount: "45,678",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    description: "Industry-leading noise cancellation with premium sound quality and 30-hour battery life.",
    features: ["Industry-leading NC", "30hr Battery", "Multipoint connection", "Speak-to-Chat", "Hi-Res Audio"]
  },
  {
    id: 5,
    title: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds",
    brand: "boAt",
    category: "electronics",
    price: 999,
    originalPrice: 4490,
    discount: 77,
    rating: 4.1,
    ratingCount: "5,67,890",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
    description: "Enjoy immersive audio with 42 hours of playback and ASAP charge technology.",
    features: ["42 Hours Playback", "ASAP Charge", "ENx Technology", "IPX4 Water Resistant", "IWP Technology"]
  },
  {
    id: 6,
    title: "Nike Revolution 6 Running Shoes For Men",
    brand: "Nike",
    category: "fashion",
    price: 2995,
    originalPrice: 4495,
    discount: 33,
    rating: 4.2,
    ratingCount: "1,12,345",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Lightweight and comfortable running shoes designed for everyday training.",
    features: ["Soft foam midsole", "Breathable mesh upper", "Durable rubber outsole", "Lightweight design"]
  },
  {
    id: 7,
    title: "Levi's Men's 511 Slim Fit Jeans",
    brand: "Levi's",
    category: "fashion",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.3,
    ratingCount: "78,456",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    description: "Classic slim fit jeans with modern stretch for all-day comfort.",
    features: ["Slim Fit", "Stretch denim", "5-pocket styling", "Button fly", "Mid rise"]
  },
  {
    id: 8,
    title: "Philips Air Fryer HD9252/90 Digital (4.1 L)",
    brand: "Philips",
    category: "appliances",
    price: 7999,
    originalPrice: 12995,
    discount: 38,
    rating: 4.4,
    ratingCount: "34,567",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=400&h=400&fit=crop",
    description: "Fry with up to 90% less fat. Rapid Air technology for crispy results every time.",
    features: ["Rapid Air Technology", "4.1L Capacity", "Digital Display", "7 Presets", "Dishwasher safe"]
  },
  {
    id: 9,
    title: "Prestige Iris Plus 750W Mixer Grinder",
    brand: "Prestige",
    category: "appliances",
    price: 3299,
    originalPrice: 5495,
    discount: 40,
    rating: 4.2,
    ratingCount: "56,789",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop",
    description: "Powerful 750W motor with 3 stainless steel jars for all your grinding needs.",
    features: ["750W Motor", "3 Jars", "Overload Protection", "Elegant Design", "2 Year Warranty"]
  },
  {
    id: 10,
    title: "Urban Ladder Solid Wood Queen Size Bed",
    brand: "Urban Ladder",
    category: "home",
    price: 24999,
    originalPrice: 39999,
    discount: 37,
    rating: 4.5,
    ratingCount: "12,345",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop",
    description: "Elegant solid wood queen bed with storage. Perfect for modern bedrooms.",
    features: ["Solid Sheesham Wood", "Queen Size", "Under bed storage", "Matte finish", "Easy assembly"]
  },
  {
    id: 11,
    title: "Amazon Basics Memory Foam Pillow (Set of 2)",
    brand: "Amazon Basics",
    category: "home",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.1,
    ratingCount: "89,012",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    description: "Supportive memory foam pillows for a restful night's sleep.",
    features: ["Memory Foam", "Set of 2", "Removable cover", "Hypoallergenic", "Machine washable"]
  },
  {
    id: 12,
    title: "Maybelline New York Fit Me Matte + Poreless Foundation",
    brand: "Maybelline",
    category: "beauty",
    price: 449,
    originalPrice: 549,
    discount: 18,
    rating: 4.3,
    ratingCount: "2,34,567",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    description: "Natural looking coverage that controls shine and blurs pores for a matte finish.",
    features: ["Matte finish", "Pore blurring", "Up to 12hr wear", "SPF 18", "Oil-free"]
  },
  {
    id: 13,
    title: "Lakme Absolute Matte Melt Liquid Lip Color",
    brand: "Lakme",
    category: "beauty",
    price: 550,
    originalPrice: 700,
    discount: 21,
    rating: 4.2,
    ratingCount: "45,678",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    description: "Intense matte liquid lipstick with long-lasting color and comfortable wear.",
    features: ["Intense matte", "Long lasting", "Non-drying", "Rich pigment", "Easy applicator"]
  },
  {
    id: 14,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    brand: "JBL",
    category: "electronics",
    price: 8999,
    originalPrice: 12999,
    discount: 30,
    rating: 4.6,
    ratingCount: "67,890",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Bold sound with deep bass. IP67 waterproof and 12 hours of playtime.",
    features: ["Bold JBL Original Pro Sound", "IP67 Waterproof", "12 Hours Playtime", "PartyBoost", "USB-C"]
  },
  {
    id: 15,
    title: "HP 15s Intel Core i5 12th Gen Laptop",
    brand: "HP",
    category: "electronics",
    price: 52990,
    originalPrice: 65990,
    discount: 19,
    rating: 4.3,
    ratingCount: "23,456",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    description: "Powerful everyday laptop with Intel Core i5, 16GB RAM and 512GB SSD.",
    features: ["Intel Core i5-1235U", "16GB DDR4 RAM", "512GB SSD", "15.6\" FHD", "Windows 11"]
  },
  {
    id: 16,
    title: "Puma Men's Solid Regular Fit T-Shirt",
    brand: "Puma",
    category: "fashion",
    price: 699,
    originalPrice: 1499,
    discount: 53,
    rating: 4.1,
    ratingCount: "1,56,789",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Comfortable regular fit t-shirt made from soft cotton for everyday wear.",
    features: ["100% Cotton", "Regular Fit", "Soft handfeel", "Ribbed crew neck", "Machine wash"]
  }
];

// Cart state
let cart = JSON.parse(localStorage.getItem('vanikoCart')) || [];
let currentCategory = 'all';
let currentProducts = [...products];
let isLoggedIn = localStorage.getItem('vanikoUser') ? true : false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  updateCartCount();
  updateLoginButton();
});

// ========== LOGIN SIDEBAR ==========
function openLoginSidebar() {
  if (isLoggedIn) {
    if (confirm('You are already logged in. Do you want to logout?')) {
      logout();
    }
    return;
  }
  document.getElementById('loginOverlay').classList.add('active');
  document.getElementById('loginSidebar').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLoginSidebar() {
  document.getElementById('loginOverlay').classList.remove('active');
  document.getElementById('loginSidebar').classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginTabBtn = document.getElementById('loginTabBtn');
  const signupTabBtn = document.getElementById('signupTabBtn');

  if (tab === 'login') {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
    loginTabBtn.classList.add('active');
    signupTabBtn.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
    loginTabBtn.classList.remove('active');
    signupTabBtn.classList.add('active');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showToast('Please fill all fields');
    return;
  }

  localStorage.setItem('vanikoUser', JSON.stringify({ email, name: email.split('@')[0] || 'User' }));
  isLoggedIn = true;
  updateLoginButton();
  closeLoginSidebar();
  showToast('Welcome back! Logged in successfully');
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const mobile = document.getElementById('signupMobile').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (!name || !email || !mobile || !password) {
    showToast('Please fill all fields');
    return;
  }

  localStorage.setItem('vanikoUser', JSON.stringify({ name, email, mobile }));
  isLoggedIn = true;
  updateLoginButton();
  closeLoginSidebar();
  showToast('Account created! Welcome, ' + name);
}

function socialLogin(provider) {
  localStorage.setItem('vanikoUser', JSON.stringify({ name: provider + ' User', email: 'user@' + provider.toLowerCase() + '.com' }));
  isLoggedIn = true;
  updateLoginButton();
  closeLoginSidebar();
  showToast('Logged in with ' + provider + ' successfully!');
}

function logout() {
  localStorage.removeItem('vanikoUser');
  isLoggedIn = false;
  updateLoginButton();
  showToast('Logged out successfully');
}

function updateLoginButton() {
  const btn = document.querySelector('.login-btn');
  if (!btn) return;
  
  if (isLoggedIn) {
    const user = JSON.parse(localStorage.getItem('vanikoUser'));
    btn.innerHTML = '<i class="fas fa-user-check"></i><span>' + (user.name || 'Account') + '</span>';
  } else {
    btn.innerHTML = '<i class="fas fa-user"></i><span>Login</span>';
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ========== PRODUCTS ==========
function renderProducts(productList) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  
  if (productList.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  
  grid.innerHTML = productList.map(product => `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <div class="product-image">
        ${product.discount >= 20 ? '<span class="discount-badge">' + product.discount + '% OFF</span>' : ''}
        <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=Product'">
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-title">${product.title}</div>
        <div class="product-rating">
          <span class="rating-badge">${product.rating} <i class="fas fa-star" style="font-size:9px"></i></span>
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <div class="product-price">
          <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="discount-percent">${product.discount}% off</span>
        </div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          ADD TO CART
        </button>
      </div>
    </div>
  `).join('');
}

function filterCategory(category) {
  currentCategory = category;
  
  document.querySelectorAll('.categories-list li').forEach(li => {
    li.classList.remove('active');
    if (li.textContent.toLowerCase() === category || (category === 'all' && li.textContent === 'All')) {
      li.classList.add('active');
    }
  });
  
  if (category === 'all') {
    currentProducts = [...products];
    document.getElementById('sectionTitle').textContent = 'All Products';
  } else {
    currentProducts = products.filter(p => p.category === category);
    document.getElementById('sectionTitle').textContent = category.charAt(0).toUpperCase() + category.slice(1);
  }
  
  sortProducts();
  showHome();
}

function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  
  let filtered = currentCategory === 'all' 
    ? [...products] 
    : products.filter(p => p.category === currentCategory);
  
  if (query) {
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }
  
  currentProducts = filtered;
  renderProducts(filtered);
  document.getElementById('sectionTitle').textContent = query 
    ? 'Results for "' + query + '"' 
    : (currentCategory === 'all' ? 'All Products' : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1));
}

function sortProducts() {
  const sortValue = document.getElementById('sortSelect').value;
  let sorted = [...currentProducts];
  
  switch(sortValue) {
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
  }
  
  renderProducts(sorted);
}

// ========== CART ==========
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(item => item.id === productId);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart();
  updateCartCount();
  
  const btn = event.target;
  btn.textContent = 'ADDED ✓';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = 'ADD TO CART';
    btn.classList.remove('added');
  }, 1400);
  
  showToast('Added to cart');
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartItemCount').textContent = count;
}

function saveCart() {
  localStorage.setItem('vanikoCart', JSON.stringify(cart));
}

function showCart() {
  document.getElementById('bannerSection').style.display = 'none';
  document.getElementById('productsSection').style.display = 'none';
  document.getElementById('cartSection').style.display = 'block';
  renderCart();
}

function showHome() {
  document.getElementById('bannerSection').style.display = 'block';
  document.getElementById('productsSection').style.display = 'block';
  document.getElementById('cartSection').style.display = 'none';
}

function renderCart() {
  const cartItemsEl = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const cartContent = document.querySelector('.cart-content');
  
  if (cart.length === 0) {
    cartContent.style.display = 'none';
    emptyCart.style.display = 'block';
    return;
  }
  
  cartContent.style.display = 'grid';
  emptyCart.style.display = 'none';
  
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/100x100?text=Product'">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-price">
          <span class="current-price">₹${item.price.toLocaleString('en-IN')}</span>
          <span class="original-price">₹${item.originalPrice.toLocaleString('en-IN')}</span>
          <span class="discount-percent">${item.discount}% off</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">REMOVE</button>
        </div>
      </div>
    </div>
  `).join('');
  
  updateCartSummary();
}

function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  saveCart();
  updateCartCount();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
}

function updateCartSummary() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const totalDiscount = cart.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const finalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  document.getElementById('summaryCount').textContent = totalItems;
  document.getElementById('summaryPrice').textContent = '₹' + totalPrice.toLocaleString('en-IN');
  document.getElementById('summaryDiscount').textContent = '- ₹' + totalDiscount.toLocaleString('en-IN');
  document.getElementById('summaryTotal').textContent = '₹' + finalAmount.toLocaleString('en-IN');
  document.getElementById('savingsText').textContent = 'You will save ₹' + totalDiscount.toLocaleString('en-IN') + ' on this order';
}

function placeOrder() {
  if (cart.length === 0) return;
  
  if (!isLoggedIn) {
    showToast('Please login to place order');
    openLoginSidebar();
    return;
  }
  
  showToast('Order placed successfully!');
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();
}

// ========== PRODUCT MODAL ==========
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/350x350?text=Product'">
    </div>
    <div class="modal-details">
      <h2>${product.title}</h2>
      <div class="modal-brand">${product.brand}</div>
      <div class="modal-rating">
        <span class="rating-badge">${product.rating} <i class="fas fa-star" style="font-size:9px"></i></span>
        <span class="rating-count">${product.ratingCount} ratings</span>
      </div>
      <div class="modal-price">
        <span class="current">₹${product.price.toLocaleString('en-IN')}</span>
        <span class="original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        <span class="off">${product.discount}% off</span>
      </div>
      <p class="modal-description">${product.description}</p>
      <ul class="modal-features">
        ${product.features.map(f => '<li>' + f + '</li>').join('')}
      </ul>
      <div class="modal-actions">
        <button class="btn-add" onclick="addToCart(${product.id}); closeModal();">ADD TO CART</button>
        <button class="btn-buy" onclick="addToCart(${product.id}); showCart(); closeModal();">BUY NOW</button>
      </div>
    </div>
  `;
  
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('productModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    closeLoginSidebar();
  }
});
