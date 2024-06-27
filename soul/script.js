for(let i = 0, element; element = document.querySelectorAll('input[type="range"]')[i++];) {
    rangeSlider.create(element, {
        polyfill: true
    });
}

let material = new THREE.MeshPhongMaterial({
    color: 0xE4ECFA,
    shininess: 100
});

$(document).ready(function() {

    let speedSlider = $('input[name="speed"]'),
        spikesSlider = $('input[name="spikes"]'),
        processingSlider = $('input[name="processing"]');

        window.addEventListener('message', (event) => {
    // Assuming the message data contains properties named 'speed', 'spikes', and 'processing'
    if (event.data.speed !== undefined) {
        setSpeed(event.data.speed);
    }
    if (event.data.spikes !== undefined) {
        setSpikes(event.data.spikes);
    }
    if (event.data.processing !== undefined) {
        setProcessing(event.data.processing);
    }
});

window.addEventListener('message', function(event) {
    if (event.data.color) {
        material.color.setHex(event.data.color);
    }
});





window.addEventListener('message', function(event) {
    if (event.data.color) material.color.setHex(event.data.color);
    if (event.data.speed) setSpeed(event.data.speed);
    if (event.data.spikes) setSpikes(event.data.spikes);
    if (event.data.processing) setProcessing(event.data.processing);
});







function setSpeed(value) {
    $('input[name="speed"]').val(value).trigger('change');
}

function setSpikes(value) {
    $('input[name="spikes"]').val(value).trigger('change');
}

function setProcessing(value) {
    $('input[name="processing"]').val(value).trigger('change');
}



    let $canvas = $('#blob canvas'),
        canvas = $canvas[0],
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            context: canvas.getContext('webgl2'),
            antialias: true,
            alpha: true
        }),
        simplex = new SimplexNoise();

    renderer.setSize($canvas.width(), $canvas.height());
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    let scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 0.1, 1000);

    camera.position.z = 5;

    let geometry = new THREE.SphereGeometry(.8, 128, 128);


    let lightTop = new THREE.DirectionalLight(0xFFFFFF, .7);
    lightTop.position.set(0, 500, 200);
    lightTop.castShadow = true;
    scene.add(lightTop);

    let lightBottom = new THREE.DirectionalLight(0xFFFFFF, .25);
    lightBottom.position.set(0, -500, 400);
    lightBottom.castShadow = true;
    scene.add(lightBottom);

    let ambientLight = new THREE.AmbientLight(0x798296);
    scene.add(ambientLight);

    let sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    let update = () => {

        let time = performance.now() * 0.00001 * speedSlider.val() * Math.pow(processingSlider.val(), 3),
            spikes = spikesSlider.val() * processingSlider.val();

        for(let i = 0; i < sphere.geometry.vertices.length; i++) {
            let p = sphere.geometry.vertices[i];
            p.normalize().multiplyScalar(1 + 0.3 * simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time));
        }

        sphere.geometry.computeVertexNormals();
        sphere.geometry.normalsNeedUpdate = true;
        sphere.geometry.verticesNeedUpdate = true;

    }

    function animate() {
        update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

});
