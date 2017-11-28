webpackJsonp([2],{592:function(t,n){t.exports='<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n\t<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />\r\n\t<title>地图展示</title>\r\n\t<style type="text/css">\r\n\t\tbody,\r\n\t\thtml {\r\n\t\t\tmargin: 0;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 100%;\r\n\t\t\tposition: absolute;\r\n\t\t}\r\n\r\n\t\t#map {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tright: 0;\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\r\n\t\t.drawingToolbar {\r\n\t\t\tbackground: #fff;\r\n\t\t\tz-index: 999;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 120px;\r\n\t\t\ttop: 10px;\r\n\t\t\tleft: 200px;\r\n\t\t\tright: 300px;\r\n\t\t\tline-height: 1;\r\n\t\t\theight: 32px;\r\n\t\t\tline-height: 32px;\r\n\t\t}\r\n\t</style>\r\n</head>\r\n\r\n<body>\r\n\t<script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"><\/script>\r\n\t<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=您的密钥"><\/script>\r\n\t<div id="map" style="width:100%;height:100%;"></div>\r\n\t<div class="drawingToolbar">\r\n\t\t<div class="zoomBox"></div>\r\n\t</div>\r\n</body>\r\n\r\n</html>\r\n<script type="text/javascript">\r\n\tvar map;\r\n\tvar top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT });// 左上角，添加比例尺\r\n\tvar top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件\r\n\tvar top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }); //右上角，仅包含平移和缩放按钮\r\n\tvar zoom;\r\n\tvar zoomBox = $(\'.zoomBox\');\r\n\t//创建和初始化地图函数：\r\n\tfunction initMap() {\r\n\t\tcreateMap();//创建地图\r\n\t\taddMapControl();//向地图添加控件\r\n\t\tsetMapEvent();//设置地图事件\r\n\t};\r\n\tfunction createMap() {\r\n\t\tmap = new BMap.Map("map");\r\n\t\tmap.centerAndZoom(new BMap.Point(120.137323, 30.232054), 12);\r\n\t};\r\n\t//向地图添加控件\r\n\tfunction addMapControl() {\r\n\t\tmap.addControl(top_left_control);\r\n\t\tmap.addControl(top_left_navigation);\r\n\t\tmap.addControl(top_right_navigation);\r\n\t};\r\n\tfunction setMapEvent() {\r\n\t\tzoomEndFun();\r\n\t\tmap.addEventListener(\'zoomend\', zoomEndFun);\r\n\t\tmap.enableScrollWheelZoom();\r\n\t};\r\n\r\n\tfunction zoomEndFun() {\r\n\t\tzoom = map.getZoom();\r\n\t\tzoomBox.html(\'当前级别：\' + zoom + \'级\');\r\n\t}\r\n\tinitMap();\r\n\r\n<\/script>'}});