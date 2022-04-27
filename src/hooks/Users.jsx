import { useState } from "react";
import { clienteAxios } from "../config/axios";

// const Usuario = async (page) => {
//   const {data} = await clienteAxios.get(`users?page=${page}`);
//   return data;
// }

// export default function useUsers() {
//     return useQuery('USERS', Usuario);
// };

export const useUsers = (initial = 1) => {
  const [page, setPage] = useState(initial);

  const Siguiente = () => {
    setPage(page + 1);
  };
  const Usuario = async() => {
    const { data } = await clienteAxios.get(`users?page=${page}`);
    return data;
  };
 
  return [Usuario, Siguiente,page];
};
