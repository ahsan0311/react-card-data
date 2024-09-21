import "./card.css"
import { useNavigate } from "react-router-dom"
const Profile = ({data}) => {
    const {name,profession,profileImage,id} = data
    const navigate = useNavigate();
  return (
      <div className="inner_card">
        <img src={profileImage} alt="" />
        <h2>{name}</h2>
        <h3>{profession}</h3>
        <button onClick={()=>navigate(`/Card/${id}`)}>View Profile</button>
      </div>
    
  )
}

export default Profile 
