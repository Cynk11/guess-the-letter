let hint = ""
let answer = ""
let solution = ""
info.setLife(3)
solution = String@type.fromCharCode(randint(97, 122))
while (info.life() > 0) {
    answer = game.askForString("I'M THINKING OF A LETTER...", 1)
    if (answer == solution) {
        game.splash("YOU WIN")
        control.reset()
    } else {
        info.changeLifeBy(-1)
        if (info.life() > 0) {
            hint = "HIGHER"
            if (answer > solution) {
                hint = "LOWER"
            }
            
            game.splash("SORRY, TRY " + hint)
        } else {
            game.splash("SORRY, IT WAS \"" + solution + "\"")
        }
        
    }
    
}
game.over()
