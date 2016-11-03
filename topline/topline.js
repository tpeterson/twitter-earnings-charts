'use strict';
(function() {
  var earnings_stats = [{
    'quarter': 'Q1 2015',
    'total_revenue': 436,
    'advertising_revenue': 388.2,
    'net_income': -162.4
  }, {
    'quarter': 'Q2 2015',
    'total_revenue': 502.4,
    'advertising_revenue': 452.3,
    'net_income': -136.7
  }, {
    'quarter': 'Q3 2015',
    'total_revenue': 569.2,
    'advertising_revenue': 512.9,
    'net_income': -131.7
  }, {
    'quarter': 'Q4 2015',
    'total_revenue': 710.5,
    'advertising_revenue': 640.7,
    'net_income': -90.2
  }, {
    'quarter': 'Q1 2016',
    'total_revenue': 594.5,
    'advertising_revenue': 530.7,
    'net_income': -79.7
  }, {
    'quarter': 'Q2 2016',
    'total_revenue': 602,
    'advertising_revenue': 534.5,
    'net_income': -107.2
  }, {
    'quarter': 'Q3 2016',
    'total_revenue': 615.9,
    'advertising_revenue': 545.0,
    'net_income': -103
  }];
  var xScale = d3.scale.linear().domain([
    0,
    earnings_stats.length - 1
  ]).range([
    25,
    700
  ]);
  var yScale = d3.scale.linear().domain([
    0,
    d3.max(earnings_stats, function(d) {
      return d.total_revenue;
    })
  ]).range([
    0,
    175
  ]);
  var bar_width = 25;
  var bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');
  bar_area.selectAll('rect.stat_one').data(earnings_stats).enter().append('rect').attr('class', 'stat_one').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.total_revenue);
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('y', function(d) {
    return 200 - yScale(d.total_revenue);
  }).on('click', function(d) {
    d3.select('#bar_info').text('Total revenue in ' + d.quarter + ': $' + d.total_revenue + ' million');
  });
  bar_area.selectAll('rect.stat_two').data(earnings_stats).enter().append('rect').attr('class', 'stat_two').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.advertising_revenue);
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d)) + bar_width;
  }).attr('y', function(d) {
    return 200 - yScale(d.advertising_revenue);
  }).on('click', function(d) {
    d3.select('#bar_info').text('Advertising revenue in ' + d.quarter + ': $' + d.advertising_revenue + ' million');
  });
  bar_area.selectAll('rect.stat_three').data(earnings_stats).enter().append('rect').attr('class', 'stat_three').attr('width', bar_width).attr('height', function(d) {
    return yScale(Math.abs(d.net_income));
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d)) + bar_width + bar_width;
  }).attr('y', function(d) {
    return d.net_income > 0 ? 200 - yScale(d.net_income) : 200;
  }).on('click', function(d) {
    d3.select('#bar_info').text('Net income in ' + d.quarter + ': ' + (d.net_income > 0 ? '$' + d.net_income : '-$' + Math.abs(d.net_income)) + ' million');
  });
  bar_area.selectAll('text.x_label').data(earnings_stats).enter().append('text').attr('class', 'axis_label').text(function(d) {
    return d.quarter;
  }).attr('y', 200).attr('x', function(d) {
    return xScale(earnings_stats.indexOf(d)) - 2.5;
  }).attr('transform', function(d) {
    return 'rotate(-90 ' + (xScale(earnings_stats.indexOf(d)) - 2.5) + ' 200)';
  });
  d3.select('text#y_axis_label').text('$' + d3.max(earnings_stats, function(d) {
    return d.total_revenue;
  }) + ' million');
}());
