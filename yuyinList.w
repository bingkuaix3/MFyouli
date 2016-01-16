<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"/>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive" style="left:194px;top:10px;"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="jingdianListYuyinTop"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        style="background-color:#3ba030;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'windowReceiver1.windowCancel'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title" id="jingdianListYuyinTitle"/>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" id="jingdianListYuyinContent" style="background-color:black;display:none"> 
      <audio id="jdYuyins" style="display:none;" controls="controls"/>  
      <img style="width:96%; margin-left:2%;margin-top:5px;" id="jingdianImages"/>  
      <div style="float:left;width:100%;height:40px;background-color:black;"> 
        <table style="width:100%;height:100%;"> 
          <tr> 
            <td align="right" style="width:40px;"> 
              <img id="jdYuyinImage" onclick="yuyinPlayer()" style="width:20px;"
                src="$UI/youli/images/yuyin1.png"/> 
            </td>  
            <td align="center"> 
              <div style="width:90%;height:10px;border:1px solid white;border-radius:5px;background-color:white;"> 
                <div id="progress" style="float:left;margin:0px;border-radius:5px;background-color:#3ba030;width:0px;height:100%;"/> 
              </div> 
            </td> 
          </tr> 
        </table> 
      </div>  
      <div id="jingdianIntroduce" style="float:left;width:100%;font-size:13px; color:white;padding:10px;"/> 
    </div> 
  </div> 
</div>
