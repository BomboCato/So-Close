import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

import './index.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'features') {
      const section = document.getElementById('features');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 200); // attendre que la page soit bien montée
      }
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(45, 90, 39, 0.98)';
      } else {
        nav.style.background = 'rgba(45, 90, 39, 0.95)';
      }
    });

    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <Features />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
