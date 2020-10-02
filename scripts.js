document.getElementById('btn').addEventListener("click", function () {
    var word = document.getElementById('word').value.length;

    document.getElementById('result').innerHTML = "Lenght is: " + word;
});