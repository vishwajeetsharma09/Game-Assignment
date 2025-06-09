import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const wordList = [
  "COLD", "CORD", "WORD", "WARD", "WARM",
  "FLIP", "SLIP", "SLOT", "SPOT", "SPIT",
  "CAT", "COT", "DOT", "DOG",
  "TEA", "SEA", "SET", "SIT", "PIT", "PIN",
  "CODE", "COME", "GAME", "GALE", "SALE", "SAGE",
  "MICE", "RICE", "RATE", "GATE", "GAPE", "JAPE",
  "ROCK", "ROBE", "RODE", "RUDE", "RULE", "RUIN",
  "SLOW", "FLOW", "FLAW", "FLAY", "PLAY", "PLAN",
  "HATE", "LATE", "LAKE", "MAKE", "MARK", "MARS",
  "FOUR", "FOUL", "SOUL", "SOAP", "SWAP", "SWAM",
  "GRAPES", "SCOPES", "SPORTS", "SPENDS", "SPADES", "SPASMS",
  "CRUEL", "CREEK", "CRACK", "TRACK", "TRACE", "SPACE",
  "HOUSE", "HOVER", "COVER", "CAVER", "SAVER", "SAUER",
  "BLAST", "BLESS", "GLASS", "GLARE", "GRAVE", "GRACE",
  "QUICK", "SICKY", "STICK", "STOCK", "STORK", "STONE",
  "LEAST", "LEASH", "FEAST", "FLASH", "CRASH", "CRASH",
  "LIGHT", "MIGHT", "NIGHT", "KNITS", "KITES", "BITES",
  "SWEET", "SWELL", "SMELL", "SHELL", "SHILL", "SKILL",
  "BEAST", "BRAVE", "BRACE", "SPACE", "SNAKE", "SNACK",
  "HAPPY", "HARMS", "CHARMS", "CHASMS", "CLARMS", "CLAIMS",
  "START", "STAMP", "SCAMP", "SCAMP", "SHARP", "SHAPE",
  "GRASS", "GLOSS", "BLUES", "BUBBS", "BONDS", "BONGO",
  "BLACK", "BLOCK", "BROCK", "CLOCK", "CLICK", "CLACK",
  "WHITE", "WRITE", "WROTE", "GROVE", "DRIVE", "DRIVE",
  "WATER", "WAFER", "WAVER", "HAVER", "HEAVY", "HEADY",
  "DREAM", "DRINK", "DRONE", "DREAD", "DRAPE", "DRAKE",
  "APPLE", "APPLY", "APART", "AWAIT", "AWAKE", "AROSE",
  "TABLE", "CABLE", "CRANE", "CRANK", "CHANK", "CHURN",
  "BUILD", "GUILD", "GILLS", "GIVEN", "GAMES", "GAINS",
  "PLANT", "PLANE", "PLACE", "CLACK", "CLOCK", "CLICK",
  "SMART", "START", "STARE", "SHARE", "SHORE", "SHINE",
  "TRUST", "FRUIT", "FLUID", "FLUKE", "FLAKE", "FLASH",
  "CLOSE", "CLOUD", "CROWD", "DREAM", "DRAIN", "DRANK",
  "HOUSE", "MOUSE", "MOUTH", "SOUTH", "SHOUT", "SHOOT",
  "PHONE", "POUND", "FOUND", "SOUND", "ROUND", "ROBIN",
  "TRAIN", "GRAIN", "DRAIN", "DRANK", "TRICK", "TRACK",
  "STONE", "STONY", "STORY", "STORE", "SCORE", "SCOUR",
  "FLAME", "FRAME", "FROZE", "FROTH", "FRONT", "FROWN",
  "BRIDE", "PRIDE", "PRIZE", "CRIME", "CRUMB", "CRUMP",
  "GHOST", "GROSS", "GRASS", "GLASS", "CLASS", "CLASP",
  "SWING", "SWISH", "SWITCH", "STITCH", "STICKY", "STOCKY",
  "CATCH", "HATCH", "MATCH", "PATCH", "WATCH", "WASTE",
  "HAPPY", "HONEY", "MONEY", "MOODY", "MUDDY", "MUDDL",
  "CRAZY", "GRAZY", "GRAPE", "CRAPE", "CRAMP", "CRANK",
  "DRIVE", "DRINK", "DREAM", "DREAD", "DRAPE", "DRAKE",
  "BRUSH", "CRUSH", "CRUMB", "CRUMP", "GRUMP", "GRAPE",
  "LIGHT", "FIGHT", "NIGHT", "KNITS", "KITES", "BITES",
  "SWEET", "SWELL", "SMELL", "SHELL", "SHILL", "SKILL",
  "BEAST", "BRAVE", "BRACE", "SPACE", "SNAKE", "SNACK",
  "START", "STAMP", "SCAMP", "SCAMP", "SHARP", "SHAPE",
  "GRASS", "GLOSS", "BLUES", "BUBBS", "BONDS", "BONGO",
  "BLACK", "BLOCK", "BROCK", "CLOCK", "CLICK", "CLACK",
  "WHITE", "WRITE", "WROTE", "GROVE", "DRIVE", "DRIVE",
  "WATER", "WAFER", "WAVER", "HAVER", "HEAVY", "HEADY",
  "DREAM", "DRINK", "DRONE", "DREAD", "DRAPE", "DRAKE",
  "APPLE", "APPLY", "APART", "AWAIT", "AWAKE", "AROSE",
  "TABLE", "CABLE", "CRANE", "CRANK", "CHANK", "CHURN",
  "BUILD", "GUILD", "GILLS", "GIVEN", "GAMES", "GAINS",
  "PLANT", "PLANE", "PLACE", "CLACK", "CLOCK", "CLICK",
  "SMART", "START", "STARE", "SHARE", "SHORE", "SHINE",
  "TRUST", "FRUIT", "FLUID", "FLUKE", "FLAKE", "FLASH",
  "CLOSE", "CLOUD", "CROWD", "DREAM", "DRAIN", "DRANK",
  "HOUSE", "MOUSE", "MOUTH", "SOUTH", "SHOUT", "SHOOT",
  "PHONE", "POUND", "FOUND", "SOUND", "ROUND", "ROBIN",
  "TRAIN", "GRAIN", "DRAIN", "DRANK", "TRICK", "TRACK",
  "STONE", "STONY", "STORY", "STORE", "SCORE", "SCOUR",
  "FLAME", "FRAME", "FROZE", "FROTH", "FRONT", "FROWN",
  "BRIDE", "PRIDE", "PRIZE", "CRIME", "CRUMB", "CRUMP",
  "GHOST", "GROSS", "GRASS", "GLASS", "CLASS", "CLASP",
  "SWING", "SWISH", "SWITCH", "STITCH", "STICKY", "STOCKY",
  "CATCH", "HATCH", "MATCH", "PATCH", "WATCH", "WASTE",
  "HAPPY", "HONEY", "MONEY", "MOODY", "MUDDY", "MUDDL",
  "CRAZY", "GRAZY", "GRAPE", "CRAPE", "CRAMP", "CRANK",
  "DRIVE", "DRINK", "DREAM", "DREAD", "DRAPE", "DRAKE",
  "BRUSH", "CRUSH", "CRUMB", "CRUMP", "GRUMP", "GRAPE"
];

