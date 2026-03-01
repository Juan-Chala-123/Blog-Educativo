const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", function() {
    preview.innerHTML = editor.value;
});