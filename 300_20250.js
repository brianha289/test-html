(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300_20250_atlas_", frames: [[0,1004,625,521],[627,1004,187,61],[0,0,665,500],[0,502,665,500],[0,1527,503,291],[505,1527,175,280],[627,1067,189,34],[0,1820,123,123],[627,1103,177,13],[125,1820,201,57],[505,1809,347,62]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_59 = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_60 = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.combo = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flower = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.price = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.terms = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.initialize(ss["300_20250_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_59();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4967,0.4967);

	this.instance_1 = new lib.CachedTexturedBitmap_60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.4967,0.4967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330.3,248.4);


(lib.Symbol_9_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5417,0.5424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_9_Layer_1, null, null);


(lib.Symbol_8_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_8_Layer_1, null, null);


(lib.Symbol_7_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.terms();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_7_Layer_1, null, null);


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.price();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_6_Layer_1, null, null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flower();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.combo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Scene_1_button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(106.5,85.3,0.4492,0.4496);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_9_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(94,16.8,1,1,0,0,0,94,16.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,188,33.7), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_8_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(100.5,28.5,1,1,0,0,0,100.5,28.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,201,57), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(88.5,6.5,1,1,0,0,0,88.5,6.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,177,13), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(61.5,61.5,1,1,0,0,0,61.5,61.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,123,123), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(87.5,140,1,1,0,0,0,87.5,140);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,175,280), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(251.5,145.5,1,1,0,0,0,251.5,145.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,503,291), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(312.5,260.5,1,1,0,0,0,312.5,260.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,625,521), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(94.5,17,1,1,0,0,0,94.5,17);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,189,34), null);


