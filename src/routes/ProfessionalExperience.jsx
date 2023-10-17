import nirvc from '../img/nirvc.png'
import codeup from '../img/codeup.png'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import cs from '../img/cs.png'
import netmvc from '../img/netmvc.png'
import react from '../img/react.png'

function ProfessionalExperience() {
    return (
      <div className='d-flex flex-row justify-content-center flex-wrap professionalExp py-5'>
        <div className='d-flex flex-row justify-content-center flex-wrap col-md-6 py-5 px-md-5'>
          <div className='col-12 text-center mb-5'>
            <h2 className='display-6'>Technical Experience</h2>
          </div>
          <div className='logo-container'>
            <img alt='codeup_logo' className='logo mx-5 my-2' src={codeup}/>
          </div>
          <div className='logo-container'>
            <img alt='nirvc_logo' className='logo mx-5 my-2' src={nirvc}/>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-center flex-wrap col-md-6 py-5 px-md-5'>
          <div className='col-12 text-center mb-5'>
            <h2 className='display-6'>Technologies</h2>
          </div>
          <div className='logo-container'>
            <img alt='html_logo' className='logo mx-5 my-2' src={html}/>
          </div>
          <div className='logo-container'>
            <img alt='css_logo' className='logo mx-5 my-2' src={css}/>
          </div>
          <div className='logo-container'>
            <img alt='js_logo' className='logo mx-5 my-2' src={js}/>
          </div>
          <div className='logo-container'>
            <img alt='cs_logo' className='logo mx-5 my-2' src={cs}/>
          </div>
          <div className='logo-container'>
            <img alt='netmvc_logo' className='logo mx-5 my-2' src={netmvc}/>
          </div>
          <div className='logo-container'>
            <img alt='netmvc_logo' className='logo mx-5 my-2' src={react}/>
          </div>
        </div>
      </div>
    )
  }

  export default ProfessionalExperience;