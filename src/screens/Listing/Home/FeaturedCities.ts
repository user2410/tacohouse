const cities: {
	[key: string]: {
		name: string,
		districts: {
			name: string,
			image: any
		}[]
	}
} = {
	hanoi: {
		name: 'Hà Nội',
		districts: [
			{
				name: 'Thanh Xuân',
				image: require('@assets/images/cities/hanoi/districts/tx.jpg'),
			},
			{
				name: 'Hoàng Mai',
				image: require('@assets/images/cities/hanoi/districts/tx.jpg'),
			},
			{
				name: 'Cầu Giấy',
				image: require('@assets/images/cities/hanoi/districts/tx.jpg'),
			},
			{
				name: 'Đống Đa',
				image: require('@assets/images/cities/hanoi/districts/tx.jpg'),
			},
			{
				name: 'Hai Bà Trưng',
				image: require('@assets/images/cities/hanoi/districts/tx.jpg'),
			},
			{
				name: 'Hà Đông',
				image: require('@assets/images/cities/hanoi/districts/tx.jpg'),
			},
		]
	},
	// hcm: {
	// 	name: 'Hồ Chí Minh',
	// 	districts: [
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/hcm/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/hcm/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/hcm/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/hcm/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/hcm/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/hcm/districts/'),
	// 		},
	// 	],
	// },
	// dn: {
	// 	name: 'Đà Nẵng',
	// 	districts: [
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/dn/districts'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/dn/districts'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/dn/districts'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/dn/districts'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/dn/districts'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/dn/districts'),
	// 		},
	// 	],
	// },
	// bd: {
	// 	name: 'Bình Dương',
	// 	districts: [
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/bd/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/bd/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/bd/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/bd/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/bd/districts/'),
	// 		},
	// 		{
	// 			name: '',
	// 			image: require('@assets/images/cities/bd/districts/'),
	// 		},
	// 	],
	// },
}

export default cities;