import React from 'react';
import { useState, useContext, useId } from 'react';
import { ThemeContext } from './Theme';
import avatar from './assets/eli-avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './reset.css';
import './App.css';
import javascript_logo from './assets/logos/js.png';
import typescript_logo from './assets/logos/typescript.png';
import react_logo from './assets/logos/react.png';
import css_logo from './assets/logos/css-3.png';
import html_logo from './assets/logos/html.png';
import node_logo from './assets/logos/node.png';
import vite_logo from './assets/logos/vite.png';
import git_logo from './assets/logos/git.png';
import github_logo from './assets/logos/node.png';
import gitlab_logo from './assets/logos/gitlab.png';
import figma_logo from './assets/logos/figma.png';
import java_logo from './assets/logos/java.png';
import mysql_logo from './assets/logos/mysql.png';
import visualstudiocode_logo from './assets/logos/visualstudiocode.png';
import aws_logo from './assets/logos/aws.png';
import docker_logo from './assets/logos/docker.png';
import AcademicTrainingTitle from "./components/AcademicTraining/AcademicTrainingTitle"
import AcademicTrainingDetail from './components/AcademicTraining/AcademicTrainingDetail';
import Slider from "./components/Carousel/Slider";
import Contact from './components/Contact/Contact';

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const ACADEMIC_KEYS = Object.freeze({
    ORACLE_ALURA: "ORACLE_ALURA",
    MELI: "MELI",
    UECI: "ECI"
  })

  const [
    selectedAcademicId,
    setSelectedAcademicId
  ] = useState(ACADEMIC_KEYS.ORACLE_ALURA)

  const academicTitles = [
    {
      label: "Oracle - Alura",
      key: ACADEMIC_KEYS.ORACLE_ALURA
    },
    {
      label: "Mercado Libre - Digital House - GLobant",
      key: ACADEMIC_KEYS.MELI
    },
    {
      label: "Universidad Escuela Colombiana de Ingeniería Julio Garavito",
      key: ACADEMIC_KEYS.UECI
    }
  ]

  const academicDetails = [
    {
      id: ACADEMIC_KEYS.ORACLE_ALURA,
      description: "ONE - Oracle Next Education",
      dates: "2024 - Present",
      items: ["poner", "cosas", "aqui", ""],
    },
    {
      id: ACADEMIC_KEYS.MELI,
      description: "Certified Tech Developer",
      dates: "2021 - 2023",
      items: ["Frontend web design integrating HTML, CSS, Javascript, Node JS and React.", "Bases and fundamentals of backend development in Java, as well as bases and fundamentals of Docker, containers, AWS and cloud management and recognition of the command console.", "Creation of web user interfaces, applying design systems focused on user experience and the development of solutions and products.", "Design, structuring, manipulation and query of data in relational databases, through the use of SQL."],
    },
    {
      id: ACADEMIC_KEYS.UECI,
      description: "Electrical Engineering Professional",
      dates: "2017 - 2022",
      items: ["Active participation in a research and analysis group, contributing to the development of two specific documents within the electrical and statistical academic field with data analysis and manipulation.", "cosas", "aquí", ""],
    }
  ]

  const handleClickAcademicTitle = (laKey) => {
    setSelectedAcademicId(laKey)
  }


  return (
    <div data-theme={theme} className='global-container'>
      <div id='root' className='navbar-container'>
        <p className='highlighted-text' onClick={() => window.location.replace("/#root")}>Eli.</p>
        <div className='navbar-options-container'>
          <p className='navbar-options' onClick={() => window.location.replace("/#about-me")}>About me</p>
          <p className='navbar-options' onClick={() => window.location.replace("/#academic-training")}>Academic Training</p>
          <p className='navbar-options' onClick={() => window.location.replace("/#my-projects")}>Projects</p>
        </div>
        <button onClick={() => window.location.replace("/#contact-me")} className='button-style'>Let's Talk</button>
        <div className="header-toggle-buttons">
          <button className='button-style' onClick={() => toggleTheme()}>
            {theme === 'dark-theme' ?
              <FontAwesomeIcon icon={faSun} />
              :
              <FontAwesomeIcon icon={faMoon} />
            }
          </button>
        </div>
      </div>

      <div id='home' className='container-presentation'>
        <div className='presentation'>
          <div className='name-presentation'>
            <p>Hey! I'm Eli. </p>
            <FontAwesomeIcon icon={faHandPeace} />
          </div>
          <h1 className='highlighted-text main-title'>FRONT<span className='unhiglighted-text'>END DEVELOPER</span></h1>
          <p>I'm a frontend developer and electrical engineer. I can help you to construct apps in React, Javascript, Typescript and web tools.</p>
          <div className='btn-presentation'>
            <button onClick={() => window.location.replace("/#contact-me")} className='button-style'>Get in Touch</button>
            <button onClick={() => window.location.replace("/#my-projects")} className='button-style'>Browse Projects</button>
          </div>
        </div>
        <div>
          <img src={avatar} className='avatar' alt='Avatar Eli'></img>
        </div>
      </div>

      <section id='about-me' className='style-section'>
        <p className='name-section'>About me<span className='highlighted-text'>.</span></p>
        <div className='description-aboutme-section'>
          <p>I am a professional in electrical engineer. In 2021 I started my studies in web development. I studied the "Professional Developer" course at Digital House for three years in a program carried out together with Mercado Libre and Globant.</p>
          <p>Currently I am studying the program ONE did by Oracle and Alura.</p>
        </div>

        <p className='titles-about-me'>My Stack<span className='highlighted-text'>.</span></p>
        <section className='big-container-stack'>
          <div className='container-stack'>
            <div className='card-stack'>
              <img src={javascript_logo} className='logo-stack' alt='Logo Javascript'></img>
              <p>Javascript</p>
            </div>
            <div className='card-stack'>
              <img src={typescript_logo} className='logo-stack' alt='Logo Typescript'></img>
              <p>Javascript</p>
            </div>
            <div className='card-stack'>
              <img src={react_logo} className='logo-stack' alt='Logo React'></img>
              <p>React</p>
            </div>
            <div className='card-stack'>
              <img src={css_logo} className='logo-stack' alt='Logo CSS'></img>
              <p>CSS</p>
            </div>
            <div className='card-stack'>
              <img src={html_logo} className='logo-stack' alt='Logo HTML'></img>
              <p>HTML</p>
            </div>
            <div className='card-stack'>
              <img src={node_logo} className='logo-stack' alt='Logo NodeJS'></img>
              <p>NodeJS</p>
            </div>
            <div className='card-stack'>
              <img src={vite_logo} className='logo-stack' alt='Logo Vite'></img>
              <p>Vite</p>
            </div>
            <div className='card-stack'>
              <img src={git_logo} className='logo-stack' alt='Logo Git'></img>
              <p>Git</p>
            </div>
            <div className='card-stack'>
              <img src={github_logo} className='logo-stack' alt='Logo GitHub'></img>
              <p>GitHub</p>
            </div>
            <div className='card-stack'>
              <img src={gitlab_logo} className='logo-stack' alt='Logo GitLab'></img>
              <p>GitLab</p>
            </div>
            <div className='card-stack'>
              <img src={figma_logo} className='logo-stack' alt='Logo Figma'></img>
              <p>Figma</p>
            </div>
            <div className='card-stack'>
              <img src={java_logo} className='logo-stack' alt='Logo Java'></img>
              <p>Java</p>
            </div>
            <div className='card-stack'>
              <img src={mysql_logo} className='logo-stack' alt='Logo MySQL'></img>
              <p>MySQL</p>
            </div>
            <div className='card-stack'>
              <img src={visualstudiocode_logo} className='logo-stack' alt='Logo Visual Studio Code'></img>
              <p>Visual Studio Code</p>
            </div>
            <div className='card-stack'>
              <img src={aws_logo} className='logo-stack' alt='Logo AWS Foundation'></img>
              <p>AWS Foundation</p>
            </div>
            <div className='card-stack'>
              <img src={docker_logo} className='logo-stack' alt='Logo Docker'></img>
              <p>Docker</p>
            </div>
          </div>
        </section>

        <div className='container-subsections-about-me'>
          <section className='subsection-about-me'>
            <p className='titles-about-me'>Soft Skills<span className='highlighted-text'>.</span></p>
            <ul className='list-about-me'>
              <li>Solution Orientation.</li>
              <li>Teamwork.</li>
              <li>Assertive Communication.</li>
              <li>Adaptation.</li>
              <li>Resource Allocation.</li>
              <li>Customer Management.</li>
            </ul>
          </section>

          <section className='subsection-about-me'>
            <p className='titles-about-me'>Hobbies<span className='highlighted-text'>.</span></p>
            <ul className='list-about-me'>
              <li>Go to the gym</li>
              <li>Ride the bicycle</li>
              <li>Run</li>
              <li>Watch tv</li>
            </ul>
          </section>
        </div>
      </section>

      <section id='academic-training' className='style-section'>
        <div className='info'>
          <FontAwesomeIcon icon={faUserGraduate} className='name-section' />
          <p className='name-section'>Academic Training<span className='highlighted-text'>.</span></p>
        </div>
        <div className='academic-training-section'>
          <ul className='academic-training-titles'>
            {
              academicTitles.map(titleObj => (
                <div key={useId()} onClick={() => handleClickAcademicTitle(titleObj.key)} >
                  <AcademicTrainingTitle
                    title={titleObj.label}
                  />
                </div>
              ))
            }
          </ul>
          <div className='container-detail-academic-training'>
            {
              academicDetails.map(detail => (
                detail.id === selectedAcademicId && (
                  <AcademicTrainingDetail
                    title={detail.description}
                    dateRange={detail.dates}
                    listItems={detail.items}
                    key={useId()}
                  />
                )
              ))
            }
          </div>
        </div>
      </section>

      <section id='my-projects' className='style-section'>
        <p className='name-section'>My Projects<span className='highlighted-text'>.</span></p>
        <Slider />
      </section>

      <section className='style-section'>
        <div className='container-contact-me'>
          <p className='title-contact-me'>Do you want to work together and create amazing products with me?</p>

            <Contact />

          {/*<form className='container-form-contact-me'>
            <label className='input-form-contact-me' htmlFor='name'></label>
            <input id='name' name='name' type='text' placeholder='Name Lastname' />

            <label className='input-form-contact-me' htmlFor='email'></label>
            <input id='email' name='email' type='email' placeholder='email@company.com' />

            <label className='input-form-contact-me' htmlFor='subject'></label>
            <input id='subject' name='subject' type='text' placeholder='Subject' />

            <label className='input-form-contact-me' htmlFor='message'></label>
            <input id='message' name='message' type='text' placeholder='Message' />
          </form>

          <div id='contact-me' className="container-btn-contact-me">
            <button>Send Email</button>
          </div>*/}

        </div>
      </section>

      <footer>
        <p>Desarrollado por Eli.</p>
        <a style={{ display: "table-cell" }} href="https://www.linkedin.com/in/eliana-murillo-0a1288202/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a style={{ display: "table-cell" }} href="https://github.com/ElianaMurillo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      </footer>

    </div>
  )
}

export default App
