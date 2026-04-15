import {  useContext } from "react"
import AdminContext from './AdminContext';

const useAdmin=()=>{
    return useContext(AdminContext)
}

export default useAdmin