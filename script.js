let container = document.getElementById('container');
let selectField = document.querySelector('#select-field');
let level = document.querySelector('.level');

let digit = 7;

let changeField = () => {
    digit = Number(selectField.value); //poxum enq dashti mecutyun@
    playfieldArr = createArr(digit); //stexcum enq matrica xaxataxtaki hamar
    if(document.getElementById('playfield') !== null){
        container.removeChild(playfield);
    }
    createPlayfield(digit); // nkarum enq xaxataxtak@
    drawPlayfield(digit);    // xaxataxtaki mej enq avelacnum nra baxkacucich maser@
}

let createArr = (digit) => {
    arr = [];
    for(let y = 0; y < digit; y++){
        arr.push([]);
    }
    for(let y = 0; y < digit; y++){
        for(let x = 0; x < digit; x++){
            arr[y].push(0);
        }
    }
    return arr;
}

let playfieldArr = createArr(digit);

let createPlayfield = (digit) => {
    let playfield = document.createElement('div');       
    playfield.setAttribute('id', 'playfield');
    container.appendChild(playfield);
    if(digit === 7){
        playfield.style.width = '352px';
        playfield.style.height = '352px';
    }
    if(digit === 8){
        playfield.style.width = '402px';
        playfield.style.height = '402px';
    }
    if(digit === 9){
        playfield.style.width = '452px';
        playfield.style.height = '452px';
    }
    playfield.style.background = '#fff';
    playfield.style.border = '1px solid #333';
    playfield.style.display = 'flex';
    playfield.style.flexDirection = 'row';
    playfield.style.flexWrap = 'wrap';
}

createPlayfield(digit);

let random = (digit) => {
    if(digit === 7){
        return Math.floor(Math.random() * 7);
    }else if(digit === 8){
        return Math.floor(Math.random() * 8);
    }else if(digit === 9){
        return Math.floor(Math.random() * 9);
    }
}

let getRandomValue = (arr) => {
    let removed = arr.splice(random(digit), 1);
    return removed;                         
}

let createItem = (arg, digit) => {
    if(digit === 7){
        return playfieldArr[getRandomValue([0, 1, 2, 3, 4, 5, 6])][getRandomValue([0, 1, 2, 3, 4, 5, 6])] = arg;
    }
    else if(digit === 8){
        return playfieldArr[getRandomValue([0, 1, 2, 3, 4, 5, 6, 7])][getRandomValue([0, 1, 2, 3, 4, 5, 6, 7])] = arg;
    }else if(digit === 9){
        return playfieldArr[getRandomValue([0, 1, 2, 3, 4, 5, 6, 7, 8])][getRandomValue([0, 1, 2, 3, 4, 5, 6, 7, 8])] = arg;
    }   
}

