(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.windows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiiiiIFFAAIAAFFIlFAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AiiCjIAAlFIFFAAIAAFFg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.windows, new cjs.Rectangle(-17.3,-17.3,34.7,34.7), null);


(lib.smokestack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("Ak/ZaMAAAgyzIJ/AAMAAAAyzg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smokestack, new cjs.Rectangle(-32,-162.6,64,325.29999999999995), null);


(lib.smoke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAUELIgMgEIgKgFIgLgGIgJgHIgKgIIgJgIIgJgIIhFggQgcgNgbgPQgcgPgPgbQgQgdAEggQAFgmAdgZIAOgLIAEgGIAEgFIAEgFIAEgGIACgHIAEgMIAFgKIAHgKIAHgJIAHgHQgMgpANgnQALgfAWgZQAXgbAjgJQAmgLAlANQAkANATAgQAIAOAEAPQAVAJAUANQARALAQANQAOAMAKAPQAJAQAEASQAEAVgDAWQgCAJgDAJQAJALAEALQAGAPACAQQACAQgBAQQgCAOgEANQgFAOgJAMIgLAOIgFAHIgGAKIgHAKIgIAJIgIAJIgHAHQgEANgGANQgGANgKALQgKAMgNAIQgOAJgPAEQgPAFgQAAIgDAAQgOAAgMgEg");
	this.shape.setTransform(6.6661,102.7058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAUEWIgMgFIgKgFIgLgHIgKgHIgKgIIgKgIIgJgIIhHghQgdgOgbgPQgdgRgQgcQgQgeAEghQAFgnAegaIAOgMIAEgFIAEgGIAEgFIAFgGIACgHIAEgNIAFgLIAHgJIAIgKIAGgIQgMgqAOgpQALggAXgZQAXgcAkgKQAogLAmAOQAlANAUAhQAJAOADAQQAWAJAVAOQASAMAQANQAPAMAJAQQAKARAEASQAFAWgEAWQgCAKgDAJQAJAMAFAMQAFAPADAQQACARgCARQgBAOgEANQgFAPgKANQgFAHgHAHIgEAHIgHALIgHAKIgIAKIgIAJIgHAHQgFAOgGANQgGAOgKALQgLAMgNAJQgOAJgQAFQgQAEgRAAIgDAAQgOAAgNgDg");
	this.shape_1.setTransform(6.5294,98.8858);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAVEfIgNgEIgKgGIgLgGIgLgIIgKgIIgKgJIgJgIQglgRglgSQgdgOgdgQQgegQgRgdQgQggAEgiQAGgpAegbIAPgMIAEgGIAEgFIAFgGIAEgGIADgHIAEgNIAFgLIAHgLIAIgKIAHgHQgMgsAOgqQALgiAXgaQAZgdAlgKQApgMAoAOQAmAOAUAjQAJAOAEARQAXAJAUAOQATAMARAOQAPANAKAQQAKASAEATQAFAXgEAXIgFATQAJAMAFAMQAGAQADARQACASgCARQgBAPgFAOQgFAPgKANQgFAIgHAGIgFAIIgHALIgHALIgIAKIgJAJIgHAIQgEAOgHANQgGAPgLAMQgKAMgOAJQgPAKgQAEQgRAFgRAAIgDAAQgOAAgOgEg");
	this.shape_2.setTransform(6.3839,95.0558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAWEqIgNgFIgLgGIgMgHIgKgHIgLgJIgKgJIgKgJQgmgRglgSQgfgPgegQQgfgSgRgeQgRggAFgkQAFgqAggcQAHgHAIgFIAEgGIAFgGIAEgGIAFgGIACgIIAFgNIAFgMIAHgKIAJgLIAHgIQgNgtAOgsQAMgiAYgcQAZgeAngKQAqgMApAPQAnAOAVAkQAJAPAEARQAYAJAVAPQATANASAOQAPANALARQAKASAEAUQAFAXgEAYQgBAKgEAKQAKANAFANQAGAQACARQADATgCASQgCAPgEAOQgGAQgJAOIgNAPIgFAHIgHAMIgIALIgIAKIgJAKIgIAIQgEAPgHANQgGAQgLAMQgLANgPAJQgPAKgRAFQgRAEgRAAIgGABQgOAAgMgEg");
	this.shape_3.setTransform(6.2474,91.2174);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAWE0IgNgFIgMgGIgMgHIgKgIIgLgJIgLgJIgKgJQgngSgngTQgfgPgfgRQgggSgRgfQgSghAFglQAFgsAhgdIAQgNIAEgGIAEgGIAFgGIAFgGIACgIIAFgOIAGgMIAHgLIAIgLIAIgIQgNgvAPgtQAMgkAYgcQAagfAogLQAsgNAqAQQAoAPAWAlQAJAPAEASQAYAKAWAPQAUANASAPQAQANALASQALASAEAVQAFAYgEAZQgCAKgEALQAKAMAGAOQAGARADASQACATgCASQgCAQgEAPQgGAQgKAOIgNAQIgFAIIgHALIgIAMIgJALIgJAKIgIAIQgEAPgHAPQgHAPgLANQgMANgOAKQgQAKgRAFQgSAFgSAAIgDAAQgPAAgPgEg");
	this.shape_4.setTransform(6.1111,87.3735);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAXE+IgOgGIgMgGIgMgHIgLgIIgLgJIgLgJIgLgKIhQgmQgggQgggRQgggTgSggQgTgiAFgmQAGguAigdQAHgIAJgFIAEgHIAFgHIAEgFIAGgHIACgIIAFgOIAGgNIAHgLIAJgMIAHgIQgNgwAPgvQANglAZgdQAbggApgLQAtgNArAQQApAPAXAmQAJAQAEATQAaAKAWAPQAVAOASAPQARAOALASQALATAEAWQAFAZgEAZQgCALgEALQALANAFAOQAGARADATQADATgCATQgCARgFAPQgFARgLAOQgGAJgHAHIgGAJIgHAMIgIALIgJAMIgJALIgIAIQgFAPgHAPQgHAQgMANQgMAOgPAKQgQALgSAFQgSAFgSAAIgEAAQgPAAgPgEg");
	this.shape_5.setTransform(5.9663,83.5611);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAYFIIgPgFIgMgHQgGgDgGgEIgMgJIgLgJIgMgKIgKgJQgqgTgpgVQghgQghgSQghgTgTghQgSgkAFgnQAGgvAigeQAIgIAJgGIAEgHIAFgGIAFgGIAFgHIADgJIAFgOIAGgNIAHgMIAJgMIAIgIQgOgyAQgwQANgmAageQAcghApgMQAvgOAsARQArAQAXAnQAKARAEATQAaAKAXAQQAVAOATAQQARAOALATQAMAUAEAWQAFAagEAaQgCALgEALQALANAFAPQAHASADATQACAUgBAUQgCARgFAQQgGARgLAPQgGAJgIAIIgFAIIgIAMIgIANIgJALIgKALIgIAJQgFAQgHAPQgHARgMANQgMAOgQALQgRALgSAFQgSAFgTAAIgEAAQgQAAgPgEg");
	this.shape_6.setTransform(5.8249,79.7235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAYFSIgOgGIgNgGQgHgDgGgFIgMgJIgLgJIgMgKIgLgKQgrgUgqgVQgigQghgTQgjgUgTgiQgTglAFgoQAGgwAkggQAIgIAJgGIAFgHIAEgHIAFgGIAGgHIACgJIAFgPIAHgNIAIgMIAJgMIAIgJQgPgzARgyQANgnAbgfQAcgiArgNQAwgNAtARQAsAQAYApQAKARAEATQAbALAYAQQAVAPAUAQQARAPAMATQAMAVAEAWQAGAbgFAbQgCAMgEALQALAOAGAPQAHATADATQACAVgCAUQgBASgGAQQgGASgLAPQgGAJgIAIIgGAJIgIANIgIAMIgJAMIgKAMIgJAJQgFAQgHAQQgIARgMAOQgMAOgQALQgRALgTAGQgTAFgUAAIgDABQgRAAgQgFg");
	this.shape_7.setTransform(5.6924,75.9035);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAZFcIgPgGIgNgGIgNgIIgMgJIgMgKIgMgKIgMgLIhWgpQgkgSgigTQgjgUgUgjQgUgmAFgqQAHgxAlghQAIgIAJgGIAFgHIAFgIIAFgGIAGgHIACgKIAFgPIAGgOIAJgMIAJgMIAIgJQgOg1AQg0QAOgoAbggQAegjAsgMQAxgPAuASQAuARAYAqQAKARAFAUQAbALAZARQAWAPAUARQASAPAMAUQAMAVAEAXQAGAcgFAcQgBAMgFALQALAOAGAQQAHATADAUQADAWgCAVQgCASgFAQQgGATgMAQIgOARIgGAJIgIAOIgJAMIgKANIgKAMIgIAJQgGARgHAQQgIARgMAPQgNAPgRALQgRALgTAGQgUAGgUAAIgDAAQgSAAgQgFg");
	this.shape_8.setTransform(5.5194,72.0736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAaFmIgQgGIgNgGIgNgIIgNgKIgMgKIgNgLIgLgKIhZgrQglgSgjgUQgkgUgUglQgUgmAFgrQAGgzAmgiQAJgIAJgHIAFgHIAFgHIAFgHIAGgHIADgKIAFgQIAGgOIAJgNIAKgNIAIgJQgPg2ARg1QAOgqAcggQAegkAtgNQAzgPAwASQAuASAZArQALASAEAUQAcAMAaARQAWAQAVARQASAPAMAVQANAVAEAZQAGAcgFAcQgBANgFAMQAMAOAGAQQAHAUADAVQADAWgCAWQgCASgGARQgGATgLAQQgHAKgJAIIgFAKIgJANIgJAOIgKAMIgKANIgJAJQgFARgIARQgIASgNAPQgNAPgRAMQgSAMgUAFQgUAGgUAAIgGAAQgRAAgPgFg");
	this.shape_9.setTransform(5.391,68.2342);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAbFwIgQgFIgOgHQgHgEgHgFIgNgJIgMgLIgNgLIgMgLIhbgsQglgSgkgUQgmgWgUglQgVgoAFgsQAHg0AngjQAIgIAKgHIAFgIIAFgHIAGgHIAGgIIACgKIAGgQIAGgOIAJgOIAKgNIAJgJQgQg4ASg2QAOgrAdgiQAfglAugNQA0gPAxASQAvASAaAtQALASAFAVQAcAMAaASQAYAQAVASQATAPAMAWQANAWAFAZQAGAdgFAdQgCANgFAMQAMAPAGARQAHAUAEAVQACAXgCAWQgBATgGASQgHATgLARIgQATIgGAJIgJAOIgJAOIgKANIgLAMIgJAKQgFASgIARQgIATgNAPQgOAQgRALQgTANgUAFQgUAGgWAAIgGAAQgRAAgPgFg");
	this.shape_10.setTransform(5.2454,64.3963);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAbF6IgQgGIgOgHQgIgEgHgFIgNgJIgNgLIgNgLIgMgMIhegtQgmgTglgVQgmgVgVgnQgVgpAFgtQAHg2AogjQAJgJAKgHIAFgIIAFgIIAGgHIAGgHIADgLIAFgQIAHgPIAJgOIAKgNIAJgKQgQg5ASg4QAPgsAdgjQAggmAvgNQA1gQAzATQAwATAbAtQALATAFAWQAdAMAbASQAXARAWASQATAQANAWQANAXAFAZQAGAegFAeQgCANgEANQAMAPAGARQAIAVADAWQADAXgCAXQgCAUgGASQgHAUgMARQgHAKgJAJIgGAKIgJAOQgEAIgFAGIgLAOIgKANIgKAKQgFASgJASQgIATgNAPQgOARgSAMQgTAMgVAGQgVAGgVAAIgDAAQgTAAgSgFg");
	this.shape_11.setTransform(5.109,60.5789);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAcGEIgRgGIgOgHQgIgEgHgFIgNgKIgOgLIgNgMIgNgLQgwgXgvgYQgngTgmgVQgogXgVgnQgWgqAGgvQAHg3AoglQAKgIAKgHIAFgIIAFgIIAGgIIAGgIIADgKIAGgRIAHgPIAJgPIAKgNIAKgKQgRg7ATg6QAPgtAegjQAggnAxgOQA2gQA0ATQAyATAbAvQALAUAFAWQAeAMAbATQAZARAWATQAUAQANAXQANAXAFAaQAHAfgGAfQgCANgEANQAMAQAHASQAHAVAEAXQACAXgCAYQgCAUgFASQgHAVgNASIgQATIgGAKIgJAPIgKAPIgLANIgLAOIgKAKQgFATgIASQgJATgOAQQgOARgSAMQgUANgVAGQgVAHgXAAIgDAAQgTAAgSgGg");
	this.shape_12.setTransform(4.9644,56.7414);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAcGOIgRgGQgIgDgGgFQgIgDgHgGIgOgKIgOgLIgNgMIgNgMQgygXgwgZQgogTgngXQgogWgWgpQgWgrAFgwQAHg4AqgmQAJgJALgHIAFgJIAGgIIAGgHIAGgIIADgLIAGgSIAHgPIAJgPIALgOIAJgKQgRg8ATg7QAQgvAfgkQAhgoAygPQA3gQA1AUQAzAUAcAvQALAVAFAWQAfANAcAUQAZARAXATQAUARAOAXQANAYAFAbQAHAfgFAgQgDAOgEANQAMAQAHASQAIAXADAXQADAYgCAYQgCAVgGATQgHAVgNASQgHAKgJAKIgHAKIgJAPIgKAPIgLAOIgLAOIgKAKQgGAUgIASQgJAUgOARQgPARgSANQgUANgWAGQgWAHgXAAIgDAAQgUAAgTgGg");
	this.shape_13.setTransform(4.835,52.9214);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAdGYIgRgGIgPgIIgQgJIgOgLIgOgLIgOgMIgNgMIhkgxQgpgUgogXQgpgYgWgpQgXgsAGgyQAHg5ArgnQAJgJALgIIAFgIIAGgJIAGgHIAHgJIACgLIAHgRIAHgRIAJgPIALgOIAKgLQgRg9ATg9QAQgvAfglQAigqAzgOQA5gRA2AUQA1AUAcAxQAMAVAFAYQAfANAdATQAaASAXAUQAVARANAYQAOAYAGAcQAGAggFAhQgCAOgFANQANARAHATQAHAWAEAYQADAZgCAZQgCAVgGATQgIAWgNATQgHAKgKAKIgGALIgKAPIgKAPIgLAPIgMAOIgKAKQgGAUgIATQgJAVgPARQgPARgTANQgUAOgWAGQgXAHgXAAIgDAAQgVAAgTgGg");
	this.shape_14.setTransform(4.686,49.0915);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAeGiIgSgGIgPgIIgQgKIgOgLIgPgMIgOgMIgOgMIhmgyQgqgVgogXQgqgZgXgqQgYgtAGgzQAIg7ArgoQAKgJALgIIAFgIIAGgJIAGgIIAHgIIADgMIAGgSIAIgRIAKgPIALgPIAJgKQgRhAAUg+QAQgwAggmQAjgrA0gPQA6gRA3AVQA2AVAdAyQAMAVAFAYQAhANAdAVQAaASAYAUQAVASAOAYQAOAZAGAdQAGAhgFAhQgCAOgFAOQANARAHATQAIAYAEAYQADAagDAZQgCAVgGAUQgHAXgNATQgIALgKAKIgHALIgJAQIgLAPIgLAPIgMAOIgKALQgHAUgIAUQgKAVgOARQgQASgTAOQgVAOgXAGQgXAHgYAAIgGAAQgTAAgSgGg");
	this.shape_15.setTransform(4.5458,45.2514);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAeGtIgSgHIgQgIQgIgEgIgGIgPgLIgOgNIgPgMIgOgNQg1gZg0gaQgqgVgqgYQgrgZgXgrQgYgvAGgzQAIg9AsgpQAKgJAMgIIAFgJIAGgJIAGgIIAHgIIADgMIAHgTIAHgRQAFgIAFgHIAMgQIAKgLQgShBAUg/QAQgyAhgnQAkgrA1gQQA7gRA5AWQA3AUAeA0QAMAWAFAYQAhAOAeAVQAbASAYAVQAWASAOAZQAPAaAFAdQAHAigGAiQgCAOgFAPQAOARAHAUQAIAYAEAYQADAbgCAaQgCAWgHAUQgHAXgOATQgIAMgKAKIgHALIgKAQIgKAQIgMAPIgMAPIgLALQgGAVgJAUQgJAWgPARQgQATgUAOQgVAOgXAGQgYAHgYAAIgGAAQgUAAgTgFg");
	this.shape_16.setTransform(4.4171,41.4313);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAfG3IgTgHQgJgEgHgFQgIgEgIgFIgPgMIgPgMIgPgNIgOgNQg2gag1gbQgsgVgqgZQgsgZgYgtQgYgvAGg1QAHg+AugqQAKgKAMgIIAFgJIAGgJIAHgIIAHgJIADgMIAGgTIAIgRQAFgJAGgHIALgQIAKgLQgShCAVhBQAQgzAigoQAkgtA3gPQA8gSA6AWQA4AVAfA1QAMAWAGAZQAhAOAfAWQAbASAZAWQAWATAPAZQAPAaAFAeQAHAigFAjQgDAPgFAPQAOASAHAUQAJAYAEAaQADAbgDAaQgCAXgGAVQgIAXgOAUQgIALgKALIgHALIgKARIgLAQIgMAQIgMAPIgLALQgHAWgJAUQgKAWgPASQgQATgUAOQgWAPgYAHQgYAHgZAAIgDAAQgWAAgUgGg");
	this.shape_17.setTransform(4.2718,37.5968);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAfHBIgSgHIgRgJQgJgEgIgGIgPgMIgPgNIgPgNIgPgNQg3gag2gcQgtgWgrgZQgtgagYgtQgZgxAGg2QAIhAAugqQALgKAMgJIAGgJIAGgJIAGgJIAHgIIAEgNIAGgTIAIgSQAFgJAGgHIALgQIALgMQgThEAVhCQASg0AigpQAlgtA4gRQA9gSA8AXQA5AVAfA2QAMAXAGAaQAjAOAfAWQAcATAZAWQAXATAPAaQAPAbAGAeQAHAkgGAkQgDAPgFAPQAOASAIAVQAIAZAEAaQAEAbgDAbQgCAXgHAWQgIAYgOAUIgSAXIgIALIgKARQgFAJgGAIIgMAQIgNAPIgLAMQgGAWgKAVQgKAWgPATQgRATgUAPQgWAOgZAHQgYAIgaAAIgDAAQgWAAgWgGg");
	this.shape_18.setTransform(4.135,33.7768);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAgHLIgTgHIgRgJQgJgEgIgGIgQgMIgPgOIgQgNIgOgOQg5gag3gdQgugWgsgaQgugagYgvQgagxAHg4QAIhBAvgrQALgLAMgIIAGgJIAGgKIAHgJIAHgJIADgMIAHgUIAIgSQAFgJAGgIIAMgQIALgMQgUhGAWhEQASg1AjgqQAmguA4gRQA/gSA9AXQA6AWAgA3QANAYAGAaQAjAPAgAWQAcAUAaAWQAXAUAPAaQAQAbAGAfQAHAlgGAkQgCAQgGAPQAPATAHAVQAJAaAEAaQADAcgCAcQgCAYgHAVQgIAZgPAVQgIAMgLALIgHAMIgLARIgLARIgMAQIgNAQIgMAMQgGAWgKAWQgKAXgQATQgRAUgVAOQgWAPgZAIQgZAHgaAAIgEAAQgWAAgWgGg");
	this.shape_19.setTransform(3.9861,29.9393);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAgHVIgTgIIgRgJQgJgEgJgGIgQgNIgQgNIgPgOIgQgOQg5gbg5gdQgugXgtgaQgvgbgZgwQgagyAHg5QAIhCAwgtQALgKANgJIAFgKIAHgJIAHgJIAHgJIADgNIAHgVQAEgJAFgJIALgRIAMgRIALgMQgUhHAWhFQASg3AkgrQAngvA6gRQBAgTA+AYQA7AWAgA5QAOAYAFAaQAkAPAhAXQAdAUAbAXQAXAUAPAbQAQAcAGAgQAIAlgGAmQgDAQgFAPQAOATAIAWQAJAaAEAbQAEAdgDAcQgCAYgHAXQgIAZgPAVQgJAMgLALIgHANIgLARIgLASIgNAQIgNAQIgMANQgGAWgKAWQgLAYgQATQgRAUgVAQQgXAPgaAHQgZAIgbAAIgDAAQgXAAgXgGg");
	this.shape_20.setTransform(3.8611,26.127);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAhHfIgUgIIgRgJQgKgEgIgHIgRgMIgQgOIgQgOIgPgOQg7gcg6gdQgvgYgugbQgvgbgagxQgbg0AHg5QAIhEAyguQALgLANgIIAGgKIAGgKIAHgJIAIgKIADgNIAHgVIAJgTIALgRIAMgRIALgMQgUhJAXhHQASg3AlgsQAngwA7gSQBCgTA/AYQA8AXAhA6QAOAYAGAbQAlAQAhAXQAdAVAbAXQAYAUAQAcQAQAdAGAgQAIAmgGAmQgDARgFAPQAPAUAIAWQAJAbAEAbQADAegCAdQgCAYgIAXQgIAagPAVQgJANgLALIgIANIgLASIgLASIgNARIgOAQIgLANQgHAXgKAWQgLAZgQATQgSAVgWAPQgXAQgaAIQgaAHgbAAIgGAAQgWAAgWgGg");
	this.shape_21.setTransform(3.7039,22.2688);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAiHpIgVgIIgRgJQgKgFgIgGIgRgNIgRgOIgQgPIgQgOQg8gcg6gfQgxgYgugbQgxgcgagyQgbg1AHg7QAIhFAyguQAMgLANgJIAGgKIAHgKIAHgKIAHgJIAEgOIAHgVIAJgTIALgSIANgSIALgMQgUhKAWhJQATg4AlgtQApgxA8gSQBDgUBAAZQA+AXAhA7QAOAZAGAcQAmAQAiAXQAeAWAbAXQAZAVAQAdQAQAdAHAhQAHAmgGAnQgDARgFAQQAPAUAIAXQAJAbAEAcQAEAegDAeQgCAZgHAXQgJAbgPAWIgUAYIgIANIgLATIgMASIgNARIgOARIgMAMQgHAYgKAXQgLAZgRAUQgSAVgWAQQgYAQgaAHQgbAIgcAAIgGABQgXAAgVgHg");
	this.shape_22.setTransform(3.5672,18.4564);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAjHzIgVgIIgSgJQgKgFgJgHIgRgNIgRgOIgQgPIgQgPQg9gcg8gfQgxgZgwgcQgygcgagzQgcg2AHg8QAJhHAzgvQAMgMANgJIAGgKIAHgKIAHgKIAIgKIADgNIAIgWIAJgUQAFgJAGgJIANgSIAMgNQgVhLAXhKQATg6AmguQApgyA+gSQBEgUBBAZQA/AYAiA8QAPAZAGAdQAmAQAiAYQAfAWAcAYQAZAVAQAdQARAeAHAiQAIAngHAoQgDARgFARQAPAUAJAXQAJAcAEAdQAEAegDAfQgCAZgIAYQgIAbgQAWQgJANgMAMIgIANIgLATIgMATIgNARIgPASIgMAMQgHAZgKAXQgLAZgRAVQgTAVgWAQQgZARgbAIQgbAIgcAAIgGAAQgXAAgWgHg");
	this.shape_23.setTransform(3.4311,14.6187);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAjH9IgVgIQgKgEgJgGQgJgEgJgHIgSgNIgQgPIgSgPIgQgPIh7g9QgygZgxgcQgygegcgzQgcg3AHg+QAJhIA1gwQALgMAOgJIAGgLIAHgKIAHgKIAJgKIADgOIAIgWQADgKAFgKQAGgKAGgJIANgSIAMgNQgVhNAYhLQATg8AnguQAqgzA+gTQBGgUBCAZQBBAZAjA9QAOAaAGAdQAnAQAjAZQAfAWAdAZQAZAWARAdQASAeAGAjQAIAogHApQgCARgHARQAQAVAJAXQAKAdAEAdQAEAfgDAfQgCAagIAZQgJAbgQAXQgJANgMAMIgIAOIgMATQgFAKgHAJIgOASIgOARIgMAOQgIAYgKAYQgLAagSAVQgSAWgYAQQgYARgcAIQgbAIgdAAIgEAAQgZAAgYgHg");
	this.shape_24.setTransform(3.2693,10.7948);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAkIHQgLgDgKgFQgLgEgJgGIgTgMIgRgNIgRgPIgSgPIgRgQIh9g+QgzgagygdQgzgdgcg1Qgcg4AHg/QAJhKA1gxQAMgMAOgJIAGgLIAHgLIAIgJIAIgLIAEgOIAHgWIAJgVQAGgKAHgJIANgSIAMgOQgWhOAZhNQATg9AogvQAqg0BAgTQBHgVBEAaQBBAZAkA/QAOAaAHAeQAnAQAkAaQAgAWAdAZQAaAWARAeQASAfAGAjQAIAqgHApQgCASgHARQARAVAIAYQAKAdAFAeQADAggCAfQgDAbgIAZQgIAbgRAYQgJAOgMAMIgIAOIgMATIgNATIgOATIgOASIgNANQgHAZgLAZQgMAagSAWQgSAWgYAQQgZARgcAJQgcAIgdAAIgEAAQgZAAgZgHg");
	this.shape_25.setTransform(3.1331,6.9573);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAlIRIgWgIQgLgEgJgGIgTgMIgSgOIgRgPIgSgQIgRgPQhBgfg/ghQg0gagygdQg1gfgcg2Qgdg5AHhAQAKhLA2gyQAMgMAOgKIAGgKIAIgLIAHgKIAJgLIADgPIAIgWIAJgVQAGgLAHgJIANgSIANgOQgWhQAYhPQAUg9AogwQAsg2BBgTQBIgVBFAaQBDAaAkBAQAPAaAGAfQAoARAlAZQAgAXAeAaQAaAXARAeQATAgAGAjQAIAqgHArQgCASgHARQARAWAJAYQAKAeAEAeQAEAhgDAgQgCAbgIAZQgJAdgRAYQgKANgMANIgIAOIgMAUQgGALgHAJIgOATIgPASIgNANQgHAagLAZQgMAagSAXQgTAWgYARQgaARgcAJQgdAJgeAAIgDAAQgbAAgYgIg");
	this.shape_26.setTransform(2.9962,3.145);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAmIbQgMgDgLgFIgUgKQgKgFgJgHIgTgOIgRgQIgTgQIgRgQQhBgfhBghQg1gbgzgeQg1gfgdg3Qgeg6AIhBQAJhNA3gzQANgMAOgKIAHgLIAHgLIAIgKIAIgLIAEgPQADgMAFgLIAJgWQAGgKAHgKIAOgTIAMgNQgWhSAZhQQAUg/ApgxQAsg2BCgUQBKgWBGAbQBEAbAlBBQAPAbAHAfQApARAlAaQAhAYAeAaQAbAXARAfQATAgAGAlQAJAqgIArQgCATgHASQARAWAJAZQAKAeAFAfQAEAhgDAhQgCAbgJAaQgJAdgQAYQgLAOgMANIgIAOIgNAVQgGALgHAJIgOATIgPATIgNANQgIAbgLAZQgMAbgTAXQgTAXgZARQgaASgdAIQgdAJgeAAIgGAAQgaAAgXgIg");
	this.shape_27.setTransform(2.8393,-0.7136);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAmIlQgMgDgLgFQgLgFgJgGIgUgMIgTgPIgSgPIgSgQIgSgRQhDgghBghQg2gcg0geQg2gggeg4Qgeg7AIhCQAJhOA4g0QANgNAPgKIAGgLIAIgMIAIgKIAIgLIAEgPIAIgYQAEgLAGgLIANgUIAOgTIAMgOQgWhTAZhSQAVhAApgyQAtg3BEgUQBKgWBIAbQBFAbAlBCQAQAcAGAfQAqASAmAbQAhAXAfAbQAbAXASAgQATAhAHAlQAIAsgHAsQgDASgGASQARAXAJAZQALAfAEAgQAEAhgDAiQgCAcgJAaQgJAegRAYQgKAPgNANIgIAOIgNAVQgGALgHAJIgPAUIgPATIgNAOQgIAbgMAZQgMAcgTAXQgTAXgZASQgbASgdAJQgeAJgfAAIgGAAQgaAAgYgIg");
	this.shape_28.setTransform(2.7143,-4.526);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AAnIvQgMgDgMgFQgLgFgJgGIgUgMIgTgPIgTgQIgTgRIgSgQQhDghhDgiQg3gcg1gfQg3gggeg5Qgeg8AHhEQAKhPA5g1QANgNAPgKIAGgMIAIgLQAEgHAEgEIAJgLIAEgQIAIgYQAEgLAGgLIANgVIAOgTIANgPQgXhUAahTQAVhBAqgzQAug5BEgUQBMgXBJAcQBGAcAmBDQAQAcAHAgQAqASAnAcQAiAYAfAbQAcAYASAgQATAhAHAmQAJAtgIAsQgCATgHATQARAXAKAaQAKAfAFAgQAEAigDAjQgDAcgIAbQgJAegSAZQgKAPgNANIgJAPIgMAVIgOAVIgPAUIgQATIgNAOQgIAbgMAaQgMAdgTAXQgUAYgaASQgbASgeAJQgeAJgfAAIgGAAQgaAAgZgIg");
	this.shape_29.setTransform(2.5653,-8.3636);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAnI5IgXgIIgVgLQgLgGgKgHIgTgPIgTgRIgTgQIgSgRQhFghhEgjQg4gdg2gfQg4ghgeg6Qgfg9AIhFQAKhRA6g2QANgNAPgKIAHgMIAIgMIAIgLIAJgLIAEgQIAIgYQAEgMAGgLIANgVIAPgUIANgOQgYhXAahUQAWhCArg0QAvg5BFgVQBNgXBKAcQBIAcAmBFQAQAcAHAhQAsASAnAcQAiAZAgAbQAcAYATAiQATAhAHAnQAJAtgIAuQgCATgHATQASAXAJAbQALAfAEAhQAFAjgDAjQgDAdgJAbQgJAegSAaQgKAPgNAOIgJAPIgNAVQgHAMgHAJIgPAVIgQATIgOAPQgIAbgMAbQgMAdgUAYQgUAYgaASQgbATgfAJQgeAJggAAIgGAAQgbAAgagIg");
	this.shape_30.setTransform(2.429,-12.1836);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAoJDIgYgIQgLgFgKgHIgVgMIgUgQIgTgQIgTgRIgTgSQhGghhFgkQg4gdg3ggQg5ghgfg7Qggg/AIhGQAKhSA7g3QAOgNAPgLIAHgMIAIgMIAIgLIAJgLIAEgQIAJgZQAEgMAGgLQAGgLAHgLIAPgUIANgPQgYhXAbhWQAWhEAsg1QAvg6BHgVQBOgYBLAdQBJAdAnBGQARAdAHAhQAsATAnAcQAkAZAgAcQAdAZASAhQAUAjAHAnQAJAugHAuQgDAUgHATQASAYAKAbQAKAgAFAhQAEAkgDAjQgCAegJAcQgKAfgSAaQgLAPgNAOIgJAPIgNAWQgGAMgIAJIgPAVIgQAUIgOAPQgJAcgMAbQgMAdgUAZQgVAYgaATQgcATgfAJQgfAKghAAIgDAAQgdAAgbgJg");
	this.shape_31.setTransform(2.2833,-16.0171);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AAoJNQgMgDgMgGQgMgFgKgGQgLgGgKgHIgUgQIgTgRIgUgRIgTgSQhHgihGgkQg6gdg4ghQg6gigfg8QgghAAIhHQAKhTA8g4QAOgOAPgLIAIgMIAIgMIAIgLIAJgMIAEgQIAJgaQAEgMAGgLQAGgLAIgLIAPgUIAOgQQgZhZAbhXQAXhFAsg2QAwg7BIgVQBQgYBMAdQBKAdAoBHQAQAeAIAhQAsAUApAcQAkAaAhAcQAdAZATAjQAUAjAHAnQAJAvgIAvQgDAVgHATQATAYAKAcQAKAgAFAiQAFAkgDAlQgDAegJAcQgKAfgSAbQgLAPgNAOIgKAQIgNAWQgHAMgHAKIgQAVIgQAUIgPAQQgIAcgMAcQgNAdgUAZQgVAZgbATQgcATggAKQgfAKghAAIgDAAQgeAAgcgJg");
	this.shape_32.setTransform(2.155,-19.837);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AApJYIgZgKIgWgLQgLgGgKgIIgVgPIgTgSQgLgIgJgJIgUgSQhIgjhHglQg6geg5ghQg7giggg9QghhBAJhIQAKhWA9g4QAOgOAPgLIAIgMIAIgNIAIgLIAKgMIAEgRIAJgaQAEgMAGgLQAGgMAIgKIAPgWIAOgPQgZhbAchZQAXhFAtg3QAxg8BJgWQBRgYBNAeQBLAdApBIQARAeAHAiQAuAUAoAdQAlAaAhAdQAeAaATAiQAVAkAHApQAJAvgIAwQgDAVgHATQATAZAKAcQALAhAFAjQAFAkgEAlQgCAfgKAcQgJAggTAbQgLAQgOAOIgJAQIgOAXQgGAMgIAKIgQAWIgRAUIgOAQQgJAdgMAcQgNAegVAZQgVAagbATQgdAUggAJQggAKgiAAIgGAAQgcAAgbgIg");
	this.shape_33.setTransform(2.0145,-23.6783);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AAqJiIgZgJIgXgMIgWgOIgUgQIgUgSIgVgRIgTgSQhKgkhIglQg7gfg6ghQg8gkggg+QghhBAIhKQALhXA+g5QAOgOAPgMIAIgMIAIgNIAJgLIAKgMIAEgRQADgNAGgNQAEgNAGgMQAGgMAIgKIAQgWIAOgPQgZhdAchaQAXhHAtg3QAyg+BKgWQBTgZBOAfQBNAdApBKQARAfAIAjQAuATApAeQAlAaAiAeQAeAaAUAjQAVAkAHAqQAKAwgJAxQgCAVgIAUQATAZAKAcQAMAiAFAjQAEAlgDAmQgDAfgJAdQgKAhgTAbQgLAQgOAPIgKAQIgNAXQgHAMgIAKIgQAWIgRAVIgPAQQgJAdgMAdQgNAfgVAZQgWAagcAUQgdAUggAJQghAKgiAAIgGAAQgdAAgbgIg");
	this.shape_34.setTransform(1.8656,-27.5083);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAqJsIgZgKIgXgMQgLgGgLgIIgVgQIgUgSIgVgSIgUgSQhLgkhJgmQg8gfg7gjQg8gjghg/QgihDAJhLQAKhYA/g7QAOgOAQgMIAIgMIAJgNIAIgMIAKgMIAEgRIAKgbQAEgNAGgMQAGgMAIgKIAQgWIAOgQQgZheAchcQAYhIAug4QAzg/BLgWQBUgZBQAfQBNAeAqBLQARAfAIAjQAvAUAqAeQAmAbAiAeQAfAbAUAkQAVAkAHAqQAKAygIAxQgDAVgIAUQATAaALAdQALAiAFAkQAFAmgDAmQgDAfgKAeQgKAhgTAcQgLARgOAOIgKARIgOAXQgHANgIAKIgQAWIgSAVIgOAQQgJAegNAdQgNAggWAaQgWAagcAUQgdAUgiAKQghAKgiAAIgHAAQgdAAgcgIg");
	this.shape_35.setTransform(1.736,-31.3283);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AArJ2IgagKIgXgMQgLgGgLgIIgWgRIgUgSIgVgSIgUgTQhMgkhLgnQg9gfg7gjQg+glghhAQgihEAIhMQALhZBAg8QAOgOARgMIAHgNIAJgNIAJgMIAKgMIAEgSIAJgbQAFgNAGgMQAHgMAIgLIAQgWIAOgRQgahfAdhdQAYhJAvg6QAzg/BNgXQBUgaBSAgQBPAeAqBMQASAgAHAkQAwAVArAeQAmAbAjAfQAfAbAUAkQAWAmAHAqQAKAygIAzQgDAVgIAVQAUAaAKAdQAMAjAFAkQAFAngEAnQgCAggKAeQgKAhgUAdQgMAQgOAPIgKARIgOAYIgPAXIgQAXIgSAVIgPAQQgJAfgNAdQgOAggVAbQgXAagcAVQgeAUgiAKQghALgkAAIgGAAQgeAAgcgJg");
	this.shape_36.setTransform(1.5916,-35.1658);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AArKAQgNgEgNgGQgMgGgLgHQgMgGgLgIQgMgIgKgJIgVgSIgVgTIgVgTQhNglhLgnQg+ggg9gkQg+gkgihCQgjhFAJhNQALhbBBg9QAPgOAQgMIAIgNIAJgNIAJgMIAKgNIAEgSIAKgbQAEgOAHgMQAGgMAIgLIAQgXIAPgQQgahhAdhfQAYhKAwg7QA0hABOgXQBWgaBTAgQBQAfArBNQASAgAHAlQAxAUArAgQAnAbAkAfQAfAcAUAlQAWAmAIArQAKAzgJAzQgDAWgHAVQATAaALAeQAMAjAFAlQAFAogDAnQgDAggKAfQgKAigUAdQgMARgPAPIgKARIgOAYQgHANgIALIgRAXIgSAWIgPAQQgJAfgNAeQgOAggWAbQgXAbgdAVQgeAVgjAKQgiALgjAAIgDAAQggAAgfgJg");
	this.shape_37.setTransform(1.455,-38.9815);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAsKKQgNgEgNgGIgYgNQgMgGgMgIIgWgRIgVgTIgVgTIgVgTQhOgmhNgoQg/ggg9gkQhAgmgihCQgjhGAJhPQALhcBBg+QAPgOARgMIAIgOIAJgNIAJgMIAKgNIAFgSIAJgcQAFgOAHgMQAGgNAJgLIAQgXIAPgRQgbhiAehhQAYhLAxg7QA1hCBPgXQBXgbBUAhQBRAfAsBPQASAhAIAlQAxAVAsAfQAnAcAlAgQAfAcAVAlQAWAnAIAsQAKA0gIA0QgEAWgHAVQAUAbALAeQAMAkAFAmQAFAogEAnQgCAhgKAfQgLAjgUAeQgMARgPAPIgKARIgPAZQgHANgIALIgRAXIgSAWIgQARQgJAggNAeQgPAhgWAbQgXAcgdAVQgfAVgjAKQgiALglAAIgDAAQggAAgfgJg");
	this.shape_38.setTransform(1.3095,-42.8189);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAtKUQgOgEgNgGIgYgNQgMgGgMgIIgWgSIgWgTIgWgTIgVgUQhPgmhOgpQhAggg+glQhBgmgihDQgkhIAJhPQALheBDg/QAPgPARgMIAIgNIAJgOIAKgMIAKgNIAEgTIAKgcQAFgOAHgMQAGgNAJgMIAQgXIAQgRQgchkAfhiQAYhMAyg9QA1hCBQgYQBZgbBVAhQBSAgAtBQQASAhAIAmQAyAVAtAgQAoAdAkAfQAhAdAVAmQAWAoAIAsQALA1gJA0QgEAXgHAVQAUAcALAfQAMAkAGAmQAFApgEAoQgDAigKAfQgLAjgUAeQgMASgPAPIgLASIgOAZQgIANgIALIgRAYIgTAWIgQARQgJAggNAfQgPAigWAbQgYAcgdAWQggAVgjALQgjAKglAAIgGAAQgfAAgegJg");
	this.shape_39.setTransform(1.181,-46.6606);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAuKeQgOgEgOgGQgNgGgLgHQgMgHgMgIIgXgSIgWgTIgWgUIgVgUQhRgnhPgpQhBghg/glQhBgngjhEQglhIAJhRQAMhfBEhAQAPgPARgNIAIgNIAKgOIAJgNIALgNIAEgTQAEgOAGgPQAFgOAGgMQAHgNAJgMIARgYIAPgRQgbhlAehkQAZhOAyg9QA3hDBRgYQBagcBWAiQBUAgAtBRQATAiAIAmQAyAWAuAhQAoAdAlAgQAhAdAVAnQAXAnAIAuQALA1gJA1QgDAXgIAWQAUAcAMAfQAMAlAFAnQAFApgDApQgDAigKAgQgLAkgVAeQgNASgPAQIgKASIgPAZQgHANgJAMIgSAYIgSAXIgQARQgKAhgNAfQgPAigXAcQgYAcgeAWQggAWgjAKQgkALglAAIgGAAQggAAgegJg");
	this.shape_40.setTransform(1.008,-50.4905);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AAuKoQgOgEgNgGQgOgGgLgHQgNgHgMgIIgXgSIgWgUIgWgUIgWgUQhSgohQgpQhBgihAgmQhDgngjhFQglhKAJhSQALhgBFhBQAQgQARgMIAJgOIAJgOIAKgNIAKgNIAFgUQAEgOAGgPQAFgOAGgNQAHgNAJgMIARgYIAQgRQgchnAfhlQAZhPAzg+QA3hFBTgYQBbgcBXAiQBVAhAuBSQATAjAIAmQAzAWAuAiQApAdAmAhQAhAdAWAnQAXApAIAuQALA2gJA2QgDAXgIAXQAVAcALAgQANAlAFAnQAFAqgEAqQgCAigLAhQgLAkgVAfQgNASgPAQIgKASIgQAaQgHANgJAMIgSAYIgTAYIgQARQgKAhgNAgQgPAigXAdQgZAdgeAWQggAWglALQgkALgmAAIgGAAQggAAgfgKg");
	this.shape_41.setTransform(0.8758,-54.3105);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AAvKyQgOgEgOgGQgOgGgLgIQgNgGgMgJIgXgSIgXgUIgXgVIgWgUQhSgohSgrQhCgihBgmQhEgogkhGQglhLAJhTQAMhiBGhCQAQgPARgNIAJgOIAJgOIAKgOIALgNIAEgUIALgdQAEgOAHgNQAHgOAJgMIASgYIAQgSQgdhoAghnQAahQAzg/QA4hFBTgaQBdgcBZAjQBWAhAuBUQATAjAJAnQAzAWAvAiQAqAeAmAhQAiAeAWAoQAXApAJAuQAKA3gJA3QgDAYgIAWQAVAdAMAgQAMAnAGAnQAFArgEAqQgDAjgKAhQgMAlgVAfQgNASgPARIgLASIgPAaQgIAOgJAMIgSAYIgTAYIgRASQgJAhgOAgQgPAjgYAdQgYAegfAWQghAWglALQgkAMgnAAIgGAAQghAAgfgKg");
	this.shape_42.setTransform(0.734,-58.148);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAwK8IgdgKQgNgGgMgIQgNgHgMgJIgYgSIgXgUIgXgVIgWgUQhUgphTgrQhDgjhCgnQhEgoglhHQgmhMAKhVQAMhjBGhDQAQgQASgMIAJgPQAEgHAGgHIAJgOIALgNIAFgUQAEgPAHgPQAEgPAHgNQAHgOAJgMIASgYIAQgSQgdhqAghoQAbhSA0g/QA5hHBUgZQBegdBaAjQBXAiAvBVQATAjAJAoQA1AXAvAiQAqAeAnAiQAiAeAXApQAXApAJAvQALA4gKA4QgDAYgIAXQAVAdAMAhQANAmAFApQAGArgEArQgDAjgLAiQgLAlgWAgQgNASgPARIgLASIgQAbQgIAOgJAMIgSAZIgUAYIgQASQgKAigOAgQgPAkgYAdQgZAeggAXQghAWglAMQglALgnAAIgGAAQgiAAgfgKg");
	this.shape_43.setTransform(0.5892,-61.9604);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAwLGQgOgEgPgGQgOgGgMgIQgNgHgMgJIgYgTIgXgUIgYgVIgWgVQhVgphUgsQhEgjhDgoQhFgoglhJQgnhNAKhVQAMhlBHhEQARgQASgNIAJgOIAJgPIAKgOIALgOIAFgUIALgeQAFgPAHgNQAHgOAJgNIASgYIAQgTQgdhrAhhqQAahSA1hBQA6hHBVgaQBfgdBcAjQBYAjAwBWQATAkAJAoQA1AXAwAjQArAeAoAiQAiAfAXApQAYArAIAvQALA5gJA5QgEAYgIAXQAWAdAMAiQANAnAGApQAFAsgEArQgDAkgLAiQgLAmgWAgQgNATgQARIgLATIgQAbQgIAOgJAMIgTAZIgTAZIgRASQgKAigPAiQgPAjgYAeQgaAegfAXQgiAXgmAMQglAMgoAAIgDAAQgjAAgigLg");
	this.shape_44.setTransform(0.453,-65.8009);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAxLQQgPgEgOgHQgPgGgMgIQgNgGgNgKIgYgTQgMgJgLgMIgYgUIgXgWQhWgqhVgsQhFgkhEgoQhGgpglhKQgnhNAJhXQAMhnBJhEQARgRASgNIAJgOIAKgQIAKgNIALgOIAFgVQAEgPAHgPQAFgPAHgOQAHgOAJgNIASgZIARgTQgehtAhhrQAbhTA2hCQA6hIBXgbQBggdBdAkQBZAjAxBXQAUAlAIApQA2AXAxAjQArAfAoAjQAjAfAXAqQAZAqAIAxQAMA5gKA6QgDAZgJAXQAWAeAMAiQAOAoAFApQAGAsgEAsQgDAlgLAiQgMAngWAhQgOASgQASIgLASIgQAcQgIAOgJAMIgTAaIgUAZIgRATQgKAjgPAhQgPAlgZAeQgaAeggAYQgiAXgmAMQgmALgoAAIgGABQgjAAgggLg");
	this.shape_45.setTransform(0.3162,-69.6428);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AAyLaQgPgEgPgGQgOgHgNgIQgNgHgNgJIgZgTIgXgVQgNgKgLgMIgYgVQhXgrhWgtQhGgkhFgpQhHgpgmhLQgnhPAKhYQAMhoBKhFQAQgRATgNIAJgPIAKgPIAKgOIAMgPIAFgUIAKgfQAFgQAIgNQAHgPAKgNIASgZIARgTQgehuAhhtQAbhVA2hCQA8hKBYgaQBhgeBeAkQBbAkAxBYQAUAlAJAqQA3AXAxAkQAsAfAoAjQAkAgAXAqQAZAsAJAxQALA6gKA7QgDAZgJAXQAWAeANAjQANAoAGAqQAFAtgDAtQgDAlgMAjQgMAngWAhQgOATgQASIgLATIgRAcQgHAOgKANIgTAaIgUAZIgSATQgKAjgPAiQgQAlgYAfQgaAfghAXQgjAYgmAMQgnAMgoAAIgGAAQgjAAghgLg");
	this.shape_46.setTransform(0.171,-73.4727);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AAyLkQgPgEgPgHQgOgGgNgIQgNgHgNgKIgZgTIgYgWIgZgVIgXgWQhZgrhXguQhHglhFgpQhIgqgnhMQgohQAKhZQANhpBKhHQARgRATgNIAJgPIAKgQIALgOIALgOIAFgVQAFgQAGgQQAFgPAIgOQAHgPAKgNIASgaIARgTQgehwAihuQAbhWA3hDQA8hLBZgbQBjgeBfAlQBcAkAyBaQAUAlAJAqQA4AYAyAkQAsAgApAkQAkAgAYArQAZAsAJAyQALA7gKA7QgDAZgJAYQAXAfAMAjQAOApAGAqQAFAugEAtQgDAmgLAjQgMAogXAhQgOAUgQARIgMAUIgQAcQgIAPgKAMIgTAbIgVAZIgRATQgLAkgPAjQgQAlgZAfQgaAgghAYQgjAYgoAMQgnAMgpAAIgGAAQgjAAgigLg");
	this.shape_47.setTransform(0.0342,-77.2926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-152.4,117.9,282.20000000000005);


(lib.paperPlane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AK9llIAsgRQgMAyg6gWgAoZAvIjPmlIXRAAAoZAvIAhBEQA4ASAEgqQAZA2AFAAIAeAlICgDBIODrRAoZAvIhXDQIDwhJAn4BzIA8gYIR5nA");
	this.shape.setTransform(-75.5,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al/C1IgfgkQgFAAgZg2IR5nAIgaAMIuDLQgAoZAvIAhBEIghhEIjPmlIXRAAIgsARIx5HAIg8AYQA4ASAEgqQAZA2AFAAIAfAkIjxBKgAK9llg");
	this.shape_1.setTransform(-75.5,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AJri4IA9gPI1PhkIAAG3IBVgVIBpC1gApSB3IS9kv");
	this.shape_2.setTransform(-73.975,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApSB3IS9kvIxUHkgAqnkrIVPBkIg9APIy9EvIhVAVgApSB3g");
	this.shape_3.setTransform(-73.975,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},11).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-14.4,154,91.9);


(lib.frontbuilding = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Asm0MIZNAAMAAAAoZI5NAAgAp4v0IEYAAIAAKaIkYAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFXFNIAAqZIEYAAIAAKZgApuFNIAAqZIEYAAIAAKZg");
	this.shape_1.setTransform(-0.975,-67.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AslUNMAAAgoZIZLAAMAAAAoZgAFOlaIEYAAIAAqaIkYAAgAiflaIEXAAIAAqaIkXAAgAp4laIEYAAIAAqaIkYAAg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frontbuilding, new cjs.Rectangle(-81.6,-130.3,163.3,260.70000000000005), null);


(lib.paperPlane_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.paperPlane();
	this.instance.setTransform(14.8,-15.3,1,1,0,0,0,-75.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:31.5,rotation:0.9613,x:105.15,y:-54.75},0).wait(1).to({rotation:2.3575,x:185.65,y:-82.75},0).wait(1).to({rotation:4.1903,x:258,y:-105.55},0).wait(1).to({rotation:6.4452,x:323.7,y:-123.7},0).wait(1).to({rotation:9.07,x:384.05,y:-137.65},0).wait(1).to({rotation:11.9678,x:440.1,y:-147.7},0).wait(1).to({rotation:15.0198,x:492.8,y:-154.35},0).wait(1).to({rotation:18.0906,x:542.75,y:-157.9},0).wait(1).to({rotation:21.0536,x:590.65,y:-158.75},0).wait(1).to({rotation:23.8098,x:636.75,y:-157.4},0).wait(1).to({rotation:26.2962,x:681.35,y:-153.9},0).wait(1).to({rotation:28.4811,x:724.8,y:-148.75},0).wait(1).to({rotation:30.3617,x:767.05,y:-142.25},0).wait(1).to({rotation:31.956,x:808.25,y:-134.65},0).wait(1).to({rotation:33.2874,x:848.2,y:-126.2},0).wait(1).to({rotation:34.391,x:886.9,y:-117.2},0).wait(1).to({rotation:35.2975,x:924.25,y:-107.85},0).wait(1).to({rotation:36.0384,x:959.95,y:-98.3},0).wait(1).to({rotation:36.6389,x:993.85,y:-88.8},0).wait(1).to({rotation:37.1247,x:1025.75,y:-79.6},0).wait(1).to({rotation:37.5151,x:1055.35,y:-70.8},0).wait(1).to({rotation:37.8273,x:1082.55,y:-62.55},0).wait(1).to({rotation:38.0749,x:1107,y:-55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-218.7,1249.8,243.39999999999998);


// stage content:
(lib.mielke_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plane
	this.instance = new lib.paperPlane_flying();
	this.instance.setTransform(-109.3,276.2,1,1,0,0,0,-4,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// front_building
	this.instance_1 = new lib.frontbuilding();
	this.instance_1.setTransform(80.65,518.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiSlnIElAAIAALPIklAAg");
	this.shape.setTransform(80.025,453.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSFoIAArPIElAAIAALPg");
	this.shape_1.setTransform(80.025,453.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

	// windows
	this.instance_2 = new lib.windows();
	this.instance_2.setTransform(563.95,529.3);

	this.instance_3 = new lib.windows();
	this.instance_3.setTransform(499.95,529.3);

	this.instance_4 = new lib.windows();
	this.instance_4.setTransform(437.6,529.3);

	this.instance_5 = new lib.windows();
	this.instance_5.setTransform(373.6,529.3);

	this.instance_6 = new lib.windows();
	this.instance_6.setTransform(310.3,529.3);

	this.instance_7 = new lib.windows();
	this.instance_7.setTransform(253,529.3);

	this.instance_8 = new lib.windows();
	this.instance_8.setTransform(199,529.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// middle_building
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EgjtgMYMBHbAAAIAAYxMhHbAAAg");
	this.shape_2.setTransform(377.975,569.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333300").s().p("EgjtAMZIAA4xMBHbAAAIAAYxg");
	this.shape_3.setTransform(377.975,569.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// smoke_stack
	this.instance_9 = new lib.smokestack();
	this.instance_9.setTransform(389.3,486.6);

	this.instance_10 = new lib.smokestack();
	this.instance_10.setTransform(301.35,486.6);

	this.instance_11 = new lib.smokestack();
	this.instance_11.setTransform(214.7,486.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AA1AAIhpAA");
	this.shape_4.setTransform(252.025,649.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Layer_8
	this.instance_12 = new lib.smoke();
	this.instance_12.setTransform(205.55,261.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// back_buildings
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(8,1,1).p("EAzPge6IAAgOEAzPge6II+AAIAATlIU1AAMAAAAtmMiiDAAAMAAAg06IdlABIAAoiIIVAAIAAIiIKoAAIAAvoIHTAAIAAU2ILCAAIAAumILQAAIAAV4IH6AAIG4m4IGQGQIIwAAIAAuyIOKAAIAASiIKNAAg");
	this.shape_5.setTransform(475.975,457.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EhRBAiRMAAAg06IdlABIAAoiIIVAAIAAIiIKoAAIAAvoIHTAAIAAU2ILCAAIAAumILQAAIAAV4IH6AAIG4m4IGQGQIIwAAIAAuyIOKAAIAASiIKNAAIAA76II+AAIAATlIU1AAMAAAAtmg");
	this.shape_6.setTransform(475.975,457.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// sky
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.02)").ss(1,1,1).p("EhNYgzPMCaxAAAMAAABmfMiaxAAAg");
	this.shape_7.setTransform(484.65,316);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#2F16D6","#620B62","#000000"],[0,0.627,1],0,-509.9,0,509.9).s().p("EhNYAzQMAAAhmfMCaxAAAMAAABmfg");
	this.shape_8.setTransform(484.65,316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(312.5,307.1,686.1,374.1);
// library properties:
lib.properties = {
	id: '7641D33BE5E34561A9A9B6D8A27AD5D6',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['7641D33BE5E34561A9A9B6D8A27AD5D6'] = {
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