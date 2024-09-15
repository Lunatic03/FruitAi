import React from 'react';
import './FAQ.css';

const faqs = [
  {
    image: '/images/apple-image.jpg', // Replace with your image paths
    text: 'Apples are nutritious and come in various varieties. They are known for their crisp texture and sweet taste.'
  },
  {
    image: '/images/banana-image.jpeg',
    text: 'Bananas are rich in potassium and make for a great snack. They have a soft and creamy texture when ripe.'
  },
  {
    image: '/images/cherry-image.jpg',
    text: 'Cherries are small, round fruits with a sweet-tart flavor. They are often used in desserts and preserves.'
  },
  {
    image: '/images/grape-image.jpeg',
    text: 'Grapes come in various colors and are a good source of vitamins. They can be eaten fresh or used to make wine.'
  },
  {
    image: '/images/orange-image.jpg',
    text: 'Oranges are well-known for their high vitamin C content. They are juicy and tangy, making them a popular fruit.'
  },
  {
    image: 'images/strawberryimage.jpeg',
    text: 'Strawberries are bright red and juicy with a sweet flavor. They are often used in desserts and smoothies.'
  },
];

const FAQ = () => {
  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-box">
          <img src={faq.image} alt={`Image of ${faq.text.split(' ')[0]}`} className="faq-image" />
          <p className="faq-text">{faq.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
