package com.sps.cricket_club.repository;


import com.sps.cricket_club.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findByStatus(String status);
    List<Player> findByNameContainingIgnoreCase(String name);
}
