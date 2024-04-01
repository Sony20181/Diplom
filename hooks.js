
  // функция подсчета очков за тренировку
export const getTotalScore = (mas) => {
  return mas.reduce((total, round) => {
      return total + round.reduce((roundTotal, shots) => {
          return roundTotal + shots.reduce((shotTotal, shot) => {
              return shotTotal + (shot.score === "X" ? 10 : parseInt(shot.score, 10));
          }, 0);
      }, 0);
  }, 0);
};

  // Возвращаем стиль для круглого фона в зависимости от балла 
  export const getScoreStyle = (score, selectmenu) => ({ 
    backgroundColor: getScoreColor(score, selectmenu), 
    width: 25, 
    height: 25, 
    borderRadius: 12.5, // Делаем круглый 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 5 
  });

  export const getScoreColor = (score, selectmenu) => {
    switch(selectmenu) {
        case 'WA Полный':
            return getScoreColorWAFull(score);
        case 'WA 6 колец':
            return getScoreColorWA6Ring(score);
        case 'WA вертикальный 3-х':
            return getScoreColorWAFull(score);
        default:
            return getScoreColorWAFull(score);
    }
};


export const getScoreColorWAFull = (score) => { 
  switch(score) { 
    case "X": return '#FFFF00';  
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

export const getScoreColorWA6Ring = (score) => {  
  switch(score) {  
    case "X": return '#fbff00';   
    case 10: return '#ecf013';  
    case 9: return '#fbff00';   
    case 8: return '#bf2133';   
    case 7: return '#c22b3c';   
    case 6: return '#2d2b94';   
    case 5: return '#08068c';   
    
    default: return '#2b2b2e';   
  }  
}; 


export const calculateAveragePoints = (allRounds) => {
  const countpoint = [];

  allRounds.forEach((round) => {
    count = 0
    round.forEach((points) => {

      points.forEach((point, index) => { 
        
         count  += (point.score === "X" ? 10 : parseInt(point.score, 10));
        
      }); 
      countpoint.push((count / points.length).toFixed(2));
      count = 0
    });   
  });

  return countpoint;
}

export const functionScoreCounts = (mas,selectedMenu) => {
  const scoreCounts = {};
  mas.forEach(rounds => {
    rounds.forEach(round => {
      round.forEach(point => {
        const score = point.score;
        if (scoreCounts[score]) {
          scoreCounts[score] += 1;
        } else {
          scoreCounts[score] = 1;
        }
      });
    });
  });
  const result = Object.keys(scoreCounts).map(key => {
  
    return {
      value: scoreCounts[key],
      label: key,
      color: getScoreColor(Number(key),selectedMenu)
    };
  });
  return result;
};