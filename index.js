function theBeatlesPlay(musicians, instruments){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  for (let musicians = 0, let instruments = 0; musicians <= 3, instruments <= 3; musicians++, instruments++){
    console.log(`${musicians} + plays the + ${instruments}`)
  }
  return theBeatlesPlay;
}
