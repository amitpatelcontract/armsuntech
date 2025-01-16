import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #4338ca 0%, #3730a3 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          color: '#ffffff',
          marginBottom: '2rem',
          fontWeight: '700'
        }}>
          Your Partner in AI Innovation
        </h1>
        
        <p style={{
          fontSize: '1.4rem',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          marginBottom: '3rem'
        }}>
          We're your go-to team for building custom AI solutions. Our experts help 
          businesses just like yours harness the power of AI to solve problems and 
          drive growth.
        </p>

        <a 
          href="#contact"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#ffffff',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          Ready to get started? Contact us for a free consultation
        </a>
      </div>
    </section>
  );
};

export default HomeSection; 