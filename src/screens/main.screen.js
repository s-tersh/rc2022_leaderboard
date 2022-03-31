import React, { useEffect, useMemo, useState } from "react"
import Firebase from "../firebase"
import Loader from '../components/loader.component'
import Page from "../components/page.component"

function MainScreen() {
    
    const buttons = ["Смотреть результаты девушек", "Смотреть результаты парней"]
    const [genderID, setGenderID] = useState(0)
    const [athletes, setAthletes] = useState(null)
    const app = useMemo(() => new Firebase(), []) 

    useEffect(() => {
        app.getAthletes((data) => setAthletes((data.map((item) => item.map((athlete_data) => JSON.parse(athlete_data))))))      
    }, [app])

    useEffect(() => {
        var finded = athletes && athletes.at(genderID).sort((a, b) => (a.total > b.total) ? -1 : 1).at(0)
        finded && finded.total > 0 ? setLeader(finded) : setLeader(null)
    }, [athletes, genderID])

    function changeGender() {
        genderID === 0 ? setGenderID(1) : setGenderID(0)
    }

    return <div className="mainscreen-container screen-container">
        <div style={{'minHeight': '100%', 'maxWidth': 600, 'margin': 'auto'}}>
            <h3 style={{'color': 'var(--color-text)'}}>Rookie Challenge 2022</h3>
            {
                athletes ?
                <div>
                    {
                        genderID === 0 && <Page data={athletes.at(0)} />
                    }
                    {
                        genderID === 1 && <Page data={athletes.at(1)} />
                    }
                </div>
                :
                <Loader title="Данные обновляются" />
            }
        </div>
        <div className="bottombar-container">
            <button className='bottombar-button' onClick={changeGender}>{buttons.at(genderID)}</button>
        </div>
    </div>
}

export default MainScreen