import { Padding } from '@assets/styles/global-styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  headerRightIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  modalView: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000099'
  },
  modalContainer: {
    width: '80%',
    maxHeight: '60%',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
		paddingVertical: Padding.p_3xs,
		paddingHorizontal: Padding.p_mini,
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16
  },
  msgContainer: {
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    gap:16,
  }
});
