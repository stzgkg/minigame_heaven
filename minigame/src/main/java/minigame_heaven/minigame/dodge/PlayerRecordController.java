package minigame_heaven.minigame.dodge;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class PlayerRecordController {
    private final PlayerRecordRepository playerRecordRepository;

    public PlayerRecordController(PlayerRecordRepository playerRecordRepository) {
        this.playerRecordRepository = playerRecordRepository;
    }

    @PostMapping("/dodge/save")
    public void playerRecordSaving(@RequestBody PlayerRecord playerRecord) {
        playerRecordRepository.save(playerRecord);
    }
}
