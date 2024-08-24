package com.codingplatform.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.codingplatform.Model.Register;
import com.codingplatform.service.RegisterService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @GetMapping
    public List<Register> getAllRegisters() {
        return registerService.getAllRegisters();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Register> getRegisterById(@PathVariable Long id) {
        Optional<Register> register = registerService.getRegisterById(id);
        return register.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Register createRegister(@RequestBody Register register) {
        return registerService.saveRegister(register);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Register> updateRegister(@PathVariable Long id, @RequestBody Register register) {
        if (!registerService.getRegisterById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        register.setId(id);
        Register updatedRegister = registerService.saveRegister(register);
        return ResponseEntity.ok(updatedRegister);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegister(@PathVariable Long id) {
        if (!registerService.getRegisterById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        registerService.deleteRegister(id);
        return ResponseEntity.noContent().build();
    }
}
