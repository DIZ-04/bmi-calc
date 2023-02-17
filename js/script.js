document.getElementById("vypocitat").onclick = function () {

    if(isNaN(document.getElementById("vyska").value || document.getElementById("vyska}").value == "")){
        alert("Zadejte prosím správnou hodnotu");
        return;
    }
    
    if(isNaN(document.getElementById("vaha").value) || document.getElementById("vaha").value == ""){
        alert("Zadejte prosím správnou hodnotu");
        return;
    }

    vyska = Number(document.getElementById("vyska").value)/100;
    vaha = Number(document.getElementById("vaha").value);
    bmi = (vaha/(vyska**2)).toFixed(2);
    vek = document.getElementById("vek").value;
    stav = "";
    console.log(vaha,vyska,bmi,vek);
    
    if(vek=="1824") {
        if(bmi<19) {
            stav = "podváhu";
        }
        else if(bmi>=19 && bmi<=23.9) {
            stav = "optimální váhu";
        }
        else if(bmi>=24 && bmi<=28.9) {
            stav = "nadváhu";
        }
        else if(bmi>=29 && bmi <=39) {
            stav = "obezitu";
        }
        else if(bmi>39) {
            stav = "silnou obezitu";
        }
    }
    else if(vek=="2534") {
        if(bmi<20) {
            stav = "podváhu";
        }
        else if(bmi>=20 && bmi<=24.9) {
            stav = "optimální váhu";
        }
        else if(bmi>=25 && bmi<=29.9) {
            stav = "nadváhu";
        }
        else if(bmi>=30 && bmi <=40) {
            stav = "obezitu";
        }
        else if(bmi>40) {
            stav = "silná obezitu";
        }
    }
    else if(vek=="3544") {
        if(bmi<21) {
            stav = "podváhu";
        }
        else if(bmi>=21 && bmi<=25.9) {
            stav = "optimální váhu";
        }
        else if(bmi>=26 && bmi<=30.9) {
            stav = "nadváhu";
        }
        else if(bmi>=31 && bmi <=41) {
            stav = "obezitu";
        }
        else if(bmi>41) {
            stav = "silnou obezitu";
        }
    }
    else if(vek=="4554") {
        if(bmi<22) {
            stav = "podváhu";
        }
        else if(bmi>=22 && bmi<=26.9) {
            stav = "optimální váhu";
        }
        else if(bmi>=27 && bmi<=31.9) {
            stav = "nadváhu";
        }
        else if(bmi>=32 && bmi <=42) {
            stav = "obezitu";
        }
        else if(bmi>42) {
            stav = "silnou obezitu";
        }
    }
    else if(vek=="5564") {
        if(bmi<23) {
            stav = "podváhu";
        }
        else if(bmi>=23 && bmi<=27.9) {
            stav = "optimální váhu";
        }
        else if(bmi>=28 && bmi<=32.9) {
            stav = "nadváhu";
        }
        else if(bmi>=33 && bmi <=43) {
            stav = "obezitu";
        }
        else if(bmi>43) {
            stav = "silnou obezitu";
        }
    }
    else if(vek=="65more") {
        if(bmi<24) {
            stav = "podváhu";
        }
        else if(bmi>=24 && bmi<=28.9) {
            stav = "optimální váhu";
        }
        else if(bmi>=29 && bmi<=33.9) {
            stav = "nadváhu";
        }
        else if(bmi>=34 && bmi <=44) {
            stav = "obezitu";
        }
        else if(bmi>44) {
            stav = "silnou obezitu";
        }
    }
    document.getElementById("vysledek").innerHTML = "Vaše BMI je " + bmi + ", máte " + stav;
}