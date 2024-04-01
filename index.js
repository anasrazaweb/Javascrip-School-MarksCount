let Button = document.querySelectorAll(".Button");
let form = document.querySelector("form")

Button.forEach((Button) => {

    Button.addEventListener("click", () => {

        var a = parseInt(document.getElementById("book1").value);
        var b = parseInt(document.getElementById("book2").value);
        var c = parseInt(document.getElementById("book3").value);
        var d = parseInt(document.getElementById("book4").value);
        var e = parseInt(document.getElementById("book5").value);


        if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {

            alert("plese cheak input value")
        }
        else {
            obtain = a + b + c + d + e
            document.querySelector(".obtain").innerHTML = obtain;
            var per = obtain / 500 * 100 
            document.querySelector(".per").innerHTML = per + "%";





            if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40 ) {
               document.querySelector(".Remarks").innerHTML = "<span>Pass<span/>"
            }
            else{
                document.querySelector(".Remarks").innerHTML = "<span  style =' color: red'>Fail<span/>"

            }

            if (per > 80 && per < 90) {
                document.querySelector(".Grade").textContent = "A+1";
            }
            if (per > 70 && per< 80) {
                document.querySelector(".Grade").textContent = "A";
            }
            if (per > 60 && per < 70) {
                document.querySelector(".Grade").textContent = "B";
            }
            if (per > 50 && per <60) {
                document.querySelector(".Grade").textContent = "C";
            }
            if (per > 90 && per <100) {
                document.querySelector(".Grade").textContent = "A+1";
            }
            if (per > 40 && per <50) {
                document.querySelector(".Grade").textContent = "E";
            }
            if (per < 40) {
                document.querySelector(".Grade").textContent = "F";
            }



          

        }






    })
})