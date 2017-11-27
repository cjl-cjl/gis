webpackJsonp([4],{572:function(t,n){t.exports='<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n\t<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />\r\n\t<title>地图展示</title>\r\n\t<style type="text/css">\r\n\t\tbody, html {    \r\n\t\t\tmargin: 0;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 100%;\r\n\t\t\tposition: absolute;\r\n\t\t}\r\n\t\t#map {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tright: 0;\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t</style>\r\n</head>\r\n<body>\r\n\t<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=您的密钥"><\/script>\r\n\t<script src="https://libs.baidu.com/jquery/1.9.0/jquery.js"><\/script>\r\n\t<div id="map"></div>\r\n</body>\r\n</html>\r\n<script>\r\n\tvar map;\r\n\t//创建和初始化地图函数：\r\n    function initMap(){\r\n\t\tmap = new BMap.Map("map"); \r\n\t\tmap.centerAndZoom(new BMap.Point(120.251157,30.251835),13);\r\n\t\tmap.enableScrollWheelZoom();\r\n    };\r\n    initMap();\r\n\r\n\t//显示范围\r\n\tvar pts = [];\r\n\tpts.push(new BMap.Point(120.215022,30.271491));\r\n\tpts.push(new BMap.Point(120.271363,30.250029));\r\n\tpts.push(new BMap.Point(120.208123,30.201599));\r\n\tpts.push(new BMap.Point(120.178802,30.251028));\r\n\tvar opts = {\r\n\t\tstrokeColor:"rgb(255, 0, 0)",    //边线颜色。\r\n\t\tfillColor:"rgb(227, 0, 0)",      //填充颜色。当参数为空时，圆形将没有填充效果。\r\n\t\tstrokeWeight: 1,       //边线的宽度，以像素为单位。\r\n\t\tstrokeOpacity: 1,    //边线透明度，取值范围0 - 1。\r\n\t\tfillOpacity: 0.2,      //填充的透明度，取值范围0 - 1。\r\n\t\tstrokeStyle: \'solid\' //边线的样式，solid或dashed。\r\n\t};//覆盖物属性\r\n\tvar polygon = new BMap.Polygon(pts, opts);  //创建多边形\r\n\tmap.addOverlay(polygon);\r\n\t\r\n\tvar point = getPointInPolygon(polygon);\r\n\tmap.addOverlay(new BMap.Marker(point));\r\n\tfunction getPointInPolygon(){\r\n\t\tvar bounds = polygon.getBounds();\r\n\t\tvar center = bounds.getCenter();\r\n\t\tvar newPoint = new BMap.Point(center.lng, center.lat);\r\n\t\treturn newPoint;\r\n\t}\r\n\r\n<\/script>'}});