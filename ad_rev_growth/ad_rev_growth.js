'use strict';
(function() {
  var earnings_stats = [{
    'quarter': 'Q1 2015',
    'advertising_revenue_growth': 72
  }, {
    'quarter': 'Q2 2015',
    'advertising_revenue_growth': 63
  }, {
    'quarter': 'Q3 2015',
    'advertising_revenue_growth': 60
  }, {
    'quarter': 'Q4 2015',
    'advertising_revenue_growth': 48
  }, {
    'quarter': 'Q1 2016',
    'advertising_revenue_growth': 37
  }, {
    'quarter': 'Q2 2016',
    'advertising_revenue_growth': 18
  }, {
    'quarter': 'Q3 2016',
    'advertising_revenue_growth': 6
  }];
  var xScale = d3.scale.linear().domain([
    0,
    earnings_stats.length - 1
  ]).range([
    25,
    400
  ]);
  var yScale = d3.scale.linear().domain([
    0,
    d3.max(earnings_stats, function(d) {
      return d.advertising_revenue_growth;
    })
  ]).range([
    0,
    275
  ]);
  var bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');
  var drawLine = d3.svg.line().x(function(d) {
    return xScale(earnings_stats.indexOf(d));
  }).y(function(d) {
    return 300 - yScale(d.advertising_revenue_growth);
  });
  bar_area.append('path').attr('d', drawLine(earnings_stats)).attr('class', 'stat_one');
  bar_area.selectAll('circle.stat_one').data(earnings_stats).enter().append('circle').attr('class', 'stat_one').attr('cx', function(d) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('cy', function(d) {
    return 300 - yScale(d.advertising_revenue_growth);
  }).attr('r', function(d) {
    return 5;
  }).on('click', function(d) {
    d3.select('#bar_info').text('Ad revenue in ' + d.quarter + ' increased by: ' + d.advertising_revenue_growth + '% year-over-year');
  });
  bar_area.selectAll('text.x_label').data(earnings_stats).enter().append('text').attr('class', 'axis_label').text(function(d) {
    return d.quarter;
  }).attr('y', 325).attr('x', function(d) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('transform', function(d) {
    return 'rotate(40 ' + xScale(earnings_stats.indexOf(d)) + ' 325)';
  });
  d3.select('text#y_axis_label').text(d3.max(earnings_stats, function(d) {
    return d.advertising_revenue_growth;
  }) + '%');
}());
