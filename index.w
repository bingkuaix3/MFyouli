<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"
    src="$UI/MFyouli/main.w"/>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
    active="0" xid="pages" wrap="false" slidable="false" swipe="false" style="background-color:white;width:100%;"> 
    <div class="x-contents-content" xid="main" style="width:100%;"> 
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top"
        label="玩命加载中......" xid="button3" icon="icon-loading-a"> 
        <i xid="i3" class="icon-loading-a"/>  
        <span xid="span3">玩命加载中......</span> 
      </a> 
    </div> 
  </div> 
</div>
