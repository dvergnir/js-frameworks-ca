export async function fetchData() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
