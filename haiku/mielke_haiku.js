(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mielke_haiku_atlas_1", frames: [[0,0,1649,1779]]},
		{name:"mielke_haiku_atlas_2", frames: [[0,0,1649,1779]]},
		{name:"mielke_haiku_atlas_3", frames: [[0,0,1579,1779]]},
		{name:"mielke_haiku_atlas_4", frames: [[0,0,1579,1779]]},
		{name:"mielke_haiku_atlas_5", frames: [[1120,0,921,699],[0,0,1118,621],[0,623,1058,581],[0,1206,1029,539]]},
		{name:"mielke_haiku_atlas_6", frames: [[0,0,1029,539],[1031,0,860,539],[0,953,679,391],[0,541,797,410],[799,541,797,410],[681,953,679,391],[1362,953,465,145],[0,1346,1248,159]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_16 = function() {
	this.initialize(ss["mielke_haiku_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["mielke_haiku_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["mielke_haiku_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["mielke_haiku_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["mielke_haiku_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["mielke_haiku_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["mielke_haiku_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["mielke_haiku_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["mielke_haiku_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.water = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// water
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-296.05,-451.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-296.05,-451.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-296.05,-451.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_16();
	this.instance_3.setTransform(-296.05,-451.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_3}]},15).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296,-451.5,824.5,889.5);


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// petals
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-422.4,-163.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-422.4,-163.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-422.4,-163.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(-431.35,-184.15,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_11();
	this.instance_4.setTransform(-438.65,-185.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[]},5).wait(1));

	// trunk
	this.instance_5 = new lib.CachedBmp_12();
	this.instance_5.setTransform(-395.85,-143.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-438.6,-185.7,559,391.4);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-127.95,-92.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-186.95,-101.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(-186.95,-101.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(-169.6,-97.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.9,-101.9,398.5,205);


(lib.bench = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-247.75,-28.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wood
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("ARWgpIgSAAMghrAAAIgYAAAR8AqIgIAAMgjcAAAIgDAAIgQAA");
	this.shape.setTransform(-130.825,32.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996633").ss(4,1,1).p("AvnjnIftAAIAABGI/tAAgAvnlvIftAAIAABGI/tAAgAvnhmIftAAIAABGI/tAAgAwlDaIAAAAIAggoMAgzAAAIAXAoIAxBUIAmBCMgk3AAAIAXgdAvnAcIftAAIAABGI/tAAgAwlDaIgOARAwyDrIANgRAxwE5IAJgLIAegnAxKEHIggAnIgIAK");
	this.shape_1.setTransform(-130.975,6.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AybFwIAXgdIgBAAIgBgCIgBgBIgBgBIgBgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIABgBIABgBIABgBIABgBIACgBIABAAIABgBIACAAIACAAIABgBIACAAIADgBIACAAIABAAIACAAIABABIAAAAIABAAIABABIAAAAIAJgLIAegnIAAAAIAAAAIgBgBIAAAAIACAAIABAAIABgBIABgBIABAAIABgBIAAgBIABgBIAAgBIABgBIAAgCIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIABgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIgBgBIAAAAIACgBIAIgBIAFAAIABAAIANgRMAhqAAAIAxBUIAmBCgAR2EuMgjdAAAgAxLEGIgBAAIgBAAIgBAAIgBAAIgBgBIgBAAIgBgBIgBgBIAAAAIgBgBIAAgCIgBgBIAAgBIAAgDIABACIAAABIAAABIABAAIAAABIABABIABABIABABIAAAAIABABIABAAIACABIABABIABAAIgBAAgAxVD5IAAgBIAAgBIABgBIAAABIgBADIAAgBgAwlDaIAAAAIAggoMAgzAAAIAXAogAwlDagAvnBiIAAhGIftAAIAABGgAvnggIAAhGIftAAIAABGgAvnihIAAhGIftAAIAABGgAvnkpIAAhGIftAAIAABGg");
	this.shape_2.setTransform(-130.975,6.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// legs
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AznIuQgHgHAAgKQAAgxAEgwQAFgxALgvQALgvASgsQANggAQgcIgBgCIgLgaIgKgaIgMgZIgEgHIgBgDIgBgBIgCgEIgCgEIgCgDIAAgBIgCgEIAAABIgBgCIAAgBQggg7gpgzQgngyAag3QALgWAUgMQBKguA8g/QArgtA5gRIAIgCIAAjxIBXAAIAALCIhXAAIAAl9IgDABQgIAEgHAFIgNALIgNALIgKAJIADgDIgkAgIgkAgQgRAOgSAMQgTAMgSANIgKAIIAAAAIABAEIACADIABAEQAJAOALANQALANAJAPIATAeIAVAkIAGANIgBgEIACAFIACAEIACAEIADAEIAAABIgCgDQALAUALAaIAUAqIAGAFQAFAEADAGIAAAAQAFgLAMgFQAYgKAVAPIABABIABACIACABIABACIABACIABACIABACQAEAtgBAuQgCA1ACA1QABA3AIA2QADAXgKAVQgJASgUABQgmAEgGgmIgFhdIgDhdIgEhWIgBABIgFADQgVAjgPAnQgVA1gFA6QgFA8gDA8QgBALgIAHQgQANgPAAQgQAAgOgRgASxINQgFgDgDgFQgagugNgyQgNgzgRgxQgQgwgagsQgSgfASgcQAKgQATgDQARgCANALIACABIABACIABABIACACIABACIABACIABACIAAACIABACIAAACIABACIAMghQANgoAOgnIAdhMIANglIAAgBIAAAAIALgpIAGggIhQgcIhPgaQgQgFgQgGIAAE8IhXAAIAArCIBXAAIAAEnIAFAFIAHAGIADACQBDAcBGAUQA0AQAuAaQANAHAEAOQAJAhgIAjQgRBKgcBGQglBfgjBhQgGASgMAJIAHATIAoBvQARAtAHAuQABAHgEAGQgOAXgUAAQgLAAgOgIgAP8IAIgDAAIgCgBIgDAAIgDgBIgDgBIgCgCIgCgBIgDgCIgCgBIgCgDIgBgCIgCgCIgBgDIgBgDIgBgDIgBgDIAAgDIgBgEIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIgBgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIgBgFIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIgBgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIgBgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIAAgFIgBgFIAAgFIAAgFIAAgFIAAgFIAAgCIABgDIAAgCIABgDIAAgCIABgCIABgDIABgCIABgCIABgCIABgBIACgCIABgCIABgBIACgCIACgBIABgBIACgCIACgBIACgBIACgBIACgBIACAAIACgBIACgBIACAAIACAAIACgBIACAAIACAAIACAAIADAAIACAAIACABIACAAIACAAIACABIABABIACABIACAAIACABIABACIACABIACABIABABIABACIACABIABACIABACIABACIABACIAAACIABACIAAADIABACIAAADIAAACIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIABAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIABAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIABAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAFIABAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIABAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAEIAAADIgBADIgBAEIgBADIgBACIgCADIgCADIgCACIgCACIgCACIgCACIgDACIgCABIgDACIgDABIgCABIgDABIgDAAIgDABIgDAAIgDAAIgDAAg");
	this.shape_3.setTransform(-130.6656,19.5908);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bench, new cjs.Rectangle(-263.7,-37.9,266.09999999999997,115.1), null);


// stage content:
(lib.mielke_haiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {haiku:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndStop("artwork");
		}
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		var line01 = "Cherry blossoms bloom";
		
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		var line02 = "Petals blow and fill the sky";
		
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		var line03 = "Spring won't wait for us"
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1");
			root.gotoAndStop("haiku");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.button();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(441.05,549.45,0.571,0.5535,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.button(), 3);

	this.toFrame01_btn = new lib.button();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(598.2,566.65,0.546,0.6324,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// bench
	this.instance = new lib.bench();
	this.instance.setTransform(238.3,593.25,1,1,0,0,0,-130.7,19.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// tree
	this.instance_1 = new lib.tree();
	this.instance_1.setTransform(243.6,383.95,1,1,0,0,0,-178.8,21.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34100C").s().p("AhxUFIgOgDIgMgGQhoh4AYiqQAIg2gFg3QgWkXgckXQgdkgCBkBQBdi5BDjDQBbkNgNkdQgCgeAKgdIAEgIIAEgIIAFgHIAFgHIAHgGIAGgFIAHgGIAHgEIAIgEIAHgDIAIgDIAIgCIAJgCIAIgBIAIAAIAJAAIAIAAIAIACIAHACIAIACIAHAEIAHADIAGAFIAGAFIAGAGIAFAGIAEAHIAEAIQASDiglDiQgcCuhECiQg3CEhFB+Qg4BpgZBzIAIAIIAHAJIAFALIAEALIADANQABB0AAB0IgBDZIAACaQAXBkAJBmQAHBJAEBKQAEBFgKBFQgGAqgYAjIgKAKIgMAJIgNAHIgOAGIgPADIgPABIgOgBg");
	this.shape.setTransform(78.7061,543.1625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

	// water
	this.instance_2 = new lib.water();
	this.instance_2.setTransform(677.8,419.85,1,1,0,0,0,98.5,-6.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line Three", "50px 'Modak'", "#FFFFFF");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 77;
	this.line03_txt.lineWidth = 667;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(479.95,393.65);

	this.line02_txt = new cjs.Text("Line Two", "50px 'Modak'", "#FFFFFF");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 77;
	this.line02_txt.lineWidth = 667;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(479.95,279.05);

	this.line01_txt = new cjs.Text("Line One", "50px 'Modak'", "#FFFFFF");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 77;
	this.line01_txt.lineWidth = 620;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(480,157.65);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(168.05,13.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("EhOZg1QMCczAAAMAAABqhMiczAAAg");
	this.shape_1.setTransform(481.875,318.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA6EB").s().p("EhOZA1RMAAAhqhMCczAAAMAAABqhg");
	this.shape_2.setTransform(481.875,318.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(2,1,1).p("EA2gg2gIY2AAIAABvEBPWA0zIAABuI42AAEhPVg0xIAAhvIY1AAEg2gA2hI41AAIAAhu");
	this.shape_3.setTransform(477.875,312.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0061E5","#FF81FA"],[0,1],0,-337.9,0,337.8).s().p("EBPWA0yMierAAAIgBAAMAAAhpkIABAAMCerAAAIABAAMAAABpkg");
	this.shape_4.setTransform(477.875,312.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(449.1,283.1,623.6999999999999,581.5);
// library properties:
lib.properties = {
	id: '8689EA64F1064C2180C29890EB7AED80',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mielke_haiku_atlas_1.png?1740441985642", id:"mielke_haiku_atlas_1"},
		{src:"images/mielke_haiku_atlas_2.png?1740441985642", id:"mielke_haiku_atlas_2"},
		{src:"images/mielke_haiku_atlas_3.png?1740441985642", id:"mielke_haiku_atlas_3"},
		{src:"images/mielke_haiku_atlas_4.png?1740441985642", id:"mielke_haiku_atlas_4"},
		{src:"images/mielke_haiku_atlas_5.png?1740441985642", id:"mielke_haiku_atlas_5"},
		{src:"images/mielke_haiku_atlas_6.png?1740441985642", id:"mielke_haiku_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8689EA64F1064C2180C29890EB7AED80'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;