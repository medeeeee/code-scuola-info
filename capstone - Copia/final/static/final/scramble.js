

function shuffelWord (randomWord){
    var shuffledWord = '';
    randomWord = randomWord.split('');
    while (randomWord.length > 0) {
      shuffledWord +=  randomWord.splice(randomWord.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}






function game(){
    

    var btn = document.querySelector('#btn1')
    btn.style.display="none";

    var hr = document.querySelector('#hr')
    hr.style.display="block";

    var input = document.querySelector('#input')
    input.style.display="block";

    var list = [
    
    "Intend",
    "Behave",
    "Store",
    "Scratch",
    "Change",
    "Reflect",
    "Bake",
    "Announce",
    "Chew",
    "Subtract",
    "Cheer",
    "Inject",
    "Deserve",
    "Attend",
    "Guide",
    "Radiate",
        
    "Work",
    "Test",
    "Develop",
    "Sprout",
    "Tap",
    "Muddle",
    "Repeat",
    "Depend",
    "Whistle",
    "Scatter",
    "Disarm",
    "Touch",
    "Heap",
    "Tremble",
    "Greet",
    "Harm",
    "Arrange",
    "Form",
    "Try",
    "Face",
    "Amuse",
    "Explode",
    "Rush",
    "Whip",
    "Continue",
    "Fear",
    "Concern",
    "Gaze",
    "Communicate",
    "Decide",
    "Rely",
    "Arrive",
    "Strengthen",
   ];

    var randomWord = list[Math.floor(Math.random()*list.length)];

    var jumble = shuffelWord(randomWord);
    
    document.querySelector('#view').style.display = 'block';
    document.querySelector('#check').style.display = 'block';

    const viewWord = document.querySelector('#view');

    const check = document.querySelector('#check')
     
    viewWord.innerHTML = `
    <h2 class="fst-italic">${jumble}</h2>`;

    

    console.log(`CORRECT WORD: "${randomWord}"`);
    console.log(`SHUFFLED WORD: "${jumble}"`);

    
    var input = document.getElementById('input').onkeypress = function(event){
        if (event.key == "Enter"){
            var asw = document.getElementById('input').value;
            
            

            console.log(asw, randomWord)
            if (asw === randomWord){
               
                check.innerHTML = `
                <div class="alert alert-success"><h2 class="fst-italic">CORRECT!</h2></div>`;
                
                
                
                game();
                
                document.querySelector(`#input`).value = "";
            }else{
                
                check.innerHTML = `
                <div class="alert alert-danger"><h2 class="fst-italic">WRONG! THE ANSWER IS (${randomWord})</h2></div>`;
                game();
                document.querySelector(`#input`).value = "";
            }
        }
    }
    
    
    
        
    
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
