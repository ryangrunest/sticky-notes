var stickies = document.querySelectorAll(".card");
var addButton = document.querySelector("#addButton");
var subtractButton = document.querySelector("#subtractButton");
i = 0;

subtractButton.addEventListener("click", function() {
	stickies[3].classList.add("hidden");
	i++;
});

addButton.addEventListener("click", function() {
	console.log("clicked");
})


function saveEdits() {

// get the editable version for headers
var firstHeaderEdit = document.querySelector("#first-header");
var secondHeaderEdit = document.querySelector("#second-header");
var thirdHeaderEdit = document.querySelector("#third-header");
var fourthHeaderEdit = document.querySelector("#fourth-header");
var fifthHeaderEdit = document.querySelector("#fifth-header");
var sixthHeaderEdit = document.querySelector("#sixth-header");
var seventhHeaderEdit = document.querySelector("#seventh-header");
var eighthHeaderEdit = document.querySelector("#eighth-header");
var ninthHeaderEdit = document.querySelector("#ninth-header");
var tenthHeaderEdit = document.querySelector("#tenth-header");
var HeaderEdit11 = document.querySelector("#header11");
var HeaderEdit12 = document.querySelector("#header12");
var HeaderEdit13 = document.querySelector("#header13");
var HeaderEdit14 = document.querySelector("#header14");
var HeaderEdit15 = document.querySelector("#header15");
var HeaderEdit16 = document.querySelector("#header16");
var HeaderEdit17 = document.querySelector("#header17");
var HeaderEdit18 = document.querySelector("#header18");

// get the editable version for card content
var firstBodyEdit = document.querySelector("#first-body");
var secondBodyEdit = document.querySelector("#second-body");
var thirdBodyEdit = document.querySelector("#third-body");
var fourthBodyEdit = document.querySelector("#fourth-body");
var fifthBodyEdit = document.querySelector("#fifth-body");
var sixthBodyEdit = document.querySelector("#sixth-body");
var seventhBodyEdit = document.querySelector("#seventh-body");
var eighthBodyEdit = document.querySelector("#eighth-body");
var ninthBodyEdit = document.querySelector("#ninth-body");
var tenthBodyEdit = document.querySelector("#tenth-body");
var BodyEdit11 = document.querySelector("#body11");
var BodyEdit12 = document.querySelector("#body12");
var BodyEdit13 = document.querySelector("#body13");
var BodyEdit14 = document.querySelector("#body14");
var BodyEdit15 = document.querySelector("#body15");
var BodyEdit16 = document.querySelector("#body16");
var BodyEdit17 = document.querySelector("#body17");
var BodyEdit18 = document.querySelector("#body18");


// get the edited element content for headers
var userVersionHeader1 = firstHeaderEdit.innerHTML;
var userVersionHeader2 = secondHeaderEdit.innerHTML;
var userVersionHeader3 = thirdHeaderEdit.innerHTML;
var userVersionHeader4 = fourthHeaderEdit.innerHTML;
var userVersionHeader5 = fifthHeaderEdit.innerHTML;
var userVersionHeader6 = sixthHeaderEdit.innerHTML;
var userVersionHeader7 = seventhHeaderEdit.innerHTML;
var userVersionHeader8 = eighthHeaderEdit.innerHTML;
var userVersionHeader9 = ninthHeaderEdit.innerHTML;
var userVersionHeader10 = tenthHeaderEdit.innerHTML;
var userVersionHeader11 = HeaderEdit11.innerHTML;
var userVersionHeader12 = HeaderEdit12.innerHTML;
var userVersionHeader13 = HeaderEdit13.innerHTML;
var userVersionHeader14 = HeaderEdit14.innerHTML;
var userVersionHeader15 = HeaderEdit15.innerHTML;
var userVersionHeader16 = HeaderEdit16.innerHTML;
var userVersionHeader17 = HeaderEdit17.innerHTML;
var userVersionHeader18 = HeaderEdit18.innerHTML;

// get the edited element content for card content
var userVersionBody1 = firstBodyEdit.innerHTML;
var userVersionBody2 = secondBodyEdit.innerHTML;
var userVersionBody3 = thirdBodyEdit.innerHTML;
var userVersionBody4 = fourthBodyEdit.innerHTML;
var userVersionBody5 = fifthBodyEdit.innerHTML;
var userVersionBody6 = sixthBodyEdit.innerHTML;
var userVersionBody7 = seventhBodyEdit.innerHTML;
var userVersionBody8 = eighthBodyEdit.innerHTML;
var userVersionBody9 = ninthBodyEdit.innerHTML;
var userVersionBody10 = tenthBodyEdit.innerHTML;
var userVersionBody11 = BodyEdit11.innerHTML;
var userVersionBody12 = BodyEdit12.innerHTML;
var userVersionBody13 = BodyEdit13.innerHTML;
var userVersionBody14 = BodyEdit14.innerHTML;
var userVersionBody15 = BodyEdit15.innerHTML;
var userVersionBody16 = BodyEdit16.innerHTML;
var userVersionBody17 = BodyEdit17.innerHTML;
var userVersionBody18 = BodyEdit18.innerHTML;


// save the content to local storage for headers
localStorage.userEditsHeader1 = userVersionHeader1;
localStorage.userEditsHeader2 = userVersionHeader2;
localStorage.userEditsHeader3 = userVersionHeader3;
localStorage.userEditsHeader4 = userVersionHeader4;
localStorage.userEditsHeader5 = userVersionHeader5;
localStorage.userEditsHeader6 = userVersionHeader6;
localStorage.userEditsHeader7 = userVersionHeader7;
localStorage.userEditsHeader8 = userVersionHeader8;
localStorage.userEditsHeader9 = userVersionHeader9;
localStorage.userEditsHeader10 = userVersionHeader10;
localStorage.userEditsHeader11 = userVersionHeader11;
localStorage.userEditsHeader12 = userVersionHeader12;
localStorage.userEditsHeader13 = userVersionHeader13;
localStorage.userEditsHeader14 = userVersionHeader14;
localStorage.userEditsHeader15 = userVersionHeader15;
localStorage.userEditsHeader16 = userVersionHeader16;
localStorage.userEditsHeader17 = userVersionHeader17;
localStorage.userEditsHeader18 = userVersionHeader18;

// save the content to local storage for card content
localStorage.userEditsBody1 = userVersionBody1;
localStorage.userEditsBody2 = userVersionBody2;
localStorage.userEditsBody3 = userVersionBody3;
localStorage.userEditsBody4 = userVersionBody4;
localStorage.userEditsBody5 = userVersionBody5;
localStorage.userEditsBody6 = userVersionBody6;
localStorage.userEditsBody7 = userVersionBody7;
localStorage.userEditsBody8 = userVersionBody8;
localStorage.userEditsBody9 = userVersionBody9;
localStorage.userEditsBody10 = userVersionBody10;
localStorage.userEditsBody11 = userVersionBody11;
localStorage.userEditsBody12 = userVersionBody12;
localStorage.userEditsBody13 = userVersionBody13;
localStorage.userEditsBody14 = userVersionBody14;
localStorage.userEditsBody15 = userVersionBody15;
localStorage.userEditsBody16 = userVersionBody16;
localStorage.userEditsBody17 = userVersionBody17;
localStorage.userEditsBody18 = userVersionBody18;


// alert the user the edits have been saved
alert("Saved!");

};

