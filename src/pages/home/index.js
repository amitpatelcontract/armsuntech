import React from "react";
import Header from "../../components/common/Header";

const clientLogos = {
  macys: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Macys_Logo_2019.svg",
  cbs: "https://upload.wikimedia.org/wikipedia/commons/e/ee/CBS_News_logo.svg",
  accuweather: "https://upload.wikimedia.org/wikipedia/commons/7/70/AccuWeather_Logo.svg"
};

const portfolioItems = [
  {
    client: "Macy's",
    logo: clientLogos.macys,
    description: "Built enterprise-level e-commerce platform handling millions of daily transactions"
  },
  {
    client: "CBS News",
    logo: clientLogos.cbs,
    description: "Developed real-time news delivery system and content management platform"
  },
  {
    client: "AccuWeather",
    logo: clientLogos.accuweather,
    description: "Created weather forecasting applications for web and mobile platforms"
  }
];

const getServiceDescription = (service) => {
  const descriptions = {
    'Mobile Development': 'Creating intuitive, high-performing mobile apps for iOS & Android.',
    'Web Development': 'Building responsive, scalable web solutions with modern technologies.',
    'API Integration': 'Streamlining data flow with custom API development and integration.'
  };
  return descriptions[service];
};

const Home = () => {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section gradient-bg">
        <div className="hero-content">
          <h1 className="title animate-fade-in">
            <span className="primary-text">
              Elite Developers, Exceptional Ethics
            </span>
            <br />
            <span className="secondary-text">
              <span className="tech-highlight">React Native</span> for Mobile,{' '}
              <span className="tech-highlight">React.js</span> &{' '}
              <span className="tech-highlight">Laravel</span> for Web
            </span>
          </h1>
          <a 
            className="cta-button glow-effect" 
            href="https://www.linkedin.com/in/aamitmit/"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section glass-morphism">
        <div className="about-content">
          <h2 className="section-title text-center">
            <span className="highlight-text">Armsuntech</span> Excellence
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p className="lead-text">
                Beyond Code, We Create Digital Masterpieces
              </p>
              <p className="description-text">
                We transform businesses through innovative software solutions, 
                combining technical expertise with unwavering commitment to 
                excellence. Our global team delivers scalable, secure, and 
                future-ready applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 className="section-title text-center">
            <span className="highlight-text">Our</span> Services
          </h2>
          <div className="services-grid">
            {[
              {
                title: 'Mobile Development',
                icon: '📱',
                tech: 'React Native', 
                description: 'Native & cross-platform apps with React Native, delivering seamless iOS & Android experiences.'
              },
              {
                title: 'Web Development',
                icon: '🌐',
                tech: 'React.js + Laravel',
                description: 'Modern web applications using React.js, backed by robust Laravel architecture.'
              },
              {
                title: 'API Integration', 
                icon: '🔄',
                tech: 'RESTful & GraphQL',
                description: 'Seamless API development and third-party integrations for enhanced functionality.'
              }
            ].map((service) => (
              <div key={service.title} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
                <div className="tech-tag">{service.tech}</div>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="clients-section glass-morphism">
        <h2 className="section-title">Trusted By Industry Leaders</h2>
        <div className="client-grid animate-cards">
          {portfolioItems.map((item) => (
            <div key={item.client} className="client-card hover-lift">
              <img 
                src={item.logo}
                alt={item.client}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Ready to Build Something Amazing?</h2>
        <p>Let's discuss how we can help achieve your digital transformation goals.</p>
        <div className="contact-buttons">
          <a 
            className="cta-button"
            href="https://www.linkedin.com/in/aamitmit/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a 
            className="cta-button secondary"
            href="mailto:contact@armsuntech.com"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Armsuntech. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
