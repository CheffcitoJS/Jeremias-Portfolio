import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ejemplo De Proyecto",
      description: "Branding",
      imgUrl: projImg1,
    },
    {
      title: "Ejemplo De Proyecto",
      description: "Branding",
      imgUrl: projImg2,
    },
    {
      title: "Ejemplo De Proyecto",
      description: "Branding",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Descubre cómo mis estrategias y diseños han transformado marcas, creando conexiones auténticas y duraderas con sus audiencias.</p>
                  <Row>
                    {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })}
                  </Row>
                  <br />
                  <br /> 
                  <br />
                  <br />
                  <br /> 
                  <br />
                  
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
