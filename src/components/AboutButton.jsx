import React from 'react'

const AboutButton = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
      <>
        <div className="cta">
          <div className="mx-auto">
            <a href="mailto:ashtonkabote@gmail.com?subject=Hello&body=Hi there!">
              <button className="cta-contact">E-mail Me</button>
            </a>
            <button 
                className="cta-portfolio"
                onClick={() => scrollToSection('projects')}
            >
                Portfolio
            </button>
          </div>
        </div>
      </>
    );
};

export default AboutButton