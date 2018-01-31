function countSmileys(arr) {
  let smiles = 0;
  let eyes = [";", ":"];
  let noses = ["-", "~"];
  let mouth = [")", "D"];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length == 3){
      if (((eyes.indexOf(arr[i][0]) != -1)) && (noses.indexOf(arr[i][1]) != -1) && (mouth.indexOf(arr[i][2]) != -1)){
        smiles++;
      }
    } else if (arr[i].length ==2){
      if ((eyes.indexOf(arr[i][0]) != -1) && (mouth.indexOf(arr[i][1]) != -1)){
        smiles++;
      }
    }
  }
  return smiles;
}
