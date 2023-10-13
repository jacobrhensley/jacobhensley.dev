import './App.css';
import mePhoto from './img/me.jpg'
import nirvc from './img/nirvc.png'
import codeup from './img/codeup.png'
import html from './img/html.png'
import css from './img/css.png'
import js from './img/js.png'
import cs from './img/cs.png'
import netmvc from './img/netmvc.png'
import react from './img/react.png'
import ReactTyped from "react-typed";

function Title() {
  return (
    <div className='jumbotron text-center d-flex flex-column justify-content-center align-items-center'>
      <div className='w-md-50 border rounded-4 p-3 text-center m-4'>
        <p>est. 1995</p>
        <hr/>
        <h1 className='title-text display-4'>Jacob Hensley</h1>
        <hr/>
        <p>Software Engineer</p>
        <p>Dallas, TX</p>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className='container d-flex flex-row justify-content-center flex-wrap p-5'>
      <div className='col-12 text-center mb-5'>
        <h2 className='display-4'>A little about me</h2>
      </div>
      <div className='col-md-5 col-12 d-flex flex-row flex-column justify-content-center align-items-center'>
        <img alt='me_drums' className='rounded-5' width={250} height={250} src={mePhoto}/>
      </div>
      <div className='col-md-5 col-12 d-flex flex-column justify-content-center ps-md-5 pt-5'>
        <div className='text-center text-md-start'>
          <h3>Who am I?</h3>
          <p>
            I am{" "}
            <ReactTyped
            strings={["a Dad", "a Husband", "a Software Engineer", "a Worship Drummer", "a Camping Enthusiast", "a Gameboy Nerd", "an AV Dweeb"]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

function ProfessionalExperience() {
  return (
    <div className='d-flex flex-row justify-content-center flex-wrap professionalExp py-5'>
      <div className='d-flex flex-row justify-content-center flex-wrap col-md-6 py-5 px-md-5'>
        <div className='col-12 text-center mb-5border'>
          <h2 className='display-6'>Technical Experience</h2>
        </div>
        <img alt='codeup_logo' className='logo mx-5 my-2' src={codeup}/>
        <img alt='nirvc_logo' className='logo mx-5 my-2' src={nirvc}/>
      </div>
      <div className='d-flex flex-row justify-content-center flex-wrap col-md-6 py-5 px-md-5'>
        <div className='col-12 text-center mb-5border'>
          <h2 className='display-6'>Technologies</h2>
        </div>
        <img alt='html_logo' className='logo mx-5 my-2' src={html}/>
        <img alt='css_logo' className='logo mx-5 my-2' src={css}/>
        <img alt='js_logo' className='logo mx-5 my-2' src={js}/>
        <img alt='cs_logo' className='logo mx-5 my-2' src={cs}/>
        <img alt='netmvc_logo' className='logo mx-5 my-2' src={netmvc}/>
        <img alt='netmvc_logo' className='logo mx-5 my-2' src={react}/>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
        <Title/>
        <About/>
        <ProfessionalExperience/>
    </>
  )
}

export default App;
