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

const achievementStats = [
  {
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully completed projects across various industries"
  },
  {
    number: "50+",
    label: "Global Clients",
    description: "Trusted by businesses worldwide for digital solutions including Fortune 500 companies ( Macy's, CBS News, AccuWeather, etc.)"
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description: "Maintaining excellence in customer satisfaction"
  }
];

// Service data configuration
const SERVICES = [
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    icon: '📱',
    tech: 'React Native',
    description: 'Native & cross-platform apps with React Native, delivering seamless iOS & Android experiences.',
    capabilities: [
      'Cross-platform development',
      'Native iOS and Android apps',
      'Performance optimization',
      'Push notifications',
      'Offline functionality'
    ],
    techStack: ['React Native', 'Redux', 'Native Modules', 'Firebase']
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: '🌐',
    tech: 'React.js + Laravel',
    description: 'Modern web applications using React.js, backed by robust Laravel architecture.',
    capabilities: [
      'Single Page Applications',
      'Progressive Web Apps',
      'Server-side rendering',
      'Database design',
      'API development'
    ],
    techStack: ['React.js', 'Laravel', 'MySQL', 'Redis', 'AWS']
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    icon: '🔄',
    tech: 'RESTful & GraphQL',
    description: 'Seamless API development and third-party integrations for enhanced functionality.',
    capabilities: [
      'RESTful API design',
      'GraphQL implementation',
      'Third-party integrations',
      'API documentation',
      'Security & authentication'
    ],
    techStack: ['GraphQL', 'REST', 'OAuth', 'Swagger', 'Postman']
  }
];

// Service Card Component
const ServiceCard = ({ service }) => {
  const { icon, title, tech, description, capabilities, techStack } = service;
  
  return (
    <div className="service-card glass-morphism">
      <div className="service-header">
        <span className="service-icon">{icon}</span>
        <h3 className="service-title">{title}</h3>
        <div className="tech-tag">{tech}</div>
      </div>
      
      <div className="service-content">
        <p className="service-description">{description}</p>
        
        <div className="service-capabilities">
          <h4>Key Capabilities:</h4>
          <ul>
            {capabilities.map((capability, index) => (
              <li key={index}>{capability}</li>
            ))}
          </ul>
        </div>
        
        <div className="service-tech-stack">
          <h4>Tech Stack:</h4>
          <div className="tech-tags">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                • {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title text-center">
          <span className="highlight-text">Our</span> Services
        </h2>
        
        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="page-content">
      <Header />
      {/* Hero Section */}
      <section className="hero-section gradient-bg" style={{ marginBottom: '4rem' }}>
        <div className="hero-content" style={{ 
          paddingTop: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem'
        }}>
          <h1 className="title animate-fade-in" style={{ margin: 20 }}>
            <span className="primary-text" style={{ 
              fontSize: '2.4rem',
              background: 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Elite developers with uncompromising ethics
            </span>
            <span className="secondary-text" style={{
              fontSize: '1.6rem',
              color: 'rgba(255, 255, 255, 0.85)',
              display: 'block',
              marginBottom: '1rem',
              lineHeight: '1.4'
            }}>
              trusted by startups and leaders like AMC, CBS, Macy's,
              BBC America, and AccuWeather
            </span>
            <span className="tech-text" style={{
              fontSize: '1.8rem',
              background: 'linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block'
            }}>
              We deliver top-tier solutions in{' '}
              <span className="tech-highlight" style={{
                color: '#FFFFFF',
                WebkitTextFillColor: '#FFFFFF',
                textShadow: '0 0 10px rgba(97, 219, 251, 0.5)'
              }}>React Native</span>,{' '}
              <span className="tech-highlight" style={{
                color: '#FFFFFF',
                WebkitTextFillColor: '#FFFFFF',
                textShadow: '0 0 10px rgba(0, 216, 255, 0.5)'
              }}>React.js</span>, and{' '}
              <span className="tech-highlight" style={{
                color: '#FFFFFF',
                WebkitTextFillColor: '#FFFFFF',
                textShadow: '0 0 10px rgba(255, 45, 32, 0.5)'
              }}>Laravel</span>
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
      <section className="about-section glass-morphism" style={{ marginBottom: '4rem', padding: '4rem 2rem' }}>
        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ 
              fontSize: '2.8rem',
              marginBottom: '1rem'
            }}>
              <span className="highlight-text">Armsuntech</span> Innovation
            </h2>
            <div className="section-divider" style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #90caf9, #1976d2)',
              margin: '1.5rem auto',
              borderRadius: '2px'
            }} />
          </div>

          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div className="about-text">
              <p className="lead-text" style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '1.5rem',
                lineHeight: '1.4'
              }}>
                Building Mobile Apps, Websites & AI Solutions
              </p>
              <p className="description-text" style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem'
              }}>
                We specialize in building cutting-edge mobile and web applications 
                enhanced by advanced AI capabilities. From ChatGPT integration to 
                custom machine learning models, our solutions leverage the latest 
                in artificial intelligence to deliver smarter, more intuitive 
                experiences.
              </p>
              <div className="tech-stack" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '2rem'
              }}>
                {['React Native', 'React.js', 'OpenAI', 'Gemini', 'Laravel', 'MySQL', 'AWS', 'Firebase', 'Postman', 'Swagger', 'OAuth', 'GraphQL', 'REST', 'Push Notifications', 'Offline Functionality', 'Performance Optimization', 'Server-Side Rendering', 'API Development', 'Database Design', 'Third-Party Integrations', 'API Documentation', 'Security & Authentication'].map((tech, index) => (
                  <span key={index} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: '#90caf9',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-visual" style={{
              position: 'relative',
              padding: '2rem'
            }}>
              <div className="visual-container" style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="icon-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '2rem',
                  textAlign: 'center'
                }}>
                  {[
                    { icon: '🤖', label: 'AI Integration' },
                    { icon: '📱', label: 'Mobile Apps' },
                    { icon: '🌐', label: 'Web Apps' },
                    { icon: '🔄', label: 'API Services' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      padding: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '15px',
                      transition: 'transform 0.3s ease'
                    }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                      <div style={{ color: '#ffffff', fontSize: '0.9rem' }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Achievement Counter Section */}
      <section className="counter-section" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 className="section-title">
            <span className="highlight-text">Our</span> Impact
          </h2>
          <div className="counter-grid">
            {achievementStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="counter-card glass-morphism"
                style={{ margin: '1rem' }}
              >
                <div className="stat-number">{stat.number}</div>
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section glass-morphism" style={{
        margin: '4rem auto',
        padding: '4rem 2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        maxWidth: '1200px',
        borderRadius: '20px'
      }}>
        <div className="section-container" style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          <h2 className="cta-title" style={{
            fontSize: '2.8rem',
            color: '#ffffff',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>Ready to Build Something Amazing?</h2>
          <p className="cta-subtitle" style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            lineHeight: '1.6'
          }}>
            Let's discuss how we can help achieve your digital transformation goals.
          </p>
          <div className="cta-buttons" style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a 
              href="https://www.linkedin.com/in/aamitmit/"
              target="_blank"
              rel="noreferrer"
              className="glow-effect"
              style={{
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a 
              href="mailto:amit@armsuntech.com?subject=Business%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project."
              className="glow-effect"
              style={{
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer glass-morphism" style={{
        padding: '2rem',
        marginTop: '4rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="section-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <p className="copyright" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            margin: 0
          }}>
            © {new Date().getFullYear()} Armsuntech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
