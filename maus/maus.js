'use strict';
(function() {
  var earnings_stats = [{
    'quarter': 'Q1 2015',
    'maus_total': 302,
    'maus_us': 65
  }, {
    'quarter': 'Q2 2015',
    'maus_total': 304,
    'maus_us': 65
  }, {
    'quarter': 'Q3 2015',
    'maus_total': 307,
    'maus_us': 66
  }, {
    'quarter': 'Q4 2015',
    'maus_total': 305,
    'maus_us': 65
  }, {
    'quarter': 'Q1 2016',
    'maus_total': 310,
    'maus_us': 65
  }, {
    'quarter': 'Q2 2016',
    'maus_total': 313,
    'maus_us': 66
  }, {
    'quarter': 'Q3 2016',
    'maus_total': 0,
    'maus_us': 0
  }];
  var xScale = d3.scale.linear().domain([
    0,
    earnings_stats.length - 1
  ]).range([
    25,
    500
  ]);
  var yScale = d3.scale.linear().domain([
    0,
    d3.max(earnings_stats, function(d) {
      return d.maus_total;
    })
  ]).range([
    0,
    275
  ]);
  var bar_width = 25;
  var bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');
  bar_area.selectAll('rect.stat_one').data(earnings_stats).enter().append('rect').attr('class', 'stat_one').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.maus_total);
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('y', function(d) {
    return 300 - yScale(d.maus_total);
  }).on('click', function(d) {
    d3.select('#bar_info').text('Total MAUs in ' + d.quarter + ': ' + d.maus_total + ' million');
  });
  bar_area.selectAll('rect.stat_two').data(earnings_stats).enter().append('rect').attr('class', 'stat_two').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.maus_us);
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d)) + bar_width;
  }).attr('y', function(d) {
    return 300 - yScale(d.maus_us);
  }).on('click', function(d) {
    d3.select('#bar_info').text('U.S. MAUs in ' + d.quarter + ': ' + d.maus_us + ' million');
  });
  bar_area.selectAll('text.x_label').data(earnings_stats).enter().append('text').attr('class', 'axis_label').text(function(d) {
    return d.quarter;
  }).attr('y', 325).attr('x', function(d) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('transform', function(d) {
    return 'rotate(40 ' + xScale(earnings_stats.indexOf(d)) + ' 325)';
  });
  d3.select('text#y_axis_label').text(d3.max(earnings_stats, function(d) {
    return d.maus_total;
  }) + ' million');
}());
