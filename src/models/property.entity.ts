type PropertyEntity = {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  }
  propertyType: 'Room' | 'Apartment' | 'Single Residence';
  area: number;
  nBathrooms: number;
  nBedrooms: number;
  nBalcony: number;
  policies: any;
  images: string[];
  // {
  //   pet: {
  //     allowed: string[];
  //     note: string;
  //   },
  //   rentalPayment: {
  //   },
  // }
}