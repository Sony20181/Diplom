import React from 'react';
import { View, Text,StyleSheet,Image,TouchableWithoutFeedback,TextInput, TouchableOpacity, ScrollView, Modal} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
const Recommendations = () => {
    const [modalVisible, setModalVisible] = useState(false);
  
    return (
      <View style={styles.container}>
        <Text style={styles.tipsText} onPress={() => setModalVisible(true)}>Советы</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Советы</Text>
            <Text style={styles.Text}>1. Перед стрельбой старайтесь подтягиваться, отжиматься и выполнять иные упражнения для укрепления рук. Так вам будет легче держать лук.</Text>
            <Text style={styles.Text}>2. Лучше всего учиться стрелять у тренера, который будет давать вам указания, так как новички часто ошибаются, что трудно заметить самостоятельно, но профессиональный взгляд со стороны без труда их выявит и поможет исправить.</Text>
            <TouchableOpacity style={styles.CloseButtonBackGround}  onPress={() => setModalVisible(false)}>
                <Text style={styles.CloseButton}>
                Закрыть
                </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  const Warning = () => {
    const [modalVisible, setModalVisible] = useState(false);
  
    return (
      <View style={styles.container}>
        <Text style={styles.tipsText} onPress={() => setModalVisible(true)}>Предупреждения</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Предупреждения</Text>
            <Text style={styles.Text}>1. Не натягивайте тетиву без стрелы, чтобы спустить ее вхолостую, так как из-за этого на луке могут образоваться микротрещины.</Text>
            <Text style={styles.Text}>2. Никогда не цельтесь в то, во что не собираетесь стрелять.</Text>
            <Text style={styles.Text}>3. Позади ваших мишеней обязательно должна быть установлена защитная преграда на тот случай, если вы промахнетесь.</Text>
            <TouchableOpacity style={styles.CloseButtonBackGround}  onPress={() => setModalVisible(false)}>
                <Text style={styles.CloseButton}>
                Закрыть
                </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

const Rules = () => {
   
 
    return (
        <LinearGradient   
            colors={['#0f0c29', '#302b63', '#24243e']}
            style ={styles.main }
        > 
            <ScrollView>
        <View>
            <Recommendations/>
            <Warning/>
        </View>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/a/a2/Shoot-an-Arrow-Step-1-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-1-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text} >
        <Text style={{fontWeight: "bold"}}>1.Расположите корпус тела перпендикулярно к мишени.</Text> Когда будете готовы стрелять, встаньте таким образом, 
           чтобы мысленно можно было провести прямую линию через ваши плечи до цели (эта линия будет перпендикулярна стопам). Если ведущий глаз у вас правый, ухватите лук в левую руку, направьте левое плечо к цели, а правой рукой возьмитесь за тетиву. Если ведущий глаз левый, сделайте все наоборот.
        </Text>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/4/41/Shoot-an-Arrow-Step-2-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-2-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text}>

        <Text style={{fontWeight: "bold"}}>2.Встаньте прямо и расставьте ноги по ширине плеч.</Text> Напрягите ягодицы, чтобы выдвинуть область таза чуть вперед. Держите спину прямо, чтобы руки и плечи могли сформировать букву "T”, когда вы будете натягивать тетиву. Стойка должна быть достаточно комфортной, чтобы вы могли оставаться в ней длительное время, но при этом твердой и бдительной.
        </Text>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/0/0f/Shoot-an-Arrow-Step-3-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-3-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text}>
        <Text style={{fontWeight: "bold"}}>3.Опустите лук вниз и приложите стрелу к тетиве.</Text> Опустите лук к земле и приложите древко стрелы к гнезду тетивы. Вам следует приложить к тетиве хвостовик стрелы с выемкой на нем, так называемой зарубкой (хвостовик может быть представлен пластиковой насадкой). Если у стрелы три пера, расположите ее таким образом, чтобы одно перо было обращено вверх. Затем приложите стрелу под бусинкой на тетиве (если бусинка всего одна) или между двумя бусинками, которыми отмечено гнездо.
        </Text>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/5/5a/Shoot-an-Arrow-Step-4-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-4-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text}>
        <Text style={{fontWeight: "bold"}}>4.Тремя пальцами слегка придерживайте стрелу на тетиве.</Text> Если вы стреляете с прицелом (ориентируясь по мушке), расположите указательный палец на стреле, а средний и безымянный — под ней. Это так называемый средиземноморский хват со стрелой между пальцами. Если вы стреляете без прицела, расположите все три пальца под стрелой, так вам будет проще поднести ее ближе к глазу. Придерживайте тыльный конец стрелы большим пальцем и следите, чтобы она располагалась ровно.
        </Text>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/2/20/Shoot-an-Arrow-Step-5-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-5-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text}><Text style={{fontWeight: "bold"}}>5.
Направьте лук на цель.</Text> Сохраняя положение пальцев на тетиве, поднимите лук и направьте его на цель. Руки расположите параллельно земле и помните, что лук нужно держать в вертикальном положении. В правильной стойке ваш взгляд будет направлен вдоль древка стрелы.</Text>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/a/aa/Shoot-an-Arrow-Step-6-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-6-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text}>
        <Text style={{fontWeight: "bold"}}>6.Тремя пальцами оттяните тетиву к своему лицу.</Text> Работайте мышцами спины, чтобы увеличить силу, а руку максимально расслабьте. Натягивайте тетиву до тех пор, пока не почувствуете достаточное напряжение лука, потом в качестве ориентира можно будет использовать свой подбородок, щеку, ухо или иную часть тела, чтобы всегда натягивать тетиву до одной и той же точки.[5]
