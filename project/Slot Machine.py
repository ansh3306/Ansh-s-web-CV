import random

def spin_slot_machine():
    symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "💎"]
    return [random.choice(symbols) for _ in range(3)]

def check_winnings(spin):
    if spin[0] == spin[1] == spin[2]:
        return "JACKPOT! You won 100 coins!"
    elif spin[0] == spin[1] or spin[1] == spin[2] or spin[0] == spin[2]:
        return "Nice! You won 10 coins!"
    else:
        return "Try again! No win this time."

def play_slot_machine():
    balance = 50  # Starting balance
    bet = 5
    
    while balance >= bet:
        input("Press Enter to spin... ")
        balance -= bet
        spin = spin_slot_machine()
        print(" | ".join(spin))
        
        result = check_winnings(spin)
        print(result)
        
        if "100 coins" in result:
            balance += 100
        elif "10 coins" in result:
            balance += 10
        
        print(f"Current Balance: {balance} coins\n")
        
        if balance < bet:
            print("Game Over! You ran out of coins.")
            break

play_slot_machine()