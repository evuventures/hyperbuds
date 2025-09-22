// Base URL configuration for the application
const baseUrl = process.env.NODE_ENV === 'production'
   ? 'https://hyperbuds.com'
   : 'http://localhost:3000';

export default baseUrl;
export const BASE_URL = baseUrl;
