import { useState } from 'react'
import StartScreen from './StartScreen.jsx'
import NavigationButtons from './NavigationButtons.jsx'
import AnswerButtons from './AnswerButtons.jsx'
import GameOverScreen from './GameOverScreen.jsx'
import './App.css'
import TriviaCard from './TriviaCard.jsx'
import TriviaHeader from './TriviaHeader.jsx'

// Sample trivia data
const triviaData = [
  { id: 1, question: "Which revolutionary music channel launched in 1981, turning music videos into a must-watch spectacle?", answer: "MTV" },
  { id: 2, question: "What pocket-sized music marvel did Sony unveil in 1980, letting you groove on the go?", answer: "Sony Walkman" },
  { id: 3, question: "Who soared to the stars as the first American woman to travel to space in 1983?", answer: "Sally Ride" },
  { id: 4, question: "Which iconic video game character made his debut in the arcade game 'Donkey Kong' in 1981?", answer: "Mario" },
  { id: 5, question: "What groundbreaking computer, released by Apple in 1984, featured a graphical user interface and a mouse?", answer: "Apple Macintosh" },
  { id: 6, question: "Which blockbuster film series kicked off in 1980 with a story about a young wizard?", answer: "Harry Potter" },
  { id: 7, question: "What popular toy, introduced in 1983, allowed kids to create and customize their own miniature dolls with colorful hair?", answer: "Cabbage Patch Kids" },
  { id: 8, question: "Which iconic 1980s TV show featured a group of wealthy ex-soldiers helping those in need while driving around in a van?", answer: "The A-Team" },
  { id: 9, question: "What major global event took place in 1989, symbolizing the end of the Cold War and leading to the reunification of Germany?", answer: "Fall of the Berlin Wall" },
  { id: 10, question: "Which legendary pop star released the album 'Thriller' in 1982, which went on to become the best-selling album of all time?", answer: "Michael Jackson" },
  { id: 11, question: "What popular dance craze, characterized by its energetic moves and originated in the 1980s, became a global phenomenon?", answer: "The Moonwalk" },
  { id: 12, question: "Which iconic 1980s movie featured a time-traveling DeLorean car?", answer: "Back to the Future" },
  { id: 13, question: "What was the name of the first space shuttle launched by NASA in 1981?", answer: "Columbia" },
  { id: 14, question: "Which 1980s sitcom featured the characters J.R. Ewing and Sue Ellen?", answer: "Dallas" },
  { id: 15, question: "What popular 1980s toy line featured transforming robots that could change into vehicles?", answer: "Transformers" },
  { id: 16, question: "Which 1980s pop icon was known as the 'Material Girl'?", answer: "Madonna" },
  { id: 17, question: "Which band delivered the ultimate rock anthem 'Pour Some Sugar on Me' in 1987?", answer: "Def Leopard" },
  { id: 18, question: "Which 1980s video game featured a yellow character that gobbled up dots and avoided ghosts?", answer: "Pac-Man" },
  { id: 19, question: "What 1980s movie featured a group of teenagers who discovered a hidden treasure map?", answer: "The Goonies" },
  { id: 20, question: "Which 1980s TV show featured a talking car named KITT?", answer: "Knight Rider" },
];

function TriviaApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCards, setAnsweredCards] = useState(new Set());

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setCurrentIndex(0);
    setFlipped(false);
    setAnsweredCards(new Set());
  };

  if (gameOver) {
    return (
      <GameOverScreen
        score={score}
        total={triviaData.length}
        onRestart={startGame}
      />
    );
  }

  // Go to previous question
  const handlePrevious = () => {
    // Reset flip when changing question
    setFlipped(false);
    // Go to previous question with wrap around
    setCurrentIndex((prev) => 
      prev === 0 ? triviaData.length - 1 : prev - 1
    );
  };

  // Go to next question
  const handleNext = () => {
    // Reset flip when changing question
    setFlipped(false);
    // Go to next question with wrap around
    setCurrentIndex((prev) => 
      prev === triviaData.length - 1 ? 0 : prev + 1
    );
  };

  // Toggle answer visibility
  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const markCorrect = () => {
    if (!answeredCards.has(currentIndex)) {
      setScore((prev) => prev + 1);
      markAnswered();
    }
  };

  const markWrong = () => {
    if (!answeredCards.has(currentIndex)) {
      markAnswered();
    }
  };

  const markAnswered = () => {
    const updated = new Set(answeredCards);
    updated.add(currentIndex);
    setAnsweredCards(updated);
    setFlipped(false);

    if (updated.size === triviaData.length) {
      setGameOver(true);
    }
  };

  const currentCard = triviaData[currentIndex];

  if (!gameStarted) {
    return <StartScreen onStart={startGame} />;
  }

  return (
    <>
      <div>
        <TriviaHeader
          title="Welcome to the 1980's Trivia Game!"
          subtitle="Test your knowledge of the 1980's with this fun trivia game!"
        />
          <div className="card-nav">
            {/* Card count - which card are you on */}
            <div className="card-count">  
              <h2>Trivia Card {currentIndex + 1} of {triviaData.length}</h2>
            </div>
          </div>
          <div className="instruction">
            <p>Click on the card to see the answer!</p>
          </div>  
          <div className="score-board">
            <h2>Score: {score}</h2>
          </div>
      </div>
      <div className='container'>
        <TriviaCard
          question={currentCard.question}
          answer={currentCard.answer}
          flipped={flipped}
          onFlip={toggleFlip}
        />

        {/* Show answer buttons only when flipped */}
        {flipped && !answeredCards.has(currentIndex) && (
        <AnswerButtons onCorrect={markCorrect} onWrong={markWrong} />
        )}

        {/* Navigation buttons */}
        <NavigationButtons onPrevious={handlePrevious} onNext={handleNext} />
      </div>
    </>
  );
} 

export default TriviaApp
