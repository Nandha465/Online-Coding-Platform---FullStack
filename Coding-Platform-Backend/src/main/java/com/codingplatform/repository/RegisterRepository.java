package com.codingplatform.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codingplatform.Model.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {
}
