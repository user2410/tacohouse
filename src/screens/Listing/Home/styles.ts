import { StyleSheet } from "react-native";

export default StyleSheet.create({
	header: {

	},
	section: {
		marginBottom: 12,
		padding: 10,
		backgroundColor: '#fff',
	},
	sectionHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	sectionBody: {
		marginVertical: 10,
	},
	grid: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: 15,
	},
	districtCard: {
		borderRadius: 30,
		position: 'relative',
		width: 120,
		height: 120,
	},
	districtCardThumbnail: {
		width: '100%',
		height: '100%',
	},
	districtCardTitle: {
		position: 'absolute',
		bottom: 0,
		fontWeight: '700',
		textAlign: 'center',
		color: 'white',
		width: '100%',
	},

	card: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 8,
		// paddingVertical: 45,
		// paddingHorizontal: 25,
		rowGap: 6,
		width: '100%',
		marginVertical: 10,
	},
	cardThumbnail: {
		borderRadius: 12,
	},
	cardHeading: {
		fontSize: 18,
		fontWeight: '600',
		marginVertical: 5,
		flex: 1,
		flexWrap: 'wrap',
	},
	shadowProp: {
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	androidRipple: {
		color: 'lightgray'
	}
})