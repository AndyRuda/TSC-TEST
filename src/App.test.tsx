import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Renders App", () => {
  it("must render without crashing", () => {
    render(<App />);
    screen.getByText(/TCS Tecnical test/i);
  });

  it("must show Output while inputs are correct", () => {
    render(<App />);
    const wordInput = screen.getByLabelText(/Please insert a word to find/i);
    const textInput = screen.getByLabelText(/Please insert a Text/i);
    fireEvent.change(wordInput, { target: { value: "word" } });
    fireEvent.change(textInput, {
      target: { value: "word word noword word word no word" },
    });
    screen.getByText(/was found 5 times in 7 words/i);
  });

  it("must parce comas, points & white spaces", () => {
    render(<App />);
    const wordInput = screen.getByLabelText(/Please insert a word to find/i);
    fireEvent.change(wordInput, { target: { value: ", . , any word" } });
    screen.getByText(/anyword/i);
  });

  it("must count mayus & minus as same", () => {
    render(<App />);
    const wordInput = screen.getByLabelText(/Please insert a word to find/i);
    const textInput = screen.getByLabelText(/Please insert a Text/i);
    fireEvent.change(wordInput, { target: { value: "WoRd" } });
    fireEvent.change(textInput, {
      target: { value: "WORD word noWord W,oRd word no wor" },
    });
    screen.getByText(/was found 3 times in 8 words/i);
  });

  it("must not show Output while all inputs are incorrect", () => {
    render(<App />);
    const wordInput = screen.getByLabelText(/Please insert a word to find/i);
    const textInput = screen.getByLabelText(/Please insert a Text/i);
    fireEvent.change(wordInput, { target: { value: "" } });
    fireEvent.change(textInput, { target: { value: "" } });
    screen.getByText(/Please Check Word and Text inputs/i);
  });

  it("must not show Output while word input are incorrect", () => {
    render(<App />);
    const wordInput = screen.getByLabelText(/Please insert a word to find/i);
    fireEvent.change(wordInput, { target: { value: "" } });
    screen.getByText(/Please Check Word and Text inputs/i);
  });

  it("must not show Output while text input are incorrect", () => {
    render(<App />);
    const textInput = screen.getByLabelText(/Please insert a Text/i);
    fireEvent.change(textInput, { target: { value: "" } });
    screen.getByText(/Please Check Word and Text inputs/i);
  });
});
