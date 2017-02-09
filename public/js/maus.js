"use strict";!function(){var t=[{quarter:"Q1 2015",maus_total:302,maus_us:65},{quarter:"Q2 2015",maus_total:304,maus_us:65},{quarter:"Q3 2015",maus_total:307,maus_us:66},{quarter:"Q4 2015",maus_total:305,maus_us:65},{quarter:"Q1 2016",maus_total:310,maus_us:65},{quarter:"Q2 2016",maus_total:313,maus_us:66},{quarter:"Q3 2016",maus_total:317,maus_us:67},{quarter:"Q4 2016",maus_total:319,maus_us:67}],a=d3.scaleLinear().domain([0,t.length-1]).range([25,500]),r=d3.scaleLinear().domain([0,d3.max(t,function(t){return t.maus_total})]).range([0,275]),e=25,u=d3.select("#main_chart").append("g").attr("id","bar_area");u.selectAll("rect.stat_one").data(t).enter().append("rect").attr("class","stat_one").attr("width",e).attr("height",function(t){return r(t.maus_total)}).attr("x",function(r,e){return a(t.indexOf(r))}).attr("y",function(t){return 300-r(t.maus_total)}).on("click",function(t){d3.select("#bar_info").text("Total MAUs in "+t.quarter+": "+t.maus_total+" million")}),u.selectAll("rect.stat_two").data(t).enter().append("rect").attr("class","stat_two").attr("width",e).attr("height",function(t){return r(t.maus_us)}).attr("x",function(r,u){return a(t.indexOf(r))+e}).attr("y",function(t){return 300-r(t.maus_us)}).on("click",function(t){d3.select("#bar_info").text("U.S. MAUs in "+t.quarter+": "+t.maus_us+" million")}),u.selectAll("text.x_label").data(t).enter().append("text").attr("class","axis_label").text(function(t){return t.quarter}).attr("y",325).attr("x",function(r){return a(t.indexOf(r))}).attr("transform",function(r){return"rotate(40 "+a(t.indexOf(r))+" 325)"}),d3.select("text#y_axis_label").text(d3.max(t,function(t){return t.maus_total})+" million")}();
//# sourceMappingURL=maus.js.map
