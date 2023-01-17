const input = document.querySelector("input");
input.addEventListener("change", () => displayResult(mergeSortCoordinator(input.value)));

function mergeSort(array) {

    if (array.length > 1) {
    
        // Split array in 2
        const middle = Math.round(array.length / 2);
        let leftHalf = array.slice(0, middle);
        let rightHalf = array.slice(middle);

        // MergeSort both halves
        mergeSort(leftHalf);
        mergeSort(rightHalf);
    
        // Merge
        let i = 0;
        let j = 0;
        let k = 0;
    
        while ((i < leftHalf.length) && (j < rightHalf.length)) {
    
            if (leftHalf[i] < rightHalf[j]) {
                array[k] = leftHalf[i];
                i++;
            } else {
                array[k] = rightHalf[j];
                j++;
            }
            k++;
        };

        // Collect remaining odd parts
        while (i < leftHalf.length) {
            array[k] = leftHalf[i];
            i++;
            k++;
        }
        while (j < rightHalf.length) {
            array[k] = rightHalf[j];
            j++;
            k++;
        }
    }
}

function mergeSortCoordinator (array) {
    if (typeof array === "string") {
        array = array.split(",");
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    mergeSort(array);

    return array;
}

function displayResult(result) {
    const resultParagraph = document.querySelector(".result");
    resultParagraph.innerText = result;
}

displayResult(mergeSortCoordinator(input.placeholder));