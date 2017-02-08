(function() {
  const earnings_stats = [{
    "quarter": "Q2 2013",
    "maus_qoq": 6.86,
    "mausUS_qoq": 2.08,
    "maus_yoy": "",
    "mausUS_yoy": ""
  }, {
    "quarter": "Q3 2013",
    "maus_qoq": 6.42,
    "mausUS_qoq": 8.16,
    "maus_yoy": "",
    "mausUS_yoy": ""
  }, {
    "quarter": "Q4 2013",
    "maus_qoq": 3.88,
    "mausUS_qoq": 1.89,
    "maus_yoy": "",
    "mausUS_yoy": ""
  }, {
    "quarter": "Q1 2014",
    "maus_qoq": 5.81,
    "mausUS_qoq": 5.56,
    "maus_yoy": 25,
    "mausUS_yoy": 18.75
  }, {
    "quarter": "Q2 2014",
    "maus_qoq": 6.27,
    "mausUS_qoq": 5.26,
    "maus_yoy": 24.31,
    "mausUS_yoy": 22.45
  }, {
    "quarter": "Q3 2014",
    "maus_qoq": 4.8,
    "mausUS_qoq": 5,
    "maus_yoy": 22.41,
    "mausUS_yoy": 18.87
  }, {
    "quarter": "Q4 2014",
    "maus_qoq": 1.41,
    "mausUS_qoq": 0,
    "maus_yoy": 19.5,
    "mausUS_yoy": 16.67
  }, {
    "quarter": "Q1 2015",
    "maus_qoq": 4.86,
    "mausUS_qoq": 3.17,
    "maus_yoy": 18.43,
    "mausUS_yoy": 14.04
  }, {
    "quarter": "Q2 2015",
    "maus_qoq": 0.66,
    "mausUS_qoq": 0,
    "maus_yoy": 12.18,
    "mausUS_yoy": 8.33
  }, {
    "quarter": "Q3 2015",
    "maus_qoq": 0.99,
    "mausUS_qoq": 1.54,
    "maus_yoy": 8.1,
    "mausUS_yoy": 4.76
  }, {
    "quarter": "Q4 2015",
    "maus_qoq": -0.65,
    "mausUS_qoq": -1.52,
    "maus_yoy": 5.9,
    "mausUS_yoy": 3.17
  }, {
    "quarter": "Q1 2016",
    "maus_qoq": 1.64,
    "mausUS_qoq": 0,
    "maus_yoy": 2.65,
    "mausUS_yoy": 0
  }, {
    "quarter": "Q2 2016",
    "maus_qoq": 0.97,
    "mausUS_qoq": 1.54,
    "maus_yoy": 2.96,
    "mausUS_yoy": 1.54
  }, {
    "quarter": "Q3 2016",
    "maus_qoq": 1.28,
    "mausUS_qoq": 1.52,
    "maus_yoy": 3.26,
    "mausUS_yoy": 1.52
  }];
  // SEPARATE QUARTERLY AND YEARLY STATS
  const qoq_stats = earnings_stats;
  const yoy_stats = earnings_stats.slice(3);
  // DISPLAY YEAR-OVER-YEAR CHART ON LOAD
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yearly_btn').focus();
    buildChart(yoy_stats, 'yoy', 'year-over-year');
  });
  // TOGGLE BETWEEN CHARTS
  document.getElementById('quarterly_btn').addEventListener('click', () => {
    buildChart(qoq_stats, 'qoq', 'quarter-over-quarter');
  });
  document.getElementById('yearly_btn').addEventListener('click', () => {
    buildChart(yoy_stats, 'yoy', 'year-over-year');
  });

  function buildChart(full_stats, stat_type, change_type) {
    // RESET CHART
    d3.select('#bar_area').remove();
    d3.select("#bar_info").text('Click dots to see figures');
    const bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');

    // SET X AXIS SCALE
    const xScale = d3.scaleLinear().domain([0, full_stats.length - 1]).range([
      25,
      500
    ]);

    // SET Y AXIS SCALE
    const yScale = d3.scaleLinear().domain([
      0,
      25
    ]).range([
      0,
      225
    ]);

    const maus_stat = `maus_${stat_type}`;
    const mausUS_stat = `mausUS_${stat_type}`;

    plotStat(maus_stat, 'stat_one', 'Global monthly active users', change_type);
    plotStat(mausUS_stat, 'stat_two', 'U.S. monthly active users', change_type);

    function plotStat(stat_name, stat_class, stat_label, change_type) {
      const drawLine = d3.line()
        .x(function(d) {
          return xScale(full_stats.indexOf(d));
        })
        .y(function(d) {
          return 250 - yScale(d[stat_name]);
        });

      bar_area
        .append('path')
        .attr('d', drawLine(full_stats))
        .attr('class', stat_class);

      bar_area.selectAll(`circle${[stat_class]}`)
        .data(full_stats)
        .enter()
        .append('circle')
        .attr('class', stat_class)
        .attr("cx", function(d) {
          return xScale(full_stats.indexOf(d));
        })
        .attr("cy", function(d) {
          return 250 - yScale(d[stat_name]);
        })
        .attr("r", function(d) {
          return 5;
        })
        .on('click', function(d) {
          d3.select('#bar_info').text(`${stat_label} ${(d[stat_name] >= 0) ? `grew ${d[stat_name]}` : `shrank ${d[stat_name]}`}% ${change_type} in ${d.quarter}.`);
        });
    }

    // SET X AXIS ENTRY LABELS
    bar_area.selectAll('text.x_label').data(full_stats).enter().append('text').attr('class', 'axis_label').text(function(d) {
      return d.quarter;
    }).attr('y', 305).attr('x', function(d) {
      return xScale(full_stats.indexOf(d));
    }).attr('transform', function(d) {
      return 'rotate(90 ' + xScale(full_stats.indexOf(d)) + ' 305)';
    });

    // SET Y AXIS LABEL
    d3.select('text#y_axis_label').text('25%');

    // STORE STATUS OF EACH LINE
    const stats_shown = ['global', 'us'];

    // SHOW/HIDE LINE WHEN CHECKBOX IS CHECKED/UNCHECKED
    document.getElementById('global_box').addEventListener('change', () => {
      if (stats_shown.indexOf('global') === -1) {
        stats_shown.push('global');
        plotStat(maus_stat, 'stat_one', 'Global monthly active users', change_type);
      } else {
        stats_shown.splice(stats_shown.indexOf('global'), 1);
        d3.select('path.stat_one').remove();
        d3.selectAll('circle.stat_one').remove();
      }
    });

    document.getElementById('us_box').addEventListener('change', () => {
      if (stats_shown.indexOf('us') === -1) {
        stats_shown.push('us');
        plotStat(mausUS_stat, 'stat_two', 'U.S. monthly active users', change_type);
      } else {
        stats_shown.splice(stats_shown.indexOf('us'), 1);
        d3.select('path.stat_two').remove();
        d3.selectAll('circle.stat_two').remove();
      }
    });
  }
})();
