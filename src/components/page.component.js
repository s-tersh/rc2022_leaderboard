import React, { useEffect, useState } from "react"
import { ReactComponent as LeaderShield } from '../assets/shield.svg'
import List from '../components/list.component'
import { motion } from "framer-motion"

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
                <motion.div initial={{'scale': 0, 'opacity': 0}} animate={{'scale': 1, 'opacity': 1}} style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'}}>
                    <p className="leader-status">Leader</p>
                    <div style={{'position': 'relative', 'display': 'flex', 'justifyContent': 'center'}}>
                        <img alt="leader-avatar" src={leader.avatar || `${process.env.PUBLIC_URL}/images/avatar.svg`} style={{'position': 'absolute', 'width': 130, 'height': 130, 'bottom': 65, 'border': '15px solid var(--color-leader)', 'borderRadius': '50%', 'objectFit': 'cover'}}/>
                        <LeaderShield fill="var(--color-leader)" width={250} height={250} />
                    </div>
                    <p className="leader-club">{leader.total} баллов</p>
                    <p className="leader-fullname">{leader.name} {leader.lastname}</p>
                    <p className="leader-club">{leader.city} {leader.club ? `, «${leader.club}»` : ''}</p>
                    <p className="leader-events">{leader.events[0].res_1} кг / {leader.events[0].res_2} кг</p>
                    <p className="leader-events">{leader.events[1].res_1} / {leader.events[1].res_2} повторений</p>
                    <p className="leader-events">{leader.events[2].res_1} повторений</p>
                    <p className="leader-events">{leader.events[3].res_1} / {leader.events[3].res_2} повторений</p>
                </motion.div>
                <List leader athletes={data.slice(1)} />
            </>
            :
            <List athletes={data} />
        }
    </>
}

export default Page