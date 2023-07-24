import FormInput from "./common/formInput";
import apiRoute from "../apiRoute";
import { useState } from "react";
import axios from "axios";

const YoutubeAssistantForm = () => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");

  const submit = async () => {
    const data = {
      url: url,
      query: query,
    };

    try {
      const response = await axios.post(`${apiRoute}youtube_assistant/`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <FormInput
        name={"url"}
        type={"text"}
        value={url}
        placeholder={"Youtube Url"}
        onChange={setUrl}
      />
      <FormInput
        name={"query"}
        type={"text"}
        value={query}
        placeholder={"Query"}
        onChange={setQuery}
      />
      <button type="submit" className="border ">
        Submit
      </button>
    </form>
  );
};

export default YoutubeAssistantForm;
