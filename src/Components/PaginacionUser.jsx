import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { clienteAxios } from '../config/axios';

const Usuario = async(page) => {
    const { data } = await clienteAxios.get(`users?page=${page}&per_page=2`);
    return data;
  };
const PaginacionUser = () => {
    const [page, setPage] = useState(1);
    const {data,isLoading, isError} = useQuery(['UsuariosPaginados', page], ()=>Usuario(page));
    if(isLoading) return <p>Cargando...</p>;
    if(isError) return <p>Error</p>;
    console.log(data);
    const totalPage = Math.ceil(data.total/data.per_page);
  return (
    <>
        <div>
        {data?.data.map((user)=> {
            return (
                <div key={user.id}>
                   <h3>{user.id} -- {user.first_name} </h3>
                </div>
            )
        })}
        </div>
        <div>
            <button onClick={()=> setPage(page=>page-1)} disabled={page === 1}>Prev page</button>
        </div>
        <div>
            <button onClick={()=> setPage(page=>page+1)} disabled={page===totalPage}>Next page</button>
        </div>
    </>
  )
}

export default PaginacionUser