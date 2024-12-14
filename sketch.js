let steden = [];
let nSteden = 5;
let xMax = 400;
let yMax = 400;

function setup() {
    const container = document.getElementById("sketch-container");
    let canvas = createCanvas(xMax, yMax);
    canvas.parent(container);
    generateSteden();
}

function draw() {
    background(220);


    fill(0);
    for (let stad of steden) {
        ellipse(stad.x, stad.y, 10, 10);
    }


    noFill();
    stroke(0);
    beginShape();
    for (let stad of steden) {
        vertex(stad.x, stad.y);
    }
    endShape(CLOSE);
}


function generateSteden() {
    steden = [];
    for (let i = 0; i < nSteden; i++) {
        steden.push({
            x: random(0, xMax),
            y: random(0, yMax)
        });
    }
}

// Reseting het sketch als je kliken op de knop reset
document.getElementById("reset").addEventListener("click", () => {
    nSteden = parseInt(document.getElementById("nSteden").value);
    xMax = parseInt(document.getElementById("xMax").value);
    yMax = parseInt(document.getElementById("yMax").value);

    resizeCanvas(xMax, yMax);
    generateSteden();
});