export default function App() {
  const [startWord, setStartWord] = useState('');
  const [targetWord, setTargetWord] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [playerInput, setPlayerInput] = useState('');
  const [path, setPath] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    if (wordList.includes(startWord.toUpperCase()) && wordList.includes(targetWord.toUpperCase()) && startWord.length === targetWord.length) {
      setCurrentWord(startWord.toUpperCase());
      setPath([startWord.toUpperCase()]);
      setGameStarted(true);
    } else {
      Alert.alert("Invalid words", "Please enter valid words of the same length from the list.");
    }
  };

  const checkWord = () => {
    const inputUpper = playerInput.toUpperCase();
    if (!wordList.includes(inputUpper)) {
      Alert.alert("Invalid word", "The word is not in the dictionary.");
      return;
    }

    if (inputUpper.length !== currentWord.length) {
      Alert.alert("Invalid length", "The word must be the same length as the current word.");
      return;
    }

    let diffCount = 0;
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] !== inputUpper[i]) {
        diffCount++;
      }
    }

    if (diffCount === 1) {
      setCurrentWord(inputUpper);
      setPath([...path, inputUpper]);
      setPlayerInput('');
      if (inputUpper === targetWord.toUpperCase()) {
        Alert.alert("Congratulations!", "You transformed the word!");
        setGameStarted(false);
      }
    } else {
      Alert.alert("Invalid move", "The word must differ by exactly one letter from the current word.");
    }
  };

  const resetGame = () => {
    setStartWord('');
    setTargetWord('');
    setCurrentWord('');
    setPlayerInput('');
    setPath([]);
    setGameStarted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word Transform Game</Text>

      {!gameStarted ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Start Word"
            onChangeText={setStartWord}
            value={startWord}
            autoCapitalize="characters"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Target Word"
            onChangeText={setTargetWord}
            value={targetWord}
            autoCapitalize="characters"
          />
          <Button title="Start Game" onPress={startGame} />
        </View>
      ) : (
        <View>
          <Text style={styles.wordDisplay}>Current Word: {currentWord}</Text>
          <Text style={styles.wordDisplay}>Target Word: {targetWord}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter next word"
            onChangeText={setPlayerInput}
            value={playerInput}
            autoCapitalize="characters"
          />
          <Button title="Submit Word" onPress={checkWord} />
          <Button title="Reset Game" onPress={resetGame} color="red" />
          <Text style={styles.pathDisplay}>Path: {path.join(' -> ')}</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    textAlign: 'center',
  },
  wordDisplay: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pathDisplay: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
