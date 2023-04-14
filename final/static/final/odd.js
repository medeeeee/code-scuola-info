function game(){
    var list = [
        
        words = {
            1:"She plays basketball.",
            2:"He is working hard to achieve the goal.",
            3:"She writes an emails every day.",
            4:"He thinks he is very handsome.",
            5:"The cake smells delicious.",
            odd:2
        },
        words1 = {
            1: "Jimmy is recording videos for his YouTube channel.",
            2:"They are enjoying the party.",
            3:"More and more people are using their headphones to listen to music.",
            4:"The children are shivering.",
            5:"He goes to play football every day.",
            odd:5
        },
        words2 = {
            1: "I met my wife 9 years ago.",
            2:"He bought a new house last month.",
            3:"Did she clean her house?",
            4:" We go to a gallery every Sunday.",
            5:"I read an interesting book last month.",
            odd:4
        },
        words3 = {
            1: " It snows a lot in winter in Russia.",
            2:"The doctor is checking the patient's blood pressure.",
            3:" We go on holiday every summer.",
            4:"I don’t wash the dishes.",
            5:"All children like icecream.",
            odd:2
        },
        words4 = {
            1: "was",
            2:"broke",
            3:"drink",
            4:"fought",
            5:"spoke",
            odd:3
        },
        words5 = {
            1: "blow",
            2:"write",
            3:"speak",
            4:"grow",
            5:"correct",
            odd:5
        },
        words6 = {
            1: "visit",
            2:"believe",
            3:"make",
            4:"clean",
            5:"cook",
            odd:3
        },
        words7 = {
            1: "woke",
            2:"gave",
            3:"grew",
            4:"been",
            5:"fell",
            odd:4
        },
        words8 = {
            1: "going",
            2:"feeling",
            3:"boiling",
            4:"making",
            5:"studying",
            odd:5
        },
        words9 = {
            1: "Julie talks very fast.",
            2:"I don’t like tea.",
            3:"We go on holiday every summer.",
            4:"Where was she at 7 o’clock last night?",
            5:" My cat runs very fast.",
            odd:4
        },
        words10 = {
            1: "My brother takes out the trash.",
            2:"I went to school yesterday.",
            3:"I cancelled my meeting for tomorrow.",
            4:" Mary forgot to turn off the light.",
            5:"We saw the Eiffel Tower.",
            odd:1
        },
        words11 = {
            1: "Two boys played with a ball.",
            2:"He had a dog last year.",
            3:" An old man sat down and read his book.",
            4:"They bought 2 tickets for the U2 concert.",
            5:"He is eating chips while watching the television.",
            odd:5
        },
        words12 = {
            1: "palm ",
            2:"island ",
            3:"night ",
            4:"telephone",
            5:"pull",
            odd:5
        },
        words13 = {
            1: "visit ",
            2:"import ",
            3:"export ",
            4:"record",
            5:"blue",//
            odd:5
        },
        words14 = {
            1: "cut ",
            2:"easy ",
            3:"expensive ",
            4:"happy",
            5:"pretty",//
            odd:1
        },
        words15 = {
            1: "bigger ",
            2:"less ",
            3:"further ",
            4:"worse",
            5:"better",//
            odd:1
        },

    ];

    var random = list[Math.floor(Math.random()*list.length)];

    console.log(random.odd);

    var input = document.querySelector('#input1');
    input.style.display ="block";
    document.querySelector('#btn3').style.display ="none";
    document.querySelector('#hrt').style.display ="block";

    document.querySelector('#words').style.display="block";
    const div = document.querySelector('#words');

    div.innerHTML =  ` 
    <p>1. ${random[1]}</p>
    <p>2. ${random[2]}</p>
    <p>3. ${random[3]}</p>
    <p>4. ${random[4]}</p>
    <p>5. ${random[5]}</p>`;

    var check = document.querySelector('#check1');

    var input = document.getElementById('input1').onkeypress = function(event){
        if(event.key === "Enter"){
            var asw = document.getElementById('input1').value;
            
            var l = random.odd;
            

            if(asw == l){
                check.innerHTML = `
                <div class="alert alert-success"><h2 class="fst-italic">CORRECT!</h2></div>`;
                
                
                
                game();
                
                document.querySelector(`#input1`).value = "";
            }else{
                check.innerHTML = `
                <div class="alert alert-danger"><h2 class="fst-italic">WRONG! ANSWER WAS ([${l}], ${random[l]})</h2></div>`;
                
                
                
                game();
                
                document.querySelector(`#input1`).value = "";
            }
        }
    }
    
}
