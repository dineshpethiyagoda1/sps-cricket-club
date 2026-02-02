package com.sps.cricket_club.repository;


import com.sps.cricket_club.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {
    List<Match> findByMatchDateBetween(LocalDate startDate, LocalDate endDate);
}
