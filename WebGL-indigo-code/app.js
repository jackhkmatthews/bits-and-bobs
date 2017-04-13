var InitDemo = function () {
	console.log('loaded');

	var canvas = document.getElementById('game-surface');
	var gl = canvas.getContext('webgl');

	gl.clearColor(0.75, 0.85, 0.8, 1);
	gl.clear(c);

}
