// created by flowings and darryl mahoney

if(document.scripts[133] !== undefined){
    alert("exercise already loaded, make sure you load panel before you open a exercise")
    document.location.reload()
} else{
    fetch("https://raw.githubusercontent.com/flowingsalt/Khan-Bot/main/71Ve.730ec3509bb744724504.js").then(r => r.text()).then(r => eval(r))
}

function get_numeric(){
    let all_numerics = Object.keys(y.getState().taskProgress.itemData.question.widgets)
    for(x = 0; x < all_numerics.length; x++){
        let all_items = all_numerics[x]
        if(all_items.includes("numeric") || all_items.includes("input")){
            let answers_length = y.getState().taskProgress.itemData.question.widgets[all_numerics[x]].options.answers.length;
            for(z = 0; z < answers_length; z++){
                let answers = y.getState().taskProgress.itemData.question.widgets[all_numerics[x]].options.answers[z]
                if(answers.status == "correct"){
                    console.log("%c" + answers.value, "font-size: 20px; color: red")
                }
            }
        }
    }
}

function get_radio(){
    let all_radios = Object.keys(y.getState().taskProgress.itemData.question.widgets)
    for(x = 0; x < all_radios.length; x++){
        let all_items = all_radios[x]
        if(all_items.includes("radio") || all_items.includes("dropdown")){
            let answers_length = y.getState().taskProgress.itemData.question.widgets[all_radios[x]].options.choices.length
            for(z = 0; z < answers_length; z++){
                let answers = y.getState().taskProgress.itemData.question.widgets[all_radios[x]].options.choices[z]
                if(answers.correct == true){
                    console.log("%c" + answers.content.replaceAll("$", ""), "font-size: 20px; color: red")
                }
            }
        }
    }
}

function get_expression(){
    let all_expression = Object.keys(y.getState().taskProgress.itemData.question.widgets)
    for(x = 0; x < all_expression.length; x++){
        let all_items = all_expression[x]
        if(all_items.includes("expression")){
            let answers_length = y.getState().taskProgress.itemData.question.widgets[all_expression[x]].options.answerForms.length
                let answers = y.getState().taskProgress.itemData.question.widgets[all_expression[x]].options.answerForms[answers_length - 1]
                if(answers.considered == "correct"){
                    console.log("%c" + answers.value, "font-size: 20px; color: red")
             }    
        }
    }
}

function get_graph(){
    let all_graphs = Object.keys(y.getState().taskProgress.itemData.question.widgets)
    for(x = 0; x < all_graphs.length; x++){
        let all_items = all_graphs[x]
        if(all_items.includes("grapher") || all_items.includes("interactive-graph")){
            let answers_length = y.getState().taskProgress.itemData.question.widgets[all_graphs[x]].options.correct.coords.length
            for(z = 0; z < answers_length; z++){
                let answers = y.getState().taskProgress.itemData.question.widgets[all_graphs[x]].options.correct.coords[z]
                console.log("%c" + "Point: " + z + ": (" + answers[0] + ", " + answers[1] + ")", "font-size: 20px; color: red");
            }
        }
    }
}

function get_answer(){
    let questionType = Object.keys(y.getState().taskProgress.itemData.question.widgets)
    for(x = 0; x < questionType.length; x++){
        let all_questions = questionType[x]
        if(all_questions.includes("grapher") || all_questions.includes("interactive-graph")){
            get_graph()
        } else if(all_questions.includes("expression")){
            get_expression()
        } else if(all_questions.includes("radio") || all_questions.includes("dropdown")){
            get_radio()
        } else if(all_questions.includes("numeric") || all_questions.includes("input")){
            get_numeric()
        }
    }
}

function dragElement(e){var n=0,t=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=i,document.onmousemove=f}function f(u){(u=u||window.event).preventDefault(),n=o-u.clientX,t=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=u:e.onmousedown=u}
let UI = document.createElement("div");
UI.innerHTML = `<div id="Launcher" class="Launcher" style="outline: #14bf96 solid 2px; min-height: 250px;transform: 
translateX(0px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background: 
black;position: absolute;border-radius: 5px;display: grid;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">
<center><h1 class="bottomTitle" ></h1></center>
<img id="nullicon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEOUExURQAAAAC/vwCzkACyjwCxkACxkAC0lgCykAC5ogCykACykACzkgCyjwC0kQCxkAC5lwCykACxjwCxjwCykAD//wCxkACxkACzkQCyjwCzkQCxjxC1lprg0ub39Jnf0gOxkMju5v7+/sft5kvHr3PUwbDm3N708Lnp4GrRvRa3mBW3mGnRvbjp3/////T7+n3XxQizknzWxaXj18nu53rWxNvz7xG2ltnz7jjCp7fo3wGxj7To3sXt5VbLtFLKs0nHr9fy7dTx7ErHr77r4jLApC+/o7/r4g+1lc/w6XnWxNDw6he4mdjz7aTj16Dh1Qmzkr3q4vX7+n7Xxhu5mobZyc7w6fv9/Yfayhy5mxS3l0Aw3esAAAAadFJOUwAEbt1F1SKvC4X4W+QzxRac/fDeAVzlhrBvnU5KEAAAAAFiS0dELc3aQT0AAAAHdElNRQfnBA4CGxRiopvgAAABUUlEQVQ4y41T6VrCMBAslLPcNwSx3AiSFhEFK4o3KipeoLz/i9gmIU16fDh/kp2Z5MtudgWBhccril6P4AqfH+jw+1zkQBAQBAMOcigsAQopHLLqkSjgEI1wciwObIjHqJxIpoADUskEeXuacuW9SmW/TMM0zidDCbla01GXKZFBBvPSRg2hYTIWQxMbmq6GnTfgN1Rlu6HV7hx02Sx6h/12izF0IISKOtieGxwpOtFnDENo4LiL9V4dhUPGMEIMPDlF1RrjaMQYJpiCZ5oenJNgwmYxJeQFAJdkO+XSnBH2SgPXZHvD1+GW0Hf3ZPNgKdT8EfPqE16f59ZKLl6Q8PqGlvGCqST57qVqVOfdqNnH55L9btowX9+rtaKsVz+/fMOwLadtNpqt5XY3rY5sLs/L+VzWOjgFyZSlgm1wjNErbvWi0+j9Y3iN8S+JYokf/z+HbVkWF7r15gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0xNFQwMjoyNzoyMCswMDowMBfSURoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMTRUMDI6Mjc6MjArMDA6MDBmj+mmAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA0LTE0VDAyOjI3OjIwKzAwOjAwMZrIeQAAAABJRU5ErkJggg==" class="center">
    <h1 class="title"><center>Khan Bot</center></h1>
    <center><h1 class="bottomTitle" >1.0</h1></center>
<style id="bruh">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');
.title {
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    color: white
}
.bottomTitle {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    margin-top: -0.7rem;
}
.button {
  font-family: 'Nunito', sans-serif;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  color: white; 
  background-color: black;
}
.button:hover {
  color: black;
  background-color: grey
}
.button:active {
  background-color: black;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
    <button id="answer" class="button">Paste Answer In Console</button>
    <br>
</div>`

document.body.appendChild(UI);
dragElement(UI.firstElementChild);

setInterval(function printAns(){
    document.getElementById("answer").onclick = get_answer
},100)
