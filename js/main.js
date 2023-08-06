let day = document.querySelector(".first .haha");
let month = document.querySelector(".first .haha2");
let year = document.querySelector(".first .haha3");
let sub = document.querySelector(".butt");
let form = document.querySelector(".first");

let inps = document.querySelectorAll("input");
let labs = document.querySelectorAll("label");
let isit = true;

let regOne = /^\d{1,2}$/;;
let regFour = /^\d{4}$/;

let dateNow = new Date("7 / 15 / 2023");

function theM () {
    if (isit) {
        let myd = document.createElement("div");
        const textnode = document.createTextNode("Must be valid information");
        myd.appendChild(textnode);
        form.appendChild(myd);
        myd.classList.add("msg");
        isit = false;
    }
}
sub.addEventListener("click", (e) => {

    let myDay, myMon, myYear;

    if (day.value === "" || month.value === "" || year.value === "") {
        
        theM();

        if (day.value === "") {
            day.style.border = "1px solid red";
        }
        if (month.value === "") {
            month.style.border = "1px solid red";
        }
        if (year.value === "") {
            year.style.border = "1px solid red";
        }
    }
    else {
        e.preventDefault();
        inps.forEach(ele => {
            ele.style.border = "1px solid #eee";
        });

        labs.forEach(ele2 => {
            ele2.style.color = "#808080";
        });
        
        if (isit === false) {
            document.querySelector(".msg").remove();
            isit = true;
        }
        
        if (regOne.test(day.value) && day.value <= 31) {
            myDay = day.value;
        }
        else {
            theM();
            day.style.border = "1px solid red";
        }
        if (regOne.test(month.value) && month.value <= 12) {
            myMon = month.value;
        }
        else {
            theM();
            month.style.border = "1px solid red";
        }
        if (regFour.test(year.value) && year.value <= 2022) {
            myYear = year.value;
        }
        else {
            theM();
            year.style.border = "1px solid red";
        }

        if (regOne.test(day.value) && regOne.test(month.value) && regFour.test(year.value) && day.value <= 31 && month.value <= 12 && year.value <= 2022) {

            if (isit === false) {
                document.querySelector(".msg").remove();
            }

            var bDay = new Date();  
            bDay.setFullYear(myYear, myDay, myMon);  

            let dateDiff = dateNow - bDay;

            let age = dateDiff / 1000 / 60 / 60 / 24 / 365;

            let fYear = Math.floor(age);
            let fMonth = (age - fYear) * 12;
            let fMonth2 = Math.floor(fMonth);
            let fDay = (fMonth - fMonth2) * 30;
            let fDay2 = Math.floor(fDay);


            console.log(fYear);
            console.log(fMonth2);
            console.log(fDay2);
            
            document.querySelector(".fone").innerHTML = fYear + " ";
            document.querySelector(".ftwo").innerHTML = fMonth2 + " ";
            document.querySelector(".fthree").innerHTML= fDay2 + " ";

        }
    }
});
