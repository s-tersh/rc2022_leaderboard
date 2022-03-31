import React, { useEffect, useState } from "react"
import { ReactComponent as LeaderShield } from '../assets/shield.svg'
import List from '../components/list.component'

const Page = ({data, ...props}) => {

    const [leader, setLeader] = useState(null)

    useEffect(() => {
        var finded = data && data.sort((a, b) => (a.total > b.total) ? -1 : 1).at(0)
        finded && finded.total > 0 ? setLeader(finded) : setLeader(null)
    }, [data])

    return <>  
        {
            leader ?
            <>
                <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'}}>
                    <div style={{'position': 'relative', 'display': 'flex', 'justifyContent': 'center'}}>
                        <img alt="leader-avatar" src={leader.avatar || `${process.env.PUBLIC_URL}/images/avatar.svg`} style={{'position': 'absolute', 'width': 160, 'height': 160, 'bottom': 75, 'border': '20px solid var(--color-leader)', 'borderRadius': '50%', 'objectFit': 'cover'}}/>
                        <LeaderShield fill="var(--color-leader)" />
                    </div>
                    <p className="leader-status">Leader</p>
                    <p className="leader-fullname">{leader.name} {leader.lastname}</p>
                    <p className="leader-club">{leader.city} {leader.club ? `, «${leader.club}»` : ''}</p>
                </div>
                <List leader athletes={data.slice(1)} />
            </>
            :
            <List athletes={data} />
        }
    </>
}

export default Page