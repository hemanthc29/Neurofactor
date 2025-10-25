import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'chutneys', name: 'Chutneys' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'main', name: 'Main Course' }
  ];
  
  const menuItems = [
    {
      id: 1,
      category: 'chutneys',
      name: 'Mint Coriander Chutney',
      price: '$4.99',
      description: 'Fresh mint and coriander blended with spices',
      popular: true,
      image: '🌱'
    },
    {
      id: 2,
      category: 'chutneys',
      name: 'Coconut Chutney',
      price: '$5.99',
      description: 'Creamy coconut with roasted chana dal and curry leaves',
      image: '🥥'
    },
    {
      id: 3,
      category: 'snacks',
      name: 'Samosa',
      price: '$3.99',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      popular: true,
      image: '🥟'
    },
    {
      id: 4,
      category: 'snacks',
      name: 'Pakora',
      price: '$4.49',
      description: 'Vegetable fritters with gram flour batter',
      image: '🥒'
    },
    {
      id: 5,
      category: 'main',
      name: 'Paneer Tikka Masala',
      price: '$12.99',
      description: 'Grilled cottage cheese in rich tomato-based sauce',
      popular: true,
      image: '🧀'
    },
    {
      id: 6,
      category: 'main',
      name: 'Dal Makhani',
      price: '$10.99',
      description: 'Creamy black lentils slow-cooked with butter and cream',
      image: '🍲'
    }
  ];
  
  useEffect(() => {
    let items = activeCategory === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === activeCategory);
      
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredItems(items);
    
    // Animate items in
    setVisibleItems([]);
    const timer = setTimeout(() => {
      setVisibleItems(items.map(item => item.id));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]);
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <div className="section-header animate-fade-in">
          <h2>Our Menu</h2>
          <p>Discover our delicious selection of traditional dishes</p>
        </div>
        
        <div className="menu-controls">
          <div className="menu-categories animate-fade-in">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="search-container animate-fade-in">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
        
        <div className="menu-items">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`menu-item animate-fade-in-up ${visibleItems.includes(item.id) ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-price">{item.price}</span>
                </div>
                <div className="item-content">
                  <span className="item-image">{item.image}</span>
                  <p className="item-description">{item.description}</p>
                </div>
                {item.popular && <span className="popular-tag">Popular</span>}
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No items found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;