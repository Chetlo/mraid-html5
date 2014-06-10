function Controller(t){this.adContainerNode=t,this.wrapperNode=t.childNodes[1],this.firstPartNode=this.wrapperNode.childNodes[1],this.secondPartNode=this.wrapperNode.childNodes[3],this.placementType="fixed"==this.firstPartNode.style.position?"interstital":"inline",this.initialWidth=this.adContainerNode.style.width,this.initialHeight=this.adContainerNode.style.height,this.closeIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADb0lEQVR42u1XS0tbQRROqhQaUhRMTOKyG9OKWzUg5EG1bsRu/AXddiNtfSxqTLt1HQvd9hdkI2nUVLSQRekuxHcUQRBSXYXePCZ2vuGe25N4FZIbaBc5MMxl7syZ757znce12TrSkY78e7Hr84NQKNRNi4eHh8/K5fK7SqWyIscyG7HT09MI7Zudne3C2XaDMhQWCoXn1Wr1mxCicnOPSGCZy1+XL8x0WBL9CyFd0iKfcZkEdJNOp2uLi4ulkZERLRAIGGNhYUHb2tqqYg9EnvlEVma67JYsk0gkHFLxDi7Y2Ngoj42NleWyuG9gD/bqoHZ2d3cfM1B2K27qIjBra2u/6cLBwUHhdruFw+GoG1jDO9oXj8c13ao/5ubmHpHOptEQgclNBGZ4eNi4rK+v75Zl+BrtxVno0DRt3RJ/QGByE79A8kRMTEyoZ6/XawDweDxqjkQiYmlpqQ5UKpVSlrq4uHjTMiBEE8jJOYOLIEdHRwaQ/v5+AwzGwcGB2hOLxYy1cDhcLRaL4FNhdXXV1TQYqfQpQhvRRJzBPDk5KY6Pj9WF+/v7t1yWy+XUO5mLxPT0tFrz+/1q3tzcLMFKMoe9bhoQkh4OI7ShDGR1uVzGxVKpuhhzI5iTkxPR09Oj1tyuv+fm5+c1PUd9aBoQMjAOI89AGSIIs8/nMwDAbRAAyWaz6jmfzxsABgYGBD+LPKUDWm4F0DIOQwlXysmLsbe3J0i4tTjZTQBF2woI7qNnsgxZygy0CaD3bQPEv5ysA8uA4BBEGL33eX11gOB+HdDHljmE2kRW4UmPwIDAjZzi0Qc+EadkyqBS8qppQJKcIRxGoeRhHwwGDWsATG9vb13Y8+ibmpoS7Gx1e3sbJaSYyWQ8LfVB0ko/5YDbbiVG5Bmn02m4kXOG8hRPjKOjo6VarQbrrFspHS9hpWQyWeJlIBqNipmZmbrQ5ikBliEwrHSo/un6+jpkqQ+SX/TlruLKo41z5q7iqvdGvC9qqf3olm773th+DA0NmbYfAMTbDwYmbdIWt2YlWc+cBAru45y6a4Az5CaAkW5+aLWVbWw7u8l9IDqiDymBt6/IM6h9KMggsL43btIOt62vVkRH9N3X4MsAk9jLX6+ursbb3uTz3yAO7Pz8PGjyC7Qigbw9Ozt70vAxdltHOtKR/0T+AL2SJvDTWPbCAAAAAElFTkSuQmCC"}Controller.prototype={expand:function(t){t.url?(this.firstPartNode.style.display="none",this.secondPartNode.src=t.url,this.secondPartNode.style.display="block"):this.firstPartNode.contentDocument.body.setAttribute("class","expanded"),t.useCustomClose||this._setClose(),this._resizeWrapper({width:t.width,height:t.height,position:"fixed"}),this._maximizeAdContainer()},resize:function(t){this.firstPartNode.contentDocument.body.setAttribute("class","resized"),this._resizeWrapper(t)},_resizeWrapper:function(t){var e=t.position||(t.x&&t.width?"fixed":"static");t.width&&t.height?(this.wrapperNode.style.width=t.width+"px",this.wrapperNode.style.height=t.height+"px"):(this.wrapperNode.style.width="auto",this.wrapperNode.style.height="auto"),this.wrapperNode.style.position=e,this.wrapperNode.style.overflow="static"==e?"visible":"hidden",this.wrapperNode.style.top=(t.x||0)+"px",this.wrapperNode.style.left=(t.y||0)+"px"},_maximizeAdContainer:function(){this.adContainerNode.style.width="auto",this.adContainerNode.style.height="auto",this.adContainerNode.style.position="fixed",this.adContainerNode.style.top=0,this.adContainerNode.style.left=0,this.adContainerNode.style.right=0,this.adContainerNode.style.bottom=0,this.adContainerNode.style.background="rgba(0, 0, 0, 0.6)"},_minimizeAdContainer:function(){this.adContainerNode.style.width=this.initialWidth,this.adContainerNode.style.height=this.initialHeight,this.adContainerNode.style.position="static",this.adContainerNode.style.top="initial",this.adContainerNode.style.left="initial",this.adContainerNode.style.right="initial",this.adContainerNode.style.bottom="initial",this.adContainerNode.style.background="none"},close:function(t){if("default"==t)this.adContainerNode.style.display="none";else{this.firstPartNode.contentDocument.body.removeAttribute("class","expanded"),this.firstPartNode.contentDocument.body.removeAttribute("class","resized"),this.secondPartNode.style.display="none",this.firstPartNode.style.display="block";var e=this.wrapperNode.getElementsByClassName("mraidClose")[0];e&&e.remove(),this._resizeWrapper({}),this._minimizeAdContainer()}},getCurrentPosition:function(){return{x:this.wrapperNode.offsetLeft,y:this.wrapperNode.offsetTop,width:this.wrapperNode.offsetWidth,height:this.wrapperNode.offsetHeight}},getPlacementType:function(){return this.placementType},_setClose:function(){var t=document.createElement("img");t.setAttribute("src",this.closeIcon),t.setAttribute("class","mraidClose"),t.setAttribute("onclick","mraid.close();"),t.style.position="absolute",t.style.width="50px",t.style.height="50px",t.style.top="0px",t.style.right="0px",t.style.zIndex="99999999999",this.wrapperNode.appendChild(t)},postMessage:function(t){return"controller"==t.target?this[t.action].apply(controller,[t.arguments]):void 0}},window.controller=new Controller(document.getElementById("")),"localStorage"in window&&null!==window.localStorage&&localStorage.setItem("madvertise","0"),function(){xhr=new XMLHttpRequest,xhr.open("GET","http://localhost:1142/site/TestTokn/ad/QOnPBrZ2/pingback/jp4lmttz",!0),xhr.send()}();