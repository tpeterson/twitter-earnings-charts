"use strict";!function(){var e=[{quarter:"Q1 2015",advertising_revenue_growth:72},{quarter:"Q2 2015",advertising_revenue_growth:63},{quarter:"Q3 2015",advertising_revenue_growth:60},{quarter:"Q4 2015",advertising_revenue_growth:48},{quarter:"Q1 2016",advertising_revenue_growth:37},{quarter:"Q2 2016",advertising_revenue_growth:18},{quarter:"Q3 2016",advertising_revenue_growth:6},{quarter:"Q4 2016",advertising_revenue_growth:0},{quarter:"Q1 2017",advertising_revenue_growth:0}],r=d3.scaleLinear().domain([0,e.length-1]).range([25,500]),t=d3.scaleLinear().domain([0,d3.max(e,function(e){return e.advertising_revenue_growth})]).range([0,275]),n=d3.select("#main_chart").append("g").attr("id","bar_area"),a=d3.line().x(function(t){return r(e.indexOf(t))}).y(function(e){return 300-t(e.advertising_revenue_growth)});n.append("path").attr("d",a(e)).attr("class","stat_one"),n.selectAll("circle.stat_one").data(e).enter().append("circle").attr("class","stat_one").attr("cx",function(t){return r(e.indexOf(t))}).attr("cy",function(e){return 300-t(e.advertising_revenue_growth)}).attr("r",function(e){return 5}).on("click",function(e){d3.select("#bar_info").text("Ad revenue in "+e.quarter+" increased by: "+e.advertising_revenue_growth+"% year-over-year")}),n.selectAll("text.x_label").data(e).enter().append("text").attr("class","axis_label").text(function(e){return e.quarter}).attr("y",325).attr("x",function(t){return r(e.indexOf(t))}).attr("transform",function(t){return"rotate(40 "+r(e.indexOf(t))+" 325)"}),d3.select("text#y_axis_label").text(d3.max(e,function(e){return e.advertising_revenue_growth})+"%")}();
//# sourceMappingURL=ad_rev_growth.js.map
