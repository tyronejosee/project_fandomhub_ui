const BASE_URL = "https://api.example.com";

export async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  const data = await response.json();
  return data;
}
