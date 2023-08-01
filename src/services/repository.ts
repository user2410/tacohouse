import { ListingEntity } from "@models/listing.entity";
import { PropertyEntity } from "@models/property.entity";
import { UnitEntity } from "@models/unit.entity";

export const users : UserEntity[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "a1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "doctor",
    type: "renter",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Trần Văn B",
    email: "b1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "student",
    type: "renter",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Trần Đức C",
    email: "c1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "student",
    type: "renter",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Pham Cong D",
    email: "d1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "doctor",
    type: "owner",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const units : UnitEntity[] = [
  {
    id: '1',
    name: 'Số 91',
    // propertyId: '1',
    area: 100,
    floor: 1,
    hasBalcony: true,
    nLivingRooms: 1,
    nBedrooms: 2,
    nBathrooms: 2,
    nKitchens: 1,
    type: 'house',
    media: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Số 463',
    // propertyId: '2',
    area: 100,
    floor: 1,
    hasBalcony: true,
    nLivingRooms: 1,
    nBedrooms: 2,
    nBathrooms: 2,
    nKitchens: 1,
    type: 'house',
    media: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Số 463',
    // propertyId: '2',
    area: 100,
    floor: 1,
    hasBalcony: true,
    nLivingRooms: 1,
    nBedrooms: 2,
    nBathrooms: 2,
    nKitchens: 1,
    type: 'house',
    media: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: 'Số 23',
    // propertyId: '4',
    area: 100,
    floor: 1,
    hasBalcony: true,
    nLivingRooms: 1,
    nBedrooms: 2,
    nBathrooms: 2,
    nKitchens: 1,
    type: 'room',
    media: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

export const properties : PropertyEntity[] = [
  {
    id: '0',
    name: 'Căn hộ 1',
    address: '91 Nguyen Huu Canh, Ward 22, Binh Thanh District, Ho Chi Minh City',
    district: 'Binh Thanh',
    city: 'Ho Chi Minh',
    location: {
      lat: 10.801889,
      lng: 106.709981,
    },
    type: 'apartment',
    area: 100,
    media: [
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
      },
    ],
    units: [units[0]],
    owner: users[0],
  },
  {
    id: '1',
    name: 'Căn hộ 2',
    address: '463-465 Lê Đại Hành , Phường 11, Quận 11, Hồ Chí Minh',
    district: 'Quan 11',
    city: 'Ho Chi Minh',
    location: {
      lat: 10.801889,
      lng: 106.709981,
    },
    type: 'apartment',
    area: 100,
    media: [
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
      },
    ],
    units: [units[1]],
    owner: users[0],
    overview: `Cho thuê căn hộ ngay trung tâm Quận Bình Thạnh, gần ngay Vạn Hạnh Mall, trường đại học Bách Khoa, Huflit (5 phút đi bộ là tới), trường Đại học Y Dược Phạm Ngọc Thạch (bước qua đường là tới) Đại học Hoa Sen, trường Quốc Tế Việt Úc, bệnh viện 115, Nhi Đồng...các nhà thuốc lớn ở HCM... full nội thất đầy đủ tiện nghi, giờ giấc tự do, phòng ốc sạch sẽ và an ninh. Thích hợp cho thuê công tác dài và ngắn hạn, việt Kiều, SV...`,
    yearBuilt: 2010,
    nFloors: 1,
    features: [
      {
        feature: 'Trung tâm thương mại',
        description: 'Có 6 tầng trung tâm thương mại phía trước',
      },
      {
        feature: 'Phòng Gym',
        description: 'Power - Fisnet yoga',
      },
      {
        feature: 'Sân chơi Golf',
        description: 'Sân chơi Gold 3D rất hiện đại và hoành tráng',
      },
      {
        feature: 'Bảo vệ',
        description: 'Bảo vệ 24/24'
      },
    ],
    amenities: [
      {
        amenity: 'elevator',
      },
      {
        amenity: 'security_camera',
      },

    ]
  },
  {
    id: '2',
    name: 'Căn hộ 3',
    address: '34 4F, Phường Tân Thuận Tây, Quận 7, Hồ Chí Minh',
    district: 'Quan 7',
    city: 'Ho Chi Minh',
    location: {
      lat: 10.801889,
      lng: 106.709981,
    },
    type: 'apartment',
    area: 100,
    media: [
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
      },
    ],
    units: [units[2]],
    owner: users[3],
  },
  {
    id: '3',
    name: 'Phong tro 1',
    address: '23 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Hồ Chí Minh',
    district: 'Binh Thanh',
    city: 'Ho Chi Minh',
    location: {
      lat: 10.801889,
      lng: 106.709981,
    },
    type: 'room',
    area: 100,
    media: [
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/698ca5f9cd4ead81824028844dcc11a0_1686997941.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/9e9b8e68ee899b038777e626e8ab6ae2_1686997946.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/16/img-6342_1686925907.jpg',
      },
      {
        type: 'photo',
        url: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
      },
    ],
    units: [units[3]],
    owner: users[1],
  }
];

