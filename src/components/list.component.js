import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"



const List = ({ athletes, leader, ...props }) => {

    const [detailed, setDetailed] = useState([])
    
    useEffect(() => {
        setDetailed([])
    }, [athletes])

    function toggleDetailed(value) {
        detailed.includes(value) ? setDetailed(detailed.filter((item) => item !== value)) : setDetailed([value, ...detailed])
    }

    const list = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delayedChildren: 0.2,
                staggerChildren: 0.05
            }
        }
    }

    const item = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }

    return <motion.div variants={list} initial='hidden' animate='visible' className="list">
        {athletes.sort((a, b) => (a.total > b.total) ? -1 : 1).map((athlete, index) => {
            return <motion.div variants={item} key={index} onClick={() => toggleDetailed(index)} className="listitem-container" style={{'borderWidth': 2, 'borderStyle': 'solid', 'borderColor': leader && athlete.place === 2 ? 'var(--color-second)' : leader && athlete.place === 3 ? 'var(--color-third)' : 'transparent'}}>
                <div className="listitem-content">
                    {
                        leader ?
                        <p className="listitem-place">#{athlete.place}</p>
                        :
                        <p className="listitem-place">#{index + 1}</p>
                    }
                    <img className="listitem-avatar" alt="athlete_avatar" src={athlete.avatar || `${process.env.PUBLIC_URL}/images/avatar.svg`} />
                    <div className="listitem-subdata">
                        <p className="listitem-fullname">{athlete.name}</p>
                        <p className="listitem-club">{athlete.city}{athlete.club !== "" ? `, «${athlete.club}»` : ""}</p>
                        <AnimatePresence>
                            {
                                detailed.includes(index) &&
                                <motion.div initial={{'height': 0}} animate={{'height': 'auto'}} exit={{'height': 0}} className='listitem-events-container'>
                                    <p>#1 - {athlete.events[0].res_1} кг / {athlete.events[0].res_2} кг</p>
                                    <p>#2 - {athlete.events[1].res_1} / {athlete.events[1].res_2} повторений</p>
                                    <p>#3 - {athlete.events[2].res_1} повторений</p>
                                    <p>#4 - {athlete.events[3].res_1} / {athlete.events[3].res_2} повторений</p>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                    {leader &&
                        <span className="listitem-points-container">
                            <p>{athlete.total}</p>
                            <p>баллов</p>
                        </span>
                    }
                </div>
                {
                    leader ?
                    <p className="listitem-repeat-place">{athlete.place === 1 ? "LEADER" : athlete.place === 2 ? "SECOND" : athlete.place === 3 ? "THIRD" : athlete.place}</p>
                    :
                    <p className="listitem-repeat-place">{index + 1}</p>
                }
            </motion.div>
        })}
    </motion.div>
}

export default List