import React, { useState } from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import OtraPeticion from './Components/OtraPeticion';
import PeticionesUsuarios from './Components/PeticionesUsuarios';
import UserForms from './Components/UserForms';
/*
  retry: nos dice cuantas veces hace la peticion si falla
  refetchOnWindowFocus: eliminar el comportamiento de la peticion cuando la ventana pierde el foco

*/

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  }
});

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <PeticionesUsuarios/>
      <button onClick={()=> setShow(!show)}>Mostrar</button>
      {show && <OtraPeticion/>}
      <UserForms />
    </QueryClientProvider>
  )
}

export default App