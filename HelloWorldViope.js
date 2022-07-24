//function which takes x and returns the square
/*const nelio = function(x)
{
    return x*x
}
*/
// Function which gets the number from the element "numero" and calculates the square for it
function laskeNelio()
{
	var number = document.getElementById("numero").innerHTML;
	//var number = 7;
	var nelio = number*number;
	console.log("Luvun " + number + " neliö on " + nelio);
}

// Function which prints hello micah
function helloworld() 
{
    console.log("Hello Micah!")
}
 
// Function which adds more buttons that calls function tervehdi()
function lisaaPainike() 
{
   var muuttuja = document.createElement("button"); // 
   muuttuja.innerHTML = "Painike"; //
   muuttuja.id = "luotuPainike"; //
   muuttuja.setAttribute("onclick","tervehdi()"); //
   document.body.appendChild(muuttuja); // 
}

// Function which prints Moikka!
function tervehdi()
{
    console.log("Moikka!");
}

//function which takes number from input field, calculates square and prints it to the output field
function lasketaannelio()
{
    var a =  document.getElementById("luku").value;
    var lasku = a*a;
    document.getElementById("tulos").value = "Luvun " + a + " neliö on " + lasku;
}

// test function to change the value of element numero
function testi()
{
    document.getElementById("numero").innerHTML = "JavaScript on helppoa ja hauskaa!";
}
//testi()


//var luku = y;
//var eks = z;

//Viope 4.3 retrieve value from Html file



function Calc() 
{
   
    var luku = noudaArvo("luku"); // Variable luku calls function noudaArvo(Parameter ="luku")
    var eksp = noudaArvo("eksponentti");
    console.log("Luku " + luku + " potenssiin " + eksp + " on:");
    console.log(laskePotenssi(luku,eksp));
}
// p = "luku"
function noudaArvo(p) 
{             
    var vara1 = document.getElementById(p).value;  // variable for retrieved value
    return vara1;
}

// calculate the root for the retrieved value
// laskePotenssi = (noudaArvo("luku"), noudaArvo("eksponentti"))
function laskePotenssi(x,y)
{
       return x ** y // is same as x^y
}

//console.log(Calc(2,2))

//VIOPE 5.1 objects

//START
var kimmo = new Object();
kimmo.ika = 20;
kimmo.etunimi = "Kimmo";
kimmo.sukinimi = "Koodari";
kimmo.nimi = function() {return this.etunimi + " " + this.sukinimi}


var oona = new Object();
oona.ika = 32;
oona.etunimi = "Oona";
oona.sukunimi = "Ohjelmoija";
oona.nimi = function() {return this.etunimi + " " + this.sukunimi}

/*
function henkilo(nimi,etunimi,ikä) {
    this.nimi = nimi;
    this.etunimi = etunimi;
    this.ikä = ikä;
  }
  
  var kimmo = new henkilo("Kimmo Koodari", "Kimmo", "20")
  var oona = new henkilo("Oona Ohjelmoija", "Oona", "32")

*/
//END


//VIOPE 5.2

//START
taulukko = []; // initializing new array

// Function that gets value from html id="luku" and pushes it to taulukko
function lisaaLuku() 
{
    var uusiarvo =  document.getElementById("luku").value; // getting the value from id="luku"
    taulukko.push(uusiarvo); // appending the value at the _End_ of the taulukko -array
    console.log(uusiarvo) //testing to see if value was received

}

// Function for loggin the values from the taulukko -array
function tulostaTiedot()
{
    console.log("Taulukossa on " + taulukko.length + " arvoa."); // output for how many values are inside the array by using .length

    // var summa = 0; //intializing variable summa for calculating the sum of all elements in the array
    for (let i = 0, summa = 0; i < taulukko.length; i++) // loop for calculating the sum of all elements in the array
    {
        summa = eval(taulukko[i]) + summa // calculating the sum, using eval(taulukko[i]) because otherwise the values of the array would be in string and [1,2,3,4] would equal to 1234 instead of 10.
        var keskiarvo = summa / taulukko.length // calculating the average of the arrays sum
    }
    console.log("Lukujen keskiarvo on " + keskiarvo); // console.log to log the 
}
//END


var array1 = ["A"];
var array2 = ["B","C","D","E","F","G","H","I"];

function popAndShift()

{


	console.log("Taulukko 1: " + array1);
    console.log("Taulukko 2: " + array2);
    var pituus = array2.length/2;
	for (let i = 0; i < pituus; i++)
	{
		if(array2.length > 0 )
			{
    		var testataan = array2.pop();
    		array1.push(testataan);
            if(array2.length > 0 )
            {
    		    var testataan2 = array2.shift();
    		    array1.push(testataan2);
            }   
			
			else
			{
			    break;
			}
	    }
    }   

 
    console.log("Lopputulos: " + array1);

}

const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(
  arr1.sort() === arr1, // true, because they are in right order in start
  arr2.sort() == arr2, // true, because its only == evaluation which checks the values are same
  arr1.sort() === arr2.sort() //false, because 
); 
var arr =[102, 2050212, 52, 1, 781, 9, 10000]; 

/* function greatestNumberInArray(arr) {
    let greatest = 0;
    for (let i = 0; i < arr.length; i++) {
      if (greatest < arr[i]) {
        greatest = arr[i];
      }
    }
    return greatest;
  }

function first() {
    window.a = 3;
}

function second() {
    alert(a);
} */

(function() {
    console.log(1);
    setTimeout(function() {
      console.log(2);
    }, 1000);
    setTimeout(function() {
      console.log(3);
    }, 0);
    console.log(4);
  })();


// abstraction test

/*function repeat(n, action)
{
    for(let i = 0; i < n; i++)
    {
        action(i)
    }
}*/


function nelio(x,y)
{
    return x**y;
}

function puolitus(x)
{
    return x/2;
}


function toisto(x,y,n,funktio)
{

    if(funktio == nelio)
    {
        nelio(x,y);
    }

    if(funktio == puolitus)
    {
        puolitus(x,y);
    }
    
}
toString

System.out.println(Pattern.matches("[amn]", "abcd"));

var summa = 0
var num = 60
