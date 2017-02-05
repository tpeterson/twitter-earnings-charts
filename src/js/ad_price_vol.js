(function() {
  const earnings_stats = [{
    'quarter': 'Q1 2015',
    'total_engagements': 32,
    'cost_per_engagement': 30
  }, {
    'quarter': 'Q2 2015',
    'total_engagements': 53,
    'cost_per_engagement': 6
  }, {
    'quarter': 'Q3 2015',
    'total_engagements': 165,
    'cost_per_engagement': -39
  }, {
    'quarter': 'Q4 2015',
    'total_engagements': 153,
    'cost_per_engagement': -41
  }, {
    'quarter': 'Q1 2016',
    'total_engagements': 208,
    'cost_per_engagement': -56
  }, {
    'quarter': 'Q2 2016',
    'total_engagements': 226,
    'cost_per_engagement': -64
  }, {
    'quarter': 'Q3 2016',
    'total_engagements': 91,
    'cost_per_engagement': -44
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
      return d.total_engagements;
    })
  ]).range([
    0,
    175
  ]);
  const bar_width = 25;
  const bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');
  bar_area.selectAll('rect.stat_one').data(earnings_stats).enter().append('rect').attr('class', 'stat_one').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.total_engagements);
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('y', function(d) {
    return 200 - yScale(d.total_engagements);
  }).on('click', function(d) {
    d3.select('#bar_info').text('Year-over-year change in total ad engagements in ' + d.quarter + ': ' + d.total_engagements + '%');
  });
  bar_area.selectAll('rect.stat_two').data(earnings_stats).enter().append('rect').attr('class', 'stat_two').attr('width', bar_width).attr('height', function(d) {
    return yScale(Math.abs(d.cost_per_engagement));
  }).attr('x', function(d, i) {
    return xScale(earnings_stats.indexOf(d)) + bar_width;
  }).attr('y', function(d) {
    return d.cost_per_engagement > 0 ? 200 - yScale(d.cost_per_engagement) : 200;
  }).on('click', function(d) {
    d3.select('#bar_info').text('Year-over-year change in average cost per ad engagement in ' + d.quarter + ': ' + d.cost_per_engagement + '%');
  });
  bar_area.selectAll('text.x_label').data(earnings_stats).enter().append('text').attr('class', 'axis_label').text(function(d) {
    return d.quarter;
  }).attr('y', 205).attr('x', function(d) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('transform', function(d) {
    return 'rotate(90 ' + (xScale(earnings_stats.indexOf(d))) + ' 205)';
  });
  d3.select('text#y_axis_label').text(d3.max(earnings_stats, function(d) {
    return d.total_engagements;
  }) + '%');
}());
