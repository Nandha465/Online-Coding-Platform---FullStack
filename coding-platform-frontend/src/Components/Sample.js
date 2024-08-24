import React, { useState } from "react";
import axios from "axios";
import AceEditor from "react-ace";
import '../Styles/Sample.css';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Sample() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [metrics, setMetrics] = useState({ time: 0, memory: 0 });
  const [language, setLanguage] = useState("java");

  // Define your test cases
  const testCases = [
    { input: "2 3", expectedOutput: "5" },
    { input: "-5 3", expectedOutput: "-2" },
    { input: "0 0", expectedOutput: "0" },
    { input: "1000000000 -1000000000", expectedOutput: "0" },
  ];

  // Define hidden test cases
  const hiddenTestCases = [
    { input: "999999999 1", expectedOutput: "1000000000" },
    { input: "-1000000000 -1", expectedOutput: "-1000000001" },
  ];

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
      let allPassed = true;
      let testOutput = "";
      let testError = "";
      let response = null;

      // If no input is provided, run all predefined test cases
      if (input.trim() === "") {
        for (let testCase of testCases) {
          response = await axios.post("http://localhost:8080/execute", {
            code,
            input: testCase.input,
            language,
          });

          const actualOutput = response.data.output.trim();

          if (actualOutput !== testCase.expectedOutput) {
            allPassed = false;
            testError = `Test Failed!\nExpected: ${testCase.expectedOutput}\nReceived: ${actualOutput}`;
            break;
          }
        }

        // If all visible test cases pass, check the hidden test cases
        if (allPassed) {
          for (let hiddenTestCase of hiddenTestCases) {
            const hiddenResponse = await axios.post("http://localhost:8080/execute", {
              code,
              input: hiddenTestCase.input,
              language,
            });

            const hiddenOutput = hiddenResponse.data.output.trim();

            if (hiddenOutput !== hiddenTestCase.expectedOutput) {
              allPassed = false;
              testError = `Hidden Test Failed!\nExpected: ${hiddenTestCase.expectedOutput}\nReceived: ${hiddenOutput}`;
              break;
            }
          }
        }

        if (allPassed) {
          testOutput = "All Test Cases Passed!";
          testError = "";
        }

      } else {
        // If input is provided, run the code with that input
        response = await axios.post("http://localhost:8080/execute", {
          code,
          input,
          language,
        });

        const actualOutput = response.data.output.trim();
        const testCase = testCases.find(tc => tc.input === input.trim());

        if (testCase) {
          if (actualOutput === testCase.expectedOutput) {
            testOutput = `Test Passed!\nReceived: ${actualOutput}`;
            testError = "";
          } else {
            testOutput = "";
            testError = `Test Failed!\nExpected: ${testCase.expectedOutput}\nReceived: ${actualOutput}`;
          }
        } else {
          testOutput =`Result: ${actualOutput}`;
          testError = "";
        }
      }

      setOutput(testOutput);
      setError(testError);

      setMetrics({
        time: response?.data?.time || 0,
        memory: response?.data?.memory || 0,
      });

    } catch (err) {
      setError("Error executing the code");
    }
  };

  return (
    <>
    <Nav/>
    <div className='back'>
    <Link to ="/arena">&lt; Back</Link></div>
    <div className="App2">
      <div className="problem-container">
        <h2>Problem: Sum of Two Numbers</h2>
        <p>
          <strong>Description:</strong> <br />
          Given two integers, return their sum.
        </p>
        <p>
          <strong>Constraints:</strong> <br />
          - The integers can be between -10<sup>9</sup> and 10<sup>9</sup>.
        </p>
        <p>
          <strong>Example 1:</strong> <br />
          <code>Input: 2, 3</code> <br />
          <code>Output: 5</code>
        </p>
        <p>
          <strong>Example 2:</strong> <br />
          <code>Input: -5, 3</code> <br />
          <code>Output: -2</code>
        </p>
        <p>
          <strong>Hidden Test Case:</strong> <br />
          (Test cases with edge conditions that will not be revealed)
        </p>
      </div>

      <div className="editor-container">
        <div className="editor-header">
          <button onClick={handleRunCode} className="run-button">Run Code</button>
          <select value={language} onChange={handleLanguageChange} className="language-dropdown">
            <option value="java">Java</option>
          </select>
        </div>
        <AceEditor
          mode={language}
          theme="github"
          onChange={handleCodeChange}
          name="codeEditor"
          editorProps={{ $blockScrolling: true }}
          value={code}
          className="code-editor"
          style={{ width: '100%' }}
        />
        <div className="output-container">
          <textarea
            placeholder="Enter Input"
            value={input}
            onChange={handleInputChange}
            className="input-area"
          />
          <div className="output-section">
            <h2>Output:</h2>
            <pre>{output}</pre>
          </div>
          {error && (
            <div className="error-section">
              <h2>Error:</h2>
              <pre className="error-output">{error}</pre>
            </div>
          )}
          <div className="metrics-section">
            <h2>Metrics:</h2>
            <p>Time: {metrics.time}ms</p>
            <p>Memory: {metrics.memory}KB</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sample;