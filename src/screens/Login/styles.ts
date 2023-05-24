import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	input: {
		width: '80%',
		height: 50,
		padding: 10,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#CCCCCC',
		borderRadius: 5,
	},
	button: {
		width: '80%',
		height: 50,
		backgroundColor: '#0066CC',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 18,
	},
	link: {
		marginTop: 20,
		color: '#0066CC',
		textDecorationLine: 'underline',
	},
})