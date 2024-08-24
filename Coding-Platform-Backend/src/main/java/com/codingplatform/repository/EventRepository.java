package com.codingplatform.repository;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codingplatform.Model.Event;




@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}