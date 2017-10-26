"use strict";!function(){var e=[{quarter:"Q1 2015",total_revenue:436,advertising_revenue:388.2,net_income:-162.4},{quarter:"Q2 2015",total_revenue:502.4,advertising_revenue:452.3,net_income:-136.7},{quarter:"Q3 2015",total_revenue:569.2,advertising_revenue:512.9,net_income:-131.7},{quarter:"Q4 2015",total_revenue:710.5,advertising_revenue:640.7,net_income:-90.2},{quarter:"Q1 2016",total_revenue:594.5,advertising_revenue:530.7,net_income:-79.7},{quarter:"Q2 2016",total_revenue:602,advertising_revenue:534.5,net_income:-107.2},{quarter:"Q3 2016",total_revenue:615.9,advertising_revenue:545,net_income:-103},{quarter:"Q4 2016",total_revenue:717.2,advertising_revenue:637.8,net_income:-167},{quarter:"Q1 2017",total_revenue:548.3,advertising_revenue:473.8,net_income:-61.6},{quarter:"Q2 2017",total_revenue:573.9,advertising_revenue:489.1,net_income:-107},{quarter:"Q3 2017",total_revenue:589.6,advertising_revenue:502.8,net_income:-21.1}],t=d3.scaleLinear().domain([0,e.length-1]).range([25,700]),n=d3.scaleLinear().domain([0,d3.max(e,function(e){return e.total_revenue})]).range([0,175]),r=25,a=d3.select("#main_chart").append("g").attr("id","bar_area");a.selectAll("rect.stat_one").data(e).enter().append("rect").attr("class","stat_one").attr("width",r).attr("height",function(e){return n(e.total_revenue)}).attr("x",function(n,r){return t(e.indexOf(n))}).attr("y",function(e){return 200-n(e.total_revenue)}).on("click",function(e){d3.select("#bar_info").text("Total revenue in "+e.quarter+": $"+e.total_revenue+" million")}),a.selectAll("rect.stat_two").data(e).enter().append("rect").attr("class","stat_two").attr("width",r).attr("height",function(e){return n(e.advertising_revenue)}).attr("x",function(n,a){return t(e.indexOf(n))+r}).attr("y",function(e){return 200-n(e.advertising_revenue)}).on("click",function(e){d3.select("#bar_info").text("Advertising revenue in "+e.quarter+": $"+e.advertising_revenue+" million")}),a.selectAll("rect.stat_three").data(e).enter().append("rect").attr("class","stat_three").attr("width",r).attr("height",function(e){return n(Math.abs(e.net_income))}).attr("x",function(n,a){return t(e.indexOf(n))+r+r}).attr("y",function(e){return e.net_income>0?200-n(e.net_income):200}).on("click",function(e){d3.select("#bar_info").text("Net income in "+e.quarter+": "+(e.net_income>0?"$"+e.net_income:"-$"+Math.abs(e.net_income))+" million")}),a.selectAll("text.x_label").data(e).enter().append("text").attr("class","axis_label").text(function(e){return e.quarter}).attr("y",205).attr("x",function(n){return t(e.indexOf(n))}).attr("transform",function(n){return"rotate(90 "+t(e.indexOf(n))+" 205)"}),d3.select("text#y_axis_label").text("$"+d3.max(e,function(e){return e.total_revenue})+" million")}();
//# sourceMappingURL=topline.js.map
