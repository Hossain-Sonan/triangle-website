function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);
    

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    // get area calculate
    
    const area = 0.5 * base * height
    console.log(area);
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('triangle', area);

    
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthvaluetext = lengthField.value;
    const length = parseFloat(lengthvaluetext);
    console.log(length);
    // validate input
    if(isNaN(width) || isNaN(length)){
        alert ('please input a number');
        return;
    }

    const area = width * length
    console.log(area);
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('rectangle', area);
    

}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);
    // validate
    if(isNaN(base) || isNaN(height)){
        alert('input number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    // add to calculation entry
    addToCalculationEntry('parallelogram', area);

}
function calculateEllipseArea(){
    const majorRadious = getInputValue('ellipse-major-radious');
    const minorRadious = getInputValue('ellipse-minor-radious');
    const area = 3.14 * majorRadious * minorRadious;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText("ellipse-area", areaTwoDecimal);
    addToCalculationEntry('ellipse', areaTwoDecimal);
    
}






// reuseable get input value field in number

function getInputValue(fieldId){
    const inpotField = document.getElementById(fieldId);
    const inputValueText = inpotField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set spen,p,div etc text
function setElementInnerText(elementId, area){
const element = document.getElementById(elementId);
element.innerText = area;
}

// add to calculation entryE
// get the element where you want to add the dynamic HTML
// creat an element you want to add
// if needed add some class
// set inner HTML.it could be dynamic template string
// append the created element as a child of the parrent

function addToCalculationEntry(areaType, area){
    console.log(areaType+ " " + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert<button>`;
    calculationEntry.appendChild(p);
}
