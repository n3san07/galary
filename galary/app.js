let glaryDiv = document.querySelector(".galary");
let currant = 1;
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");
let otherImgDiv = document.querySelector("#otherImgDiv");
let otherImges = "";
let myint = "";



//// get side img
for (let i = 1; i < 9; i++) {
  otherImgDiv.innerHTML += `<img class="otherImges" src="imege/${i}.png" alt="${i}">`;
}

otherImges = document.getElementsByClassName("otherImges");
/////addEventListener to the rightBtn 
rightBtn.addEventListener("click", function () {
  next();
});

///// the right btn function
function next() {
  clearInterval(myint);
  otherImges[currant - 1].classList.remove("active");

  currant++;
  if (currant == 9) {
    currant = 1;
  }
  glaryDiv.innerHTML = ` <img id="imges" src="imege/${currant}.png" alt="${currant}" ></img> `;
  otherImges[currant - 1].classList.add("active");
}

////// setInterval function
myint = setInterval(function () {
  otherImges[currant - 1].classList.remove("active");

  currant++;
  if (currant == 9) {
    currant = 1;
  }
  glaryDiv.innerHTML = ` <img id="imges" src="imege/${currant}.png" alt="${currant}" ></img> `;
  otherImges[currant - 1].classList.add("active");
}, 2000);


//// leftBtn function

leftBtn.addEventListener("click", function () {
  clearInterval(myint);

  otherImges[currant - 1].classList.remove("active");

  currant--;
  if (currant == 0) {
    currant = 8;
  }
  glaryDiv.innerHTML = ` <img id="imges" src="imege/${currant}.png" alt="${currant}" ></img> `;
  otherImges[currant - 1].classList.add("active");
});



///// set function for all the other imgs
for (let b = 1; b < otherImges.length; b++) {
  otherImges[b].addEventListener("click", function (e) {
    clearInterval(myint);
///// delete active from all img
    for (let v = 0; v < otherImges.length; v++) {
      otherImges[v].classList.remove("active");
    }

///// target the elment and add active class
    e.target.classList.add("active");

    let new5 = e.target.outerHTML;
    glaryDiv.innerHTML = `${new5} `;
  });
}


















/*
otherImges.array.forEach(ele => {
    
ele.click = function(){

console.log("hi");

}

});
*/
