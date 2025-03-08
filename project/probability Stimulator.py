import random
import matplotlib.pyplot as plt

def simulate_discrete_probability(distribution, trials=1000):
    outcomes = list(distribution.keys())
    probabilities = list(distribution.values())
    
    results = {outcome: 0 for outcome in outcomes}
    
    for _ in range(trials):
        choice = random.choices(outcomes, weights=probabilities, k=1)[0]
        results[choice] += 1
    
    # Convert counts to relative frequencies
    for outcome in results:
        results[outcome] /= trials
    
    return results

# Example: A loaded die where 6 appears more frequently
probability_distribution = {
    1: 0.1, 2: 0.1, 3: 0.1, 4: 0.1, 5: 0.1, 6: 0.5
}

num_trials = 10000
estimated_probabilities = simulate_discrete_probability(probability_distribution, num_trials)

outcom=[]
probabilit=[]
print("Estimated Probabilities:")
for outcome, probability in estimated_probabilities.items():   
    print(f"Outcome {outcome}: {probability:.4f}")
    outcom.append(outcome)
    probabilit.append(probability)




plt.plot(outcom,probabilit)
plt.show()