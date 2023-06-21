const timeout = 500;

var listings: ListingEntity[] = [
	{
		id: '1',
		title: 'Căn hộ cho thuê - Khu trung tâm thành phố',
		address: 'Số 123 Đường Chính, Quận Trung Tâm',
		price: 1800,
    area: 900,
		submittedDate: new Date('2023-05-28'),
		thumbnailImg: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg',
		description: 'a house with a swimming pool in Tay Ho. you should not miss our chance to visit and make this charming house your new home in Hanoi. The house comprises 5 bedrooms & 3 bathrooms, very bright living-room with high ceiling and basic kitchen with oven. The house comes with partly furnished and also benefits from a large garden with plenty of trees as well as an outdoor swimming pool. The house extremely suits a family with children. Ideally located a short walk from To Ngoc Van and Xuan Dieu Street, easy access to Hanoi city center, Ciputra urban and Noi Bai airport',
		location: {
			latitude: 21.007076103786403,
			longtitude: 105.84310564167778,
			latitudeDelta: 0.00922,
			longitudeDelta: 0.00421,
		},
	},
	{
		id: '2',
		title: 'Nhà phố sang trọng tại Khu đô thị Xanh',
		address: 'Số 456 Đường Hoa Sữa, Khu Đô Thị Xanh',
		price: 2500,
    area: 1500,
		submittedDate: new Date('2023-05-20'),
		description: '',
		thumbnailImg: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
		location: {
			latitude: 21.00667543819238,
			longtitude: 105.84834190302948,
			latitudeDelta: 0.00922,
			longitudeDelta: 0.00421,
		},
	},
	{
		id: '3',
		title: 'Chung cư cao cấp với view sông đẹp',
		address: 'Số 789 Đường Nguyễn Hữu Cảnh, Quận 2',
		price: 3500,
    area: 2000,
		submittedDate: new Date('2023-05-20'),
		description: '',
		thumbnailImg: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/05/26/z4205185254463-f63ac42391725d4cfc6a5a391668ee56_1685109765.jpg',
		location: {
			latitude: 21.00443813746138,
			longtitude: 105.84398550002601,
			latitudeDelta: 0.00922,
			longitudeDelta: 0.00421,
		},
	},
	{
		id: '4',
		title: 'Biệt thự hiện đại với sân vườn rộng',
		address: 'Số 10 Đường Lê Văn Lương, Quận 7',
		price: 5000,
    area: 2500,
		submittedDate: new Date('2023-04-20'),
		description: '',
		thumbnailImg: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/04/26/0_1682481455.png',
		location: {
			latitude: 21.0058844100351,
			longtitude: 105.84744753604696,
			latitudeDelta: 0.00922,
			longitudeDelta: 0.00421,
		},
	},
  {
    id: '5',
    title: 'Căn hộ thoáng mát gần bãi biển',
    address: 'Số 111 Đường Biển Xanh, Quận Sơn Trà',
    price: 2000,
    area: 1200,
    submittedDate: new Date('2023-04-20'),
		description: '',
		thumbnailImg: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/04/26/0_1682481455.png',
		location: {
			latitude: 21.0058844100351,
			longtitude: 105.84744753604696,
			latitudeDelta: 0.00922,
			longitudeDelta: 0.00421,
		},
  },
  {
    id: '6',
    title: 'Phòng trọ tiện nghi tại khu phố ẩm thực',
    address: 'Số 222 Đường Ẩm Thực, Quận Bình Thạnh',
    price: 1000,
    area: 500,
    submittedDate: new Date('2023-04-20'),
		description: '',
		thumbnailImg: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/04/26/0_1682481455.png',
		location: {
			latitude: 21.0058844100351,
			longtitude: 105.84744753604696,
			latitudeDelta: 0.00922,
			longitudeDelta: 0.00421,
		},
  }
];

export default class ListingService {
	static getNewListings(limit: number = 10, offset: number = 0): Promise<ListingEntity[]> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					limit < 0 || offset < 0
				) {
					reject({ message: 'invalid parameters' });
				} else {
					listings.sort((a: ListingEntity, b: ListingEntity) => {
						const cmp = a.submittedDate.getTime() - b.submittedDate.getTime();
						if (cmp < 0) return -1;
						if (cmp > 0) return 1;
						return 0;
					})
					resolve(listings.slice(offset, offset + limit));
				}
			}, timeout);
		})
	}

  static getSingleListing(id: string): Promise<ListingEntity | undefined> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listings.find(item => item.id === id))
      }, timeout)
    })
  }
}