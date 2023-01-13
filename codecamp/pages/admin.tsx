import { useEffect, useState } from "react";
import { Ajouter, ModifyAdmin } from "../component/admin";
import { fetchMeleesData } from "../services/Melees/melee.service";

export default function Admin(){
    const [ melees, setMelees ] = useState()

	useEffect(() => {
    fetchMeleesData().then((data) => {
      setMelees(data)
    })
  }, [])
    return (
        <div>
            <Ajouter/>
            <br/> 
            Modifier et supprimer les melees :
            { melees && melees.map((melee, i) => {
            return ( <ModifyAdmin melee={melee}/> )
        }) }
        </div>
    )
}