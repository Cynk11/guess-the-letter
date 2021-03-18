hint = ""
answer = ""
solution = ""
info.set_life(3)
solution = String.from_char_code(randint(97, 122))
while info.life() > 0:
    answer = game.ask_for_string("I'M THINKING OF A LETTER...", 1)
    if answer == solution:
        game.splash("YOU WIN")
        control.reset()
    else:
        info.change_life_by(-1)
        if info.life() > 0:
            hint = "HIGHER"
            if answer > solution:
                hint = "LOWER"
            game.splash("SORRY, TRY " + hint)
        else:
            game.splash("SORRY, IT WAS \"" + solution + "\"")
game.over()