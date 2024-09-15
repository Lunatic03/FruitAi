import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Fruit.Ai</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Fruit.Ai is dedicated to enhancing your fruit experience with advanced AI technologies. Our goal is to provide valuable insights, helpful tools, and an engaging user experience for fruit enthusiasts around the world.
          </p>
        </section>
        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            We offer a range of services including a smart chatbot to answer your fruit-related questions, a language translation tool to help you understand fruit information in different languages, and comprehensive FAQs about various fruits.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            For more information or inquiries, feel free to reach out to us at <a href="mailto:contact@fruitai.com">contact@fruitai.com</a>. We’re here to assist you with any questions or feedback you may have.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
