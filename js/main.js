// 1 - a
var secondTable = document.querySelectorAll("table")[1];
if (secondTable) {
    var firstAnchor = secondTable.querySelector("a");
    if (firstAnchor) {
        firstAnchor.href = "http://training.com";
        firstAnchor.textContent = "Training";
        firstAnchor.target = "_blank";
    }
}

// 1 - b
var parentImages = document.querySelector(".images");
var images = parentImages.querySelectorAll("img");
for (var i = 0; i < images.length; i++) {
    images[i].style.border = "2px solid pink";
}

// 1 - c
var checkboxes;
function alertCheckedCheckboxes() {
    //
    var form = document.querySelector('form[name="userData"]');

    if (form) {
        //
        checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
        console.log(checkboxes);

        //
        var values = [];
        for (var i = 0; i < checkboxes.length; i++) {
            values.push(checkboxes[i].value);
        }

        //
        if (values.length > 0) {
            alert("Checked checkboxes values: " + values.join(", "));
        } else {
            alert("No checkboxes are checked.");
        }
    }
}

// 1 - d
var exampleElement = document.getElementById("example");
if (exampleElement) {
    exampleElement.style.backgroundColor = "pink";
}
