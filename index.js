function theBeatlesPlay(musicians, instruments){
  var combo = [];
  for (let i = 0; i <= 3; i++){
    combo.push(musicians[i] + " plays " + instruments[i]);
  }
  return combo;
}
