/* grab HTML elements */ 
const output1        = document.getElementById("output-part1");
const output2        = document.getElementById("output-part2");

/*
--------------------------------
PART 1
--------------------------------
*/

/*
const students      = ["Jane","Joe","Jack","Jill","Jerome"];
    we will be searching this array to see if
    a specified name is in it 
*/
const students      = ["Jane","Joe","Jack","Jill","Jerome"];

/*
const targetName    = "Jill";
    we are going to search the students array and see if this 
    targetName appears as data anywhere

    change this value during testing
    so that sometimes it matches array data,
    and sometimes does not
*/
const targetName    = "Jill";  //change "Jill" to your first name

//one way to track if we find a match 
//is to use a boolean 'flag'
let   targetFound   = false;

//use this for concatenated output
let html = "";

//add a few more names to the array
students.push("Jesse");
students.push("Jeremy");
students.push("Janet");

//alphabetize array items
students.sort();

//display the name we are searching for
html += `<p>Target name is : <strong>${targetName}</strong></p>`;
html += "<h2>List of Students:</h2>";

//display size of array
html += `<p>There are ${students.length} student(s)</p>`;

html += "<ul>";
//loop through all items in array
students.forEach(function( oneStudent ){    
    if( targetName === oneStudent){
        //if we find a match, remember this
        //by changing the value of the boolean 'flag'
        targetFound = true;
        //display a special styled list item
        html += `<li style='background-color:yellow'>${oneStudent} <-- target name found!</li>`;   
    }else{
        //otherwise display a normal list item
        html += `<li>${oneStudent}</li>`;
    }
});
html += "</ul>";

/*
we can use the boolean flag to 
determine if a match was found
*/
html += "<h3>Using a boolean flag to search the array...</h3>";
if(targetFound){
    html += "<p>Target name was found in the list (using a boolean flag)</p>";
}else{
    html += "<p>Target name was NOT found in the list (using a boolean flag)</p>";
}

/*
we can instead use array.find() function
to search an array without needing to 
iterate over it
*/
html += "<h3>Using array.find() to search array...</h3>";
const found = students.find(element => element == targetName);
if(found){
    html += "<p>Target name was found in the list (using array.find())</p>";
}else{
    html += "<p>Target name was NOT found in the list (using array.find())</p>";
}
//display results
output1.innerHTML = html;

//clear the output variable for the next part...
html = "";
/*
--------------------------------
PART 2
--------------------------------
*/
/*
const arrayOfNumbers = [4, 0, -4, 13, -2];
    for each of these numbers, we
    need to count from that number to zero,
    displaying the value each time as we count up or down
    unless the number is zero    

    eg: if the number is 5, display the sequence
    5 4 3 2 1 0

    eg: if the number is -3, display the sequence
    -3 -2 -1 0
*/
const arrayOfNumbers = [4, 0, -4, 13, -2];

//loop through alll numbers in the array
arrayOfNumbers.forEach(function( oneNumber ){

    //display the number we are currently using
    html += `<p>Number: <strong>${oneNumber}</strong></p>`;

    //see if we are counting up, down or not at all...
    if( oneNumber == 0 ){
        html += "<p>There is no counting to be done.</p>";
    }else if(oneNumber > 0){
        html += "<p>Count down:</p>";
        html += "<ul>";

        //doing count using a for loop (could use while loop instead)
        for( let index = oneNumber; index >= 0; index--){
            html += `<li>${index}</li>`;
        }
        html += "</ul>";
    }else{
        html += "<p>Count up:</p>";
        html += "<ul>";
        
        //doing count using a while loop (could use for loop instead)
        let index = oneNumber;        
        while( index < 0){
            html += `<li>${index}</li>`;
            index++;
        }
        html += "</ul>";
    }
});


//display results
output2.innerHTML = html;