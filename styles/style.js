import { StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        paddingTop:30,
       /* backgroundColor:'#aefcb6',*/
        backgroundColor:"#cafccf",
    },
    title:{
        fontSize:20,
        color:'#49694c',
        textAlign:"center",
    },
    // МОДАЛЬНОЕ ОКНО НА ГЛАВНОМ ЭКРАНЕ
    modalNavContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
     modalNavContent: {
        backgroundColor: "#e1f5e3",
        width: "80%",
        padding: 20,
        borderRadius: 10,
      },
    modalNavText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalNavIcon: {
       paddingRight:"7%",
    },
    modalNavButton:{
        alignItems: 'center',
        backgroundColor: 'black',
        color:"white",
        padding: 10,
        marginBottom:"5%",
        borderRadius:5,
    },
    modalNavButtonText:{
        alignItems: 'center',
        color:"#fff",
        fontSize: 16,
    },
    /// ГЛАВНЫЙ ЭКРАН  ДЛЯ  СТРЕЛ ЛУКА И ТРЕНИРОВОК
    container: {
        flex: 1,
      },
      openButton: {
        borderRadius: 5,
        margin: 20,
      },
      closeButton: {
        borderRadius: 5,
        margin: 20,
      },
     
      buttonText: {
        fontSize: 16,
        padding: 10,
        backgroundColor: '#2f694d',
        borderRadius: 10,
        color:"white",
       
      },
      modalContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
      },
      modalButton: {
        flexDirection:"row",
        marginLeft:20,
        marginVertical: 5,
        alignItems:"center",
      
      },
      item: {
        height:50,
        justifyContent: "center",
        borderBottomWidth:2,
      },
      content:{
        paddingLeft:20,
        paddingRight:20,
        flexDirection: "row",
        justifyContent:"space-between",
      },
      text:{
        fontSize:20,
        color:"black",
      },
    

  });