AFRAME.registerComponent('morsphere', {
    
    init: function () {

        // https://stackoverflow.com/questions/57577884/three-js-how-to-morph-cube-to-sphere-on-mouse-hover
        var boxGeom = new THREE.BoxBufferGeometry(7, 7, 7, 10, 10, 10);

        var pos = boxGeom.attributes.position;
        boxGeom.morphAttributes.position = [];
        var spherePositions = [];
        var v3 = new THREE.Vector3();
        for (var i = 0; i < pos.count; i++) {
            v3.fromBufferAttribute(pos, i).setLength((3.5 * Math.sqrt(3) + 3.5) * 0.5);
            spherePositions.push(v3.x, v3.y, v3.z);
        }
        boxGeom.morphAttributes.position[0] = new THREE.Float32BufferAttribute(spherePositions, 3);

        var boxMat = new THREE.MeshBasicMaterial({
            color: "aqua",
            wireframe: true,
            morphTargets: true
        });
        var box = new THREE.Mesh(boxGeom, boxMat);

        this.el.setObject3D('sphere', box);
    },

    remove: function () {
        // Remove Object3D.
        this.el.removeObject3D('light');
    }
});