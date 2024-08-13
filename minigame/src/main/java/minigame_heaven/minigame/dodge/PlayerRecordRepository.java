package minigame_heaven.minigame.dodge;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRecordRepository extends JpaRepository<PlayerRecord, Long> {
}