export const listings : ListingEntity[] = [
	{
		id: '1',
		title: 'Căn hộ cho thuê - Khu trung tâm thành phố',
		price: 30000000,
    securityDeposit: 30000000,
		description: 'a house with a swimming pool in Tay Ho. you should not miss our chance to visit and make this charming house your new home in Hanoi. The house comprises 5 bedrooms & 3 bathrooms, very bright living-room with high ceiling and basic kitchen with oven. The house comes with partly furnished and also benefits from a large garden with plenty of trees as well as an outdoor swimming pool. The house extremely suits a family with children. Ideally located a short walk from To Ngoc Van and Xuan Dieu Street, easy access to Hanoi city center, Ciputra urban and Noi Bai airport',
    creatorId: '1',
    creator: users[0],
    propertyId: '1',
    property: properties[0],
    petsAllowed: true,
    policies: [
      {
        title: 'Pets',
        notes: ['Cats only', 'No dog'],
      },
      {
        title: 'Payment',
        notes: ['1 month deposit', '1 month rent in advance'],
      }
    ],
    priority: 1,
    active: true,
    units: units[0],
    createdAt: new Date('2023-05-28'),
    updatedAt: new Date('2023-05-28'),
	},
  {
    id: '2',
    title: 'Căn hộ sang trọng tại Khu đô thị Xanh',
    price: 30000000,
    securityDeposit: 30000000,
    description: 'a house with a swimming pool in Tay Ho. you should not miss our chance to visit and make this charming house your new home in Hanoi. The house comprises 5 bedrooms & 3 bathrooms, very bright living-room with high ceiling and basic kitchen with oven. The house comes with partly furnished and also benefits from a large garden with plenty of trees as well as an outdoor swimming pool. The house extremely suits a family with children. Ideally located a short walk from To Ngoc Van and Xuan Dieu Street, easy access to Hanoi city center, Ciputra urban and Noi Bai airport',
    creatorId: '1',
    creator: users[0],
    propertyId: '2',
    property: properties[1],
    petsAllowed: true,
    policies: [
      {
        title: 'Pets',
        notes: ['Cats only', 'No dog'],
      },
      {
        title: 'Payment',
        notes: ['1 month deposit', '1 month rent in advance'],
      }
    ],
    priority: 1,
    active: true,
    units: units[1],
    createdAt: new Date('2023-05-28'),
    updatedAt: new Date('2023-05-28'),
  },
  {
    id: '3',
    title: 'Căn hộ chung cư cao cấp với view sông đẹp',
    price: 30000000,
    securityDeposit: 30000000,
    description: 'Môi trường sống trong lành, sạch sẽ, an ninh. Gần nhiều chợ, siêu thị, trường học, nhà mặt tiền đường lớn thuận tiện đi lại và không ngập nước',
    creatorId: '1',
    creator: users[0],
    propertyId: '3',
    property: properties[2],
    petsAllowed: true,
    policies: [
      {
        title: 'Pets',
        notes: ['Dog only', 'No cat'],
      },
      {
        title: 'Payment',
        notes: ['1 month deposit', '2 month rent in advance'],
      }
    ],
    priority: 1,
    active: true,
    units: units[2],
    createdAt: new Date('2023-05-28'),
    updatedAt: new Date('2023-05-28'),
  },
  {
    id: '4',
    title: 'Phòng trọ giá rẻ',
    price: 3000000,
    securityDeposit: 0,
    description: 'Nội thất đầy đủ, chỉ việc dọn đồ vào ở; toà nhà chỉ cho Nữ ở, không có Nam khỏi lo phức tạp; khách thuê văn minh, lịch sự. An Ninh, thoáng mát, tự do giờ giấc; Gần Đh Sài Gòn, Sư Phạm, Tự Nhiên, Y Dược, Kinh tế Đối Ngoại...',
    creatorId: '1',
    creator: users[0],
    propertyId: '4',
    property: properties[3],
    petsAllowed: false,
    policies: [
      {
        title: 'Pets',
        notes: ['No pet'],
      },
      {
        title: 'Payment',
        notes: ['1 month deposit', '1 month rent in advance'],
      }
    ],
    priority: 1,
    active: true,
    units: units[3],
    createdAt: new Date('2023-05-28'),
    updatedAt: new Date('2023-05-28'),
  }
];