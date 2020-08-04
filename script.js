function inchToFeet() {
    var inch = document.getElementById('inputInch').value;
    var feet = ((+inch) / 12).toFixed(2);
    document.getElementById('seeResult').value = feet;
}

function feetToInch() {
    var feet = document.getElementById('inputFeet').value;
    var inch = ((+feet) * 12).toFixed(2);
    document.getElementById('seeOutput').value = inch;
}
