import React, { useState } from "react";
import axios from "axios";
import '../Styles/PlayGround.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function CodingPlayGround() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [metrics, setMetrics] = useState({ time: 0, memory: 0 });
  const [language, setLanguage] = useState("java"); // Default language

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleRunCode = async () => {
    try {
      const response = await axios.post("http://localhost:8080/execute", {
        code,
        input,
        language, // Include language in the request
      });
      setOutput(response.data.output);
      setError(response.data.error);
      setMetrics({
        time: response.data.time,
        memory: response.data.memory,
      });
    } catch (err) {
      setError("Error executing the code");
    }
  };

  return (
    <>
      <Nav />
      <div className='back'>
    <Link to ="/">&lt; Back</Link></div>
      <div className="App1">
        <div className="editor-container">
          <div className="editor-header">
            <button onClick={handleRunCode} className="run-button">Run Code</button>
            <select value={language} onChange={handleLanguageChange} className="language-dropdown">
              <option value="java">Java</option>
             
            </select>
          </div>
          <AceEditor
  mode={language}
  theme="github" // Use the desired theme
  onChange={handleCodeChange}
  name="codeEditor"
  editorProps={{ $blockScrolling: true }}
  value={code}
  className="code-editor"
  style={{ width: '100%' }} // Only set the width
/>
        </div>
        
        <div className="output-container">
        <h2 className="play"> Input:</h2>
          <textarea
            placeholder="Enter Input"
            value={input}
            onChange={handleInputChange}
            className="input-area"
          />
          <div className="output-section">
            <h2 className="play"> Output:</h2>
            <pre>{output}</pre>
          </div>
          {error && (
            <div className="error-section">
              <h2 className="play">Error:</h2>
              <pre className="error-output">{error}</pre>
            </div>
          )}
          <div className="metrics-section">
            <h2 className="play">Metrics:</h2>
            <p>Time: {metrics.time}ms</p>
            <p>Memory: {metrics.memory}KB</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodingPlayGround;
