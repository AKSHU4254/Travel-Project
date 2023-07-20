import "./TourCardStyle.css";
import { Link } from "react-router-dom";


const TourCard = (props) => {

  
  return (
    <div className='tour-card'>
    <img
        src={`http://localhost:4000/${props.productImg}`}
        alt="AboutImage"
      />
    <h3 className='tour-title'>{props.details}</h3>
    <div className='tour-details'>
    <p>${props.price}/Per Person</p>
    <div className='pro-btns'>
    <Link to={props.view} className="btn">Details</Link>
    <Link to="url.com" className="btn">Booking</Link>
    </div>
    </div>
    
    
    </div>
  )
}

export default TourCard