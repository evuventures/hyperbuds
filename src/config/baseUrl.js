// Base URL configuration for the application
const baseUrl = process.env.NODE_ENV === 'production'
   ? 'https://hyperbuds.com'
   : 'http://localhost:3000';


export const BASE_URL = baseUrl;


// The "Root" of the backend
export const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_BASE_URL || 
  'https://api-hyperbuds-backend.onrender.com';

// The specific "Entry Point" fOR API calls
export const API_URL = `${API_BASE_URL}/api/v1`; 

export const CONFIG = {
  API_BASE_URL,
  API_URL,
  IS_PROD: process.env.NODE_ENV === 'production'
};
export default CONFIG;