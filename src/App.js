import { useState } from "react";
import "./App.css";
import YoutubeAssistantForm from "./components/youtubeAssistantForm";
import TypingAnimation from "./components/common/typingAnimation";
import LoadingAnimation from "./components/common/loadingAnimation";

function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="App flex flex-col items-center h-screen bg-gray-900 py-8 px-6">
      <div className=" w-full">
        <YoutubeAssistantForm
          setResponse={setResponse}
          setLoading={setLoading}
        />
      </div>
      {loading && (
        <div className="text-white text-4xl code mt-16">
          <LoadingAnimation text={"Generating response"} speed={300} dots={5} />
        </div>
      )}
      {!loading && (
        <p className="w-full max-w-[800px] rounded text-gray-200 code text-justify overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 px-4 mt-4 mb-16 ">
          <TypingAnimation text={response} typingSpeed={10} />
        </p>
      )}
      <footer className="absolute bottom-0 bg-gray-800 w-full h-16 flex items-center justify-center text-gray-200 code text-xs sm:text-sm">
        <p>
          This application was developed using Langchain. Please feel free to
          checkout the source code on my{" "}
          <a
            className="text-blue-500 underline cursor-pointer"
            href="https://github.com/maxim-pre/youtube_assistant_front"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
