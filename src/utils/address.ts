import { Address } from "react-native-maps"

// translate returned address object by MapView.addressForCoordinate to human-readable address string
export function translateAddress(address: Address): string {
  const parts = [];

  if (address.name) {
    parts.push(address.name);
  }

  if (address.thoroughfare) {
    parts.push(address.thoroughfare);
  }

  if (address.subAdministrativeArea) {
    parts.push(address.subAdministrativeArea);
  }

  if (address.administrativeArea) {
    parts.push(address.administrativeArea);
  }

  if (address.country) {
    parts.push(address.country);
  }

  return parts.join(', ');
}