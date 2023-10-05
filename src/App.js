import './App.css';
import mePhoto from './img/me.jpg'
import ReactTyped from "react-typed";

function Title() {
  return (
    <div className='jumbotron text-center d-flex flex-column justify-content-center align-items-center'>
      <div className='w-50 border rounded-4 p-3 text-center'>
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
    <div className='container d-flex flex-row flex-wrap p-5'>
      <div className='col-12 text-center mb-5'>
        <h2 className='display-4'>A little about me</h2>
      </div>
        <div className='col-6 d-flex flex-row justify-content-center'>
          <img className='rounded-5' width={250} height={250} src={mePhoto}/>
        </div>
        <div className='col-6'>
          <h3>Who am I?</h3>
          <p>
            I am{" "}
            <ReactTyped
            strings={["a DAD", "a Husband", "a Software Engineer", "a Worship Drummer", "a Camping Enthusiast", "a Gameboy Nerd", "an AV Dweeb", "a curious mind"]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
            />
          </p>
        </div>
    </div>
  )
}

function App() {
  return (
    <>
        <Title/>
        <About/>
    </>
  )
}

export default App;
