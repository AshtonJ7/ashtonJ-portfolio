import React from 'react'

const HeaderButton = () => {
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
            <button 
                className="cta-about"
                onClick={() => scrollToSection('about')}
            >
                About Me
            </button>
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

export default HeaderButton