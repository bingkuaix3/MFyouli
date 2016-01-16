<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="haochiData" idColumn="fID" onCustomRefresh="haochiDataCustomRefresh"> 
      <column label="好吃ID" name="fID" type="String" xid="xid23"/>  
      <column label="好吃所属景区" name="fBelongJingqu" type="String" xid="xid24"/>  
      <column label="好吃店名" name="fName" type="String" xid="xid25"/>  
      <column label="好吃介绍" name="fIntroduce" type="String" xid="xid26"/>  
      <column label="好吃地址" name="fAddress" type="String" xid="xid27"/>  
      <column label="好吃坐标" name="fCoordinate" type="String" xid="xid28"/>  
      <column label="好吃图片1" name="fPictrue1" type="String" xid="xid29"/>  
      <column label="好吃图片2" name="fPictrue2" type="String" xid="xid30"/>  
      <column label="好吃图片3" name="fPictrue3" type="String" xid="xid31"/>  
      <column label="好吃图片4" name="fPictrue4" type="String" xid="xid32"/>  
      <master xid="default1"/> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1"> 
        <div class="x-titlebar-left" xid="div1"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left" xid="i4"/>  
            <span xid="span4"/> 
          </a> 
        </div>  
        <div class="x-titlebar-title" xid="div2" id="jingquTitleName"/>  
        <div class="x-titlebar-right reverse" xid="div3"/> 
      </div> 
    </div>  
    <div class="x-panel-content" id="content1" style="display:none"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="panel2"> 
        <div class="x-panel-top" xid="top2" height="33"> 
          <ul xid="ul1"> 
            <li class="item" xid="li1"> 
              <a id="a1" component="$UI/system/components/justep/button/button"
                class="name" label="详细信息" xid="detailBtn" target="detailContent"> 
                <i xid="i1"/>  
                <span xid="span1">详细信息</span> 
              </a> 
            </li>  
            <li class="item" xid="li2"> 
              <a id="a2" component="$UI/system/components/justep/button/button"
                class="name" label="景区特产" xid="productBtn" target="productContent"> 
                <i xid="i2"/>  
                <span xid="span2">景区特产</span> 
              </a> 
            </li>  
            <li class="item" xid="li3"> 
              <a id="a3" component="$UI/system/components/justep/button/button"
                class="name" label="景区美食" xid="deliciouBtn" target="deliciousContent"> 
                <i xid="i3"/>  
                <span xid="span3">景区美食</span> 
              </a> 
            </li> 
          </ul> 
        </div>  
        <div class="x-panel-content" xid="content5"> 
          <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
            active="0" xid="contents1" swipe="false"> 
            <div class="x-contents-content" xid="detailContent"> 
              <audio id="scenicAudio" style="display:none;"/>  
              <img class="mainimg"/>  
              <table> 
                <tr> 
                  <td class="scenicJump"> 
                    <a xid="button1" id="scenicMapJump" bind-click="scenicMapJump"> 
                      <i xid="i5" class="icon-android-volume"/>  
                      <span xid="span5">语音地图</span> 
                    </a> 
                  </td>  
                  <td class="scenicAutio"> 
                    <div class="scenicAutioDiv" bind-click="audioPlay"> 
                      <img id="scenicAutioImg" class="scenicAutioImg" src="$UI/youli/images/yuyin1.png"/> 
                    </div> 
                  </td>  
                  <td class="scenicJump" bind-click="scenicListJump"> 
                    <a xid="button2"> 
                      <i class="icon-android-sort"/>  
                      <span xid="span6">语音列表</span> 
                    </a> 
                  </td> 
                </tr> 
              </table>  
              <div id="scenicIntroduce"/>  
              <table class="infoTable"> 
                <tr> 
                  <td class="tdTitle">地址</td>  
                  <td class="tdInfo" id="scenicAddress"/> 
                </tr> 
              </table>  
              <table class="infoTable"> 
                <tr> 
                  <td class="tdTitle">乘车</td>  
                  <td class="tdInfo" id="scenicPath"/> 
                </tr> 
              </table> 
            </div>  
            <div class="x-contents-content" xid="productContent">2</div>  
            <div class="x-contents-content" xid="deliciousContent"> 
              <div id="deliciousDiv"/> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"
    src="$UI/MFyouli/scenicDetail.w"/> 
</div>
