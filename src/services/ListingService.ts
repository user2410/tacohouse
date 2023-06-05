var listings: ListingEntity[] = [
	{
		id: 1,
		title: 'Very extremely super long long long title 1',
		address: 'So 1, Dai Co Viet, Hai Ba Trung',
		area: 20,
		price: 20000000,
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
		id: 2,
		title: 'Title 2',
		address: 'So 1, Dai Co Viet, Hai Ba Trung',
		area: 20,
		price: 20000000,
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
		id: 3,
		title: 'Title 3',
		address: 'So 1, Dai Co Viet, Hai Ba Trung',
		area: 20,
		price: 20000000,
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
		id: 4,
		title: 'Title 4',
		address: 'So 1, Dai Co Viet, Hai Ba Trung',
		area: 20,
		price: 20000000,
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
			}, 500);
		})
	}
}