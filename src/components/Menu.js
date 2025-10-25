import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
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
      popular: true
    },
    {
      id: 2,
      category: 'chutneys',
      name: 'Coconut Chutney',
      price: '$5.99',
      description: 'Creamy coconut with roasted chana dal and curry leaves'
    },
    {
      id: 3,
      category: 'snacks',
      name: 'Samosa',
      price: '$3.99',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      popular: true
    },
    {
      id: 4,
      category: 'snacks',
      name: 'Pakora',
      price: '$4.49',
      description: 'Vegetable fritters with gram flour batter'
    },
    {
      id: 5,
      category: 'main',
      name: 'Paneer Tikka Masala',
      price: '$12.99',
      description: 'Grilled cottage cheese in rich tomato-based sauce',
      popular: true
    },
    {
      id: 6,
      category: 'main',
      name: 'Dal Makhani',
      price: '$10.99',
      description: 'Creamy black lentils slow-cooked with butter and cream'
    }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="menu">
      <div className="menu-container">
        <div className="section-header animate-fade-in">
          <h2>Our Menu</h2>
          <p>Discover our delicious selection of traditional dishes</p>
        </div>
        
        <div className="menu-categories animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="menu-items">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="menu-item animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="item-header">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-description">{item.description}</p>
              {item.popular && <span className="popular-tag">Popular</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;