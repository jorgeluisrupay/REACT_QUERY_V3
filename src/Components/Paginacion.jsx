import React, { useState } from 'react'
import { ApiPrueba } from '../config/axios';
import { useQuery } from 'react-query';

const Planets = async(page) => {
    const { data } = await ApiPrueba.get(`planets?page=${page}`);
    return data;
  };

const Paginacion = () => {
    const [page, setPage] = useState(1);
    const {data,isLoading, isError} = useQuery(['planets', page], ()=>Planets(page));
    
    if(isLoading) return <p>Cargando...</p>;
    if(isError) return <p>Error</p>;
    // console.log(data);
  return (
    <>
        <div>
        {data?.results.map((planet)=> {
            return (
                <div key={planet.name}>
                   <h3>{planet.name} -- {planet.rotation_period} </h3>
                </div>
            )
        })}
        </div>
        <div>
            <button onClick={()=> setPage(page=>page-1)} disabled={page === 1}>Prev page</button>
        </div>
        <div>
            <button onClick={()=> setPage(page=>page+1)} disabled={page===6}>Next page</button>
        </div>
    </>
  )
}

export default Paginacion