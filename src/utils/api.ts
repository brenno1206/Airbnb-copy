import { AirbnbAPI, AccommodationPrototype } from '@/types/AirbnbData';
export async function fetchData(): Promise<AirbnbAPI> {
  try {
    const response = await fetch('https://web.codans.com.br/airbnb');
    const data = response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function fetchDataByUrl(
  id: string,
): Promise<AccommodationPrototype | undefined> {
  try {
    const data = await fetchData();
    const accommodation = data.accommodation.find((accommodation) => {
      return accommodation.slug === decodeURIComponent(id);
    });
    return accommodation;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
