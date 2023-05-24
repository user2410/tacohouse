import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	section: {
		marginVertical: 20,
		padding: 10,
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
		width: 20,
		height: 20
	},
	manageCardTitle: {
		textAlign: 'center'
	}
});