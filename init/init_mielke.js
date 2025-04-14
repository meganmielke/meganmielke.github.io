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


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupils
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj4AiQgNgNAAgSQAAgRANgMQAMgNASAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgSAAgMgMgADEATQgLgLAAgPQAAgQALgLQALgLAQAAQAQAAALALQAMALAAAQQAAAPgMALQgLAMgQAAQgQAAgLgMg");
	this.shape.setTransform(-4.075,-20.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj4AhQgMgMAAgRQAAgRAMgMQAMgMASAAQASAAAMAMQAMAMAAARQAAARgMAMQgMAMgSAAQgSAAgMgMgADEAUQgMgLAAgPQAAgQAMgLQALgLAQAAQAQAAALALQAMALAAAQQAAAPgMALQgLAMgQAAQgQAAgLgMg");
	this.shape_1.setTransform(-4.1,-20.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},2).to({state:[]},1).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(9));

	// eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AklBRQgdgdAAgqQAAgoAdgeQAegdApAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAQgpAAgegdgACfA2QgcgcAAgnQAAgoAcgcQAcgcAoAAQAoAAAcAcQAcAcAAAoQAAAngcAcQgcAcgoAAQgoAAgcgcg");
	this.shape_2.setTransform(-4.375,-21.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AklA2QgdgTAAgcQAAgbAdgUQAegTApAAQAqAAAdATQAdAUAAAbQAAAcgdATQgdAUgqAAQgpAAgegUgACfAkQgcgTAAgaQAAgaAcgTQAcgTAoAAQAoAAAcATQAcATAAAaQAAAagcATQgcATgoAAQgoAAgcgTg");
	this.shape_3.setTransform(-4.375,-21.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AklAjQgdgNAAgSQAAgQAdgNQAegMApAAQAqAAAdAMQAdANAAAQQAAASgdANQgdAMgqAAQgpAAgegMgACfAXQgcgMAAgQQAAgRAcgMQAcgMAoAAQAoAAAcAMQAcAMAAARQAAAQgcAMQgcAMgoAAQgoAAgcgMg");
	this.shape_4.setTransform(-4.375,-21.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjcAxQgYgBgWgGIgIgDQgJgDgJgGIgRgOIgOgQQgHgHgEgKIgBgGIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAAAIABgBIABAAIABgBIAAAAIABgBIABAAIAAAAIABgBIABAAIABAAIABAAIAAAAIACAAIABAAIAAABIABAAIABAAIAAAAIABABIAAAAIABABIABABIAAABIAAABIABABIAAABIAAABIAAABIAAACIABACIABABQAPAYAaANQARAIATADQAwAGAogbQAJgGAGgIIAAgBIAKgSIABgBIABAAIAAgBIABAAIABAAIABgBIABAAIAAAAIACAAIABAAIABAAIAAABIABAAIABAAIAAABIABAAIABABIAAABIABAAIABABIABABIAAABIAAAAIABABIAAABIAAABIAAABIgBABQgHASgOAOQgNANgRAIQgdANggAAIgCAAgADdAZQgPgBgOgEQgOgEgOgGQgOgHgLgJQgLgKgFgOIgCgIIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABgBIABAAIAAgBIABgBIABAAIABAAIABgBIABAAIAAAAIABAAIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIABABIAAAAIABABIABAAIAAABIABABIAAABIAAAAIAAABIAAABQASAiAnAJQAlAJAlgMQAegLAUgaIABAAIABAAIABgBIABAAIABAAIABAAIABAAIABAAIAAABIABAAIABABIABAAIAAABIABABIABAAIABABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABQgLAPgPAKQgQALgRAGQgSAHgUABIgJABIgJgBg");
	this.shape_5.setTransform(-4.05,-17.3491);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},6).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(4).to({_off:true},1).wait(11));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyC4QhIgNg+gnQgfgVgcgaQgcgagWgeIgtg8QgWgfgVgfQgHgLgCgNIgBgEIABgDIAAgDIABgDIAAgCIACgDIABgCIABgCIACgCIACgCIACgCIACgBIACgCIACgBIADgBIACgBIACAAIADgBIACAAIADAAIACAAIADAAIACAAIADABIACABIACABIACABIACABIACACIABACIACACIABACIABACIABADIABACIAAADQA5BlBVBLQBoBeCKgRQA/gIAxgpQBShGA1heQAXgoAMgtIABgCIACgCIACgCIACgCIACgBIACgCIACgBIACgBIADgBIACAAIADAAIACgBIADAAIACABIADAAIACAAIACABIADABIACABIACABIACACIACABIACACIABACIACACIABACIABACIABADIAAACIABADQgQBSgwBGQg+BXhaA9QhOA1hZAAQgdAAgegGg");
	this.shape_6.setTransform(0.175,26.4829);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AnJHJQi9i9AAkMQAAkLC9i+QC+i9ELAAQEMAAC9C9QC+C+AAELQAAEMi+C9Qi9C+kMAAQkLAAi+i+gAlqBwIgCABIgCAAIgDABIgCABIgCABIgCACIgDABIgCACIgCABIgBACIgBADIgBACIgCACIgBADIgBADIAAADIAAADIAAAEQACANAIALQAUAfAWAeIAtA+QAXAeAcAaQAbAaAgAVQA+AnBHANQB7AXBohHQBag8A9hYQAxhGAPhSIAAgDIgBgDIAAgCIgBgCIgBgDIgCgCIgCgBIgCgCIgBgBIgCgCIgCgBIgDgCIgCAAIgCgBIgCAAIgDAAIgCgBIgDAAIgDABIgCAAIgCAAIgDABIgDABIgCABIgBABIgCACIgDACIgBACIgCACIgBACQgMAtgXAoQg1BehTBGQgwAqg/AIQiLAQhnhdQhVhNg5hkIAAgDIgBgCIgBgDIgBgDIgCgCIgBgBIgCgCIgBgCIgCgBIgDgCIgCgBIgBAAIgDgBIgDAAIgCAAIgCAAIgDAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-64.7,129.5,129.5);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AmPGQQimimAAjqQAAjpCmimQCmimDpAAQDqAACmCmQCmCmAADpQAADqimCmQimCmjqAAQjpAAimimg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-56.6,113.2,113.2);


