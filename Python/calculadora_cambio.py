def getCoins(exchange):
    coins = [1, 2, 5, 10, 20, 50]
    amount_of_coins = [0, 0, 0, 0, 0, 0]  
    
#Iteramos desde la moneda  de mayor valor hacia la de menor valor
    for i in range(len(coins) - 1, -1, -1):
        while exchange >= coins[i]:
            exchange -= coins[i]
            amount_of_coins[i] += 1
    
    return amount_of_coins

#Ejemplo de uso:
print(getCoins(51))  # [1, 0, 0, 0, 0, 1]
print(getCoins(3))   # [1, 1, 0, 0, 0, 0]
print(getCoins(5))   # [0, 0, 1, 0, 0, 0]
print(getCoins(16))  # [1, 0, 1, 1, 0, 0]
print(getCoins(100)) # [0, 0, 0, 0, 0, 2]
