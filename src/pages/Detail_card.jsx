import { useParams } from "react-router-dom"
import { card_data} from "../utils/card"
import "./data.css"

const Detail_card = () => {
  const { id} = useParams();
  console.log(id)

  const find_details = card_data.find((item) => {
    return item.id == (id); 
  });
  
  console.log(find_details);
 
  const {name, profession, description, background, profileImage, profileLink} = find_details
    
  

  return (

    <div className="details" style={{backgroundImage:`url(${background})`}} >
      <div className="inner_details">
        <div className="img">
          <img src={profileImage} alt="" />
        </div>
        <div className="text">
          <h2>{name}</h2>
          <h3>{profession}</h3>
          <p>{description}</p>
          <a href={profileLink} target="_blank" rel="noopener noreferrer">Visit Profile</a>
        </div>
      </div>
    </div>

  )
}


export default Detail_card
