import React, { useState } from "react";
import axios from "axios";
import "./App.css";
// import { PDFExtract, PDFExtractOptions } from "pdf.js-extract";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "",
  //process.env.OPENAI_API_KEY,
});

function App() {
  /*
  return await gptCompletion().then((response) => {
    if (response) {
      return <div>{response}</div>;
    } else {
      return <div>No Response</div>;
    }
  });
  */
  gptCompletion();
  return <div>Test</div>;
}

async function gptCompletion() {
  // Promise<string>
  const sample = "what is the capital of chile?";
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Answer the following question in 1 word: ${sample}`,
    temperature: 0,
    max_tokens: 7,
  });

  console.log("This is the response!");
  console.log(response.data.choices[0].text);

  // return response.data.choices[0].text;

  // getPDFData();
}

/*
function getPDFData() {
  const pdfExtract = new PDFExtract();
  const options: PDFExtractOptions = {};
  pdfExtract
    .extract("/Users/ivalenzuela/Desktop/invoice.pdf", options)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}


async function gptCompletion() {
  let response = {};
  try {
    response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello World" }],
    });
  } catch (e) {
    response = { error: e };
    console.log("Error getting GPT completion: ", e);
    // throw e;
  }

  console.log(response);
}
*/

// gptCompletion();

/*
function App() {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>Tell me something, and I'll tell you more</h2>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={5}
        placeholder="Type in some words and I'll finish the rest..."
      />
      <button className="button" onClick={handleClick}>
        Complete Sentence
      </button>
      {completedSentence && <p>Completed sentence: {completedSentence}</p>}
    </div>
  );
}

const fetchData = async (input: string, model?: "text-davinci-002") => {
  const API_KEY = "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";
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `Complete this sentence: "${input}"`,
      model: model,
      max_tokens: 50,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text;
};

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
