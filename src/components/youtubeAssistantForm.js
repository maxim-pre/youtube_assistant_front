import apiRoute from "../apiRoute";
import { useState } from "react";
import axios from "axios";

const YoutubeAssistantForm = ({ setResponse, setLoading }) => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const data = {
      url: url,
      query: query,
    };

    try {
      setLoading(true);
      setErrors("");
      const response = await axios.post(`${apiRoute}youtube_assistant/`, data);
      response.data.response
        ? setResponse(response.data.response)
        : setResponse(response.data);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col max-w-[800px] mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="mb-6">
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Youtube video URL"
          className={` border outline-0 text-sm rounded-lg block w-full p-2.5 pl-4 bg-gray-700 border-gray-600 placeholder-gray-400 text-white `}
        ></input>
      </div>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-700">
        <textarea
          id="chat"
          rows="2"
          className="block outline-0 p-2.5 w-full text-sm rounded-lg border  bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
          placeholder="Your question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 ml-1 rounded-full cursor-pointer  text-blue-500 hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5 rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
      {errors && (
        <ul className="list-disc text-left list-inside px-2 my-2 rounded bg-red-500 py-2">
          {Object.entries(errors).map((error) => {
            return (
              <li className="text-white text-sm">{`${error[0]}: ${error[1]}`}</li>
            );
          })}
        </ul>
      )}
    </form>
  );
};

export default YoutubeAssistantForm;
