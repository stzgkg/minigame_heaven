package minigame_heaven.minigame;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MiniGameController {

    @GetMapping("/")
    public  String home() {
        return "main.html";
    }

    @GetMapping("/dodge")
    public String dodge() {
        return "dodge/dodge.html";
    }

    @GetMapping("/minesweeper")
    public String minesweeper() {
        return "minesweeper/minesweeper.html";
    }

    @GetMapping("/sudoku")
    public String sudoku() {
        return "sudoku/sudoku.html";
    }
}
