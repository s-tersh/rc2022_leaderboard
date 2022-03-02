import { useState } from "react"

function MainScreen() {
    
    const buttons = ["Show Girls", "Show Boys"]
    const avatars = ["/ava_ph_b.jpg", "/ava_ph_g.jpg"]
    const[gender, setGender] = useState(0)

    const athletes = [
        [
        {id: "_m0", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 490},
        {id: "_m1", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 495},
        {id: "_m2", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 415},
        {id: "_m3", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 394},
        {id: "_m4", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 372},
        {id: "_m5", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 490},
        {id: "_m6", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 495},
        {id: "_m7", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 415},
        {id: "_m8", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 394},
        {id: "_m9", name: "John", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 372},
        ],
        [
        {id: "_w0", name: "Jane", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 495},
        {id: "_w1", name: "Jane", lastname: "Doe", club: "Fitness GYM", avatar: "", points: 465},
        ]
    ]

    function changeGender() {
        gender === 0 ? setGender(1) : setGender(0)
    }

    function onImageError(e) {
        e.target.onerror = null;
        e.target.src = avatars.at(gender)
    }

    return <div className="mainscreen-container screen-container">
        <h3>Rookie Challenge 2022</h3>
        <img className="avatar leader-avatar" alt="leader_avatar" src={athletes.at(gender).at(0).avatar} onError={onImageError} />
        <p className="leader-status">Leader</p>
        <p className="leader-fullname">{athletes.at(gender).at(0).name} {athletes.at(gender).at(0).lastname}</p>
        <p className="leader-club">{athletes.at(gender).at(0).club}</p>

        <div className="list">
            {athletes.at(gender).sort((a, b) => (a.points > b.points) ? -1 : 1).slice(1, athletes.at(gender).length).map(athlete => {
                const place = athletes.at(gender).indexOf(athlete)
                return <div key={athlete.id} className="listitem-container">
                    <div className="listitem-content">
                        <p className="listitem-place">#{place + 1}</p>
                        <img className="listitem-avatar" alt="athlete_avatar" src={athlete.avatar} onError={onImageError}/>
                        <div className="listitem-subdata">
                            <p className="listitem-fullname">{athlete.name} {athlete.lastname}</p>
                            <p className="listitem-club">{athlete.club}</p>
                        </div>
                        <span className="listitem-points-container">
                            <p>{athlete.points}</p>
                            <p>points</p>
                        </span>
                    </div>
                    <p className="listitem-repeat-place">{place + 1 === 2 ? "SECOND" : place + 1 === 3 ? "THIRD" : place + 1}</p>
                </div>
            })}
        </div>

        <div className="bottombar-container">
            <button className='bottombar-button' onClick={changeGender}>{buttons.at(gender)}</button>
        </div>
    </div>
}

export default MainScreen