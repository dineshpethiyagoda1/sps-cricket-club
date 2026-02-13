package com.sps.cricket_club.service;


import com.sps.cricket_club.entity.Player;
import com.sps.cricket_club.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository playerRepository;

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public Optional<Player> getPlayerById(Long id) {
        return playerRepository.findById(id);
    }

    public Player createPlayer(Player player) {
        return playerRepository.save(player);
    }

    public Player updatePlayer(Long id, Player playerDetails) {
        Player player = playerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Player not found with id: " + id));

        player.setName(playerDetails.getName());
        player.setBirthday(playerDetails.getBirthday());
        player.setImageName(playerDetails.getImageName());
        player.setStatus(playerDetails.getStatus());

        return playerRepository.save(player);
    }

    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }

    public List<Player> getPlayersByStatus(String status) {
        return playerRepository.findByStatus(status);
    }
}
