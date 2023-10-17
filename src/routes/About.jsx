import mePhoto from '../img/me.jpg'
import ReactTyped from "react-typed";

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

  export default About;