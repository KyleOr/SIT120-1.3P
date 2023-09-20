<template>
    <div class="home-page">
      <div class="hangman-game">
        <h2 class="game-title">Hangman</h2>
        <div class="word-display">
          <span v-for="(letter, index) in displayedWord" :key="index">
            {{ letter }}
          </span>
        </div>
        <div class="guess-input">
          <input
            v-model="guess"
            :disabled="gameOver"
            @input="checkGuess"
            placeholder="input"
            maxlength="1"
          />
          <button @click="resetGame">Restart</button> 
          <div class="attempts">
                <p>
                <span v-if="gameOver && resultEmoji === '🎉'">🎉 You won!</span>
                <span v-else-if="gameOver && resultEmoji === '😞'">😞 You lost!</span>
                <span v-else>Attempts left: {{ attemptsLeft }}</span>
                </p>
            </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
    export default {
        name: "HomePage",
        data() {
        return {
            words: ["hangman", "kyle", "portfolio", "handsome", "programming", "javascript"],
            word: "", 
            displayedWord: [], 
            guessedLetters: [], 
            guess: "", 
            attemptsLeft: 6, 
            gameOver: false, 
        };
        },
        mounted() {
        this.initializeGame();
        },
        methods: {
        getRandomWord() {
            return this.words[Math.floor(Math.random() * this.words.length)];
        },
        initializeGame() {
            this.word = this.getRandomWord(); 
            this.displayedWord = Array(this.word.length).fill("_"); 
            this.guessedLetters = []; 
            this.guess = "";
            this.attemptsLeft = 6; 
            this.gameOver = false;
        },
        checkGuess() {
            if (this.guess.length === 1) {
            if (this.word.includes(this.guess)) {
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] === this.guess) {
                this.displayedWord[i] = this.guess;
                }
            }
            } else {
                this.attemptsLeft--;
                }
                this.guessedLetters.push(this.guess);
            if (this.displayedWord.join("") === this.word) {
            // Player won the game
                this.gameOver = true;
                this.resultEmoji = "🎉"; 
            } else if (this.attemptsLeft === 0) {
            // Player lost the game
                this.gameOver = true;
                this.resultEmoji = "😞";
            }
        }
        this.guess = "";
        },
        resetGame() {
            this.initializeGame();
        },
        },
    };
  </script>
  
  
  
  <style scoped>
  .home-page {
    text-align: center;
    padding: 2rem;
  }


.guess-input,
.game-title{
  font-family: 'serif';
  font-size: 2rem; 
  margin-bottom: 1rem;
}
  
  .game-title {
    color: white;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .hangman-game {
    padding: 1rem;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3); 
    display: inline-block;
    }
  
  .word-display {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .guess-input input {
    background-color: rgba(255, 255, 255, 0.6); 
    padding: 0.5rem;
    font-size: 1.5rem;
    width: 100px;
    text-transform: uppercase;
  }
  
  .guess-input button {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.6); 
    color: #000000;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
  }
  
  .attempts {
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  
  </style>
  