<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"/>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver"
    xid="windowReceiver1" onReceive="windowReceiver1Receive"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title"/>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="jingquDetailsContent"> 
      <img id="jingquimg" class="details-img"/>  
      <div class="detail" id="details1"> 
        <div class="details-box-title"> 
          <span id="details1title" class="details-box-name"/> 
        </div>  
        <img id="details1img" class="details-box-img"/>  
        <div id="details1content" class="details-box-content"/> 
      </div>  
      <div class="detail" id="details2"> 
        <div class="details-box-title"> 
          <span id="details2title" class="details-box-name"/> 
        </div>  
        <img id="details2img" class="details-box-img"/>  
        <div id="details2content" class="details-box-content"/> 
      </div>  
      <div class="detail" id="details3"> 
        <div class="details-box-title"> 
          <span id="details3title" class="details-box-name"/> 
        </div>  
        <img id="details3img" class="details-box-img"/>  
        <div id="details3content" class="details-box-content"/> 
      </div>  
      <div class="detail" id="details4"> 
        <div class="details-box-title"> 
          <span id="details4title" class="details-box-name"/> 
        </div>  
        <img id="details4img" class="details-box-img"/>  
        <div id="details4content" class="details-box-content"/> 
      </div> 
    </div> 
  </div> 
</div>
