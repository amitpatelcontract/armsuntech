import React from 'react';

const AboutSection = () => {
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      description: "In software development"
    },
    {
      number: "100+",
      label: "Projects Delivered",
      description: "Across various industries"
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Worldwide"
    }
  ];

  return (
    <section id="about" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'rgba(255, 255, 255, 0.02)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          About Us
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#90caf9',
              marginBottom: '1.5rem'
            }}>
              Who We Are
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}>
              Founded in 2014, Armsuntech has been at the forefront of technological 
              innovation. We specialize in creating cutting-edge AI solutions that 
              help businesses transform their operations and achieve remarkable growth.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#90caf9',
              marginBottom: '1.5rem'
            }}>
              Our Mission
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}>
              Our mission is to empower businesses with innovative AI solutions that 
              drive growth and efficiency. We're committed to delivering excellence 
              through cutting-edge technology and exceptional service.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                fontSize: '3rem',
                color: '#90caf9',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                {stat.label}
              </div>
              <div style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem'
              }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          background: 'rgba(144, 202, 249, 0.1)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Ready to transform your business?
          </h3>
          <a 
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: '#90caf9',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              marginTop: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 5px 15px rgba(144, 202, 249, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 