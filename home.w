<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="jingquData" idColumn="fID"> 
      <column label="景区ID" name="fID" type="String" xid="xid1"/>  
      <column label="景区名称" name="fName" type="String" xid="xid2"/>  
      <column label="景区所在国家" name="fCountry" type="String" xid="xid3"/>  
      <column label="景区所在省份" name="fProvince" type="String" xid="xid4"/>  
      <column label="景区所在城市" name="fCity" type="String" xid="xid5"/>  
      <column label="景区介绍" name="fIntroduce" type="String" xid="xid6"/>  
      <column label="景区图片" name="fImage" type="String" xid="xid7"/>  
      <column label="景区地图" name="fMap" type="String" xid="xid8"/>  
      <column label="景区语音" name="fSound" type="String" xid="xid9"/>  
      <column label="景区坐标" name="fCoordinate" type="String" xid="xid10"/>  
      <column label="景区地址" name="fAddress" type="String" xid="xid10"/>  
      <column label="景区公交" name="fBus" type="String" xid="xid10"/>  
      <column label="景区打车" name="fTaxi" type="String" xid="xid10"/>  
      <column label="景区详细信息1标题" name="fDetail1Title" type="String" xid="xid11"/>  
      <column label="景区详细信息1图片" name="fDetail1Image" type="String" xid="xid12"/>  
      <column label="景区详细信息1内容" name="fDetail1Content" type="String" xid="xid13"/>  
      <column label="景区详细信息2标题" name="fDetail2Title" type="String" xid="xid14"/>  
      <column label="景区详细信息2图片" name="fDetail2Image" type="String" xid="xid15"/>  
      <column label="景区详细信息2内容" name="fDetail2Content" type="String" xid="xid16"/>  
      <column label="景区详细信息3标题" name="fDetail3Title" type="String" xid="xid17"/>  
      <column label="景区详细信息3图片" name="fDetail3Image" type="String" xid="xid18"/>  
      <column label="景区详细信息3内容" name="fDetail3Content" type="String" xid="xid19"/>  
      <column label="景区详细信息4标题" name="fDetail4Title" type="String" xid="xid20"/>  
      <column label="景区详细信息4图片" name="fDetail4Image" type="String" xid="xid21"/>  
      <column label="景区详细信息4内容" name="fDetail4Content" type="String" xid="xid22"/>  
      <column label="城市ID " name="fCityId" type="String" xid="xid23"/> 
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="infoData" idColumn="id"> 
      <column label="信息ID" name="id" type="String" xid="xid24"/>  
      <column label="经度" name="longitude" type="String" xid="xid25"/>  
      <column label="纬度" name="latitude" type="String" xid="xid26"/>  
      <column label="城市" name="city" type="String" xid="xid27"/> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
    active="0" xid="pages" wrap="false" slidable="false" swipe="false" style="background-color:white;width:100%;"> 
    <div class="x-contents-content" xid="main" style="width:100%;">
      <a id="aa" component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-icon-top"
        label="玩命加载中......" xid="button3" icon="icon-loading-a"> 
        <i xid="i3" class="icon-loading-a"/>  
        <span xid="span3">玩命加载中......</span> 
      </a> 
    </div> 
  </div> 
</div>
