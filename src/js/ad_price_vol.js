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

  const bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');

  function plotStat(stat_name, stat_class, stat_label) {
    const drawLine = d3.line()
      .x(function(d) {
        return xScale(earnings_stats.indexOf(d));
      })
      .y(function(d) {
        return 200 - yScale(d[stat_name]);
      });

    bar_area
      .append('path')
      .attr('d', drawLine(earnings_stats))
      .attr('class', stat_class);

    bar_area.selectAll(`circle${[stat_class]}`)
      .data(earnings_stats)
      .enter()
      .append('circle')
      .attr('class', stat_class)
      .attr("cx", function(d) {
        return xScale(earnings_stats.indexOf(d));
      })
      .attr("cy", function(d) {
        return 200 - yScale(d[stat_name]);
      })
      .attr("r", function(d) {
        return 5;
      })
      .on('click', function(d) {
        d3.select('#bar_info').text(`${stat_label} ${(d[stat_name] >= 0) ? `grew ${d[stat_name]}` : `shrank ${d[stat_name]}`}% year-over-year in ${d.quarter}.`);
      });
  }

  plotStat('total_engagements', 'stat_one', 'Number of ad engagements');
  plotStat('cost_per_engagement', 'stat_two', 'Average cost-per-engagement');

  bar_area.selectAll('text.x_label').data(earnings_stats).enter().append('text').attr('class', 'axis_label').text(function(d) {
    return d.quarter;
  }).attr('y', 300).attr('x', function(d) {
    return xScale(earnings_stats.indexOf(d));
  }).attr('transform', function(d) {
    return 'rotate(90 ' + (xScale(earnings_stats.indexOf(d))) + ' 300)';
  });
  d3.select('text#y_axis_label').text(d3.max(earnings_stats, function(d) {
    return d.total_engagements;
  }) + '%');
}());
