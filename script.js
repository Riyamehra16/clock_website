let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();
                                    
    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation =6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);
// Add an event listener to the button to change the background color when it's clicked
button.addEventListener("click", function() {
    // Generate a random color (you can use any color you want)
    var randomColor = getRandomColor();
  
    // Change the background color of the entire page (body)
    document.body.style.backgroundColor = randomColor;
  });
  