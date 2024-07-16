import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1f2240",
  },

  header: {
    height: 56,
    width: '100%',
    backgroundColor: '#1b1c30',
    borderBottomWidth: 0  
  },

  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    gap: 5,
  },

  headerLeft:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    gap: 5,
  },

  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#1f2240",
  },

  button: {
    width: 200,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#3dc478',
  },

  dialog: {
    backgroundColor: '#1f2240',
  },

  img: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
    borderRadius: 500,
  },

  label: {
    fontSize: 16,
    color: '#4a5c6a'
  },

  text: {
    color: '#ccd0cf',
    fontSize: 18,
    marginBottom: 20,
  },
})

export default styles