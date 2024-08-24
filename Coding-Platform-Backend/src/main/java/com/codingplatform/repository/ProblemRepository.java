package com.codingplatform.repository;






import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codingplatform.Model.Problem;



@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {
}