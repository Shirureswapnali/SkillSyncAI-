import {createContext,useContext,useEffect,useMemo,useState} from 'react';
import {users} from '../data/mockData';
const C=createContext(null);
export function AppProvider({children}){const [role,setRole]=useState(()=>localStorage.getItem('skillsync-role')||'Client');const [userId,setUserId]=useState(()=>localStorage.getItem('skillsync-user')||'client-1');useEffect(()=>localStorage.setItem('skillsync-role',role),[role]);useEffect(()=>localStorage.setItem('skillsync-user',userId),[userId]);const user=users.find(u=>u.id===userId)||users[0];const value=useMemo(()=>({role,setRole,user,userId,setUserId}),[role,user,userId]);return <C.Provider value={value}>{children}</C.Provider>};export const useApp=()=>useContext(C);
