/*Task 20 - Capstone Project IV: JavaScript fundamentals - Compulsory Task*/
/*Lee Kaplan*/
/*This website is about swimming*/

//THERE IS A DROPDOWN MENU ON THE INDEX PAGE
//THE SAVE BUTTONS HIDE THEN REAPPEARS WHEN YOU CLICK THEM

//This function is what saves a clicked text element. I used https://www.w3schools.com/jquery/traversing_parent.asp to help me

function saveText(element) {

    let parentId = $(element).parent().attr("id");
    let parent = document.getElementById(parentId);
    let parentContent = parent.textContent;

    sessionStorage.setItem(parentId, parentContent);
    length = sessionStorage.length;

    alert(`You have saved ${length} item(s)`);

    hideButton(element);

};

//This function hides and then shows the save button, to show the user that it's been clicked

function hideButton(element) {

    $(element).hide(100).show(100);

};


//This function is what saves a clicked image.

function saveImage(element) {

    let id = $(element).attr("id");
    let src = $(element).attr("src");

    sessionStorage.setItem(id, src);
    length = sessionStorage.length;

    alert(`You have saved ${length} item(s)`);
    
};

//This function loops through everything in session storage
//If the value of a specific key ends in "jpg" then it saves the image
//Else, it saves the text

function showSavedText() {

    $("#savedContent").empty();

    let contentDiv = document.getElementById("savedContent");
    for (let i = 0; i < sessionStorage.length; i++) {

        const key = sessionStorage.key(i);
        let content = sessionStorage.getItem(key);
        let last3 = content.slice(-3);

        if (last3 === "jpg") {

            contentDiv.innerHTML += `
        
            <img class="savedImage" src=${content} alt="A person swimming"> 
    
            <div class="savedSpacer"></div>
            
            `

        }else {
        
            contentDiv.innerHTML += `
        
            <p>${content}</p>
    
            <div class="savedSpacer"></div>
            
            `
        }

    };

};

//This function contains a chain of animations to indicate that the like button has been clicked

function like(element) {

    $(element).animate({height: "10px"}).animate({height: "20px"});

};