Постарайтесь оттянуть тетиву настолько сильно, насколько это возможно. Это увеличит точность, а также снизит влияние ветра и силы тяжести.
Натягивая тетиву, приподнимайте локоть вверх. Так у вас будут работать мышцы плеча, а не руки.
        </Text>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/f/f2/Shoot-an-Arrow-Step-7-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-7-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text}>
        <Text style={{fontWeight: "bold"}}>7.Прицельтесь.</Text> Большинство лучников-любителей используют технику интуитивной стрельбы. Для этого просто направьте лук таким образом, чтобы наконечник стрелы указывал на цель. Если вам необходимо стрелять более точно, попробуйте купить регулируемый прицел, который крепится к луку. Во время стрельбы можно прикрывать неведущий глаз или смотреть вперед как обычно двумя глазами</Text>
        <Image source={ {uri: 'https://www.wikihow.com/images/thumb/7/75/Shoot-an-Arrow-Step-8-Version-2.jpg/v4-728px-Shoot-an-Arrow-Step-8-Version-2.jpg.webp'}} style={{width: "100%", height: 250,marginBottom:30,}} />
        <Text style={styles.Text} ><Text style={{fontWeight: "bold"}}>8.Отпустите стрелу, расслабив пальцы на натянутой тетиве.</Text>  Цель состоит в том, чтобы выполнить чистый спуск, с минимальным замедлением и побочным воздействием на стрелу. Несмотря на то, что это может показаться легкой задачей, то, каким образом вы отпускаете тетиву, влияет на полет стрелы, и любое неловкое движение или колебание может сбить ее с курса. Выстрелив, подождите, пока стрела не долетит до цели, после чего опустите лук.[7]
        Не выдвигайте руку вперед, чтобы "усилить" стрелу в момент выстрела.Максимально сохраняйте неподвижность, чтобы выстрел был наиболее точным.
Обращайте внимание на отдачу лука после выстрела и на то, покачиваетесь ли вы под ее воздействием, так как это может говорить о том, что вы находитесь не в лучшей физической форме.</Text>
            </ScrollView>
        </LinearGradient>
  
    );
};

export default Rules;


const styles = StyleSheet.create({
    main: {
        flex: 1,  
    },
    Text:{
//textAlign:"center",
justifyContent:"center",
paddingLeft:10,
color:"white",
fontSize: 18,
marginBottom:25,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tipsText: {
        color:"white",
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 20,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 21, 48, 0.93)',
      },
      modalHeader: {
        color:"white",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      CloseButton:{
        

color:"white",
fontSize: 18,


      },
      CloseButtonBackGround:{
        backgroundColor: 'rgba(7, 24, 107, 0.93)',
        padding:10,
      },
  
  });
  
  