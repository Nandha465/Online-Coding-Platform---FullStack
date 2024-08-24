package com.codingplatform.controller;



import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;
import java.nio.file.Path;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/execute")
@CrossOrigin(origins = "http://localhost:3000")
public class CodeExecutionController {

    @PostMapping
    public ResponseEntity<Map<String, Object>> executeCode(@RequestBody Map<String, String> payload) {
        String code = payload.get("code");
        String input = payload.get("input");
        
        Map<String, Object> response = new HashMap<>();
        long startTime = System.currentTimeMillis();
        
        try {
            
            Path tempFile = Files.createTempFile("Code", ".java");
            Files.write(tempFile, code.getBytes());

            ProcessBuilder compileBuilder = new ProcessBuilder("javac", tempFile.toString());
            Process compileProcess = compileBuilder.start();

            BufferedReader compileErrorReader = new BufferedReader(new InputStreamReader(compileProcess.getErrorStream()));
            StringBuilder compileErrors = new StringBuilder();
            String compileErrorLine;
            while ((compileErrorLine = compileErrorReader.readLine()) != null) {
                compileErrors.append(compileErrorLine).append("\n");
            }
            
            int compileExitCode = compileProcess.waitFor();

            // If compilation fails, return the error
            if (compileExitCode != 0) {
                response.put("output", "");
                response.put("error", compileErrors.toString());
                return ResponseEntity.ok(response);
            }

            ProcessBuilder runBuilder = new ProcessBuilder("java", "-cp", tempFile.getParent().toString(), "main");
            runBuilder.redirectErrorStream(true);
            Process runProcess = runBuilder.start();
           
            if (input != null && !input.isEmpty()) {
                try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(runProcess.getOutputStream()))) {
                    writer.write(input);
                }
            }

            BufferedReader reader = new BufferedReader(new InputStreamReader(runProcess.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }
            
            runProcess.waitFor();
          
            long executionTime = System.currentTimeMillis() - startTime;
            long memoryUsage = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();

            response.put("output", output.toString());
            response.put("error", "");
            response.put("time", executionTime);
            response.put("memory", memoryUsage / 1024);  // Convert bytes to KB
            
        } catch (Exception e) {
            response.put("output", "");
            response.put("error", e.getMessage());
        }
        
        return ResponseEntity.ok(response);
    }
}