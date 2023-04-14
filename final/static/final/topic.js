

function game(){

    const totList = [
        list = {
            1:"yellow",
            2:"red",
            3: "green",
            4:"black",
            5:"white",
            topic: "Colors"
        },
        list1 = {
            1:"apple",
            2:"banana",
            3:"avocado",
            4:"cherry",
            5:"pear",
            topic : "Fruit"
        },
        list2 = {
            1:"ferrari",
            2:"lamborghini",
            3:"tesla",
            4:"bugatti",
            5:"maserati",
            topic : "Cars"
        },
        list3 = {
            1:"beer",
            2:"tea",
            3:"milk",
            4:"lemonade",
            5:"coffee",
            topic : "Drinks"
        },
        list4 = {
            1:"swimming",
            2:"football",
            3:"tennis",
            4:"skiing",
            5:"basketball",
            topic : "Sports"
        },
        list5 = {
            1:"ship",
            2:"aeroplane",
            3:"car",
            4:"bus",
            5:"motorbike",
            topic : "Transport"
        },
        list6 = {
            1:"handbag",
            2:"passport",
            3:"suitcase",
            4:"ticket",
            5:"camera",
            topic : "Travel"
        },
        list7 = {
            1:"boots",
            2:"sandals",
            3:"shoes",
            4:"clogs",
            5:"slippers",
            topic : "Footwear"
        },
        list8 = {
            1:"shirt",
            2:"jacket",
            3:"skirt",
            4:"sweater",
            5:"trousers",
            topic : "Clothing"
        },
        list9 = {
            1:"july",
            2:"october",
            3:"february",
            4:"december",
            5:"november",
            topic : "Months"
        },
        list10 = {
            1:"plastic",
            2:"leather",
            3:"wood",
            4:"metal",
            5:"wool",
            topic : "Materials"
        },
        list11 = {
            1:"cousin",
            2:"brother",
            3:"mother",
            4:"uncle",
            5:"grandfather",
            topic : "Family"
        },
        list12 = {
            1:"cheese",
            2:"soup",
            3:"salad",
            4:"bread",
            5:"rice",
            topic : "Food"
        },
        list13 = {
            1:"violin",
            2:"drums",
            3:"trumpet",
            4:"piano",
            5:"guitar",
            topic : "Musical Instruments"
        },
        list14 = {
            1:"cloud",
            2:"ice",
            3:"storm",
            4:"rain",
            5:"sun",
            topic : "The weather"
        },
        list15 = {
            1:"bathroom",
            2:"garage",
            3:"bedroom",
            4:"dining room",
            5:"kitchen",
            topic : "The house"
        },
        list16 = {
            1:"field",
            2:"forest",
            3:"lake",
            4:"sea",
            5:"mountain",
            topic : "Nature"
        },
        list17 = {
            1:"post office",
            2:"musuem",
            3:"cinema",
            4:"hospital",
            5:"bank",
            topic : "Buildings"
        },
        list18 = {
            1:"armchair",
            2:"sofa",
            3:"shelves",
            4:"bed",
            5:"lamp",
            topic : "Furniture"
        },
        list19 = {
            1:"potato",
            2:"onion",
            3:"spinach",
            4:"peas",
            5:"carrot",
            topic : "Vegetables"
        },
        list20 = {
            1:"florist's",
            2:"baker's",
            3:"supermarket",
            4:"musicshop",
            5:"bookshop",
            topic : "Shops"
        },
    ]
    
    var rlist = totList[Math.floor(Math.random()*totList.length)]

    console.log(rlist);

    
    document.querySelector('#p1').style.display = "block";


    var btn = document.querySelector('#btn1');
    btn.style.display ="none";

    var hr = document.querySelector('#hG');
    hr.style.display="block";

    var input = document.querySelector('#input');
    input.style.display ="block";

    document.querySelector('#div1').style.display="block";
    const div = document.querySelector('#div1');

    div.innerHTML = `
    <h2>${rlist[1]},   ${rlist[2]},   ${rlist[3]}, ${rlist[4]}, ${rlist[5]}</h2>`;


    var input = document.getElementById('input').onkeypress = function(event){
        if(event.key === "Enter"){
            var asw = document.getElementById('input').value;
            
            var l = rlist.topic;
            

            if(asw === l){
                check.innerHTML = `
                <div class="alert alert-success"><h2 class="fst-italic">CORRECT!</h2></div>`;
                
                
                
                game();
                
                document.querySelector(`#input`).value = "";
            }else{
                check.innerHTML = `
                <div class="alert alert-danger"><h2 class="fst-italic">WRONG! THE ANSWER IS (${l})</h2></div>`;
                
                
                
                game();
                
                document.querySelector(`#input`).value = "";
            }
        }
    }
    

    
}