(lib.appleone = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#512E09").s().p("AgQA2IgCgBIgCgBIgCAAIgCgBIgCgCIgBgBIgCgCIgBgCIAAgDIgBgCIAAgDQAAgLACgKQADgKAEgJIAJgUIAKgSIAEgGIACgCIACgBIABgBIACAAIACgBIACAAIACAAIABAAIACABIACABIACAAIABABIACACIABABIACABIABACIABACIABABIABACIABACIAAACIAAACIAAACIAAACIAAADIgBACIAAACIgBACIAAgBIgHANIgHALIgFAOIgDANIgBAHIAAACIgBADIgCACIgBACIgCACIgBABIgCACIgCABIgCAAIgDABIgCAAIgCABIgDAAg");
	this.shape.setTransform(17.775,5.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52200").s().p("AgXB5QhJgGgehBIgCgDQgGgRgCgSQgCgSAFgTQAFgSAKgPQAKgPAPgKIAOgJQAigjAyAIQAUADAUAGQBLAVAPBLQAKAyghAoQgWAbgiAKQgfAIgfAAIgRAAg");
	this.shape_1.setTransform(13.7141,18.1818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.appleone, new cjs.Rectangle(0,0,27.5,30.3), null);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(-9,-100.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-95.95},0).wait(2).to({y:-100.95},0).wait(2).to({y:-103.95},0).wait(4));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgFGtQgVgDgLgSIgFgLQgdhBgUhEQgThEgNhFIgaiJIgaiKQgNhEgIhGQgHg+ANg7QABgFAEgEQAcgXAdATIABACIACABIABACIABACIABABIABACIABACQAEBEAFBDQAFBIAOBHIAcCQQANBGAPBGQAOBCAUA/QAJAhAOAfQASgGARgIIAigPIAjgPQAOgHAQgEQAHgBAHABIACABIACAAIACABIAGADIAFAEIAEAFIAEAGIADAGIACAGIABAHIgBAHIgBAGIgCAGIgCAEQgOARgWAHQgdAJgbAMIg4AXQgTAIgTAAIgNgBg");
	this.shape.setTransform(28.7275,-6.5218);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgMHQIgtghQgXgQgYgNQgZgPgIgbQgFgSAGgSIAOghQAAgNACgMIAGgZIAHgVQAFgNALgIQAPgLAKABIABgCIABgBIABgCIAAAAIAAgBIABAAIAAgBIATgaIAfgnIAsg3QARgVAOgXQgKhEgGhGQgGhTgJhSQgJhQAIhPQAAgIAHgGQAagXAdARIACABIABACIACABIABACIABACIABABIABACIABACQAEBPAIBOQAJBaAEBbQADAwAHAvQAMBJg2A1QgOAOgOAPQguA3gfA/IgbA1QgHAQgMAMIAsAeQAZASAYATQAXAUgOAbQgJASgVAEIgHAAQgMAAgKgIg");
	this.shape_1.setTransform(-34.667,2.2791);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgLHXQgMgCgMgFQgMgFgJgJIgIgIQgWgrAbgtQAMgVAKgXQATgwAUgwIAoheQAUgwAHgyIAAgEIAAgEIgBgEIAAgDQgjhCgkhCQgdgygfgxQgggyglguQglgvgfgzIgDgHQgBgJACgIQACgHAFgFQAEgGAFgDQAGgEAGgCQAGgCAHAAQAFgBAFABIAIADIAHAEIACACIABABIABACIACABIABACIABACIABACIABACIAAACIABACIABADQAqBEAzA+QApAzAdA7QAdA7AlA3QAUAfANAiQAUA0gSA1QgVBCgdBAIg7CHQgLAXgJAZIArgIIAvgHIAvgHQANgCAOACIAEABIACABIACAAIACABQAOAJAEAQQAEAOgGAOQgGANgMAFQgSAHgUACQgaABgbAEQgYADgXAFQgPADgQABIgGAAIgTgBg");
	this.shape_2.setTransform(30.0157,-3.0771);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AjTFuIgEAAIgEgCIgEgCQgNgJgHgOQgIgOgFgPQgFgPgEgQQgDgOAAgPQgBgGACgGQgDgMACgMIACgGQgCgXAAgYQABgdAagOQAdgPAiAAQAlAAAkgFQBHgKBGACIB8ADQAPAAAOgEQgShkgYhlQgWhfgGhiQgCgVALgSQAOgZAeAEQAKABAIAHIABABIABACIACABIABACIABACIABACIABACQAEAZAAAaQABAoAGAoQAFAiAHAiIgBgDIAAgDQASBrAbBmQASBEg7AiQgZAPgeAAQg+AAg9gIQgTgCgSACQhHAJhJAGIg5ADIAQBDQAEAPgDAKIAHApQAFAYgSAPQgMALgOAAIgEgBg");
	this.shape_3.setTransform(-43.9931,-7.6378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("ADfG/QgGgCgEgDIgTgOIgSgOIgHgGIgLgIQgIgHgKgFIgPgGQgSAAgQgGQgUgIgPgRQgGgHACgJQAGgoAXgiQASgaAPgcQAZgsAcgqQASgZAVgXQg6grgzgxIgFgFIhFhFIhEhKIhmhsQgyg1g+goIgRgMQgdgYARgiIACgBIABgCIACgBIABgCIACgBIACgBIACgBQA5gIAsAqIA/A+QA+A+A4A/IAgAkIBABFIAEAEQAvAxA2AoQAjAaAfAcQAkAigYApQgDAHgGAGIACgBQgSASgSATQgSAWgPAYQgQAagOAcIggA6QAbAHAXAPIAyAkQAQAMALAQQAJANgHAPQgNAbgZAAQgHAAgIgCgAkElzIABAAIgCgBIAAAAg");
	this.shape_4.setTransform(-2.2958,1.2067);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("Ag6HsQg+gEgVg3QgEgLACgLQAShEAVhDQAWhDAShEQAThDALhFIALhHIBEBEIgPBSQgNBEgUBDIgrCCQgKAegGAfIAEABIAFABIAEABIAFAAIAEABQAogCAmgIIAGgBQAQAFASABIAPAGQAKAFAIAHIALAIQABAHgBAHQgBAKgGAJIgDADIgBABIgCABIgCACIgCABIgCABIgCABIgCAAIgsAGIg3AHQgSACgRAAIgXgBgAA3heIg/hFQAIg2AOg2QARhFAVhFIACgHIABgCIAAgCIABgDIABgBIAAgCIABgDIAFgNIADgNIABgFIAAAFQABgJAEgHQADgGAFgFQAGgFAIgCQAHgDAHAAQAIgBAHACQAHACAFAFIACACIABABIABACIACABIABACIABACIABACQAEAugUAsQgGAPgFAQQgYBRgRBSQgKAxgHAxIgEgEg");
	this.shape_5.setTransform(2.411,-1.4819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AElFqIgEgBQhBgKhBgMQgjgHghgKQgkgKADglQACgeANgbQAeg8Acg+QAVgvAfgoQg1gYgvggIhphIIgfgUIglgXQgwgegxgZQgqgVgpgZIgJgFIADACIADACIgFgDIgIgFIgIgEIgHgFIgIgEIgEgCIADABIADABIAEABIADAAIADAAIgKgCIgIgEIgHgFIgFgHIgEgHQgCgEgBgFIgBgIQAAgGABgGQACgGADgFIADgDIABgCIACgBIABgBIACgCIACgBIACgBIACgBQAwgEAnAiQALAIAMAGQBMAmBIAtIAUANIAvAfIBWA6QA6AmA+AfIAaALIgDgBIAIADIAHADIAGADIAFADIAFAEIADADIADAEIACACIABACIABACIABACIAAACIABACIAAACIAAACQAAAPgIAOQgLASgNAQQgXAegSAiQgYAugVAuIgVAzIAlAIIAkAGIAlAFIAyAIQAKABAIAHIACABIABACIACABIAEAFIACAGIACAHIABAGIgBAHIgBAGIgCAGIgDAGIgEAFIgIAHIgGADIgCABIgCABIgCAAIgDABIgCAAIgDAAIgEAAg");
	this.shape_6.setTransform(1.2688,-8.5213);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhrHgIgXgWIgXgWIgWgYQgJgKgMgIIgCgCQgygYgFg0QgBgKAEgJQAYgrAcgpQAYgjAVglQAjg+AfhAQAfg+AahBQAXg5AYg4IAlAYIAfAUQgbA7gYA7QgbBAgeA/QgfBAgkA8QglBAgpA8IgDAEIALAHIAKAHIAJAIIAKAIIAJAJIAGAGIgBgCQARATASAQQASAQAOASQANARgIATQgJAVgXAEIgHABQgMAAgLgKgABHkbIgUgNQASgiAUghQAig1AugrQAJgIAHgJIgCAEIgBAAIgBACIgBACIgBABIgBADIgBADIgBADIAAADIAAADIACgJIAEgJIAGgGIAGgGIAIgEIAKgDIALAAQAFAAAFACQAGABAEAEIACABIABACIACABIABACIABACIABABIABACIABACQAGAxgsAcQgSAMgNASQgjA2geA4Igwgfg");
	this.shape_7.setTransform(-9.5481,-2.2951);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAeHqIgOgCQhVgbgChgQgBgngDgnQgKh0gQhzQgQhygTh0IgnjjQgFgcACgdIABgEIABgDIABgDIACgEIACgDIACgCIACgDIADgCIADgCIADgCIADgBIADgCIADgBIADgBIADAAIAEgBIADAAIADAAIAEAAIADABIADABIADABIADABIADACIACABIACACIADADIACACIABADIACADIABAEIABADIAAAEQAPCVAfCSQAVBiAKBiQAKBiAHBjQAGBXAQBVIACAGIAEACQARAFASAAQAWAAAWgCIAogCIAEAAIAEABIADABIAEABIADACIADABIADACIACADIACACIACADIACACIACADIABADIABAEIABADIABADIAAADIAAAEIAAADIAAADIgBAEIgBADIgBADIgBADIgBADIgCACIgCADIgDACIgCACIgDACIgDACIgDABIgEACIgdADIgrACIgLABQgUAAgTgDg");
	this.shape_8.setTransform(21.0063,-1.5389);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgmHhQgXgBgVgEQgUgEgQgKIgLgJIgDgDIgCgDIgDgEIgDgDIgCgEIgBgFIgCgEIgBgFIgCgFIAAgFQAQhjAXhjQAWhlAIhnQAIhlAVhlQAUhlAghjQAJgaACgcIABgEIABgDIACgDIABgEIACgDIACgCIADgDIACgCIADgCIADgCIADgBIADgCIADgBIADgBIADAAIAEgBIADAAIADAAIAEAAIADABIADABIADABIADABIADACIADABIABADIADACIACACIACADIABADIABAEIABADIAAAEQgHBmgmBhQgTAwgIA0QgRBngGBnQgIBngaBlQgSBEgMBGQAWABAVgBIAugCIAvgFIAngEIAIgBIAEABIAEABIADABIACABIAEACIADABIACADIACACIACACIACADIACADIAAADIACADIAAADIABADIAAAEIABADIAAADIgBAEIAAADIgBADIgBADIgBAEIgBACIgCADIgDADIgCACIgCADIgDACIgEACIgCABIgEACIguAHIg8AHQgTACgUAAIgPAAg");
	this.shape_9.setTransform(-30.2,-1.7107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-168.7,129.5,218.2);


(lib.appleonetween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.appleone();
	this.instance.setTransform(0,0.05,1,1,0,0,0,13.7,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:11.2},0).wait(1).to({y:22.25},0).wait(1).to({y:33.4},0).wait(1).to({y:44.5},0).wait(1).to({y:55.6},0).wait(1).to({y:66.75},0).wait(1).to({y:77.85},0).wait(1).to({y:88.95},0).wait(1).to({y:100.1},0).wait(1).to({y:111.2},0).wait(1).to({y:122.3},0).wait(1).to({y:133.45},0).wait(1).to({y:144.55},0).wait(1).to({y:155.65},0).wait(1).to({y:166.8},0).wait(1).to({y:177.9},0).wait(1).to({y:189.05},0).wait(1).to({x:-11.05,y:179.45},0).wait(1).to({x:-17.75,y:175.9},0).wait(1).to({x:-22.95,y:174.85},0).wait(1).to({x:-27.45,y:175.9},0).wait(1).to({x:-31.6,y:179.45},0).wait(1).to({x:-36,y:189.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-15.1,63.5,219.29999999999998);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// apple
	this.apple_mc = new lib.appleonetween();
	this.apple_mc.name = "apple_mc";
	this.apple_mc.setTransform(2970.8,-610.75,1.8537,1.8537,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.apple_mc).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ECWAhUXMEsBAAAMAAACovMksBAAAMkr/AAAMksBAAAECWAhUXMAAACovEnCAhUXMEsBAAAMAAACovEiV/hUXMEr/AAA");
	this.shape.setTransform(2880.075,-540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCFFF","#A107FA"],[0,1],-960.1,0,959.9,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960.025,-540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9EFD58","#005BF7"],[0,1],-960.1,0,959.9,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_2.setTransform(4800.125,-540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF9F69","#0075FF"],[0,1],-960.1,0,959.9,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(2880.075,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-1,-1081,5762.2,1082), null);


// stage content:
(lib.init_mielke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 50;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.pinkHead_mc.currentFrame == 9){
				root.pinkHead_mc.gotoAndPlay("walking");
			}
			if (event.keyCode == 39 && root.background_mc.x > -3953) {
				root.pinkHead_mc.scaleX = 2.3755;
				root.background_mc.x = root.background_mc.x - speed;
			}
			if (event.keyCode == 37 && root.background_mc.x < 960) {
				root.pinkHead_mc.scaleX = -2.3755;
				root.background_mc.x = root.background_mc.x + speed;
				
			}
		}
		
		function handleKeyUp(event) {
			root.pinkHead_mc.gotoAndPlay("standing");
		}
		
		
		this.background_mc.apple_mc.addEventListener("click",handleClickApple);
		
		function handleClickApple(event){
			var whoosh_snd = createjs.Sound.play("whoosh");
			root.background_mc.apple_mc.play();
			root.background_mc.apple_mc.removeEventListener("click",handleClickApple);
			console.log("it should play once");
		}
		
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var music_snd = createjs.Sound.play("music");
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("Hello", "96px 'Modak'", "#FFCFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 147;
	this.text.lineWidth = 499;
	this.text.parent = this;
	this.text.setTransform(949.2,511.15);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(1));

	// buttons
	this.play_btn = new lib.button();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(947.05,741);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AI2AAQAADrimClQilCmjrAAQjpAAimimQimilAAjrQAAjqCmilQCmimDpAAQDrAAClCmQCmClAADqg");
	this.shape.setTransform(947.05,741);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.play_btn}]}).to({state:[]},1).wait(1));

	// walking
	this.pinkHead_mc = new lib.walking();
	this.pinkHead_mc.name = "pinkHead_mc";
	this.pinkHead_mc.setTransform(717.75,824.6,2.3755,2.3755,0,0,0,-8.9,-58);
	this.pinkHead_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pinkHead_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(946.9,542.95,1,1,0,0,0,960,-540);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(946.4,542.5,4801.200000000001,541);
// library properties:
lib.properties = {
	id: '8C47BA7F1E9448FCB09E561A0D63AC3A',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/music.mp3?1744659105196", id:"music"},
		{src:"sounds/whoosh.mp3?1744659105196", id:"whoosh"}
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
an.compositions['8C47BA7F1E9448FCB09E561A0D63AC3A'] = {
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