(function() {
  const earnings_stats = [{
    'quarter': 'Q1 2015',
    'on_twitter': 379,
    'off_twitter': 9.2
  }, {
    'quarter': 'Q2 2015',
    'on_twitter': 417.8,
    'off_twitter': 34.5
  }, {
    'quarter': 'Q3 2015',
    'on_twitter': 446.9,
    'off_twitter': 66
  }, {
    'quarter': 'Q4 2015',
    'on_twitter': 556,
    'off_twitter': 85
  }, {
    'quarter': 'Q1 2016',
    'on_twitter': 467.3,
    'off_twitter': 63.4
  }, {
    'quarter': 'Q2 2016',
    'on_twitter': 480.7,
    'off_twitter': 53.8
  }, {
    'quarter': 'Q3 2016',
    'on_twitter': 487.0,
    'off_twitter': 58.0
  }];
  const xScale = d3.scaleLinear().domain([
    0,
    earnings_stats.length - 1
  ]).range([
    25,
    500
  ]);
  const yScale = d3.scaleLinear().domain([
    0,
    d3.max(earnings_stats, function(d) {
      return d.on_twitter;
    })
  ]).range([
    0,
    275
  ]);
  const bar_width = 25;
  const bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');
  bar_area.selectAll('rect.stat_one').data(earnings_stats).enter().append('rect').attr('class', 'stat_one').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.on_twitter);
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('y', function(d) {
    return 300 - yScale(d.on_twitter);
  }).on('click', function(d) {
    d3.select('#bar_info').text('On-Twitter ad revenue in ' + d.quarter + ': $' + d.on_twitter + ' million');
  });
  bar_area.selectAll('rect.stat_two').data(earnings_stats).enter().append('rect').attr('class', 'stat_two').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.off_twitter);
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d)) + bar_width;
  }).attr('y', function(d) {
    return 300 - yScale(d.off_twitter);
  }).on('click', function(d) {
    d3.select('#bar_info').text('Off-Twitter ad revenue in ' + d.quarter + ': $' + d.off_twitter + ' million');
  });
  bar_area.selectAll('text.x_label').data(earnings_stats).enter().append('text').attr('class', 'axis_label').text(function(d) {
    return d.quarter;
  }).attr('y', 325).attr('x', function(d) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('transform', function(d) {
    return 'rotate(40 ' + xScale(earnings_stats.indexOf(d)) + ' 325)';
  });
  d3.select('text#y_axis_label').text('$' + d3.max(earnings_stats, function(d) {
    return d.on_twitter;
  }) + ' million');
}());
