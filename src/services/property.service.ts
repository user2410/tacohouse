let properties: PropertyEntity[] = [
  {
    id: '1',
    name: 'The Manor',
    address: '91 Nguyen Huu Canh, Ward 22, Binh Thanh District, Ho Chi Minh City',
    location: {
      lat: 10.801889,
      lng: 106.709981,
    },
    propertyType: 'Apartment',
    area: 100,
    nBathrooms: 2,
    nBedrooms: 2,
    nBalcony: 1,
    policies: {
      pet: {
        allowed: ['dog', 'cat'],
        note: 'Pets are allowed',
      },
      rentalPayment: {
        deposit: 2,
        paymentFrequency: 'month',
      },
    },
    images: [
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
    ],
  },
  {
    id: '2',
    name: 'The Manor',
    address: '91 Nguyen Huu Canh, Ward 22, Binh Thanh District, Ho Chi Minh City',
    location: {
      lat: 10.801889,
      lng: 106.709981,
    },
    propertyType: 'Apartment',
    area: 100,
    nBathrooms: 2,
    nBedrooms: 2,
    nBalcony: 1,
    policies: {
      pet: {
        allowed: ['dog', 'cat'],
        note: 'Pets are allowed',
      },
      rentalPayment: {
        deposit: 2,
        paymentFrequency: 'month',
      },
    },
    images: [
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
    ],
  },
  {
    id: '3',
    name: 'The Manor',
    address: '91 Nguyen Huu Canh, Ward 22, Binh Thanh District, Ho Chi Minh City',
    location: {
      lat: 10.801889,
      lng: 106.709981,
    },
    propertyType: 'Apartment',
    area: 100,
    nBathrooms: 2,
    nBedrooms: 2,
    nBalcony: 1,
    policies: {
      pet: {
        allowed: ['dog', 'cat'],
        note: 'Pets are allowed',
      },
      rentalPayment: {
        deposit: 2,
        paymentFrequency: 'month',
      },
    },
    images: [
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg',
      'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
    ],
  },
];

export class PropertyService {
  static getProperties() {
    return new Promise<PropertyEntity[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(properties);
      }, 1000);
    })
  }

  static getPropertyById(id: string) {
    return new Promise<PropertyEntity | undefined>((resolve, reject) => {
      setTimeout(() => {
        resolve(properties.find((property) => property.id === id));
      }, 1000);
    });
  }
}