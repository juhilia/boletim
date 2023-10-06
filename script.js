btn.addEventListener("click", function(){


    var nota1 = parseInt (Av1.value);
    var nota2 = parseInt (R1.value);
    var nota3 = parseInt (Av2.value);
    var nota4 = parseInt (R2.value);
    var nota5 = parseInt (Av3.value);
    var nota6 = parseInt (R3.value);
    var media1 = 0;
    var media2 = 0;
    var media3 = 0;
    var mediaFinal= 0;
    
    if(nota1>nota2){
    media1 = nota1;
    }
    
    if(nota1<nota2){
    media1 = nota2;
    }
    
    if(nota3>nota4){
        media2 = nota3;
        }
        
        if(nota3<nota4){
        media2 = nota4;
        }
        
        if(nota5>nota6){
            media3 = nota5;
            }
            
            if(nota5<nota6){
            media3 = nota6;
            }
            mediaFinal= ((media1+media2+media3)/3);
            
        result.innerHTML = " A sua media é:" + mediaFinal;

    });
    
    