(lib.Scene_1_text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_2
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(150.65,61.1,1,1,0,0,0,94,16.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:61.65},0).wait(1).to({y:62.25},0).wait(1).to({y:62.85},0).wait(1).to({y:63.45},0).wait(1).to({y:64.05},0).wait(1).to({y:64.65},0).wait(1).to({y:65.25},0).wait(1).to({y:65.85},0).wait(1).to({y:66.45},0).wait(1).to({y:67.05},0).wait(1).to({y:67.65},0).wait(1).to({y:68.25},0).wait(1).to({y:68.85},0).wait(1).to({y:69.45},0).wait(1).to({y:70.05},0).wait(1).to({y:70.65},0).wait(1).to({y:71.2},0).wait(1).to({y:71.8},0).wait(1).to({y:72.4},0).wait(1).to({y:73},0).wait(1).to({y:73.6},0).wait(1).to({y:74.2},0).wait(1).to({y:74.8},0).wait(1).to({y:75.4},0).wait(1).to({y:76},0).wait(1).to({y:76.6},0).wait(1).to({y:77.2},0).wait(1).to({y:77.8},0).wait(1).to({y:78.4},0).wait(1).to({y:79},0).wait(1).to({y:79.6},0).wait(1).to({y:80.2},0).wait(1).to({y:80.8},0).wait(1).to({y:78.6,alpha:0.1111},0).wait(1).to({y:76.4,alpha:0.2222},0).wait(1).to({y:74.2,alpha:0.3333},0).wait(1).to({y:72,alpha:0.4444},0).wait(1).to({y:69.85,alpha:0.5556},0).wait(1).to({y:67.65,alpha:0.6667},0).wait(1).to({y:65.45,alpha:0.7778},0).wait(1).to({y:63.25,alpha:0.8889},0).wait(1).to({y:61.1,alpha:1},0).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(149.3,76.5,0.597,0.5947,0,0,0,100.7,28.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:100.5,regY:28.5,x:149.15,y:76.35,alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(1).to({regX:100.7,regY:28.7,x:149.3,y:76.5},0).wait(1).to({regX:100.5,regY:28.5,x:149.15,y:76.35},0).wait(19).to({regX:100.7,regY:28.7,x:149.3,y:76.5},0).wait(1).to({regX:100.5,regY:28.5,x:149.15,y:76.35,alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_term = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// term
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(148.3,232.75,0.4519,0.4345,0,0,0,90,7.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_price = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// price
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(233.15,140.45,0.4553,0.4553,0,0,0,62,61.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(148.95,23.6,0.5397,0.5382,0,0,0,94.8,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(53.45,167.2,0.4456,0.4455,0,0,0,88.3,140.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_combo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// combo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(158.9,184.6,0.4374,0.4369,0,0,0,251.6,146.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.button_1 = new lib.Symbol10();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(165.3,137.7,0.9077,1.0067,0,0,0,182.1,136.8);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Symbol10(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(97));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(150.05,124.95,0.48,0.4798,0,0,0,312.6,260.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Untitled8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.button_1 = this.button.button_1;
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.google.com", "_blank");
		}
	}
	this.frame_96 = function() {
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96).call(this.frame_96).wait(1));

	// button_obj_
	this.button = new lib.Scene_1_button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(149.9,125,1,1,0,0,0,149.9,125);
	this.button.depth = 0;
	this.button.isAttachedToCamera = 0
	this.button.isAttachedToMask = 0
	this.button.layerDepth = 0
	this.button.layerIndex = 0
	this.button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.button).wait(97));

	// text_2_obj_
	this.text_2 = new lib.Scene_1_text_2();
	this.text_2.name = "text_2";
	this.text_2.parent = this;
	this.text_2.setTransform(150.7,61.1,1,1,0,0,0,150.7,61.1);
	this.text_2.depth = 0;
	this.text_2.isAttachedToCamera = 0
	this.text_2.isAttachedToMask = 0
	this.text_2.layerDepth = 0
	this.text_2.layerIndex = 1
	this.text_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({regX:150.6,regY:71,x:150.6,y:71},0).wait(96));

	// text_1_obj_
	this.text_1 = new lib.Scene_1_text_1();
	this.text_1.name = "text_1";
	this.text_1.parent = this;
	this.text_1.setTransform(149.2,76.4,1,1,0,0,0,149.2,76.4);
	this.text_1.depth = 0;
	this.text_1.isAttachedToCamera = 0
	this.text_1.isAttachedToMask = 0
	this.text_1.layerDepth = 0
	this.text_1.layerIndex = 2
	this.text_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(97));

	// term_obj_
	this.term = new lib.Scene_1_term();
	this.term.name = "term";
	this.term.parent = this;
	this.term.depth = 0;
	this.term.isAttachedToCamera = 0
	this.term.isAttachedToMask = 0
	this.term.layerDepth = 0
	this.term.layerIndex = 3
	this.term.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.term).wait(97));

	// price_obj_
	this.price = new lib.Scene_1_price();
	this.price.name = "price";
	this.price.parent = this;
	this.price.depth = 0;
	this.price.isAttachedToCamera = 0
	this.price.isAttachedToMask = 0
	this.price.layerDepth = 0
	this.price.layerIndex = 4
	this.price.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.price).wait(97));

	// button_obj_
	this.button_1 = new lib.Scene_1_button_1();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.depth = 0;
	this.button_1.isAttachedToCamera = 0
	this.button_1.isAttachedToMask = 0
	this.button_1.layerDepth = 0
	this.button_1.layerIndex = 5
	this.button_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(97));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(148.8,23.4,1,1,0,0,0,148.8,23.4);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 6
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(97));

	// combo_obj_
	this.combo = new lib.Scene_1_combo();
	this.combo.name = "combo";
	this.combo.parent = this;
	this.combo.setTransform(158.8,184.3,1,1,0,0,0,158.8,184.3);
	this.combo.depth = 0;
	this.combo.isAttachedToCamera = 0
	this.combo.isAttachedToMask = 0
	this.combo.layerDepth = 0
	this.combo.layerIndex = 7
	this.combo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.combo).wait(97));

	// flower_obj_
	this.flower = new lib.Scene_1_flower();
	this.flower.name = "flower";
	this.flower.parent = this;
	this.flower.setTransform(53.1,166.8,1,1,0,0,0,53.1,166.8);
	this.flower.depth = 0;
	this.flower.isAttachedToCamera = 0
	this.flower.isAttachedToMask = 0
	this.flower.layerDepth = 0
	this.flower.layerIndex = 8
	this.flower.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flower).wait(97));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(150,125,1,1,0,0,0,150,125);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 9
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,125);
// library properties:
lib.properties = {
	id: 'C27192627D5D498B803E7CD7B0C4F1F4',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300_20250_atlas_.png", id:"300_20250_atlas_"}
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
an.compositions['C27192627D5D498B803E7CD7B0C4F1F4'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;