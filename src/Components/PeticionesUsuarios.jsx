import React, {useState} from 'react'
import { useQuery } from 'react-query';
import {useUsers} from '../hooks/Users'


const PeticionesUsuarios = () => {

  const [Usuario, Siguiente, page] = useUsers(1);
  const {data,isLoading,error,refetch} = useQuery('USERS', Usuario);
  // console.log(data);
  // console.log(isLoading);
  // console.log(error);
  if (isLoading) {
    return <p>Cargando...</p>
  }
  if (error) {
    return <p>Error cargando Usuarios: {error?.message}</p>
  }

 const SiguientePage = () => {
  Siguiente();
  refetch();
 }
  
  return (
    <div>
      <ul>
        {data.data.map(usuario =>(
          <li key={usuario.id}>{usuario.email}</li>
        ) )}
      </ul>
      <h2> {page} </h2>
      <button onClick={SiguientePage}>Refrescar</button>
    </div>
  )
}

export default PeticionesUsuarios