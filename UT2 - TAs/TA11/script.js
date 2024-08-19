function duplicates(nums) {
    let apariciones = {};

    nums.forEach(num => {
        if (apariciones[parseInt(num)]) {
            apariciones[parseInt(num)]++;
        } else {
            apariciones[num] = 1;
        }
    });

    let duplicates = 0;

    for (let entrada in apariciones) {
        if (apariciones[entrada] > 1){
            duplicates++;
        }
    }

    console.log(duplicates);
}

function onButtonClick() {
    duplicates(document.getElementById("textInput1").value.split(","));
}