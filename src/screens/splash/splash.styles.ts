import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	background: {
		flex: 1,
		justifyContent: 'center',
	},
	body: {
		flex: 9,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	appName: {
		textTransform: 'uppercase',
		color: 'white',
		fontFamily: 'sans-serif',
		fontSize: 36,
		fontWeight: 'bold',
		marginTop: 1,
	},
	footer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footerText: {
		fontFamily: 'sans-serif',
		fontSize: 12,
		color: 'white',
	},
	activityIndicator: {
		color: "#C0C0C0"
	},
	logo: {
		width: 150,
		height: 150,
	},
});
