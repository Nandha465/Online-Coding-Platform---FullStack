package com.codingplatform.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingplatform.Model.Register;
import com.codingplatform.repository.RegisterRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    public List<Register> getAllRegisters() {
        return registerRepository.findAll();
    }

    public Optional<Register> getRegisterById(Long id) {
        return registerRepository.findById(id);
    }

    public Register saveRegister(Register register) {
        return registerRepository.save(register);
    }

    public void deleteRegister(Long id) {
        registerRepository.deleteById(id);
    }
}
