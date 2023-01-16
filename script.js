const input = document.querySelector("input");
input.addEventListener("change", () => displayResult(sort(input.value)));

function sort(string) {
    const array = string.split(",");
    return array;
}

function displayResult(result) {
    const resultParagraph = document.querySelector(".result");
    resultParagraph.innerText = result;
}

displayResult(sort(input.placeholder));