import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { clienteAxios } from '../config/axios';


const CrearUsuario = async(datos) => {
    await clienteAxios.post('users',datos );
    console.log(datos);
  };

const UserForms = () => {
    const form = {
        id: 9999999994,
        email: 'Jorge',
        job: 'Developer'
    }
    const queryClient = useQueryClient();
    const mutation = useMutation(()=>CrearUsuario(form),{
        onSettled: function() {
            console.log('Final');
        },
        onSuccess: function() {
            // queryClient.invalidateQueries('USERS'); //manda a refrescar esta query
            queryClient.setQueriesData('USERS', function(oldData) {
                return {
                    ...oldData,
                    data: [...oldData.data, form]
                };
            })
            console.log('Success');
        },
        onError: function(error) {
            console.log(error);
        }
    })

    const handleOnClick = () => {
        mutation.mutate();
    }

  return (
    <>
      <div>
        <button onClick={handleOnClick}>Crear</button>    
      </div>  
    </>
  )
}

export default UserForms