import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectArrowById } from '../Store/TrainingSlice';
import { PDFDocument, rgb } from 'react-native-pdf-lib';
/*
const TrainingResult = ({ route }) => {
  const { trainingId } = route.params;
  const trainingData = useSelector((state) => selectArrowById(state, trainingId));
 console.log(trainingData)
 const saveToPDF = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
  
      const page = pdfDoc.addPages([400, 600]);
      const { width, height } = page.getSize();
  
      page.drawText('Training Results', {
        x: 50,
        y: height - 50,
        color: rgb(0, 0, 0),
      });
  
      // Добавьте данные тренировки в PDF
      page.drawText(`Score: ${trainingData.score}`, {
        x: 50,
        y: height - 100,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Date: ${trainingData.date}`, {
        x: 50,
        y: height - 150,
        color: rgb(0, 0, 0),
      });
      // Добавьте остальные данные тренировки
  
      const pdfBytes = await pdfDoc.save();
      
      // Сохраните PDF на устройство
      const pdfFilePath = `${FileSystem.cacheDirectory}/training_results.pdf`;
      await FileSystem.writeAsStringAsync(pdfFilePath, pdfBytes, { encoding: FileSystem.EncodingType.Base64 });
  
      console.log('PDF saved to:', pdfFilePath);
    } catch (error) {
      console.error('Error saving PDF:', error);
    }
  };
  return (
    <View>
      
      <Text>Очки: {trainingData.trainingName}</Text>
      <Text>Дата: {trainingData.formattedDate}</Text>
      <Text>Лук: {trainingData.selectedBow}</Text>
    
      <Text>Раунд: {trainingData.rounds}</Text>
      <Text>Вид мишени: {trainingData.selectedMenu}</Text>

      
      <TouchableOpacity onPress={saveToPDF}>
        <Text>Сохранить в PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrainingResult;*/
const TrainingResult = ({ route }) => {
    
};
    export default TrainingResult;