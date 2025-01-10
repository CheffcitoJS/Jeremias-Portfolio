import React from "react";
import "../styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faBullhorn, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      icon: faPenNib,
      title: "Branding",
      description: "Creamos identidades visuales que conectan con tu público objetivo.",
      solutions: ["Estrategia de marca", "Diseño de logotipo", "Guía de estilo", "Material de marketing", "Consultoría de marca"],
      details: "Nuestro equipo de expertos en branding trabaja para crear una identidad visual única y coherente que refleje los valores y la misión de tu empresa. Nos aseguramos de que cada elemento de tu marca esté alineado con tu visión y objetivos a largo plazo."
    },
    {
      icon: faBullhorn,
      title: "Marketing",
      description: "Potenciamos tu presencia digital con estrategias efectivas.",
      solutions: ["Gestión de redes sociales", "SEO y SEM", "Email marketing", "Publicidad digital", "Análisis de datos"],
      details: "Desarrollamos estrategias de marketing personalizadas para aumentar tu visibilidad online y atraer a más clientes potenciales. Utilizamos las últimas herramientas y técnicas para asegurarnos de que tu mensaje llegue a la audiencia correcta en el momento adecuado."
    },
    {
      icon: faLaptopCode,
      title: "Diseño Web",
      description: "Desarrollamos sitios web funcionales y atractivos.",
      solutions: ["Diseño responsivo", "Optimización para SEO", "Mantenimiento web", "Desarrollo de e-commerce", "Integración de API"],
      details: "Creamos sitios web que no solo son visualmente atractivos, sino también optimizados para ofrecer la mejor experiencia de usuario. Nos enfocamos en la funcionalidad, la velocidad y la seguridad para garantizar que tu sitio web cumpla con los estándares más altos."
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Mis Servicios</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-solutions">
              {service.solutions.map((solution, i) => (
                <li key={i}>{solution}</li>
              ))}
            </ul>
            <p className="service-details">{service.details}</p>
            <button className="service-button">Contratar</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;