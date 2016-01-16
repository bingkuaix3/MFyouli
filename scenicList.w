<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
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
    <div class="x-panel-top" xid="scenicListTop"> 
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
    <div class="x-panel-content" id="scenicList"/> 
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/MFyouli/yuyinList.w"></span></div>
