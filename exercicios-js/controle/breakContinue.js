const nums = [1,2,3,4,5,6,7,8,9,10]

//break: desvio de fluxo para fora do laço
for(let x in nums) {
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

//continue: desvio de fluxo para a próxima repetição
for(let y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //rotulo, break aplicado ao laço for mais externo
for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo
            console.log(`Par ${a}, ${b}`)
    }
}
