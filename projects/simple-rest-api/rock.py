import random

try:
    print("Simple rock paper scissors game: ")

    options = ["rock", "paper", "scissors"]

    while True:
        res = input("Pick either rock, paper or scissors: ")
        res = res.lower()
        randomWord = random.choice(options)

        print(res, randomWord)

        if res in options:
            if res == randomWord:
                print("It's a draw")
                continue
            if res == "scissors" and randomWord == "rock":
                print("You lose, try again")
                continue
            if res == "rock" and randomWord == "scissors":
                print("You win")
                break
            if res == "paper" and randomWord == "scissors":
                print("You lose, try again")
                continue
            if res == "scissors" and randomWord == "paper":
                print("You win")
                break
            if res == "rock" and randomWord == "paper":
                print("You lose, try again")
                continue
            if res == "paper" and randomWord == "rock":
                print("You win")
                break
        else: 
            print("You must pick among the options rock, paper and scissors")

except KeyboardInterrupt:
    print("\nInterrupted")