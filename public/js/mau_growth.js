"use strict";!function(){function e(e,t,a){function o(t,a,o,n){var m=d3.line().x(function(t){return s(e.indexOf(t))}).y(function(e){return 250-r(e[t])});u.append("path").attr("d",m(e)).attr("class",a),u.selectAll("circle"+[a]).data(e).enter().append("circle").attr("class",a).attr("cx",function(t){return s(e.indexOf(t))}).attr("cy",function(e){return 250-r(e[t])}).attr("r",function(e){return 5}).on("click",function(e){d3.select("#bar_info").text(o+" "+(e[t]>=0?"grew "+e[t]:"shrank "+e[t])+"% "+n+" in "+e.quarter+".")})}d3.select("#bar_area").remove(),d3.select("#bar_info").text("Click dots to see figures");var u=d3.select("#main_chart").append("g").attr("id","bar_area"),s=d3.scaleLinear().domain([0,e.length-1]).range([25,500]),r=d3.scaleLinear().domain([0,25]).range([0,225]),n="maus_"+t,m="mausUS_"+t;o(n,"stat_one","Global monthly active users",a),o(m,"stat_two","U.S. monthly active users",a),u.selectAll("text.x_label").data(e).enter().append("text").attr("class","axis_label").text(function(e){return e.quarter}).attr("y",305).attr("x",function(t){return s(e.indexOf(t))}).attr("transform",function(t){return"rotate(90 "+s(e.indexOf(t))+" 305)"}),d3.select("text#y_axis_label").text("25%");var y=["global","us"];document.getElementById("global_box").addEventListener("change",function(){y.indexOf("global")===-1?(y.push("global"),o(n,"stat_one","Global monthly active users",a)):(y.splice(y.indexOf("global"),1),d3.select("path.stat_one").remove(),d3.selectAll("circle.stat_one").remove())}),document.getElementById("us_box").addEventListener("change",function(){y.indexOf("us")===-1?(y.push("us"),o(m,"stat_two","U.S. monthly active users",a)):(y.splice(y.indexOf("us"),1),d3.select("path.stat_two").remove(),d3.selectAll("circle.stat_two").remove())})}var t=[{quarter:"Q2 2013",maus_qoq:6.86,mausUS_qoq:2.08,maus_yoy:"",mausUS_yoy:""},{quarter:"Q3 2013",maus_qoq:6.42,mausUS_qoq:8.16,maus_yoy:"",mausUS_yoy:""},{quarter:"Q4 2013",maus_qoq:3.88,mausUS_qoq:1.89,maus_yoy:"",mausUS_yoy:""},{quarter:"Q1 2014",maus_qoq:5.81,mausUS_qoq:5.56,maus_yoy:25,mausUS_yoy:18.75},{quarter:"Q2 2014",maus_qoq:6.27,mausUS_qoq:5.26,maus_yoy:24.31,mausUS_yoy:22.45},{quarter:"Q3 2014",maus_qoq:4.8,mausUS_qoq:5,maus_yoy:22.41,mausUS_yoy:18.87},{quarter:"Q4 2014",maus_qoq:1.41,mausUS_qoq:0,maus_yoy:19.5,mausUS_yoy:16.67},{quarter:"Q1 2015",maus_qoq:4.86,mausUS_qoq:3.17,maus_yoy:18.43,mausUS_yoy:14.04},{quarter:"Q2 2015",maus_qoq:.66,mausUS_qoq:0,maus_yoy:12.18,mausUS_yoy:8.33},{quarter:"Q3 2015",maus_qoq:.99,mausUS_qoq:1.54,maus_yoy:8.1,mausUS_yoy:4.76},{quarter:"Q4 2015",maus_qoq:-.65,mausUS_qoq:-1.52,maus_yoy:5.9,mausUS_yoy:3.17},{quarter:"Q1 2016",maus_qoq:1.64,mausUS_qoq:0,maus_yoy:2.65,mausUS_yoy:0},{quarter:"Q2 2016",maus_qoq:.97,mausUS_qoq:1.54,maus_yoy:2.96,mausUS_yoy:1.54},{quarter:"Q3 2016",maus_qoq:1.28,mausUS_qoq:1.52,maus_yoy:3.26,mausUS_yoy:1.52}],a=t,o=t.slice(3);document.addEventListener("DOMContentLoaded",function(){document.getElementById("yearly_btn").focus(),e(o,"yoy","year-over-year")}),document.getElementById("quarterly_btn").addEventListener("click",function(){e(a,"qoq","quarter-over-quarter")}),document.getElementById("yearly_btn").addEventListener("click",function(){e(o,"yoy","year-over-year")})}();
//# sourceMappingURL=mau_growth.js.map