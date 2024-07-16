// src/services/api.js
const BASE_URL = "https://example.com/api";

export const fetchInfo = async () => {
  const response = await fetch(`${BASE_URL}/info`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
