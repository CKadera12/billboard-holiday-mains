(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[189,361,188,101],[0,214,187,221],[217,0,248,125],[189,255,214,104],[0,0,215,212],[217,127,230,126]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.billboardholidaymainscranberries = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.billboardholidaymainsrolls = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.billboardholidaymainsstuffing = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.billboardholidaymainstable = function() {
	this.initialize(img.billboardholidaymainstable);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.leaderboardapples = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardholidaymainsbrusselsprouts = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardholidaymainspotatoes = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
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


(lib.youtakethecredit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AgLAMQgEgFAAgHQgBgGAFgEQAFgFAGgBQAHABAFAFQAEAEAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(140.5,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgCBVIgIgBQgFgCAAgEIAAh+QAAgDgCgCQgBgCgHAAIgNAAIgNAAIgHAAQgFAAgCgEIgBgIIAAgFIABgGIACgEQACgCADgBIB1AAQAFABABAEQACADAAAEIAAAFIgBAGIgCAFQgCACgDAAIgiAAQgEAAgDACQgDABAAAGIABB7QAAAEgCABIgFADIgGAAg");
	this.shape_1.setTransform(129.9,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AgFBXQgHAAgDgFIAAijQACgDACgBIAGgCIAGAAIAGAAQAHAAACAGIAACiQgCADgCACIgGABIgGABg");
	this.shape_2.setTransform(119.1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AhHBVQgDAAgDgCQgDgCgBgEIAAiZQABgDACgCQADgDADAAIA/AAIARACIASAEQAQAGAMALQANALAHAQQADAHACAKQACAIAAAJQAAATgHAQQgDAIgGAGQgFAHgGAGIgNAKIgQAHQgRAGgRAAgAgug0QgDADAAAFIAABbQAAAEADACQAEACADAAIAeAAQALAAALgEQALgEAIgHQAJgHAEgKQAFgLAAgMQAAgLgFgLQgEgKgJgHQgIgHgLgEQgLgEgLAAIgeAAQgEAAgDACg");
	this.shape_3.setTransform(106.4,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("Ag5BVIgGgCQgCgDAAgBIAAidQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgCIB2AAQADABACADIABAEIABAGIgBAGIgBAFQgBADgEACIhYAAQgCAAgCACQgDADAAADIAAAWQAAAEADACQACACADAAIA5AAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAHIABAHIAAADQAAAIgGABIg4AAQgDAAgCAEQgDADgBACIAAAaQABAEACACQACACADAAIBXAAQAGADAAAGIAAAGIAAAGIgDAHQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_4.setTransform(88.6,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AAqBWIgDgBIgEgCIgCgBIgdgtQgCgEgDgCQgDgCgEAAIgWAAQgDAAgDACQgCADAAADIAAAqQAAADgDACIgGABIgHABIgFgBQgFAAgDgBQgCgCAAgGIAAibQAAgDACgCQACgCADABIBIAAQANAAALADQALAFAIAHQAIAIAFAKQAEALAAANQAAAOgFAKQgGAIgGAFIgMAJQgFADAAAEIAAAEIAGAKIAKANIAJAOQAEAGAAADQAAACgCACIgFAEIgHACIgFABgAgjg2QgDABAAAGIAAAmQAAAEADADQAEACAEAAIAiAAQAHAAAGgCQAFgBAFgDQAEgEADgFQACgGAAgHQAAgOgJgHQgFgEgFgBQgGgCgHAAIgiAAQgEAAgEACg");
	this.shape_5.setTransform(71.5,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AgHBXQgJgCgIgEQgIgDgHgEQgIgFgGgGQgGgGgFgGQgFgIgDgIQgIgQAAgTQAAgSAIgQQADgJAFgGQAFgIAGgFQAMgMARgHQAIgDAJgBQAIgCAJgBQAKABAJACQAKACAKAEQAJAEAIAFQAIAHAGAHIABADQAAAGgDACIgHAFIgFADQgDACgDAAQgDABgEgEIgJgIQgFgEgIgEQgIgDgNAAQgKAAgLAEQgLAFgIAIQgHAIgFALQgFALAAAKQAAAMAFALQAFAKAHAJQAIAHALAFQALAFAKAAQANAAAMgGQALgEAJgKIAGgCIAFACIAHAEIAFAFQADADAAADIgBADQgHAIgIAGQgHAFgJAEQgJAFgKACQgJABgLAAQgJABgIgCg");
	this.shape_6.setTransform(52.9,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("Ag6BVIgEgCQgEgDAAgBIAAidQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgCIB2AAQADABACADIABAEIAAAGIAAAGIgBAFQgBADgEACIhXAAQgDAAgCACQgDADABADIAAAWQgBAEADACQACACAEAAIA4AAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAHIAAAHIAAADQAAAIgHABIg2AAQgDAAgEAEQgCADAAACIAAAaQAAAEACACQACACAEAAIBWAAQAFADAAAGIABAGIgBAGIgBAHQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_7.setTransform(29.5,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AAtBWQgDAAgDgEIAAg8QAAgEgDgCQgDgEgEAAIg4AAQgEABgDADQgEADAAAEIAAA7QAAADgDABIgFACIgHAAIgGAAIgGgDQgDgBgBgDIAAihIAEgEIAGgCIAGgBIAFAAQAHABADAGIAAA3QAAAEACACQADACADABIA7AAQAEgBADgCQADgDAAgDIAAg3QADgFAFgBIAKAAIAIABQADABACAEIAAChQgCAGgGAAIgKABg");
	this.shape_8.setTransform(11.3,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AgCBVIgIgBQgFgCAAgEIAAh+QAAgDgCgCQgBgCgHAAIgNAAIgNAAIgHAAQgFAAgCgEIgBgIIAAgFIABgGIACgEQACgCADgBIB1AAQAFABABAEQACADAAAEIAAAFIgBAGIgCAFQgCACgDAAIgiAAQgEAAgDACQgDABAAAGIABB7QAAAEgCABIgFADIgGAAg");
	this.shape_9.setTransform(-5.1,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("Ag5BVIgGgCQgDgDAAgBIAAidQABgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgCIB2AAQADABACADIABAEIABAGIgBAGIgBAFQgBADgEACIhYAAQgCAAgCACQgDADAAADIAAAWQAAAEADACQACACADAAIA5AAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAHIABAHIAAADQAAAIgGABIg4AAQgDAAgCAEQgDADgBACIAAAaQABAEACACQACACADAAIBXAAQAGADAAAGIAAAGIAAAGIgDAHQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_10.setTransform(-26.6,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AAoBXQgFgBgCgCIgrhBIgFgEIgGgCQgFAAgEADQgFACAAAGIAAA0QAAAEgDACIgGADIgHAAIgGABQgJAAAAgIIAAigQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBIAGgCIAFAAIAGAAQAHAAAEAHIAAA1QAAADADACQAEACADABQAEgBADgEIAwg5IADgBIAEgBIAFACIAGADIAFAFQABAAABABQAAAAAAABQABAAAAABQAAAAAAAAIgCAFIgpAwIgCAEIgBAFIAAAEIACAEIA2BJIABACIAAADQAAACgDADIgFADIgHADIgGABg");
	this.shape_11.setTransform(-43,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("ABDBWIgFAAIgJgBQgFgBgCgFIgJgWIgDgEQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIg4AAIgDABIgCACIgDABIgBACIgKAWIgDAEIgEACIgGAAIgEABIgFgBIgFAAIgEgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIBFigQABgDAEgBIAFgBIAHABQAFABABADIBDCfIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgFACgAgBgaIgCACIgCAFIgDAIIgFAKIgEAIIgDAIIgBADIABAEQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAIAhAAIADgCIACgDIgDgHIgFgNIgGgPIgEgJQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_12.setTransform(-60.4,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgCBVIgIgBQgFgCAAgEIAAh+QAAgDgCgCQgBgCgHAAIgNAAIgNAAIgHAAQgFAAgCgEIgBgIIAAgFIABgGIACgEQACgCADgBIB1AAQAFABABAEQACADAAAEIAAAFIgBAGIgCAFQgCACgDAAIgiAAQgEAAgDACQgDABAAAGIABB7QAAAEgCABIgFADIgGAAg");
	this.shape_13.setTransform(-75.6,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AgdBTQgNgGgKgJQgLgKgFgOIgFgNIgBgQIAAguIAAgvQAAgDADgCIAFgCIAHgBIAFAAIAHACQAEABAAAFIAABWQAAALADAIQADAJAFAHQAGAHAJAEQAHAEAKAAQALAAAIgEQAIgEAFgHQAGgGADgKQADgIAAgLIAAhWQAAgFAEgCQADgCAFAAIAFAAIAHABIAFACQACACAAAEIAABdIgBAQIgFANQgGAOgKAKQgKAJgNAGQgPAFgPAAQgPAAgOgFg");
	this.shape_14.setTransform(-99.3,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AgSBXQgIgCgIgEQgJgDgHgFQgHgEgHgGQgMgMgHgQQgEgIgBgJQgCgJAAgJQAAgIACgJQABgJAEgIQAHgQAMgMQAHgGAHgEQAHgFAJgEIAQgFQAJgBAJAAQAKAAAJABIAQAFQARAHANAMQAMAMAHAQQAHAQAAASQAAAJgCAJQgBAJgEAIQgHAQgMAMQgNAMgRAGQgIAEgIACQgJABgKAAQgJAAgJgBgAgVg1QgKAEgJAIQgIAIgEALQgFALAAALQAAAMAFALQAEALAIAIQAJAHAKAFQAKAFALAAQAMAAAKgFQAKgFAIgHQAJgIAEgLQAFgLAAgMQAAgLgFgLQgEgLgJgIQgIgIgKgEQgKgFgMAAQgLAAgKAFg");
	this.shape_15.setTransform(-118.8,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AgHBYIgDgBIgEgCIgBgDIAAg9QAAgEgBgFIgFgJIgxhKIAAgCQAAgDACgDIAGgEIAGgDIAGgBIAFABIAEADIAiA4IADADIAEABIADgCIAEgCIAig4IAEgEIAGgBIAFABIAHADIAFAEQADACAAACIgBADIAAACIgyBLIgDAKIgBADIgBAEIAAA8QgCAGgGABIgKABg");
	this.shape_16.setTransform(-136.5,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.youtakethecredit, new cjs.Rectangle(-146.2,-14.4,292.5,28.9), null);


(lib.wellmakethefeast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AgaAbQgLgLAAgQQAAgQALgKQALgLAPAAQAQAAALALQALAKAAAQQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape.setTransform(87.7,41.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgNCTQgMgEgIgIQgJgIgEgOQgDgNAAglIAAiCIgXAAIgGgCIgDgGIAAgGQAAgIAagWIAKgIIAJgJQAZgWAKAAIAHACQACACAAAEIAAAuIA3AAQAGAAACACQADADAAAGIAAAGQAAAGgDADQgCADgGAAIgyAAIgEACIgCAGIAAB4QAAAgAGAIQAFAIAOAAQAIAAAMgEIARgEQAFAAAEADQAEADAAAFQgBANgUANQgVANgbAAQgNAAgNgEg");
	this.shape_1.setTransform(72.5,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AgSB/IgagFIgHAFIgIABIgFgBIgFgDQgIgHgHgUQgHgUAAgSQAAgHAEgGQAFgFAGAAQALAAALAUIAKAPQAHAJANAGQAMAFAOAAQAQAAAJgIQAKgIAAgNQAAgVgogUIgOgGQgmgTgOgPQgNgQAAgYQAAgfAWgUQAWgUAkAAIAQAAIARAEIAMgFIAHgBQAMAAAMATQALATAAAVQAAAJgEAFQgEAEgHAAQgFAAgGgEQgFgFgIgMQgJgPgJgFQgKgHgOAAQgNAAgJAIQgIAIAAANQAAALAJAJQAIAJAeAPIADABQBEAhAAAnQAAAigaAXQgbAXgnAAg");
	this.shape_2.setTransform(53,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AArByIgNgMIgKAFQgeAUgeAAQgkABgWgWQgWgUAAgiQAAgnAdgVQAcgVAzAAQAMAAAGADQAGAEAAAJQAAANgRAAQgXAAgPAMQgPAMAAAUQAAAUANAMQANAMAVgBQAXAAAKgKQAKgKAAgaIAAhdQAAgVgJgLQgJgMgRAAQgMAAgKAFQgKAFgKAMIgFAGQgPASgQABQgKgBgGgFQgGgHAAgLQAAgXAdgPQAcgQAtAAQAaAAATAIQAUAGALAOQAHAJADAQQADAPAAAiIAABOQAAAOACAHQADAGAFACIAHACQAQAEAAAIQAAAMgRAKQgQAKgWgBQgLAAgMgNg");
	this.shape_3.setTransform(29.8,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AhPBcQgjgkAAg0QAAg5AkgkQAkglA2AAQAvAAAcAaQAcAbAAAuQAAAPgFAFQgEAFgTAAIhdAAQgIAAgEgEQgFgEAAgHQAAgHAFgDQAEgDAIAAIAyAAIANgCQADgCAAgGQAAgXgQgQQgQgQgWAAQgdAAgOAZQgOAaAAAjQAAAmAUAcQATAbAeAAQASAAANgEQAMgEAMgIIAJgHQAMgKAHAAQAFAAAEAEQADADAAAFQAAAGgGAJQgGAIgKAIQgWASgTAIQgUAHgXAAQgzAAgjgjg");
	this.shape_4.setTransform(3.6,32.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("Ah7CvQgOgEAAgMQAAgJANgFQANgGADgDQADgEACglIAChfIgChaQgDglgCgEQgDgEgNgFQgNgGAAgKQAAgKALgDQAMgDAqgBICUAAIAZgCIAMgDIAHACIAEAEQAFAIAEARQAFARAAAMQAAALgEAGQgEAGgIAAQgIAAgKgRIgHgLQgGgIgLgEQgLgEgQAAIghAAQgXAAgMACQgMADgFAGQgEAFgBAQIgCAvIAAAUQAAAMACACQACADAHAAIAnAAQATAAAIgGQAIgFACgPIABgFQADgZANAAQALAAAEANQAEANAAAvQAAAugEANQgEANgLAAQgNAAgDgaIgBgDQgCgQgIgGQgIgFgTAAIgnAAQgHAAgCAEQgCAEAAAPIAAATIABBFQACAPAEADIALAFQAPAGAAAJQAAAMgNAEQgOAEgmAAQgnAAgNgEg");
	this.shape_5.setTransform(-23.7,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AhPBcQgjgkAAg0QAAg5AkgkQAkglA2AAQAvAAAcAaQAcAbAAAuQAAAPgFAFQgEAFgTAAIhdAAQgIAAgEgEQgFgEAAgHQAAgHAFgDQAEgDAIAAIAyAAIANgCQADgCAAgGQAAgXgQgQQgQgQgWAAQgdAAgOAZQgOAaAAAjQAAAmAUAcQATAbAeAAQASAAANgEQAMgEAMgIIAJgHQAMgKAHAAQAFAAAEAEQADADAAAFQAAAGgGAJQgGAIgKAIQgWASgTAIQgUAHgXAAQgzAAgjgjg");
	this.shape_6.setTransform(-65,32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AAiCvQgNgEAAgJQAAgJANgFIAJgEQAGgDACgKQACgLABgaQgBhOgJgTQgLgUgZAAQgNAAgLAIQgMAIgGAMQgFALgDASQgCATAAAwQAAAYACAIQACAIAFADIAKAEQAMAFAAAJQAAAJgMAEQgMAEggAAQgmAAgLgEQgMgEgBgLQABgIAMgEIAGgDQAGgEADgKQADgKAAgbIAAgoIAAglIgChuQgBgbgEgFQgCgDgPgEQgPgEAAgJQABgGAFgFQAGgFAWgIIAZgGIAWgDQAIAAAEAFQADAEAAALIAAAKIgCBiIAAAMIABAGIADABIAGgFIAIgKQANgMAOgGQANgGAPAAQApAAAVAbQAVAbgBA2IAAAXIABAsIAAAOQAAAMACAFQADAGAFADIAGADQAMAEAAAIQAAALgLAEQgMAEgnAAQgfAAgMgEg");
	this.shape_7.setTransform(-92.8,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AgMCTQgMgEgKgIQgIgIgEgOQgDgNAAglIAAiCIgXAAIgHgCIgCgGIAAgGQABgIAZgWIAKgIIAJgJQAagWAJAAIAHACQADACgBAEIAAAuIA3AAQAGAAACACQACADAAAGIAAAGQAAAGgCADQgCADgGAAIgyAAIgEACIgCAGIAAB4QABAgAFAIQAFAIAPAAQAHAAAMgEIARgEQAGAAADADQAEADgBAFQABANgVANQgVANgaAAQgOAAgMgEg");
	this.shape_8.setTransform(-115.5,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AhPBcQgjgkAAg0QAAg5AkgkQAkglA2AAQAvAAAcAaQAcAbAAAuQAAAPgFAFQgEAFgTAAIhdAAQgIAAgEgEQgFgEAAgHQAAgHAFgDQAEgDAIAAIAyAAIANgCQADgCAAgGQAAgXgQgQQgQgQgWAAQgdAAgOAZQgOAaAAAjQAAAmAUAcQATAbAeAAQASAAANgEQAMgEAMgIIAJgHQAMgKAHAAQAFAAAEAEQADADAAAFQAAAGgGAJQgGAIgKAIQgWASgTAIQgUAHgXAAQgzAAgjgjg");
	this.shape_9.setTransform(111.3,-21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("ABQCyIgLgBQgLgEgXgeIgKgNIgEgGQg7hMgFAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAAAIgBALIAAAKIACAzQABAPAEAEIAOAHQALAFAAAJQAAAJgMAEQgMAEggAAQgmAAgLgEQgMgEAAgLQAAgIAMgEIAGgDQAHgEACgLQADgMAAgdIAAgeIAAgmIAAgdIgChbQgCgWgDgFQgDgDgLgDIgIgCIgJgFIgCgHQAAgGAFgEQAEgEASgGIAggJIAagDQAHAAADAEQADAFAAALIgBAvIgCBAIAAA8IABAMQAAABABAAQAAABABAAQAAAAABABQABAAAAAAIAKgGIASgOIAYgXQAGgIAAgDQAAgCgKgFQgIgFAAgHQAAgLAMgFQANgEAjAAQAXAAALAEQALAFAAAJQAAAMgSAEQgSAFgIAEQgIAFgVAUIgEAEIgJAJIgCAFQAAAFAVAcIADADIAqAzQARAUAKAIQAGAEAQAFQAPAFAAAJQAAALgLAFQgMAEgaAAg");
	this.shape_10.setTransform(85.6,-27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AArBzIgNgOIgKAGQgeAVgegBQgkAAgWgUQgWgVAAghQAAgoAdgUQAcgXAzAAQAMAAAGAEQAGAEAAAJQAAAOgRAAQgXAAgPALQgPAMAAAVQAAATANALQANANAVAAQAXAAAKgLQAKgKAAgaIAAhdQAAgVgJgMQgJgLgRAAQgMAAgKAGQgKAFgKAKIgFAHQgPASgQAAQgKAAgGgFQgGgHAAgKQAAgYAdgPQAcgPAtAAQAaAAATAGQAUAIALANQAHAJADAPQADAQAAAiIAABOQAAAOACAHQADAGAFACIAHACQAQAEAAAJQAAALgRAKQgQAJgWAAQgLABgMgNg");
	this.shape_11.setTransform(58.4,-21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("ABbCsQgNgEAAgLQAAgKAPgGIALgFQAEgDACgLQABgLAAghIAAgMIAAhoIgBg9IgfBQQhHC7gQAAQgIAAgOgaQgOgZgihQIg1h6IgCBgIgBBCIABAtQACALADADIALAFQAPAGAAAKQAAAKgMAFQgNAEgdAAQgbAAgMgFQgMgEAAgLQAAgIANgGQANgHACgEQADgMAEg/QADg+AAhNIAAgIQAAgagCgIQgCgJgFgDIgMgFQgQgGAAgKQAAgKALgDQALgEAkAAIAiABIAKACQAFADARAsIAOAiIAHASQA7CSAEAAQAGAAAWg1QAWgzAehXIAFgPQAIgaAIgIQAEgFAKgBIAhgCQAgAAALAEQALADAAAKQAAAKgOAFIgGADQgIAEgCAKQgDAJAAAlIADCLQACA+ADAKQABAFALAEIAFACIAKAGQACADAAAGQAAALgNAEQgOAEgoAAQglAAgNgEg");
	this.shape_12.setTransform(22.9,-26.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgoCvQgMgEAAgLQAAgHAKgFIAMgGQAEgEACgPIACgwIAAgmIAAguIAAgTQgBg9gCgSQgCgSgFgCIgPgGQgPgEgBgJQABgGAEgEQAFgEARgGIAhgJIAZgDQAHAAADAEQADAFAAALIgBATQgDBXAABYIACBTQABARAFAFIANAHQAMAFAAAJQAAAJgNAEQgLAEghAAQgkAAgLgEg");
	this.shape_13.setTransform(-19.8,-27);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AgpCvQgMgEABgLQgBgHAKgFIANgGQAEgEACgPIACgwIgBgmIAAguIAAgTQABg9gDgSQgCgSgFgCIgPgGQgPgEAAgJQAAgGAEgEQAFgEASgGIAggJIAYgDQAIAAADAEQADAFAAALIAAATQgEBXAABYIACBTQACARADAFIAPAHQAKAFABAJQgBAJgLAEQgMAEggAAQglAAgMgEg");
	this.shape_14.setTransform(-33.4,-27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AgDBHIgShrIAAgDIAAgGQAAgMAGgHQAFgGAKAAQALAAAGAGQAFAHAAAMIAAAGIAAADIgRBrg");
	this.shape_15.setTransform(-44.1,-36.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AhPBcQgjgkAAg0QAAg5AkgkQAkglA2AAQAvAAAcAaQAcAbAAAuQAAAPgFAFQgEAFgTAAIhdAAQgIAAgEgEQgFgEAAgHQAAgHAFgDQAEgDAIAAIAyAAIANgCQADgCAAgGQAAgXgQgQQgQgQgWAAQgdAAgOAZQgOAaAAAjQAAAmAUAcQATAbAeAAQASAAANgEQAMgEAMgIIAJgHQAMgKAHAAQAFAAAEAEQADADAAAFQAAAGgGAJQgGAIgKAIQgWASgTAIQgUAHgXAAQgzAAgjgjg");
	this.shape_16.setTransform(-61.1,-21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AAiBVIg0iHQgQgsgKgUQgKgVgJgGIgOgGQgMgFAAgJQAAgKALgEQAMgDAvAAQAtAAALADQALAEAAAKQAAAJgSAIIgCABQgGABgDADQgCAEAAAFQAAAKALAhIAoBqIARAnQAGAKADAAQAEABAFgJIAQgkIAFgKQAyh5AAgPQAAgHgDgFQgFgGgIgDIgFgDQgPgGAAgJQABgKAJgEQAKgDApAAQAmAAAKADQAKAEAAAKQAAAKgOAFIgKAFQgSAMggBTIgUAyIgvBzIgIAVQgPAogLAAQgMAAgkhfgAhkCfIgEgHQgehEgxh9IgWg6IgPgeQgGgKgHgEIgIgDQgPgFAAgKQAAgKAMgEQALgDAuAAQAvAAAKADQAMAEAAAKQAAAJgTAIIgCAAQgGADgDADQgCADAAAFQAAAJAKAdIApBrIATAsQAEAJAFAAQAEAAAFgMIAMgbQAFgRANAAQAQAAAAARIgDAPIggBNIgHATQgPAogKAAQgJgBgIgUg");
	this.shape_17.setTransform(-99.1,-26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wellmakethefeast, new cjs.Rectangle(-126.3,-57.9,252.7,115.9), null);


(lib.wellmakethe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AhhBxQgrgsAAhBQAAhFAsgtQAsgtBDAAQA7AAAiAgQAhAiAAA3QAAATgFAGQgGAGgWAAIhzAAQgKAAgFgFQgGgFAAgIQAAgIAGgEQAFgFAKABIA+AAIAPgDQAEgCAAgHQAAgdgTgUQgUgTgaAAQglAAgRAfQgRAfAAAsQgBAvAYAiQAYAhAlAAQAXAAAPgEQAPgFAPgKIALgJQAPgMAIAAQAGAAAFAEQAEAFAAAGQAAAHgHALQgIAKgNAKQgaAWgYAJQgYAJgcAAQhAAAgqgrg");
	this.shape.setTransform(-80,39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AAqDYQgPgFAAgMQAAgLAPgGIALgFQAHgEADgNQADgMAAggQAAhhgMgXQgNgYgfAAQgPAAgPAJQgOAKgIAPQgHANgCAXQgDAXAAA7QAAAeADAKQACAKAGADIALAFQAQAGAAALQAAAMgPAFQgPAEgmAAQgwAAgOgFQgOgFAAgNQAAgKAOgFIAIgEQAIgEAEgNQADgMAAghIAAgxIAAguIgCiHQgCghgFgHQgDgEgSgFQgRgFAAgKQAAgIAHgGQAHgGAbgKIAegIIAcgDQAKAAAEAGQAEAFAAAOIAAAMIgDB4IAAAPIACAHIAEACIAHgGIAKgNQAPgOARgIQAQgHATAAQAzAAAaAhQAZAiAABCIAAAcIABA2IAAARQAAAPACAHQADAGAHAEIAIAEQAOAFAAAKQAAANgOAFQgOAFgwAAQgnAAgOgEg");
	this.shape_1.setTransform(-114.2,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AgQC0QgPgFgKgJQgLgKgEgRQgFgQAAgtIAAigIgbAAIgJgDIgCgHIAAgIQAAgJAfgbIAMgLIAMgKQAfgbALAAIAJACQADADAAAEIAAA5IBEAAQAHAAADACQADADAAAJIAAAHQAAAIgDADQgEAEgGAAIg+AAIgFACIgCAHIAACUQAAAnAHAKQAGAKASAAQAJAAAPgFIAVgFQAGAAAFAEQAEAEAAAGQAAAQgZAQQgaAPggAAQgSAAgPgFg");
	this.shape_2.setTransform(-142,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AhhBxQgrgsAAhBQAAhFAsgtQAsgtBEAAQA5AAAiAgQAiAiAAA3QAAATgGAGQgFAGgXAAIhyAAQgKAAgFgFQgFgFAAgIQAAgIAFgEQAFgFAKABIA+AAIAPgDQAEgCAAgHQAAgdgUgUQgTgTgbAAQgkAAgRAfQgSAfABAsQgBAvAZAiQAXAhAmAAQAWAAAPgEQAPgFAPgKIALgJQAPgMAIAAQAGAAAFAEQAFAFAAAGQAAAHgIALQgHAKgOAKQgZAWgYAJQgZAJgdAAQg/AAgqgrg");
	this.shape_3.setTransform(136.9,-25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("ABiDbIgNgBQgNgFgdgmIgMgQIgFgGQhKhegFAAQgDAAgCADIgBAMIAAANIACA/QACATAFAEIARAJQANAGAAAMQAAALgPAFQgPAFgngBQguAAgOgEQgPgGAAgMQAAgKAPgGIAIgDQAHgFAEgPQADgOAAgjIAAglIgBgvIAAgkIgBhwQgCgbgFgGQgDgDgOgEIgKgDIgLgFIgCgJQAAgHAFgGQAGgEAWgIIAogLIAfgFQAJAAAEAHQAEAFgBAOIgBA5IgCBOIAABMIABAOQACADADABIANgHIAVgSIAegdQAHgJAAgEQAAgDgMgGQgKgFAAgKQABgNAPgGQAPgFArAAQAcAAAOAFQANAGAAALQAAAOgWAGQgWAFgKAGQgKAHgaAYIgEAFIgKALIgEAGQAAAGAaAiIAEAFIAzA/QAVAYAMAJQAHAFAUAGQATAGAAAMQABANgOAGQgPAGgggBg");
	this.shape_4.setTransform(105.3,-32.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AA1CNIgQgQIgNAHQglAZgkAAQgsAAgbgaQgbgZAAgqQAAgwAigZQAjgbA/AAQAPAAAHAEQAIAEAAAMQAAARgVAAQgdAAgSAOQgSAPAAAZQAAAYAPAOQAQAPAbAAQAcAAANgNQAMgNAAggIAAhxQAAgagMgPQgLgOgUAAQgPAAgNAHQgMAGgMANIgHAIQgSAXgUAAQgMAAgHgHQgHgIAAgNQAAgcAjgTQAjgUA2AAQAhAAAYAJQAYAJANARQAJALAEASQADATAAArIAABgQAAARADAIQADAIAGACIAJADQATAFAAAKQAAAOgUAMQgUAMgbAAQgNAAgPgQg");
	this.shape_5.setTransform(71.8,-25.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("ABwDTQgQgFAAgNQAAgMASgIIANgGQAGgEACgNQACgOAAgoIAAgQIAAh/IgChMIgmBjQhYDngTgBQgJAAgSgfQgRgfgqhiIhCiXIgCB3IgCBQIACA4QACANAFAEIANAGQATAIAAAMQAAANgPAFQgQAGglgBQggAAgPgFQgPgGAAgNQAAgKAQgIQAQgIACgGQAEgOAFhNQAEhNAAheIAAgKQAAgfgCgLQgDgLgHgEIgOgGQgTgIAAgMQAAgMANgEQAOgEArgBIArABIAMADQAGAEAVA2IARAqIAJAVQBIC0AGAAQAGAAAchAQAahAAlhqIAGgSQALgiAJgJQAFgGAMgCIApgCQAoABAOAEQANAEAAAMQAAANgRAGIgIAEQgJAFgDAMQgDALAAAuIADCrQADBMACALQACAIAOAEIAGADIAMAHQADAEAAAHQAAANgRAFQgQAGgygBQgtABgQgGg");
	this.shape_6.setTransform(28.2,-32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AgyDYQgPgGAAgMQAAgKANgGIAPgIQAFgFACgSIACg7IAAgvIAAg4IAAgXQAAhLgDgWQgCgWgHgEIgSgGQgTgFAAgLQAAgHAGgGQAGgEAVgIIAogLIAegFQAJAAAEAHQAEAFAAAOIgBAXQgDBrAABsIACBmQACAWAFAFIARAJQANAGAAAMQAAALgPAFQgPAFgngBQgtAAgOgEg");
	this.shape_7.setTransform(-24.3,-32.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AgyDYQgPgGAAgMQAAgKANgGIAPgIQAFgFACgSIACg7IAAgvIAAg4IAAgXQAAhLgDgWQgCgWgHgEIgSgGQgTgFAAgLQAAgHAGgGQAGgEAVgIIAogLIAegFQAJAAAEAHQAEAFAAAOIgBAXQgDBrAABsIACBmQACAWAFAFIARAJQANAGAAAMQAAALgPAFQgPAFgngBQgtAAgOgEg");
	this.shape_8.setTransform(-41.1,-32.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AgEBXIgWiDIAAgEIgBgHQAAgPAIgIQAHgIAMAAQANAAAIAIQAGAHAAAQIAAAHIAAAEIgVCDg");
	this.shape_9.setTransform(-54.2,-44.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AhhBxQgrgsAAhBQAAhFAsgtQAsgtBDAAQA7AAAhAgQAiAiAAA3QAAATgFAGQgGAGgXAAIhyAAQgKAAgFgFQgGgFAAgIQAAgIAGgEQAFgFAKABIA+AAIAPgDQAEgCAAgHQAAgdgTgUQgUgTgbAAQgkAAgRAfQgRAfgBAsQAAAvAYAiQAYAhAlAAQAXAAAPgEQAQgFAOgKIALgJQAPgMAIAAQAGAAAFAEQAEAFAAAGQAAAHgHALQgIAKgMAKQgbAWgYAJQgYAJgdAAQg+AAgrgrg");
	this.shape_10.setTransform(-75.1,-25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AApBpIhAimQgTg2gMgZQgNgagKgIIgRgIQgPgFAAgMQAAgLAOgFQANgEA6gBQA3ABAOAEQAOAFAAALQAAANgXAIIgCABQgHADgEAEQgDAEAAAHQAAALAOApIAyCCIAVAwQAHANAEAAQAFAAAGgKIATgsIAFgMQA/iWAAgSQAAgJgFgHQgEgGgKgEIgHgDQgSgIAAgMQAAgLANgFQALgEAygBQAvABAMAEQANAFAAALQAAAMgSAIIgNAGQgUANgoBnIgZA+Ig5COIgLAaQgSAwgNgBQgQAAgshzgAh8DDIgEgJQgmhTg7iaIgbhIIgSgkQgIgMgJgFIgJgEQgTgGAAgNQAAgLAOgFQAOgEA5gBQA5ABAOAEQAOAFAAALQAAANgYAIIgCABQgHADgDAEQgEAEAAAHQAAAKAMAkIAzCEIAXA2QAGALAFAAQAFAAAHgPIAOgiQAHgUAQAAQATAAAAAUIgEATIgnBfIgJAXQgSAxgMgBQgLAAgLgZg");
	this.shape_11.setTransform(-121.9,-31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wellmakethe, new cjs.Rectangle(-154.8,-70.2,309.7,140.5), null);


(lib.turkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
	this.shape.setTransform(96.3,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AiKDGQgOgMAAgTQAAgPAKgLQALgLAPABIANABIAJAIIAIAKQAIAMAGAAQAPABAQgWQAPgXAAgXQAAgagVgvIgDgIIgwhoIgbg6QgGgLgRgIQgLgEgDgEQgEgEAAgHQAAgNAQgFQAQgGAsAAQArAAAPAGQAPAEAAAMIgCAJIgFAGIgLAFQgMAEAAAGIAGAWIAYA9IAYA3QAIAPAEAAQADAAAHgOIAUgvIAWg8QAHgVAAgIQAAgJgRgJQgRgKAAgHQAAgLAOgEQAOgEAigBQAkAAAMAGQANAEAAAMQAAALgRAEIgMAFQgRAJgUAzIgIAXIgnBgQgxB8gfAnQggAkgsABQgWgBgOgMg");
	this.shape_1.setTransform(73.2,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AhhBxQgrgsAAhBQAAhFAsgtQAsgtBDgBQA6ABAiAgQAiAhAAA5QAAASgGAGQgFAGgXAAIhyAAQgKAAgFgFQgFgFgBgIQABgIAFgEQAFgFAKAAIA+AAIAPgCQAEgCAAgHQAAgdgUgTQgTgUgbAAQgkAAgRAfQgSAgAAArQAAAuAYAiQAZAjAlgBQAWAAAPgEQAQgFAOgKIALgJQAPgMAIAAQAHAAAEAEQAEAFABAFQgBAIgHAKQgHALgNAKQgaAWgZAJQgYAJgdAAQg+AAgrgrg");
	this.shape_2.setTransform(42.2,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("ABiDcIgNgCQgNgGgcglIgNgQIgFgGQhJhegGAAQgEAAgBADIgBANIAAAMIACA/QACATAEAFIARAJQAOAFAAAMQAAALgPAFQgPAEgnAAQguABgPgGQgOgFAAgNQAAgJAOgGIAIgEQAJgEADgPQADgOAAgjIAAglIAAgvIAAgkIgChvQgCgcgEgGQgEgDgNgEIgKgDIgMgGIgDgIQAAgIAHgFQAGgEAVgIIAogLIAfgFQAJAAAEAHQAEAFAAAOIgCA5IgCBPIAABKIABAPQACADADAAIAMgGIAWgSIAdgdQAIgJAAgEQAAgDgLgGQgLgGAAgJQAAgOAPgFQAQgFArAAQAcAAANAFQAOAGAAALQAAAOgWAGQgWAFgJAGQgLAGgZAZIgGAFIgKAMIgCAFQAAAGAaAjIADADIAzA/QAWAZALAJQAHAFAUAGQATAGABAMQAAANgOAGQgOAFghAAg");
	this.shape_3.setTransform(10.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AhaCVQgPgFAAgNQAAgKAOgGIAJgDQAHgEADgLQADgKAAgWIAAgVIAAgYIAAgRQAAg3gDgRQgCgQgHgEIgNgFQgSgGAAgKQAAgHAFgFQAFgFAOgGIApgNIAbgFQANAAAGApIABAGIABABQAQgYARgNQAQgNASAAQAUAAAMANQANAMAAAVQAAAVgJAMQgKAMgRAAIgPgDIgNgJIgHgLQgDgIgEAAQgUAAgIAdQgHAcAABbQAAAaACANQADANAJAEIAMAEQARAGABAMQAAALgRAFQgRAFgoAAQguAAgOgFg");
	this.shape_4.setTransform(-17.9,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("ABBCYQgEgFAAgJIAAgWIAAgBIgCAAQgDAAgIAHIgEAEQgOAPgSAHQgRAIgWAAQgXAAgUgJQgTgIgOgQQgOgRgGgYQgGgYAAhAIABgUIAAgWIAAgGQAAgZgDgHQgEgHgLgEIgMgDQgRgFAAgLQAAgHAGgFQAGgFAVgHIApgLIAggFQAIAAAEAGQADAGAAAOIAAALIgDBwQAAA9ANAXQAMAYAfAAQAhAAAPgfQAPgeAAhIIAAgYQAAgXgDgHQgEgHgKgEIgMgDQgRgFAAgLQAAgHAGgFQAGgFAVgHIAogLIAfgFQAKAAADAGQAEAFAAAPIgBAQIgDB7IAAAzIACAUQACAMAQAGIAAAAIAGACQARAGAAAKQAAAGgGAGQgFAEgNAGIgrANQgUAGgLAAQgJAAgEgFg");
	this.shape_5.setTransform(-48.3,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("Ag/DVQgQgFgBgNQABgMAPgHQARgFACgFQAEgFACgyIACiNIgBhPIgDgwQAAgIgGgDQgFgCgMAAIgOAAQgUAAgLAEQgMAGgIALIgKAUIgIAVIgJAJQgGADgFAAQgJABgEgJQgEgHAAgTQAAgnAJgZQAKgYAOAAIAEAAQAXAFAkAAICwAAQAkAAAZgFIADAAQAPAAAJAYQAJAZAAAnQAAATgEAHQgFAJgJgBIgKgDIgIgJIgJgVIgKgUQgIgLgMgGQgMgEgUAAIgNAAQgMAAgFACQgFADgBAIIgDAxIgBBOIACCNQABAyAEAFQADAFAQAFQAQAHAAAMQAAANgRAFQgQAFgvAAQguAAgRgFg");
	this.shape_6.setTransform(-85.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.turkey, new cjs.Rectangle(-106.8,-37.6,213.7,75.3), null);


(lib.stuffing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
	this.shape.setTransform(105.1,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AhvDEQgmgXAAghQAAgPAIgKQAIgKARAAQAMAAAIAHQAGAHAEAOQAHAWATANQATAMAkAAQAoAAAbgPQAagQAAgWQAAgPgKgHQgKgIgTAAIgjACIgtADQg1AAgdgSQgdgTAAgXQAAgQAKgOQALgOAWgNQgSgPgJgTQgJgUABgXQAAgxAkggQAlghA4AAIAgADIAuAJQALAAANgFQANgGASgNIAKAJIADAKQABANgKAMQgKAMgRAJIAJAYIADAZQAAAxgkAgQgkAeg7AAIgfgCIgdgHIgJAMIgEALQAAAOAPAHQAOAHAeAAIAtgDIAvgEQApAAAXARQAWARAAAgQAAAwgvAgQgvAfhHAAQg6AAgmgXgAgxiUQgQATAAAeQAAAeAPATQAQATAZAAQAYAAAQgTQARgTAAgeQAAgfgQgTQgQgTgZAAQgYAAgQAUg");
	this.shape_1.setTransform(82.1,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AiTCVQgPgFAAgNQAAgKAPgGIAHgDQAIgEADgLQAEgKAAgWIgBgVIAAgYIAAgeQAAgvgCgPQgDgOgGgDIgOgFQgSgGAAgKQAAgHAGgFQAFgFANgGIAsgNIAfgGQAIAAAEAFQADAEAAAKIAAAUIABADIACABIACAAIABgBIAHgGIAGgGQAggfAlAAQAWAAAUAKQAUAJAOAQQAOARAGAWQAFAXAAAwIAAAoIAAAUIAAARQAAAVADAJQADAJAHAEIAIADQAPAGAAAKQAAANgOAEQgOAFguAAQgqAAgOgEQgPgFAAgLQAAgMAPgFIAMgFQAHgEACgNQADgNAAghQAAhegMgZQgMgYggAAQgPAAgOAKQgPAJgIARQgGANgDAXQgDAXAAA7QAAAdADAKQACAJAHAEIALAFQAPAFAAAMQAAALgPAFQgOAFgoAAQgtAAgPgFg");
	this.shape_2.setTransform(47.2,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("Ag1DWQgOgFAAgNQAAgKAOgFIAHgEQAIgEAEgKQADgKAAgXIAAgUIAAgYIAAgfQgBgwgCgNQgDgOgFgEIgPgFQgRgGgBgKQABgGAFgFQAGgGANgFIAtgOIAfgGQAIAAAEAGQADAFAAAOIAAASIAAANIgDBMIAAACIgBBKQAAAcADAMQACAMAHADIALAFQAQAGAAALQgBAMgPAFQgOAEgoAAQgsAAgPgFgAgliXQgNgKABgQQAAgRAOgMQAOgMAUAAQASAAAOALQAMALAAAQQAAARgNALQgPAMgTAAQgUAAgNgLg");
	this.shape_3.setTransform(20.7,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AhUDXQgPgFAAgLQAAgKAPgFIAHgDQAHgFADgJQADgKAAgaIAAgcIAAiQIgiAAQgGgBgDgDQgDgDAAgJIAAgHQAAgHADgDQADgEAHABIAgAAIgDgZIgCgUQAAguAcgZQAcgaAwAAQAiAAAWAQQAVAPAAAXQAAAPgHAHQgIAIgPgBQgKABgHgFQgIgEgFgIIgGgLQgKgWgSABQgLAAgGAHQgHAHgBAMIAIAiQAFAZABAWIAsAAQAHgBADADQACADAAAIIAAAHQAAAJgCADQgEADgGABIgrAAIAACZQgBAmADAMQACAMAGADIAMAFQARAFAAANQAAALgOAEQgPAFgrAAQgrAAgPgFg");
	this.shape_4.setTransform(6.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AhUDXQgPgFAAgLQAAgKAOgFIAIgDQAHgFADgJQADgKAAgaIAAgcIAAiQIghAAQgIgBgCgDQgDgDAAgJIAAgHQAAgHADgDQADgEAHABIAfAAIgCgZIgBgUQAAguAcgZQAagaAxAAQAiAAAWAQQAVAPAAAXQAAAPgIAHQgHAIgPgBQgKABgHgFQgIgEgFgIIgFgLQgMgWgRABQgMAAgFAHQgIAHABAMIAGAiQAHAZAAAWIArAAQAIgBADADQADADAAAIIAAAHQgBAJgDADQgCADgIABIgrAAIAACZQAAAmADAMQACAMAGADIAMAFQASAFAAANQAAALgPAEQgPAFgqAAQgtAAgOgFg");
	this.shape_5.setTransform(-10.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("ABBCYQgEgFAAgJIAAgWIAAgBIgCAAQgDAAgIAHIgEAEQgOAPgSAHQgRAIgWAAQgXAAgUgJQgTgIgOgQQgOgRgGgYQgGgYAAhAIABgUIAAgWIAAgGQAAgZgDgHQgEgHgLgEIgMgDQgRgFAAgLQAAgHAGgFQAGgFAVgHIApgLIAggFQAIAAAEAGQADAGAAAOIAAALIgDBwQAAA9ANAXQAMAYAfAAQAhAAAPgfQAPgeAAhIIAAgYQAAgXgDgHQgEgHgKgEIgMgDQgRgFAAgLQAAgHAGgFQAGgFAVgHIAogLIAfgFQAKAAADAGQAEAFAAAPIgBAQIgDB7IAAAzIACAUQACAMAQAGIAAAAIAGACQARAGAAAKQAAAGgGAGQgFAEgNAGIgrANQgUAGgLAAQgJAAgEgFg");
	this.shape_6.setTransform(-39.9,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AgQC0QgPgFgKgJQgLgKgEgRQgFgQAAgtIAAigIgbAAIgJgDIgCgHIAAgIQAAgJAfgbIAMgLIAMgKQAfgbALAAIAJACQADADAAAEIAAA5IBEAAQAHAAADACQADADAAAJIAAAHQAAAIgDADQgEAEgGAAIg+AAIgFACIgCAHIAACUQAAAnAHAKQAGAKASAAQAJAAAPgFIAVgFQAGAAAFAEQAEAEAAAGQAAAQgZAQQgaAPggAAQgSAAgPgFg");
	this.shape_7.setTransform(-68,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AhKDZQghgIgVgMQgMgHgIgaQgIgaAAghQAAgOAFgHQAGgIAJAAQAOAAAPAbIAHANQATAhAXAPQAXAPAeAAQAhAAAXgTQAWgTAAgdQAAgqhYgnIgKgEQhIgfgYgaQgYgbAAgqQAAg2AogjQAngjBAAAIAjAEIApAJIAMgIIAKgDQAIAAAGAFQAFAFAHALQAKASAGAUQAGAUAAAPQAAAKgFAFQgFAGgIAAQgQAAgPgWIgFgGQgRgWgUgKQgTgLgZAAQghAAgUAQQgTAPAAAbQAAAZAQAQQAQAQBAAcIAMAFQA2AXAYAUQAQAPAJAVQAJAUAAAYQAAA9grAjQgrAihMAAQgkAAghgHg");
	this.shape_8.setTransform(-96.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stuffing, new cjs.Rectangle(-115.6,-37.6,231.2,75.3), null);


(lib.sides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
	this.shape.setTransform(72.4,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgWCcIgggGIgJAGIgKACIgGgCIgGgEQgKgIgIgYQgJgZAAgWQAAgJAFgHQAFgGAIAAQAOAAAOAYIALASQAJAMAQAHQAPAHARAAQAUAAAMgKQALgKAAgRQAAgZgxgYIgSgJQgugXgRgTQgQgTAAgdQAAgnAbgYQAbgZAsAAIAUABIAVAEIAOgGIAKgCQAOAAAOAYQAOAYAAAaQAAAKgEAGQgFAGgJAAQgHAAgGgFQgHgGgJgPQgLgSgMgHQgMgIgRAAQgQAAgLAKQgLAKAAAPQAAAOALALQALAKAlATIADACQBUAoAAAxQAAApggAdQghAcgwAAg");
	this.shape_1.setTransform(51,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AhhBxQgrgsAAhBQAAhFAsgtQAsgtBEgBQA5ABAjAgQAhAhAAA5QAAASgFAGQgGAGgWAAIhzAAQgKAAgFgFQgGgFABgIQgBgIAGgEQAFgFAKAAIA+AAIAPgCQAEgCAAgHQAAgdgTgTQgUgUgaAAQglAAgRAfQgRAgAAArQAAAuAXAiQAZAjAkgBQAXAAAPgEQAPgFAPgKIALgJQAPgMAIAAQAHAAAEAEQAFAFgBAFQABAIgIAKQgIALgNAKQgaAWgXAJQgZAJgcAAQg/AAgrgrg");
	this.shape_2.setTransform(22.4,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AiDC2QgjgpAAhBQAAhJAogtQApguBAAAIAVACQAJADAFAHQAFAHAAAHQAAAQgTAAIgJgBIgIAAQghAAgUAbQgUAbAAAvQAAAzAWAfQAWAgAhgBQAfABASgSQARgRAAghIAAhSIAAiLQAAgUgEgJQgEgIgLgEIgIgCQgTgFAAgLQAAgIAIgGQAHgFAXgJIAhgKIAcgDQAKAAAFAGQAEAGAAANIAAAPIgDC5IACB9QACAdAEAEIAVAHQAQADAAALQAAAOgrAOIgeAHIgXADQgJAAgDgEQgEgFAAgKIAAgOIgBgGIgBgCIgKAGIgNAKQgSAOgQAGQgRAGgTAAQg4AAgjgog");
	this.shape_3.setTransform(-10.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("Ag1DWQgPgFAAgNQAAgKAPgFIAIgEQAHgEADgKQAEgKAAgXIgBgUIAAgYIAAgfQAAgwgCgNQgDgOgGgEIgNgFQgTgGABgKQgBgGAGgFQAFgGANgFIAugOIAfgGQAIAAADAGQAEAFAAAOIAAASIAAANIgDBMIAAACIgBBKQAAAcACAMQADAMAHADIALAFQAPAGAAALQAAAMgOAFQgPAEgnAAQgtAAgPgFgAgkiXQgOgKAAgQQAAgRAPgMQAOgMAUAAQASAAANALQANALABAQQgBARgOALQgOAMgUAAQgTAAgMgLg");
	this.shape_4.setTransform(-37.7,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AhKDZQghgIgVgMQgMgHgIgaQgIgaAAghQAAgOAFgHQAGgIAJAAQAOAAAPAbIAHANQATAhAXAPQAXAPAeAAQAhAAAXgTQAWgTAAgdQAAgqhYgnIgKgEQhIgfgYgaQgYgbAAgqQAAg2AogjQAngjBAAAIAjAEIApAJIAMgIIAKgDQAIAAAGAFQAFAFAHALQAKASAGAUQAGAUAAAPQAAAKgFAFQgFAGgIAAQgQAAgPgWIgFgGQgRgWgUgKQgTgLgZAAQghAAgUAQQgTAPAAAbQAAAZAQAQQAQAQBAAcIAMAFQA2AXAYAUQAQAPAJAVQAJAUAAAYQAAA9grAjQgrAihMAAQgkAAghgHg");
	this.shape_5.setTransform(-63.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sides, new cjs.Rectangle(-82.9,-37.6,165.9,75.3), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBAIgfhmIgeBmIgTAAIglh/IATAAIAcBlIABAAIAehlIASAAIAdBlIABAAIAchlIATAAIgmB/g");
	this.shape.setTransform(47.7,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBCQgHgCgGgCQgMgFgKgJQgIgJgFgMQgGgMAAgPQAAgOAGgMQAFgNAIgJQAKgJAMgEQAGgDAHgBIANgBQAOAAANAFIAMAFIAJAIQAJAJAGANQAEAMAAAOQAAAPgEAMQgGAMgJAJQgEAEgFAEIgMAGQgNAFgOAAQgGAAgHgBgAgTgvQgJAFgGAHQgHAGgDAKQgDAJAAAKQAAAKADAKQADAJAHAHQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgHAEgJQADgKAAgKQAAgKgDgJQgEgKgGgGQgGgHgJgFQgJgEgLAAQgKAAgJAEg");
	this.shape_1.setTransform(31.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBAIhDhnIAABnIgSAAIAAh/IAXAAIBCBlIAAhlIASAAIAAB/g");
	this.shape_2.setTransform(16.6,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAh/IAqAAQAHAAAJACQAIACAGAEQAHAEADAHQAEAHAAAKQAAAOgJAIQgEAFgGABQgGADgGABIAjA7gAgbgHIAVAAIALgBIAJgDQAEgDACgEQADgEAAgFQAAgGgDgEQgCgEgEgCQgDgDgGgBIgKgBIgWAAg");
	this.shape_3.setTransform(0.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IBQAAIAAAQIg+AAIAAAmIA7AAIAAAOIg7AAIAAArIBBAAIAAAQg");
	this.shape_4.setTransform(-11,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BAIAAh/IAsAAQALAAAMAEQAMADAKAIQAKAIAGAMQADAGACAHQABAIAAAHQAAAIgBAHQgCAHgDAGIgHALIgJAJQgKAIgMAEQgPAEgIAAgAglAwIAWAAQALAAAJgDQAKgDAHgHQAHgGAEgJIADgJIABgLIgBgKIgDgKQgEgJgHgGQgHgGgKgDQgJgDgLAAIgWAAg");
	this.shape_5.setTransform(-23.2,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBAIgfg5IgTAAIAAA5IgSAAIAAh/IAoAAQAJAAAIACQAIACAHAEQAFAEAEAHQAEAHgBAKQAAAOgIAIQgEAFgGABQgGADgGABIAkA7gAgagHIAUAAIAKgBIAKgDQAEgDACgEQACgEAAgFQAAgGgCgEQgCgEgEgCQgDgDgGgBIgKgBIgVAAg");
	this.shape_6.setTransform(-35.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBCQgHgCgGgCQgMgFgKgJQgJgJgEgMQgGgMAAgPQAAgOAGgMQAEgNAJgJQAKgJAMgEQAGgDAHgBIANgBQAOAAANAFIAMAFIAJAIQAKAJAEANQAGAMgBAOQABAPgGAMQgEAMgKAJQgEAEgFAEIgMAGQgNAFgOAAQgHAAgGgBgAgTgvQgJAFgGAHQgGAGgEAKQgDAJAAAKQAAAKADAKQAEAJAGAHQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgHAEgJQADgKAAgKQAAgKgDgJQgEgKgGgGQgGgHgJgFQgJgEgLAAQgKAAgJAEg");
	this.shape_7.setTransform(-49,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-58.9,-13.3,118,26.6), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.kalelogobillboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(130.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgUgDgIgEQgJgFAAgNQAAgKAGgHQAFgHAJAAIARAAQAKAAAFgLQADgKgBgXIAAl5QABgXgDgKQgFgLgKAAIgRAAQgJAAgFgHQgGgHAAgKQAAgNAJgFQAIgEAUgDQBegNBrAAQBNAAA1ASQA1ASAnAoQAlAlAVA5QATA4AABEQAABNgZA9QgZA+gwAlQglAegvAOQgxAOhEAAQhrAAhegNgAgvjrQgcAFgKALQgKAMAAAhIAAFjQAAAhAVALQANAHAnADQBNAEAshAQAqg/ABhwQAAhwgrg/Qgrg/hKAAIgdADg");
	this.shape_1.setTransform(62.2,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(81.2,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(52.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(22.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBeIghgxQgFgJgKAAIgtAAQgEAAgDADQgDACgBAFIABAwQAAAHgKACIgPAAQgNAAAAgLIAAi6QAAgIAJAAIBrAAQAgAAAUASQAVAUgBAgQAAAXgOAPQgIAJgPAJQgHAIAEAFIAiAyQAFAHgFAFQgEAEgPAAQgRAAgFgJgAg5g4IAAAuQABAFAEADQAEACAFAAIA+AAQAQAAALgHQALgKAAgPQAAgRgLgJQgLgJgQAAIg+AAQgOAAAAALg");
	this.shape_5.setTransform(-11.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAgBABAAQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-44.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBlQgFgDAAgFIgOhrQgCgHgFAAQgDAAgDAEIgxA+QgEAFgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBpQgCAKgTAAQgGAAgFgCQgGgDAAgGIAVixQACgJADgCQAEgFALAAQAKAAAFAIIA4BPQAFAIAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAJIAVC1QABAKgXAAQgFAAgFgCg");
	this.shape_7.setTransform(-78.1,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(14.6,-54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDxQhFg2gYheIgBgDQgCgLgHABQgGgBgCALIgBABQgYBghGA2QhIA2hoAAQh+AAhMhQQhMhRAAiFQAAiGBMhRQBLhQCAAAQBpAABHA2QBHA3AXBgQACALAGgBQAHAAACgLIABAAQAXhgBGg2QBHg2BoAAQB/AABNBPQBMBQAACGQAACHhMBRQhNBQiBAAQhmAAhHg2gACniqQgpA/AABtQAABtApA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/gAmFiqQgoA/AABtQAABtAoA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/g");
	this.shape_9.setTransform(-21,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-98.4,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIQAKgHAIAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(110.1,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAIQgNAIgQABQgTgBgKgIQgLgKgJgYIimm+QgKgZgHgIQgHgHgUgFQgOgBgFgGQgFgFAAgKQAAgXAdAAICvAAQAcAAAAAXQAAAMgHAEQgHAFgRABQgOACgGAEQgGAFAAALQAAAIADALIBzFGQACAFAFAAQAEgBACgFIA/i1QAIgZgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgEgGgEQgFgGAAgJQAAgaAdAAICnAAQAdAAAAAXQAAATgcAFQgRABgFAFQgGAFAAALQAAALAIAZIBfEsQACAFAEAAQAFgBABgFIBdk6QAEgLAAgJQAAgTgdgDQgbgCAAgWQAAgMAHgGQAIgGARAAIElAAQAVAAAIAGQAIAFAAAOQAAAKgGAHQgGAHgJAAIgQAAQgLAAgFAKQgCAJAAAZIAABuQAAAdAFAHQAGAGAXAAIB0AAQAXAAAHgHQADgEAAgGIABgfIAAhoQAAgbgDgHQgFgKgKAAIgQAAQgKAAgHgHQgGgHAAgKQAAgOAIgFQAJgGAWAAICaAAQAWAAAJAGQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBADQgDAKAAAYIAAF8QAAAYADALQABADAFAEQAEACAEAAIASAAQAJAAAGAIQAHAGAAAKQAAAOgJAGQgIAEgXAAIiaAAQgWAAgIgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIAQAAQAKABAFgKQADgIAAgbIAAh8IgBgdQAAgHgDgDQgHgIgXAAIh0AAQgXAAgGAHQgFAGAAAeIAACAQAAAZACAKQAFAKALgBIAQAAQAJAAAGAIQAGAGAAALQAAANgIAGQgIAEgVAAIiaAAQgWAAgJgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIARAAQAEAAAFgCQAEgEABgDQADgIAAgbIAAl8QAAgwgkAEQgLABgHAJQgIAKgGAVIiHGzQgJAfgKAMQgLAKgTABQgTAAgLgKg");
	this.shape_12.setTransform(-74.6,-36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDACgEQADgIAAgXIAAmAQAAgZgDgHQgDgMgLAAIgRAAQgKABgGgHQgHgHAAgKQAAgOAJgFQAJgGAWAAICcAAQAWAAAJAGQAJAFAAAOQAAAKgGAHQgHAHgJgBIgSAAQgOAAgDAMQgDAFAAAbIAAFkQAAAdACAJQACAJAIAFQAGAFALABQALACAaAAIAwAAQAvAAAPggIAIgQQAIgPAPAAQAMgBAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(69.2,-37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgaAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(114.4,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZMQk7iEjyjzQjxjxiFk6QiKlGAAljQAAljCKlGQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE7CFDxDxQDyDzCFE6QCKFGAAFjQAAFjiKFGQiFE6jyDxQjxDzk7CEQlFCKlkAAQljAAlFiKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kalelogobillboard, new cjs.Rectangle(-175,-175,350,350), null);


(lib.holidaymainstable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.billboardholidaymainstable();
	this.instance.parent = this;
	this.instance.setTransform(-485,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymainstable, new cjs.Rectangle(-485,-125,970,250), null);


(lib.holidaymainsstuffing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.billboardholidaymainsstuffing();
	this.instance.parent = this;
	this.instance.setTransform(-124,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymainsstuffing, new cjs.Rectangle(-124,-62.5,248,125), null);


(lib.holidaymainsrolls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.billboardholidaymainsrolls();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymainsrolls, new cjs.Rectangle(-93.5,-110.5,187,221), null);


(lib.holidaymainspotatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardholidaymainspotatoes();
	this.instance.parent = this;
	this.instance.setTransform(-115,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymainspotatoes, new cjs.Rectangle(-115,-63,230,126), null);


(lib.holidaymainscranberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.billboardholidaymainscranberries();
	this.instance.parent = this;
	this.instance.setTransform(-94,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymainscranberries, new cjs.Rectangle(-94,-50.5,188,101), null);


(lib.holidaymainsbrusselsprouts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardholidaymainsbrusselsprouts();
	this.instance.parent = this;
	this.instance.setTransform(-106,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymainsbrusselsprouts, new cjs.Rectangle(-106,-77,215,212), null);


(lib.holidaymainsapples = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardapples();
	this.instance.parent = this;
	this.instance.setTransform(-107,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymainsapples, new cjs.Rectangle(-107,-52,214,104), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhLUgSvMCWpAAAMAAAAlfMiWpAAAg");
	this.shape.setTransform(0,0,1.005,1.037);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-485.5,-125.5,971,251), null);


(lib.desserts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
	this.shape.setTransform(115.7,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgWCcIgggGIgJAGIgKACIgGgCIgGgEQgKgIgIgYQgJgZAAgWQAAgJAFgHQAFgGAIAAQAOAAAOAYIALASQAJAMAQAHQAPAHARAAQAUAAAMgKQALgKAAgRQAAgZgxgYIgSgJQgugXgRgTQgQgTAAgdQAAgnAbgYQAbgZAsAAIAUABIAVAEIAOgGIAKgCQAOAAAOAYQAOAYAAAaQAAAKgEAGQgFAGgJAAQgHAAgGgFQgHgGgJgPQgLgSgMgHQgMgIgRAAQgQAAgLAKQgLAKAAAPQAAAOALALQALAKAlATIADACQBUAoAAAxQAAApggAdQghAcgwAAg");
	this.shape_1.setTransform(94.2,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AgQC0QgPgFgKgJQgLgKgEgRQgFgQAAgtIAAigIgbAAIgJgDIgCgHIAAgIQAAgJAfgbIAMgLIAMgKQAfgbALAAIAJACQADADAAAEIAAA5IBEAAQAHAAADACQADADAAAJIAAAHQAAAIgDADQgEAEgGAAIg+AAIgFACIgCAHIAACUQAAAnAHAKQAGAKASAAQAJAAAPgFIAVgFQAGAAAFAEQAEAEAAAGQAAAQgZAQQgaAPggAAQgSAAgPgFg");
	this.shape_2.setTransform(71,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AhbCVQgOgFAAgNQAAgKAOgGIAIgDQAIgEADgLQAEgKAAgWIgBgVIAAgYIAAgRQAAg3gDgRQgCgQgHgEIgNgFQgSgGAAgKQAAgHAFgFQAGgFANgGIAogNIAbgFQAPAAAEApIABAGIADABQAPgYAQgNQARgNASAAQAUAAANANQAMAMAAAVQAAAVgJAMQgKAMgRAAIgQgDIgMgJIgHgLQgDgIgEAAQgUAAgIAdQgIAcAABbQABAaACANQADANAJAEIALAEQATAGgBAMQAAALgQAFQgRAFgoAAQguAAgPgFg");
	this.shape_3.setTransform(49.4,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AhhBxQgrgsAAhBQAAhFAsgtQAsgtBDgBQA7ABAhAgQAiAhAAA5QAAASgGAGQgFAGgXAAIhyAAQgKAAgFgFQgFgFgBgIQABgIAFgEQAFgFAKAAIA+AAIAPgCQAEgCAAgHQAAgdgUgTQgTgUgbAAQgkAAgRAfQgSAgAAArQAAAuAZAiQAYAjAlgBQAWAAAPgEQAQgFAOgKIALgJQAPgMAIAAQAGAAAFAEQAEAFABAFQAAAIgIAKQgHALgNAKQgaAWgZAJQgYAJgdAAQg/AAgqgrg");
	this.shape_4.setTransform(21.4,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AgWCcIgggGIgJAGIgKACIgGgCIgGgEQgKgIgIgYQgJgZAAgWQAAgJAFgHQAFgGAIAAQAOAAAOAYIALASQAJAMAQAHQAPAHARAAQAUAAAMgKQALgKAAgRQAAgZgxgYIgSgJQgugXgRgTQgQgTAAgdQAAgnAbgYQAbgZAsAAIAUABIAVAEIAOgGIAKgCQAOAAAOAYQAOAYAAAaQAAAKgEAGQgFAGgJAAQgHAAgGgFQgHgGgJgPQgLgSgMgHQgMgIgRAAQgQAAgLAKQgLAKAAAPQAAAOALALQALAKAlATIADACQBUAoAAAxQAAApggAdQghAcgwAAg");
	this.shape_5.setTransform(-7.6,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AgWCcIgggGIgJAGIgKACIgGgCIgGgEQgKgIgIgYQgJgZAAgWQAAgJAFgHQAFgGAIAAQAOAAAOAYIALASQAJAMAQAHQAPAHARAAQAUAAAMgKQALgKAAgRQAAgZgxgYIgSgJQgugXgRgTQgQgTAAgdQAAgnAbgYQAbgZAsAAIAUABIAVAEIAOgGIAKgCQAOAAAOAYQAOAYAAAaQAAAKgEAGQgFAGgJAAQgHAAgGgFQgHgGgJgPQgLgSgMgHQgMgIgRAAQgQAAgLAKQgLAKAAAPQAAAOALALQALAKAlATIADACQBUAoAAAxQAAApggAdQghAcgwAAg");
	this.shape_6.setTransform(-33.5,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AhhBxQgrgsAAhBQAAhFAsgtQAsgtBEgBQA5ABAjAgQAhAhAAA5QAAASgGAGQgFAGgWAAIhzAAQgKAAgFgFQgGgFABgIQgBgIAGgEQAFgFAKAAIA+AAIAPgCQAEgCAAgHQAAgdgUgTQgTgUgaAAQglAAgRAfQgRAgAAArQAAAuAYAiQAYAjAkgBQAXAAAPgEQAPgFAPgKIALgJQAPgMAIAAQAHAAAEAEQAFAFgBAFQABAIgIAKQgHALgOAKQgZAWgYAJQgZAJgcAAQhAAAgqgrg");
	this.shape_7.setTransform(-62.1,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AhBDZIglgBIgZAAIgZABQglgBgLgEQgMgFAAgNQAAgLAQgHQAQgFADgFQAEgGADguIACh0IgDhuQgDgugDgGQgDgEgQgGQgQgHAAgMQAAgMANgFQAMgFAkAAIAaABIAfABIAngCIAigBQBwAAA9A6QA9A6AABpQAABpg/A2Qg+A1h3AAgAhCiqQgNAFgEAJQgEAMgCAiIgCBcIACByQADAuADALQADAIAUAHQAUAGAbAAQBFAAAigpQAjgqAAhUQAAhYgogvQgngvhKAAQgYABgOAEg");
	this.shape_8.setTransform(-101.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.desserts, new cjs.Rectangle(-126.1,-37.6,252.4,75.3), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AsdDGIAAmLIY7AAIAAGLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-79.7,-19.7,159.6,39.6), null);


(lib.cta_rollovervideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("ArtCiIAAlEIXbAAIAAFEg");
	this.shape.setTransform(0,0,1.197,1.369);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_rollovervideo, new cjs.Rectangle(-89.8,-22.2,179.6,44.5), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.cta_rollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// Layer 1
	this.instance = new lib.cta_rollovervideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.8,-22.2,179.6,44.5);


// stage content:
(lib.billboardholidaymains = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_220 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(201).call(this.frame_220).wait(3));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(486.2,125.3,4.708,0.381,0,0,0,0.3,0.8);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(223));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(223));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(486.8,125.1,5.906,0.417,0,0,0,0.4,0.2);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.4,x:488.7,alpha:0},9).wait(214));

	// kale-logo
	this.instance_2 = new lib.kalelogobillboard();
	this.instance_2.parent = this;
	this.instance_2.setTransform(851.9,50.7,0.367,0.367,0,0,0,0.2,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01},0).to({regX:0.4,regY:0.1,scaleX:0.47,scaleY:0.47,x:852,alpha:1},6).to({regY:0.2,scaleX:0.41,scaleY:0.41},7).wait(201));

	// Desserts
	this.instance_3 = new lib.desserts();
	this.instance_3.parent = this;
	this.instance_3.setTransform(263,122.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(137).to({alpha:1},10).wait(30).to({alpha:0},5).wait(41));

	// Sides
	this.instance_4 = new lib.sides();
	this.instance_4.parent = this;
	this.instance_4.setTransform(219.8,122.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97).to({alpha:1},10).wait(30).to({alpha:0},5).wait(81));

	// stuffing
	this.instance_5 = new lib.stuffing();
	this.instance_5.parent = this;
	this.instance_5.setTransform(252.5,122.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({alpha:1},10).wait(30).to({alpha:0},5).wait(121));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4QAiOMAAAhEbMB1aAAAMAAABEbg");
	mask.setTransform(391.4,104.1);

	// turkey
	this.instance_6 = new lib.turkey();
	this.instance_6.parent = this;
	this.instance_6.setTransform(243.7,122.3);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({x:-106.3},0).to({x:253.7,alpha:1},10,cjs.Ease.get(1)).to({x:243.7},8,cjs.Ease.get(1)).wait(30).to({alpha:0},5).wait(161));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg4QAiOMAAAhEbMB1aAAAMAAABEbg");
	mask_1.setTransform(391.4,104.1);

	// well-make-the-feast
	this.instance_7 = new lib.wellmakethefeast();
	this.instance_7.parent = this;
	this.instance_7.setTransform(157.9,68.7);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(187).to({x:-136.1},0).to({x:177.9,alpha:1},10,cjs.Ease.get(1)).to({x:157.9},8,cjs.Ease.get(1)).wait(18));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg4QAiOMAAAhEbMB1aAAAMAAABEbg");
	mask_2.setTransform(391.4,104.1);

	// you take the credit
	this.instance_8 = new lib.youtakethecredit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(175.8,147.9);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(197).to({x:-158.2},0).to({x:195.8,alpha:1},13,cjs.Ease.get(1)).to({x:175.8},8,cjs.Ease.get(1)).wait(5));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Eg4QAiOMAAAhEbMB1aAAAMAAABEbg");
	mask_3.setTransform(391.4,104.1);

	// well-make-the
	this.instance_9 = new lib.wellmakethe();
	this.instance_9.parent = this;
	this.instance_9.setTransform(186.4,89.7);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({x:-163.6},0).to({x:196.4,alpha:1},10,cjs.Ease.get(1)).to({x:186.4},8,cjs.Ease.get(1)).wait(150).to({alpha:0},5).wait(41));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgzRAiOMAAAhEbMBwcAAAMAAABEbg");
	mask_4.setTransform(391.5,104.1);

	// order-now
	this.instance_10 = new lib.ordernow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(122,201.7);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({x:-88},0).to({x:142,alpha:1},10,cjs.Ease.get(1)).to({x:122},8,cjs.Ease.get(1)).wait(186));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ap/ReIAAm9IcCAAIAAG9g");
	mask_5.setTransform(115.6,111.8);

	// cta_rollover
	this.cta_rollover = new lib.cta_rollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(121.4,201.4);

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(19).to({x:-88.7,alpha:0},0).to({x:141.4,alpha:1},10,cjs.Ease.get(1)).to({x:121.4},8,cjs.Ease.get(1)).wait(186));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Eg4QAiOMAAAhEbMB1aAAAMAAABEbg");
	mask_6.setTransform(391.4,104.1);

	// cta-rectangle
	this.instance_11 = new lib.ctarectangle();
	this.instance_11.parent = this;
	this.instance_11.setTransform(121.3,201.3,1.125,1.125);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({x:-88.7},0).to({x:141.3,alpha:1},10,cjs.Ease.get(1)).to({x:121.3},8,cjs.Ease.get(1)).wait(186));

	// cinnamon-rolls
	this.instance_12 = new lib.holidaymainsrolls();
	this.instance_12.parent = this;
	this.instance_12.setTransform(876.5,110.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({alpha:1},10).wait(179));

	// stuffing
	this.instance_13 = new lib.holidaymainsstuffing();
	this.instance_13.parent = this;
	this.instance_13.setTransform(529,62.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({alpha:1},10).wait(184));

	// cranberries
	this.instance_14 = new lib.holidaymainscranberries();
	this.instance_14.parent = this;
	this.instance_14.setTransform(846,199.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({alpha:1},10).wait(189));

	// brussel-sprouts
	this.instance_15 = new lib.holidaymainsbrusselsprouts();
	this.instance_15.parent = this;
	this.instance_15.setTransform(662,123);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({alpha:1},10).wait(194));

	// potatoes
	this.instance_16 = new lib.holidaymainspotatoes();
	this.instance_16.parent = this;
	this.instance_16.setTransform(475,187);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({alpha:1},10).wait(199));

	// apple
	this.instance_17 = new lib.holidaymainsapples();
	this.instance_17.parent = this;
	this.instance_17.setTransform(281,198);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(9).to({alpha:1},10).wait(204));

	// table
	this.instance_18 = new lib.holidaymainstable();
	this.instance_18.parent = this;
	this.instance_18.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(223));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.6,111.5,970.4,271.5);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/billboardholidaymainstable.jpg", id:"billboardholidaymainstable"},
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"}
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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;