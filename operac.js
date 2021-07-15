var temOper = false
var totEsp = 0
var equação = [0,0,0]
var temPon = [0,0]
var p = 0
var temQreset = false
var visor = document.querySelector('div#vis')

function carreg(){
    visor.innerHTML = '0'
}

function temEsp(){
    if(totEsp >= 15){
        return false
    } else {
        return true
    }
}

function podePonto(){
    
}

function cliSet(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '7'
        totEsp++
        equação[0] = '7'
    } else if (temEsp()) {
        visor.innerHTML += '7'
        totEsp++
        equação[p] += '7'
    }
    
    
}

function cliOit(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '8'
        totEsp++
        equação[0] = '8'
    } else if (temEsp()) {
        visor.innerHTML += '8'
        totEsp++
        equação[p] += '8'
    }
    
}

function cliNov(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '9'
        totEsp++
        equação[0] = '9'
    } else if (temEsp()) {
        visor.innerHTML += '9'
        totEsp++
        equação[p] += '9'
    }
    
}

function cliMul(){
    if(visor.innerHTML != '0' && temEsp() && temOper == false && totEsp <= 13){
        visor.innerHTML += 'x'
        totEsp++
        temOper = true
        equação[1] = 'x'
        p = 2
    }
    
}

function cliDiv(){
    if(visor.innerHTML != '0'  && temEsp() && temOper == false && totEsp <= 13){
        visor.innerHTML += '÷'
        totEsp++
        temOper = true
        equação[1] = '÷'
        p = 2
    }
   
}

function cliQua(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '4'
        totEsp++
        equação[0] = '4'
    } else if (temEsp()){
        visor.innerHTML += '4'
        totEsp++
        equação[p] += '4'
    }
    
}

function cliCin(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '5'
        totEsp++
        equação[0] = '5'
    } else if (temEsp()){
        visor.innerHTML += '5'
        totEsp++
        equação[p] += '5'
    }
    
}

function cliSei(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '6'
        totEsp++
        equação[0] = '6'
    } else if (temEsp()){
        visor.innerHTML += '6'
        equação[p] += '6'
        totEsp++
    }
    
}

function cliMen(){
    if(visor.innerHTML != '0'  && temEsp() && temOper == false && totEsp <= 13){
        visor.innerHTML += '-'
        totEsp++
        temOper = true
        equação[1] = '-'
        p = 2
    }
   
}

function cliRai(){
    if(temQreset){
        visor.innerHTML = '√'
        equação[1] = '√'
        p = 2
        totEsp++
        temOper = true
        temQreset = false
    
    }
    if(visor.innerHTML == '0' || visor.innerHTML == 'ERRO[404]'){
        visor.innerHTML = '√'
        totEsp++
        temOper = true
        equação[1] = '√'
        p = 2
        temQreset = false
    }
   
}

function cliUm(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '1'
        totEsp++
        equação[0] = '1'
    } else if (temEsp()){
        visor.innerHTML += '1'
        totEsp++
        equação[p] += '1'
    }
    
}

function cliDoi(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '2'
        totEsp++
        equação[0] = '2'
    } else if (temEsp()){
        visor.innerHTML += '2'
        totEsp++
        equação[p] += '2'
    }
    
}

function cliTre(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '3'
        totEsp++
        equação[0] = '3'
    } else if (temEsp()){
        visor.innerHTML += '3'
        totEsp++
        equação[p] += '3'
    }
    
}

function cliMai(){
    if(visor.innerHTML != '0' && temEsp() && temOper == false && totEsp <= 13){
        visor.innerHTML += '+'
        totEsp++
        temOper = true
        equação[1] = '+'
        p = 2
    }   
}

function cliRes(){
    if(visor.innerHTML != '0' && temEsp() && temOper == false && totEsp <= 13){
        visor.innerHTML += '%'
        totEsp++
        temOper = true
        equação[1] = '%'
        p = 2
    }   
}

function cliZer(){
    if(temQreset){
        visor.innerHTML = '0'
        temQreset = false
    }
    if (visor.innerHTML == '0'){
        visor.innerHTML = ''
        visor.innerHTML += '0'
        
    } else if (temEsp()){
        visor.innerHTML += '0'
        totEsp++
        equação[p] += '0' 
    }
    
}

