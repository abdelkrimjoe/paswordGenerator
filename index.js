let RANGE = document.getElementById("RANGE");
let couleurRange = document.querySelector(".coleurRange");
let number = document.getElementById("number");
RANGE.addEventListener("input", () => {
  let width = (parseInt(RANGE.value) * 95) / 15;
  couleurRange.style.width = `${width}%`;
  number.innerText = RANGE.value;
});

let check = 0;
let checkList=[]
let checkBox = document.querySelectorAll("input[type='checkbox']");
checkBox.forEach((ele,index) => {
  ele.addEventListener("click", () => {
    if (ele.checked) {
      check++;
      checkList.push(ele)
    } else {
      check--;
      checkList.splice(index,1)
    }
  });
});

let passType = document.getElementById("typePa");
let btn = document.querySelector(".btnSubmit");
items=document.querySelectorAll(".item")
let backItems=(index)=>{
    for(let i=0; i<index; i++ ){
        items[i].style.background="orange"
    }
    for(let j=index; j<items.length;j++){
        items[j].style.background="transparent"
    }
}
const dictionary = {
    "min": "abcdefghijklmnopqrstuvwxyz",
    "maj": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "nom": "0123456789",
    "symbole":"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  };
  let motPass=document.getElementById("motPass");
btn.addEventListener("click", () => {
  btn.style.color = "rgba(61, 204, 61, 0.733)";
  btn.style.background = "transparent";
  btn.style.border = "1px rgba(61, 204, 61, 0.733) solid";
  switch (check) {
    case 0:
    case 1:
      passType.innerText = "weak";
      passType.style.display="block"
      backItems(check)
      break;
    case 2:
      passType.innerText = "Good";
      passType.style.display="block"
      backItems(check)
      break;
    case 3:
      passType.innerText = "Medium";
      passType.style.display="block"
      backItems(check)
      break;
    case 4:
      passType.innerText = "Strong";
      passType.style.display="block"
      backItems(check)

      break;
    
  }


  let mot = "";
  let index=0;
  let lenghtPass = parseInt(RANGE.value);
  for (let i = 0; i < lenghtPass; i++) {
    let randomIndex
   if(checkList.length==0)
   {
    randomIndex = Math.floor(Math.random() * dictionary["min"].length);
    mot = mot + dictionary["min"][randomIndex];  
   }
    else{ randomIndex = Math.floor(Math.random() * dictionary[checkList[index].value].length);
    mot = mot + dictionary[checkList[index].value][randomIndex];
    index++
    if(index==checkList.length){index=0}}
  }
  motPass.value=mot
});
