  function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 2) {
  return 'papier';
  }
  if (argMoveId == 3) {
  return 'nożyce';
  }
  if (argMoveId == 1) {
  return 'kamień';
  }
  }

  function displayResult(argPlayerMove, argComputerMove) {  
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == argComputerMove){
    return '! R E M I S !'
  }
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
    return 'Komputer zagrał: KAMIEŃ - Wygrałeś!'
  }
  if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
    return 'Komputer zagrał: NOŻYCE - Wygrałeś!'
  }
  if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
    return 'Komputer zagrał: PAPIER - Wygrałeś!'
  }
  if (argPlayerMove == 'kamień' && argComputerMove == 'papier'){
    return 'Komputer zagrał: PAPIER - Przegrałeś :('
  }
  if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
    return 'Komputer zagrał: KAMIEŃ - Przegrałeś :('
  }
  if (argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
    return 'Komputer zagrał: NOŻYCE - Przegrałeś :('
  }
  }

  console.log('wybór ruchu gracza to: ' + argButtonName);
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber)
  
  let computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  
  printMessage(displayResult(argButtonName, computerMove));
  }

  button_rock = document.getElementById('button-rock');
  button_rock.addEventListener('click', function(){ buttonClicked('kamień'); });
  button_paper = document.getElementById('button-paper');
  button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
  button_scissors = document.getElementById('button-scissors');
  button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });