import { useEffect, useState } from "react"
import Firebase from "../firebase"
import Loader from '../components/loader.component'

function MainScreen() {
    
    const buttons = ["Show Girls", "Show Boys"]
    const avatars = ["/ava_ph_b.jpg", "/ava_ph_g.jpg"]
    const [genderID, setGenderID] = useState(0)
    const [athletes, setAthletes] = useState(null)
    const app = new Firebase() 

    useEffect(() => {
        app.getAthletes((data) => setAthletes(data.map((item) => item.map((athlete_data) => JSON.parse(athlete_data)))))
    }, [])

    function changeGender() {
        genderID === 0 ? setGenderID(1) : setGenderID(0)
    }

    return <div className="mainscreen-container screen-container">
        <h3>Rookie Challenge 2022</h3>
        {athletes ?
            
            <div className="list">
                {athletes.at(genderID).sort((a, b) => (a.total > b.total) ? -1 : 1).map(athlete => {
                    const index = athletes.at(genderID).indexOf(athlete)
                    const hasLeader = athletes.at(genderID).filter((athlete) => athlete.total > 0).length > 0

                    return <div key={index} className="listitem-container">
                        <div className="listitem-content">
                            {
                                hasLeader ?
                                <p className="listitem-place">#{athlete.place}</p>
                                :
                                <p className="listitem-place">#{index + 1}</p>
                            }
                            <img className="listitem-avatar" alt="athlete_avatar" src={athlete.avatar !== "" ? athlete.avatar : avatars.at(genderID)} />
                            <div className="listitem-subdata">
                                <p className="listitem-fullname">{athlete.name} {athlete.lastname}</p>
                                <p className="listitem-club">{athlete.club !== "" ? `«${athlete.club}», ` : ""}{athlete.city}</p>
                            </div>
                            {hasLeader &&
                                <span className="listitem-points-container">
                                    <p>{athlete.total}</p>
                                    <p>points</p>
                                </span>
                            }
                        </div>
                        {
                            hasLeader ?
                            <p className="listitem-repeat-place">{athlete.place === 1 ? "LEADER" : athlete.place === 2 ? "SECOND" : athlete.place === 3 ? "THIRD" : athlete.place}</p>
                            :
                            <p className="listitem-repeat-place">{index + 1}</p>
                        }
                    </div>
                })}
            </div>
            :
            <Loader title="Данные обновляются" />
        }
        
        
        
        {/* {athletes &&
            <div>
                <img className="avatar leader-avatar" alt="leader_avatar" src={athletes.at(genderID).at(0).avatar !== "" ? athletes.at(genderID).at(0).avatar : avatars.at(genderID)} />
                <p className="leader-status">Leader</p>
                <p className="leader-fullname">{athletes.at(genderID).at(0).name} {athletes.at(0).lastname}</p>
                <p className="leader-club">{athletes.at(genderID).at(0).club}</p>
            </div>
        } */}

       

        <div className="bottombar-container">
            <button className='bottombar-button' onClick={changeGender}>{buttons.at(genderID)}</button>
        </div>
    </div>
}

export default MainScreen