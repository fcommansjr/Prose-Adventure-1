const steps = document.querySelectorAll('.step');
const choices = document.querySelectorAll('.choices button');

const gameState = {
  currentStep: 1,
};

function displayStep(step) {
  steps.forEach((stepElement) => stepElement.classList.remove('active'));
  choices.forEach((choiceElement) => (choiceElement.style.display = 'none'));

  const currentStepElement = document.getElementById(`step${step}`);
  const currentStepChoices = currentStepElement.querySelector('.choices');

  currentStepElement.classList.add('active');
  currentStepChoices.style.display = 'flex';

  const storyElement = currentStepElement.querySelector('.story');
  const choiceButtons = currentStepElement.querySelectorAll('button');

  switch (step) {
    case 1:
      storyElement.textContent = "You wake up to a bright light outside your window. As you look closer, you see a strange spaceship hovering over the city. What do you do?";
      choiceButtons[0].textContent = "Hide under the bed";
      choiceButtons[1].textContent = "Go outside and investigate";
      break;
    case 2:
      storyElement.textContent = "You hide under the bed, but the aliens spot you anyway. They break into your house and capture you. What now?";
      choiceButtons[0].textContent = "Try to negotiate with the aliens";
      choiceButtons[1].textContent = "Attempt to escape";
      break;
    case 3:
      storyElement.textContent = "You cautiously go outside to investigate. You see the aliens are friendly and have come in peace. They want to learn about humanity. How do you respond?";
      choiceButtons[0].textContent = "Welcome the aliens and offer help";
      choiceButtons[1].textContent = "Alert the military about the invasion";
      break;
    case 4:
      storyElement.textContent = "You try to negotiate with the aliens, but they don't understand your language. They seem frustrated and take you to their spaceship. What's your next move?";
      choiceButtons[0].textContent = "Try to escape from the spaceship";
      choiceButtons[1].textContent = "Cooperate with the aliens and hope for the best";
      break;
    case 5:
      storyElement.textContent = "You attempt to escape from the spaceship, but the aliens catch you before you get far. They put you back in your room. You have another chance to react.";
      choiceButtons[0].textContent = "Sneak out of your room and find a way to communicate with the aliens";
      choiceButtons[1].textContent = "Resign yourself to the aliens' intentions and wait for more information";
      break;
    case 6:
      storyElement.textContent = "You decide to welcome the aliens and offer your assistance in understanding human culture. They appreciate your kindness and show you their advanced technology. What do you do?";
      choiceButtons[0].textContent = "Study and learn from their technology";
      choiceButtons[1].textContent = "Feel overwhelmed and ask them to leave";
      break;
    // Continue the story with more steps and choices
    default:
      storyElement.textContent = "The adventure continues...";
      break;
  }
}

function handleChoice(choice) {
  if (gameState.currentStep === 1) {
    if (choice === 1) {
      gameState.currentStep = 2;
    } else if (choice === 2) {
      gameState.currentStep = 3;
    }
  } else if (gameState.currentStep === 2) {
    if (choice === 1) {
      gameState.currentStep = 4;
    } else if (choice === 2) {
      gameState.currentStep = 5;
    }
  } else if (gameState.currentStep === 3) {
    if (choice === 1) {
      gameState.currentStep = 6;
    } else if (choice === 2) {
      gameState.currentStep = 7;
    }
  } else if (gameState.currentStep === 4) {
    if (choice === 1) {
      gameState.currentStep = 8;
    } else if (choice === 2) {
      gameState.currentStep = 9;
    }
  } else if (gameState.currentStep === 5) {
    if (choice === 1) {
      gameState.currentStep = 10;
    } else if (choice === 2) {
      gameState.currentStep = 11;
    }
  } else if (gameState.currentStep === 6) {
    if (choice === 1) {
      gameState.currentStep = 12;
    } else if (choice === 2) {
      gameState.currentStep = 13;
    }
  }
  // Add more conditions to handle other steps
  // ...

  displayStep(gameState.currentStep);
}

displayStep(gameState.currentStep);
