type ListingEntity = {
	id: string;
  propertyType: 'Room' | 'Single Residence' | 'Apartment';
	title: string;
	address: string;
	price: number;
	area: number;
	submittedDate: Date;
	thumbnailImg: string;
	images?: string[];
	description?: string;
	location: {
		latitude: number;
		longtitude: number;
		latitudeDelta?: number;
		longitudeDelta?: number;
	},
  isActive?: boolean;
} 