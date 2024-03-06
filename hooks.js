export const getScoreColor = (score) => { 
    switch(score) { 
      case 12: return '#2b2b2e';  
      case 11: return '#2b2b2e';  
      case 10: return '#FFFF00'; 
      case 9: return '#FFFF00';  
      case 8: return '#f00520';  
      case 7: return '#ff001e';  
      case 6: return '#1cbaeb';  
      case 5: return '#07c1fa';  
      case 4: return '#1a1c1c';  
      case 3: return '#000';  
      case 2: return '#f5f7f7';  
      case 1: return '#fff';  
      default: return '#2b2b2e';  
    } 
  }; 
  
  // Возвращаем стиль для круглого фона в зависимости от балла 
  export const getScoreStyle = (score) => ({ 
    backgroundColor: getScoreColor(score), 
    width: 25, 
    height: 25, 
    borderRadius: 12.5, // Делаем круглый 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 5 
  });