function checkEdits() {

//find out if the user has previously saved edits for headers
if(localStorage.userEditsHeader1!=null)
document.querySelector("#first-header").innerHTML = localStorage.userEditsHeader1;
if(localStorage.userEditsHeader2!=null)
document.querySelector("#second-header").innerHTML = localStorage.userEditsHeader2;
if(localStorage.userEditsHeader3!=null)
document.querySelector("#third-header").innerHTML = localStorage.userEditsHeader3;
if(localStorage.userEditsHeader4!=null)
document.querySelector("#fourth-header").innerHTML = localStorage.userEditsHeader4;
if(localStorage.userEditsHeader5!=null)
document.querySelector("#fifth-header").innerHTML = localStorage.userEditsHeader5;
if(localStorage.userEditsHeader6!=null)
document.querySelector("#sixth-header").innerHTML = localStorage.userEditsHeader6;
if(localStorage.userEditsHeader7!=null)
document.querySelector("#seventh-header").innerHTML = localStorage.userEditsHeader7;
if(localStorage.userEditsHeader8!=null)
document.querySelector("#eighth-header").innerHTML = localStorage.userEditsHeader8;
if(localStorage.userEditsHeader9!=null)
document.querySelector("#ninth-header").innerHTML = localStorage.userEditsHeader9;
if(localStorage.userEditsHeader10!=null)
document.querySelector("#tenth-header").innerHTML = localStorage.userEditsHeader10;
if(localStorage.userEditsHeader11!=null)
document.querySelector("#header11").innerHTML = localStorage.userEditsHeader11;
if(localStorage.userEditsHeader12!=null)
document.querySelector("#header12").innerHTML = localStorage.userEditsHeader12;
if(localStorage.userEditsHeader13!=null)
document.querySelector("#header13").innerHTML = localStorage.userEditsHeader13;
if(localStorage.userEditsHeader14!=null)
document.querySelector("#header14").innerHTML = localStorage.userEditsHeader14;
if(localStorage.userEditsHeader15!=null)
document.querySelector("#header15").innerHTML = localStorage.userEditsHeader15;
if(localStorage.userEditsHeader16!=null)
document.querySelector("#header16").innerHTML = localStorage.userEditsHeader16;
if(localStorage.userEditsHeader17!=null)
document.querySelector("#header17").innerHTML = localStorage.userEditsHeader17;
if(localStorage.userEditsHeader18!=null)
document.querySelector("#header18").innerHTML = localStorage.userEditsHeader18;


// find out if the user has previously saved edits for card content
if(localStorage.userEditsBody1 != null)
document.querySelector("#first-body").innerHTML = localStorage.userEditsBody1;
if(localStorage.userEditsBody2 != null)
document.querySelector("#second-body").innerHTML = localStorage.userEditsBody2;
if(localStorage.userEditBody3 != null)
document.querySelector("#third-body").innerHTML = localStorage.userEditsBody3;
if(localStorage.userEditsBody4 != null)
document.querySelector("#fourth-body").innerHTML = localStorage.userEditsBody4;
if(localStorage.userEditsBody5 != null)
document.querySelector("#fifth-body").innerHTML = localStorage.userEditsBody5;
if(localStorage.userEditsBody6 != null)
document.querySelector("#sixth-body").innerHTML = localStorage.userEditsBody6;
if(localStorage.userEditsBody7 != null)
document.querySelector("#seventh-body").innerHTML = localStorage.userEditsBody7;
if(localStorage.userEditsBody8 != null)
document.querySelector("#eighth-body").innerHTML = localStorage.userEditsBody8;
if(localStorage.userEditsBody9 != null)
document.querySelector("#ninth-body").innerHTML = localStorage.userEditsBody9;
if(localStorage.userEditsBody10 != null)
document.querySelector("#tenth-body").innerHTML = localStorage.userEditsBody10;
if(localStorage.userEditsBody11 != null)
document.querySelector("#body11").innerHTML = localStorage.userEditsBody11;
if(localStorage.userEditsBody12 != null)
document.querySelector("#body12").innerHTML = localStorage.userEditsBody12;
if(localStorage.userEditsBody13 != null)
document.querySelector("#body13").innerHTML = localStorage.userEditsBody13;
if(localStorage.userEditsBody14 != null)
document.querySelector("#body14").innerHTML = localStorage.userEditsBody14;
if(localStorage.userEditsBody15 != null)
document.querySelector("#body15").innerHTML = localStorage.userEditsBody15;
if(localStorage.userEditsBody16 != null)
document.querySelector("#body16").innerHTML = localStorage.userEditsBody16;
if(localStorage.userEditsBody17 != null)
document.querySelector("#body17").innerHTML = localStorage.userEditsBody17;
if(localStorage.userEditsBody18 != null)
document.querySelector("#body18").innerHTML = localStorage.userEditsBody18;


};




function resetStorage() {
	localStorage.clear();
	location.reload();
}

