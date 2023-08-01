import { Coordinate } from "@models/coordinate.entity";

const API_KEY = `AIzaSyDID6x0Cj8oX0AWC_jin0Kd6tI8c90tHlE`;

export async function reverseGeocoding(lat: number, lng: number) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    );
    const responseJson = await response.json();
    return responseJson.results.find((result: any) => result.geometry.location_type === 'ROOFTOP');
  } catch (error) {
    console.error(error);
  }
}

export interface IPlace {
  name: string;
  formatted_address: string;
  geometry: {
    location: Coordinate
    viewport?: {
      northeast: Coordinate,
      southwest: Coordinate,
    },
  },
  city?: string;
  district?: string;
}

export async function searchPlace(keyword: string): Promise<IPlace[]> {
  const fields: string[] = ['formatted_address', 'name', 'geometry'];
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURI(keyword)}&key=${API_KEY}`
    );
    const responseJson = await response.json();
    console.log(responseJson);
    switch (responseJson.status) {
      case 'OK':
        return responseJson.results.map((result: any) => {
          const location = result.geometry.location;
          const viewport = result.geometry.viewport;
          return ({
            name: result.name,
            formatted_address: result.formatted_address,
            geometry: {
              location: {
                latitude: location.lat,
                longitude: location.lng,
              },
              viewport: {
                northeast: {
                  latitude: viewport.northeast.lat,
                  longitude: viewport.northeast.lng,
                },
                southwest: {
                  latitude: viewport.southwest.lat,
                  longitude: viewport.southwest.lng,
                },
              },
            },
          })
        }
        );
      case 'ZERO_RESULTS':
        return [];
      default:
        throw new Error('Something went wrong');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}