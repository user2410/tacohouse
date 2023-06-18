import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	body: {
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		paddingVertical: 2,
		paddingHorizontal: 4,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	input: {
		width: '80%',
		height: 50,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#CCCCCC',
		borderRadius: 5,
		backgroundColor: '#FFF',
	},
	loginButton: {
		width: '80%',
		height: 50,
		backgroundColor: '#0066CC',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	loginButtonText: {
		color: '#FFFFFF',
		fontSize: 18,
	},
	link: {
		marginTop: 20,
		color: '#999999',
	},
	socialBtnContainer: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 16,
	},
	modalView: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#00000099'
	},
	modalContainer: {
		width: '100%',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 12,
	},
	modalHeader: {
		fontSize: 22,
	},
	modalPressableItem: {
		color: 'lightgray',
		margin: -12,
	},
	modalIcon: {
		width: 20,
		height: 20,
	},
})