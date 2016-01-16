<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad" onActive="modelActive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="jingdianData" idColumn="fID" onCustomRefresh="jingdianDataCustomRefresh"> 
      <column label="景点ID" name="fID" type="String" xid="xid1"/>  
      <column label="景点名称" name="fName" type="String" xid="xid2"/>  
      <column label="景点所属景区" name="fBelongJingqu" type="String" xid="xid3"/>  
      <column label="景点坐标" name="fCoordinate" type="String" xid="xid4"/>  
      <column label="景点介绍" name="fIntroduce" type="String" xid="xid5"/>  
      <column label="景点语音" name="fSound" type="String" xid="xid6"/>  
      <column label="景点图片" name="fImage" type="String" xid="xid7"/> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="jingdianMapTop"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        style="background-color:#3ba030;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title"> 
          <img style="width:60px;" src="$UI/MFyouli/images/icon.png"/> 
        </div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="jingdianMapContent"> 
      <audio id="audioplayer" style="display:none;" controls="controls"/>  
      <div class="map" id="container"/>  
      <div class="map-control"> 
        <img xid="backCenter" src="$UI/MFyouli/images/dingweiReset.png" bind-click="bakCenterClick"/> 
      </div>  
      <img flag="0" id="navigators" xid="navigators" src="$UI/MFyouli/images/dingweiClose.png"
        bind-click="navigatorsClick" style="position:fixed;bottom:100px;right:10px;width:30px;height:30px;"/>  
      <div class="panelInfo"> 
        <div class="titleInfo"> 
          <span class="titleInfo-name"/>  
          <img class="titleInfo-close" src="$UI/MFyouli/images/close.png" bind-click="closeWin"/> 
        </div>  
        <div class="contentInfo"> 
          <div class="Info"> 
            <img class="imgInfo"/>  
            <div class="fowordInfo"/>  
            <div class="rightInfo"> 
              <img src="$UI/MFyouli/images/left.png"/> 
            </div> 
          </div> 
        </div>  
        <div class="buttonInfo" bind-click="autio"> 
          <div class="btnInfo"> 
            <img id="yuyinicon" src="$UI/MFyouli/images/yuyin2.png"/>  
            <span id="yuyin">语音解说</span> 
          </div> 
        </div> 
      </div>  
      <!-- <div class="infopanel"> 
        <div class="infotitle"> 
          <span class="infotitle-name"/>  
          <img class="infotitle-close" src="$UI/MFyouli/images/close.png"/> 
        </div>  
        <div class="infocontent"> 
          <div class="info"> 
            <img class="infoimg"/>  
            <div class="infoword" style="display:none;"/> 
          </div>  
          <div class="inforight"> 
            <img src="$UI/MFyouli/images/left.png"/> 
          </div> 
        </div>  
        <div class="infobutton"> 
          <div class="infobtn"> 
            <img id="yuyinicon" style="width:16px;margin-top:-3px;" src="$UI/MFyouli/images/yuyin2.png"/>  
            <span id="yuyin">语音解说</span> 
          </div> 
        </div> 
      </div>  --> 
    </div> 
  </div> 
</div>
