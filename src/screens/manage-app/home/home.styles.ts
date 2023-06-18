import { StyleSheet } from "react-native";

export default StyleSheet.create({
	sectionContainer: {
		backgroundColor: '#fff',
	},
	section: {
		marginVertical: 20,
		padding: 10,
		backgroundColor: '#fff',
	},
	sectionHeader: {
		marginBottom: 10,
	},
	sectionHeaderText: {
		textTransform: 'capitalize',
		fontSize: 16,
		fontWeight: 'bold',
	},
	sectionBody: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 25,
	},
	manageCard: {
		width: '20%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	manageCardImage: {
		width: 35,
		height: 35
	},
	manageCardTitle: {
		textAlign: 'center',
    fontSize: 12
	}
});