let drawPlayfield = (digit) => {
    if(digit === 7){
        createItem(1, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(3, digit);
        createItem(4, digit);
        createItem(4, digit);
        createItem(4, digit);
    }else if(digit === 8){
        createItem(1, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(3, digit);
        createItem(4, digit);
        createItem(4, digit);
        createItem(4, digit);
    }else if(digit === 9){
        createItem(1, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(2, digit);
        createItem(3, digit);
        createItem(4, digit);
        createItem(4, digit);
        createItem(4, digit);
    }      
    let playfieldItem = ''; 
    for(let y = 0; y < playfieldArr.length; y++){
        for(let x = 0; x < playfieldArr[y].length; x++){        
            if(playfieldArr[y][x] === 2){
                playfieldItem += '<div id="playfield-item"><img src="./image/wolf.png" class="wolf" alt="wolf"></div>';                    
            }else if(playfieldArr[y][x] === 4){
                playfieldItem += '<div id="playfield-item"><img src="./image/fence.png" class="fence" alt="fence"></div>';
            }else if(playfieldArr[y][x] === 1){
                playfieldItem += '<div id="playfield-item"><img src="./image/rabbit.png" class="rabbit" alt="rabbit"></div>';
            }else if(playfieldArr[y][x] === 3){
                playfieldItem += '<div id="playfield-item"><img src="./image/house.png" class="home" alt="home"></div>';
            }else{
                playfieldItem += '<div id="playfield-item"></div>';
            }
        } 
    }
    playfield.innerHTML = playfieldItem;
}

drawPlayfield(digit);

let drawPlayfieldRef = () => {
    let playfieldItem = '';  
    for(let y = 0; y < playfieldArr.length; y++){
        for(let x = 0; x < playfieldArr[y].length; x++){
            if(playfieldArr[y][x] === 2){
                playfieldItem += '<div id="playfield-item"><img src="./image/wolf.png" class="wolf" alt="wolf"></div>';                    
            }else if(playfieldArr[y][x] === 4){
                playfieldItem += '<div id="playfield-item"><img src="./image/fence.png" class="fence" alt="fence"></div>';
            }else if(playfieldArr[y][x] === 1){
                playfieldItem += '<div id="playfield-item"><img src="./image/rabbit.png" class="rabbit" alt="rabbit"></div>';
            }else if(playfieldArr[y][x] === 3){
                playfieldItem += '<div id="playfield-item"><img src="./image/house.png" class="home" alt="home"></div>';
            }else{
                playfieldItem += '<div id="playfield-item"></div>';
            }
        } 
    }
    playfield.innerHTML = playfieldItem;
}

let moveDown = () => {
    for(let y = playfieldArr.length - 1; y >= 0; y--){
        for(let x = 0; x < playfieldArr[y].length; x++){
            if(playfieldArr[y][x] === 1){
                if(y === (digit - 1)){
                    playfieldArr[0][x] = 1;
                    playfieldArr[y][x] = 0;
                    drawPlayfieldRef();
                }
                if(playfieldArr[y + 1][x] === 4){
                    alert('Change Your move !');
                    continue;                  
                }
                if(playfieldArr[y + 1][x] === 2){
                    alert('Wolfs Win !');
                    container.removeChild(playfield);
                }
                if(playfieldArr[y + 1][x] === 3){
                    alert('Rabbit Win !');
                    container.removeChild(playfield);
                }
                playfieldArr[y + 1][x] = 1;
                playfieldArr[y][x] = 0;
                drawPlayfieldRef();
            }           
        }
    }
}

let moveLeft = () => {
    for(let y = playfieldArr.length - 1; y >= 0; y--){
        for(let x = 0; x < playfieldArr[y].length; x++){
            if(playfieldArr[y][x] === 1){
                if(x === 0){
                    playfieldArr[y][(digit - 1)] = 1;
                    playfieldArr[y][x] = 0;
                    drawPlayfieldRef();
                    break;
                }
                if(playfieldArr[y][x - 1] === 4){
                    alert('Change Your move !');
                    continue;                  
                }
                if(playfieldArr[y][x - 1] === 2){
                    alert('Wolfs Win !');
                    container.removeChild(playfield);
                }
                if(playfieldArr[y][x - 1] === 3){
                    alert('Rabbit Win !');
                    container.removeChild(playfield);
                }
                    playfieldArr[y][x - 1] = 1;
                    playfieldArr[y][x] = 0;
                    drawPlayfieldRef(); 
                                                      
            }                 
        }
    }
}

let moveUp = () => {
    for(let y = 0; y < playfieldArr.length; y++){
        for(let x = 0; x < playfieldArr[y].length; x++){
            if(playfieldArr[y][x] === 1){
                if(y === 0){
                    playfieldArr[(digit - 1)][x] = 1;
                    playfieldArr[0][x] = 0;
                    drawPlayfieldRef();                                         
                }
                if(playfieldArr[y - 1][x] === 4){
                    alert('Change Your move !');
                    continue;                  
                }
                if(playfieldArr[y - 1][x] === 2){
                    alert('Wolfs Win !');
                    container.removeChild(playfield);
                }
                if(playfieldArr[y - 1][x] === 3){
                    alert('Rabbit Win !');
                    container.removeChild(playfield);
                }
                    playfieldArr[y - 1][x] = 1;
                    playfieldArr[y][x] = 0;
                    drawPlayfieldRef();
                    
            }                    
        }
    }
}


let moveRight = () => {
    for(let y = playfieldArr.length - 1; y >= 0; y--){
        for(let x = playfieldArr[y].length - 1; x >= 0; x--){
            if(playfieldArr[y][x] === 1){
                if(x === (digit - 1)){
                    playfieldArr[y][0] = 1;
                    playfieldArr[y][x] = 0;
                    drawPlayfieldRef();
                    break;
                }
                if(playfieldArr[y][x + 1] === 4){
                    alert('Change Your move !');
                    continue;                  
                }
                if(playfieldArr[y][x + 1] === 2){
                    alert('Wolfs Win !');
                    container.removeChild(playfield);
                }
                if(playfieldArr[y][x + 1] === 3){
                    alert('Rabbit Win !');
                    container.removeChild(playfield);
                }
                playfieldArr[y][x + 1] = 1;
                playfieldArr[y][x] = 0;
                drawPlayfieldRef();                
            }
        }
    }
}

document.onkeydown = function(e){
    if(e.keyCode === 40){
        moveDown();     
    }else if(e.keyCode === 37){
        moveLeft();
    }else if(e.keyCode === 38){
        moveUp();
    }else if(e.keyCode === 39){
        moveRight();
    }
}