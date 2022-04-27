
var home1 = 0;
var home2 = 0;
var home3 = 0;
var home4 = 0;
var homes = 0;
var totle = 1;
var x = 0;

function CheckHome() {
  x=0
    var names = document.getElementById("names1").value
  while (x == 0) {
    if (totle > 50) {
      
        document.getElementById("totle").innerHTML =
        "จำนวน " + 50 + " คน (โรงเรียนเต็มแล้วจ้า มาสมัครใหม่ปีหน้านะจ๊ะ)";
         break;
        
     }
    let homes = Math.floor(Math.random() * 4) + 1;
    console.log(homes);
    if (totle <= 50) {
      document.getElementById("totle").innerHTML = "จำนวนพ่อมดและแม่มดใหม่ในปีนี้ " + totle + " คน";
      switch (homes) {
        case 1:
          if (home1 > 12) {
            if (homes > 50) {
              document.getElementById("resultname").innerText =
                "[โรงเรียนเต็ม]";
            } else if (home1 > 13) {
            }
          } else {
            home1 = home1 + 1;
            totle = totle + 1;
            document.getElementById("resulthome1").innerHTML =
              "บ้านกริฟฟินดอร์ จำนวน " + home1 + " คน";
            document.getElementById("resultname").innerText = "คุณ "+ names + " ผลการคัดสรร: บ้านกริฟฟินดอร์";
            x = 1;
            break;
          }

        case 2:
          if (home2 > 12) {
            if (homes > 50) {
              document.getElementById("resultname").innerText =
                "[โรงเรียนเต็ม]";
            } else if (home1 > 13) {
     
            }

            document.getElementById("resultname").innerText =
              "[บ้านฮัฟเฟิลพัฟเต็มจ้า ]";
          } else {
            home2 = home2 + 1;
            totle = totle + 1;
            document.getElementById("resulthome2").innerHTML =
              "บ้านฮัฟเฟิลพัฟ จำนวน " + home2 + " คน";
            document.getElementById("resultname").innerText = "คุณ "+ names + " ผลการคัดสรร: บ้านฮัฟเฟิลพัฟ";
            x = 1;
            break;
          }
        case 3:
          if (home3 > 11) {
            if (homes > 50) {
              document.getElementById("resultname").innerText =
                "[โรงเรียนเต็ม]";
            } 

            document.getElementById("resultname").innerText =
              "[บ้านฮัฟเฟิลพัฟเต็มจ้า ]";
          } else {
            home3 = home3 + 1;
            totle = totle + 1;
            document.getElementById("resulthome3").innerHTML =
              "บ้านเรเวนคลอ จำนวน " + home3 + " คน";
            document.getElementById("resultname").innerText = "คุณ "+ names + " ผลการคัดสรร: บ้านเรเวนคลอ";
            x = 1;
            break;
          }
        case 4:
          if (home4 > 12) {
            if (homes > 50) {
              document.getElementById("resultname").innerText =
                "[โรงเรียนเต็ม]";
            } 
            document.getElementById("resultname").innerText =
              "[บ้านฮัฟเฟิลพัฟเต็มจ้า ]";
          } else {
            home4 = home4 + 1;
            totle = totle + 1;
            document.getElementById("resulthome4").innerHTML =
              "บ้านสลิธีรีน จำนวน " + home4 + " คน";
            document.getElementById("resultname").innerText = "คุณ "+ names + " ผลการคัดสรร: บ้านสลิธีรีน";
            x = 1;
            break;
          }
          
      }
    } 
  }
  alert(document.getElementById("resultname").innerText)
}
