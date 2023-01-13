import { useEffect, useState } from 'react'
import styles from 'styles/Home.module.css'
import { Add, Remove }  from '../component/admin'
import Calendar from '../component/calendar'
import Event from '../component/event'
import Nav from '../component/nav'
import { fetchMeleesData } from '../services/Melees/melee.service'

export default function Planning() {
  const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Liste des évènements ⏷')
  const [melees, setMelees] = useState()

  useEffect(() => {
    fetchMeleesData().then((data) => {
      setMelees(data)
    })
  }, [])
  
  const handleOnClick = () => {
    setActivated(!activated)
    if (activated) { setMessage('Liste des évènements ⏵')}
    else { setMessage('Liste des évènements ⏷')}
  }
  return (
    <>
      <Nav />
      <div>
      <div className={styles.calendarph}>
        <h2 className={styles.calendarp}>Planning</h2>
        <div className={styles.calendarf}>
          <h3 onClick={handleOnClick}>{message}</h3><Add /><Remove /></div>
            {activated &&
              <div>
                <table className={styles.table}>
                    <tr>
                      <th>Filtre</th>
                      <th>Evènements</th>
                      <th>UV</th>
                      <th>Activité</th>
                      <th>Localisation</th>
                      <th>Début</th>
                      <th>Fin</th>
                    </tr>
                  <tbody>
                    { melees && melees.map((melee, i) => {
          return ( <Event event_filtre=''event_name={melee.melee_name} event_uv='Melee' event_activiter='Melee' event_localisation='Salle melee' event_debut={melee.dateStart} event_fin={melee.dateEnd} /> )
        }) }
                    
                  </tbody>
                </table>              
              </div>}
              <Calendar/>
      </div>
    </div><footer className={styles.footer}>
      </footer></>
  )
  }