function cliPon(){
    if(visor.innerHTML != '0' && visor.innerHTML != '0.' && visor.innerHTML != 'ERRO[404]' && !temQreset){
        if(!temOper && temPon[0] < 1){
            visor.innerHTML += '.'
            equação[0] += '.'
            totEsp += 1
            temPon[0]++
        } else if (equação[2]!=0 && temPon[1] < 1){
            visor.innerHTML += '.'
            equação[2] += '.'
            totEsp += 1
            temPon[1]++
        } else if (equação[2] == 0 && temOper)  {
            equação[2]= '0.'
            visor.innerHTML = equação[0] + equação[1] + equação[2]
            totEsp += 2
            temPon[1]++
        }
    } else if (visor.innerHTML != 'ERRO[404]' && !temQreset){
        visor.innerHTML = '0.'
        equação[0] = '0.'
        totEsp += 2
    } else {
        temQreset = false
        visor.innerHTML = '0.'
        equação[0] = '0.'
        totEsp += 2
    }
}

function cliDel(){
    if(temOper && equação[2] == 0){
        visor.innerHTML = String(equação[0])
        temOper = false
        totEsp--
        equação[1] = '0'
        p = 0
    } else if (equação[2] != 0){
        if(equação[2] <= 9){
            totEsp--
            visor.innerHTML = equação[0] + equação[1]
            equação[2] = '0'
        } else {
            totEsp--
            equação[2] = Number.parseInt(equação[2]/10)
            visor.innerHTML = equação[0]+equação[1]+equação[2]
        }

    } else if (equação[0] != 0){
        p = 0
        if(equação[0] <= 9){
            totEsp = 0
            visor.innerHTML = '0'
            equação[0] = 0
        } else {
            totEsp--
            equação[0] = Number.parseInt(equação[0]/10)
            visor.innerHTML = equação[0]
        }
    } else {
        equação[0] = 0
        equação[1] = 0
        equação[2] = 0
        temPon[0] = 0
        temPon[1] = 0
        visor.innerHTML = 'ERRO[404]'
    }
}

function cliIgu(){
    p=0
    temOper = false
    var res = 0
    totEsp = 0
    
    switch(equação[1]){
        case 'x':
            res = Number(equação[0])*Number(equação[2])
            if(temPon[0] > 0 || temPon[1] > 0){
                res = res.toFixed(4)
            }    
            visor.innerHTML = String(res)
            equação[0] = '0'
            equação[1] = ''
            equação[2] = '0'
            temPon[0] = 0
            temPon[1] = 0
            temQreset = true
            break;    
        case '÷':
            res = Number(equação[0])/Number(equação[2])
            if(temPon[0] > 0 || temPon[1] > 0){
                res = res.toFixed(4)
            }
            visor.innerHTML = String(res)
            equação[0] = '0'
            equação[1] = ''
            equação[2] = '0'
            temPon[0] = 0
            temPon[1] = 0
            temQreset = true
            break;  
        case '-':
            res = Number(equação[0])-Number(equação[2])
            if(temPon[0] > 0 || temPon[1] > 0){
                res = res.toFixed(4)
            }
            visor.innerHTML = String(res)
            equação[0] = '0'
            equação[1] = ''
            equação[2] = '0'
            temPon[0] = 0
            temPon[1] = 0
            temQreset = true
            break;
        case '√':
            res = Math.sqrt(Number(equação[2]))
            res = res.toFixed(8)
            visor.innerHTML = String(res)
            equação[0] = '0'
            equação[1] = ''
            equação[2] = '0'
            temPon[0] = 0
            temPon[1] = 0
            temQreset = true
            break;  
        case '+':
            res = Number(equação[0])+Number(equação[2])
            if(temPon[0] > 0 || temPon[1] > 0){
                res = res.toFixed(4)
            }
            visor.innerHTML = String(res)
            equação[0] = '0'
            equação[1] = ''
            equação[2] = '0'
            temPon[0] = 0
            temPon[1] = 0
            temQreset = true
            break;  
        case '%':
            res = Number(equação[0])%Number(equação[2])
            if(temPon[0] > 0 || temPon[1] > 0){
                res = res.toFixed(4)
            }
            visor.innerHTML = String(res)
            equação[0] = '0'
            equação[1] = ''
            equação[2] = '0'
            temPon[0] = 0
            temPon[1] = 0
            temQreset = true
            break; 
        default:
            visor.innerHTML = '0'
            equação[0] = '0'
            equação[1] = ''
            equação[2] = '0'
            temPon[0] = 0
            temPon[1] = 0
            temQreset = true
            break;              
    }
}