import axios from 'axios';
export const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:8000/api',timeout:10000,headers:{'Content-Type':'application/json'}});
api.interceptors.request.use(config=>{const token=localStorage.getItem('skillsync_token');if(token)config.headers.Authorization=`Bearer ${token}`;return config});
export const apiClient={get:async(...args)=>api.get(...args),post:async(...args)=>api.post(...args),put:async(...args)=>api.put(...args),delete:async(...args)=>api.delete(...args)};
