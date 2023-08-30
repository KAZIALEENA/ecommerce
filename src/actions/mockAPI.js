import { data } from "../data";
export const mockAddProduct = (productData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate adding data to "database"
        data.push(productData);
  
        resolve(productData);
      }, 1000); // Simulate a 1-second delay
    });
  };
  