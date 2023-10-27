// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: ??on:off_coohome-74B.ggsk
// Generated 2023-10-27T14:24:40

function pano2vrSkin(player,base) {
	player.addVariable('vis_catagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type', 1, 135.00, { ignoreInState: 0  });
	player.addVariable('vis_mobilecatagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobiletype', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hambegur', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_gagu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_gaguNo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_gagu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_6', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_6', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_7', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roombutton_8', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__76=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__76.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemenu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__76.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__76.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__76.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__76.ggCurrentLogicStatePosition == 0) {
					me.__76.style.left='10px';
					me.__76.style.top='30px';
				}
				else {
					me.__76.style.left='10px';
					me.__76.style.top='177px';
				}
			}
		}
		me.__76.logicBlock_position();
		me.__76.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__76.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__76.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__76.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__76.ggCurrentLogicStateVisible == 0) {
					me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
					me.__76.ggVisible=true;
				}
				else if (me.__76.ggCurrentLogicStateVisible == 1) {
					me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
					me.__76.ggVisible=true;
				}
				else if (me.__76.ggCurrentLogicStateVisible == 2) {
					me.__76.style.visibility="hidden";
					me.__76.ggVisible=false;
				}
				else {
					me.__76.style.visibility="hidden";
					me.__76.ggVisible=false;
				}
			}
		}
		me.__76.logicBlock_visible();
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uba54\ub274 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__77.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__77.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__77.style.transition='';
				if (me.__77.ggCurrentLogicStateVisible == 0) {
					me.__77.style.visibility="hidden";
					me.__77.ggVisible=false;
				}
				else {
					me.__77.style.visibility=(Number(me.__77.style.opacity)>0||!me.__77.style.opacity)?'inherit':'hidden';
					me.__77.ggVisible=true;
				}
			}
		}
		me.__77.logicBlock_visible();
		me.__77.onclick=function (e) {
			player.setVariableValue('vis_mobilecatagory', !player.getVariableValue('vis_mobilecatagory'));
			player.setVariableValue('vis_mobiletype', false);
			player.setVariableValue('vis_hambegur', false);
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._location=document.createElement('div');
		els=me._location__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Location";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.784314);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._location.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Location<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._location.ggUpdateText();
		el.appendChild(els);
		me._location.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._location.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._location);
		el=me.__79=document.createElement('div');
		els=me.__79__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \uce35\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 96.9388%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__79.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__79.ggUpdateText();
		player.addListener('changenode', function() {
			me.__79.ggUpdateText();
		});
		el.appendChild(els);
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me.__79);
		me.__77.appendChild(me._container_4);
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
		els=me.__78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__78.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		player.addListener('changenode', function() {
			me.__78.ggUpdateText();
		});
		el.appendChild(els);
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me.__78);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABUlJREFUeF7tnTvoHUUYxc9J1ESITwQjvkFIFwI2iqgEksoinWAp+AAVCxFCsBREtAghwRdobSnBUkVTqIUgdmKlAUUUX/GBMZgjY/av93//9+58s3fu7uzOt+2e/Wbm/ObbuTO7O5fwoygHWFRtvDJwIIV1AgfiQApzoLDqeIY4kMIcKKw6niE9AZEkklG/o4Ke6jvZYiT9AuDy0EAHMiBmSZcC+GO2Cg5kICDh9rSoaAfSMxBJdwM4taxYB9IjkGVZ4besHiGEoiSdAPC4pVjPEItLK2gsWeEZsoLB1kslnQZwo1W/ofMMSXUsope0A8CfHcOGieG22LU+MYw51JyX9BeAi43yRbJzJC+JXe9A4lmxB8DnMSMN58+QvCKmcy'+
			'AtDqUO2hGzPyZ5pwOJObDgvKQnARzrcGnbJS+QPByL6Rky51DmrJiN/gDJNx1IzIH/B+0PANxjlHeR7SH5RexCz5ALs+2Fi4Ex8xLP7yAZfqm1HlUDkfQjgKtiJuU4b5kUhnKqBCLpSgA/5TDaGsOBLHFK0vkhOqID2frr6T4Ab1t7dG6dA5lxtKdBu32wNrzgMPkxRNJbAA7l7u1d4lWdIeGNGwBhrCjmqBaIpB8AXF0MiaYi1QFZ8VnF2vlVBaSEQTtGtAogku4F8H7MjBLOTx7IGLJitiNMFoik1wA8XEKvT6jDdySvtehHtZY1tqyYAfAOyYOTASLpWwCmHmZp9ACaoySfspRbdIZIugjAOUtDCtccInnSUsdigQy1KmsxrYPmOpIhy6NHcUAk7QPwabTm4xJsJ2layikKyIgH7Vj32EbS9Ji4CCCSXgTwdKxV'+
			'Yz1vnYOE9g0OZMJZ8V//GQUQSd8DuGasvT6l3kUDKX1VNsVoq7ZYIJL+BhB9Jd/a0LHoigMiKdcb5GNhsKmeRQGpYdCO9ZIigEh6AsDxWGVrOD84EM+Kzd1sMCCS3gOwv4Zen9LG3oGU+NpNimFr1p4ludNaxsoz9VJfu7Ea0IPuS5K3WsvpDETSZQDOWAuqWGd+Wth5LavWCV7HTvU8ySPWa5MyRNIdAD6yBnfdvw4cIPmu1QszEP8pa7V0i+56kt9Yr44CkfQGgAetAV23xYFdJH+3+tIKxLPCamOrzvy0cOmg3nW3myzVn1iQlEnhFiATeu2mGKwrAZlvhaTtAO4H8DKA6MYpxbhQUEWyArG2qwEX9gZ5rITn9NZ696EbBIi1YZJuA/ASgPAZQXTvKGvcknVFA7EaJ+kuAM9OYeV4EkAs4JofIHsBhC9tk/c/tJ'+
			'SRQ1MNkGVmDbFtRhu46oFsmFPKpNaBzHTXAqCYdiKdzbDoWlaO++iQMSSFDSzDa0hDHL+RDM+NzMfkgQQnJO0C8KvZlXzC0yRvTglXBZABx5Wkp4WhnlUBabLF9J1GSq9u0T5D8rmUWNUBaaB8CCC6h26KkUu0+0kmbWxQJZAGSh8flN5C8qsUsNUC6Wlc2UnyrANJcWCN28SmTgqrHNSXsZL0KoBHElm2yh1IBjdzzu4dSAYgOX8aO5BMQHJBcSAZgTRQHgXwStewDqSrc5Hruo4rDmRNQLrewhzIGoE0UJI+63YgawbSQLkdwCeWohyIxaVMGsO4cp5keNEw6ah+LSvJrTlxBErSt4UboR3IKkQurIOFP4YJfxAzf3xN8obU8A4k1bEFekk3AZhfZj9JMvmfGRxIBiAbIeZuYQ+RfD01vANJdcw+idxH8rPU8A4k'+
			'1TGDvvngaS/Jnw3yTRIHkuqYUS9pt3Vr2NmQDsRocF8yB9KX08ZyHIjRqL5kDqQvp43l/APOeYp0rt1mtgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 8px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((8px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._image_11);
		me.__77.appendChild(me._container_5);
		me.__76.appendChild(me.__77);
		me.divSkin.appendChild(me.__76);
		el=me.__74=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__74.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__74.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__74.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__74.style.transition='';
				if (me.__74.ggCurrentLogicStateVisible == 0) {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
				else if (me.__74.ggCurrentLogicStateVisible == 1) {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
				else {
					me.__74.style.visibility="hidden";
					me.__74.ggVisible=false;
				}
			}
		}
		me.__74.logicBlock_visible();
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		el=me.__75=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74amoff=document.createElement('div');
		els=me.__74amoff__img=document.createElement('img');
		els.className='ggskin ggskin__74amoff';
		hs=basePath + 'images/_74amoff.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="74A-m-off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 72%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__74amoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74amoff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.information) == "74A")) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__74amoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__74amoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__74amoff.style.transition='';
				if (me.__74amoff.ggCurrentLogicStateVisible == 0) {
					me.__74amoff.style.visibility=(Number(me.__74amoff.style.opacity)>0||!me.__74amoff.style.opacity)?'inherit':'hidden';
					me.__74amoff.ggVisible=true;
				}
				else {
					me.__74amoff.style.visibility="hidden";
					me.__74amoff.ggVisible=false;
				}
			}
		}
		me.__74amoff.logicBlock_visible();
		me.__74amoff.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__74amoff);
		el=me.__74amon=document.createElement('div');
		els=me.__74amon__img=document.createElement('img');
		els.className='ggskin ggskin__74amon';
		hs=basePath + 'images/_74amon.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="74A-m-on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 72%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__74amon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74amon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.information) == "74A")) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__74amon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__74amon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__74amon.style.transition='';
				if (me.__74amon.ggCurrentLogicStateVisible == 0) {
					me.__74amon.style.visibility=(Number(me.__74amon.style.opacity)>0||!me.__74amon.style.opacity)?'inherit':'hidden';
					me.__74amon.ggVisible=true;
				}
				else {
					me.__74amon.style.visibility="hidden";
					me.__74amon.ggVisible=false;
				}
			}
		}
		me.__74amon.logicBlock_visible();
		me.__74amon.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__74amon);
		el=me.__mobile=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ucee8\ud14c\uc774\ub108-mobile";
		el.ggDx=15;
		el.ggDy=52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72.2581%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 15px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.2581% + 0px) / 2) + 52px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._onmobile=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4on-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onmobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._onmobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onmobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onmobile.style.transition='';
				if (me._onmobile.ggCurrentLogicStateVisible == 0) {
					me._onmobile.style.visibility=(Number(me._onmobile.style.opacity)>0||!me._onmobile.style.opacity)?'inherit':'hidden';
					me._onmobile.ggVisible=true;
				}
				else {
					me._onmobile.style.visibility="hidden";
					me._onmobile.ggVisible=false;
				}
			}
		}
		me._onmobile.logicBlock_visible();
		me._onmobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1mobile=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1mobile.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_1mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1mobile.ggRadar) me._map_1mobile.ggRadar.update();
		}
		me._map_1mobile.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1mobile.ggMarkerInstances.length; i++) {
				me._map_1mobile.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1mobile.ggUpdateConditionResize();
		}
		me._onmobile.appendChild(me._map_1mobile);
		me.__mobile.appendChild(me._onmobile);
		el=me._offmobile=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4off-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._offmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._offmobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._offmobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._offmobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._offmobile.style.transition='';
				if (me._offmobile.ggCurrentLogicStateVisible == 0) {
					me._offmobile.style.visibility=(Number(me._offmobile.style.opacity)>0||!me._offmobile.style.opacity)?'inherit':'hidden';
					me._offmobile.ggVisible=true;
				}
				else {
					me._offmobile.style.visibility="hidden";
					me._offmobile.ggVisible=false;
				}
			}
		}
		me._offmobile.logicBlock_visible();
		me._offmobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_2mobile=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2mobile.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_2mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2mobile.ggRadar) me._map_2mobile.ggRadar.update();
		}
		me._map_2mobile.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2mobile.ggMarkerInstances.length; i++) {
				me._map_2mobile.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2mobile.ggUpdateConditionResize();
		}
		me._offmobile.appendChild(me._map_2mobile);
		me.__mobile.appendChild(me._offmobile);
		me.__75.appendChild(me.__mobile);
		me.__74.appendChild(me.__75);
		me.divSkin.appendChild(me.__74);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__73=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 12%;';
		hs+='height : 50%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='text-shawdow:2px 2px 2px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__73.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__73.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__73.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__73.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me.__73.ggCurrentLogicStatePosition == 0) {
					me.__73.style.left='3px';
					me.__73.style.bottom='0%';
				}
				else {
					me.__73.style.left='25px';
					me.__73.style.bottom='12%';
				}
			}
		}
		me.__73.logicBlock_position();
		me.__73.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__73.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__73.ggCurrentLogicStateSize = newLogicStateSize;
				me.__73.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me.__73.ggCurrentLogicStateSize == 0) {
					me.__73.style.width='95%';
					me.__73.style.height='100%';
					skin.updateSize(me.__73);
				}
				else if (me.__73.ggCurrentLogicStateSize == 1) {
					me.__73.style.width='95%';
					me.__73.style.height='100%';
					skin.updateSize(me.__73);
				}
				else {
					me.__73.style.width='100%';
					me.__73.style.height='50%';
					skin.updateSize(me.__73);
				}
			}
		}
		me.__73.logicBlock_size();
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me.__610=document.createElement('div');
		els=me.__610__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b86";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='bottom : 0%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='cursor : default;';
		hs+='height : 30%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em; word-break: keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__610.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ud55c \uc138\ub300 VR\uc774\uba70, \ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c\ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc0c9\uc0c1 \ubc0f \uc7ac\uc9c8\uc774 \uc2e4\uc81c \uc2dc\uacf5\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5c8\uace0, \uc2e4\uc81c \uc2dc\uacf5 \uc2dc \uc124\uce58\ub418\uc9c0 \uc54a\ub294 \uc804\uc2dc\ud488(\uac00\uad6c, \uc2e4\ub0b4\uc7a5\uc2dd\ud488 \ub4f1)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uae09\uc548\ub0b4\ubb38\uacfc \ub0b4\ubd80\ub9c8\uac10\uc7ac \ub0b4\uc5ed\uc744 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__610.ggUpdateText();
		el.appendChild(els);
		me.__610.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__610.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__610.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__610.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__610.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__610.ggCurrentLogicStatePosition == 0) {
					me.__610.style.left='0%';
					me.__610.style.bottom='0%';
				}
				else if (me.__610.ggCurrentLogicStatePosition == 1) {
					me.__610.style.left='0%';
					me.__610.style.bottom='0%';
				}
				else {
					me.__610.style.left='0%';
					me.__610.style.bottom='0%';
				}
			}
		}
		me.__610.logicBlock_position();
		me.__610.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__610.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__610.ggCurrentLogicStateSize = newLogicStateSize;
				me.__610.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__610.ggCurrentLogicStateSize == 0) {
					me.__610.style.width='100%';
					me.__610.style.height='20%';
					skin.updateSize(me.__610);
				}
				else {
					me.__610.style.width='90%';
					me.__610.style.height='30%';
					skin.updateSize(me.__610);
				}
			}
		}
		me.__610.logicBlock_size();
		me.__610.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__610.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__610.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__610.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__610.ggCurrentLogicStateVisible == 0) {
					me.__610.style.visibility=(Number(me.__610.style.opacity)>0||!me.__610.style.opacity)?'inherit':'hidden';
					me.__610.ggVisible=true;
				}
				else if (me.__610.ggCurrentLogicStateVisible == 1) {
					me.__610.style.visibility=(Number(me.__610.style.opacity)>0||!me.__610.style.opacity)?'inherit':'hidden';
					me.__610.ggVisible=true;
				}
				else {
					me.__610.style.visibility="hidden";
					me.__610.ggVisible=false;
				}
			}
		}
		me.__610.logicBlock_visible();
		me.__610.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__610.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__610.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__610.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__610.ggCurrentLogicStateTextColor == 0) {
					me.__610.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__610.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__610.logicBlock_textcolor();
		me.__610.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__610);
		el=me.__pc=document.createElement('div');
		els=me.__pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 - pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -18%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% + 2px);';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em;word-break: keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ud55c \uc138\ub300 VR\uc774\uba70, \ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c\ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc0c9\uc0c1 \ubc0f \uc7ac\uc9c8\uc774 \uc2e4\uc81c \uc2dc\uacf5\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5c8\uace0, \uc2e4\uc81c \uc2dc\uacf5 \uc2dc \uc124\uce58\ub418\uc9c0 \uc54a\ub294 \uc804\uc2dc\ud488(\uac00\uad6c, \uc2e4\ub0b4\uc7a5\uc2dd\ud488 \ub4f1)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uae09\uc548\ub0b4\ubb38\uacfc \ub0b4\ubd80\ub9c8\uac10\uc7ac \ub0b4\uc5ed\uc744 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__pc.ggUpdateText();
		el.appendChild(els);
		me.__pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__pc.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__pc.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__pc.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__pc.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStatePosition == 0) {
					me.__pc.style.left='0%';
					me.__pc.style.bottom='-30%';
				}
				else {
					me.__pc.style.left='0%';
					me.__pc.style.bottom='-18%';
				}
			}
		}
		me.__pc.logicBlock_position();
		me.__pc.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__pc.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__pc.ggCurrentLogicStateSize = newLogicStateSize;
				me.__pc__text.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateSize == 0) {
					me.__pc__text.style.width='100%';
					me.__pc__text.style.height='25%';
					skin.updateSize(me.__pc);
				}
				else {
					me.__pc__text.style.width='calc(100% + 2px)';
					me.__pc__text.style.height='auto';
					skin.updateSize(me.__pc);
				}
			}
		}
		me.__pc.logicBlock_size();
		me.__pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__pc.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateVisible == 0) {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
				else if (me.__pc.ggCurrentLogicStateVisible == 1) {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
				else {
					me.__pc.style.visibility=(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity)?'inherit':'hidden';
					me.__pc.ggVisible=true;
				}
			}
		}
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__pc.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__pc.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__pc__text.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateTextColor == 0) {
					me.__pc.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__pc.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__pc.logicBlock_textcolor();
		me.__pc.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__pc);
		me.divSkin.appendChild(me.__73);
		el=me.__39=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 590px;';
		hs+='position : absolute;';
		hs+='right : 2.5%;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__39.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__39.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__39.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__39.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__39.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__39.ggCurrentLogicStatePosition == 0) {
					me.__39.style.right='3%';
					me.__39.style.top='23%';
				}
				else {
					me.__39.style.right='2.5%';
					me.__39.style.top='15%';
				}
			}
		}
		me.__39.logicBlock_position();
		me.__39.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__39.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__39.ggCurrentLogicStateSize = newLogicStateSize;
				me.__39.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__39.ggCurrentLogicStateSize == 0) {
					me.__39.style.width='68px';
					me.__39.style.height='465px';
					skin.updateSize(me.__39);
				}
				else {
					me.__39.style.width='85px';
					me.__39.style.height='590px';
					skin.updateSize(me.__39);
				}
			}
		}
		me.__39.logicBlock_size();
		me.__39.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
				else if (me.__39.ggCurrentLogicStateVisible == 1) {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
				else {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__68=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubcf4\uae30";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me.__510=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__510.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__510.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__510.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__510.ggCurrentLogicStateSize = newLogicStateSize;
				me.__510.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__510.ggCurrentLogicStateSize == 0) {
					me.__510.style.width='48px';
					me.__510.style.height='48px';
					me.__510.style.left = 'calc(50% - (48px / 2))';
					me.__510.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__510);
				}
				else {
					me.__510.style.width='60px';
					me.__510.style.height='60px';
					me.__510.style.left = 'calc(50% - (60px / 2))';
					me.__510.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__510);
				}
			}
		}
		me.__510.logicBlock_size();
		me.__510.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__510.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__510.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__510.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__510.ggCurrentLogicStateBackgroundColor == 0) {
					me.__510.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__510.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__510.logicBlock_backgroundcolor();
		me.__510.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_4', !player.getVariableValue('vis_buttonbg_4'));
			me.__27.ggVisible = !me.__27.ggVisible;
			var flag=me.__27.ggVisible;
			me.__27.style.transition='none';
			me.__27.style.visibility=((flag)&&(Number(me.__27.style.opacity)>0||!me.__27.style.opacity))?'inherit':'hidden';
		}
		me.__510.onmouseover=function (e) {
			me.elementMouseOver['_510']=true;
			me.__70.logicBlock_visible();
		}
		me.__510.onmouseout=function (e) {
			me.elementMouseOver['_510']=false;
			me.__70.logicBlock_visible();
		}
		me.__510.ggCurrentLogicStateSize = -1;
		me.__510.ggCurrentLogicStateBackgroundColor = -1;
		me.__510.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_510']) {
				me.elementMouseOver['_510']=true;
				me.__70.logicBlock_visible();
			}
		}
		me.__510.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		els=me.__70__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-align:center;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__70.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__70.ggUpdateText();
		el.appendChild(els);
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_510'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__70.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__70.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__70.style.transition='';
				if (me.__70.ggCurrentLogicStateVisible == 0) {
					me.__70.style.visibility=(Number(me.__70.style.opacity)>0||!me.__70.style.opacity)?'inherit':'hidden';
					me.__70.ggVisible=true;
				}
				else {
					me.__70.style.visibility="hidden";
					me.__70.ggVisible=false;
				}
			}
		}
		me.__70.logicBlock_visible();
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		me.__510.appendChild(me.__70);
		el=me.__69=document.createElement('div');
		els=me.__69__img=document.createElement('img');
		els.className='ggskin ggskin__69';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAE/klEQVR4nO3aW4hVVRzH8c+MVpZZMUEEXcC8VBKUFoZ2sbCop6gIK8LoQkQ9GV1okCQqEqOnCKIg6IZkNyiF6PJgQXShMNJKgyyie0llmZnm6WFbnKY9M2dmzj77zJ//F/7MsNh77d9a37332ouZnkajIYlLb90BkmpJwcFJwcFJwcFJwcFJwcFJwcFJwcFJwcHp2fNzGs7H71iNL+sKlLSfSXgGf2IrVuEazKgzVNI+VqExSL2FpZhbW7r6ORlLsKiFY2fjRlyKAyrMNCJ2Glxwc32OB3AeDqwjaIc4QDHG+/GZ/87BI0Oct3jAsb/gWVyPWdXFHZ7tWhPcXL/ieVyN6Z2P3Ham4SrFUrXV0GM/d5A+Ph3mvD'+
			'dxO+ZXNIZSehQDmjLGft7Dq/gI67B+jP1VzXGK1+nROAcnjeDcZbhzQNsk/ID9W+zjC7yEDdiomLvdI8gwIoa7Y0dTm7ACp2FiVcFHwEScirsUN+FYxnZLSf+T8dMY+vwKT+BKHNHGcaMawc31LZ7CJTi43eGHoA8X4Ul804Zx/FM3lVxrP2xp4zVeVHyszWnHRFQtuLm24xX0q+bD4xjcjJexraIxdEJwc23EcizEvqOZlE4KHljv416chQmjyN6LBbhHsfZ3InOnBTfXj4pt7cU4pNVJqlNwc32teJ32G/5OvRUrFWtXp3PWKbi5dmCt4ua+UrETKKVbBDfXmsHCKsTWma1bBJfV27gN85rDdaPgBmaWTOTULsjVzYKbax1md/Nfk44saWv7FiIwJ+Dpbha8s6RtV8dTjG8O72bBjRbbksHZ1c2Ck7GzOwUHJwUH'+
			'JwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHpxcT6g6RVEcv9qo7RFIdvdhQd4hxxt4lbT269EHpxWJ8U3eQccS2krY/sKPTQVqhFx9iKi7Hc/i11kTdTQPPlLT/hdc6nGXUHIh5uBSP4zvFwDpdp5dkm1dTlu/xGI4ZYt760I93aspYVluHyPsve+MM3IEPOhiubsEf426ciX1amagmZuAWvKR4I3a14I'+
			'EcjyVYjZ0Vhuu04L/wIm7A7NFMzCAchAuxEl9VmL9tgps5FJfhUXzZ5nCdEPytYhlajMPGOhktMAGn4E6sb/NYKhHcTI/idbYc77Yh3IKSa8xvQ7/rsAIL1b+1mYXrsQbbdbnggRylmMR+rB1FuLNL+lwwin7ewNI9Waa3e5BtpA9zcYViN7NFlwseyExci6fwQwvhZpT0MbWF835WbGWuw7FVDaYD7ItzcR82G53g2ra8k3ARHsSmkmBPD3HuwyXHf4KHcAmmVJa6XubgJryudcF/9NQS9f+ciAsUT9wG3K4IOBjLFF/zm/AC3qo4X7cxTbFcLVQ85X2DHPdbxxIllTFZ8XDcr3g4mpeqRd3yBCdjZ7JiC3bynt8346GeRmOoN2Ey3sn/6AhOCg5OCg5OCg5OCg5OCg5OCg5OCg5OCg7O30osxceEvq98AAAAAElF'+
			'TkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__69.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__69.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__69.style.transition='';
				if (me.__69.ggCurrentLogicStateVisible == 0) {
					me.__69.style.visibility="hidden";
					me.__69.ggVisible=false;
				}
				else {
					me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
					me.__69.ggVisible=true;
				}
			}
		}
		me.__69.logicBlock_visible();
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		me.__510.appendChild(me.__69);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODoz'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDcrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDcrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZiNDg1M2I3LTc0NTYtOTg0Mi05OGM4LTM0OTFkZDZkZmY4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmYjQ4NTNiNy03NDU2LTk4NDItOThjOC0zNDkxZGQ2ZGZmODYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjQ4NTNiNy03NDU2LTk4NDItOThjOC0zNDkxZGQ2ZG'+
			'ZmODYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZiNDg1M2I3LTc0NTYtOTg0Mi05OGM4LTM0OTFkZDZkZmY4NiIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODozMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj68+/gAAAWTSURBVHic7drbr1TlGcfxz2yQ'+
			'7Ko1hnjhOUUs9VwVgwdiQBtQ0RJsPaQmmqaJ/AdNGi+MaW+98NrECw8x8RBsbVWKiEoqKk1F4xERE7Vq1HgBaoWiLC/eIYzjnr1nmDUHHp9vMpk976z3Xb+1vut95l2zp1FVlSQuE6MOkAyWFBycFBycFBycFBycFBycFBycFBycFByc2c3n+ViF/+Hv+O+oAiX10qiqahL3YSV24QmsxzPYNrpoSR00qqp6ANd1eP9FZUY/ic1DSzVenI8L8REenGHbc3Bpc9vHsHOw0WamUVXVHvtL9XS8p8zuJ/Asdgwy2Ag5AkuxHFfiZy3v3Y3fd+h3I+5peb1TqYRPKdXwjVpTdkmjqqqvMdljvy+xAY8qst+pO9iQmY8lWKGI/ek0216BtVO0b8dJ0/R7Af/EOmw6sJi906iqaqfpD6gb/qNcrW9gC17tN9iAOUMpp7/AZT'+
			'ivh7634i9tbZP4DId3Ocb7iuzX8JZy7vb2kKFruinN3bCw+djH2/gr/oHn8U1N+zlQZuMCXI7f4NQ+xto9RdssvR3jibi55fVHeFop5+vxwQGna6OuGTwdn2Aj1iiLtc8HuK9W5ioLnmuU8nt0TeP+Ebe3tR2qSJlb0z7WKqKfxkv9DDQMwa3swr+Uz++/qX/hcQp+jWVYrJz4uhmG4Fa24hFF+CZ83UvnYQtu5xUl+Frlav22x/4TuFhZ7S7D2XWG68CwBbfyuVLG1yjn69OZOoxacCsfK6X8Fdxh+iv1TzhLKb3HDjzZ9xml4Fb+r6xvNuNN5dxtb9+orkVWHRyD65uPxbiqw3b343fDCjXGzFEu8CUtbZuVhe16Rf7Y/rPhSiyYon2elDsdi/Bn5bN6C84ZV8GUW4l2Thh6ioOXs/HQOAveM0XbqO+nDzaOH2fB'+
			'U/0iP3+l3xvfjLPgpH/2puDgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgTGDWqEMkg2MCh4w6RDI4JvDaqEMcZMyZoq1hTCfKBG7Ex6MOchDx1RRtu7B72EG6YQKvYx5uwhp8MdJE402Fh6do/xbPDjlLV+xbRe/GvfgtTsBFuAH34dPRRBsrPlPOz2n4sMM2q3EL/j2sUN3QqKpqpm3mKMIvxS'+
			'qcOeBM+1iCjW1tF2LTkPb/Fh7Bk8199lKCf46r8Svl3B1ee7ru+KIbwe38Epco4S/H7LpTNRm24L1Y13w8gy01jXukMjmuUY7p2JrG7YYDEtzK0Yro5c3n4+pI1WQYgj9RZug6bNC5/NbFLFygTIxVOGPA++tbcCsNLFVkL8PCPsdb6ocLl4vwXJ/jvmz/TN2IPX2O1w+nKce5QpkgkzWPX6vgdk5SVueLcJkyI3thuTK7WlmilM9e2ITH8QLewzs99h8Wc3GyIn2lcqxz+xxzoILbWWD/Z/clOKqL7be1tc3DuzP024H1eEq5GN7sNeiY8BNF8gpcpRx7r3w5TMGtTCqhlyklakHb+w/j2g5978If2tq2KTI34DEx7+XPVRZrK3Fxl312j0pwOwuV24pTla9Ob1O+VOjErcpqfiseVcrvj4n5yuzedyfTqZSPbAYn'+
			'9XGY/XcxS3F6s30HVqfgOByGxTi/+fe7uDMFByd/0RGcFBycFBycFBycFBycFBycFBycFBycFByc7wDHNR/ErjqpsQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_6.style.transition='';
				if (me._image_6.ggCurrentLogicStateVisible == 0) {
					me._image_6.style.visibility=(Number(me._image_6.style.opacity)>0||!me._image_6.style.opacity)?'inherit':'hidden';
					me._image_6.ggVisible=true;
				}
				else {
					me._image_6.style.visibility="hidden";
					me._image_6.ggVisible=false;
				}
			}
		}
		me._image_6.logicBlock_visible();
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__510.appendChild(me._image_6);
		me.__68.appendChild(me.__510);
		me.__41.appendChild(me.__68);
		el=me.__65=document.createElement('div');
		el.ggId="\uc601\uc0c1\ubcf4\uae30";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__65.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__65.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__65.style.transition='left 0s, top 0s';
				if (me.__65.ggCurrentLogicStatePosition == 0) {
					me.__65.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__65.style.top='80px';
				}
				else {
					me.__65.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__65.style.top='100px';
				}
			}
		}
		me.__65.logicBlock_position();
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me.__114=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__114.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__114.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__114.ggCurrentLogicStateSize = newLogicStateSize;
				me.__114.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__114.ggCurrentLogicStateSize == 0) {
					me.__114.style.width='48px';
					me.__114.style.height='48px';
					me.__114.style.left = 'calc(50% - (48px / 2))';
					me.__114.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__114);
				}
				else {
					me.__114.style.width='60px';
					me.__114.style.height='60px';
					me.__114.style.left = 'calc(50% - (60px / 2))';
					me.__114.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__114);
				}
			}
		}
		me.__114.logicBlock_size();
		me.__114.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__114.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__114.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__114.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__114.ggCurrentLogicStateBackgroundColor == 0) {
					me.__114.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__114.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__114.logicBlock_backgroundcolor();
		me.__114.onclick=function (e) {
			player.setVariableValue('vis_buttonbg', !player.getVariableValue('vis_buttonbg'));
			me._videocontainer.ggVisible = !me._videocontainer.ggVisible;
			var flag=me._videocontainer.ggVisible;
			me._videocontainer.style.transition='none';
			me._videocontainer.style.visibility=((flag)&&(Number(me._videocontainer.style.opacity)>0||!me._videocontainer.style.opacity))?'inherit':'hidden';
		}
		me.__114.onmouseover=function (e) {
			me.elementMouseOver['_114']=true;
			me.__67.logicBlock_visible();
		}
		me.__114.onmouseout=function (e) {
			me.elementMouseOver['_114']=false;
			me.__67.logicBlock_visible();
		}
		me.__114.ggCurrentLogicStateSize = -1;
		me.__114.ggCurrentLogicStateBackgroundColor = -1;
		me.__114.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_114']) {
				me.elementMouseOver['_114']=true;
				me.__67.logicBlock_visible();
			}
		}
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
		els=me.__67__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc601\uc0c1\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__67.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc601\uc0c1\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__67.ggUpdateText();
		el.appendChild(els);
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_114'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__67.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__67.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__67.style.transition='';
				if (me.__67.ggCurrentLogicStateVisible == 0) {
					me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
					me.__67.ggVisible=true;
				}
				else {
					me.__67.style.visibility="hidden";
					me.__67.ggVisible=false;
				}
			}
		}
		me.__67.logicBlock_visible();
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__114.appendChild(me.__67);
		el=me.__66=document.createElement('div');
		els=me.__66__img=document.createElement('img');
		els.className='ggskin ggskin__66';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc601\uc0c1\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__66.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__66.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__66.style.transition='';
				if (me.__66.ggCurrentLogicStateVisible == 0) {
					me.__66.style.visibility="hidden";
					me.__66.ggVisible=false;
				}
				else {
					me.__66.style.visibility=(Number(me.__66.style.opacity)>0||!me.__66.style.opacity)?'inherit':'hidden';
					me.__66.ggVisible=true;
				}
			}
		}
		me.__66.logicBlock_visible();
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me.__114.appendChild(me.__66);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNjoy'+
			'NSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDkrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDkrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmI5OWY1NjgyLWY2ZWMtYmE0Yy05NTdhLTkwZjJiNmMwZjRiMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiOTlmNTY4Mi1mNmVjLWJhNGMtOTU3YS05MGYyYjZjMGY0YjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiOTlmNTY4Mi1mNmVjLWJhNGMtOTU3YS05MGYyYjZjMG'+
			'Y0YjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5OWY1NjgyLWY2ZWMtYmE0Yy05NTdhLTkwZjJiNmMwZjRiMSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNjoyNSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnICXBwAAAlqSURBVHic7d15jJ1VGcfxT29Z'+
			'KjVSW6CmQFmDIIqpC2WxRqnYgogsSksVAkE0UYxoXGPUGP9Qw18STQTUMsYNjWwGRG0QRNkqiICkyiogUtti2bRAS/3jmdvOTOfO3d73nvMO7zdpMnP7znl/c39zzj3nvM95nimbN282CZiLfXEQ5gx/vQtmYWdMx47YDpvxHDbiv1iLJ7EG9+FxrMK9eGyQv0QZTKmgwS/DG3Ek3ozXC0MbBd/nBTyIv+AW3IqV2FDwfUqlKgbPxbFYiLdit0Q6HscNWIFf4ZFEOjomZ4Nn4cThf4swNa2cbdgoTL4Cl+GJtHLGJ0eDj8TpWIpXJNbSKevxUwzh5rRSRpOTwSfhozgqtZA+WYFviZ6dnBwMfh8+hUNTCymYm/ENXJ5SREqDF+LLWJBKwIC4Xvye16e4eQqD98LXcOqgb5yYH+KzBry2HrTB5+A8TBvkTTPiaXwaFw'+
			'zqhoMyeF9cpPoTqKK4Bmfj0bJvVPTuz3icgXvU5o5ksdgOXVb2jco2+AIsF/vANaOZjh/h/DJvUtYQPVssDw4ro/FJyPU4QWyYFEoZBs/Dr7Fr0Q1Pch7FMbi7yEaLHqKPw+1qc3thD9wh9gcKo0iDl+GXBbb3UmSq2Oo8vqgGizL4NDFhqCmGK/DeIhoq4jN4KX5SgJaabTlen6NivwYfg6v7aaCmLW/Txz52PwYfIsJZasrnABEj1jW9GjxTxCtV5YF81fk39sMz3f5gr5Osa9XmDpLdxOy6a3oxeLmIZKwZLPNFpEhXdDtEL1Mvh1Jzoi6iRLox+FX4Vw+CaorlBbHX/59OLu5miM4iiKzG9rrwolODzzH5guKqzALxnL0tnQzRM7GuT0E1xbNJePPURBd10oOXFyKnpmim4sJ2F7XrwfNlFqlfsw3zxGPGcWln'+
			'8F14bcGCaorlz3hDq/+caIg+Vm1uFZhngoDGiXrw38Qmd03+/FWLztiqBy9Sm1slDtaiF7fqwbeK0/M11eFGcfR2FOMZXD/nrS6vMyYqc7wh+pOD0VJTAueOfWFsD54uUhHsMCBBZbNRTBYfFqf6nh1+fbrIxrOnyMyTW3qIXtkgdrf+13xhuzEXnKL65j4mcmb8Brfhn22u311k7XmHyDKwe6nqymWaOFD/g+YLY3vwtXj7gEUVxU3igfilek91tANOFqkktpmwVIQVOLr5zUiDdxWxP1XjQXwelxTc7lJxUH3vgtstm83Cy3WMnmS9O4mc/rhIfIYWbS6RNecgHWzoZ8YUI05GVNngs/EhkZawLDbgwzirxHuUweLmF80heqrI2TgjkaBuOUackh8kR4uJWxV4QoT1bGz24PmqY+47Dd5c+K0Rk5fMmYk3sXWIfk'+
			's6LV1xpnijU7FiWEMVOIKtBs9PKKRTluPi1CKEhosTa+iEw9n6GfwA9kkqZ2LWSJdhthVrRE7qXLkf+zfEll3O5sIHUwsYh9xn1vtgt4ZY6+XM3bgytYhxuFI8aM+VBg5uYP/UStrwpdQCJiBnbbBfQ97D81rx4CBXLpV3zPjchsjukis/Sy2gA8rYJi2KvRviUFmuVCE9RM4aZzfErkeObFSNoPubxTGSHNm5IeoK5ci98v58a7IOf08togUzG9gptYoW3JdaQBfcn1pAC3ZqyDcTbJWCD3LVun1DvgFnz7a/JBty1bpjQ0QA1PTHi6kFtGBKQ8xWc2R6agFd8PLUAlrwQkO+xRZze3o0Eblqfb4hSqzmSO575CPZL7WAFjzTELVzc+QAUaAyd2bJ9yTm0w0d5ltKwFTVqPlwmG1PiOTCuoa8k5u9K7WADjg2tYAJ'+
			'WN0wgOJMfXBKagEdsCS1gAl4pCGOfuTKLHFWKFdOlPc84aGGfPdRm3wltYAJ+GpqAW24ryHKzuXMwXhPahHjcILQljP3NMNm7xcFJHNlrfxqMa2V9/D8gOGYLKKYVc7sIq+UikPyNpdhT5sGr0wopFPO0GGG1ZI5C6enFtEBK9lq8A0JhXTDcpFqIRWL8N2E9++G3zP6+Og6+YbvjGWxKIA5SKpUI2q9mLNsOT66SeTnqArXGOxxlrNVx1zCy42MPuF/VRotPXORSK9QZsjRNDEkVy2Nw5Y/xsmQhOUhfE45SVi+jr0KbncQ7CqWcaN68Bpcl0JNn+wtEqbcKMr+9NOjdxxu40ZRcLOK5l5n2Fy2zZN1Jr4/YEFF85g4M7QCf9I+Edocke7gaLG3XOVEaMRScqj5zViDdxIzsO0HKqk8NmEVHrE1leGLIoZqDubi1f'+
			'J9ntstG8VKaEuUznjZZodUYyFfsy1DxmwG1emEJxeHiDobWxgvnfCd4rOrplrcaoy5tE7p/4VytdSUwBfHe3GiohyrxASkJn9WaZFrZaKyOp8oR0tNCbT0ql1hrDtFHYCafLnTBAW729UuzD0XVE2bhy7tDF6prhucM5dpE6zRSXnZGfI9/fBSZ6Y23nRSXna9KBBdkxcf0UHH66QHN6mroeXDLTo8t9WNwbPxeK+Kagpltg6f3XcyRDdZjff3JKemSE7VRWBGNwbDj+UVn/xS43siuKFjuhmiR3KHCRbXNaUwYaXvVvRq8AwRC1WVMNuq86QITVrf7Q92O0Q3WY8FPf5sTfcs0IO59G4w8exxcduravplsXGe83ZKPwYTpwtyPuFedZbo8wRHvwYTSbtPK6CdmtF8QAEJ0XudZI3HEl1O4WtaskzEZfdNkQYTGWeq'+
			'dgQmN45T4HtYtMHEWu1qsZ1W0zlrxAnG24pstIjP4LHcLqJAbiqh7cnKLeI9K9RcyjGY+Gs8AheU1P5k4kLxZGh1GY2XMUSP5Qx8R76Z5VPxvChwPdTuwn4oqweP5GK8RrUOmJfNtSIFU6nmMhiDiZQ+C/Fx+eanHgQbcK54LwZSdGRQBjc5XwTTF7LGqxiX4EB8c5A3HbTB8LBYyC9Unew+/XCDOHu8FP8Y9M0HMclqx8n4DA5NLaRgVuI8/DyliBwMbnICPoajEuvol9/h2/hFaiHkZXCTw8XSaonqBBQ8JT5jh/DHxFpGkaPBTWbiJNGzF8uvgNcmka/rMlwu0zqLORs8kj2FyYtED5+TSMdq/EEkeLlK5P7ImqoYPJIdMF9Myg7FPJEKuege/qJYq94lJkw3ieD/Sq3jq2jweOwhahcdKNIg7SOeZs3AK0X2oG'+
			'kim84mbMZzIuvOejwh9s8fENl47hGlDrLvoe34PySRIBlg0ZGpAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_8.style.transition='';
				if (me._image_8.ggCurrentLogicStateVisible == 0) {
					me._image_8.style.visibility=(Number(me._image_8.style.opacity)>0||!me._image_8.style.opacity)?'inherit':'hidden';
					me._image_8.ggVisible=true;
				}
				else {
					me._image_8.style.visibility="hidden";
					me._image_8.ggVisible=false;
				}
			}
		}
		me._image_8.logicBlock_visible();
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__114.appendChild(me._image_8);
		me.__65.appendChild(me.__114);
		me.__41.appendChild(me.__65);
		el=me.__55=document.createElement('div');
		el.ggId="\uac00\uad6c\uc628\uc624\ud504";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__55.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__55.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__55.style.transition='left 0s, top 0s';
				if (me.__55.ggCurrentLogicStatePosition == 0) {
					me.__55.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__55.style.top='140px';
				}
				else {
					me.__55.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__55.style.top='180px';
				}
			}
		}
		me.__55.logicBlock_position();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__onoff_8=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uac70\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_8.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_8.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_8.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_8.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_8.ggCurrentLogicStateSize == 0) {
					me.__onoff_8.style.width='48px';
					me.__onoff_8.style.height='48px';
					me.__onoff_8.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_8.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_8);
				}
				else {
					me.__onoff_8.style.width='60px';
					me.__onoff_8.style.height='60px';
					me.__onoff_8.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_8.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_8);
				}
			}
		}
		me.__onoff_8.logicBlock_size();
		me.__onoff_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uac70\uc2e4"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_8.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_8.ggCurrentLogicStateVisible == 0) {
					me.__onoff_8.style.visibility=(Number(me.__onoff_8.style.opacity)>0||!me.__onoff_8.style.opacity)?'inherit':'hidden';
					me.__onoff_8.ggVisible=true;
				}
				else if (me.__onoff_8.ggCurrentLogicStateVisible == 1) {
					me.__onoff_8.style.visibility="hidden";
					me.__onoff_8.ggVisible=false;
				}
				else if (me.__onoff_8.ggCurrentLogicStateVisible == 2) {
					me.__onoff_8.style.visibility="hidden";
					me.__onoff_8.ggVisible=false;
				}
				else {
					me.__onoff_8.style.visibility="hidden";
					me.__onoff_8.ggVisible=false;
				}
			}
		}
		me.__onoff_8.logicBlock_visible();
		me.__onoff_8.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_8.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_8.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_8.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_8.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_8.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_8.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_8.logicBlock_backgroundcolor();
		me.__onoff_8.onmouseover=function (e) {
			me.elementMouseOver['_onoff_8']=true;
			me.__64.logicBlock_visible();
		}
		me.__onoff_8.onmouseout=function (e) {
			me.elementMouseOver['_onoff_8']=false;
			me.__64.logicBlock_visible();
		}
		me.__onoff_8.ggCurrentLogicStateSize = -1;
		me.__onoff_8.ggCurrentLogicStateVisible = -1;
		me.__onoff_8.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_8.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_8']) {
				me.elementMouseOver['_onoff_8']=true;
				me.__64.logicBlock_visible();
			}
		}
		me.__onoff_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_8=document.createElement('div');
		els=me.__off_8__img=document.createElement('img');
		els.className='ggskin ggskin__off_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uac70\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_8.style.transition='';
				if (me.__off_8.ggCurrentLogicStateVisible == 0) {
					me.__off_8.style.visibility=(Number(me.__off_8.style.opacity)>0||!me.__off_8.style.opacity)?'inherit':'hidden';
					me.__off_8.ggVisible=true;
				}
				else {
					me.__off_8.style.visibility="hidden";
					me.__off_8.ggVisible=false;
				}
			}
		}
		me.__off_8.logicBlock_visible();
		me.__off_8.onclick=function (e) {
			player.openNext("{node21}","$(cur)");
			me.__off_8.style.transition='none';
			me.__off_8.style.visibility='hidden';
			me.__off_8.ggVisible=false;
			me.__on_8.style.transition='none';
			me.__on_8.style.visibility=(Number(me.__on_8.style.opacity)>0||!me.__on_8.style.opacity)?'inherit':'hidden';
			me.__on_8.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_8.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_8.appendChild(me.__off_8);
		el=me.__on_8=document.createElement('div');
		els=me.__on_8__img=document.createElement('img');
		els.className='ggskin ggskin__on_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uac70\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_8.style.transition='';
				if (me.__on_8.ggCurrentLogicStateVisible == 0) {
					me.__on_8.style.visibility=(Number(me.__on_8.style.opacity)>0||!me.__on_8.style.opacity)?'inherit':'hidden';
					me.__on_8.ggVisible=true;
				}
				else {
					me.__on_8.style.visibility="hidden";
					me.__on_8.ggVisible=false;
				}
			}
		}
		me.__on_8.logicBlock_visible();
		me.__on_8.onclick=function (e) {
			player.openNext("{node1}","$(cur)");
			me.__on_8.style.transition='none';
			me.__on_8.style.visibility='hidden';
			me.__on_8.ggVisible=false;
			me.__off_8.style.transition='none';
			me.__off_8.style.visibility=(Number(me.__off_8.style.opacity)>0||!me.__off_8.style.opacity)?'inherit':'hidden';
			me.__off_8.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_8.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_8.appendChild(me.__on_8);
		el=me.__64=document.createElement('div');
		els=me.__64__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__64.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__64.ggUpdateText();
		el.appendChild(els);
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_8'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__64.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__64.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__64.style.transition='';
				if (me.__64.ggCurrentLogicStateVisible == 0) {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
				else {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
			}
		}
		me.__64.logicBlock_visible();
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_8.appendChild(me.__64);
		me.__55.appendChild(me.__onoff_8);
		el=me.__onoff_24=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uac70\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_24.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_24.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_24.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_24.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_24.ggCurrentLogicStateSize == 0) {
					me.__onoff_24.style.width='48px';
					me.__onoff_24.style.height='48px';
					me.__onoff_24.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_24.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_24);
				}
				else {
					me.__onoff_24.style.width='60px';
					me.__onoff_24.style.height='60px';
					me.__onoff_24.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_24.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_24);
				}
			}
		}
		me.__onoff_24.logicBlock_size();
		me.__onoff_24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uac70\uc2e42"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_24.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_24.ggCurrentLogicStateVisible == 0) {
					me.__onoff_24.style.visibility=(Number(me.__onoff_24.style.opacity)>0||!me.__onoff_24.style.opacity)?'inherit':'hidden';
					me.__onoff_24.ggVisible=true;
				}
				else if (me.__onoff_24.ggCurrentLogicStateVisible == 1) {
					me.__onoff_24.style.visibility="hidden";
					me.__onoff_24.ggVisible=false;
				}
				else if (me.__onoff_24.ggCurrentLogicStateVisible == 2) {
					me.__onoff_24.style.visibility="hidden";
					me.__onoff_24.ggVisible=false;
				}
				else {
					me.__onoff_24.style.visibility="hidden";
					me.__onoff_24.ggVisible=false;
				}
			}
		}
		me.__onoff_24.logicBlock_visible();
		me.__onoff_24.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_24.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_24.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_24.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_24.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_24.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_24.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_24.logicBlock_backgroundcolor();
		me.__onoff_24.onmouseover=function (e) {
			me.elementMouseOver['_onoff_24']=true;
			me.__218.logicBlock_visible();
		}
		me.__onoff_24.onmouseout=function (e) {
			me.elementMouseOver['_onoff_24']=false;
			me.__218.logicBlock_visible();
		}
		me.__onoff_24.ggCurrentLogicStateSize = -1;
		me.__onoff_24.ggCurrentLogicStateVisible = -1;
		me.__onoff_24.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_24.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_24']) {
				me.elementMouseOver['_onoff_24']=true;
				me.__218.logicBlock_visible();
			}
		}
		me.__onoff_24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_24=document.createElement('div');
		els=me.__off_24__img=document.createElement('img');
		els.className='ggskin ggskin__off_24';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uac70\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_24.style.transition='';
				if (me.__off_24.ggCurrentLogicStateVisible == 0) {
					me.__off_24.style.visibility=(Number(me.__off_24.style.opacity)>0||!me.__off_24.style.opacity)?'inherit':'hidden';
					me.__off_24.ggVisible=true;
				}
				else {
					me.__off_24.style.visibility="hidden";
					me.__off_24.ggVisible=false;
				}
			}
		}
		me.__off_24.logicBlock_visible();
		me.__off_24.onclick=function (e) {
			player.openNext("{node22}","$(cur)");
			me.__off_24.style.transition='none';
			me.__off_24.style.visibility='hidden';
			me.__off_24.ggVisible=false;
			me.__on_24.style.transition='none';
			me.__on_24.style.visibility=(Number(me.__on_24.style.opacity)>0||!me.__on_24.style.opacity)?'inherit':'hidden';
			me.__on_24.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_24.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_24.appendChild(me.__off_24);
		el=me.__on_24=document.createElement('div');
		els=me.__on_24__img=document.createElement('img');
		els.className='ggskin ggskin__on_24';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uac70\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_24.style.transition='';
				if (me.__on_24.ggCurrentLogicStateVisible == 0) {
					me.__on_24.style.visibility=(Number(me.__on_24.style.opacity)>0||!me.__on_24.style.opacity)?'inherit':'hidden';
					me.__on_24.ggVisible=true;
				}
				else {
					me.__on_24.style.visibility="hidden";
					me.__on_24.ggVisible=false;
				}
			}
		}
		me.__on_24.logicBlock_visible();
		me.__on_24.onclick=function (e) {
			player.openNext("{node2}","$(cur)");
			me.__on_24.style.transition='none';
			me.__on_24.style.visibility='hidden';
			me.__on_24.ggVisible=false;
			me.__off_24.style.transition='none';
			me.__off_24.style.visibility=(Number(me.__off_24.style.opacity)>0||!me.__off_24.style.opacity)?'inherit':'hidden';
			me.__off_24.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_24.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_24.appendChild(me.__on_24);
		el=me.__218=document.createElement('div');
		els=me.__218__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e42\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__218.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__218.ggUpdateText();
		el.appendChild(els);
		me.__218.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__218.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_24'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__218.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__218.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__218.style.transition='';
				if (me.__218.ggCurrentLogicStateVisible == 0) {
					me.__218.style.visibility=(Number(me.__218.style.opacity)>0||!me.__218.style.opacity)?'inherit':'hidden';
					me.__218.ggVisible=true;
				}
				else {
					me.__218.style.visibility="hidden";
					me.__218.ggVisible=false;
				}
			}
		}
		me.__218.logicBlock_visible();
		me.__218.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_24.appendChild(me.__218);
		me.__55.appendChild(me.__onoff_24);
		el=me.__onoff_7=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ubcf5\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_7.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_7.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_7.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_7.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_7.ggCurrentLogicStateSize == 0) {
					me.__onoff_7.style.width='48px';
					me.__onoff_7.style.height='48px';
					me.__onoff_7.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_7.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_7);
				}
				else {
					me.__onoff_7.style.width='60px';
					me.__onoff_7.style.height='60px';
					me.__onoff_7.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_7.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_7);
				}
			}
		}
		me.__onoff_7.logicBlock_size();
		me.__onoff_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ubcf5\ub3c4"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_7.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_7.ggCurrentLogicStateVisible == 0) {
					me.__onoff_7.style.visibility=(Number(me.__onoff_7.style.opacity)>0||!me.__onoff_7.style.opacity)?'inherit':'hidden';
					me.__onoff_7.ggVisible=true;
				}
				else if (me.__onoff_7.ggCurrentLogicStateVisible == 1) {
					me.__onoff_7.style.visibility="hidden";
					me.__onoff_7.ggVisible=false;
				}
				else if (me.__onoff_7.ggCurrentLogicStateVisible == 2) {
					me.__onoff_7.style.visibility="hidden";
					me.__onoff_7.ggVisible=false;
				}
				else {
					me.__onoff_7.style.visibility="hidden";
					me.__onoff_7.ggVisible=false;
				}
			}
		}
		me.__onoff_7.logicBlock_visible();
		me.__onoff_7.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_7.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_7.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_7.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_7.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_7.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_7.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_7.logicBlock_backgroundcolor();
		me.__onoff_7.onmouseover=function (e) {
			me.elementMouseOver['_onoff_7']=true;
			me.__63.logicBlock_visible();
		}
		me.__onoff_7.onmouseout=function (e) {
			me.elementMouseOver['_onoff_7']=false;
			me.__63.logicBlock_visible();
		}
		me.__onoff_7.ggCurrentLogicStateSize = -1;
		me.__onoff_7.ggCurrentLogicStateVisible = -1;
		me.__onoff_7.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_7.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_7']) {
				me.elementMouseOver['_onoff_7']=true;
				me.__63.logicBlock_visible();
			}
		}
		me.__onoff_7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_7=document.createElement('div');
		els=me.__off_7__img=document.createElement('img');
		els.className='ggskin ggskin__off_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ubcf5\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_7.style.transition='';
				if (me.__off_7.ggCurrentLogicStateVisible == 0) {
					me.__off_7.style.visibility=(Number(me.__off_7.style.opacity)>0||!me.__off_7.style.opacity)?'inherit':'hidden';
					me.__off_7.ggVisible=true;
				}
				else {
					me.__off_7.style.visibility="hidden";
					me.__off_7.ggVisible=false;
				}
			}
		}
		me.__off_7.logicBlock_visible();
		me.__off_7.onclick=function (e) {
			player.openNext("{node23}","$(cur)");
			me.__off_7.style.transition='none';
			me.__off_7.style.visibility='hidden';
			me.__off_7.ggVisible=false;
			me.__on_7.style.transition='none';
			me.__on_7.style.visibility=(Number(me.__on_7.style.opacity)>0||!me.__on_7.style.opacity)?'inherit':'hidden';
			me.__on_7.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_7.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_7.appendChild(me.__off_7);
		el=me.__on_7=document.createElement('div');
		els=me.__on_7__img=document.createElement('img');
		els.className='ggskin ggskin__on_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ubcf5\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_7.style.transition='';
				if (me.__on_7.ggCurrentLogicStateVisible == 0) {
					me.__on_7.style.visibility=(Number(me.__on_7.style.opacity)>0||!me.__on_7.style.opacity)?'inherit':'hidden';
					me.__on_7.ggVisible=true;
				}
				else {
					me.__on_7.style.visibility="hidden";
					me.__on_7.ggVisible=false;
				}
			}
		}
		me.__on_7.logicBlock_visible();
		me.__on_7.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
			me.__on_7.style.transition='none';
			me.__on_7.style.visibility='hidden';
			me.__on_7.ggVisible=false;
			me.__off_7.style.transition='none';
			me.__off_7.style.visibility=(Number(me.__off_7.style.opacity)>0||!me.__off_7.style.opacity)?'inherit':'hidden';
			me.__off_7.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_7.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_7.appendChild(me.__on_7);
		el=me.__63=document.createElement('div');
		els=me.__63__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c4\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__63.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__63.ggUpdateText();
		el.appendChild(els);
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_7'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__63.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__63.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__63.style.transition='';
				if (me.__63.ggCurrentLogicStateVisible == 0) {
					me.__63.style.visibility=(Number(me.__63.style.opacity)>0||!me.__63.style.opacity)?'inherit':'hidden';
					me.__63.ggVisible=true;
				}
				else {
					me.__63.style.visibility="hidden";
					me.__63.ggVisible=false;
				}
			}
		}
		me.__63.logicBlock_visible();
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_7.appendChild(me.__63);
		me.__55.appendChild(me.__onoff_7);
		el=me.__onoff_23=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ubcf5\ub3c42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_23.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_23.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_23.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_23.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_23.ggCurrentLogicStateSize == 0) {
					me.__onoff_23.style.width='48px';
					me.__onoff_23.style.height='48px';
					me.__onoff_23.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_23.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_23);
				}
				else {
					me.__onoff_23.style.width='60px';
					me.__onoff_23.style.height='60px';
					me.__onoff_23.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_23.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_23);
				}
			}
		}
		me.__onoff_23.logicBlock_size();
		me.__onoff_23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ubcf5\ub3c42"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_23.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_23.ggCurrentLogicStateVisible == 0) {
					me.__onoff_23.style.visibility=(Number(me.__onoff_23.style.opacity)>0||!me.__onoff_23.style.opacity)?'inherit':'hidden';
					me.__onoff_23.ggVisible=true;
				}
				else if (me.__onoff_23.ggCurrentLogicStateVisible == 1) {
					me.__onoff_23.style.visibility="hidden";
					me.__onoff_23.ggVisible=false;
				}
				else if (me.__onoff_23.ggCurrentLogicStateVisible == 2) {
					me.__onoff_23.style.visibility="hidden";
					me.__onoff_23.ggVisible=false;
				}
				else {
					me.__onoff_23.style.visibility="hidden";
					me.__onoff_23.ggVisible=false;
				}
			}
		}
		me.__onoff_23.logicBlock_visible();
		me.__onoff_23.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_23.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_23.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_23.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_23.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_23.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_23.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_23.logicBlock_backgroundcolor();
		me.__onoff_23.onmouseover=function (e) {
			me.elementMouseOver['_onoff_23']=true;
			me.__217.logicBlock_visible();
		}
		me.__onoff_23.onmouseout=function (e) {
			me.elementMouseOver['_onoff_23']=false;
			me.__217.logicBlock_visible();
		}
		me.__onoff_23.ggCurrentLogicStateSize = -1;
		me.__onoff_23.ggCurrentLogicStateVisible = -1;
		me.__onoff_23.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_23.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_23']) {
				me.elementMouseOver['_onoff_23']=true;
				me.__217.logicBlock_visible();
			}
		}
		me.__onoff_23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_23=document.createElement('div');
		els=me.__off_23__img=document.createElement('img');
		els.className='ggskin ggskin__off_23';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ubcf5\ub3c42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_23.style.transition='';
				if (me.__off_23.ggCurrentLogicStateVisible == 0) {
					me.__off_23.style.visibility=(Number(me.__off_23.style.opacity)>0||!me.__off_23.style.opacity)?'inherit':'hidden';
					me.__off_23.ggVisible=true;
				}
				else {
					me.__off_23.style.visibility="hidden";
					me.__off_23.ggVisible=false;
				}
			}
		}
		me.__off_23.logicBlock_visible();
		me.__off_23.onclick=function (e) {
			player.openNext("{node24}","$(cur)");
			me.__off_23.style.transition='none';
			me.__off_23.style.visibility='hidden';
			me.__off_23.ggVisible=false;
			me.__on_23.style.transition='none';
			me.__on_23.style.visibility=(Number(me.__on_23.style.opacity)>0||!me.__on_23.style.opacity)?'inherit':'hidden';
			me.__on_23.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_23.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_23.appendChild(me.__off_23);
		el=me.__on_23=document.createElement('div');
		els=me.__on_23__img=document.createElement('img');
		els.className='ggskin ggskin__on_23';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ubcf5\ub3c42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_23.style.transition='';
				if (me.__on_23.ggCurrentLogicStateVisible == 0) {
					me.__on_23.style.visibility=(Number(me.__on_23.style.opacity)>0||!me.__on_23.style.opacity)?'inherit':'hidden';
					me.__on_23.ggVisible=true;
				}
				else {
					me.__on_23.style.visibility="hidden";
					me.__on_23.ggVisible=false;
				}
			}
		}
		me.__on_23.logicBlock_visible();
		me.__on_23.onclick=function (e) {
			player.openNext("{node13}","$(cur)");
			me.__on_23.style.transition='none';
			me.__on_23.style.visibility='hidden';
			me.__on_23.ggVisible=false;
			me.__off_23.style.transition='none';
			me.__off_23.style.visibility=(Number(me.__off_23.style.opacity)>0||!me.__off_23.style.opacity)?'inherit':'hidden';
			me.__off_23.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_23.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_23.appendChild(me.__on_23);
		el=me.__217=document.createElement('div');
		els=me.__217__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c42\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__217.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__217.ggUpdateText();
		el.appendChild(els);
		me.__217.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__217.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_23'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__217.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__217.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__217.style.transition='';
				if (me.__217.ggCurrentLogicStateVisible == 0) {
					me.__217.style.visibility=(Number(me.__217.style.opacity)>0||!me.__217.style.opacity)?'inherit':'hidden';
					me.__217.ggVisible=true;
				}
				else {
					me.__217.style.visibility="hidden";
					me.__217.ggVisible=false;
				}
			}
		}
		me.__217.logicBlock_visible();
		me.__217.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_23.appendChild(me.__217);
		me.__55.appendChild(me.__onoff_23);
		el=me.__onoff_10=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_10.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_10.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_10.ggCurrentLogicStateSize == 0) {
					me.__onoff_10.style.width='48px';
					me.__onoff_10.style.height='48px';
					me.__onoff_10.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_10.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_10);
				}
				else {
					me.__onoff_10.style.width='60px';
					me.__onoff_10.style.height='60px';
					me.__onoff_10.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_10.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_10);
				}
			}
		}
		me.__onoff_10.logicBlock_size();
		me.__onoff_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e41"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_10.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_10.ggCurrentLogicStateVisible == 0) {
					me.__onoff_10.style.visibility=(Number(me.__onoff_10.style.opacity)>0||!me.__onoff_10.style.opacity)?'inherit':'hidden';
					me.__onoff_10.ggVisible=true;
				}
				else if (me.__onoff_10.ggCurrentLogicStateVisible == 1) {
					me.__onoff_10.style.visibility="hidden";
					me.__onoff_10.ggVisible=false;
				}
				else if (me.__onoff_10.ggCurrentLogicStateVisible == 2) {
					me.__onoff_10.style.visibility="hidden";
					me.__onoff_10.ggVisible=false;
				}
				else {
					me.__onoff_10.style.visibility="hidden";
					me.__onoff_10.ggVisible=false;
				}
			}
		}
		me.__onoff_10.logicBlock_visible();
		me.__onoff_10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_10.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_10.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_10.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_10.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_10.logicBlock_backgroundcolor();
		me.__onoff_10.onmouseover=function (e) {
			me.elementMouseOver['_onoff_10']=true;
			me.__113.logicBlock_visible();
		}
		me.__onoff_10.onmouseout=function (e) {
			me.elementMouseOver['_onoff_10']=false;
			me.__113.logicBlock_visible();
		}
		me.__onoff_10.ggCurrentLogicStateSize = -1;
		me.__onoff_10.ggCurrentLogicStateVisible = -1;
		me.__onoff_10.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_10.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_10']) {
				me.elementMouseOver['_onoff_10']=true;
				me.__113.logicBlock_visible();
			}
		}
		me.__onoff_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_10=document.createElement('div');
		els=me.__off_10__img=document.createElement('img');
		els.className='ggskin ggskin__off_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_10.style.transition='';
				if (me.__off_10.ggCurrentLogicStateVisible == 0) {
					me.__off_10.style.visibility=(Number(me.__off_10.style.opacity)>0||!me.__off_10.style.opacity)?'inherit':'hidden';
					me.__off_10.ggVisible=true;
				}
				else {
					me.__off_10.style.visibility="hidden";
					me.__off_10.ggVisible=false;
				}
			}
		}
		me.__off_10.logicBlock_visible();
		me.__off_10.onclick=function (e) {
			player.openNext("{node32}","$(cur)");
			me.__off_10.style.transition='none';
			me.__off_10.style.visibility='hidden';
			me.__off_10.ggVisible=false;
			me.__on_10.style.transition='none';
			me.__on_10.style.visibility=(Number(me.__on_10.style.opacity)>0||!me.__on_10.style.opacity)?'inherit':'hidden';
			me.__on_10.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_10.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_10.appendChild(me.__off_10);
		el=me.__on_10=document.createElement('div');
		els=me.__on_10__img=document.createElement('img');
		els.className='ggskin ggskin__on_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_10.style.transition='';
				if (me.__on_10.ggCurrentLogicStateVisible == 0) {
					me.__on_10.style.visibility=(Number(me.__on_10.style.opacity)>0||!me.__on_10.style.opacity)?'inherit':'hidden';
					me.__on_10.ggVisible=true;
				}
				else {
					me.__on_10.style.visibility="hidden";
					me.__on_10.ggVisible=false;
				}
			}
		}
		me.__on_10.logicBlock_visible();
		me.__on_10.onclick=function (e) {
			player.openNext("{node5}","$(cur)");
			me.__on_10.style.transition='none';
			me.__on_10.style.visibility='hidden';
			me.__on_10.ggVisible=false;
			me.__off_10.style.transition='none';
			me.__off_10.style.visibility=(Number(me.__off_10.style.opacity)>0||!me.__off_10.style.opacity)?'inherit':'hidden';
			me.__off_10.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_10.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_10.appendChild(me.__on_10);
		el=me.__113=document.createElement('div');
		els=me.__113__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__113.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__113.ggUpdateText();
		el.appendChild(els);
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__113.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_10'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__113.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__113.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__113.style.transition='';
				if (me.__113.ggCurrentLogicStateVisible == 0) {
					me.__113.style.visibility=(Number(me.__113.style.opacity)>0||!me.__113.style.opacity)?'inherit':'hidden';
					me.__113.ggVisible=true;
				}
				else {
					me.__113.style.visibility="hidden";
					me.__113.ggVisible=false;
				}
			}
		}
		me.__113.logicBlock_visible();
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_10.appendChild(me.__113);
		me.__55.appendChild(me.__onoff_10);
		el=me.__onoff_12=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e41-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_12.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_12.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_12.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_12.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_12.ggCurrentLogicStateSize == 0) {
					me.__onoff_12.style.width='48px';
					me.__onoff_12.style.height='48px';
					me.__onoff_12.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_12.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_12);
				}
				else {
					me.__onoff_12.style.width='60px';
					me.__onoff_12.style.height='60px';
					me.__onoff_12.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_12.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_12);
				}
			}
		}
		me.__onoff_12.logicBlock_size();
		me.__onoff_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e41-2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_12.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_12.ggCurrentLogicStateVisible == 0) {
					me.__onoff_12.style.visibility=(Number(me.__onoff_12.style.opacity)>0||!me.__onoff_12.style.opacity)?'inherit':'hidden';
					me.__onoff_12.ggVisible=true;
				}
				else if (me.__onoff_12.ggCurrentLogicStateVisible == 1) {
					me.__onoff_12.style.visibility="hidden";
					me.__onoff_12.ggVisible=false;
				}
				else if (me.__onoff_12.ggCurrentLogicStateVisible == 2) {
					me.__onoff_12.style.visibility="hidden";
					me.__onoff_12.ggVisible=false;
				}
				else {
					me.__onoff_12.style.visibility="hidden";
					me.__onoff_12.ggVisible=false;
				}
			}
		}
		me.__onoff_12.logicBlock_visible();
		me.__onoff_12.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_12.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_12.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_12.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_12.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_12.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_12.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_12.logicBlock_backgroundcolor();
		me.__onoff_12.onmouseover=function (e) {
			me.elementMouseOver['_onoff_12']=true;
			me.__120.logicBlock_visible();
		}
		me.__onoff_12.onmouseout=function (e) {
			me.elementMouseOver['_onoff_12']=false;
			me.__120.logicBlock_visible();
		}
		me.__onoff_12.ggCurrentLogicStateSize = -1;
		me.__onoff_12.ggCurrentLogicStateVisible = -1;
		me.__onoff_12.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_12.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_12']) {
				me.elementMouseOver['_onoff_12']=true;
				me.__120.logicBlock_visible();
			}
		}
		me.__onoff_12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_12=document.createElement('div');
		els=me.__off_12__img=document.createElement('img');
		els.className='ggskin ggskin__off_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e41-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_12.style.transition='';
				if (me.__off_12.ggCurrentLogicStateVisible == 0) {
					me.__off_12.style.visibility=(Number(me.__off_12.style.opacity)>0||!me.__off_12.style.opacity)?'inherit':'hidden';
					me.__off_12.ggVisible=true;
				}
				else {
					me.__off_12.style.visibility="hidden";
					me.__off_12.ggVisible=false;
				}
			}
		}
		me.__off_12.logicBlock_visible();
		me.__off_12.onclick=function (e) {
			player.openNext("{node33}","$(cur)");
			me.__off_12.style.transition='none';
			me.__off_12.style.visibility='hidden';
			me.__off_12.ggVisible=false;
			me.__on_12.style.transition='none';
			me.__on_12.style.visibility=(Number(me.__on_12.style.opacity)>0||!me.__on_12.style.opacity)?'inherit':'hidden';
			me.__on_12.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_12.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_12.appendChild(me.__off_12);
		el=me.__on_12=document.createElement('div');
		els=me.__on_12__img=document.createElement('img');
		els.className='ggskin ggskin__on_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e41-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_12.style.transition='';
				if (me.__on_12.ggCurrentLogicStateVisible == 0) {
					me.__on_12.style.visibility=(Number(me.__on_12.style.opacity)>0||!me.__on_12.style.opacity)?'inherit':'hidden';
					me.__on_12.ggVisible=true;
				}
				else {
					me.__on_12.style.visibility="hidden";
					me.__on_12.ggVisible=false;
				}
			}
		}
		me.__on_12.logicBlock_visible();
		me.__on_12.onclick=function (e) {
			player.openNext("{node15}","$(cur)");
			me.__on_12.style.transition='none';
			me.__on_12.style.visibility='hidden';
			me.__on_12.ggVisible=false;
			me.__off_12.style.transition='none';
			me.__off_12.style.visibility=(Number(me.__off_12.style.opacity)>0||!me.__off_12.style.opacity)?'inherit':'hidden';
			me.__off_12.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_12.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_12.appendChild(me.__on_12);
		el=me.__120=document.createElement('div');
		els=me.__120__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-2\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__120.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__120.ggUpdateText();
		el.appendChild(els);
		me.__120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__120.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_12'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__120.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__120.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__120.style.transition='';
				if (me.__120.ggCurrentLogicStateVisible == 0) {
					me.__120.style.visibility=(Number(me.__120.style.opacity)>0||!me.__120.style.opacity)?'inherit':'hidden';
					me.__120.ggVisible=true;
				}
				else {
					me.__120.style.visibility="hidden";
					me.__120.ggVisible=false;
				}
			}
		}
		me.__120.logicBlock_visible();
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_12.appendChild(me.__120);
		me.__55.appendChild(me.__onoff_12);
		el=me.__onoff_13=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e41-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_13.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_13.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_13.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_13.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_13.ggCurrentLogicStateSize == 0) {
					me.__onoff_13.style.width='48px';
					me.__onoff_13.style.height='48px';
					me.__onoff_13.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_13.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_13);
				}
				else {
					me.__onoff_13.style.width='60px';
					me.__onoff_13.style.height='60px';
					me.__onoff_13.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_13.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_13);
				}
			}
		}
		me.__onoff_13.logicBlock_size();
		me.__onoff_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e41-3"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_13.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_13.ggCurrentLogicStateVisible == 0) {
					me.__onoff_13.style.visibility=(Number(me.__onoff_13.style.opacity)>0||!me.__onoff_13.style.opacity)?'inherit':'hidden';
					me.__onoff_13.ggVisible=true;
				}
				else if (me.__onoff_13.ggCurrentLogicStateVisible == 1) {
					me.__onoff_13.style.visibility="hidden";
					me.__onoff_13.ggVisible=false;
				}
				else if (me.__onoff_13.ggCurrentLogicStateVisible == 2) {
					me.__onoff_13.style.visibility="hidden";
					me.__onoff_13.ggVisible=false;
				}
				else {
					me.__onoff_13.style.visibility="hidden";
					me.__onoff_13.ggVisible=false;
				}
			}
		}
		me.__onoff_13.logicBlock_visible();
		me.__onoff_13.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_13.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_13.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_13.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_13.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_13.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_13.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_13.logicBlock_backgroundcolor();
		me.__onoff_13.onmouseover=function (e) {
			me.elementMouseOver['_onoff_13']=true;
			me.__130.logicBlock_visible();
		}
		me.__onoff_13.onmouseout=function (e) {
			me.elementMouseOver['_onoff_13']=false;
			me.__130.logicBlock_visible();
		}
		me.__onoff_13.ggCurrentLogicStateSize = -1;
		me.__onoff_13.ggCurrentLogicStateVisible = -1;
		me.__onoff_13.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_13.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_13']) {
				me.elementMouseOver['_onoff_13']=true;
				me.__130.logicBlock_visible();
			}
		}
		me.__onoff_13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_13=document.createElement('div');
		els=me.__off_13__img=document.createElement('img');
		els.className='ggskin ggskin__off_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e41-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_13.style.transition='';
				if (me.__off_13.ggCurrentLogicStateVisible == 0) {
					me.__off_13.style.visibility=(Number(me.__off_13.style.opacity)>0||!me.__off_13.style.opacity)?'inherit':'hidden';
					me.__off_13.ggVisible=true;
				}
				else {
					me.__off_13.style.visibility="hidden";
					me.__off_13.ggVisible=false;
				}
			}
		}
		me.__off_13.logicBlock_visible();
		me.__off_13.onclick=function (e) {
			player.openNext("{node34}","$(cur)");
			me.__off_13.style.transition='none';
			me.__off_13.style.visibility='hidden';
			me.__off_13.ggVisible=false;
			me.__on_13.style.transition='none';
			me.__on_13.style.visibility=(Number(me.__on_13.style.opacity)>0||!me.__on_13.style.opacity)?'inherit':'hidden';
			me.__on_13.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_13.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_13.appendChild(me.__off_13);
		el=me.__on_13=document.createElement('div');
		els=me.__on_13__img=document.createElement('img');
		els.className='ggskin ggskin__on_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e41-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_13.style.transition='';
				if (me.__on_13.ggCurrentLogicStateVisible == 0) {
					me.__on_13.style.visibility=(Number(me.__on_13.style.opacity)>0||!me.__on_13.style.opacity)?'inherit':'hidden';
					me.__on_13.ggVisible=true;
				}
				else {
					me.__on_13.style.visibility="hidden";
					me.__on_13.ggVisible=false;
				}
			}
		}
		me.__on_13.logicBlock_visible();
		me.__on_13.onclick=function (e) {
			player.openNext("{node16}","$(cur)");
			me.__on_13.style.transition='none';
			me.__on_13.style.visibility='hidden';
			me.__on_13.ggVisible=false;
			me.__off_13.style.transition='none';
			me.__off_13.style.visibility=(Number(me.__off_13.style.opacity)>0||!me.__off_13.style.opacity)?'inherit':'hidden';
			me.__off_13.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_13.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_13.appendChild(me.__on_13);
		el=me.__130=document.createElement('div');
		els=me.__130__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-3\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__130.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__130.ggUpdateText();
		el.appendChild(els);
		me.__130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__130.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_13'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__130.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__130.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__130.style.transition='';
				if (me.__130.ggCurrentLogicStateVisible == 0) {
					me.__130.style.visibility=(Number(me.__130.style.opacity)>0||!me.__130.style.opacity)?'inherit':'hidden';
					me.__130.ggVisible=true;
				}
				else {
					me.__130.style.visibility="hidden";
					me.__130.ggVisible=false;
				}
			}
		}
		me.__130.logicBlock_visible();
		me.__130.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_13.appendChild(me.__130);
		me.__55.appendChild(me.__onoff_13);
		el=me.__onoff_6=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc8fc\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_6.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_6.ggCurrentLogicStateSize == 0) {
					me.__onoff_6.style.width='48px';
					me.__onoff_6.style.height='48px';
					me.__onoff_6.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_6.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_6);
				}
				else {
					me.__onoff_6.style.width='60px';
					me.__onoff_6.style.height='60px';
					me.__onoff_6.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_6.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_6);
				}
			}
		}
		me.__onoff_6.logicBlock_size();
		me.__onoff_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_6.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_6.ggCurrentLogicStateVisible == 0) {
					me.__onoff_6.style.visibility=(Number(me.__onoff_6.style.opacity)>0||!me.__onoff_6.style.opacity)?'inherit':'hidden';
					me.__onoff_6.ggVisible=true;
				}
				else if (me.__onoff_6.ggCurrentLogicStateVisible == 1) {
					me.__onoff_6.style.visibility="hidden";
					me.__onoff_6.ggVisible=false;
				}
				else if (me.__onoff_6.ggCurrentLogicStateVisible == 2) {
					me.__onoff_6.style.visibility="hidden";
					me.__onoff_6.ggVisible=false;
				}
				else {
					me.__onoff_6.style.visibility="hidden";
					me.__onoff_6.ggVisible=false;
				}
			}
		}
		me.__onoff_6.logicBlock_visible();
		me.__onoff_6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_6.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_6.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_6.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_6.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_6.logicBlock_backgroundcolor();
		me.__onoff_6.onmouseover=function (e) {
			me.elementMouseOver['_onoff_6']=true;
			me.__62.logicBlock_visible();
		}
		me.__onoff_6.onmouseout=function (e) {
			me.elementMouseOver['_onoff_6']=false;
			me.__62.logicBlock_visible();
		}
		me.__onoff_6.ggCurrentLogicStateSize = -1;
		me.__onoff_6.ggCurrentLogicStateVisible = -1;
		me.__onoff_6.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_6.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_6']) {
				me.elementMouseOver['_onoff_6']=true;
				me.__62.logicBlock_visible();
			}
		}
		me.__onoff_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_6=document.createElement('div');
		els=me.__off_6__img=document.createElement('img');
		els.className='ggskin ggskin__off_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc8fc\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_6.style.transition='';
				if (me.__off_6.ggCurrentLogicStateVisible == 0) {
					me.__off_6.style.visibility=(Number(me.__off_6.style.opacity)>0||!me.__off_6.style.opacity)?'inherit':'hidden';
					me.__off_6.ggVisible=true;
				}
				else {
					me.__off_6.style.visibility="hidden";
					me.__off_6.ggVisible=false;
				}
			}
		}
		me.__off_6.logicBlock_visible();
		me.__off_6.onclick=function (e) {
			player.openNext("{node31}","$(cur)");
			me.__off_6.style.transition='none';
			me.__off_6.style.visibility='hidden';
			me.__off_6.ggVisible=false;
			me.__on_6.style.transition='none';
			me.__on_6.style.visibility=(Number(me.__on_6.style.opacity)>0||!me.__on_6.style.opacity)?'inherit':'hidden';
			me.__on_6.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_6.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_6.appendChild(me.__off_6);
		el=me.__on_6=document.createElement('div');
		els=me.__on_6__img=document.createElement('img');
		els.className='ggskin ggskin__on_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc8fc\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_6.style.transition='';
				if (me.__on_6.ggCurrentLogicStateVisible == 0) {
					me.__on_6.style.visibility=(Number(me.__on_6.style.opacity)>0||!me.__on_6.style.opacity)?'inherit':'hidden';
					me.__on_6.ggVisible=true;
				}
				else {
					me.__on_6.style.visibility="hidden";
					me.__on_6.ggVisible=false;
				}
			}
		}
		me.__on_6.logicBlock_visible();
		me.__on_6.onclick=function (e) {
			player.openNext("{node8}","$(cur)");
			me.__on_6.style.transition='none';
			me.__on_6.style.visibility='hidden';
			me.__on_6.ggVisible=false;
			me.__off_6.style.transition='none';
			me.__off_6.style.visibility=(Number(me.__off_6.style.opacity)>0||!me.__off_6.style.opacity)?'inherit':'hidden';
			me.__off_6.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_6.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_6.appendChild(me.__on_6);
		el=me.__62=document.createElement('div');
		els=me.__62__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__62.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__62.ggUpdateText();
		el.appendChild(els);
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_6'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__62.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__62.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__62.style.transition='';
				if (me.__62.ggCurrentLogicStateVisible == 0) {
					me.__62.style.visibility=(Number(me.__62.style.opacity)>0||!me.__62.style.opacity)?'inherit':'hidden';
					me.__62.ggVisible=true;
				}
				else {
					me.__62.style.visibility="hidden";
					me.__62.ggVisible=false;
				}
			}
		}
		me.__62.logicBlock_visible();
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_6.appendChild(me.__62);
		me.__55.appendChild(me.__onoff_6);
		el=me.__onoff_22=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc8fc\ubc292";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_22.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_22.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_22.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_22.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_22.ggCurrentLogicStateSize == 0) {
					me.__onoff_22.style.width='48px';
					me.__onoff_22.style.height='48px';
					me.__onoff_22.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_22.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_22);
				}
				else {
					me.__onoff_22.style.width='60px';
					me.__onoff_22.style.height='60px';
					me.__onoff_22.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_22.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_22);
				}
			}
		}
		me.__onoff_22.logicBlock_size();
		me.__onoff_22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc8fc\ubc292"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_22.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_22.ggCurrentLogicStateVisible == 0) {
					me.__onoff_22.style.visibility=(Number(me.__onoff_22.style.opacity)>0||!me.__onoff_22.style.opacity)?'inherit':'hidden';
					me.__onoff_22.ggVisible=true;
				}
				else if (me.__onoff_22.ggCurrentLogicStateVisible == 1) {
					me.__onoff_22.style.visibility="hidden";
					me.__onoff_22.ggVisible=false;
				}
				else if (me.__onoff_22.ggCurrentLogicStateVisible == 2) {
					me.__onoff_22.style.visibility="hidden";
					me.__onoff_22.ggVisible=false;
				}
				else {
					me.__onoff_22.style.visibility="hidden";
					me.__onoff_22.ggVisible=false;
				}
			}
		}
		me.__onoff_22.logicBlock_visible();
		me.__onoff_22.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_22.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_22.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_22.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_22.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_22.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_22.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_22.logicBlock_backgroundcolor();
		me.__onoff_22.onmouseover=function (e) {
			me.elementMouseOver['_onoff_22']=true;
			me.__216.logicBlock_visible();
		}
		me.__onoff_22.onmouseout=function (e) {
			me.elementMouseOver['_onoff_22']=false;
			me.__216.logicBlock_visible();
		}
		me.__onoff_22.ggCurrentLogicStateSize = -1;
		me.__onoff_22.ggCurrentLogicStateVisible = -1;
		me.__onoff_22.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_22.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_22']) {
				me.elementMouseOver['_onoff_22']=true;
				me.__216.logicBlock_visible();
			}
		}
		me.__onoff_22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_22=document.createElement('div');
		els=me.__off_22__img=document.createElement('img');
		els.className='ggskin ggskin__off_22';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc8fc\ubc292";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_22.style.transition='';
				if (me.__off_22.ggCurrentLogicStateVisible == 0) {
					me.__off_22.style.visibility=(Number(me.__off_22.style.opacity)>0||!me.__off_22.style.opacity)?'inherit':'hidden';
					me.__off_22.ggVisible=true;
				}
				else {
					me.__off_22.style.visibility="hidden";
					me.__off_22.ggVisible=false;
				}
			}
		}
		me.__off_22.logicBlock_visible();
		me.__off_22.onclick=function (e) {
			player.openNext("{node30}","$(cur)");
			me.__off_22.style.transition='none';
			me.__off_22.style.visibility='hidden';
			me.__off_22.ggVisible=false;
			me.__on_22.style.transition='none';
			me.__on_22.style.visibility=(Number(me.__on_22.style.opacity)>0||!me.__on_22.style.opacity)?'inherit':'hidden';
			me.__on_22.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_22.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_22.appendChild(me.__off_22);
		el=me.__on_22=document.createElement('div');
		els=me.__on_22__img=document.createElement('img');
		els.className='ggskin ggskin__on_22';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc8fc\ubc292";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_22.style.transition='';
				if (me.__on_22.ggCurrentLogicStateVisible == 0) {
					me.__on_22.style.visibility=(Number(me.__on_22.style.opacity)>0||!me.__on_22.style.opacity)?'inherit':'hidden';
					me.__on_22.ggVisible=true;
				}
				else {
					me.__on_22.style.visibility="hidden";
					me.__on_22.ggVisible=false;
				}
			}
		}
		me.__on_22.logicBlock_visible();
		me.__on_22.onclick=function (e) {
			player.openNext("{node18}","$(cur)");
			me.__on_22.style.transition='none';
			me.__on_22.style.visibility='hidden';
			me.__on_22.ggVisible=false;
			me.__off_22.style.transition='none';
			me.__off_22.style.visibility=(Number(me.__off_22.style.opacity)>0||!me.__off_22.style.opacity)?'inherit':'hidden';
			me.__off_22.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_22.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_22.appendChild(me.__on_22);
		el=me.__216=document.createElement('div');
		els=me.__216__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc292\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__216.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__216.ggUpdateText();
		el.appendChild(els);
		me.__216.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__216.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_22'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__216.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__216.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__216.style.transition='';
				if (me.__216.ggCurrentLogicStateVisible == 0) {
					me.__216.style.visibility=(Number(me.__216.style.opacity)>0||!me.__216.style.opacity)?'inherit':'hidden';
					me.__216.ggVisible=true;
				}
				else {
					me.__216.style.visibility="hidden";
					me.__216.ggVisible=false;
				}
			}
		}
		me.__216.logicBlock_visible();
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_22.appendChild(me.__216);
		me.__55.appendChild(me.__onoff_22);
		el=me.__onoff_30=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc8fc\ubc293";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_30.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_30.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_30.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_30.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_30.ggCurrentLogicStateSize == 0) {
					me.__onoff_30.style.width='48px';
					me.__onoff_30.style.height='48px';
					me.__onoff_30.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_30.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_30);
				}
				else {
					me.__onoff_30.style.width='60px';
					me.__onoff_30.style.height='60px';
					me.__onoff_30.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_30.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_30);
				}
			}
		}
		me.__onoff_30.logicBlock_size();
		me.__onoff_30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc8fc\ubc293"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_30.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_30.ggCurrentLogicStateVisible == 0) {
					me.__onoff_30.style.visibility=(Number(me.__onoff_30.style.opacity)>0||!me.__onoff_30.style.opacity)?'inherit':'hidden';
					me.__onoff_30.ggVisible=true;
				}
				else if (me.__onoff_30.ggCurrentLogicStateVisible == 1) {
					me.__onoff_30.style.visibility="hidden";
					me.__onoff_30.ggVisible=false;
				}
				else if (me.__onoff_30.ggCurrentLogicStateVisible == 2) {
					me.__onoff_30.style.visibility="hidden";
					me.__onoff_30.ggVisible=false;
				}
				else {
					me.__onoff_30.style.visibility="hidden";
					me.__onoff_30.ggVisible=false;
				}
			}
		}
		me.__onoff_30.logicBlock_visible();
		me.__onoff_30.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_30.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_30.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_30.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_30.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_30.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_30.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_30.logicBlock_backgroundcolor();
		me.__onoff_30.onmouseover=function (e) {
			me.elementMouseOver['_onoff_30']=true;
			me.__313.logicBlock_visible();
		}
		me.__onoff_30.onmouseout=function (e) {
			me.elementMouseOver['_onoff_30']=false;
			me.__313.logicBlock_visible();
		}
		me.__onoff_30.ggCurrentLogicStateSize = -1;
		me.__onoff_30.ggCurrentLogicStateVisible = -1;
		me.__onoff_30.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_30.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_30']) {
				me.elementMouseOver['_onoff_30']=true;
				me.__313.logicBlock_visible();
			}
		}
		me.__onoff_30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_30=document.createElement('div');
		els=me.__off_30__img=document.createElement('img');
		els.className='ggskin ggskin__off_30';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc8fc\ubc293";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_30.style.transition='';
				if (me.__off_30.ggCurrentLogicStateVisible == 0) {
					me.__off_30.style.visibility=(Number(me.__off_30.style.opacity)>0||!me.__off_30.style.opacity)?'inherit':'hidden';
					me.__off_30.ggVisible=true;
				}
				else {
					me.__off_30.style.visibility="hidden";
					me.__off_30.ggVisible=false;
				}
			}
		}
		me.__off_30.logicBlock_visible();
		me.__off_30.onclick=function (e) {
			player.openNext("{node7}","$(cur)");
			me.__off_30.style.transition='none';
			me.__off_30.style.visibility='hidden';
			me.__off_30.ggVisible=false;
			me.__on_30.style.transition='none';
			me.__on_30.style.visibility=(Number(me.__on_30.style.opacity)>0||!me.__on_30.style.opacity)?'inherit':'hidden';
			me.__on_30.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_30.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_30.appendChild(me.__off_30);
		el=me.__on_30=document.createElement('div');
		els=me.__on_30__img=document.createElement('img');
		els.className='ggskin ggskin__on_30';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc8fc\ubc293";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_30.style.transition='';
				if (me.__on_30.ggCurrentLogicStateVisible == 0) {
					me.__on_30.style.visibility=(Number(me.__on_30.style.opacity)>0||!me.__on_30.style.opacity)?'inherit':'hidden';
					me.__on_30.ggVisible=true;
				}
				else {
					me.__on_30.style.visibility="hidden";
					me.__on_30.ggVisible=false;
				}
			}
		}
		me.__on_30.logicBlock_visible();
		me.__on_30.onclick=function (e) {
			player.openNext("{node29}","$(cur)");
			me.__on_30.style.transition='none';
			me.__on_30.style.visibility='hidden';
			me.__on_30.ggVisible=false;
			me.__off_30.style.transition='none';
			me.__off_30.style.visibility=(Number(me.__off_30.style.opacity)>0||!me.__off_30.style.opacity)?'inherit':'hidden';
			me.__off_30.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_30.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_30.appendChild(me.__on_30);
		el=me.__313=document.createElement('div');
		els=me.__313__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc293\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__313.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__313.ggUpdateText();
		el.appendChild(els);
		me.__313.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__313.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_30'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__313.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__313.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__313.style.transition='';
				if (me.__313.ggCurrentLogicStateVisible == 0) {
					me.__313.style.visibility=(Number(me.__313.style.opacity)>0||!me.__313.style.opacity)?'inherit':'hidden';
					me.__313.ggVisible=true;
				}
				else {
					me.__313.style.visibility="hidden";
					me.__313.ggVisible=false;
				}
			}
		}
		me.__313.logicBlock_visible();
		me.__313.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_30.appendChild(me.__313);
		me.__55.appendChild(me.__onoff_30);
		el=me.__onoff_5=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ud30c\uc6b0\ub354\ub8f8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_5.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_5.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_5.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_5.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_5.ggCurrentLogicStateSize == 0) {
					me.__onoff_5.style.width='48px';
					me.__onoff_5.style.height='48px';
					me.__onoff_5.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_5.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_5);
				}
				else {
					me.__onoff_5.style.width='60px';
					me.__onoff_5.style.height='60px';
					me.__onoff_5.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_5.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_5);
				}
			}
		}
		me.__onoff_5.logicBlock_size();
		me.__onoff_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ud30c\uc6b0\ub354\ub8f8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_5.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_5.ggCurrentLogicStateVisible == 0) {
					me.__onoff_5.style.visibility=(Number(me.__onoff_5.style.opacity)>0||!me.__onoff_5.style.opacity)?'inherit':'hidden';
					me.__onoff_5.ggVisible=true;
				}
				else if (me.__onoff_5.ggCurrentLogicStateVisible == 1) {
					me.__onoff_5.style.visibility="hidden";
					me.__onoff_5.ggVisible=false;
				}
				else if (me.__onoff_5.ggCurrentLogicStateVisible == 2) {
					me.__onoff_5.style.visibility="hidden";
					me.__onoff_5.ggVisible=false;
				}
				else {
					me.__onoff_5.style.visibility="hidden";
					me.__onoff_5.ggVisible=false;
				}
			}
		}
		me.__onoff_5.logicBlock_visible();
		me.__onoff_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_5.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_5.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_5.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_5.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_5.logicBlock_backgroundcolor();
		me.__onoff_5.onmouseover=function (e) {
			me.elementMouseOver['_onoff_5']=true;
			me.__59.logicBlock_visible();
		}
		me.__onoff_5.onmouseout=function (e) {
			me.elementMouseOver['_onoff_5']=false;
			me.__59.logicBlock_visible();
		}
		me.__onoff_5.ggCurrentLogicStateSize = -1;
		me.__onoff_5.ggCurrentLogicStateVisible = -1;
		me.__onoff_5.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_5.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_5']) {
				me.elementMouseOver['_onoff_5']=true;
				me.__59.logicBlock_visible();
			}
		}
		me.__onoff_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_5=document.createElement('div');
		els=me.__off_5__img=document.createElement('img');
		els.className='ggskin ggskin__off_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ud30c\uc6b0\ub354\ub8f8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_5.style.transition='';
				if (me.__off_5.ggCurrentLogicStateVisible == 0) {
					me.__off_5.style.visibility=(Number(me.__off_5.style.opacity)>0||!me.__off_5.style.opacity)?'inherit':'hidden';
					me.__off_5.ggVisible=true;
				}
				else {
					me.__off_5.style.visibility="hidden";
					me.__off_5.ggVisible=false;
				}
			}
		}
		me.__off_5.logicBlock_visible();
		me.__off_5.onclick=function (e) {
			player.openNext("{node37}","$(cur)");
			me.__off_5.style.transition='none';
			me.__off_5.style.visibility='hidden';
			me.__off_5.ggVisible=false;
			me.__on_5.style.transition='none';
			me.__on_5.style.visibility=(Number(me.__on_5.style.opacity)>0||!me.__on_5.style.opacity)?'inherit':'hidden';
			me.__on_5.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_5.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_5.appendChild(me.__off_5);
		el=me.__on_5=document.createElement('div');
		els=me.__on_5__img=document.createElement('img');
		els.className='ggskin ggskin__on_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ud30c\uc6b0\ub354\ub8f8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_5.style.transition='';
				if (me.__on_5.ggCurrentLogicStateVisible == 0) {
					me.__on_5.style.visibility=(Number(me.__on_5.style.opacity)>0||!me.__on_5.style.opacity)?'inherit':'hidden';
					me.__on_5.ggVisible=true;
				}
				else {
					me.__on_5.style.visibility="hidden";
					me.__on_5.ggVisible=false;
				}
			}
		}
		me.__on_5.logicBlock_visible();
		me.__on_5.onclick=function (e) {
			player.openNext("{node11}","$(cur)");
			me.__on_5.style.transition='none';
			me.__on_5.style.visibility='hidden';
			me.__on_5.ggVisible=false;
			me.__off_5.style.transition='none';
			me.__off_5.style.visibility=(Number(me.__off_5.style.opacity)>0||!me.__off_5.style.opacity)?'inherit':'hidden';
			me.__off_5.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_5.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_5.appendChild(me.__on_5);
		el=me.__59=document.createElement('div');
		els=me.__59__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud30c\uc6b0\ub354\ub8f8\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__59.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__59.ggUpdateText();
		el.appendChild(els);
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_5'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__59.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__59.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__59.style.transition='';
				if (me.__59.ggCurrentLogicStateVisible == 0) {
					me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
					me.__59.ggVisible=true;
				}
				else {
					me.__59.style.visibility="hidden";
					me.__59.ggVisible=false;
				}
			}
		}
		me.__59.logicBlock_visible();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_5.appendChild(me.__59);
		me.__55.appendChild(me.__onoff_5);
		el=me.__onoff_20=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc695\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_20.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_20.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_20.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_20.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_20.ggCurrentLogicStateSize == 0) {
					me.__onoff_20.style.width='48px';
					me.__onoff_20.style.height='48px';
					me.__onoff_20.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_20.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_20);
				}
				else {
					me.__onoff_20.style.width='60px';
					me.__onoff_20.style.height='60px';
					me.__onoff_20.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_20.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_20);
				}
			}
		}
		me.__onoff_20.logicBlock_size();
		me.__onoff_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc695\uc2e42"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_20.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_20.ggCurrentLogicStateVisible == 0) {
					me.__onoff_20.style.visibility=(Number(me.__onoff_20.style.opacity)>0||!me.__onoff_20.style.opacity)?'inherit':'hidden';
					me.__onoff_20.ggVisible=true;
				}
				else if (me.__onoff_20.ggCurrentLogicStateVisible == 1) {
					me.__onoff_20.style.visibility="hidden";
					me.__onoff_20.ggVisible=false;
				}
				else if (me.__onoff_20.ggCurrentLogicStateVisible == 2) {
					me.__onoff_20.style.visibility="hidden";
					me.__onoff_20.ggVisible=false;
				}
				else {
					me.__onoff_20.style.visibility="hidden";
					me.__onoff_20.ggVisible=false;
				}
			}
		}
		me.__onoff_20.logicBlock_visible();
		me.__onoff_20.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_20.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_20.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_20.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_20.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_20.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_20.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_20.logicBlock_backgroundcolor();
		me.__onoff_20.onmouseover=function (e) {
			me.elementMouseOver['_onoff_20']=true;
			me.__215.logicBlock_visible();
		}
		me.__onoff_20.onmouseout=function (e) {
			me.elementMouseOver['_onoff_20']=false;
			me.__215.logicBlock_visible();
		}
		me.__onoff_20.ggCurrentLogicStateSize = -1;
		me.__onoff_20.ggCurrentLogicStateVisible = -1;
		me.__onoff_20.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_20.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_20']) {
				me.elementMouseOver['_onoff_20']=true;
				me.__215.logicBlock_visible();
			}
		}
		me.__onoff_20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_20=document.createElement('div');
		els=me.__off_20__img=document.createElement('img');
		els.className='ggskin ggskin__off_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc695\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_20.style.transition='';
				if (me.__off_20.ggCurrentLogicStateVisible == 0) {
					me.__off_20.style.visibility=(Number(me.__off_20.style.opacity)>0||!me.__off_20.style.opacity)?'inherit':'hidden';
					me.__off_20.ggVisible=true;
				}
				else {
					me.__off_20.style.visibility="hidden";
					me.__off_20.ggVisible=false;
				}
			}
		}
		me.__off_20.logicBlock_visible();
		me.__off_20.onclick=function (e) {
			player.openNext("{node36}","$(cur)");
			me.__off_20.style.transition='none';
			me.__off_20.style.visibility='hidden';
			me.__off_20.ggVisible=false;
			me.__on_20.style.transition='none';
			me.__on_20.style.visibility=(Number(me.__on_20.style.opacity)>0||!me.__on_20.style.opacity)?'inherit':'hidden';
			me.__on_20.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_20.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_20.appendChild(me.__off_20);
		el=me.__on_20=document.createElement('div');
		els=me.__on_20__img=document.createElement('img');
		els.className='ggskin ggskin__on_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc695\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_20.style.transition='';
				if (me.__on_20.ggCurrentLogicStateVisible == 0) {
					me.__on_20.style.visibility=(Number(me.__on_20.style.opacity)>0||!me.__on_20.style.opacity)?'inherit':'hidden';
					me.__on_20.ggVisible=true;
				}
				else {
					me.__on_20.style.visibility="hidden";
					me.__on_20.ggVisible=false;
				}
			}
		}
		me.__on_20.logicBlock_visible();
		me.__on_20.onclick=function (e) {
			player.openNext("{node7}","$(cur)");
			me.__on_20.style.transition='none';
			me.__on_20.style.visibility='hidden';
			me.__on_20.ggVisible=false;
			me.__off_20.style.transition='none';
			me.__off_20.style.visibility=(Number(me.__off_20.style.opacity)>0||!me.__off_20.style.opacity)?'inherit':'hidden';
			me.__off_20.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_20.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_20.appendChild(me.__on_20);
		el=me.__215=document.createElement('div');
		els=me.__215__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__215.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__215.ggUpdateText();
		el.appendChild(els);
		me.__215.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__215.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_20'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__215.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__215.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__215.style.transition='';
				if (me.__215.ggCurrentLogicStateVisible == 0) {
					me.__215.style.visibility=(Number(me.__215.style.opacity)>0||!me.__215.style.opacity)?'inherit':'hidden';
					me.__215.ggVisible=true;
				}
				else {
					me.__215.style.visibility="hidden";
					me.__215.ggVisible=false;
				}
			}
		}
		me.__215.logicBlock_visible();
		me.__215.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_20.appendChild(me.__215);
		me.__55.appendChild(me.__onoff_20);
		el=me.__onoff_4=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ud32c\ud2b8\ub9ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_4.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_4.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_4.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_4.ggCurrentLogicStateSize == 0) {
					me.__onoff_4.style.width='48px';
					me.__onoff_4.style.height='48px';
					me.__onoff_4.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_4.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_4);
				}
				else {
					me.__onoff_4.style.width='60px';
					me.__onoff_4.style.height='60px';
					me.__onoff_4.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_4.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_4);
				}
			}
		}
		me.__onoff_4.logicBlock_size();
		me.__onoff_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_4.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_4.ggCurrentLogicStateVisible == 0) {
					me.__onoff_4.style.visibility=(Number(me.__onoff_4.style.opacity)>0||!me.__onoff_4.style.opacity)?'inherit':'hidden';
					me.__onoff_4.ggVisible=true;
				}
				else if (me.__onoff_4.ggCurrentLogicStateVisible == 1) {
					me.__onoff_4.style.visibility="hidden";
					me.__onoff_4.ggVisible=false;
				}
				else if (me.__onoff_4.ggCurrentLogicStateVisible == 2) {
					me.__onoff_4.style.visibility="hidden";
					me.__onoff_4.ggVisible=false;
				}
				else {
					me.__onoff_4.style.visibility="hidden";
					me.__onoff_4.ggVisible=false;
				}
			}
		}
		me.__onoff_4.logicBlock_visible();
		me.__onoff_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_4.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_4.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_4.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_4.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_4.logicBlock_backgroundcolor();
		me.__onoff_4.onmouseover=function (e) {
			me.elementMouseOver['_onoff_4']=true;
			me.__58.logicBlock_visible();
		}
		me.__onoff_4.onmouseout=function (e) {
			me.elementMouseOver['_onoff_4']=false;
			me.__58.logicBlock_visible();
		}
		me.__onoff_4.ggCurrentLogicStateSize = -1;
		me.__onoff_4.ggCurrentLogicStateVisible = -1;
		me.__onoff_4.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_4.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_4']) {
				me.elementMouseOver['_onoff_4']=true;
				me.__58.logicBlock_visible();
			}
		}
		me.__onoff_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_4=document.createElement('div');
		els=me.__off_4__img=document.createElement('img');
		els.className='ggskin ggskin__off_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ud32c\ud2b8\ub9ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_4.style.transition='';
				if (me.__off_4.ggCurrentLogicStateVisible == 0) {
					me.__off_4.style.visibility=(Number(me.__off_4.style.opacity)>0||!me.__off_4.style.opacity)?'inherit':'hidden';
					me.__off_4.ggVisible=true;
				}
				else {
					me.__off_4.style.visibility="hidden";
					me.__off_4.ggVisible=false;
				}
			}
		}
		me.__off_4.logicBlock_visible();
		me.__off_4.onclick=function (e) {
			player.openNext("{node18}","$(cur)");
			me.__off_4.style.transition='none';
			me.__off_4.style.visibility='hidden';
			me.__off_4.ggVisible=false;
			me.__on_4.style.transition='none';
			me.__on_4.style.visibility=(Number(me.__on_4.style.opacity)>0||!me.__on_4.style.opacity)?'inherit':'hidden';
			me.__on_4.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_4.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_4.appendChild(me.__off_4);
		el=me.__on_4=document.createElement('div');
		els=me.__on_4__img=document.createElement('img');
		els.className='ggskin ggskin__on_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ud32c\ud2b8\ub9ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_4.style.transition='';
				if (me.__on_4.ggCurrentLogicStateVisible == 0) {
					me.__on_4.style.visibility=(Number(me.__on_4.style.opacity)>0||!me.__on_4.style.opacity)?'inherit':'hidden';
					me.__on_4.ggVisible=true;
				}
				else {
					me.__on_4.style.visibility="hidden";
					me.__on_4.ggVisible=false;
				}
			}
		}
		me.__on_4.logicBlock_visible();
		me.__on_4.onclick=function (e) {
			player.openNext("{node36}","$(cur)");
			me.__on_4.style.transition='none';
			me.__on_4.style.visibility='hidden';
			me.__on_4.ggVisible=false;
			me.__off_4.style.transition='none';
			me.__off_4.style.visibility=(Number(me.__off_4.style.opacity)>0||!me.__off_4.style.opacity)?'inherit':'hidden';
			me.__off_4.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_4.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_4.appendChild(me.__on_4);
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud32c\ud2b8\ub9ac\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
		el.appendChild(els);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__58.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__58.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__58.style.transition='';
				if (me.__58.ggCurrentLogicStateVisible == 0) {
					me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
					me.__58.ggVisible=true;
				}
				else {
					me.__58.style.visibility="hidden";
					me.__58.ggVisible=false;
				}
			}
		}
		me.__58.logicBlock_visible();
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_4.appendChild(me.__58);
		me.__55.appendChild(me.__onoff_4);
		el=me.__onoff_0=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ub4dc\ub808\uc2a4\ub8f8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_0.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_0.ggCurrentLogicStateSize == 0) {
					me.__onoff_0.style.width='48px';
					me.__onoff_0.style.height='48px';
					me.__onoff_0.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_0.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_0);
				}
				else {
					me.__onoff_0.style.width='60px';
					me.__onoff_0.style.height='60px';
					me.__onoff_0.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_0.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_0);
				}
			}
		}
		me.__onoff_0.logicBlock_size();
		me.__onoff_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_0.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_0.ggCurrentLogicStateVisible == 0) {
					me.__onoff_0.style.visibility=(Number(me.__onoff_0.style.opacity)>0||!me.__onoff_0.style.opacity)?'inherit':'hidden';
					me.__onoff_0.ggVisible=true;
				}
				else if (me.__onoff_0.ggCurrentLogicStateVisible == 1) {
					me.__onoff_0.style.visibility="hidden";
					me.__onoff_0.ggVisible=false;
				}
				else if (me.__onoff_0.ggCurrentLogicStateVisible == 2) {
					me.__onoff_0.style.visibility="hidden";
					me.__onoff_0.ggVisible=false;
				}
				else {
					me.__onoff_0.style.visibility="hidden";
					me.__onoff_0.ggVisible=false;
				}
			}
		}
		me.__onoff_0.logicBlock_visible();
		me.__onoff_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_0.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_0.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_0.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_0.logicBlock_backgroundcolor();
		me.__onoff_0.onmouseover=function (e) {
			me.elementMouseOver['_onoff_0']=true;
			me.__57.logicBlock_visible();
		}
		me.__onoff_0.onmouseout=function (e) {
			me.elementMouseOver['_onoff_0']=false;
			me.__57.logicBlock_visible();
		}
		me.__onoff_0.ggCurrentLogicStateSize = -1;
		me.__onoff_0.ggCurrentLogicStateVisible = -1;
		me.__onoff_0.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_0.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_0']) {
				me.elementMouseOver['_onoff_0']=true;
				me.__57.logicBlock_visible();
			}
		}
		me.__onoff_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_0=document.createElement('div');
		els=me.__off_0__img=document.createElement('img');
		els.className='ggskin ggskin__off_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ub4dc\ub808\uc2a4\ub8f8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_0.style.transition='';
				if (me.__off_0.ggCurrentLogicStateVisible == 0) {
					me.__off_0.style.visibility=(Number(me.__off_0.style.opacity)>0||!me.__off_0.style.opacity)?'inherit':'hidden';
					me.__off_0.ggVisible=true;
				}
				else {
					me.__off_0.style.visibility="hidden";
					me.__off_0.ggVisible=false;
				}
			}
		}
		me.__off_0.logicBlock_visible();
		me.__off_0.onclick=function (e) {
			player.openNext("{node35}","$(cur)");
			me.__off_0.style.transition='none';
			me.__off_0.style.visibility='hidden';
			me.__off_0.ggVisible=false;
			me.__on_0.style.transition='none';
			me.__on_0.style.visibility=(Number(me.__on_0.style.opacity)>0||!me.__on_0.style.opacity)?'inherit':'hidden';
			me.__on_0.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_0.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_0.appendChild(me.__off_0);
		el=me.__on_0=document.createElement('div');
		els=me.__on_0__img=document.createElement('img');
		els.className='ggskin ggskin__on_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ub4dc\ub808\uc2a4\ub8f8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_0.style.transition='';
				if (me.__on_0.ggCurrentLogicStateVisible == 0) {
					me.__on_0.style.visibility=(Number(me.__on_0.style.opacity)>0||!me.__on_0.style.opacity)?'inherit':'hidden';
					me.__on_0.ggVisible=true;
				}
				else {
					me.__on_0.style.visibility="hidden";
					me.__on_0.ggVisible=false;
				}
			}
		}
		me.__on_0.logicBlock_visible();
		me.__on_0.onclick=function (e) {
			player.openNext("{node3}","$(cur)");
			me.__on_0.style.transition='none';
			me.__on_0.style.visibility='hidden';
			me.__on_0.ggVisible=false;
			me.__off_0.style.transition='none';
			me.__off_0.style.visibility=(Number(me.__off_0.style.opacity)>0||!me.__off_0.style.opacity)?'inherit':'hidden';
			me.__off_0.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_0.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_0.appendChild(me.__on_0);
		el=me.__57=document.createElement('div');
		els=me.__57__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__57.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__57.ggUpdateText();
		el.appendChild(els);
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__57.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__57.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__57.style.transition='';
				if (me.__57.ggCurrentLogicStateVisible == 0) {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
				else {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
			}
		}
		me.__57.logicBlock_visible();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_0.appendChild(me.__57);
		me.__55.appendChild(me.__onoff_0);
		el=me.__onoff_3=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e43";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_3.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_3.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_3.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_3.ggCurrentLogicStateSize == 0) {
					me.__onoff_3.style.width='48px';
					me.__onoff_3.style.height='48px';
					me.__onoff_3.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_3.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_3);
				}
				else {
					me.__onoff_3.style.width='60px';
					me.__onoff_3.style.height='60px';
					me.__onoff_3.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_3.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_3);
				}
			}
		}
		me.__onoff_3.logicBlock_size();
		me.__onoff_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e43"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_3.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_3.ggCurrentLogicStateVisible == 0) {
					me.__onoff_3.style.visibility=(Number(me.__onoff_3.style.opacity)>0||!me.__onoff_3.style.opacity)?'inherit':'hidden';
					me.__onoff_3.ggVisible=true;
				}
				else if (me.__onoff_3.ggCurrentLogicStateVisible == 1) {
					me.__onoff_3.style.visibility="hidden";
					me.__onoff_3.ggVisible=false;
				}
				else if (me.__onoff_3.ggCurrentLogicStateVisible == 2) {
					me.__onoff_3.style.visibility="hidden";
					me.__onoff_3.ggVisible=false;
				}
				else {
					me.__onoff_3.style.visibility="hidden";
					me.__onoff_3.ggVisible=false;
				}
			}
		}
		me.__onoff_3.logicBlock_visible();
		me.__onoff_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_3.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_3.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_3.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_3.logicBlock_backgroundcolor();
		me.__onoff_3.onmouseover=function (e) {
			me.elementMouseOver['_onoff_3']=true;
			me.__312.logicBlock_visible();
		}
		me.__onoff_3.onmouseout=function (e) {
			me.elementMouseOver['_onoff_3']=false;
			me.__312.logicBlock_visible();
		}
		me.__onoff_3.ggCurrentLogicStateSize = -1;
		me.__onoff_3.ggCurrentLogicStateVisible = -1;
		me.__onoff_3.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_3']) {
				me.elementMouseOver['_onoff_3']=true;
				me.__312.logicBlock_visible();
			}
		}
		me.__onoff_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_3=document.createElement('div');
		els=me.__off_3__img=document.createElement('img');
		els.className='ggskin ggskin__off_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e43";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_3.style.transition='';
				if (me.__off_3.ggCurrentLogicStateVisible == 0) {
					me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
					me.__off_3.ggVisible=true;
				}
				else {
					me.__off_3.style.visibility="hidden";
					me.__off_3.ggVisible=false;
				}
			}
		}
		me.__off_3.logicBlock_visible();
		me.__off_3.onclick=function (e) {
			player.openNext("{node28}","$(cur)");
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility='hidden';
			me.__off_3.ggVisible=false;
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
			me.__on_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_3.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_3.appendChild(me.__off_3);
		el=me.__on_3=document.createElement('div');
		els=me.__on_3__img=document.createElement('img');
		els.className='ggskin ggskin__on_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e43";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_3.style.transition='';
				if (me.__on_3.ggCurrentLogicStateVisible == 0) {
					me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
					me.__on_3.ggVisible=true;
				}
				else {
					me.__on_3.style.visibility="hidden";
					me.__on_3.ggVisible=false;
				}
			}
		}
		me.__on_3.logicBlock_visible();
		me.__on_3.onclick=function (e) {
			player.openNext("{node10}","$(cur)");
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility='hidden';
			me.__on_3.ggVisible=false;
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
			me.__off_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_3.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_3.appendChild(me.__on_3);
		el=me.__312=document.createElement('div');
		els=me.__312__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__312.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__312.ggUpdateText();
		el.appendChild(els);
		me.__312.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__312.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_3'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__312.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__312.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__312.style.transition='';
				if (me.__312.ggCurrentLogicStateVisible == 0) {
					me.__312.style.visibility=(Number(me.__312.style.opacity)>0||!me.__312.style.opacity)?'inherit':'hidden';
					me.__312.ggVisible=true;
				}
				else {
					me.__312.style.visibility="hidden";
					me.__312.ggVisible=false;
				}
			}
		}
		me.__312.logicBlock_visible();
		me.__312.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_3.appendChild(me.__312);
		me.__55.appendChild(me.__onoff_3);
		el=me.__onoff_31=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e43-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_31.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_31.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_31.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_31.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_31.ggCurrentLogicStateSize == 0) {
					me.__onoff_31.style.width='48px';
					me.__onoff_31.style.height='48px';
					me.__onoff_31.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_31.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_31);
				}
				else {
					me.__onoff_31.style.width='60px';
					me.__onoff_31.style.height='60px';
					me.__onoff_31.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_31.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_31);
				}
			}
		}
		me.__onoff_31.logicBlock_size();
		me.__onoff_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e43-1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_31.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_31.ggCurrentLogicStateVisible == 0) {
					me.__onoff_31.style.visibility=(Number(me.__onoff_31.style.opacity)>0||!me.__onoff_31.style.opacity)?'inherit':'hidden';
					me.__onoff_31.ggVisible=true;
				}
				else if (me.__onoff_31.ggCurrentLogicStateVisible == 1) {
					me.__onoff_31.style.visibility="hidden";
					me.__onoff_31.ggVisible=false;
				}
				else if (me.__onoff_31.ggCurrentLogicStateVisible == 2) {
					me.__onoff_31.style.visibility="hidden";
					me.__onoff_31.ggVisible=false;
				}
				else {
					me.__onoff_31.style.visibility="hidden";
					me.__onoff_31.ggVisible=false;
				}
			}
		}
		me.__onoff_31.logicBlock_visible();
		me.__onoff_31.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_31.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_31.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_31.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_31.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_31.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_31.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_31.logicBlock_backgroundcolor();
		me.__onoff_31.onmouseover=function (e) {
			me.elementMouseOver['_onoff_31']=true;
			me.__311.logicBlock_visible();
		}
		me.__onoff_31.onmouseout=function (e) {
			me.elementMouseOver['_onoff_31']=false;
			me.__311.logicBlock_visible();
		}
		me.__onoff_31.ggCurrentLogicStateSize = -1;
		me.__onoff_31.ggCurrentLogicStateVisible = -1;
		me.__onoff_31.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_31.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_31']) {
				me.elementMouseOver['_onoff_31']=true;
				me.__311.logicBlock_visible();
			}
		}
		me.__onoff_31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_31=document.createElement('div');
		els=me.__off_31__img=document.createElement('img');
		els.className='ggskin ggskin__off_31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e43-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_31.style.transition='';
				if (me.__off_31.ggCurrentLogicStateVisible == 0) {
					me.__off_31.style.visibility=(Number(me.__off_31.style.opacity)>0||!me.__off_31.style.opacity)?'inherit':'hidden';
					me.__off_31.ggVisible=true;
				}
				else {
					me.__off_31.style.visibility="hidden";
					me.__off_31.ggVisible=false;
				}
			}
		}
		me.__off_31.logicBlock_visible();
		me.__off_31.onclick=function (e) {
			player.openNext("{node29}","$(cur)");
			me.__off_31.style.transition='none';
			me.__off_31.style.visibility='hidden';
			me.__off_31.ggVisible=false;
			me.__on_31.style.transition='none';
			me.__on_31.style.visibility=(Number(me.__on_31.style.opacity)>0||!me.__on_31.style.opacity)?'inherit':'hidden';
			me.__on_31.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_31.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_31.appendChild(me.__off_31);
		el=me.__on_31=document.createElement('div');
		els=me.__on_31__img=document.createElement('img');
		els.className='ggskin ggskin__on_31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e43-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_31.style.transition='';
				if (me.__on_31.ggCurrentLogicStateVisible == 0) {
					me.__on_31.style.visibility=(Number(me.__on_31.style.opacity)>0||!me.__on_31.style.opacity)?'inherit':'hidden';
					me.__on_31.ggVisible=true;
				}
				else {
					me.__on_31.style.visibility="hidden";
					me.__on_31.ggVisible=false;
				}
			}
		}
		me.__on_31.logicBlock_visible();
		me.__on_31.onclick=function (e) {
			player.openNext("{node17}","$(cur)");
			me.__on_31.style.transition='none';
			me.__on_31.style.visibility='hidden';
			me.__on_31.ggVisible=false;
			me.__off_31.style.transition='none';
			me.__off_31.style.visibility=(Number(me.__off_31.style.opacity)>0||!me.__off_31.style.opacity)?'inherit':'hidden';
			me.__off_31.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_31.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_31.appendChild(me.__on_31);
		el=me.__311=document.createElement('div');
		els=me.__311__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43-1\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__311.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__311.ggUpdateText();
		el.appendChild(els);
		me.__311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__311.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_31'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__311.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__311.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__311.style.transition='';
				if (me.__311.ggCurrentLogicStateVisible == 0) {
					me.__311.style.visibility=(Number(me.__311.style.opacity)>0||!me.__311.style.opacity)?'inherit':'hidden';
					me.__311.ggVisible=true;
				}
				else {
					me.__311.style.visibility="hidden";
					me.__311.ggVisible=false;
				}
			}
		}
		me.__311.logicBlock_visible();
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_31.appendChild(me.__311);
		me.__55.appendChild(me.__onoff_31);
		el=me.__onoff_2=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_2.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_2.ggCurrentLogicStateSize == 0) {
					me.__onoff_2.style.width='48px';
					me.__onoff_2.style.height='48px';
					me.__onoff_2.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_2.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_2);
				}
				else {
					me.__onoff_2.style.width='60px';
					me.__onoff_2.style.height='60px';
					me.__onoff_2.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_2.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_2);
				}
			}
		}
		me.__onoff_2.logicBlock_size();
		me.__onoff_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e42"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_2.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_2.ggCurrentLogicStateVisible == 0) {
					me.__onoff_2.style.visibility=(Number(me.__onoff_2.style.opacity)>0||!me.__onoff_2.style.opacity)?'inherit':'hidden';
					me.__onoff_2.ggVisible=true;
				}
				else if (me.__onoff_2.ggCurrentLogicStateVisible == 1) {
					me.__onoff_2.style.visibility="hidden";
					me.__onoff_2.ggVisible=false;
				}
				else if (me.__onoff_2.ggCurrentLogicStateVisible == 2) {
					me.__onoff_2.style.visibility="hidden";
					me.__onoff_2.ggVisible=false;
				}
				else {
					me.__onoff_2.style.visibility="hidden";
					me.__onoff_2.ggVisible=false;
				}
			}
		}
		me.__onoff_2.logicBlock_visible();
		me.__onoff_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_2.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_2.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_2.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_2.logicBlock_backgroundcolor();
		me.__onoff_2.onmouseover=function (e) {
			me.elementMouseOver['_onoff_2']=true;
			me.__214.logicBlock_visible();
		}
		me.__onoff_2.onmouseout=function (e) {
			me.elementMouseOver['_onoff_2']=false;
			me.__214.logicBlock_visible();
		}
		me.__onoff_2.ggCurrentLogicStateSize = -1;
		me.__onoff_2.ggCurrentLogicStateVisible = -1;
		me.__onoff_2.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_2']) {
				me.elementMouseOver['_onoff_2']=true;
				me.__214.logicBlock_visible();
			}
		}
		me.__onoff_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_2=document.createElement('div');
		els=me.__off_2__img=document.createElement('img');
		els.className='ggskin ggskin__off_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_2.style.transition='';
				if (me.__off_2.ggCurrentLogicStateVisible == 0) {
					me.__off_2.style.visibility=(Number(me.__off_2.style.opacity)>0||!me.__off_2.style.opacity)?'inherit':'hidden';
					me.__off_2.ggVisible=true;
				}
				else {
					me.__off_2.style.visibility="hidden";
					me.__off_2.ggVisible=false;
				}
			}
		}
		me.__off_2.logicBlock_visible();
		me.__off_2.onclick=function (e) {
			player.openNext("{node26}","$(cur)");
			me.__off_2.style.transition='none';
			me.__off_2.style.visibility='hidden';
			me.__off_2.ggVisible=false;
			me.__on_2.style.transition='none';
			me.__on_2.style.visibility=(Number(me.__on_2.style.opacity)>0||!me.__on_2.style.opacity)?'inherit':'hidden';
			me.__on_2.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_2.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_2.appendChild(me.__off_2);
		el=me.__on_2=document.createElement('div');
		els=me.__on_2__img=document.createElement('img');
		els.className='ggskin ggskin__on_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_2.style.transition='';
				if (me.__on_2.ggCurrentLogicStateVisible == 0) {
					me.__on_2.style.visibility=(Number(me.__on_2.style.opacity)>0||!me.__on_2.style.opacity)?'inherit':'hidden';
					me.__on_2.ggVisible=true;
				}
				else {
					me.__on_2.style.visibility="hidden";
					me.__on_2.ggVisible=false;
				}
			}
		}
		me.__on_2.logicBlock_visible();
		me.__on_2.onclick=function (e) {
			player.openNext("{node9}","$(cur)");
			me.__on_2.style.transition='none';
			me.__on_2.style.visibility='hidden';
			me.__on_2.ggVisible=false;
			me.__off_2.style.transition='none';
			me.__off_2.style.visibility=(Number(me.__off_2.style.opacity)>0||!me.__off_2.style.opacity)?'inherit':'hidden';
			me.__off_2.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_2.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_2.appendChild(me.__on_2);
		el=me.__214=document.createElement('div');
		els=me.__214__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__214.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__214.ggUpdateText();
		el.appendChild(els);
		me.__214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__214.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__214.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__214.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__214.style.transition='';
				if (me.__214.ggCurrentLogicStateVisible == 0) {
					me.__214.style.visibility=(Number(me.__214.style.opacity)>0||!me.__214.style.opacity)?'inherit':'hidden';
					me.__214.ggVisible=true;
				}
				else {
					me.__214.style.visibility="hidden";
					me.__214.ggVisible=false;
				}
			}
		}
		me.__214.logicBlock_visible();
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_2.appendChild(me.__214);
		me.__55.appendChild(me.__onoff_2);
		el=me.__onoff_21=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e42-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_21.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_21.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_21.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_21.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_21.ggCurrentLogicStateSize == 0) {
					me.__onoff_21.style.width='48px';
					me.__onoff_21.style.height='48px';
					me.__onoff_21.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_21.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_21);
				}
				else {
					me.__onoff_21.style.width='60px';
					me.__onoff_21.style.height='60px';
					me.__onoff_21.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_21.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_21);
				}
			}
		}
		me.__onoff_21.logicBlock_size();
		me.__onoff_21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e42-1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_21.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_21.ggCurrentLogicStateVisible == 0) {
					me.__onoff_21.style.visibility=(Number(me.__onoff_21.style.opacity)>0||!me.__onoff_21.style.opacity)?'inherit':'hidden';
					me.__onoff_21.ggVisible=true;
				}
				else {
					me.__onoff_21.style.visibility="hidden";
					me.__onoff_21.ggVisible=false;
				}
			}
		}
		me.__onoff_21.logicBlock_visible();
		me.__onoff_21.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_21.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_21.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_21.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_21.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_21.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_21.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_21.logicBlock_backgroundcolor();
		me.__onoff_21.onmouseover=function (e) {
			me.elementMouseOver['_onoff_21']=true;
			me.__213.logicBlock_visible();
		}
		me.__onoff_21.onmouseout=function (e) {
			me.elementMouseOver['_onoff_21']=false;
			me.__213.logicBlock_visible();
		}
		me.__onoff_21.ggCurrentLogicStateSize = -1;
		me.__onoff_21.ggCurrentLogicStateVisible = -1;
		me.__onoff_21.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_21.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_21']) {
				me.elementMouseOver['_onoff_21']=true;
				me.__213.logicBlock_visible();
			}
		}
		me.__onoff_21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_21=document.createElement('div');
		els=me.__off_21__img=document.createElement('img');
		els.className='ggskin ggskin__off_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e42-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_21.style.transition='';
				if (me.__off_21.ggCurrentLogicStateVisible == 0) {
					me.__off_21.style.visibility=(Number(me.__off_21.style.opacity)>0||!me.__off_21.style.opacity)?'inherit':'hidden';
					me.__off_21.ggVisible=true;
				}
				else {
					me.__off_21.style.visibility="hidden";
					me.__off_21.ggVisible=false;
				}
			}
		}
		me.__off_21.logicBlock_visible();
		me.__off_21.onclick=function (e) {
			player.openNext("{node27}","$(cur)");
			me.__off_21.style.transition='none';
			me.__off_21.style.visibility='hidden';
			me.__off_21.ggVisible=false;
			me.__on_2.style.transition='none';
			me.__on_2.style.visibility=(Number(me.__on_2.style.opacity)>0||!me.__on_2.style.opacity)?'inherit':'hidden';
			me.__on_2.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_21.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_21.appendChild(me.__off_21);
		el=me.__on_21=document.createElement('div');
		els=me.__on_21__img=document.createElement('img');
		els.className='ggskin ggskin__on_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e42-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_21.style.transition='';
				if (me.__on_21.ggCurrentLogicStateVisible == 0) {
					me.__on_21.style.visibility=(Number(me.__on_21.style.opacity)>0||!me.__on_21.style.opacity)?'inherit':'hidden';
					me.__on_21.ggVisible=true;
				}
				else {
					me.__on_21.style.visibility="hidden";
					me.__on_21.ggVisible=false;
				}
			}
		}
		me.__on_21.logicBlock_visible();
		me.__on_21.onclick=function (e) {
			player.openNext("{node14}","$(cur)");
			me.__on_21.style.transition='none';
			me.__on_21.style.visibility='hidden';
			me.__on_21.ggVisible=false;
			me.__off_2.style.transition='none';
			me.__off_2.style.visibility=(Number(me.__off_2.style.opacity)>0||!me.__off_2.style.opacity)?'inherit':'hidden';
			me.__off_2.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_21.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_21.appendChild(me.__on_21);
		el=me.__213=document.createElement('div');
		els=me.__213__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-1\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__213.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__213.ggUpdateText();
		el.appendChild(els);
		me.__213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__213.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_21'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__213.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__213.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__213.style.transition='';
				if (me.__213.ggCurrentLogicStateVisible == 0) {
					me.__213.style.visibility=(Number(me.__213.style.opacity)>0||!me.__213.style.opacity)?'inherit':'hidden';
					me.__213.ggVisible=true;
				}
				else {
					me.__213.style.visibility="hidden";
					me.__213.ggVisible=false;
				}
			}
		}
		me.__213.logicBlock_visible();
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_21.appendChild(me.__213);
		me.__55.appendChild(me.__onoff_21);
		el=me.__onoff_1=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc695\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_1.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_1.ggCurrentLogicStateSize == 0) {
					me.__onoff_1.style.width='48px';
					me.__onoff_1.style.height='48px';
					me.__onoff_1.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_1.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_1);
				}
				else {
					me.__onoff_1.style.width='60px';
					me.__onoff_1.style.height='60px';
					me.__onoff_1.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_1.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_1);
				}
			}
		}
		me.__onoff_1.logicBlock_size();
		me.__onoff_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc695\uc2e41"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_1.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_1.ggCurrentLogicStateVisible == 0) {
					me.__onoff_1.style.visibility=(Number(me.__onoff_1.style.opacity)>0||!me.__onoff_1.style.opacity)?'inherit':'hidden';
					me.__onoff_1.ggVisible=true;
				}
				else {
					me.__onoff_1.style.visibility="hidden";
					me.__onoff_1.ggVisible=false;
				}
			}
		}
		me.__onoff_1.logicBlock_visible();
		me.__onoff_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_1.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_1.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_1.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_1.logicBlock_backgroundcolor();
		me.__onoff_1.onmouseover=function (e) {
			me.elementMouseOver['_onoff_1']=true;
			me.__112.logicBlock_visible();
		}
		me.__onoff_1.onmouseout=function (e) {
			me.elementMouseOver['_onoff_1']=false;
			me.__112.logicBlock_visible();
		}
		me.__onoff_1.ggCurrentLogicStateSize = -1;
		me.__onoff_1.ggCurrentLogicStateVisible = -1;
		me.__onoff_1.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_1']) {
				me.elementMouseOver['_onoff_1']=true;
				me.__112.logicBlock_visible();
			}
		}
		me.__onoff_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_1=document.createElement('div');
		els=me.__off_1__img=document.createElement('img');
		els.className='ggskin ggskin__off_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc695\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_1.style.transition='';
				if (me.__off_1.ggCurrentLogicStateVisible == 0) {
					me.__off_1.style.visibility=(Number(me.__off_1.style.opacity)>0||!me.__off_1.style.opacity)?'inherit':'hidden';
					me.__off_1.ggVisible=true;
				}
				else {
					me.__off_1.style.visibility="hidden";
					me.__off_1.ggVisible=false;
				}
			}
		}
		me.__off_1.logicBlock_visible();
		me.__off_1.onclick=function (e) {
			player.openNext("{node25}","$(cur)");
			me.__off_1.style.transition='none';
			me.__off_1.style.visibility='hidden';
			me.__off_1.ggVisible=false;
			me.__on_1.style.transition='none';
			me.__on_1.style.visibility=(Number(me.__on_1.style.opacity)>0||!me.__on_1.style.opacity)?'inherit':'hidden';
			me.__on_1.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_1.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_1.appendChild(me.__off_1);
		el=me.__on_1=document.createElement('div');
		els=me.__on_1__img=document.createElement('img');
		els.className='ggskin ggskin__on_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc695\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_1.style.transition='';
				if (me.__on_1.ggCurrentLogicStateVisible == 0) {
					me.__on_1.style.visibility=(Number(me.__on_1.style.opacity)>0||!me.__on_1.style.opacity)?'inherit':'hidden';
					me.__on_1.ggVisible=true;
				}
				else {
					me.__on_1.style.visibility=(Number(me.__on_1.style.opacity)>0||!me.__on_1.style.opacity)?'inherit':'hidden';
					me.__on_1.ggVisible=true;
				}
			}
		}
		me.__on_1.logicBlock_visible();
		me.__on_1.onclick=function (e) {
			player.openNext("{node6}","$(cur)");
			me.__on_1.style.transition='none';
			me.__on_1.style.visibility='hidden';
			me.__on_1.ggVisible=false;
			me.__off_1.style.transition='none';
			me.__off_1.style.visibility=(Number(me.__off_1.style.opacity)>0||!me.__off_1.style.opacity)?'inherit':'hidden';
			me.__off_1.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_1.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_1.appendChild(me.__on_1);
		el=me.__112=document.createElement('div');
		els=me.__112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__112.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__112.ggUpdateText();
		el.appendChild(els);
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__112.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__112.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__112.style.transition='';
				if (me.__112.ggCurrentLogicStateVisible == 0) {
					me.__112.style.visibility=(Number(me.__112.style.opacity)>0||!me.__112.style.opacity)?'inherit':'hidden';
					me.__112.ggVisible=true;
				}
				else {
					me.__112.style.visibility="hidden";
					me.__112.ggVisible=false;
				}
			}
		}
		me.__112.logicBlock_visible();
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_1.appendChild(me.__112);
		me.__55.appendChild(me.__onoff_1);
		el=me.__onoff_=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateSize == 0) {
					me.__onoff_.style.width='48px';
					me.__onoff_.style.height='48px';
					me.__onoff_.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_);
				}
				else {
					me.__onoff_.style.width='60px';
					me.__onoff_.style.height='60px';
					me.__onoff_.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_);
				}
			}
		}
		me.__onoff_.logicBlock_size();
		me.__onoff_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ud604\uad00"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateVisible == 0) {
					me.__onoff_.style.visibility=(Number(me.__onoff_.style.opacity)>0||!me.__onoff_.style.opacity)?'inherit':'hidden';
					me.__onoff_.ggVisible=true;
				}
				else if (me.__onoff_.ggCurrentLogicStateVisible == 1) {
					me.__onoff_.style.visibility="hidden";
					me.__onoff_.ggVisible=false;
				}
				else if (me.__onoff_.ggCurrentLogicStateVisible == 2) {
					me.__onoff_.style.visibility="hidden";
					me.__onoff_.ggVisible=false;
				}
				else {
					me.__onoff_.style.visibility="hidden";
					me.__onoff_.ggVisible=false;
				}
			}
		}
		me.__onoff_.logicBlock_visible();
		me.__onoff_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__onoff_.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__onoff_.logicBlock_backgroundcolor();
		me.__onoff_.onmouseover=function (e) {
			me.elementMouseOver['_onoff_']=true;
			me.__56.logicBlock_visible();
		}
		me.__onoff_.onmouseout=function (e) {
			me.elementMouseOver['_onoff_']=false;
			me.__56.logicBlock_visible();
		}
		me.__onoff_.ggCurrentLogicStateSize = -1;
		me.__onoff_.ggCurrentLogicStateVisible = -1;
		me.__onoff_.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_']) {
				me.elementMouseOver['_onoff_']=true;
				me.__56.logicBlock_visible();
			}
		}
		me.__onoff_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_=document.createElement('div');
		els=me.__off___img=document.createElement('img');
		els.className='ggskin ggskin__off_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__off_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_.style.transition='';
				if (me.__off_.ggCurrentLogicStateVisible == 0) {
					me.__off_.style.visibility=(Number(me.__off_.style.opacity)>0||!me.__off_.style.opacity)?'inherit':'hidden';
					me.__off_.ggVisible=true;
				}
				else {
					me.__off_.style.visibility="hidden";
					me.__off_.ggVisible=false;
				}
			}
		}
		me.__off_.logicBlock_visible();
		me.__off_.onclick=function (e) {
			player.openNext("{node20}","$(cur)");
			me.__off_.style.transition='none';
			me.__off_.style.visibility='hidden';
			me.__off_.ggVisible=false;
			me.__on_.style.transition='none';
			me.__on_.style.visibility=(Number(me.__on_.style.opacity)>0||!me.__on_.style.opacity)?'inherit':'hidden';
			me.__on_.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__off_);
		el=me.__on_=document.createElement('div');
		els=me.__on___img=document.createElement('img');
		els.className='ggskin ggskin__on_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_.style.transition='';
				if (me.__on_.ggCurrentLogicStateVisible == 0) {
					me.__on_.style.visibility=(Number(me.__on_.style.opacity)>0||!me.__on_.style.opacity)?'inherit':'hidden';
					me.__on_.ggVisible=true;
				}
				else {
					me.__on_.style.visibility="hidden";
					me.__on_.ggVisible=false;
				}
			}
		}
		me.__on_.logicBlock_visible();
		me.__on_.onclick=function (e) {
			player.openNext("{node19}","$(cur)");
			me.__on_.style.transition='none';
			me.__on_.style.visibility='hidden';
			me.__on_.ggVisible=false;
			me.__off_.style.transition='none';
			me.__off_.style.visibility=(Number(me.__off_.style.opacity)>0||!me.__off_.style.opacity)?'inherit':'hidden';
			me.__off_.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__on_);
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
				else {
					me.__56.style.visibility="hidden";
					me.__56.ggVisible=false;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__56);
		me.__55.appendChild(me.__onoff_);
		me.__41.appendChild(me.__55);
		el=me.__52=document.createElement('div');
		el.ggId="\uc635\uc158\uc628\uc624\ud504";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__52.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__52.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__52.style.transition='left 0s, top 0s';
				if (me.__52.ggCurrentLogicStatePosition == 0) {
					me.__52.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__52.style.top='200px';
				}
				else {
					me.__52.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__52.style.top='260px';
				}
			}
		}
		me.__52.logicBlock_position();
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__310=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__310.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__310.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__310.ggCurrentLogicStateSize = newLogicStateSize;
				me.__310.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__310.ggCurrentLogicStateSize == 0) {
					me.__310.style.width='48px';
					me.__310.style.height='48px';
					me.__310.style.left = 'calc(50% - (48px / 2))';
					me.__310.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__310);
				}
				else {
					me.__310.style.width='60px';
					me.__310.style.height='60px';
					me.__310.style.left = 'calc(50% - (60px / 2))';
					me.__310.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__310);
				}
			}
		}
		me.__310.logicBlock_size();
		me.__310.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__310.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__310.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__310.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__310.ggCurrentLogicStateBackgroundColor == 0) {
					me.__310.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__310.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__310.logicBlock_backgroundcolor();
		me.__310.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_2', !player.getVariableValue('vis_buttonbg_2'));
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me.__310.onmouseover=function (e) {
			me.elementMouseOver['_310']=true;
			me.__54.logicBlock_visible();
		}
		me.__310.onmouseout=function (e) {
			me.elementMouseOver['_310']=false;
			me.__54.logicBlock_visible();
		}
		me.__310.ggCurrentLogicStateSize = -1;
		me.__310.ggCurrentLogicStateBackgroundColor = -1;
		me.__310.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_310']) {
				me.elementMouseOver['_310']=true;
				me.__54.logicBlock_visible();
			}
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		el=me.__54=document.createElement('div');
		els=me.__54__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc635\uc158\uc628\uc624\ud504\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__54.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc635\uc158 ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__54.ggUpdateText();
		el.appendChild(els);
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_310'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me.__54);
		el=me.__53=document.createElement('div');
		els=me.__53__img=document.createElement('img');
		els.className='ggskin ggskin__53';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc635\uc158\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__53.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__53.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__53.style.transition='';
				if (me.__53.ggCurrentLogicStateVisible == 0) {
					me.__53.style.visibility="hidden";
					me.__53.ggVisible=false;
				}
				else {
					me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
					me.__53.ggVisible=true;
				}
			}
		}
		me.__53.logicBlock_visible();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me.__53);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyNjo1'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTErMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTErMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmEzYTc5NmE3LTJkYzgtNTI0OS05OTAxLTdkYTBjYTQwMjczYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphM2E3OTZhNy0yZGM4LTUyNDktOTkwMS03ZGEwY2E0MDI3M2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphM2E3OTZhNy0yZGM4LTUyNDktOTkwMS03ZGEwY2E0MD'+
			'I3M2EiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEzYTc5NmE3LTJkYzgtNTI0OS05OTAxLTdkYTBjYTQwMjczYSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyNjo1MCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsLu96sAAAvpSURBVHic7Z17sFVVHcc/9wjI'+
			'teQKWKEovnkIKCKBqChSgUiYhQOOGRAxUUrQUKPTSwi0Mu0B0ihTo4SWiYOQSphYiFL5oi6kgjyuCJlXQQKTd3D643fPvecezl57n7PX+q19YH9mGLh37bPW7/Dda+/1+P1+qyqbzXIE0BboAnQCugGnAqcAbYCPAB8CjgVaAFXA/4D9wC5gO7ATeAd4A9gI1AHrgLc1v4QLqipU4C5AP6A30B/oARxnuY0DwKvAauAF4G/APyy34ZxKEvgSYCgwGPi4JxteA54FngaeAPZ5siMySRa4LTAI6AVcB5zt1ZrDeRtYRFPvXufVmgCSKPCZwERgHFDj2ZZSeAi4GxE7MSRJ4P6IsNf7NiQmy4DZwKO+DYFkCNwJ+D4w1rMdtlkC/BB4zqcRPgX+BDAGeb+29GWEAk8BDwAP+mjch8BVyJ19i3bDnvkdcDOwRbNRbYGvBG'+
			'YB52g2miD2ITf2TK0GNQWeCUzSaizhLETGHO+7bijjugFkceIVUnHz+SyyHDrFdUOue/A0YKrLBo4AFgDXuqrcpcD3AV90VfkRxp+BIcgmiFVcPKLbAg+TilsKg4B/AhfYrth2D74IeBw40WalRxk3AvfYqsymwD2QuzAlPtcAv7dRkS2BTwJWIZvrKXYYBvwhbiU23sF9gJVUhrgbkU38SmAxFtbn4wrcB3gJ6cFJZicy9zwbeZX0RexOOvcDE+JUEOcR3QL4APF1SjJZoCfFe+56kudIUIzTgTfL+WCcHryA5IsL8AjBj+W7NQ2JwV+AVuV8sFyB7weuLvOz2pgc5d5TsyIeHYGXgdalfrAcgSttc95055fVKzzRE9lbLolSBR4I3FpqI54xfccqNSvsMAD4WikfKFXgh0q8PsU+dyCO/JEoReBZQIeSzUmxTTUy'+
			'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'+
			'+uAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_9.style.transition='';
				if (me._image_9.ggCurrentLogicStateVisible == 0) {
					me._image_9.style.visibility=(Number(me._image_9.style.opacity)>0||!me._image_9.style.opacity)?'inherit':'hidden';
					me._image_9.ggVisible=true;
				}
				else {
					me._image_9.style.visibility="hidden";
					me._image_9.ggVisible=false;
				}
			}
		}
		me._image_9.logicBlock_visible();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me._image_9);
		me.__52.appendChild(me.__310);
		me.__41.appendChild(me.__52);
		el=me.__49=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 340px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__49.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__49.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__49.style.transition='left 0s, top 0s';
				if (me.__49.ggCurrentLogicStatePosition == 0) {
					me.__49.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__49.style.top='260px';
				}
				else {
					me.__49.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__49.style.top='340px';
				}
			}
		}
		me.__49.logicBlock_position();
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__410=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__410.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__410.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__410.ggCurrentLogicStateSize = newLogicStateSize;
				me.__410.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__410.ggCurrentLogicStateSize == 0) {
					me.__410.style.width='48px';
					me.__410.style.height='48px';
					me.__410.style.left = 'calc(50% - (48px / 2))';
					me.__410.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__410);
				}
				else {
					me.__410.style.width='60px';
					me.__410.style.height='60px';
					me.__410.style.left = 'calc(50% - (60px / 2))';
					me.__410.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__410);
				}
			}
		}
		me.__410.logicBlock_size();
		me.__410.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__410.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__410.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__410.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__410.ggCurrentLogicStateBackgroundColor == 0) {
					me.__410.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__410.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__410.logicBlock_backgroundcolor();
		me.__410.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_3', !player.getVariableValue('vis_buttonbg_3'));
			player.toggleFullscreen();
		}
		me.__410.onmouseover=function (e) {
			me.elementMouseOver['_410']=true;
			me.__51.logicBlock_visible();
		}
		me.__410.onmouseout=function (e) {
			me.elementMouseOver['_410']=false;
			me.__51.logicBlock_visible();
		}
		me.__410.ggCurrentLogicStateSize = -1;
		me.__410.ggCurrentLogicStateBackgroundColor = -1;
		me.__410.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_410']) {
				me.elementMouseOver['_410']=true;
				me.__51.logicBlock_visible();
			}
		}
		me.__410.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		els=me.__51__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\uc628\uc624\ud504\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__51.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__51.ggUpdateText();
		el.appendChild(els);
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_410'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__51.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__51.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__51.style.transition='';
				if (me.__51.ggCurrentLogicStateVisible == 0) {
					me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
					me.__51.ggVisible=true;
				}
				else {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
			}
		}
		me.__51.logicBlock_visible();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me.__51);
		el=me.__50=document.createElement('div');
		els=me.__50__img=document.createElement('img');
		els.className='ggskin ggskin__50';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACrklEQVR4nO3cP2sTcRzH8fdd0n+i1H8EukoVB3cXJ5+AoI9AcHLsU3AXZ518Bj6DdnJwctDBQRzU2kHEgqUqrXFIBk1zl0tyud/1y/sFmXLkPvSdpKVwlwHPgJvAMe3RAV4BD1IPqeg+sAUcpR7yjxz40AVuAdcTjxlnOfWAKVwFbqQeMcZmDuylXlGgrbvG2U89oMCnPPUCLZaBgzNwcG0OfJr+yOqmHlCkzYHXUg+YwlLqAUWqvPO2gJc0+2ZYBr42eL55PQV2gF8NnrMPrAMvgNWig6oE3gZe1zIprt3hI4XSf1BV+VRu1DRE9bsIZGUHtPl3sGpg4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcA'+
			'YOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OBy4MqEY841MUQz6QBnSp6/1gUeM7gJy+hFTBmDN8CbxWxTDQ6AJ8AK8GfkuQ7wpelBkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqToMuA2sMH4WxlmwDbeEq+tloE7wBInb2WYA/sA74B+yeNeQ2M1vR7l7Q5zYG/CixwucqHmcgz8Lnn+c87Jj/aofn17tACjv1r/e84bggdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4AwdXJfCPha/QrL4z4cqTboUXOT88Lpt/T2VLDK65OWrwnPPIgTXKrxNahEtM6FIl8HMGF6A1+XW+AuwAdxs85zweAo+Anw2esw90gNWyg6oEvjB8NG0z'+
			'wTln1WPwTdc6bf4j61vqAVM4SD2gSJsDqwYGDs7AweXA5dQjCrR11zhnUw8o0OsCb4F12nWrhozBrtNiF/hI+36G7/8CwN1O7BtfIr8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50.style.transition='';
				if (me.__50.ggCurrentLogicStateVisible == 0) {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
				else {
					me.__50.style.visibility=(Number(me.__50.style.opacity)>0||!me.__50.style.opacity)?'inherit':'hidden';
					me.__50.ggVisible=true;
				}
			}
		}
		me.__50.logicBlock_visible();
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me.__50);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNTow'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY1YTIyOWNhLTE5NjgtZWQ0Ni1iNGY2LWM2YWViMGQ1MjI1YSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmNWEyMjljYS0xOTY4LWVkNDYtYjRmNi1jNmFlYjBkNTIyNWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNWEyMjljYS0xOTY4LWVkNDYtYjRmNi1jNmFlYjBkNT'+
			'IyNWEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY1YTIyOWNhLTE5NjgtZWQ0Ni1iNGY2LWM2YWViMGQ1MjI1YSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNTowMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgUqjYgAAAMHSURBVHic7dy9ahRhAIXhd2Z/'+
			'kogS/1hIKzFY2NtYeQOCeAOClWVuwV6stfICBO8gqSysLLSwEAs1iSBiwGCUxLGYLXSzMzu7O/t9Xw7ngVQz7Bx8N9lFmMmKongK3ACOSUcHeAXcjz2koXvAJnAUe8g/cuBDF7gJXIs8Zpx+7AFTuApcjz1ijPUc2Iu9okKqu8bZjz2gwqc89gJbLAcW58DiUg58mr5kdWMPqJJy4JXYA6bQiz2gSpN33ibwkrBvhj7wNeD15vUE2AZ+BbxmAawCL4DlqpOaBN4CXrcySdfO8CeG2v+gavJbudbSEGvfRSCrOyHlz2BrgQOLc2BxDizOgcU5sDgHFufA4hxYnAOLc2BxDizOgcU5sDgHFufA4hxYnAOLc2BxDizOgcU5sDgHFufA4hxYnAOLy4ErE845F2KIzaQDnKk5vtEFHlE+hGX0JqaM8g3wZjHbrAUHwGNgCf'+
			'gzcqwD7GZFUYQeZQH5M1icA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFhcF7gFrDH+UYYZsAXsBt5lzfSB20CPk48yzIH9rCiKd8BGzYvcBZ4vZp/NaQB8qTl+mAN7E17kZ3t7rGXHwO+a459zTv5qj/LTStM2+tH63zF/yRLnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbXJPCPha+wWX1nwp0n3QYvcn54Xjb/nsZ6lPfcHAW85jxyYIX6+4QW4RITujQJ/IzyBrSQf86XgG3gTsBrzuMB8BA4DHjN'+
			'AugAy3UnNQl8YfgT2nqEa85qQPmXLjkpf8n6FnvAFA5iD6iScmBrgQOLc2BxOXA59ogKqe4a52zsARUGXeAtsEpaj2rIKHedFjvAR9L7N3z/F7tKTAa8NAeFAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_10.style.transition='';
				if (me._image_10.ggCurrentLogicStateVisible == 0) {
					me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
					me._image_10.ggVisible=true;
				}
				else {
					me._image_10.style.visibility="hidden";
					me._image_10.ggVisible=false;
				}
			}
		}
		me._image_10.logicBlock_visible();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me._image_10);
		me.__49.appendChild(me.__410);
		me.__41.appendChild(me.__49);
		el=me.__45=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc84\ud2bc";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 420px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__45.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__45.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__45.style.transition='left 0s, top 0s';
				if (me.__45.ggCurrentLogicStatePosition == 0) {
					me.__45.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__45.style.top='320px';
				}
				else {
					me.__45.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__45.style.top='420px';
				}
			}
		}
		me.__45.logicBlock_position();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__46.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__46.ggCurrentLogicStateSize = newLogicStateSize;
				me.__46.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__46.ggCurrentLogicStateSize == 0) {
					me.__46.style.width='48px';
					me.__46.style.height='48px';
					me.__46.style.left = 'calc(50% - (48px / 2))';
					me.__46.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__46);
				}
				else {
					me.__46.style.width='60px';
					me.__46.style.height='60px';
					me.__46.style.left = 'calc(50% - (60px / 2))';
					me.__46.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__46);
				}
			}
		}
		me.__46.logicBlock_size();
		me.__46.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__46.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__46.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__46.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__46.ggCurrentLogicStateBackgroundColor == 0) {
					me.__46.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__46.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__46.logicBlock_backgroundcolor();
		me.__46.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_5', !player.getVariableValue('vis_buttonbg_5'));
			me.__18.ggVisible = !me.__18.ggVisible;
			var flag=me.__18.ggVisible;
			me.__18.style.transition='none';
			me.__18.style.visibility=((flag)&&(Number(me.__18.style.opacity)>0||!me.__18.style.opacity))?'inherit':'hidden';
		}
		me.__46.onmouseover=function (e) {
			me.elementMouseOver['_46']=true;
			me.__48.logicBlock_visible();
		}
		me.__46.onmouseout=function (e) {
			me.elementMouseOver['_46']=false;
			me.__48.logicBlock_visible();
		}
		me.__46.ggCurrentLogicStateSize = -1;
		me.__46.ggCurrentLogicStateBackgroundColor = -1;
		me.__46.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_46']) {
				me.elementMouseOver['_46']=true;
				me.__48.logicBlock_visible();
			}
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		els=me.__48__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__48.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__48.ggUpdateText();
		el.appendChild(els);
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_46'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__48.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__48.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__48.style.transition='';
				if (me.__48.ggCurrentLogicStateVisible == 0) {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
				else {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
			}
		}
		me.__48.logicBlock_visible();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		els=me.__47__img=document.createElement('img');
		els.className='ggskin ggskin__47';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC8klEQVR4nO3dMWuUQRSF4XeGxCKwNtHe1P4TCYq9pBM7LSSF9oKggtipjZq1kVgE0V8hllYxsRZNsYE0itdiYxpBJriT++3xPDDdBs7wEsiSYkpEUEoZAXeBC8Ay820XGEfEveP8UCllHbgCrHRZdXK+Ae+AWxExARgB20CInXFE0HKAjQHsnfXZOWzL0wGM6XVWG+JeGsDOXucxwN4AhvQ6mw2BNwews9fZq8ASukYz+sy8WqrA9+wVHbXcTfr+lemvsqqWu0nfv2YvsL4cWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szo'+
			'HFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi6toR1a+W5MKLGSP6Ggxe0C2CnzJHtHR5+wB2SpwP3tERw+zB2SrEfGI6aMUaq5FxMfsEdkWACJirZTymukDFWdzJ/2zbWAjIj5kDxmCoz+wImIL2ErcYh38918j1DmwOAcW58DiHFicA4tzYHFH34NLKZeBi8CZvDkzsQ28jIj32UMG4fAFzufkv5Q563O18e3gNwPY2utMainlOrD2R/n596SUcj57RLYKrGeP6OhG9oBslfn/58LfnMsekK0CP7JHdKT8NnCTCvzMHtGR8t2a+HuwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58Di'+
			'HFicA4tzYHEOLM6BxTmwOAcW58DiKlCyR3TUcjfp+1e039g91fAZ5fsvVuAge0VHk4bP7HdfkeegApvZKzp61vAZxad1f3sFMAI+kf+AxKzPuOVRjsOHOcYD2DvrswOMSkRQSjkN3AFWgWXm2y7wIiIeHOeHSik3mT5OstJl1cn5CrwFbkfE/i8TZP0AMd0DLwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__47);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozODo1'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMTliMzZmLWE3YWItNGU0Yi04NjliLTYyNjE3YTQ3MGEzYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjE5YjM2Zi1hN2FiLTRlNGItODY5Yi02MjYxN2E0NzBhM2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjE5YjM2Zi1hN2FiLTRlNGItODY5Yi02MjYxN2E0Nz'+
			'BhM2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMTliMzZmLWE3YWItNGU0Yi04NjliLTYyNjE3YTQ3MGEzYyIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozODo1MSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuawJN4AAALlSURBVHic7d09a5RBGIXh+30w'+
			'FoG1ifZGS4v8D/EDESujWIh2KoiF9oKgglgmjR9JIwoKml8hamUVWGvRJoE0imPxupBKJ/BOnuzxXGA3C2e4A3G1mK6UAjAC7gHHgTmm2xhYAe7v8HO3gEVgfvBFu+s7sAbcBja6UsoI+AgcTZ01vFX6YDWe7+DstBgDC10pZRm4nL2mkZPA23+cOQ28bj8lxVIAZ7NXNHSp4syF1iMSnQtgNntFQ6OBzkyr2QB+ZK9oqOZu0vcPoGSvaKjmbtL3j+wF1pYDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcYF2ZOW7VQlgX/aIhmayB2QL4Gv2iIa+ZA/IFsCD7B'+
			'ENPcoekC2Ax/SPUqi5CnzOHpFt8vv3IvCK/oGKQ3lzBrFO/wP7IXvIXrD9L1hv/vwxIf/91wh1DizOgcU5sDgHFufA4hxY3PbvwWeAU8DBpC1DWad/WvZ99pC9YBL4Kf2/Zqm4AVwBlpN3pAvgGlpxJ5aAY9kjsgX90+aqrmcPyBZM/38u/M3h7AHZAviZPaIh5beBqwTwK3tEQ8p3q+LvweIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDiwugyx7RUM3dpO8faL+xu7/ijPL9ZwLYyl7R0EbFmc3mK/JsBfAye0VDTyrOKD6tO/GiK6WMgE/AkeQxQ1sFFivP'+
			'rgDnG27JMAYWulIKwAHgLnACmMtcNYAx8Ax4uMPP3aR/nGR+8EW76xvwDrgDbP4GqSlQJjFJSlsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_12.style.transition='';
				if (me._image_12.ggCurrentLogicStateVisible == 0) {
					me._image_12.style.visibility="hidden";
					me._image_12.ggVisible=false;
				}
				else {
					me._image_12.style.visibility=(Number(me._image_12.style.opacity)>0||!me._image_12.style.opacity)?'inherit':'hidden';
					me._image_12.ggVisible=true;
				}
			}
		}
		me._image_12.logicBlock_visible();
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me._image_12);
		me.__45.appendChild(me.__46);
		me.__41.appendChild(me.__45);
		el=me.__42=document.createElement('div');
		el.ggId="\ucc38\uace0\ub0b4\uc6a9";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 500px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__42.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__42.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__42.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__42.ggCurrentLogicStatePosition == 0) {
					me.__42.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__42.style.top='380px';
				}
				else {
					me.__42.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__42.style.top='500px';
				}
			}
		}
		me.__42.logicBlock_position();
		me.__42.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1450))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__42.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__42.ggCurrentLogicStateSize = newLogicStateSize;
				me.__42.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__42.ggCurrentLogicStateSize == 0) {
					me.__42.style.width='48px';
					me.__42.style.height='48px';
					me.__42.style.left = 'calc(50% - (48px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me.__42);
				}
				else {
					me.__42.style.width='60px';
					me.__42.style.height='60px';
					me.__42.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me.__42);
				}
			}
		}
		me.__42.logicBlock_size();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__61.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__61.ggCurrentLogicStateSize = newLogicStateSize;
				me.__61.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__61.ggCurrentLogicStateSize == 0) {
					me.__61.style.width='48px';
					me.__61.style.height='48px';
					me.__61.style.left = 'calc(50% - (48px / 2))';
					me.__61.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__61);
				}
				else {
					me.__61.style.width='60px';
					me.__61.style.height='60px';
					me.__61.style.left = 'calc(50% - (60px / 2))';
					me.__61.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__61);
				}
			}
		}
		me.__61.logicBlock_size();
		me.__61.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__61.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__61.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__61.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__61.ggCurrentLogicStateBackgroundColor == 0) {
					me.__61.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__61.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__61.logicBlock_backgroundcolor();
		me.__61.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_6', !player.getVariableValue('vis_buttonbg_6'));
			me.__73.ggVisible = !me.__73.ggVisible;
			var flag=me.__73.ggVisible;
			me.__73.style.transition='none';
			me.__73.style.visibility=((flag)&&(Number(me.__73.style.opacity)>0||!me.__73.style.opacity))?'inherit':'hidden';
		}
		me.__61.onmouseover=function (e) {
			me.elementMouseOver['_61']=true;
			me.__44.logicBlock_visible();
		}
		me.__61.onmouseout=function (e) {
			me.elementMouseOver['_61']=false;
			me.__44.logicBlock_visible();
		}
		me.__61.ggCurrentLogicStateSize = -1;
		me.__61.ggCurrentLogicStateBackgroundColor = -1;
		me.__61.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_61']) {
				me.elementMouseOver['_61']=true;
				me.__44.logicBlock_visible();
			}
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		els=me.__44__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__44.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc38\uace0\ub0b4\uc6a9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__44.ggUpdateText();
		el.appendChild(els);
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_61'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__44.style.transition='';
				if (me.__44.ggCurrentLogicStateVisible == 0) {
					me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
					me.__44.ggVisible=true;
				}
				else {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
			}
		}
		me.__44.logicBlock_visible();
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__44);
		el=me.__43=document.createElement('div');
		els=me.__43__img=document.createElement('img');
		els.className='ggskin ggskin__43';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__43);
		el=me._off7=document.createElement('div');
		els=me._off7__img=document.createElement('img');
		els.className='ggskin ggskin_off7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYzg3YjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYz'+
			'g3YjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsiQM2oAAAvASURBVHic7Z17sFVVHcc/XEFo'+
			'fIGRIAlJykUKOLcxMysLC9OpJNMeGihTgBkXrLEyzGymicBHTQjV5MWcXlr2UEIUh3wAiXExi2jCEB0YDCHKkYAhIHH1x+9u3BzO3nvttX5n733O2Z+ZPcNln/XY53vWY6/f+v1WL2MMJXWnAowHxgDDgdcDJwB9gf3ALmArsAn4K/AwsFaj4F6lwHXjbOBy4IPA6Q7pnwMeBH4O/MG1EqXA+rwLuAb4mGKevwHmAyvTJiwF1uPdwEzgo3Us4z5gAfCYbYJSYB1mAzdkWN4twJdtPlgK7MeJwL3Ae3Io+wngEuCfcR8qBXbntchM95Qc67AdmaHviPpAW3Z1aSrGAE+Sr7gAg3vq0R71gbIFp2cssAZ5hy0KO4GR1GjJZQtORxHFBegPPF7rRimwPYMoprgBI4A7qv+z7KLtqAAPIWNe0TkL+GPwRylwMhWgm+K23G'+
			'r+AnQEf5RddDyjaSxxQX6QFwd/lC04mpOB9cgERovngQ3AcuBp4D/A8cAoYBwyEx6mUM5Gel6dSoFrUwFWICY9DfYB04C7gVdiPtcLuAxYCBzjWeZlwD2lwEeiPeZuBD4EPJMizWnAEuAMj3JXAONKgQ+nHViHnrirka53v0Pa3siE6U0e5Z9UTrJeZQTwKHriLgbOwU1cgJcRE+QmjzpMKFuwUEFaWz+l/FYj4mrwTiJWqSy4txRYf8zVFDdgB/A6h3RPtXoXPZTiiwtwj2O6Y1pZ4DHAKvTEXUR9xAXZk+XCCb1Vq9E4VBDDwdFK+a0GPqKUVy02OKbr24otOBhztcTtpn4tN2AXsMchXZ9WE3gQumPu48DblfKKoy/QxyHdwVYSuIIsHGiJ+wBwrlJeSQzFrd4HWmUM1h5zu4GLlPKywfWHtLcVWvAY9MU9B8hy'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58-off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off7.style.transition='';
				if (me._off7.ggCurrentLogicStateVisible == 0) {
					me._off7.style.visibility=(Number(me._off7.style.opacity)>0||!me._off7.style.opacity)?'inherit':'hidden';
					me._off7.ggVisible=true;
				}
				else {
					me._off7.style.visibility="hidden";
					me._off7.ggVisible=false;
				}
			}
		}
		me._off7.logicBlock_visible();
		me._off7.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me._off7);
		me.__42.appendChild(me.__61);
		me.__41.appendChild(me.__42);
		me.__39.appendChild(me.__41);
		me.divSkin.appendChild(me.__39);
		el=me.__27=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 45.57em;';
		hs+='left : calc(50% - ((81.57em + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45.57em + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 81.57em;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else if (me.__27.ggCurrentLogicStateVisible == 1) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #363533;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1a1a1a;';
		hs+='border-color : #ffffff;';
		hs+='border-radius : 5px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='cursor : default;';
		hs+='height : 4.07em;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		els=me.__38__img=document.createElement('img');
		els.className='ggskin ggskin__38';
		hs='data:image/png;base64,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'+
			'AAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4-\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 11%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__37.appendChild(me.__38);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30.52%;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : calc(50% - ((30.52% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1.7%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			me.__27.style.transition='none';
			me.__27.style.visibility='hidden';
			me.__27.ggVisible=false;
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.__37.appendChild(me._image_4);
		me.__28.appendChild(me.__37);
		el=me.__33=document.createElement('div');
		el.ggId="\ud0c0\uc785\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1a1a1a;';
		hs+='border-color : #ffffff;';
		hs+='border-radius : 5px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 1px;';
		hs+='bottom : -1px;';
		hs+='cursor : default;';
		hs+='height : 41.50em;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 13em;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\ud0c0\uc785\ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 104px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\uc548\ub0b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #bf8e58;';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 2.93em;';
		hs+='left : calc(50% - ((100% + 1px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:10px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\uc548\ub0b4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		el.appendChild(els);
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me.__36);
		el=me.__111=document.createElement('div');
		els=me.__111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc7851";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 4.57em;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__111.ggUpdateText=function() {
			var params = [];
			var hs = player._("74A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__111.ggUpdateText();
		el.appendChild(els);
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_type1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__111.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__111.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__111.style.transition='background-color 0s, color 0s';
				if (me.__111.ggCurrentLogicStateBackgroundColor == 0) {
					me.__111.style.backgroundColor="rgba(39,38,37,1)";
				}
				else {
					me.__111.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__111.logicBlock_backgroundcolor();
		me.__111.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_type1') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__111.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__111.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__111.style.transition='background-color 0s, color 0s';
				if (me.__111.ggCurrentLogicStateTextColor == 0) {
					me.__111.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__111.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__111.logicBlock_textcolor();
		me.__111.onclick=function (e) {
			player.setVariableValue('vis_type1', true);
			player.setVariableValue('vis_type2', false);
			player.setVariableValue('vis_type3', false);
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me.__111);
		el=me.__212=document.createElement('div');
		els=me.__212__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc7852";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 4.57em;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 108px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__212.ggUpdateText=function() {
			var params = [];
			var hs = player._("74B TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__212.ggUpdateText();
		el.appendChild(els);
		me.__212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__212.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_type2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__212.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__212.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__212.style.transition='background-color 0s, color 0s';
				if (me.__212.ggCurrentLogicStateBackgroundColor == 0) {
					me.__212.style.backgroundColor="rgba(39,38,37,1)";
				}
				else {
					me.__212.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__212.logicBlock_backgroundcolor();
		me.__212.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_type2') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__212.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__212.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__212.style.transition='background-color 0s, color 0s';
				if (me.__212.ggCurrentLogicStateTextColor == 0) {
					me.__212.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__212.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__212.logicBlock_textcolor();
		me.__212.onclick=function (e) {
			player.setVariableValue('vis_type1', false);
			player.setVariableValue('vis_type2', true);
			player.setVariableValue('vis_type3', false);
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me.__212);
		el=me.__35=document.createElement('div');
		els=me.__35__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc7853";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 4.57em;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 172px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__35.ggUpdateText=function() {
			var params = [];
			var hs = player._("84A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__35.ggUpdateText();
		el.appendChild(els);
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_type3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__35.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__35.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__35.style.transition='background-color 0s, color 0s';
				if (me.__35.ggCurrentLogicStateBackgroundColor == 0) {
					me.__35.style.backgroundColor="rgba(39,38,37,1)";
				}
				else {
					me.__35.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__35.logicBlock_backgroundcolor();
		me.__35.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_type3') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__35.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__35.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__35.style.transition='background-color 0s, color 0s';
				if (me.__35.ggCurrentLogicStateTextColor == 0) {
					me.__35.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__35.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__35.logicBlock_textcolor();
		me.__35.onclick=function (e) {
			player.setVariableValue('vis_type1', false);
			player.setVariableValue('vis_type2', false);
			player.setVariableValue('vis_type3', true);
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me.__35);
		me.__33.appendChild(me.__34);
		me.__28.appendChild(me.__33);
		el=me.__29=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uadf8\ub9bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41.50em;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 68.57em;';
		hs+='pointer-events:none;';
		hs+='over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		el.ggId="\uceec\ub7ec\ud3c9\uba74\ub3c43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 20.71em;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 24.14em;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 70.06%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uceec\ub7ec\ud3c9\uba74\ub3c4\uc124\uba853";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -8%;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 19px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc635\uc158 2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me._image_3.appendChild(me.__32);
		me.__31.appendChild(me._image_3);
		me.__29.appendChild(me.__31);
		el=me.__210=document.createElement('div');
		el.ggId="\uceec\ub7ec\ud3c9\uba74\ub3c42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20.71em;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 24.14em;';
		hs+='pointer-events:none;';
		hs+='border-bottom:1px solid rgba(255,255,255,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 70.0613%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211=document.createElement('div');
		els=me.__211__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uceec\ub7ec\ud3c9\uba74\ub3c4\uc124\uba852";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -4%;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__211.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc635\uc158 1 ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__211.ggUpdateText();
		el.appendChild(els);
		me.__211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me.__211);
		me.__210.appendChild(me._image_2);
		me.__29.appendChild(me.__210);
		el=me.__110=document.createElement('div');
		el.ggId="\uceec\ub7ec\ud3c9\uba74\ub3c41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41.43em;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 44.21em;';
		hs+='pointer-events:none;';
		hs+='border-right: 1px solid rgba(255,255,255,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 81.9608%;';
		hs+='left : calc(50% - ((110% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 110%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 3%;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 13%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uae30\ubcf8\ud615", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._text_1);
		me.__110.appendChild(me._image_1);
		me.__29.appendChild(me.__110);
		me.__28.appendChild(me.__29);
		me.__27.appendChild(me.__28);
		me.divSkin.appendChild(me.__27);
		el=me.__25=document.createElement('div');
		el.ggId="\uba54\uc778\uce74\ud14c\uace0\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 3.10em;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__25.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__25.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__25.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__25.style.transition='';
				if (me.__25.ggCurrentLogicStateVisible == 0) {
					me.__25.style.visibility="hidden";
					me.__25.ggVisible=false;
				}
				else if (me.__25.ggCurrentLogicStateVisible == 1) {
					me.__25.style.visibility="hidden";
					me.__25.ggVisible=false;
				}
				else {
					me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
					me.__25.ggVisible=true;
				}
			}
		}
		me.__25.logicBlock_visible();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		el.ggId="\uba54\uc778\uce74\ud14c\uace0\ub9ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color:rgba(0,0,0,0.65);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me._on0=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 1.3%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on0.style.transition='';
				if (me._on0.ggCurrentLogicStateVisible == 0) {
					me._on0.style.visibility=(Number(me._on0.style.opacity)>0||!me._on0.style.opacity)?'inherit':'hidden';
					me._on0.ggVisible=true;
				}
				else {
					me._on0.style.visibility="hidden";
					me._on0.ggVisible=false;
				}
			}
		}
		me._on0.logicBlock_visible();
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		el=me._on4=document.createElement('div');
		els=me._on4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on4.ggUpdateText();
		el.appendChild(els);
		me._on4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_8') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on4.style.transition='color 0s';
				if (me._on4.ggCurrentLogicStateTextColor == 0) {
					me._on4.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on4.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on4.logicBlock_textcolor();
		me._on4.onclick=function (e) {
			player.openNext("{node3}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', true);
		}
		me._on4.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me._on4);
		el=me.__2on0=document.createElement('div');
		els=me.__2on0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 130px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2on0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2on0.ggUpdateText();
		el.appendChild(els);
		me.__2on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2on0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_7') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2on0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2on0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2on0.style.transition='color 0s';
				if (me.__2on0.ggCurrentLogicStateTextColor == 0) {
					me.__2on0.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__2on0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2on0.logicBlock_textcolor();
		me.__2on0.onclick=function (e) {
			player.openNext("{node7}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', true);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__2on0.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me.__2on0);
		el=me.__1on0=document.createElement('div');
		els=me.__1on0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 260px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1on0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1on0.ggUpdateText();
		el.appendChild(els);
		me.__1on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1on0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_6') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1on0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1on0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1on0.style.transition='color 0s';
				if (me.__1on0.ggCurrentLogicStateTextColor == 0) {
					me.__1on0.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__1on0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__1on0.logicBlock_textcolor();
		me.__1on0.onclick=function (e) {
			player.openNext("{node6}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', true);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__1on0.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me.__1on0);
		el=me.__3on=document.createElement('div');
		els=me.__3on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 390px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e43\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3on.ggUpdateText();
		el.appendChild(els);
		me.__3on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_5') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3on.style.transition='color 0s';
				if (me.__3on.ggCurrentLogicStateTextColor == 0) {
					me.__3on.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__3on.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__3on.logicBlock_textcolor();
		me.__3on.onclick=function (e) {
			player.openNext("{node10}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', true);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__3on.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me.__3on);
		el=me.__2on=document.createElement('div');
		els=me.__2on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 520px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2on.ggUpdateText();
		el.appendChild(els);
		me.__2on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_4') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2on.style.transition='color 0s';
				if (me.__2on.ggCurrentLogicStateTextColor == 0) {
					me.__2on.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__2on.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2on.logicBlock_textcolor();
		me.__2on.onclick=function (e) {
			player.openNext("{node9}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', true);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__2on.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me.__2on);
		el=me.__1on=document.createElement('div');
		els=me.__1on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 650px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1on.ggUpdateText();
		el.appendChild(els);
		me.__1on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_3') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1on.style.transition='color 0s';
				if (me.__1on.ggCurrentLogicStateTextColor == 0) {
					me.__1on.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__1on.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__1on.logicBlock_textcolor();
		me.__1on.onclick=function (e) {
			player.openNext("{node5}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', true);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__1on.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me.__1on);
		el=me._on3=document.createElement('div');
		els=me._on3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 780px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on3.ggUpdateText();
		el.appendChild(els);
		me._on3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_2') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on3.style.transition='color 0s';
				if (me._on3.ggCurrentLogicStateTextColor == 0) {
					me._on3.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on3.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on3.logicBlock_textcolor();
		me._on3.onclick=function (e) {
			player.openNext("{node8}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', true);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me._on3.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me._on3);
		el=me._on2=document.createElement('div');
		els=me._on2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 910px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on2.ggUpdateText();
		el.appendChild(els);
		me._on2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_1') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on2.style.transition='color 0s';
				if (me._on2.ggCurrentLogicStateTextColor == 0) {
					me._on2.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on2.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on2.logicBlock_textcolor();
		me._on2.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', true);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me._on2.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me._on2);
		el=me._on1=document.createElement('div');
		els=me._on1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 1040px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on1.ggUpdateText();
		el.appendChild(els);
		me._on1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on1.style.transition='color 0s';
				if (me._on1.ggCurrentLogicStateTextColor == 0) {
					me._on1.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on1.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on1.logicBlock_textcolor();
		me._on1.onclick=function (e) {
			player.openNext("{node19}","");
			player.setVariableValue('vis_roombutton', true);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me._on1.ggUpdatePosition=function (useTransition) {
		}
		me._on0.appendChild(me._on1);
		me.__26.appendChild(me._on0);
		el=me._off2=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac-\uac00\uad6cOFF";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 1.3%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off2.style.transition='';
				if (me._off2.ggCurrentLogicStateVisible == 0) {
					me._off2.style.visibility=(Number(me._off2.style.opacity)>0||!me._off2.style.opacity)?'inherit':'hidden';
					me._off2.ggVisible=true;
				}
				else {
					me._off2.style.visibility="hidden";
					me._off2.ggVisible=false;
				}
			}
		}
		me._off2.logicBlock_visible();
		me._off2.ggUpdatePosition=function (useTransition) {
		}
		el=me._off6=document.createElement('div');
		els=me._off6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off6.ggUpdateText();
		el.appendChild(els);
		me._off6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off6.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_8') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._off6.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._off6.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._off6.style.transition='color 0s';
				if (me._off6.ggCurrentLogicStateTextColor == 0) {
					me._off6.style.color="rgba(196,145,89,1)";
				}
				else {
					me._off6.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._off6.logicBlock_textcolor();
		me._off6.onclick=function (e) {
			player.openNext("{node35}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', true);
		}
		me._off6.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me._off6);
		el=me.__2off0=document.createElement('div');
		els=me.__2off0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 130px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2off0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2off0.ggUpdateText();
		el.appendChild(els);
		me.__2off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2off0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_7') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2off0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2off0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2off0.style.transition='color 0s';
				if (me.__2off0.ggCurrentLogicStateTextColor == 0) {
					me.__2off0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__2off0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2off0.logicBlock_textcolor();
		me.__2off0.onclick=function (e) {
			player.openNext("{node36}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', true);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__2off0.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me.__2off0);
		el=me.__1off0=document.createElement('div');
		els=me.__1off0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 260px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1off0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1off0.ggUpdateText();
		el.appendChild(els);
		me.__1off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1off0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_6') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1off0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1off0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1off0.style.transition='color 0s';
				if (me.__1off0.ggCurrentLogicStateTextColor == 0) {
					me.__1off0.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__1off0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__1off0.logicBlock_textcolor();
		me.__1off0.onclick=function (e) {
			player.openNext("{node25}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', true);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__1off0.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me.__1off0);
		el=me.__3off=document.createElement('div');
		els=me.__3off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 390px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e43\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3off.ggUpdateText();
		el.appendChild(els);
		me.__3off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3off.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_5') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3off.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3off.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3off.style.transition='color 0s';
				if (me.__3off.ggCurrentLogicStateTextColor == 0) {
					me.__3off.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__3off.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__3off.logicBlock_textcolor();
		me.__3off.onclick=function (e) {
			player.openNext("{node28}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', true);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__3off.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me.__3off);
		el=me.__2off=document.createElement('div');
		els=me.__2off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 520px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2off.ggUpdateText();
		el.appendChild(els);
		me.__2off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2off.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_4') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2off.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2off.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2off.style.transition='color 0s';
				if (me.__2off.ggCurrentLogicStateTextColor == 0) {
					me.__2off.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__2off.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2off.logicBlock_textcolor();
		me.__2off.onclick=function (e) {
			player.openNext("{node26}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', true);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__2off.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me.__2off);
		el=me.__1off=document.createElement('div');
		els=me.__1off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 650px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1off.ggUpdateText();
		el.appendChild(els);
		me.__1off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1off.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_3') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1off.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1off.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1off.style.transition='color 0s';
				if (me.__1off.ggCurrentLogicStateTextColor == 0) {
					me.__1off.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__1off.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__1off.logicBlock_textcolor();
		me.__1off.onclick=function (e) {
			player.openNext("{node32}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', true);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me.__1off.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me.__1off);
		el=me._off5=document.createElement('div');
		els=me._off5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 780px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off5.ggUpdateText();
		el.appendChild(els);
		me._off5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off5.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_2') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._off5.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._off5.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._off5.style.transition='color 0s';
				if (me._off5.ggCurrentLogicStateTextColor == 0) {
					me._off5.style.color="rgba(196,145,89,1)";
				}
				else {
					me._off5.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._off5.logicBlock_textcolor();
		me._off5.onclick=function (e) {
			player.openNext("{node31}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', true);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me._off5.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me._off5);
		el=me._off4=document.createElement('div');
		els=me._off4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 910px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off4.ggUpdateText();
		el.appendChild(els);
		me._off4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton_1') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._off4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._off4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._off4.style.transition='color 0s';
				if (me._off4.ggCurrentLogicStateTextColor == 0) {
					me._off4.style.color="rgba(196,145,89,1)";
				}
				else {
					me._off4.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._off4.logicBlock_textcolor();
		me._off4.onclick=function (e) {
			player.openNext("{node21}","");
			player.setVariableValue('vis_roombutton', false);
			player.setVariableValue('vis_roombutton_1', true);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me._off4.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me._off4);
		el=me._off3=document.createElement('div');
		els=me._off3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00-\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 1040px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off3.ggUpdateText();
		el.appendChild(els);
		me._off3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_roombutton') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._off3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._off3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._off3.style.transition='color 0s';
				if (me._off3.ggCurrentLogicStateTextColor == 0) {
					me._off3.style.color="rgba(196,145,89,1)";
				}
				else {
					me._off3.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._off3.logicBlock_textcolor();
		me._off3.onclick=function (e) {
			player.openNext("{node20}","");
			player.setVariableValue('vis_roombutton', true);
			player.setVariableValue('vis_roombutton_1', false);
			player.setVariableValue('vis_roombutton_2', false);
			player.setVariableValue('vis_roombutton_3', false);
			player.setVariableValue('vis_roombutton_4', false);
			player.setVariableValue('vis_roombutton_5', false);
			player.setVariableValue('vis_roombutton_6', false);
			player.setVariableValue('vis_roombutton_7', false);
			player.setVariableValue('vis_roombutton_8', false);
		}
		me._off3.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me._off3);
		me.__26.appendChild(me._off2);
		me.__25.appendChild(me.__26);
		me.divSkin.appendChild(me.__25);
		el=me.__18=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 310px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 14.5833%;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
				else if (me.__18.ggCurrentLogicStateVisible == 1) {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
				else {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc6b0\uce21 \ud68c\uc0c9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 10px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		els=me.__1_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35 \uc124\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,254,254,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1_0.ggUpdateText();
		});
		el.appendChild(els);
		me.__1_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me.__1_0);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(153,153,153,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_=document.createElement('div');
		els=me.__1___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 1\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 79.646%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_.ggUpdateText();
		el.appendChild(els);
		me.__1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_.onclick=function (e) {
			player.openNext("{node26}","");
		}
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me.__1_);
		el=me.__2_=document.createElement('div');
		els=me.__2___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 2\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_.ggUpdateText();
		el.appendChild(els);
		me.__2_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me.__2_);
		me._container_2.appendChild(me.__24);
		me.__23.appendChild(me._container_2);
		me.__19.appendChild(me.__23);
		el=me.__21=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc88c\uce21 \uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(252,252,252,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__22.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__22.ggUpdateText();
		player.addListener('changenode', function() {
			me.__22.ggUpdateText();
		});
		el.appendChild(els);
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIdJREFUeF7tnWFu2zAMhe2TbT3Z1pOtO5kGphIgBHYjl++RT5rzp0DiOrY+fSRNOcm+3Q+pEdiljuY+mG0qIKWUn5WZ/f3R8WvP21Mf9fm/3esf+76356WxywOpEH51IDwD+m7AlOFIAukg9DPfA+Lofw3Otu/7b/SOPfuTAhIE4nm83pWgyAAppfzZto1pxKuJKwEmHUgpxUJGyxGvBi3i9VQwqUAErDgDnAYlBUhSrrhql1Vjb1f/ybt9OJAKw/LFLI+3yDI5FIhgvhidFGEhLAzIhGY8wwoxJRJIGZ2OwtvRoYQAEa6mrrKnJ3o6kInzxhksKhQqkAVhNEi0JM8GwswbR232NmDWmqe2YfZ9p4wdZac2KiQ7GgSboS/XN2'+
			'plZ2AYrRmKJUwgaDtcA0CaIPCqiwIEfPIuEM+ZGXxs8AQPBwK+AITCaHDAUKCWMICg2ukUGAQoUEsYQBC5gwoDDQVZcUGBgMJVCAwwFFjYQgNxhyvkbBvti5RSvFbDwhYaiPfEQu0AWrImkAw7OijemywgYQtmCKCUTLGjA2JX9J6VzLWAZNpRWz1eIJAJJWNINpAKxRO25ICkn8xoVXW2nXMhDZLYkYasAMRTtssB8ZS8EN0BhnjyyFJAIBVKMhC7k94dcdw76MpGjyEqQDwhSw7InUMAt54iDbmBLAQEkhABOSR9UiENSY+/ACCePAipFGWAbNuWmthVenFIIJ4a3iZ3atgCAIFMKBiQ2gvyKG+7gJzU1dAFgAEpee240UA8STHNEgAQSP5gAPGGLTsm2MmNmAKAAT1mqCGgsBUWukA3ZcDCFdwQwJpCm9QhCR5w'+
			'cwPUDhYQRNh65JMavl7eVD0SmvptwJ8ChoZYeMgChq02htATRoWpdnCIDm8/WVhAXFftBzPeDQVsBWWyUEIWqB1/FoUug2F+RgRtBxuI95rkq9RgecW+oOyRX/oP7xx8yRnrk1SXJ8dIrqOErJpHUMl95DzCt2HYQTUEWAKHD/bAG1LsiACypCUsO+hAFrWEZkcUkNUsmRvIYpZQYYQYsljFtQaQRSyhwwgzZBFL1gIyuyXMUpfeXDy7sEJ3Wgcu4FCbhNgRGrLITUfUwB/uJ8qOLCDo1jwVRvQaP625+NUogZZO2SAe+4+0I8WQmtxnsSQsd7TZlWJIheK9qY5uSLQdaYZMUgKH25ENRLrpmGFHKhBxS1LsUAAiaUmWHelARC1Js0MFiJol/zcQMUtSYUgYItaav4F0TUfmjXUjF5HpMGQMEbHkBvI8bZ1fjzRiwe'+
			'k2maVuf1BpvayjkUlcwJKwQypkdbkkvOmoYocqkOjWvIwdkkCiW/NKdigDibJEyg5ZIFGWqNmhDoR9oShnhzoQatNR0Q5pIOSmo6QdMwChWKJqhzwQkiWydswCBG3JDcTV9fv8kUpUxSUNYwpDwK35G4jXjq7p6L16l4cxjSGAVcWQ799CTD6p9ZCRE/pGPpkGxnSGfCN8TRGmZFcMRwzpt6lfYGm/nW4PK48v/bz31feL2H66kBUxKJnvcQPJHP2D9/4H6i15g3WNZLcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me._image_7);
		me.__21.appendChild(me.__22);
		me.__19.appendChild(me.__21);
		el=me.__20=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72.2581%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.2581% + 0px) / 2) + 23px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74aoff=document.createElement('div');
		els=me.__74aoff__img=document.createElement('img');
		els.className='ggskin ggskin__74aoff';
		hs=basePath + 'images/_74aoff.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="74A-off";
		el.ggDx=5;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.95,sy:0.95,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__74aoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74aoff.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74boff6=document.createElement('div');
		el.ggMarkerNodeId='{node20}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 116px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff6.onclick=function (e) {
			player.openNext('{node20}');
		}
		me.__74boff6.ggUpdatePosition=function (useTransition) {
			me.__74boff6__normalInst.ggEvent_sizechanged();
			me.__74boff6__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff6);
		el=me.__74boff5=document.createElement('div');
		el.ggMarkerNodeId='{node21}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 214px;';
		hs+='position : absolute;';
		hs+='top : 161px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff5.onclick=function (e) {
			player.openNext('{node21}');
		}
		me.__74boff5.ggUpdatePosition=function (useTransition) {
			me.__74boff5__normalInst.ggEvent_sizechanged();
			me.__74boff5__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff5);
		el=me.__74boff24=document.createElement('div');
		el.ggMarkerNodeId='{node22}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uac70\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 206px;';
		hs+='position : absolute;';
		hs+='top : 116px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff24.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff24.onclick=function (e) {
			player.openNext('{node22}');
		}
		me.__74boff24.ggUpdatePosition=function (useTransition) {
			me.__74boff24__normalInst.ggEvent_sizechanged();
			me.__74boff24__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff24);
		el=me.__74boff4=document.createElement('div');
		el.ggMarkerNodeId='{node23}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 129px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff4.onclick=function (e) {
			player.openNext('{node23}');
		}
		me.__74boff4.ggUpdatePosition=function (useTransition) {
			me.__74boff4__normalInst.ggEvent_sizechanged();
			me.__74boff4__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff4);
		el=me.__74boff23=document.createElement('div');
		el.ggMarkerNodeId='{node24}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\ubcf5\ub3c42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : 129px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff23.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff23.onclick=function (e) {
			player.openNext('{node24}');
		}
		me.__74boff23.ggUpdatePosition=function (useTransition) {
			me.__74boff23__normalInst.ggEvent_sizechanged();
			me.__74boff23__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff23);
		el=me.__74boff10=document.createElement('div');
		el.ggMarkerNodeId='{node25}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uc695\uc2e41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 61px;';
		hs+='position : absolute;';
		hs+='top : 122px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff10.onclick=function (e) {
			player.openNext('{node25}');
		}
		me.__74boff10.ggUpdatePosition=function (useTransition) {
			me.__74boff10__normalInst.ggEvent_sizechanged();
			me.__74boff10__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff10);
		el=me.__74boff22=document.createElement('div');
		el.ggMarkerNodeId='{node26}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff22.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff22.onclick=function (e) {
			player.openNext('{node26}');
		}
		me.__74boff22.ggUpdatePosition=function (useTransition) {
			me.__74boff22__normalInst.ggEvent_sizechanged();
			me.__74boff22__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff22);
		el=me.__74boff21=document.createElement('div');
		el.ggMarkerNodeId='{node27}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uce68\uc2e42-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 169px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff21.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff21.onclick=function (e) {
			player.openNext('{node27}');
		}
		me.__74boff21.ggUpdatePosition=function (useTransition) {
			me.__74boff21__normalInst.ggEvent_sizechanged();
			me.__74boff21__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff21);
		el=me.__74boff31=document.createElement('div');
		el.ggMarkerNodeId='{node29}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uce68\uc2e43-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff31.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff31.onclick=function (e) {
			player.openNext('{node29}');
		}
		me.__74boff31.ggUpdatePosition=function (useTransition) {
			me.__74boff31__normalInst.ggEvent_sizechanged();
			me.__74boff31__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff31);
		el=me.__74boff30=document.createElement('div');
		el.ggMarkerNodeId='{node28}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uce68\uc2e43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 83px;';
		hs+='position : absolute;';
		hs+='top : 148px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff30.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff30.onclick=function (e) {
			player.openNext('{node28}');
		}
		me.__74boff30.ggUpdatePosition=function (useTransition) {
			me.__74boff30__normalInst.ggEvent_sizechanged();
			me.__74boff30__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff30);
		el=me.__74boff3=document.createElement('div');
		el.ggMarkerNodeId='{node31}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff3.onclick=function (e) {
			player.openNext('{node31}');
		}
		me.__74boff3.ggUpdatePosition=function (useTransition) {
			me.__74boff3__normalInst.ggEvent_sizechanged();
			me.__74boff3__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff3);
		el=me.__74boff20=document.createElement('div');
		el.ggMarkerNodeId='{node30}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uc8fc\ubc292";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 151px;';
		hs+='position : absolute;';
		hs+='top : 92px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff20.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff20.onclick=function (e) {
			player.openNext('{node30}');
		}
		me.__74boff20.ggUpdatePosition=function (useTransition) {
			me.__74boff20__normalInst.ggEvent_sizechanged();
			me.__74boff20__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff20);
		el=me.__74boff1=document.createElement('div');
		el.ggMarkerNodeId='{node32}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uce68\uc2e41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 172px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff1.onclick=function (e) {
			player.openNext('{node32}');
		}
		me.__74boff1.ggUpdatePosition=function (useTransition) {
			me.__74boff1__normalInst.ggEvent_sizechanged();
			me.__74boff1__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff1);
		el=me.__74boff12=document.createElement('div');
		el.ggMarkerNodeId='{node33}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uce68\uc2e41-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 217px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff12.onclick=function (e) {
			player.openNext('{node33}');
		}
		me.__74boff12.ggUpdatePosition=function (useTransition) {
			me.__74boff12__normalInst.ggEvent_sizechanged();
			me.__74boff12__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff12);
		el=me.__74boff13=document.createElement('div');
		el.ggMarkerNodeId='{node34}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uce68\uc2e41-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff13.onclick=function (e) {
			player.openNext('{node34}');
		}
		me.__74boff13.ggUpdatePosition=function (useTransition) {
			me.__74boff13__normalInst.ggEvent_sizechanged();
			me.__74boff13__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff13);
		el=me.__74boff0=document.createElement('div');
		el.ggMarkerNodeId='{node37}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\ud30c\uc6b0\ub354\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 154px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff0.onclick=function (e) {
			player.openNext('{node37}');
		}
		me.__74boff0.ggUpdatePosition=function (useTransition) {
			me.__74boff0__normalInst.ggEvent_sizechanged();
			me.__74boff0__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff0);
		el=me.__74boff2=document.createElement('div');
		el.ggMarkerNodeId='{node36}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\uc695\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 156px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff2.onclick=function (e) {
			player.openNext('{node36}');
		}
		me.__74boff2.ggUpdatePosition=function (useTransition) {
			me.__74boff2__normalInst.ggEvent_sizechanged();
			me.__74boff2__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff2);
		el=me.__74boff=document.createElement('div');
		el.ggMarkerNodeId='{node35}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-off-\ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 129px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74boff.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74boff.onclick=function (e) {
			player.openNext('{node35}');
		}
		me.__74boff.ggUpdatePosition=function (useTransition) {
			me.__74boff__normalInst.ggEvent_sizechanged();
			me.__74boff__activeInst.ggEvent_sizechanged();
		}
		me.__74aoff.appendChild(me.__74boff);
		me.__20.appendChild(me.__74aoff);
		el=me.__74bon=document.createElement('div');
		els=me.__74bon__img=document.createElement('img');
		els.className='ggskin ggskin__74bon';
		hs=basePath + 'images/_74bon.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="74B-on";
		el.ggDx=5;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.95,sy:0.95,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__74bon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74bon.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74b6=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 116px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b6.onclick=function (e) {
			player.openNext('{node19}');
		}
		me.__74b6.ggUpdatePosition=function (useTransition) {
			me.__74b6__normalInst.ggEvent_sizechanged();
			me.__74b6__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b6);
		el=me.__74b5=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 214px;';
		hs+='position : absolute;';
		hs+='top : 161px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b5.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__74b5.ggUpdatePosition=function (useTransition) {
			me.__74b5__normalInst.ggEvent_sizechanged();
			me.__74b5__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b5);
		el=me.__74b24=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uac70\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 206px;';
		hs+='position : absolute;';
		hs+='top : 116px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b24.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b24.onclick=function (e) {
			player.openNext('{node2}');
		}
		me.__74b24.ggUpdatePosition=function (useTransition) {
			me.__74b24__normalInst.ggEvent_sizechanged();
			me.__74b24__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b24);
		el=me.__74b4=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 129px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b4.onclick=function (e) {
			player.openNext('{node4}');
		}
		me.__74b4.ggUpdatePosition=function (useTransition) {
			me.__74b4__normalInst.ggEvent_sizechanged();
			me.__74b4__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b4);
		el=me.__74b23=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\ubcf5\ub3c42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : 129px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b23.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b23.onclick=function (e) {
			player.openNext('{node13}');
		}
		me.__74b23.ggUpdatePosition=function (useTransition) {
			me.__74b23__normalInst.ggEvent_sizechanged();
			me.__74b23__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b23);
		el=me.__74b10=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uc695\uc2e41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 61px;';
		hs+='position : absolute;';
		hs+='top : 122px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b10.onclick=function (e) {
			player.openNext('{node6}');
		}
		me.__74b10.ggUpdatePosition=function (useTransition) {
			me.__74b10__normalInst.ggEvent_sizechanged();
			me.__74b10__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b10);
		el=me.__74b22=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b22.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b22.onclick=function (e) {
			player.openNext('{node9}');
		}
		me.__74b22.ggUpdatePosition=function (useTransition) {
			me.__74b22__normalInst.ggEvent_sizechanged();
			me.__74b22__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b22);
		el=me.__74b21=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uce68\uc2e42-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 169px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b21.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b21.onclick=function (e) {
			player.openNext('{node14}');
		}
		me.__74b21.ggUpdatePosition=function (useTransition) {
			me.__74b21__normalInst.ggEvent_sizechanged();
			me.__74b21__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b21);
		el=me.__74b31=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uce68\uc2e43-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 167px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b31.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b31.onclick=function (e) {
			player.openNext('{node17}');
		}
		me.__74b31.ggUpdatePosition=function (useTransition) {
			me.__74b31__normalInst.ggEvent_sizechanged();
			me.__74b31__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b31);
		el=me.__74b30=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uce68\uc2e43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 83px;';
		hs+='position : absolute;';
		hs+='top : 148px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b30.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b30.onclick=function (e) {
			player.openNext('{node10}');
		}
		me.__74b30.ggUpdatePosition=function (useTransition) {
			me.__74b30__normalInst.ggEvent_sizechanged();
			me.__74b30__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b30);
		el=me.__74b3=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b3.onclick=function (e) {
			player.openNext('{node8}');
		}
		me.__74b3.ggUpdatePosition=function (useTransition) {
			me.__74b3__normalInst.ggEvent_sizechanged();
			me.__74b3__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b3);
		el=me.__74b20=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uc8fc\ubc292";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 151px;';
		hs+='position : absolute;';
		hs+='top : 92px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b20.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b20.onclick=function (e) {
			player.openNext('{node18}');
		}
		me.__74b20.ggUpdatePosition=function (useTransition) {
			me.__74b20__normalInst.ggEvent_sizechanged();
			me.__74b20__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b20);
		el=me.__74b1=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uce68\uc2e41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 172px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b1.onclick=function (e) {
			player.openNext('{node5}');
		}
		me.__74b1.ggUpdatePosition=function (useTransition) {
			me.__74b1__normalInst.ggEvent_sizechanged();
			me.__74b1__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b1);
		el=me.__74b12=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uce68\uc2e41-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 217px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b12.onclick=function (e) {
			player.openNext('{node15}');
		}
		me.__74b12.ggUpdatePosition=function (useTransition) {
			me.__74b12__normalInst.ggEvent_sizechanged();
			me.__74b12__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b12);
		el=me.__74b13=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uce68\uc2e41-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b13.onclick=function (e) {
			player.openNext('{node16}');
		}
		me.__74b13.ggUpdatePosition=function (useTransition) {
			me.__74b13__normalInst.ggEvent_sizechanged();
			me.__74b13__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b13);
		el=me.__74b0=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\ud30c\uc6b0\ub354\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 154px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b0.onclick=function (e) {
			player.openNext('{node11}');
		}
		me.__74b0.ggUpdatePosition=function (useTransition) {
			me.__74b0__normalInst.ggEvent_sizechanged();
			me.__74b0__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b0);
		el=me.__74b2=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\uc695\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 156px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b2.onclick=function (e) {
			player.openNext('{node7}');
		}
		me.__74b2.ggUpdatePosition=function (useTransition) {
			me.__74b2__normalInst.ggEvent_sizechanged();
			me.__74b2__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b2);
		el=me.__74b=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="74B-\ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 129px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74b.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__74b.onclick=function (e) {
			player.openNext('{node3}');
		}
		me.__74b.ggUpdatePosition=function (useTransition) {
			me.__74b__normalInst.ggEvent_sizechanged();
			me.__74b__activeInst.ggEvent_sizechanged();
		}
		me.__74bon.appendChild(me.__74b);
		me.__20.appendChild(me.__74bon);
		el=me._on=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me._on.appendChild(me._map_1);
		me.__20.appendChild(me._on);
		el=me._off1=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off1.style.transition='';
				if (me._off1.ggCurrentLogicStateVisible == 0) {
					me._off1.style.visibility=(Number(me._off1.style.opacity)>0||!me._off1.style.opacity)?'inherit':'hidden';
					me._off1.ggVisible=true;
				}
				else {
					me._off1.style.visibility="hidden";
					me._off1.ggVisible=false;
				}
			}
		}
		me._off1.logicBlock_visible();
		me._off1.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me._off1.appendChild(me._map_2);
		me.__20.appendChild(me._off1);
		me.__19.appendChild(me.__20);
		me.__18.appendChild(me.__19);
		me.divSkin.appendChild(me.__18);
		el=me._videocontainer=document.createElement('div');
		el.ggId="video-container";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65%;';
		hs+='left : calc(50% - ((65% + 0px) / 2) - 2%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((65% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 65%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._videocontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._videocontainer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._videocontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._videocontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._videocontainer.style.transition='';
				if (me._videocontainer.ggCurrentLogicStateVisible == 0) {
					me._videocontainer.style.visibility="hidden";
					me._videocontainer.ggVisible=false;
				}
				else {
					me._videocontainer.style.visibility="hidden";
					me._videocontainer.ggVisible=false;
				}
			}
		}
		me._videocontainer.logicBlock_visible();
		me._videocontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._videobg=document.createElement('div');
		el.ggId="video-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._videobg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._videobg.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
			me._video_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=1&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('allow', 'autoplay');
			me._video_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._videobg.appendChild(me._video_1);
		me._videocontainer.appendChild(me._videobg);
		me.divSkin.appendChild(me._videocontainer);
		el=me.__=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14 - \ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 75px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				else if (me.__.ggCurrentLogicStateVisible == 1) {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				else {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0ac\uc774\ub4dc\ubc14 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #c49159;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\ucc38\uace0\ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 14px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd6-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__60.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__60.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__60.style.transition='background-color 500ms ease 0ms';
				if (me.__60.ggCurrentLogicStateBackgroundColor == 0) {
					me.__60.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__60.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__60.logicBlock_backgroundcolor();
		me.__60.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_6', !player.getVariableValue('vis_buttonbg_6'));
			me.__73.ggVisible = !me.__73.ggVisible;
			var flag=me.__73.ggVisible;
			me.__73.style.transition='none';
			me.__73.style.visibility=((flag)&&(Number(me.__73.style.opacity)>0||!me.__73.style.opacity))?'inherit':'hidden';
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__img=document.createElement('img');
		els.className='ggskin ggskin__16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
				else {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		els=me.__17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__17.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc38\uace0\ub0b4\uc6a9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__17.ggUpdateText();
		el.appendChild(els);
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__17);
		me.__60.appendChild(me.__16);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYzg3YjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYz'+
			'g3YjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsiQM2oAAAvASURBVHic7Z17sFVVHcc/XEFo'+
			'fIGRIAlJykUKOLcxMysLC9OpJNMeGihTgBkXrLEyzGymicBHTQjV5MWcXlr2UEIUh3wAiXExi2jCEB0YDCHKkYAhIHH1x+9u3BzO3nvttX5n733O2Z+ZPcNln/XY53vWY6/f+v1WL2MMJXWnAowHxgDDgdcDJwB9gf3ALmArsAn4K/AwsFaj4F6lwHXjbOBy4IPA6Q7pnwMeBH4O/MG1EqXA+rwLuAb4mGKevwHmAyvTJiwF1uPdwEzgo3Us4z5gAfCYbYJSYB1mAzdkWN4twJdtPlgK7MeJwL3Ae3Io+wngEuCfcR8qBXbntchM95Qc67AdmaHviPpAW3Z1aSrGAE+Sr7gAg3vq0R71gbIFp2cssAZ5hy0KO4GR1GjJZQtORxHFBegPPF7rRimwPYMoprgBI4A7qv+z7KLtqAAPIWNe0TkL+GPwRylwMhWgm+K23G'+
			'r+AnQEf5RddDyjaSxxQX6QFwd/lC04mpOB9cgERovngQ3AcuBp4D/A8cAoYBwyEx6mUM5Gel6dSoFrUwFWICY9DfYB04C7gVdiPtcLuAxYCBzjWeZlwD2lwEeiPeZuBD4EPJMizWnAEuAMj3JXAONKgQ+nHViHnrirka53v0Pa3siE6U0e5Z9UTrJeZQTwKHriLgbOwU1cgJcRE+QmjzpMKFuwUEFaWz+l/FYj4mrwTiJWqSy4txRYf8zVFDdgB/A6h3RPtXoXPZTiiwtwj2O6Y1pZ4DHAKvTEXUR9xAXZk+XCCb1Vq9E4VBDDwdFK+a0GPqKUVy02OKbr24otOBhztcTtpn4tN2AXsMchXZ9WE3gQumPu48DblfKKoy/QxyHdwVYSuIIsHGiJ+wBwrlJeSQzFrd4HWmUM1h5zu4GLlPKywfWHtLcVWvAY9MU9B8hy'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_5.style.transition='';
				if (me._image_5.ggCurrentLogicStateVisible == 0) {
					me._image_5.style.visibility=(Number(me._image_5.style.opacity)>0||!me._image_5.style.opacity)?'inherit':'hidden';
					me._image_5.ggVisible=true;
				}
				else {
					me._image_5.style.visibility="hidden";
					me._image_5.ggVisible=false;
				}
			}
		}
		me._image_5.logicBlock_visible();
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._off0=document.createElement('div');
		els=me._off0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uba58\ud2b8-\ubaa8\ubc14\uc77c-off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucc38\uace0\ub0b4\uc6a9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off0.ggUpdateText();
		el.appendChild(els);
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._off0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._off0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._off0.style.transition='color 0s';
				if (me._off0.ggCurrentLogicStateTextColor == 0) {
					me._off0.style.color="rgba(255,255,255,1)";
				}
				else {
					me._off0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._off0.logicBlock_textcolor();
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me._image_5.appendChild(me._off0);
		me.__60.appendChild(me._image_5);
		me.__15.appendChild(me.__60);
		me.__0.appendChild(me.__15);
		el=me.__11=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc84\ud2bc-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 76px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__12.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__12.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__12.style.transition='background-color 500ms ease 0ms';
				if (me.__12.ggCurrentLogicStateBackgroundColor == 0) {
					me.__12.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__12.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__12.logicBlock_backgroundcolor();
		me.__12.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_3', !player.getVariableValue('vis_buttonbg_3'));
			me.__18.ggVisible = !me.__18.ggVisible;
			var flag=me.__18.ggVisible;
			me.__18.style.transition='none';
			me.__18.style.visibility=((flag)&&(Number(me.__18.style.opacity)>0||!me.__18.style.opacity))?'inherit':'hidden';
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		els=me.__13__img=document.createElement('img');
		els.className='ggskin ggskin__13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC8klEQVR4nO3dMWuUQRSF4XeGxCKwNtHe1P4TCYq9pBM7LSSF9oKggtipjZq1kVgE0V8hllYxsRZNsYE0itdiYxpBJriT++3xPDDdBs7wEsiSYkpEUEoZAXeBC8Ay820XGEfEveP8UCllHbgCrHRZdXK+Ae+AWxExARgB20CInXFE0HKAjQHsnfXZOWzL0wGM6XVWG+JeGsDOXucxwN4AhvQ6mw2BNwews9fZq8ASukYz+sy8WqrA9+wVHbXcTfr+lemvsqqWu0nfv2YvsL4cWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szo'+
			'HFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi6toR1a+W5MKLGSP6Ggxe0C2CnzJHtHR5+wB2SpwP3tERw+zB2SrEfGI6aMUaq5FxMfsEdkWACJirZTymukDFWdzJ/2zbWAjIj5kDxmCoz+wImIL2ErcYh38918j1DmwOAcW58DiHFicA4tzYHFH34NLKZeBi8CZvDkzsQ28jIj32UMG4fAFzufkv5Q563O18e3gNwPY2utMainlOrD2R/n596SUcj57RLYKrGeP6OhG9oBslfn/58LfnMsekK0CP7JHdKT8NnCTCvzMHtGR8t2a+HuwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58Di'+
			'HFicA4tzYHEOLM6BxTmwOAcW58DiKlCyR3TUcjfp+1e039g91fAZ5fsvVuAge0VHk4bP7HdfkeegApvZKzp61vAZxad1f3sFMAI+kf+AxKzPuOVRjsOHOcYD2DvrswOMSkRQSjkN3AFWgWXm2y7wIiIeHOeHSik3mT5OstJl1cn5CrwFbkfE/i8TZP0AMd0DLwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__13.style.transition='';
				if (me.__13.ggCurrentLogicStateVisible == 0) {
					me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
					me.__13.ggVisible=true;
				}
				else {
					me.__13.style.visibility="hidden";
					me.__13.ggVisible=false;
				}
			}
		}
		me.__13.logicBlock_visible();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__14.ggUpdateText();
		el.appendChild(els);
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__14);
		me.__12.appendChild(me.__13);
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozODo1'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMTliMzZmLWE3YWItNGU0Yi04NjliLTYyNjE3YTQ3MGEzYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjE5YjM2Zi1hN2FiLTRlNGItODY5Yi02MjYxN2E0NzBhM2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjE5YjM2Zi1hN2FiLTRlNGItODY5Yi02MjYxN2E0Nz'+
			'BhM2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMTliMzZmLWE3YWItNGU0Yi04NjliLTYyNjE3YTQ3MGEzYyIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozODo1MSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuawJN4AAALlSURBVHic7d09a5RBGIXh+30w'+
			'FoG1ifZGS4v8D/EDESujWIh2KoiF9oKgglgmjR9JIwoKml8hamUVWGvRJoE0imPxupBKJ/BOnuzxXGA3C2e4A3G1mK6UAjAC7gHHgTmm2xhYAe7v8HO3gEVgfvBFu+s7sAbcBja6UsoI+AgcTZ01vFX6YDWe7+DstBgDC10pZRm4nL2mkZPA23+cOQ28bj8lxVIAZ7NXNHSp4syF1iMSnQtgNntFQ6OBzkyr2QB+ZK9oqOZu0vcPoGSvaKjmbtL3j+wF1pYDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcYF2ZOW7VQlgX/aIhmayB2QL4Gv2iIa+ZA/IFsCD7B'+
			'ENPcoekC2Ax/SPUqi5CnzOHpFt8vv3IvCK/oGKQ3lzBrFO/wP7IXvIXrD9L1hv/vwxIf/91wh1DizOgcU5sDgHFufA4hxY3PbvwWeAU8DBpC1DWad/WvZ99pC9YBL4Kf2/Zqm4AVwBlpN3pAvgGlpxJ5aAY9kjsgX90+aqrmcPyBZM/38u/M3h7AHZAviZPaIh5beBqwTwK3tEQ8p3q+LvweIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDiwugyx7RUM3dpO8faL+xu7/ijPL9ZwLYyl7R0EbFmc3mK/JsBfAye0VDTyrOKD6tO/GiK6WMgE/AkeQxQ1sFFivP'+
			'rgDnG27JMAYWulIKwAHgLnACmMtcNYAx8Ax4uMPP3aR/nGR+8EW76xvwDrgDbP4GqSlQJjFJSlsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_13.style.transition='';
				if (me._image_13.ggCurrentLogicStateVisible == 0) {
					me._image_13.style.visibility="hidden";
					me._image_13.ggVisible=false;
				}
				else {
					me._image_13.style.visibility=(Number(me._image_13.style.opacity)>0||!me._image_13.style.opacity)?'inherit':'hidden';
					me._image_13.ggVisible=true;
				}
			}
		}
		me._image_13.logicBlock_visible();
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._off=document.createElement('div');
		els=me._off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uba58\ud2b8-\ubaa8\ubc14\uc77c-off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off.ggUpdateText();
		el.appendChild(els);
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.ggUpdatePosition=function (useTransition) {
		}
		me._image_13.appendChild(me._off);
		me.__12.appendChild(me._image_13);
		me.__11.appendChild(me.__12);
		me.__0.appendChild(me.__11);
		el=me.__8=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 138px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__40.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__40.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__40.style.transition='background-color 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateBackgroundColor == 0) {
					me.__40.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__40.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__40.logicBlock_backgroundcolor();
		me.__40.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_4', true);
			player.toggleFullscreen();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		els=me.__9__img=document.createElement('img');
		els.className='ggskin ggskin__9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACrklEQVR4nO3cP2sTcRzH8fdd0n+i1H8EukoVB3cXJ5+AoI9AcHLsU3AXZ518Bj6DdnJwctDBQRzU2kHEgqUqrXFIBk1zl0tyud/1y/sFmXLkPvSdpKVwlwHPgJvAMe3RAV4BD1IPqeg+sAUcpR7yjxz40AVuAdcTjxlnOfWAKVwFbqQeMcZmDuylXlGgrbvG2U89oMCnPPUCLZaBgzNwcG0OfJr+yOqmHlCkzYHXUg+YwlLqAUWqvPO2gJc0+2ZYBr42eL55PQV2gF8NnrMPrAMvgNWig6oE3gZe1zIprt3hI4XSf1BV+VRu1DRE9bsIZGUHtPl3sGpg4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcA'+
			'YOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OBy4MqEY841MUQz6QBnSp6/1gUeM7gJy+hFTBmDN8CbxWxTDQ6AJ8AK8GfkuQ7wpelBkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqToMuA2sMH4WxlmwDbeEq+tloE7wBInb2WYA/sA74B+yeNeQ2M1vR7l7Q5zYG/CixwucqHmcgz8Lnn+c87Jj/aofn17tACjv1r/e84bggdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4AwdXJfCPha/QrL4z4cqTboUXOT88Lpt/T2VLDK65OWrwnPPIgTXKrxNahEtM6FIl8HMGF6A1+XW+AuwAdxs85zweAo+Anw2esw90gNWyg6oEvjB8NG0z'+
			'wTln1WPwTdc6bf4j61vqAVM4SD2gSJsDqwYGDs7AweXA5dQjCrR11zhnUw8o0OsCb4F12nWrhozBrtNiF/hI+36G7/8CwN1O7BtfIr8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		els=me.__10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\uc628\uc624\ud504\uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__10.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__10.ggUpdateText();
		el.appendChild(els);
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me.__10);
		me.__40.appendChild(me.__9);
		me.__8.appendChild(me.__40);
		me.__0.appendChild(me.__8);
		el=me.__4=document.createElement('div');
		el.ggId="\uc635\uc158\uc628\uc624\ud504-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 200px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd3-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__30.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__30.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__30.style.transition='background-color 500ms ease 0ms';
				if (me.__30.ggCurrentLogicStateBackgroundColor == 0) {
					me.__30.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__30.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__30.logicBlock_backgroundcolor();
		me.__30.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_2', !player.getVariableValue('vis_buttonbg_2'));
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		els=me.__6__img=document.createElement('img');
		els.className='ggskin ggskin__6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc635\uc158\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		els=me.__7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc635\uc158\uc628\uc624\ud504\uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc635\uc158 ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7.ggUpdateText();
		el.appendChild(els);
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__7);
		me.__30.appendChild(me.__6);
		me.__4.appendChild(me.__30);
		me.__0.appendChild(me.__4);
		el=me.__1=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubcf4\uae30-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd5-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__5.style.transition='background-color 500ms ease 0ms';
				if (me.__5.ggCurrentLogicStateBackgroundColor == 0) {
					me.__5.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__5.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__5.logicBlock_backgroundcolor();
		me.__5.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_4', !player.getVariableValue('vis_buttonbg_4'));
			me.__27.ggVisible = !me.__27.ggVisible;
			var flag=me.__27.ggVisible;
			me.__27.style.transition='none';
			me.__27.style.visibility=((flag)&&(Number(me.__27.style.opacity)>0||!me.__27.style.opacity))?'inherit':'hidden';
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		els=me.__2__img=document.createElement('img');
		els.className='ggskin ggskin__2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAE/klEQVR4nO3aW4hVVRzH8c+MVpZZMUEEXcC8VBKUFoZ2sbCop6gIK8LoQkQ9GV1okCQqEqOnCKIg6IZkNyiF6PJgQXShMNJKgyyie0llmZnm6WFbnKY9M2dmzj77zJ//F/7MsNh77d9a37332ouZnkajIYlLb90BkmpJwcFJwcFJwcFJwcFJwcFJwcFJwcFJwcHp2fNzGs7H71iNL+sKlLSfSXgGf2IrVuEazKgzVNI+VqExSL2FpZhbW7r6ORlLsKiFY2fjRlyKAyrMNCJ2Glxwc32OB3AeDqwjaIc4QDHG+/GZ/87BI0Oct3jAsb/gWVyPWdXFHZ7tWhPcXL/ieVyN6Z2P3Ham4SrFUrXV0GM/d5A+Ph3mvD'+
			'dxO+ZXNIZSehQDmjLGft7Dq/gI67B+jP1VzXGK1+nROAcnjeDcZbhzQNsk/ID9W+zjC7yEDdiomLvdI8gwIoa7Y0dTm7ACp2FiVcFHwEScirsUN+FYxnZLSf+T8dMY+vwKT+BKHNHGcaMawc31LZ7CJTi43eGHoA8X4Ul804Zx/FM3lVxrP2xp4zVeVHyszWnHRFQtuLm24xX0q+bD4xjcjJexraIxdEJwc23EcizEvqOZlE4KHljv416chQmjyN6LBbhHsfZ3InOnBTfXj4pt7cU4pNVJqlNwc32teJ32G/5OvRUrFWtXp3PWKbi5dmCt4ua+UrETKKVbBDfXmsHCKsTWma1bBJfV27gN85rDdaPgBmaWTOTULsjVzYKbax1md/Nfk44saWv7FiIwJ+Dpbha8s6RtV8dTjG8O72bBjRbbksHZ1c2Ck7GzOwUHJwUH'+
			'JwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHpxcT6g6RVEcv9qo7RFIdvdhQd4hxxt4lbT269EHpxWJ8U3eQccS2krY/sKPTQVqhFx9iKi7Hc/i11kTdTQPPlLT/hdc6nGXUHIh5uBSP4zvFwDpdp5dkm1dTlu/xGI4ZYt760I93aspYVluHyPsve+MM3IEPOhiubsEf426ciX1amagmZuAWvKR4I3a14I'+
			'EcjyVYjZ0Vhuu04L/wIm7A7NFMzCAchAuxEl9VmL9tgps5FJfhUXzZ5nCdEPytYhlajMPGOhktMAGn4E6sb/NYKhHcTI/idbYc77Yh3IKSa8xvQ7/rsAIL1b+1mYXrsQbbdbnggRylmMR+rB1FuLNL+lwwin7ewNI9Waa3e5BtpA9zcYViN7NFlwseyExci6fwQwvhZpT0MbWF835WbGWuw7FVDaYD7ItzcR82G53g2ra8k3ARHsSmkmBPD3HuwyXHf4KHcAmmVJa6XubgJryudcF/9NQS9f+ciAsUT9wG3K4IOBjLFF/zm/AC3qo4X7cxTbFcLVQ85X2DHPdbxxIllTFZ8XDcr3g4mpeqRd3yBCdjZ7JiC3bynt8346GeRmOoN2Ey3sn/6AhOCg5OCg5OCg5OCg5OCg5OCg5OCg5OCg7O30osxceEvq98AAAAAElF'+
			'TkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\uc628\uc624\ud504-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='text-align:center;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3.style.transition='color 0s';
				if (me.__3.ggCurrentLogicStateTextColor == 0) {
					me.__3.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__3.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__3.logicBlock_textcolor();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__3);
		me.__5.appendChild(me.__2);
		me.__1.appendChild(me.__5);
		me.__0.appendChild(me.__1);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__76.logicBlock_position();
		me.__76.logicBlock_visible();
		me.__77.logicBlock_visible();
		me.__74.logicBlock_visible();
		me.__75.logicBlock_visible();
		me.__74amoff.logicBlock_visible();
		me.__74amon.logicBlock_visible();
		me._onmobile.logicBlock_visible();
		me._map_1mobile.ggMarkerInstances=[];
		me._map_1mobile.ggLastNodeId=null;
		me._map_1mobile.ggSimpleFloorplanMarkerArray=[];
		me._map_1mobile.ggFloorplanWidth=0;
		me._map_1mobile.ggFloorplanHeight=0;
		me._map_1mobile__mapdiv=document.createElement('div');
		me._map_1mobile__mapdiv.className='ggskin ggskin_map';
		me._map_1mobile.appendChild(me._map_1mobile__mapdiv);
		me._map_1mobile__img=document.createElement('img');
		me._map_1mobile__img.className='ggskin ggskin_map';
		me._map_1mobile__mapdiv.appendChild(me._map_1mobile__img);
		me._map_1mobile.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1mobile.ggRadar.update=function() {
			var radar=me._map_1mobile.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1mobile.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1mobile.ggFilteredIds.length > 0 && me._map_1mobile.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1mobile.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1mobile__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',100);
				radar.radarElement.setAttributeNS(null,'height',100);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 100 100');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 50;
				arcY1 += 50;
				arcX2 += 50;
				arcY2 += 50;
				var radarPathString = 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#aa55ff');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#aa55ff');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1mobile__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 50;
				var radarYPos = activeMarker.radarYPos - 50;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1mobile.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1mobile__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1mobile.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1mobile.clientWidth;
			var mapHeight = me._map_1mobile.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1mobile.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1mobile__img.setAttribute('src', imageFilename);
		me._map_1mobile__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1mobile.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1mobile.ggFloorplanHeight / 2 + 'px;width:' + me._map_1mobile.ggFloorplanWidth + 'px;height:' + me._map_1mobile.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1mobile__img.setAttribute('style','width:' + me._map_1mobile.ggFloorplanWidth + 'px;height:' + me._map_1mobile.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1mobile.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1mobile.clientWidth / me._map_1mobile.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1mobile.ggFloorplanHeight = me._map_1mobile.clientHeight;
				me._map_1mobile.ggFloorplanWidth = me._map_1mobile.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1mobile.ggFloorplanWidth = me._map_1mobile.clientWidth;
				me._map_1mobile.ggFloorplanHeight = me._map_1mobile.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1mobile.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1mobile.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1mobile.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1mobile.ggPermeableMap = true;
			} else {
				me._map_1mobile.ggPermeableMap = false;
			}
			me._map_1mobile.ggCalculateFloorplanSize(mapDetails);
			me._map_1mobile.ggShowSimpleFloorplan(mapDetails);
			me._map_1mobile.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1mobile.ggMapNotLoaded = false;
		}
		me._map_1mobile.ggClearMap=function() {
			me._map_1mobile.ggClearMapMarkers();
			me._map_1mobile.ggMapNotLoaded = true;
		}
		me._map_1mobile.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1mobile.ggMapId = mapId;
			if (!me._map_1mobile.ggMapNotLoaded) {
				me._map_1mobile.ggClearMap();
				me._map_1mobile.ggInitMap();
				me._map_1mobile.ggInitMapMarkers();
			}
		}
		me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1mobile.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1mobile.ggMapId);
					var xPos = (me._map_1mobile.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1mobile.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1mobile.ggHMarkerAnchorOffset;
					yPos -= me._map_1mobile.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1mobile.style['z-index'] + 2;
				}
			}
		}
		me._map_1mobile.ggInitMapMarkers=function() {
			me._map_1mobile.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1mobile.ggFilteredIds = [];
			if (me._map_1mobile.ggFilter != '') {
				var filter = me._map_1mobile.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1mobile.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1mobile.ggFilteredIds.length > 0) ids = me._map_1mobile.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1mobile.ggMapId);
				if (coords.length>=2) {
					me._map_1mobile.ggHMarkerAnchorOffset = 12;
					me._map_1mobile.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1mobile.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1mobile.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1mobile__mapdiv.appendChild(marker);
				}
			}
			me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1mobile);
		}
		me._map_1mobile.ggClearMapMarkers=function() {
			for (id in me._map_1mobile.ggSimpleFloorplanMarkerArray) {
				if (me._map_1mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1mobile__mapdiv.removeChild(me._map_1mobile.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1mobile.ggMarkerInstances=[];
			me._map_1mobile.ggSimpleFloorplanMarkerArray=[];
		}
		me._offmobile.logicBlock_visible();
		me._map_2mobile.ggMarkerInstances=[];
		me._map_2mobile.ggLastNodeId=null;
		me._map_2mobile.ggSimpleFloorplanMarkerArray=[];
		me._map_2mobile.ggFloorplanWidth=0;
		me._map_2mobile.ggFloorplanHeight=0;
		me._map_2mobile__mapdiv=document.createElement('div');
		me._map_2mobile__mapdiv.className='ggskin ggskin_map';
		me._map_2mobile.appendChild(me._map_2mobile__mapdiv);
		me._map_2mobile__img=document.createElement('img');
		me._map_2mobile__img.className='ggskin ggskin_map';
		me._map_2mobile__mapdiv.appendChild(me._map_2mobile__img);
		me._map_2mobile.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2mobile.ggRadar.update=function() {
			var radar=me._map_2mobile.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2mobile.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2mobile.ggFilteredIds.length > 0 && me._map_2mobile.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2mobile.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2mobile__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',100);
				radar.radarElement.setAttributeNS(null,'height',100);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 100 100');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 50;
				arcY1 += 50;
				arcX2 += 50;
				arcY2 += 50;
				var radarPathString = 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff557f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff557f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2mobile__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 50;
				var radarYPos = activeMarker.radarYPos - 50;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2mobile.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2mobile__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2mobile.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2mobile.clientWidth;
			var mapHeight = me._map_2mobile.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2mobile.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2mobile__img.setAttribute('src', imageFilename);
		me._map_2mobile__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2mobile.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2mobile.ggFloorplanHeight / 2 + 'px;width:' + me._map_2mobile.ggFloorplanWidth + 'px;height:' + me._map_2mobile.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2mobile__img.setAttribute('style','width:' + me._map_2mobile.ggFloorplanWidth + 'px;height:' + me._map_2mobile.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2mobile.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2mobile.clientWidth / me._map_2mobile.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2mobile.ggFloorplanHeight = me._map_2mobile.clientHeight;
				me._map_2mobile.ggFloorplanWidth = me._map_2mobile.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2mobile.ggFloorplanWidth = me._map_2mobile.clientWidth;
				me._map_2mobile.ggFloorplanHeight = me._map_2mobile.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2mobile.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2mobile.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2mobile.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2mobile.ggPermeableMap = true;
			} else {
				me._map_2mobile.ggPermeableMap = false;
			}
			me._map_2mobile.ggCalculateFloorplanSize(mapDetails);
			me._map_2mobile.ggShowSimpleFloorplan(mapDetails);
			me._map_2mobile.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2mobile.ggMapNotLoaded = false;
		}
		me._map_2mobile.ggClearMap=function() {
			me._map_2mobile.ggClearMapMarkers();
			me._map_2mobile.ggMapNotLoaded = true;
		}
		me._map_2mobile.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2mobile.ggMapId = mapId;
			if (!me._map_2mobile.ggMapNotLoaded) {
				me._map_2mobile.ggClearMap();
				me._map_2mobile.ggInitMap();
				me._map_2mobile.ggInitMapMarkers();
			}
		}
		me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2mobile.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2mobile.ggMapId);
					var xPos = (me._map_2mobile.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2mobile.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2mobile.ggHMarkerAnchorOffset;
					yPos -= me._map_2mobile.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2mobile.style['z-index'] + 2;
				}
			}
		}
		me._map_2mobile.ggInitMapMarkers=function() {
			me._map_2mobile.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2mobile.ggFilteredIds = [];
			if (me._map_2mobile.ggFilter != '') {
				var filter = me._map_2mobile.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2mobile.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2mobile.ggFilteredIds.length > 0) ids = me._map_2mobile.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2mobile.ggMapId);
				if (coords.length>=2) {
					me._map_2mobile.ggHMarkerAnchorOffset = 12;
					me._map_2mobile.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2mobile.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2mobile.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2mobile__mapdiv.appendChild(marker);
				}
			}
			me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2mobile);
		}
		me._map_2mobile.ggClearMapMarkers=function() {
			for (id in me._map_2mobile.ggSimpleFloorplanMarkerArray) {
				if (me._map_2mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2mobile__mapdiv.removeChild(me._map_2mobile.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2mobile.ggMarkerInstances=[];
			me._map_2mobile.ggSimpleFloorplanMarkerArray=[];
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-41px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-41px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__73.logicBlock_position();
		me.__73.logicBlock_size();
		me.__610.logicBlock_position();
		me.__610.logicBlock_size();
		me.__610.logicBlock_visible();
		me.__610.logicBlock_textcolor();
		me.__pc.logicBlock_position();
		me.__pc.logicBlock_size();
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor();
		me.__39.logicBlock_position();
		me.__39.logicBlock_size();
		me.__39.logicBlock_visible();
		me.__510.logicBlock_size();
		me.__510.logicBlock_backgroundcolor();
		me.__70.logicBlock_visible();
		me.__69.logicBlock_visible();
		me._image_6.logicBlock_visible();
		me.__65.logicBlock_position();
		me.__114.logicBlock_size();
		me.__114.logicBlock_backgroundcolor();
		me.__67.logicBlock_visible();
		me.__66.logicBlock_visible();
		me._image_8.logicBlock_visible();
		me.__55.logicBlock_position();
		me.__onoff_8.logicBlock_size();
		me.__onoff_8.logicBlock_visible();
		me.__onoff_8.logicBlock_backgroundcolor();
		me.__off_8.logicBlock_visible();
		me.__on_8.logicBlock_visible();
		me.__64.logicBlock_visible();
		me.__onoff_24.logicBlock_size();
		me.__onoff_24.logicBlock_visible();
		me.__onoff_24.logicBlock_backgroundcolor();
		me.__off_24.logicBlock_visible();
		me.__on_24.logicBlock_visible();
		me.__218.logicBlock_visible();
		me.__onoff_7.logicBlock_size();
		me.__onoff_7.logicBlock_visible();
		me.__onoff_7.logicBlock_backgroundcolor();
		me.__off_7.logicBlock_visible();
		me.__on_7.logicBlock_visible();
		me.__63.logicBlock_visible();
		me.__onoff_23.logicBlock_size();
		me.__onoff_23.logicBlock_visible();
		me.__onoff_23.logicBlock_backgroundcolor();
		me.__off_23.logicBlock_visible();
		me.__on_23.logicBlock_visible();
		me.__217.logicBlock_visible();
		me.__onoff_10.logicBlock_size();
		me.__onoff_10.logicBlock_visible();
		me.__onoff_10.logicBlock_backgroundcolor();
		me.__off_10.logicBlock_visible();
		me.__on_10.logicBlock_visible();
		me.__113.logicBlock_visible();
		me.__onoff_12.logicBlock_size();
		me.__onoff_12.logicBlock_visible();
		me.__onoff_12.logicBlock_backgroundcolor();
		me.__off_12.logicBlock_visible();
		me.__on_12.logicBlock_visible();
		me.__120.logicBlock_visible();
		me.__onoff_13.logicBlock_size();
		me.__onoff_13.logicBlock_visible();
		me.__onoff_13.logicBlock_backgroundcolor();
		me.__off_13.logicBlock_visible();
		me.__on_13.logicBlock_visible();
		me.__130.logicBlock_visible();
		me.__onoff_6.logicBlock_size();
		me.__onoff_6.logicBlock_visible();
		me.__onoff_6.logicBlock_backgroundcolor();
		me.__off_6.logicBlock_visible();
		me.__on_6.logicBlock_visible();
		me.__62.logicBlock_visible();
		me.__onoff_22.logicBlock_size();
		me.__onoff_22.logicBlock_visible();
		me.__onoff_22.logicBlock_backgroundcolor();
		me.__off_22.logicBlock_visible();
		me.__on_22.logicBlock_visible();
		me.__216.logicBlock_visible();
		me.__onoff_30.logicBlock_size();
		me.__onoff_30.logicBlock_visible();
		me.__onoff_30.logicBlock_backgroundcolor();
		me.__off_30.logicBlock_visible();
		me.__on_30.logicBlock_visible();
		me.__313.logicBlock_visible();
		me.__onoff_5.logicBlock_size();
		me.__onoff_5.logicBlock_visible();
		me.__onoff_5.logicBlock_backgroundcolor();
		me.__off_5.logicBlock_visible();
		me.__on_5.logicBlock_visible();
		me.__59.logicBlock_visible();
		me.__onoff_20.logicBlock_size();
		me.__onoff_20.logicBlock_visible();
		me.__onoff_20.logicBlock_backgroundcolor();
		me.__off_20.logicBlock_visible();
		me.__on_20.logicBlock_visible();
		me.__215.logicBlock_visible();
		me.__onoff_4.logicBlock_size();
		me.__onoff_4.logicBlock_visible();
		me.__onoff_4.logicBlock_backgroundcolor();
		me.__off_4.logicBlock_visible();
		me.__on_4.logicBlock_visible();
		me.__58.logicBlock_visible();
		me.__onoff_0.logicBlock_size();
		me.__onoff_0.logicBlock_visible();
		me.__onoff_0.logicBlock_backgroundcolor();
		me.__off_0.logicBlock_visible();
		me.__on_0.logicBlock_visible();
		me.__57.logicBlock_visible();
		me.__onoff_3.logicBlock_size();
		me.__onoff_3.logicBlock_visible();
		me.__onoff_3.logicBlock_backgroundcolor();
		me.__off_3.logicBlock_visible();
		me.__on_3.logicBlock_visible();
		me.__312.logicBlock_visible();
		me.__onoff_31.logicBlock_size();
		me.__onoff_31.logicBlock_visible();
		me.__onoff_31.logicBlock_backgroundcolor();
		me.__off_31.logicBlock_visible();
		me.__on_31.logicBlock_visible();
		me.__311.logicBlock_visible();
		me.__onoff_2.logicBlock_size();
		me.__onoff_2.logicBlock_visible();
		me.__onoff_2.logicBlock_backgroundcolor();
		me.__off_2.logicBlock_visible();
		me.__on_2.logicBlock_visible();
		me.__214.logicBlock_visible();
		me.__onoff_21.logicBlock_size();
		me.__onoff_21.logicBlock_visible();
		me.__onoff_21.logicBlock_backgroundcolor();
		me.__off_21.logicBlock_visible();
		me.__on_21.logicBlock_visible();
		me.__213.logicBlock_visible();
		me.__onoff_1.logicBlock_size();
		me.__onoff_1.logicBlock_visible();
		me.__onoff_1.logicBlock_backgroundcolor();
		me.__off_1.logicBlock_visible();
		me.__on_1.logicBlock_visible();
		me.__112.logicBlock_visible();
		me.__onoff_.logicBlock_size();
		me.__onoff_.logicBlock_visible();
		me.__onoff_.logicBlock_backgroundcolor();
		me.__off_.logicBlock_visible();
		me.__on_.logicBlock_visible();
		me.__56.logicBlock_visible();
		me.__52.logicBlock_position();
		me.__310.logicBlock_size();
		me.__310.logicBlock_backgroundcolor();
		me.__54.logicBlock_visible();
		me.__53.logicBlock_visible();
		me._image_9.logicBlock_visible();
		me.__49.logicBlock_position();
		me.__410.logicBlock_size();
		me.__410.logicBlock_backgroundcolor();
		me.__51.logicBlock_visible();
		me.__50.logicBlock_visible();
		me._image_10.logicBlock_visible();
		me.__45.logicBlock_position();
		me.__46.logicBlock_size();
		me.__46.logicBlock_backgroundcolor();
		me.__48.logicBlock_visible();
		me.__47.logicBlock_visible();
		me._image_12.logicBlock_visible();
		me.__42.logicBlock_position();
		me.__42.logicBlock_size();
		me.__61.logicBlock_size();
		me.__61.logicBlock_backgroundcolor();
		me.__44.logicBlock_visible();
		me.__43.logicBlock_visible();
		me._off7.logicBlock_visible();
		me.__27.logicBlock_visible();
		me.__111.logicBlock_backgroundcolor();
		me.__111.logicBlock_textcolor();
		me.__212.logicBlock_backgroundcolor();
		me.__212.logicBlock_textcolor();
		me.__35.logicBlock_backgroundcolor();
		me.__35.logicBlock_textcolor();
		me.__25.logicBlock_visible();
		me._on0.logicBlock_visible();
		me._on4.logicBlock_textcolor();
		me.__2on0.logicBlock_textcolor();
		me.__1on0.logicBlock_textcolor();
		me.__3on.logicBlock_textcolor();
		me.__2on.logicBlock_textcolor();
		me.__1on.logicBlock_textcolor();
		me._on3.logicBlock_textcolor();
		me._on2.logicBlock_textcolor();
		me._on1.logicBlock_textcolor();
		me._off2.logicBlock_visible();
		me._off6.logicBlock_textcolor();
		me.__2off0.logicBlock_textcolor();
		me.__1off0.logicBlock_textcolor();
		me.__3off.logicBlock_textcolor();
		me.__2off.logicBlock_textcolor();
		me.__1off.logicBlock_textcolor();
		me._off5.logicBlock_textcolor();
		me._off4.logicBlock_textcolor();
		me._off3.logicBlock_textcolor();
		me.__18.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff6);
		me.__74boff6__normal = clonedNormalElement._map_pin;
		me.__74boff6__normalInst = clonedNormalElement;
		me.__74boff6__normal.style.visibility='inherit';
		me.__74boff6__normal.style.left='-12px';
		me.__74boff6__normal.style.top='-41px';
		me.__74boff6.ggMarkerNormal=me.__74boff6__normal;
		me.__74boff6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff6);
		me.__74boff6__active = clonedActiveElement._map_pin;
		me.__74boff6__activeInst = clonedActiveElement;
		me.__74boff6__active.style.visibility='hidden';
		me.__74boff6__active.style.left='-12px';
		me.__74boff6__active.style.top='-41px';
		me.__74boff6.ggMarkerActive=me.__74boff6__active;
		me.__74boff6.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff6.firstChild) {
			me.__74boff6.insertBefore(me.__74boff6__active,me.__74boff6.firstChild);
		} else {
			me.__74boff6.appendChild(me.__74boff6__active);
		}
		if (me.__74boff6.firstChild) {
			me.__74boff6.insertBefore(me.__74boff6__normal,me.__74boff6.firstChild);
		} else {
			me.__74boff6.appendChild(me.__74boff6__normal);
		}
		for (var i = 0; i < me.__74boff6.childNodes.length; i++) {
			me.__74boff6.ggMarkerInstances.push(me.__74boff6.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff5);
		me.__74boff5__normal = clonedNormalElement._map_pin;
		me.__74boff5__normalInst = clonedNormalElement;
		me.__74boff5__normal.style.visibility='inherit';
		me.__74boff5__normal.style.left='-12px';
		me.__74boff5__normal.style.top='-41px';
		me.__74boff5.ggMarkerNormal=me.__74boff5__normal;
		me.__74boff5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff5);
		me.__74boff5__active = clonedActiveElement._map_pin;
		me.__74boff5__activeInst = clonedActiveElement;
		me.__74boff5__active.style.visibility='hidden';
		me.__74boff5__active.style.left='-12px';
		me.__74boff5__active.style.top='-41px';
		me.__74boff5.ggMarkerActive=me.__74boff5__active;
		me.__74boff5.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff5.firstChild) {
			me.__74boff5.insertBefore(me.__74boff5__active,me.__74boff5.firstChild);
		} else {
			me.__74boff5.appendChild(me.__74boff5__active);
		}
		if (me.__74boff5.firstChild) {
			me.__74boff5.insertBefore(me.__74boff5__normal,me.__74boff5.firstChild);
		} else {
			me.__74boff5.appendChild(me.__74boff5__normal);
		}
		for (var i = 0; i < me.__74boff5.childNodes.length; i++) {
			me.__74boff5.ggMarkerInstances.push(me.__74boff5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff24);
		me.__74boff24__normal = clonedNormalElement._map_pin;
		me.__74boff24__normalInst = clonedNormalElement;
		me.__74boff24__normal.style.visibility='inherit';
		me.__74boff24__normal.style.left='-12px';
		me.__74boff24__normal.style.top='-41px';
		me.__74boff24.ggMarkerNormal=me.__74boff24__normal;
		me.__74boff24.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff24);
		me.__74boff24__active = clonedActiveElement._map_pin;
		me.__74boff24__activeInst = clonedActiveElement;
		me.__74boff24__active.style.visibility='hidden';
		me.__74boff24__active.style.left='-12px';
		me.__74boff24__active.style.top='-41px';
		me.__74boff24.ggMarkerActive=me.__74boff24__active;
		me.__74boff24.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff24.firstChild) {
			me.__74boff24.insertBefore(me.__74boff24__active,me.__74boff24.firstChild);
		} else {
			me.__74boff24.appendChild(me.__74boff24__active);
		}
		if (me.__74boff24.firstChild) {
			me.__74boff24.insertBefore(me.__74boff24__normal,me.__74boff24.firstChild);
		} else {
			me.__74boff24.appendChild(me.__74boff24__normal);
		}
		for (var i = 0; i < me.__74boff24.childNodes.length; i++) {
			me.__74boff24.ggMarkerInstances.push(me.__74boff24.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff4);
		me.__74boff4__normal = clonedNormalElement._map_pin;
		me.__74boff4__normalInst = clonedNormalElement;
		me.__74boff4__normal.style.visibility='inherit';
		me.__74boff4__normal.style.left='-12px';
		me.__74boff4__normal.style.top='-41px';
		me.__74boff4.ggMarkerNormal=me.__74boff4__normal;
		me.__74boff4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff4);
		me.__74boff4__active = clonedActiveElement._map_pin;
		me.__74boff4__activeInst = clonedActiveElement;
		me.__74boff4__active.style.visibility='hidden';
		me.__74boff4__active.style.left='-12px';
		me.__74boff4__active.style.top='-41px';
		me.__74boff4.ggMarkerActive=me.__74boff4__active;
		me.__74boff4.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff4.firstChild) {
			me.__74boff4.insertBefore(me.__74boff4__active,me.__74boff4.firstChild);
		} else {
			me.__74boff4.appendChild(me.__74boff4__active);
		}
		if (me.__74boff4.firstChild) {
			me.__74boff4.insertBefore(me.__74boff4__normal,me.__74boff4.firstChild);
		} else {
			me.__74boff4.appendChild(me.__74boff4__normal);
		}
		for (var i = 0; i < me.__74boff4.childNodes.length; i++) {
			me.__74boff4.ggMarkerInstances.push(me.__74boff4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff23);
		me.__74boff23__normal = clonedNormalElement._map_pin;
		me.__74boff23__normalInst = clonedNormalElement;
		me.__74boff23__normal.style.visibility='inherit';
		me.__74boff23__normal.style.left='-12px';
		me.__74boff23__normal.style.top='-41px';
		me.__74boff23.ggMarkerNormal=me.__74boff23__normal;
		me.__74boff23.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff23);
		me.__74boff23__active = clonedActiveElement._map_pin;
		me.__74boff23__activeInst = clonedActiveElement;
		me.__74boff23__active.style.visibility='hidden';
		me.__74boff23__active.style.left='-12px';
		me.__74boff23__active.style.top='-41px';
		me.__74boff23.ggMarkerActive=me.__74boff23__active;
		me.__74boff23.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff23.firstChild) {
			me.__74boff23.insertBefore(me.__74boff23__active,me.__74boff23.firstChild);
		} else {
			me.__74boff23.appendChild(me.__74boff23__active);
		}
		if (me.__74boff23.firstChild) {
			me.__74boff23.insertBefore(me.__74boff23__normal,me.__74boff23.firstChild);
		} else {
			me.__74boff23.appendChild(me.__74boff23__normal);
		}
		for (var i = 0; i < me.__74boff23.childNodes.length; i++) {
			me.__74boff23.ggMarkerInstances.push(me.__74boff23.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff10);
		me.__74boff10__normal = clonedNormalElement._map_pin;
		me.__74boff10__normalInst = clonedNormalElement;
		me.__74boff10__normal.style.visibility='inherit';
		me.__74boff10__normal.style.left='-12px';
		me.__74boff10__normal.style.top='-41px';
		me.__74boff10.ggMarkerNormal=me.__74boff10__normal;
		me.__74boff10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff10);
		me.__74boff10__active = clonedActiveElement._map_pin;
		me.__74boff10__activeInst = clonedActiveElement;
		me.__74boff10__active.style.visibility='hidden';
		me.__74boff10__active.style.left='-12px';
		me.__74boff10__active.style.top='-41px';
		me.__74boff10.ggMarkerActive=me.__74boff10__active;
		me.__74boff10.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff10.firstChild) {
			me.__74boff10.insertBefore(me.__74boff10__active,me.__74boff10.firstChild);
		} else {
			me.__74boff10.appendChild(me.__74boff10__active);
		}
		if (me.__74boff10.firstChild) {
			me.__74boff10.insertBefore(me.__74boff10__normal,me.__74boff10.firstChild);
		} else {
			me.__74boff10.appendChild(me.__74boff10__normal);
		}
		for (var i = 0; i < me.__74boff10.childNodes.length; i++) {
			me.__74boff10.ggMarkerInstances.push(me.__74boff10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff22);
		me.__74boff22__normal = clonedNormalElement._map_pin;
		me.__74boff22__normalInst = clonedNormalElement;
		me.__74boff22__normal.style.visibility='inherit';
		me.__74boff22__normal.style.left='-12px';
		me.__74boff22__normal.style.top='-41px';
		me.__74boff22.ggMarkerNormal=me.__74boff22__normal;
		me.__74boff22.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff22);
		me.__74boff22__active = clonedActiveElement._map_pin;
		me.__74boff22__activeInst = clonedActiveElement;
		me.__74boff22__active.style.visibility='hidden';
		me.__74boff22__active.style.left='-12px';
		me.__74boff22__active.style.top='-41px';
		me.__74boff22.ggMarkerActive=me.__74boff22__active;
		me.__74boff22.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff22.firstChild) {
			me.__74boff22.insertBefore(me.__74boff22__active,me.__74boff22.firstChild);
		} else {
			me.__74boff22.appendChild(me.__74boff22__active);
		}
		if (me.__74boff22.firstChild) {
			me.__74boff22.insertBefore(me.__74boff22__normal,me.__74boff22.firstChild);
		} else {
			me.__74boff22.appendChild(me.__74boff22__normal);
		}
		for (var i = 0; i < me.__74boff22.childNodes.length; i++) {
			me.__74boff22.ggMarkerInstances.push(me.__74boff22.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff21);
		me.__74boff21__normal = clonedNormalElement._map_pin;
		me.__74boff21__normalInst = clonedNormalElement;
		me.__74boff21__normal.style.visibility='inherit';
		me.__74boff21__normal.style.left='-12px';
		me.__74boff21__normal.style.top='-41px';
		me.__74boff21.ggMarkerNormal=me.__74boff21__normal;
		me.__74boff21.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff21);
		me.__74boff21__active = clonedActiveElement._map_pin;
		me.__74boff21__activeInst = clonedActiveElement;
		me.__74boff21__active.style.visibility='hidden';
		me.__74boff21__active.style.left='-12px';
		me.__74boff21__active.style.top='-41px';
		me.__74boff21.ggMarkerActive=me.__74boff21__active;
		me.__74boff21.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff21.firstChild) {
			me.__74boff21.insertBefore(me.__74boff21__active,me.__74boff21.firstChild);
		} else {
			me.__74boff21.appendChild(me.__74boff21__active);
		}
		if (me.__74boff21.firstChild) {
			me.__74boff21.insertBefore(me.__74boff21__normal,me.__74boff21.firstChild);
		} else {
			me.__74boff21.appendChild(me.__74boff21__normal);
		}
		for (var i = 0; i < me.__74boff21.childNodes.length; i++) {
			me.__74boff21.ggMarkerInstances.push(me.__74boff21.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff31);
		me.__74boff31__normal = clonedNormalElement._map_pin;
		me.__74boff31__normalInst = clonedNormalElement;
		me.__74boff31__normal.style.visibility='inherit';
		me.__74boff31__normal.style.left='-12px';
		me.__74boff31__normal.style.top='-41px';
		me.__74boff31.ggMarkerNormal=me.__74boff31__normal;
		me.__74boff31.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff31);
		me.__74boff31__active = clonedActiveElement._map_pin;
		me.__74boff31__activeInst = clonedActiveElement;
		me.__74boff31__active.style.visibility='hidden';
		me.__74boff31__active.style.left='-12px';
		me.__74boff31__active.style.top='-41px';
		me.__74boff31.ggMarkerActive=me.__74boff31__active;
		me.__74boff31.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff31.firstChild) {
			me.__74boff31.insertBefore(me.__74boff31__active,me.__74boff31.firstChild);
		} else {
			me.__74boff31.appendChild(me.__74boff31__active);
		}
		if (me.__74boff31.firstChild) {
			me.__74boff31.insertBefore(me.__74boff31__normal,me.__74boff31.firstChild);
		} else {
			me.__74boff31.appendChild(me.__74boff31__normal);
		}
		for (var i = 0; i < me.__74boff31.childNodes.length; i++) {
			me.__74boff31.ggMarkerInstances.push(me.__74boff31.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff30);
		me.__74boff30__normal = clonedNormalElement._map_pin;
		me.__74boff30__normalInst = clonedNormalElement;
		me.__74boff30__normal.style.visibility='inherit';
		me.__74boff30__normal.style.left='-12px';
		me.__74boff30__normal.style.top='-41px';
		me.__74boff30.ggMarkerNormal=me.__74boff30__normal;
		me.__74boff30.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff30);
		me.__74boff30__active = clonedActiveElement._map_pin;
		me.__74boff30__activeInst = clonedActiveElement;
		me.__74boff30__active.style.visibility='hidden';
		me.__74boff30__active.style.left='-12px';
		me.__74boff30__active.style.top='-41px';
		me.__74boff30.ggMarkerActive=me.__74boff30__active;
		me.__74boff30.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff30.firstChild) {
			me.__74boff30.insertBefore(me.__74boff30__active,me.__74boff30.firstChild);
		} else {
			me.__74boff30.appendChild(me.__74boff30__active);
		}
		if (me.__74boff30.firstChild) {
			me.__74boff30.insertBefore(me.__74boff30__normal,me.__74boff30.firstChild);
		} else {
			me.__74boff30.appendChild(me.__74boff30__normal);
		}
		for (var i = 0; i < me.__74boff30.childNodes.length; i++) {
			me.__74boff30.ggMarkerInstances.push(me.__74boff30.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff3);
		me.__74boff3__normal = clonedNormalElement._map_pin;
		me.__74boff3__normalInst = clonedNormalElement;
		me.__74boff3__normal.style.visibility='inherit';
		me.__74boff3__normal.style.left='-12px';
		me.__74boff3__normal.style.top='-41px';
		me.__74boff3.ggMarkerNormal=me.__74boff3__normal;
		me.__74boff3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff3);
		me.__74boff3__active = clonedActiveElement._map_pin;
		me.__74boff3__activeInst = clonedActiveElement;
		me.__74boff3__active.style.visibility='hidden';
		me.__74boff3__active.style.left='-12px';
		me.__74boff3__active.style.top='-41px';
		me.__74boff3.ggMarkerActive=me.__74boff3__active;
		me.__74boff3.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff3.firstChild) {
			me.__74boff3.insertBefore(me.__74boff3__active,me.__74boff3.firstChild);
		} else {
			me.__74boff3.appendChild(me.__74boff3__active);
		}
		if (me.__74boff3.firstChild) {
			me.__74boff3.insertBefore(me.__74boff3__normal,me.__74boff3.firstChild);
		} else {
			me.__74boff3.appendChild(me.__74boff3__normal);
		}
		for (var i = 0; i < me.__74boff3.childNodes.length; i++) {
			me.__74boff3.ggMarkerInstances.push(me.__74boff3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff20);
		me.__74boff20__normal = clonedNormalElement._map_pin;
		me.__74boff20__normalInst = clonedNormalElement;
		me.__74boff20__normal.style.visibility='inherit';
		me.__74boff20__normal.style.left='-12px';
		me.__74boff20__normal.style.top='-41px';
		me.__74boff20.ggMarkerNormal=me.__74boff20__normal;
		me.__74boff20.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff20);
		me.__74boff20__active = clonedActiveElement._map_pin;
		me.__74boff20__activeInst = clonedActiveElement;
		me.__74boff20__active.style.visibility='hidden';
		me.__74boff20__active.style.left='-12px';
		me.__74boff20__active.style.top='-41px';
		me.__74boff20.ggMarkerActive=me.__74boff20__active;
		me.__74boff20.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff20.firstChild) {
			me.__74boff20.insertBefore(me.__74boff20__active,me.__74boff20.firstChild);
		} else {
			me.__74boff20.appendChild(me.__74boff20__active);
		}
		if (me.__74boff20.firstChild) {
			me.__74boff20.insertBefore(me.__74boff20__normal,me.__74boff20.firstChild);
		} else {
			me.__74boff20.appendChild(me.__74boff20__normal);
		}
		for (var i = 0; i < me.__74boff20.childNodes.length; i++) {
			me.__74boff20.ggMarkerInstances.push(me.__74boff20.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff1);
		me.__74boff1__normal = clonedNormalElement._map_pin;
		me.__74boff1__normalInst = clonedNormalElement;
		me.__74boff1__normal.style.visibility='inherit';
		me.__74boff1__normal.style.left='-12px';
		me.__74boff1__normal.style.top='-41px';
		me.__74boff1.ggMarkerNormal=me.__74boff1__normal;
		me.__74boff1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff1);
		me.__74boff1__active = clonedActiveElement._map_pin;
		me.__74boff1__activeInst = clonedActiveElement;
		me.__74boff1__active.style.visibility='hidden';
		me.__74boff1__active.style.left='-12px';
		me.__74boff1__active.style.top='-41px';
		me.__74boff1.ggMarkerActive=me.__74boff1__active;
		me.__74boff1.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff1.firstChild) {
			me.__74boff1.insertBefore(me.__74boff1__active,me.__74boff1.firstChild);
		} else {
			me.__74boff1.appendChild(me.__74boff1__active);
		}
		if (me.__74boff1.firstChild) {
			me.__74boff1.insertBefore(me.__74boff1__normal,me.__74boff1.firstChild);
		} else {
			me.__74boff1.appendChild(me.__74boff1__normal);
		}
		for (var i = 0; i < me.__74boff1.childNodes.length; i++) {
			me.__74boff1.ggMarkerInstances.push(me.__74boff1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff12);
		me.__74boff12__normal = clonedNormalElement._map_pin;
		me.__74boff12__normalInst = clonedNormalElement;
		me.__74boff12__normal.style.visibility='inherit';
		me.__74boff12__normal.style.left='-12px';
		me.__74boff12__normal.style.top='-41px';
		me.__74boff12.ggMarkerNormal=me.__74boff12__normal;
		me.__74boff12.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff12);
		me.__74boff12__active = clonedActiveElement._map_pin;
		me.__74boff12__activeInst = clonedActiveElement;
		me.__74boff12__active.style.visibility='hidden';
		me.__74boff12__active.style.left='-12px';
		me.__74boff12__active.style.top='-41px';
		me.__74boff12.ggMarkerActive=me.__74boff12__active;
		me.__74boff12.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff12.firstChild) {
			me.__74boff12.insertBefore(me.__74boff12__active,me.__74boff12.firstChild);
		} else {
			me.__74boff12.appendChild(me.__74boff12__active);
		}
		if (me.__74boff12.firstChild) {
			me.__74boff12.insertBefore(me.__74boff12__normal,me.__74boff12.firstChild);
		} else {
			me.__74boff12.appendChild(me.__74boff12__normal);
		}
		for (var i = 0; i < me.__74boff12.childNodes.length; i++) {
			me.__74boff12.ggMarkerInstances.push(me.__74boff12.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff13);
		me.__74boff13__normal = clonedNormalElement._map_pin;
		me.__74boff13__normalInst = clonedNormalElement;
		me.__74boff13__normal.style.visibility='inherit';
		me.__74boff13__normal.style.left='-12px';
		me.__74boff13__normal.style.top='-41px';
		me.__74boff13.ggMarkerNormal=me.__74boff13__normal;
		me.__74boff13.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff13);
		me.__74boff13__active = clonedActiveElement._map_pin;
		me.__74boff13__activeInst = clonedActiveElement;
		me.__74boff13__active.style.visibility='hidden';
		me.__74boff13__active.style.left='-12px';
		me.__74boff13__active.style.top='-41px';
		me.__74boff13.ggMarkerActive=me.__74boff13__active;
		me.__74boff13.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff13.firstChild) {
			me.__74boff13.insertBefore(me.__74boff13__active,me.__74boff13.firstChild);
		} else {
			me.__74boff13.appendChild(me.__74boff13__active);
		}
		if (me.__74boff13.firstChild) {
			me.__74boff13.insertBefore(me.__74boff13__normal,me.__74boff13.firstChild);
		} else {
			me.__74boff13.appendChild(me.__74boff13__normal);
		}
		for (var i = 0; i < me.__74boff13.childNodes.length; i++) {
			me.__74boff13.ggMarkerInstances.push(me.__74boff13.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff0);
		me.__74boff0__normal = clonedNormalElement._map_pin;
		me.__74boff0__normalInst = clonedNormalElement;
		me.__74boff0__normal.style.visibility='inherit';
		me.__74boff0__normal.style.left='-12px';
		me.__74boff0__normal.style.top='-41px';
		me.__74boff0.ggMarkerNormal=me.__74boff0__normal;
		me.__74boff0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff0);
		me.__74boff0__active = clonedActiveElement._map_pin;
		me.__74boff0__activeInst = clonedActiveElement;
		me.__74boff0__active.style.visibility='hidden';
		me.__74boff0__active.style.left='-12px';
		me.__74boff0__active.style.top='-41px';
		me.__74boff0.ggMarkerActive=me.__74boff0__active;
		me.__74boff0.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff0.firstChild) {
			me.__74boff0.insertBefore(me.__74boff0__active,me.__74boff0.firstChild);
		} else {
			me.__74boff0.appendChild(me.__74boff0__active);
		}
		if (me.__74boff0.firstChild) {
			me.__74boff0.insertBefore(me.__74boff0__normal,me.__74boff0.firstChild);
		} else {
			me.__74boff0.appendChild(me.__74boff0__normal);
		}
		for (var i = 0; i < me.__74boff0.childNodes.length; i++) {
			me.__74boff0.ggMarkerInstances.push(me.__74boff0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff2);
		me.__74boff2__normal = clonedNormalElement._map_pin;
		me.__74boff2__normalInst = clonedNormalElement;
		me.__74boff2__normal.style.visibility='inherit';
		me.__74boff2__normal.style.left='-12px';
		me.__74boff2__normal.style.top='-41px';
		me.__74boff2.ggMarkerNormal=me.__74boff2__normal;
		me.__74boff2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff2);
		me.__74boff2__active = clonedActiveElement._map_pin;
		me.__74boff2__activeInst = clonedActiveElement;
		me.__74boff2__active.style.visibility='hidden';
		me.__74boff2__active.style.left='-12px';
		me.__74boff2__active.style.top='-41px';
		me.__74boff2.ggMarkerActive=me.__74boff2__active;
		me.__74boff2.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff2.firstChild) {
			me.__74boff2.insertBefore(me.__74boff2__active,me.__74boff2.firstChild);
		} else {
			me.__74boff2.appendChild(me.__74boff2__active);
		}
		if (me.__74boff2.firstChild) {
			me.__74boff2.insertBefore(me.__74boff2__normal,me.__74boff2.firstChild);
		} else {
			me.__74boff2.appendChild(me.__74boff2__normal);
		}
		for (var i = 0; i < me.__74boff2.childNodes.length; i++) {
			me.__74boff2.ggMarkerInstances.push(me.__74boff2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74boff);
		me.__74boff__normal = clonedNormalElement._map_pin;
		me.__74boff__normalInst = clonedNormalElement;
		me.__74boff__normal.style.visibility='inherit';
		me.__74boff__normal.style.left='-12px';
		me.__74boff__normal.style.top='-41px';
		me.__74boff.ggMarkerNormal=me.__74boff__normal;
		me.__74boff.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74boff);
		me.__74boff__active = clonedActiveElement._map_pin;
		me.__74boff__activeInst = clonedActiveElement;
		me.__74boff__active.style.visibility='hidden';
		me.__74boff__active.style.left='-12px';
		me.__74boff__active.style.top='-41px';
		me.__74boff.ggMarkerActive=me.__74boff__active;
		me.__74boff.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74boff.firstChild) {
			me.__74boff.insertBefore(me.__74boff__active,me.__74boff.firstChild);
		} else {
			me.__74boff.appendChild(me.__74boff__active);
		}
		if (me.__74boff.firstChild) {
			me.__74boff.insertBefore(me.__74boff__normal,me.__74boff.firstChild);
		} else {
			me.__74boff.appendChild(me.__74boff__normal);
		}
		for (var i = 0; i < me.__74boff.childNodes.length; i++) {
			me.__74boff.ggMarkerInstances.push(me.__74boff.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b6);
		me.__74b6__normal = clonedNormalElement._map_pin;
		me.__74b6__normalInst = clonedNormalElement;
		me.__74b6__normal.style.visibility='inherit';
		me.__74b6__normal.style.left='-12px';
		me.__74b6__normal.style.top='-41px';
		me.__74b6.ggMarkerNormal=me.__74b6__normal;
		me.__74b6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b6);
		me.__74b6__active = clonedActiveElement._map_pin;
		me.__74b6__activeInst = clonedActiveElement;
		me.__74b6__active.style.visibility='hidden';
		me.__74b6__active.style.left='-12px';
		me.__74b6__active.style.top='-41px';
		me.__74b6.ggMarkerActive=me.__74b6__active;
		me.__74b6.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b6.firstChild) {
			me.__74b6.insertBefore(me.__74b6__active,me.__74b6.firstChild);
		} else {
			me.__74b6.appendChild(me.__74b6__active);
		}
		if (me.__74b6.firstChild) {
			me.__74b6.insertBefore(me.__74b6__normal,me.__74b6.firstChild);
		} else {
			me.__74b6.appendChild(me.__74b6__normal);
		}
		for (var i = 0; i < me.__74b6.childNodes.length; i++) {
			me.__74b6.ggMarkerInstances.push(me.__74b6.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b5);
		me.__74b5__normal = clonedNormalElement._map_pin;
		me.__74b5__normalInst = clonedNormalElement;
		me.__74b5__normal.style.visibility='inherit';
		me.__74b5__normal.style.left='-12px';
		me.__74b5__normal.style.top='-41px';
		me.__74b5.ggMarkerNormal=me.__74b5__normal;
		me.__74b5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b5);
		me.__74b5__active = clonedActiveElement._map_pin;
		me.__74b5__activeInst = clonedActiveElement;
		me.__74b5__active.style.visibility='hidden';
		me.__74b5__active.style.left='-12px';
		me.__74b5__active.style.top='-41px';
		me.__74b5.ggMarkerActive=me.__74b5__active;
		me.__74b5.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b5.firstChild) {
			me.__74b5.insertBefore(me.__74b5__active,me.__74b5.firstChild);
		} else {
			me.__74b5.appendChild(me.__74b5__active);
		}
		if (me.__74b5.firstChild) {
			me.__74b5.insertBefore(me.__74b5__normal,me.__74b5.firstChild);
		} else {
			me.__74b5.appendChild(me.__74b5__normal);
		}
		for (var i = 0; i < me.__74b5.childNodes.length; i++) {
			me.__74b5.ggMarkerInstances.push(me.__74b5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b24);
		me.__74b24__normal = clonedNormalElement._map_pin;
		me.__74b24__normalInst = clonedNormalElement;
		me.__74b24__normal.style.visibility='inherit';
		me.__74b24__normal.style.left='-12px';
		me.__74b24__normal.style.top='-41px';
		me.__74b24.ggMarkerNormal=me.__74b24__normal;
		me.__74b24.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b24);
		me.__74b24__active = clonedActiveElement._map_pin;
		me.__74b24__activeInst = clonedActiveElement;
		me.__74b24__active.style.visibility='hidden';
		me.__74b24__active.style.left='-12px';
		me.__74b24__active.style.top='-41px';
		me.__74b24.ggMarkerActive=me.__74b24__active;
		me.__74b24.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b24.firstChild) {
			me.__74b24.insertBefore(me.__74b24__active,me.__74b24.firstChild);
		} else {
			me.__74b24.appendChild(me.__74b24__active);
		}
		if (me.__74b24.firstChild) {
			me.__74b24.insertBefore(me.__74b24__normal,me.__74b24.firstChild);
		} else {
			me.__74b24.appendChild(me.__74b24__normal);
		}
		for (var i = 0; i < me.__74b24.childNodes.length; i++) {
			me.__74b24.ggMarkerInstances.push(me.__74b24.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b4);
		me.__74b4__normal = clonedNormalElement._map_pin;
		me.__74b4__normalInst = clonedNormalElement;
		me.__74b4__normal.style.visibility='inherit';
		me.__74b4__normal.style.left='-12px';
		me.__74b4__normal.style.top='-41px';
		me.__74b4.ggMarkerNormal=me.__74b4__normal;
		me.__74b4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b4);
		me.__74b4__active = clonedActiveElement._map_pin;
		me.__74b4__activeInst = clonedActiveElement;
		me.__74b4__active.style.visibility='hidden';
		me.__74b4__active.style.left='-12px';
		me.__74b4__active.style.top='-41px';
		me.__74b4.ggMarkerActive=me.__74b4__active;
		me.__74b4.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b4.firstChild) {
			me.__74b4.insertBefore(me.__74b4__active,me.__74b4.firstChild);
		} else {
			me.__74b4.appendChild(me.__74b4__active);
		}
		if (me.__74b4.firstChild) {
			me.__74b4.insertBefore(me.__74b4__normal,me.__74b4.firstChild);
		} else {
			me.__74b4.appendChild(me.__74b4__normal);
		}
		for (var i = 0; i < me.__74b4.childNodes.length; i++) {
			me.__74b4.ggMarkerInstances.push(me.__74b4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b23);
		me.__74b23__normal = clonedNormalElement._map_pin;
		me.__74b23__normalInst = clonedNormalElement;
		me.__74b23__normal.style.visibility='inherit';
		me.__74b23__normal.style.left='-12px';
		me.__74b23__normal.style.top='-41px';
		me.__74b23.ggMarkerNormal=me.__74b23__normal;
		me.__74b23.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b23);
		me.__74b23__active = clonedActiveElement._map_pin;
		me.__74b23__activeInst = clonedActiveElement;
		me.__74b23__active.style.visibility='hidden';
		me.__74b23__active.style.left='-12px';
		me.__74b23__active.style.top='-41px';
		me.__74b23.ggMarkerActive=me.__74b23__active;
		me.__74b23.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b23.firstChild) {
			me.__74b23.insertBefore(me.__74b23__active,me.__74b23.firstChild);
		} else {
			me.__74b23.appendChild(me.__74b23__active);
		}
		if (me.__74b23.firstChild) {
			me.__74b23.insertBefore(me.__74b23__normal,me.__74b23.firstChild);
		} else {
			me.__74b23.appendChild(me.__74b23__normal);
		}
		for (var i = 0; i < me.__74b23.childNodes.length; i++) {
			me.__74b23.ggMarkerInstances.push(me.__74b23.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b10);
		me.__74b10__normal = clonedNormalElement._map_pin;
		me.__74b10__normalInst = clonedNormalElement;
		me.__74b10__normal.style.visibility='inherit';
		me.__74b10__normal.style.left='-12px';
		me.__74b10__normal.style.top='-41px';
		me.__74b10.ggMarkerNormal=me.__74b10__normal;
		me.__74b10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b10);
		me.__74b10__active = clonedActiveElement._map_pin;
		me.__74b10__activeInst = clonedActiveElement;
		me.__74b10__active.style.visibility='hidden';
		me.__74b10__active.style.left='-12px';
		me.__74b10__active.style.top='-41px';
		me.__74b10.ggMarkerActive=me.__74b10__active;
		me.__74b10.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b10.firstChild) {
			me.__74b10.insertBefore(me.__74b10__active,me.__74b10.firstChild);
		} else {
			me.__74b10.appendChild(me.__74b10__active);
		}
		if (me.__74b10.firstChild) {
			me.__74b10.insertBefore(me.__74b10__normal,me.__74b10.firstChild);
		} else {
			me.__74b10.appendChild(me.__74b10__normal);
		}
		for (var i = 0; i < me.__74b10.childNodes.length; i++) {
			me.__74b10.ggMarkerInstances.push(me.__74b10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b22);
		me.__74b22__normal = clonedNormalElement._map_pin;
		me.__74b22__normalInst = clonedNormalElement;
		me.__74b22__normal.style.visibility='inherit';
		me.__74b22__normal.style.left='-12px';
		me.__74b22__normal.style.top='-41px';
		me.__74b22.ggMarkerNormal=me.__74b22__normal;
		me.__74b22.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b22);
		me.__74b22__active = clonedActiveElement._map_pin;
		me.__74b22__activeInst = clonedActiveElement;
		me.__74b22__active.style.visibility='hidden';
		me.__74b22__active.style.left='-12px';
		me.__74b22__active.style.top='-41px';
		me.__74b22.ggMarkerActive=me.__74b22__active;
		me.__74b22.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b22.firstChild) {
			me.__74b22.insertBefore(me.__74b22__active,me.__74b22.firstChild);
		} else {
			me.__74b22.appendChild(me.__74b22__active);
		}
		if (me.__74b22.firstChild) {
			me.__74b22.insertBefore(me.__74b22__normal,me.__74b22.firstChild);
		} else {
			me.__74b22.appendChild(me.__74b22__normal);
		}
		for (var i = 0; i < me.__74b22.childNodes.length; i++) {
			me.__74b22.ggMarkerInstances.push(me.__74b22.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b21);
		me.__74b21__normal = clonedNormalElement._map_pin;
		me.__74b21__normalInst = clonedNormalElement;
		me.__74b21__normal.style.visibility='inherit';
		me.__74b21__normal.style.left='-12px';
		me.__74b21__normal.style.top='-41px';
		me.__74b21.ggMarkerNormal=me.__74b21__normal;
		me.__74b21.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b21);
		me.__74b21__active = clonedActiveElement._map_pin;
		me.__74b21__activeInst = clonedActiveElement;
		me.__74b21__active.style.visibility='hidden';
		me.__74b21__active.style.left='-12px';
		me.__74b21__active.style.top='-41px';
		me.__74b21.ggMarkerActive=me.__74b21__active;
		me.__74b21.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b21.firstChild) {
			me.__74b21.insertBefore(me.__74b21__active,me.__74b21.firstChild);
		} else {
			me.__74b21.appendChild(me.__74b21__active);
		}
		if (me.__74b21.firstChild) {
			me.__74b21.insertBefore(me.__74b21__normal,me.__74b21.firstChild);
		} else {
			me.__74b21.appendChild(me.__74b21__normal);
		}
		for (var i = 0; i < me.__74b21.childNodes.length; i++) {
			me.__74b21.ggMarkerInstances.push(me.__74b21.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b31);
		me.__74b31__normal = clonedNormalElement._map_pin;
		me.__74b31__normalInst = clonedNormalElement;
		me.__74b31__normal.style.visibility='inherit';
		me.__74b31__normal.style.left='-12px';
		me.__74b31__normal.style.top='-41px';
		me.__74b31.ggMarkerNormal=me.__74b31__normal;
		me.__74b31.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b31);
		me.__74b31__active = clonedActiveElement._map_pin;
		me.__74b31__activeInst = clonedActiveElement;
		me.__74b31__active.style.visibility='hidden';
		me.__74b31__active.style.left='-12px';
		me.__74b31__active.style.top='-41px';
		me.__74b31.ggMarkerActive=me.__74b31__active;
		me.__74b31.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b31.firstChild) {
			me.__74b31.insertBefore(me.__74b31__active,me.__74b31.firstChild);
		} else {
			me.__74b31.appendChild(me.__74b31__active);
		}
		if (me.__74b31.firstChild) {
			me.__74b31.insertBefore(me.__74b31__normal,me.__74b31.firstChild);
		} else {
			me.__74b31.appendChild(me.__74b31__normal);
		}
		for (var i = 0; i < me.__74b31.childNodes.length; i++) {
			me.__74b31.ggMarkerInstances.push(me.__74b31.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b30);
		me.__74b30__normal = clonedNormalElement._map_pin;
		me.__74b30__normalInst = clonedNormalElement;
		me.__74b30__normal.style.visibility='inherit';
		me.__74b30__normal.style.left='-12px';
		me.__74b30__normal.style.top='-41px';
		me.__74b30.ggMarkerNormal=me.__74b30__normal;
		me.__74b30.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b30);
		me.__74b30__active = clonedActiveElement._map_pin;
		me.__74b30__activeInst = clonedActiveElement;
		me.__74b30__active.style.visibility='hidden';
		me.__74b30__active.style.left='-12px';
		me.__74b30__active.style.top='-41px';
		me.__74b30.ggMarkerActive=me.__74b30__active;
		me.__74b30.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b30.firstChild) {
			me.__74b30.insertBefore(me.__74b30__active,me.__74b30.firstChild);
		} else {
			me.__74b30.appendChild(me.__74b30__active);
		}
		if (me.__74b30.firstChild) {
			me.__74b30.insertBefore(me.__74b30__normal,me.__74b30.firstChild);
		} else {
			me.__74b30.appendChild(me.__74b30__normal);
		}
		for (var i = 0; i < me.__74b30.childNodes.length; i++) {
			me.__74b30.ggMarkerInstances.push(me.__74b30.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b3);
		me.__74b3__normal = clonedNormalElement._map_pin;
		me.__74b3__normalInst = clonedNormalElement;
		me.__74b3__normal.style.visibility='inherit';
		me.__74b3__normal.style.left='-12px';
		me.__74b3__normal.style.top='-41px';
		me.__74b3.ggMarkerNormal=me.__74b3__normal;
		me.__74b3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b3);
		me.__74b3__active = clonedActiveElement._map_pin;
		me.__74b3__activeInst = clonedActiveElement;
		me.__74b3__active.style.visibility='hidden';
		me.__74b3__active.style.left='-12px';
		me.__74b3__active.style.top='-41px';
		me.__74b3.ggMarkerActive=me.__74b3__active;
		me.__74b3.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b3.firstChild) {
			me.__74b3.insertBefore(me.__74b3__active,me.__74b3.firstChild);
		} else {
			me.__74b3.appendChild(me.__74b3__active);
		}
		if (me.__74b3.firstChild) {
			me.__74b3.insertBefore(me.__74b3__normal,me.__74b3.firstChild);
		} else {
			me.__74b3.appendChild(me.__74b3__normal);
		}
		for (var i = 0; i < me.__74b3.childNodes.length; i++) {
			me.__74b3.ggMarkerInstances.push(me.__74b3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b20);
		me.__74b20__normal = clonedNormalElement._map_pin;
		me.__74b20__normalInst = clonedNormalElement;
		me.__74b20__normal.style.visibility='inherit';
		me.__74b20__normal.style.left='-12px';
		me.__74b20__normal.style.top='-41px';
		me.__74b20.ggMarkerNormal=me.__74b20__normal;
		me.__74b20.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b20);
		me.__74b20__active = clonedActiveElement._map_pin;
		me.__74b20__activeInst = clonedActiveElement;
		me.__74b20__active.style.visibility='hidden';
		me.__74b20__active.style.left='-12px';
		me.__74b20__active.style.top='-41px';
		me.__74b20.ggMarkerActive=me.__74b20__active;
		me.__74b20.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b20.firstChild) {
			me.__74b20.insertBefore(me.__74b20__active,me.__74b20.firstChild);
		} else {
			me.__74b20.appendChild(me.__74b20__active);
		}
		if (me.__74b20.firstChild) {
			me.__74b20.insertBefore(me.__74b20__normal,me.__74b20.firstChild);
		} else {
			me.__74b20.appendChild(me.__74b20__normal);
		}
		for (var i = 0; i < me.__74b20.childNodes.length; i++) {
			me.__74b20.ggMarkerInstances.push(me.__74b20.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b1);
		me.__74b1__normal = clonedNormalElement._map_pin;
		me.__74b1__normalInst = clonedNormalElement;
		me.__74b1__normal.style.visibility='inherit';
		me.__74b1__normal.style.left='-12px';
		me.__74b1__normal.style.top='-41px';
		me.__74b1.ggMarkerNormal=me.__74b1__normal;
		me.__74b1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b1);
		me.__74b1__active = clonedActiveElement._map_pin;
		me.__74b1__activeInst = clonedActiveElement;
		me.__74b1__active.style.visibility='hidden';
		me.__74b1__active.style.left='-12px';
		me.__74b1__active.style.top='-41px';
		me.__74b1.ggMarkerActive=me.__74b1__active;
		me.__74b1.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b1.firstChild) {
			me.__74b1.insertBefore(me.__74b1__active,me.__74b1.firstChild);
		} else {
			me.__74b1.appendChild(me.__74b1__active);
		}
		if (me.__74b1.firstChild) {
			me.__74b1.insertBefore(me.__74b1__normal,me.__74b1.firstChild);
		} else {
			me.__74b1.appendChild(me.__74b1__normal);
		}
		for (var i = 0; i < me.__74b1.childNodes.length; i++) {
			me.__74b1.ggMarkerInstances.push(me.__74b1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b12);
		me.__74b12__normal = clonedNormalElement._map_pin;
		me.__74b12__normalInst = clonedNormalElement;
		me.__74b12__normal.style.visibility='inherit';
		me.__74b12__normal.style.left='-12px';
		me.__74b12__normal.style.top='-41px';
		me.__74b12.ggMarkerNormal=me.__74b12__normal;
		me.__74b12.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b12);
		me.__74b12__active = clonedActiveElement._map_pin;
		me.__74b12__activeInst = clonedActiveElement;
		me.__74b12__active.style.visibility='hidden';
		me.__74b12__active.style.left='-12px';
		me.__74b12__active.style.top='-41px';
		me.__74b12.ggMarkerActive=me.__74b12__active;
		me.__74b12.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b12.firstChild) {
			me.__74b12.insertBefore(me.__74b12__active,me.__74b12.firstChild);
		} else {
			me.__74b12.appendChild(me.__74b12__active);
		}
		if (me.__74b12.firstChild) {
			me.__74b12.insertBefore(me.__74b12__normal,me.__74b12.firstChild);
		} else {
			me.__74b12.appendChild(me.__74b12__normal);
		}
		for (var i = 0; i < me.__74b12.childNodes.length; i++) {
			me.__74b12.ggMarkerInstances.push(me.__74b12.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b13);
		me.__74b13__normal = clonedNormalElement._map_pin;
		me.__74b13__normalInst = clonedNormalElement;
		me.__74b13__normal.style.visibility='inherit';
		me.__74b13__normal.style.left='-12px';
		me.__74b13__normal.style.top='-41px';
		me.__74b13.ggMarkerNormal=me.__74b13__normal;
		me.__74b13.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b13);
		me.__74b13__active = clonedActiveElement._map_pin;
		me.__74b13__activeInst = clonedActiveElement;
		me.__74b13__active.style.visibility='hidden';
		me.__74b13__active.style.left='-12px';
		me.__74b13__active.style.top='-41px';
		me.__74b13.ggMarkerActive=me.__74b13__active;
		me.__74b13.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b13.firstChild) {
			me.__74b13.insertBefore(me.__74b13__active,me.__74b13.firstChild);
		} else {
			me.__74b13.appendChild(me.__74b13__active);
		}
		if (me.__74b13.firstChild) {
			me.__74b13.insertBefore(me.__74b13__normal,me.__74b13.firstChild);
		} else {
			me.__74b13.appendChild(me.__74b13__normal);
		}
		for (var i = 0; i < me.__74b13.childNodes.length; i++) {
			me.__74b13.ggMarkerInstances.push(me.__74b13.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b0);
		me.__74b0__normal = clonedNormalElement._map_pin;
		me.__74b0__normalInst = clonedNormalElement;
		me.__74b0__normal.style.visibility='inherit';
		me.__74b0__normal.style.left='-12px';
		me.__74b0__normal.style.top='-41px';
		me.__74b0.ggMarkerNormal=me.__74b0__normal;
		me.__74b0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b0);
		me.__74b0__active = clonedActiveElement._map_pin;
		me.__74b0__activeInst = clonedActiveElement;
		me.__74b0__active.style.visibility='hidden';
		me.__74b0__active.style.left='-12px';
		me.__74b0__active.style.top='-41px';
		me.__74b0.ggMarkerActive=me.__74b0__active;
		me.__74b0.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b0.firstChild) {
			me.__74b0.insertBefore(me.__74b0__active,me.__74b0.firstChild);
		} else {
			me.__74b0.appendChild(me.__74b0__active);
		}
		if (me.__74b0.firstChild) {
			me.__74b0.insertBefore(me.__74b0__normal,me.__74b0.firstChild);
		} else {
			me.__74b0.appendChild(me.__74b0__normal);
		}
		for (var i = 0; i < me.__74b0.childNodes.length; i++) {
			me.__74b0.ggMarkerInstances.push(me.__74b0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b2);
		me.__74b2__normal = clonedNormalElement._map_pin;
		me.__74b2__normalInst = clonedNormalElement;
		me.__74b2__normal.style.visibility='inherit';
		me.__74b2__normal.style.left='-12px';
		me.__74b2__normal.style.top='-41px';
		me.__74b2.ggMarkerNormal=me.__74b2__normal;
		me.__74b2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b2);
		me.__74b2__active = clonedActiveElement._map_pin;
		me.__74b2__activeInst = clonedActiveElement;
		me.__74b2__active.style.visibility='hidden';
		me.__74b2__active.style.left='-12px';
		me.__74b2__active.style.top='-41px';
		me.__74b2.ggMarkerActive=me.__74b2__active;
		me.__74b2.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b2.firstChild) {
			me.__74b2.insertBefore(me.__74b2__active,me.__74b2.firstChild);
		} else {
			me.__74b2.appendChild(me.__74b2__active);
		}
		if (me.__74b2.firstChild) {
			me.__74b2.insertBefore(me.__74b2__normal,me.__74b2.firstChild);
		} else {
			me.__74b2.appendChild(me.__74b2__normal);
		}
		for (var i = 0; i < me.__74b2.childNodes.length; i++) {
			me.__74b2.ggMarkerInstances.push(me.__74b2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__74b);
		me.__74b__normal = clonedNormalElement._map_pin;
		me.__74b__normalInst = clonedNormalElement;
		me.__74b__normal.style.visibility='inherit';
		me.__74b__normal.style.left='-12px';
		me.__74b__normal.style.top='-41px';
		me.__74b.ggMarkerNormal=me.__74b__normal;
		me.__74b.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__74b);
		me.__74b__active = clonedActiveElement._map_pin;
		me.__74b__activeInst = clonedActiveElement;
		me.__74b__active.style.visibility='hidden';
		me.__74b__active.style.left='-12px';
		me.__74b__active.style.top='-41px';
		me.__74b.ggMarkerActive=me.__74b__active;
		me.__74b.ggMarkerInstances.push(clonedActiveElement);
		if (me.__74b.firstChild) {
			me.__74b.insertBefore(me.__74b__active,me.__74b.firstChild);
		} else {
			me.__74b.appendChild(me.__74b__active);
		}
		if (me.__74b.firstChild) {
			me.__74b.insertBefore(me.__74b__normal,me.__74b.firstChild);
		} else {
			me.__74b.appendChild(me.__74b__normal);
		}
		for (var i = 0; i < me.__74b.childNodes.length; i++) {
			me.__74b.ggMarkerInstances.push(me.__74b.childNodes[i]);
		}
		me._on.logicBlock_visible();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',100);
				radar.radarElement.setAttributeNS(null,'height',100);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 100 100');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 50;
				arcY1 += 50;
				arcX2 += 50;
				arcY2 += 50;
				var radarPathString = 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#aa55ff');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#aa55ff');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 50;
				var radarYPos = activeMarker.radarYPos - 50;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._off1.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',100);
				radar.radarElement.setAttributeNS(null,'height',100);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 100 100');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 50;
				arcY1 += 50;
				arcX2 += 50;
				arcY2 += 50;
				var radarPathString = 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff557f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff557f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 50;
				var radarYPos = activeMarker.radarYPos - 50;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._videocontainer.logicBlock_visible();
		me._video_1.ggInitMedia('wn2XGg1FwqU');
		me.__.logicBlock_visible();
		me.__60.logicBlock_backgroundcolor();
		me.__16.logicBlock_visible();
		me._image_5.logicBlock_visible();
		me._off0.logicBlock_textcolor();
		me.__12.logicBlock_backgroundcolor();
		me.__13.logicBlock_visible();
		me._image_13.logicBlock_visible();
		me.__40.logicBlock_backgroundcolor();
		me.__30.logicBlock_backgroundcolor();
		me.__5.logicBlock_backgroundcolor();
		me.__3.logicBlock_textcolor();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('타일버튼')) {
				for(var i = 0; i < hotspotTemplates['타일버튼'].length; i++) {
					hotspotTemplates['타일버튼'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('마루버튼')) {
				for(var i = 0; i < hotspotTemplates['마루버튼'].length; i++) {
					hotspotTemplates['마루버튼'][i].ggEvent_activehotspotchanged();
				}
			}
			me.__74amoff.logicBlock_visible();
			me.__74amon.logicBlock_visible();
			me.__onoff_8.logicBlock_visible();
			me.__onoff_24.logicBlock_visible();
			me.__onoff_7.logicBlock_visible();
			me.__onoff_23.logicBlock_visible();
			me.__onoff_10.logicBlock_visible();
			me.__onoff_12.logicBlock_visible();
			me.__onoff_13.logicBlock_visible();
			me.__onoff_6.logicBlock_visible();
			me.__onoff_22.logicBlock_visible();
			me.__onoff_30.logicBlock_visible();
			me.__onoff_5.logicBlock_visible();
			me.__onoff_20.logicBlock_visible();
			me.__onoff_4.logicBlock_visible();
			me.__onoff_0.logicBlock_visible();
			me.__onoff_3.logicBlock_visible();
			me.__onoff_31.logicBlock_visible();
			me.__onoff_2.logicBlock_visible();
			me.__onoff_21.logicBlock_visible();
			me.__onoff_1.logicBlock_visible();
			me.__onoff_.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('타일버튼')) {
				for(var i = 0; i < hotspotTemplates['타일버튼'].length; i++) {
					hotspotTemplates['타일버튼'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('마루버튼')) {
				for(var i = 0; i < hotspotTemplates['마루버튼'].length; i++) {
					hotspotTemplates['마루버튼'][i].ggEvent_changenode();
				}
			}
			me.__76.logicBlock_position();
			me.__76.logicBlock_visible();
			me.__77.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74amoff.logicBlock_visible();
			me.__74amon.logicBlock_visible();
			me._onmobile.logicBlock_visible();
			for (var i=0; i < me._map_1mobile.ggMarkerInstances.length; i++) {
				me._map_1mobile.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_1mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1mobile.ggRadar) me._map_1mobile.ggRadar.update();
			if (me._map_1mobile.ggLastNodeId) {
				var lastActiveMarker = me._map_1mobile.ggSimpleFloorplanMarkerArray[me._map_1mobile.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1mobile.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1mobile.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1mobile.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1mobile.ggChangeMap(mapId);
					}
				}
			}
			me._map_1mobile.ggLastNodeId = id;
			me._map_1mobile.ggRadar.update();
			me._offmobile.logicBlock_visible();
			for (var i=0; i < me._map_2mobile.ggMarkerInstances.length; i++) {
				me._map_2mobile.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_2mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2mobile.ggRadar) me._map_2mobile.ggRadar.update();
			if (me._map_2mobile.ggLastNodeId) {
				var lastActiveMarker = me._map_2mobile.ggSimpleFloorplanMarkerArray[me._map_2mobile.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2mobile.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2mobile.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2mobile.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2mobile.ggChangeMap(mapId);
					}
				}
			}
			me._map_2mobile.ggLastNodeId = id;
			me._map_2mobile.ggRadar.update();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__610.logicBlock_textcolor();
			me.__pc.logicBlock_position();
			me.__pc.logicBlock_textcolor();
			me.__510.logicBlock_backgroundcolor();
			me.__69.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__114.logicBlock_backgroundcolor();
			me.__66.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__onoff_8.logicBlock_visible();
			me.__onoff_8.logicBlock_backgroundcolor();
			me.__off_8.logicBlock_visible();
			me.__on_8.logicBlock_visible();
			me.__onoff_24.logicBlock_visible();
			me.__onoff_24.logicBlock_backgroundcolor();
			me.__off_24.logicBlock_visible();
			me.__on_24.logicBlock_visible();
			me.__onoff_7.logicBlock_visible();
			me.__onoff_7.logicBlock_backgroundcolor();
			me.__off_7.logicBlock_visible();
			me.__on_7.logicBlock_visible();
			me.__onoff_23.logicBlock_visible();
			me.__onoff_23.logicBlock_backgroundcolor();
			me.__off_23.logicBlock_visible();
			me.__on_23.logicBlock_visible();
			me.__onoff_10.logicBlock_visible();
			me.__onoff_10.logicBlock_backgroundcolor();
			me.__off_10.logicBlock_visible();
			me.__on_10.logicBlock_visible();
			me.__onoff_12.logicBlock_visible();
			me.__onoff_12.logicBlock_backgroundcolor();
			me.__off_12.logicBlock_visible();
			me.__on_12.logicBlock_visible();
			me.__onoff_13.logicBlock_visible();
			me.__onoff_13.logicBlock_backgroundcolor();
			me.__off_13.logicBlock_visible();
			me.__on_13.logicBlock_visible();
			me.__onoff_6.logicBlock_visible();
			me.__onoff_6.logicBlock_backgroundcolor();
			me.__off_6.logicBlock_visible();
			me.__on_6.logicBlock_visible();
			me.__onoff_22.logicBlock_visible();
			me.__onoff_22.logicBlock_backgroundcolor();
			me.__off_22.logicBlock_visible();
			me.__on_22.logicBlock_visible();
			me.__onoff_30.logicBlock_visible();
			me.__onoff_30.logicBlock_backgroundcolor();
			me.__off_30.logicBlock_visible();
			me.__on_30.logicBlock_visible();
			me.__onoff_5.logicBlock_visible();
			me.__onoff_5.logicBlock_backgroundcolor();
			me.__off_5.logicBlock_visible();
			me.__on_5.logicBlock_visible();
			me.__onoff_20.logicBlock_visible();
			me.__onoff_20.logicBlock_backgroundcolor();
			me.__off_20.logicBlock_visible();
			me.__on_20.logicBlock_visible();
			me.__onoff_4.logicBlock_visible();
			me.__onoff_4.logicBlock_backgroundcolor();
			me.__off_4.logicBlock_visible();
			me.__on_4.logicBlock_visible();
			me.__onoff_0.logicBlock_visible();
			me.__onoff_0.logicBlock_backgroundcolor();
			me.__off_0.logicBlock_visible();
			me.__on_0.logicBlock_visible();
			me.__onoff_3.logicBlock_visible();
			me.__onoff_3.logicBlock_backgroundcolor();
			me.__off_3.logicBlock_visible();
			me.__on_3.logicBlock_visible();
			me.__onoff_31.logicBlock_visible();
			me.__onoff_31.logicBlock_backgroundcolor();
			me.__off_31.logicBlock_visible();
			me.__on_31.logicBlock_visible();
			me.__onoff_2.logicBlock_visible();
			me.__onoff_2.logicBlock_backgroundcolor();
			me.__off_2.logicBlock_visible();
			me.__on_2.logicBlock_visible();
			me.__onoff_21.logicBlock_visible();
			me.__onoff_21.logicBlock_backgroundcolor();
			me.__off_21.logicBlock_visible();
			me.__on_21.logicBlock_visible();
			me.__onoff_1.logicBlock_visible();
			me.__onoff_1.logicBlock_backgroundcolor();
			me.__off_1.logicBlock_visible();
			me.__on_1.logicBlock_visible();
			me.__onoff_.logicBlock_visible();
			me.__onoff_.logicBlock_backgroundcolor();
			me.__off_.logicBlock_visible();
			me.__on_.logicBlock_visible();
			me.__310.logicBlock_backgroundcolor();
			me.__53.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__410.logicBlock_backgroundcolor();
			me.__50.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__46.logicBlock_backgroundcolor();
			me.__47.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__61.logicBlock_backgroundcolor();
			me.__43.logicBlock_visible();
			me._off7.logicBlock_visible();
			me.__111.logicBlock_backgroundcolor();
			me.__111.logicBlock_textcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__212.logicBlock_textcolor();
			me.__35.logicBlock_backgroundcolor();
			me.__35.logicBlock_textcolor();
			me._on0.logicBlock_visible();
			me._on4.logicBlock_textcolor();
			me.__2on0.logicBlock_textcolor();
			me.__1on0.logicBlock_textcolor();
			me.__3on.logicBlock_textcolor();
			me.__2on.logicBlock_textcolor();
			me.__1on.logicBlock_textcolor();
			me._on3.logicBlock_textcolor();
			me._on2.logicBlock_textcolor();
			me._on1.logicBlock_textcolor();
			me._off2.logicBlock_visible();
			me._off6.logicBlock_textcolor();
			me.__2off0.logicBlock_textcolor();
			me.__1off0.logicBlock_textcolor();
			me.__3off.logicBlock_textcolor();
			me.__2off.logicBlock_textcolor();
			me.__1off.logicBlock_textcolor();
			me._off5.logicBlock_textcolor();
			me._off4.logicBlock_textcolor();
			me._off3.logicBlock_textcolor();
			me.__74boff6__normalInst.ggEvent_changenode();
			me.__74boff6__activeInst.ggEvent_changenode();
			me.__74boff5__normalInst.ggEvent_changenode();
			me.__74boff5__activeInst.ggEvent_changenode();
			me.__74boff24__normalInst.ggEvent_changenode();
			me.__74boff24__activeInst.ggEvent_changenode();
			me.__74boff4__normalInst.ggEvent_changenode();
			me.__74boff4__activeInst.ggEvent_changenode();
			me.__74boff23__normalInst.ggEvent_changenode();
			me.__74boff23__activeInst.ggEvent_changenode();
			me.__74boff10__normalInst.ggEvent_changenode();
			me.__74boff10__activeInst.ggEvent_changenode();
			me.__74boff22__normalInst.ggEvent_changenode();
			me.__74boff22__activeInst.ggEvent_changenode();
			me.__74boff21__normalInst.ggEvent_changenode();
			me.__74boff21__activeInst.ggEvent_changenode();
			me.__74boff31__normalInst.ggEvent_changenode();
			me.__74boff31__activeInst.ggEvent_changenode();
			me.__74boff30__normalInst.ggEvent_changenode();
			me.__74boff30__activeInst.ggEvent_changenode();
			me.__74boff3__normalInst.ggEvent_changenode();
			me.__74boff3__activeInst.ggEvent_changenode();
			me.__74boff20__normalInst.ggEvent_changenode();
			me.__74boff20__activeInst.ggEvent_changenode();
			me.__74boff1__normalInst.ggEvent_changenode();
			me.__74boff1__activeInst.ggEvent_changenode();
			me.__74boff12__normalInst.ggEvent_changenode();
			me.__74boff12__activeInst.ggEvent_changenode();
			me.__74boff13__normalInst.ggEvent_changenode();
			me.__74boff13__activeInst.ggEvent_changenode();
			me.__74boff0__normalInst.ggEvent_changenode();
			me.__74boff0__activeInst.ggEvent_changenode();
			me.__74boff2__normalInst.ggEvent_changenode();
			me.__74boff2__activeInst.ggEvent_changenode();
			me.__74boff__normalInst.ggEvent_changenode();
			me.__74boff__activeInst.ggEvent_changenode();
			me.__74b6__normalInst.ggEvent_changenode();
			me.__74b6__activeInst.ggEvent_changenode();
			me.__74b5__normalInst.ggEvent_changenode();
			me.__74b5__activeInst.ggEvent_changenode();
			me.__74b24__normalInst.ggEvent_changenode();
			me.__74b24__activeInst.ggEvent_changenode();
			me.__74b4__normalInst.ggEvent_changenode();
			me.__74b4__activeInst.ggEvent_changenode();
			me.__74b23__normalInst.ggEvent_changenode();
			me.__74b23__activeInst.ggEvent_changenode();
			me.__74b10__normalInst.ggEvent_changenode();
			me.__74b10__activeInst.ggEvent_changenode();
			me.__74b22__normalInst.ggEvent_changenode();
			me.__74b22__activeInst.ggEvent_changenode();
			me.__74b21__normalInst.ggEvent_changenode();
			me.__74b21__activeInst.ggEvent_changenode();
			me.__74b31__normalInst.ggEvent_changenode();
			me.__74b31__activeInst.ggEvent_changenode();
			me.__74b30__normalInst.ggEvent_changenode();
			me.__74b30__activeInst.ggEvent_changenode();
			me.__74b3__normalInst.ggEvent_changenode();
			me.__74b3__activeInst.ggEvent_changenode();
			me.__74b20__normalInst.ggEvent_changenode();
			me.__74b20__activeInst.ggEvent_changenode();
			me.__74b1__normalInst.ggEvent_changenode();
			me.__74b1__activeInst.ggEvent_changenode();
			me.__74b12__normalInst.ggEvent_changenode();
			me.__74b12__activeInst.ggEvent_changenode();
			me.__74b13__normalInst.ggEvent_changenode();
			me.__74b13__activeInst.ggEvent_changenode();
			me.__74b0__normalInst.ggEvent_changenode();
			me.__74b0__activeInst.ggEvent_changenode();
			me.__74b2__normalInst.ggEvent_changenode();
			me.__74b2__activeInst.ggEvent_changenode();
			me.__74b__normalInst.ggEvent_changenode();
			me.__74b__activeInst.ggEvent_changenode();
			me._on.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._off1.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me.__60.logicBlock_backgroundcolor();
			me.__16.logicBlock_visible();
			me._image_5.logicBlock_visible();
			me._off0.logicBlock_textcolor();
			me.__12.logicBlock_backgroundcolor();
			me.__13.logicBlock_visible();
			me._image_13.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__30.logicBlock_backgroundcolor();
			me.__5.logicBlock_backgroundcolor();
			me.__3.logicBlock_textcolor();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('타일버튼')) {
				for(var i = 0; i < hotspotTemplates['타일버튼'].length; i++) {
					hotspotTemplates['타일버튼'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('마루버튼')) {
				for(var i = 0; i < hotspotTemplates['마루버튼'].length; i++) {
					hotspotTemplates['마루버튼'][i].ggEvent_configloaded();
				}
			}
			me.__76.logicBlock_position();
			me.__76.logicBlock_visible();
			me.__74.logicBlock_visible();
			me.__74amoff.logicBlock_visible();
			me.__74amon.logicBlock_visible();
			for (var i=0; i < me._map_1mobile.ggMarkerInstances.length; i++) {
				me._map_1mobile.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1mobile.ggClearMap();
			me._map_1mobile.ggInitMap(false);
			me._map_1mobile.ggInitMapMarkers(true);
			for (var i=0; i < me._map_2mobile.ggMarkerInstances.length; i++) {
				me._map_2mobile.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_2mobile.ggClearMap();
			me._map_2mobile.ggInitMap(false);
			me._map_2mobile.ggInitMapMarkers(true);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__73.logicBlock_position();
			me.__73.logicBlock_size();
			me.__610.logicBlock_position();
			me.__610.logicBlock_size();
			me.__610.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
			me.__39.logicBlock_visible();
			me.__510.logicBlock_backgroundcolor();
			me.__69.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__114.logicBlock_backgroundcolor();
			me.__66.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__onoff_8.logicBlock_visible();
			me.__onoff_8.logicBlock_backgroundcolor();
			me.__onoff_24.logicBlock_visible();
			me.__onoff_24.logicBlock_backgroundcolor();
			me.__onoff_7.logicBlock_visible();
			me.__onoff_7.logicBlock_backgroundcolor();
			me.__onoff_23.logicBlock_visible();
			me.__onoff_23.logicBlock_backgroundcolor();
			me.__onoff_10.logicBlock_visible();
			me.__onoff_10.logicBlock_backgroundcolor();
			me.__onoff_12.logicBlock_visible();
			me.__onoff_12.logicBlock_backgroundcolor();
			me.__onoff_13.logicBlock_visible();
			me.__onoff_13.logicBlock_backgroundcolor();
			me.__onoff_6.logicBlock_visible();
			me.__onoff_6.logicBlock_backgroundcolor();
			me.__onoff_22.logicBlock_visible();
			me.__onoff_22.logicBlock_backgroundcolor();
			me.__onoff_30.logicBlock_visible();
			me.__onoff_30.logicBlock_backgroundcolor();
			me.__onoff_5.logicBlock_visible();
			me.__onoff_5.logicBlock_backgroundcolor();
			me.__onoff_20.logicBlock_visible();
			me.__onoff_20.logicBlock_backgroundcolor();
			me.__onoff_4.logicBlock_visible();
			me.__onoff_4.logicBlock_backgroundcolor();
			me.__onoff_0.logicBlock_visible();
			me.__onoff_0.logicBlock_backgroundcolor();
			me.__onoff_3.logicBlock_visible();
			me.__onoff_3.logicBlock_backgroundcolor();
			me.__onoff_31.logicBlock_visible();
			me.__onoff_31.logicBlock_backgroundcolor();
			me.__onoff_2.logicBlock_visible();
			me.__onoff_2.logicBlock_backgroundcolor();
			me.__onoff_21.logicBlock_visible();
			me.__onoff_21.logicBlock_backgroundcolor();
			me.__onoff_1.logicBlock_visible();
			me.__onoff_1.logicBlock_backgroundcolor();
			me.__onoff_.logicBlock_visible();
			me.__onoff_.logicBlock_backgroundcolor();
			me.__310.logicBlock_backgroundcolor();
			me.__53.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__410.logicBlock_backgroundcolor();
			me.__50.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__46.logicBlock_backgroundcolor();
			me.__47.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__61.logicBlock_backgroundcolor();
			me.__43.logicBlock_visible();
			me._off7.logicBlock_visible();
			me.__27.logicBlock_visible();
			me.__111.logicBlock_backgroundcolor();
			me.__111.logicBlock_textcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__212.logicBlock_textcolor();
			me.__35.logicBlock_backgroundcolor();
			me.__35.logicBlock_textcolor();
			me.__25.logicBlock_visible();
			me._on4.logicBlock_textcolor();
			me.__2on0.logicBlock_textcolor();
			me.__1on0.logicBlock_textcolor();
			me.__3on.logicBlock_textcolor();
			me.__2on.logicBlock_textcolor();
			me.__1on.logicBlock_textcolor();
			me._on3.logicBlock_textcolor();
			me._on2.logicBlock_textcolor();
			me._on1.logicBlock_textcolor();
			me._off6.logicBlock_textcolor();
			me.__2off0.logicBlock_textcolor();
			me.__1off0.logicBlock_textcolor();
			me.__3off.logicBlock_textcolor();
			me.__2off.logicBlock_textcolor();
			me.__1off.logicBlock_textcolor();
			me._off5.logicBlock_textcolor();
			me._off4.logicBlock_textcolor();
			me._off3.logicBlock_textcolor();
			me.__18.logicBlock_visible();
			me.__74boff6__normalInst.ggEvent_configloaded();
			me.__74boff6__activeInst.ggEvent_configloaded();
			me.__74boff5__normalInst.ggEvent_configloaded();
			me.__74boff5__activeInst.ggEvent_configloaded();
			me.__74boff24__normalInst.ggEvent_configloaded();
			me.__74boff24__activeInst.ggEvent_configloaded();
			me.__74boff4__normalInst.ggEvent_configloaded();
			me.__74boff4__activeInst.ggEvent_configloaded();
			me.__74boff23__normalInst.ggEvent_configloaded();
			me.__74boff23__activeInst.ggEvent_configloaded();
			me.__74boff10__normalInst.ggEvent_configloaded();
			me.__74boff10__activeInst.ggEvent_configloaded();
			me.__74boff22__normalInst.ggEvent_configloaded();
			me.__74boff22__activeInst.ggEvent_configloaded();
			me.__74boff21__normalInst.ggEvent_configloaded();
			me.__74boff21__activeInst.ggEvent_configloaded();
			me.__74boff31__normalInst.ggEvent_configloaded();
			me.__74boff31__activeInst.ggEvent_configloaded();
			me.__74boff30__normalInst.ggEvent_configloaded();
			me.__74boff30__activeInst.ggEvent_configloaded();
			me.__74boff3__normalInst.ggEvent_configloaded();
			me.__74boff3__activeInst.ggEvent_configloaded();
			me.__74boff20__normalInst.ggEvent_configloaded();
			me.__74boff20__activeInst.ggEvent_configloaded();
			me.__74boff1__normalInst.ggEvent_configloaded();
			me.__74boff1__activeInst.ggEvent_configloaded();
			me.__74boff12__normalInst.ggEvent_configloaded();
			me.__74boff12__activeInst.ggEvent_configloaded();
			me.__74boff13__normalInst.ggEvent_configloaded();
			me.__74boff13__activeInst.ggEvent_configloaded();
			me.__74boff0__normalInst.ggEvent_configloaded();
			me.__74boff0__activeInst.ggEvent_configloaded();
			me.__74boff2__normalInst.ggEvent_configloaded();
			me.__74boff2__activeInst.ggEvent_configloaded();
			me.__74boff__normalInst.ggEvent_configloaded();
			me.__74boff__activeInst.ggEvent_configloaded();
			me.__74b6__normalInst.ggEvent_configloaded();
			me.__74b6__activeInst.ggEvent_configloaded();
			me.__74b5__normalInst.ggEvent_configloaded();
			me.__74b5__activeInst.ggEvent_configloaded();
			me.__74b24__normalInst.ggEvent_configloaded();
			me.__74b24__activeInst.ggEvent_configloaded();
			me.__74b4__normalInst.ggEvent_configloaded();
			me.__74b4__activeInst.ggEvent_configloaded();
			me.__74b23__normalInst.ggEvent_configloaded();
			me.__74b23__activeInst.ggEvent_configloaded();
			me.__74b10__normalInst.ggEvent_configloaded();
			me.__74b10__activeInst.ggEvent_configloaded();
			me.__74b22__normalInst.ggEvent_configloaded();
			me.__74b22__activeInst.ggEvent_configloaded();
			me.__74b21__normalInst.ggEvent_configloaded();
			me.__74b21__activeInst.ggEvent_configloaded();
			me.__74b31__normalInst.ggEvent_configloaded();
			me.__74b31__activeInst.ggEvent_configloaded();
			me.__74b30__normalInst.ggEvent_configloaded();
			me.__74b30__activeInst.ggEvent_configloaded();
			me.__74b3__normalInst.ggEvent_configloaded();
			me.__74b3__activeInst.ggEvent_configloaded();
			me.__74b20__normalInst.ggEvent_configloaded();
			me.__74b20__activeInst.ggEvent_configloaded();
			me.__74b1__normalInst.ggEvent_configloaded();
			me.__74b1__activeInst.ggEvent_configloaded();
			me.__74b12__normalInst.ggEvent_configloaded();
			me.__74b12__activeInst.ggEvent_configloaded();
			me.__74b13__normalInst.ggEvent_configloaded();
			me.__74b13__activeInst.ggEvent_configloaded();
			me.__74b0__normalInst.ggEvent_configloaded();
			me.__74b0__activeInst.ggEvent_configloaded();
			me.__74b2__normalInst.ggEvent_configloaded();
			me.__74b2__activeInst.ggEvent_configloaded();
			me.__74b__normalInst.ggEvent_configloaded();
			me.__74b__activeInst.ggEvent_configloaded();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_2.ggClearMap();
			me._map_2.ggInitMap(false);
			me._map_2.ggInitMapMarkers(true);
			me.__.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me.__16.logicBlock_visible();
			me._image_5.logicBlock_visible();
			me._off0.logicBlock_textcolor();
			me.__12.logicBlock_backgroundcolor();
			me.__13.logicBlock_visible();
			me._image_13.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__30.logicBlock_backgroundcolor();
			me.__5.logicBlock_backgroundcolor();
			me.__3.logicBlock_textcolor();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('hsproxyclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('타일버튼')) {
				for(var i = 0; i < hotspotTemplates['타일버튼'].length; i++) {
					hotspotTemplates['타일버튼'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('마루버튼')) {
				for(var i = 0; i < hotspotTemplates['마루버튼'].length; i++) {
					hotspotTemplates['마루버튼'][i].ggEvent_hsproxyclick();
				}
			}
		});
		player.addListener('hsproxydblclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('타일버튼')) {
				for(var i = 0; i < hotspotTemplates['타일버튼'].length; i++) {
					hotspotTemplates['타일버튼'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('마루버튼')) {
				for(var i = 0; i < hotspotTemplates['마루버튼'].length; i++) {
					hotspotTemplates['마루버튼'][i].ggEvent_hsproxydblclick();
				}
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (hotspotTemplates.hasOwnProperty('타일버튼')) {
				for(var i = 0; i < hotspotTemplates['타일버튼'].length; i++) {
					hotspotTemplates['타일버튼'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('마루버튼')) {
				for(var i = 0; i < hotspotTemplates['마루버튼'].length; i++) {
					hotspotTemplates['마루버튼'][i].ggEvent_hsproxyout();
				}
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (hotspotTemplates.hasOwnProperty('타일버튼')) {
				for(var i = 0; i < hotspotTemplates['타일버튼'].length; i++) {
					hotspotTemplates['타일버튼'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('마루버튼')) {
				for(var i = 0; i < hotspotTemplates['마루버튼'].length; i++) {
					hotspotTemplates['마루버튼'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_1mobile.ggRadar.update();
			me._map_2mobile.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__76.logicBlock_visible();
			me.__74.logicBlock_visible();
			me.__73.logicBlock_size();
			me.__610.logicBlock_position();
			me.__610.logicBlock_size();
			me.__610.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
			me.__39.logicBlock_position();
			me.__39.logicBlock_size();
			me.__39.logicBlock_visible();
			me.__510.logicBlock_size();
			me.__65.logicBlock_position();
			me.__114.logicBlock_size();
			me.__55.logicBlock_position();
			me.__onoff_8.logicBlock_size();
			me.__onoff_8.logicBlock_visible();
			me.__onoff_24.logicBlock_size();
			me.__onoff_24.logicBlock_visible();
			me.__onoff_7.logicBlock_size();
			me.__onoff_7.logicBlock_visible();
			me.__onoff_23.logicBlock_size();
			me.__onoff_23.logicBlock_visible();
			me.__onoff_10.logicBlock_size();
			me.__onoff_10.logicBlock_visible();
			me.__onoff_12.logicBlock_size();
			me.__onoff_12.logicBlock_visible();
			me.__onoff_13.logicBlock_size();
			me.__onoff_13.logicBlock_visible();
			me.__onoff_6.logicBlock_size();
			me.__onoff_6.logicBlock_visible();
			me.__onoff_22.logicBlock_size();
			me.__onoff_22.logicBlock_visible();
			me.__onoff_30.logicBlock_size();
			me.__onoff_30.logicBlock_visible();
			me.__onoff_5.logicBlock_size();
			me.__onoff_5.logicBlock_visible();
			me.__onoff_20.logicBlock_size();
			me.__onoff_20.logicBlock_visible();
			me.__onoff_4.logicBlock_size();
			me.__onoff_4.logicBlock_visible();
			me.__onoff_0.logicBlock_size();
			me.__onoff_0.logicBlock_visible();
			me.__onoff_3.logicBlock_size();
			me.__onoff_3.logicBlock_visible();
			me.__onoff_31.logicBlock_size();
			me.__onoff_31.logicBlock_visible();
			me.__onoff_2.logicBlock_size();
			me.__onoff_2.logicBlock_visible();
			me.__onoff_21.logicBlock_size();
			me.__onoff_1.logicBlock_size();
			me.__onoff_.logicBlock_size();
			me.__onoff_.logicBlock_visible();
			me.__52.logicBlock_position();
			me.__310.logicBlock_size();
			me.__49.logicBlock_position();
			me.__410.logicBlock_size();
			me.__45.logicBlock_position();
			me.__46.logicBlock_size();
			me.__42.logicBlock_position();
			me.__42.logicBlock_size();
			me.__61.logicBlock_size();
			me.__27.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__18.logicBlock_visible();
			me._videocontainer.logicBlock_visible();
			me.__.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg', function(event) {
			me.__114.logicBlock_backgroundcolor();
			me.__66.logicBlock_visible();
			me._image_8.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_1', function(event) {
			me.__onoff_8.logicBlock_backgroundcolor();
			me.__onoff_24.logicBlock_backgroundcolor();
			me.__onoff_7.logicBlock_backgroundcolor();
			me.__onoff_23.logicBlock_backgroundcolor();
			me.__onoff_10.logicBlock_backgroundcolor();
			me.__onoff_12.logicBlock_backgroundcolor();
			me.__onoff_13.logicBlock_backgroundcolor();
			me.__onoff_6.logicBlock_backgroundcolor();
			me.__onoff_22.logicBlock_backgroundcolor();
			me.__onoff_30.logicBlock_backgroundcolor();
			me.__onoff_5.logicBlock_backgroundcolor();
			me.__onoff_20.logicBlock_backgroundcolor();
			me.__onoff_4.logicBlock_backgroundcolor();
			me.__onoff_0.logicBlock_backgroundcolor();
			me.__onoff_3.logicBlock_backgroundcolor();
			me.__onoff_31.logicBlock_backgroundcolor();
			me.__onoff_2.logicBlock_backgroundcolor();
			me.__onoff_21.logicBlock_backgroundcolor();
			me.__onoff_1.logicBlock_backgroundcolor();
			me.__onoff_.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_buttonbg_2', function(event) {
			me.__310.logicBlock_backgroundcolor();
			me.__53.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__30.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_buttonbg_3', function(event) {
			me.__410.logicBlock_backgroundcolor();
			me.__50.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__12.logicBlock_backgroundcolor();
			me.__13.logicBlock_visible();
			me._image_13.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_4', function(event) {
			me.__510.logicBlock_backgroundcolor();
			me.__69.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__5.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_buttonbg_5', function(event) {
			me.__46.logicBlock_backgroundcolor();
			me.__47.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__3.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_buttonbg_6', function(event) {
			me.__61.logicBlock_backgroundcolor();
			me.__43.logicBlock_visible();
			me._off7.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me.__16.logicBlock_visible();
			me._image_5.logicBlock_visible();
			me._off0.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_mobilemenu', function(event) {
			me.__76.logicBlock_position();
		});
		player.addListener('varchanged_vis_roombutton', function(event) {
			me._on1.logicBlock_textcolor();
			me._off3.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_1', function(event) {
			me._on2.logicBlock_textcolor();
			me._off4.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_2', function(event) {
			me._on3.logicBlock_textcolor();
			me._off5.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_3', function(event) {
			me.__1on.logicBlock_textcolor();
			me.__1off.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_4', function(event) {
			me.__2on.logicBlock_textcolor();
			me.__2off.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_5', function(event) {
			me.__3on.logicBlock_textcolor();
			me.__3off.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_6', function(event) {
			me.__1on0.logicBlock_textcolor();
			me.__1off0.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_7', function(event) {
			me.__2on0.logicBlock_textcolor();
			me.__2off0.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_roombutton_8', function(event) {
			me._on4.logicBlock_textcolor();
			me._off6.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_type1', function(event) {
			me.__111.logicBlock_backgroundcolor();
			me.__111.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_type2', function(event) {
			me.__212.logicBlock_backgroundcolor();
			me.__212.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_type3', function(event) {
			me.__35.logicBlock_backgroundcolor();
			me.__35.logicBlock_textcolor();
		});
	};
	function SkinHotspotClass__71(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__71=document.createElement('div');
		el.ggId="\ub9c8\ub8e8\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__71.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_71']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_71']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_71']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_71']=true;
			}
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me.__customimage=document.createElement('div');
		els=me.__customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me.__customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me.__customimage.ggSubElement.setAttribute('alt', player._(me.__customimage.ggAltText));
			me.__customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me.__customimage.ggText_untranslated = img;
			me.__customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me.__customimage.ggSubElement.style.width = '0px';
			me.__customimage.ggSubElement.style.height = '0px';
			me.__customimage.ggSubElement.src='';
			me.__customimage.ggSubElement.src=me.__customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me.__customimage.ggText != player._(me.__customimage.ggText_untranslated)) {
				me.__customimage.ggText = player._(me.__customimage.ggText_untranslated);
				me.__customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="\ub9c8\ub8e8\ubc84\ud2bc_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__customimage.style.transition='';
				if (me.__customimage.ggCurrentLogicStateVisible == 0) {
					me.__customimage.style.visibility="hidden";
					me.__customimage.ggSubElement.src='';
					me.__customimage.ggVisible=false;
				}
				else {
					me.__customimage.style.visibility=(Number(me.__customimage.style.opacity)>0||!me.__customimage.style.opacity)?'inherit':'hidden';
					me.__customimage.ggSubElement.src=me.__customimage.ggText;
					me.__customimage.ggVisible=true;
				}
			}
		}
		me.__customimage.logicBlock_visible();
		me.__customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me.__customimage.clientWidth;
			var parentHeight = me.__customimage.clientHeight;
			var img = me.__customimage__img;
			var aspectRatioDiv = me.__customimage.clientWidth / me.__customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me.__customimage.ggScrollbars || currentWidth < me.__customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me.__customimage.scrollLeft=currentWidth / 2 - me.__customimage.clientWidth / 2;
			}
			if (!me.__customimage.ggScrollbars || currentHeight < me.__customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me.__customimage.scrollTop=currentHeight / 2 - me.__customimage.clientHeight / 2;
			}
		}
		me.__71.appendChild(me.__customimage);
		if ((hotspot) && (hotspot.customimage)) {
			me.__customimage.style.width=hotspot.customimagewidth + 'px';
			me.__customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me.__customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me.__customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me.__customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me.__customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me.__customimage.logicBlock_visible();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='마루버튼') {
					me.__71.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='마루버튼') {
					me.__71.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='마루버튼') {
					me.__71.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='마루버튼') {
					me.__71.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__71.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__71;
	};
	function SkinHotspotClass__72(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__72=document.createElement('div');
		el.ggId="\ud0c0\uc77c\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__72.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__72.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__72.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__72.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_72']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__72.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_72']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__72.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_72']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_72']=true;
			}
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me.__customimage0=document.createElement('div');
		els=me.__customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me.__customimage0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me.__customimage0.ggSubElement.setAttribute('alt', player._(me.__customimage0.ggAltText));
			me.__customimage0.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me.__customimage0.ggText_untranslated = img;
			me.__customimage0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me.__customimage0.ggSubElement.style.width = '0px';
			me.__customimage0.ggSubElement.style.height = '0px';
			me.__customimage0.ggSubElement.src='';
			me.__customimage0.ggSubElement.src=me.__customimage0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me.__customimage0.ggText != player._(me.__customimage0.ggText_untranslated)) {
				me.__customimage0.ggText = player._(me.__customimage0.ggText_untranslated);
				me.__customimage0.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="\ud0c0\uc77c\ubc84\ud2bc_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__customimage0.style.transition='';
				if (me.__customimage0.ggCurrentLogicStateVisible == 0) {
					me.__customimage0.style.visibility="hidden";
					me.__customimage0.ggSubElement.src='';
					me.__customimage0.ggVisible=false;
				}
				else {
					me.__customimage0.style.visibility=(Number(me.__customimage0.style.opacity)>0||!me.__customimage0.style.opacity)?'inherit':'hidden';
					me.__customimage0.ggSubElement.src=me.__customimage0.ggText;
					me.__customimage0.ggVisible=true;
				}
			}
		}
		me.__customimage0.logicBlock_visible();
		me.__customimage0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me.__customimage0.clientWidth;
			var parentHeight = me.__customimage0.clientHeight;
			var img = me.__customimage0__img;
			var aspectRatioDiv = me.__customimage0.clientWidth / me.__customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me.__customimage0.ggScrollbars || currentWidth < me.__customimage0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me.__customimage0.scrollLeft=currentWidth / 2 - me.__customimage0.clientWidth / 2;
			}
			if (!me.__customimage0.ggScrollbars || currentHeight < me.__customimage0.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me.__customimage0.scrollTop=currentHeight / 2 - me.__customimage0.clientHeight / 2;
			}
		}
		me.__72.appendChild(me.__customimage0);
		if ((hotspot) && (hotspot.customimage)) {
			me.__customimage0.style.width=hotspot.customimagewidth + 'px';
			me.__customimage0.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me.__customimage0.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me.__customimage0.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__customimage0.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me.__customimage0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me.__customimage0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me.__customimage0.logicBlock_visible();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='타일버튼') {
					me.__72.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='타일버튼') {
					me.__72.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='타일버튼') {
					me.__72.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='타일버튼') {
					me.__72.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__72.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__72;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-128;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 128px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='21px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='21px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='25px';
					me._map_pin_active.style.height='31px';
					me._map_pin_active.style.left = 'calc(50% - (25px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggCurrentLogicStateSize = -1;
		me._map_pin_active.ggCurrentLogicStateScaling = -1;
		me._map_pin_active.ggCurrentLogicStateAlpha = -1;
		me._map_pin_active.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_pin_active']) {
				me.elementMouseOver['map_pin_active']=true;
			}
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='7px';
					me._map_pin_normal.style.height='17px';
					me._map_pin_normal.style.left = 'calc(50% - (7px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='7px';
					me._map_pin_normal.style.height='17px';
					me._map_pin_normal.style.left = 'calc(50% - (7px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggCurrentLogicStateSize = -1;
		me._map_pin_normal.ggCurrentLogicStateScaling = -1;
		me._map_pin_normal.ggCurrentLogicStateAlpha = -1;
		me._map_pin_normal.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_pin_normal']) {
				me.elementMouseOver['map_pin_normal']=true;
			}
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	player.addListener('timer', function() { me._map_pin_active.ggUpdateConditionTimer();
me._map_pin_normal.ggUpdateConditionTimer(); });
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node']=true;
			}
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else if (me._lottie_2.ggCurrentLogicStatePosition == 1) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else {
					me._lottie_2.style.left='-30px';
					me._lottie_2.style.top='-20px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='70px';
					me._lottie_2.style.height='70px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__81.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		player.addListener('changenode', function() {
			me.__81.ggUpdateText();
		});
		el.appendChild(els);
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__81.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__81.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__81.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__81.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__81.ggCurrentLogicStatePosition == 0) {
					me.__81.style.left = 'calc(50% - (50px / 2))';
					me.__81.style.bottom='0px';
				}
				else {
					me.__81.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__81.style.bottom='-28px';
				}
			}
		}
		me.__81.logicBlock_position();
		me.__81.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__81.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__81.ggCurrentLogicStateSize = newLogicStateSize;
				me.__81.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__81.ggCurrentLogicStateSize == 0) {
					me.__81.style.width='95px';
					me.__81.style.height='25px';
					me.__81.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__81);
				}
				else if (me.__81.ggCurrentLogicStateSize == 1) {
					me.__81.style.width='60px';
					me.__81.style.height='25px';
					me.__81.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__81);
				}
				else if (me.__81.ggCurrentLogicStateSize == 2) {
					me.__81.style.width='60px';
					me.__81.style.height='25px';
					me.__81.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__81);
				}
				else {
					me.__81.style.width='50px';
					me.__81.style.height='25px';
					me.__81.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__81);
				}
			}
		}
		me.__81.logicBlock_size();
		me.__81.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__81.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__81.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__81.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__81.ggCurrentLogicStateVisible == 0) {
					me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
					me.__81.ggVisible=true;
				}
				else if (me.__81.ggCurrentLogicStateVisible == 1) {
					me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
					me.__81.ggVisible=true;
				}
				else {
					me.__81.style.visibility="hidden";
					me.__81.ggVisible=false;
				}
			}
		}
		me.__81.logicBlock_visible();
		me.__81.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__81.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__81.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__81.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__81.ggCurrentLogicStateBackgroundColor == 0) {
					me.__81.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__81.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__81.logicBlock_backgroundcolor();
		me.__81.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__81.ggCurrentLogicStateText != newLogicStateText) {
				me.__81.ggCurrentLogicStateText = newLogicStateText;
				me.__81.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__81.ggCurrentLogicStateText == 0) {
					if (me.__81.ggUpdateText) {
					me.__81.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__81.ggUpdateText();
					} else {
						if (me.__81.ggUpdatePosition) me.__81.ggUpdatePosition();
					}
				}
				else {
					if (me.__81.ggUpdateText) {
					me.__81.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__81.ggUpdateText();
					} else {
						if (me.__81.ggUpdatePosition) me.__81.ggUpdatePosition();
					}
				}
			}
		}
		me.__81.logicBlock_text();
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__80.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__80.ggUpdateText();
		player.addListener('changenode', function() {
			me.__80.ggUpdateText();
		});
		el.appendChild(els);
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__80.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__80.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__80.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__80.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__80.ggCurrentLogicStatePosition == 0) {
					me.__80.style.left = 'calc(50% - (60px / 2))';
					me.__80.style.bottom='0px';
				}
				else if (me.__80.ggCurrentLogicStatePosition == 1) {
					me.__80.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__80.style.bottom='40px';
				}
				else {
					me.__80.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__80.style.bottom='-40px';
				}
			}
		}
		me.__80.logicBlock_position();
		me.__80.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__80.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__80.ggCurrentLogicStateSize = newLogicStateSize;
				me.__80.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__80.ggCurrentLogicStateSize == 0) {
					me.__80.style.width='50px';
					me.__80.style.height='25px';
					me.__80.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__80);
				}
				else if (me.__80.ggCurrentLogicStateSize == 1) {
					me.__80.style.width='50px';
					me.__80.style.height='25px';
					me.__80.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__80);
				}
				else if (me.__80.ggCurrentLogicStateSize == 2) {
					me.__80.style.width='95px';
					me.__80.style.height='25px';
					me.__80.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__80);
				}
				else {
					me.__80.style.width='60px';
					me.__80.style.height='30px';
					me.__80.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__80);
				}
			}
		}
		me.__80.logicBlock_size();
		me.__80.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__80.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__80.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__80.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__80.ggCurrentLogicStateVisible == 0) {
					me.__80.style.visibility="hidden";
					me.__80.ggVisible=false;
				}
				else if (me.__80.ggCurrentLogicStateVisible == 1) {
					me.__80.style.visibility="hidden";
					me.__80.ggVisible=false;
				}
				else {
					me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
					me.__80.ggVisible=true;
				}
			}
		}
		me.__80.logicBlock_visible();
		me.__80.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__80.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__80.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__80.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__80.ggCurrentLogicStateBackgroundColor == 0) {
					me.__80.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__80.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__80.logicBlock_backgroundcolor();
		me.__80.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__80.ggCurrentLogicStateText != newLogicStateText) {
				me.__80.ggCurrentLogicStateText = newLogicStateText;
				me.__80.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__80.ggCurrentLogicStateText == 0) {
					if (me.__80.ggUpdateText) {
					me.__80.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__80.ggUpdateText();
					} else {
						if (me.__80.ggUpdatePosition) me.__80.ggUpdatePosition();
					}
				}
				else {
					if (me.__80.ggUpdateText) {
					me.__80.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__80.ggUpdateText();
					} else {
						if (me.__80.ggUpdatePosition) me.__80.ggUpdatePosition();
					}
				}
			}
		}
		me.__80.logicBlock_text();
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__80);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__81.logicBlock_position();
		me.__81.logicBlock_size();
		me.__81.logicBlock_visible();
		me.__81.logicBlock_backgroundcolor();
		me.__81.logicBlock_text();
		me.__80.logicBlock_position();
		me.__80.logicBlock_size();
		me.__80.logicBlock_visible();
		me.__80.logicBlock_backgroundcolor();
		me.__80.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__81.logicBlock_size();
				me.__81.logicBlock_backgroundcolor();
				me.__81.logicBlock_text();
				me.__80.logicBlock_size();
				me.__80.logicBlock_backgroundcolor();
				me.__80.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__81.logicBlock_size();
				me.__81.logicBlock_backgroundcolor();
				me.__81.logicBlock_text();
				me.__80.logicBlock_size();
				me.__80.logicBlock_backgroundcolor();
				me.__80.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__81.logicBlock_size();
				me.__81.logicBlock_visible();
				me.__81.logicBlock_backgroundcolor();
				me.__81.logicBlock_text();
				me.__80.logicBlock_position();
				me.__80.logicBlock_size();
				me.__80.logicBlock_visible();
				me.__80.logicBlock_backgroundcolor();
				me.__80.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__81.logicBlock_position();
				me.__80.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__81.logicBlock_size();
				me.__81.logicBlock_visible();
				me.__80.logicBlock_size();
				me.__80.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='타일버튼') {
				hotspot.skinid = '타일버튼';
				hsinst = new SkinHotspotClass__72(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '마루버튼';
				hsinst = new SkinHotspotClass__71(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__510.ggUpdateConditionTimer();
		me.__114.ggUpdateConditionTimer();
		me.__onoff_8.ggUpdateConditionTimer();
		me.__onoff_24.ggUpdateConditionTimer();
		me.__onoff_7.ggUpdateConditionTimer();
		me.__onoff_23.ggUpdateConditionTimer();
		me.__onoff_10.ggUpdateConditionTimer();
		me.__onoff_12.ggUpdateConditionTimer();
		me.__onoff_13.ggUpdateConditionTimer();
		me.__onoff_6.ggUpdateConditionTimer();
		me.__onoff_22.ggUpdateConditionTimer();
		me.__onoff_30.ggUpdateConditionTimer();
		me.__onoff_5.ggUpdateConditionTimer();
		me.__onoff_20.ggUpdateConditionTimer();
		me.__onoff_4.ggUpdateConditionTimer();
		me.__onoff_0.ggUpdateConditionTimer();
		me.__onoff_3.ggUpdateConditionTimer();
		me.__onoff_31.ggUpdateConditionTimer();
		me.__onoff_2.ggUpdateConditionTimer();
		me.__onoff_21.ggUpdateConditionTimer();
		me.__onoff_1.ggUpdateConditionTimer();
		me.__onoff_.ggUpdateConditionTimer();
		me.__310.ggUpdateConditionTimer();
		me.__410.ggUpdateConditionTimer();
		me.__46.ggUpdateConditionTimer();
		me.__61.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .menu-bar { background-image: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 / 10%); }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};