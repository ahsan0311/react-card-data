import { card_data  } from "../utils/card";
import Profile from "../components/Profile";
import "./data.css"

const Card = () => {
  return (
    <div className="card">
      {
        card_data.map((item,id)=>{
          return(
            <Profile key={id} data={item}/>
          )
        })
      }
    </div>
  )
}

export default Card
