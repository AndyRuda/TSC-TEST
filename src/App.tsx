import { useState, useEffect } from "react";
import { Container, Box, TextField, Typography } from "@mui/material";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie Lorem. Commodo elit at imperdiet dui accumsan sit amet nulla. Nunc sed velit dignissim sodales ut eu. Lacus vel facilisis volutpat est velit egestas dui. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Egestas sed sed risus pretium Lorem vulputate. Nibh ipsum consequat nisl vel pretium lectus quam. Blandit volutpat maecenas volutpat blandit aliquam etiam. Quisque sagittis purus sit amet Lorem consequat mauris nunc. Commodo ullamcorper a lacus Lorem sed. Elit eget gravida cum Lorem natoque penatibus et. Nibh mauris cursus Lorem mattis leo in vitae turpis massa sed elementum.";

function App() {
  const [word, setWord] = useState("lorem");
  const [text, setText] = useState(lorem);

  const [totalWords, setTotalWords] = useState(0);
  const [wordMatchs, setWordMatchs] = useState(0);

  useEffect(() => {
    if (word.length > 1 && text.length > 1) {
      //Lowercase word to find
      const wordLowerCase = word.toLowerCase();
      //Remove all comas & points
      const cleanText = text.replace(/[.,\n]/g, " ");
      //Make Array, Remove white spaces & lowercase
      const allWordsInText = cleanText
        .split(" ")
        .filter((w) => w !== "")
        .map((w) => w.toLowerCase());
      //Count all matchs
      const wordMatchs = allWordsInText.filter(
        (w) => w === wordLowerCase
      ).length;
      setTotalWords(allWordsInText.length);
      setWordMatchs(wordMatchs);
    }
  }, [word, text]);

  return (
    <Container component="main" maxWidth="sm">
      {/* Spacing to top */}
      <Box sx={{ paddingTop: "20%" }} />
      {/* Center */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h2" sx={{ marginBottom: "20px" }}>
          TCS Tecnical test
        </Typography>

        <TextField
          sx={{ alignSelf: "flex-end" }}
          margin="normal"
          required
          id="word"
          label="Please insert a word to find"
          name="word"
          value={word}
          onChange={(e) => setWord(e.target.value.replace(/[,.\n\s]/g, ""))}
          autoFocus
        />

        <TextField
          margin="normal"
          required
          multiline
          rows={5}
          fullWidth
          id="text"
          label="Please insert a Text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* Output */}
        {word.length > 1 && text.length > 1 ? (
          <Typography component="h5" variant="h5" sx={{ marginTop: "5%" }}>
            🌐 <b>"{word}"</b>{` was found ${wordMatchs} times in ${totalWords} words`}
          </Typography>
        ) : (
          <Typography component="h5" variant="h5" sx={{ marginTop: "5%" }}>
            Please Check Word and Text inputs ⚠️
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default App;
