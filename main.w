<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:236px;top:88px;"
    onLoad="modelLoad"> 
    </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-content" xid="content1"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents" swipe="false"> 
        <div class="x-contents-content" xid="baiduContent"> 
          <div xid="baiduMap" style="width:100%;height:100%;" class="x-scroll-view"/>  
          <div xid="head" class="head"> 
            <div class="head-city" id="city"/>  
            <div id="weather" class="head-weather"/> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="scenicListContent"> 
          <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
            xid="panel2"> 
            <div class="x-panel-top" xid="top1"> 
              <div component="$UI/system/components/justep/titleBar/titleBar"
                class="titlebar" xid="titleBar1" bind-text=" $model.jingquData.val(&quot;fCity&quot;)+&quot;景区列表&quot;"> 
                <div class="x-titlebar-left" xid="div1" style="height:100%;"/>  
                <div class="x-titlebar-title" xid="div2" style="height:100%;"/>  
                <div class="x-titlebar-right reverse" xid="div3"/> 
              </div> 
            </div>  
            <div class="x-panel-content" xid="content2"> 
              <div component="$UI/system/components/justep/list/list" class="x-list x-cards"
                xid="list1" data="jingquData"> 
                <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1"
                  componentname="$UI/system/components/justep/list/list#listTemplateUl"
                  id="undefined_listTemplateUl1"> 
                  <li xid="li1" class="x-min-height list-group-item" componentname="li(html)"> 
                    <div  class="media"> 
                      <div component="$UI/system/components/justep/output/output"
                        class="x-output x-id" style="height:30px;display:none;" bind-ref="ref('fID')"/>  
                      <div xid="div5" class="media-left"> 
                        <img src="" alt="" xid="image1" id="img" bind-attr-src=" $model.imgLoad( $model.jingquData.val(&quot;fImage&quot;))"/> 
                      </div>  
                      <div xid="div6" class="media-body"> 
                        <div component="$UI/system/components/justep/output/output"
                          class="x-output a1" xid="output1" style="height:30px;" bind-ref="ref('fName')"/>  
                        <div component="$UI/system/components/justep/output/output"
                          class="x-output" xid="output2" style="height:69px;" bind-text=" $model.textLoad( $object.val(&quot;fIntroduce&quot;))"/> 
                      </div> 
                    </div> 
                  </li> 
                </ul> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="bottom1"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified"
        tabbed="true" xid="buttonGroup1"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-left"
          label="景区地图" xid="BmapBtn" target="baiduContent" icon="icon-android-earth"> 
          <i xid="i1" class="icon-android-earth"/>  
          <span xid="span1">景区地图</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-left"
          label="景区列表" xid="SLBtn" target="scenicListContent" icon="icon-navicon-round"> 
          <i xid="i2" class="icon-navicon-round"/>  
          <span xid="span2">景区列表</span> 
        </a> 
      </div> 
    </div> 
  </div> 
</div>
