import * as d3 from 'd3';
import * as $ from 'jQuery';

const areas = [{
    metric: 'Culture of High Expectations',
    id: '1'
}, {
    metric: 'Demanding Curriculum',
    id: '2'
}, {
    metric: 'Engaging Instruction',
    id: '3'
}, {
    metric: 'Rigorous Assessments',
    id: '4'
}];

const data = [{
        area: '1',
        id: 'Grading',
        plans: [
            'Perserverance', 'Formative Assesements', 'Summative Assesements', 'Assesement Designs', 'Tasks', 'Feedback', 'Learning Target Reflection', 'Task Reflection', ' Data-Driven Decision Making'
        ]
    }, {
        area: '1',
        id: 'College-Going Culture',
        plans: [
            'Perserverance', 'Task Reflection',
        ]
    },

    {
        area: '1',
        id: 'High-Quality Work',
        plans: [
            'Tasks', 'Task Reflection',
        ]
    }, {
        area: '1',
        id: 'Timeliness and Preparation',
        plans: [
            'Tasks'
        ]
    }, {
        area: '2',
        id: 'Interconnectedness of Standards',
        plans: [
            'Leveraging Learning Targets',
            'Teacher as Facilitator',
            'Peer Critique and Critical Thinking',
            'Differentiation',
            'Summative Assessments',
            'Assessment Design',
            'Tasks'
        ]
    }, {
        area: '2',
        id: 'Unit Planning',
        plans: [
            'Portfolio Passages', 'Tasks', 'Task Reflection'
        ]
    }, {
        area: '2',
        id: 'Learning Targets',
        plans: [
            'Student-Led Conferences', 'Leveraging Learning Targets', 'Summative Assessments', 'Formative Assessments', 'Tasks', 'Learning Target Reflection'
        ]
    }, {
        area: '2',
        id: 'Lesson Design',
        plans: [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions', 'Formative Assessments', 'Tasks'
        ]
    }, {
        area: '2',
        id: 'Use of Protocols',
        plans: [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions'
        ]
    }, {
        area: '2',
        id: 'Reflection',
        plans: [
            'Collaborative Best Practices',
            'Professional Growth'
        ]
    }, {
        area: '2',
        id: 'Task Selection',
        plans: [
            'Student-Led Conferences',
            'Portfolio Passages'
        ]
    }, {
        area: '3',
        id: 'Leveraging Learning Targets',
        plans: [
            'Feedback',
        ]
    }, {
        area: '3',
        id: 'Teacher as Facilitator',
        plans: [
            'Leveraging Crew',
        ]
    }, {
        area: '3',
        id: 'Peer Critique and Critical Thinking',
        plans: [
            'Feedback',
        ]
    }, {
        area: '4',
        id: 'Summative Assesements',
        plans: [
            'Reflection', 'Data-Driven Decision Making'
        ]
    }, {
        area: '4',
        id: 'Tasks',
        plans: [
            'Visible Environment', 'Student-Led Conferences', 'Use of Protocols', 'Task Selection', 'Leveraging Learning Targets', 'Teacher as Facilitator', 'Peer Critique and Critical Thinking', 'Modification in the Moment', 'Differentiation', 'Asking Questions', 'Perseverance'
        ]
    }, {
        area: '4',
        id: 'Learning Target Reflection',
        plans: [
            'Portfolio Passages', 'Perserverance'
        ]
    }, {
        area: '4',
        id: 'Task Reflection',
        plans: [
            'Internalizing Routines and Procedures', 'Self-evaluation', 'Student-Led conferences', 'Portfolio Passages'
        ]
    }
];


var indicators = [],
    indicatorObj = {};
for (var i = 0; i < data.length; i++) {
    indicators[i] = [];
    indicatorObj[data[i].id] = i;
    for (var j = 0; j < data.length; j++) {
        indicators[i][j] = 0;
    }
}


// populate the indicators matrix
data.forEach(function(indicator) {
    indicator.plans.forEach(function(similarInidcator) {
        if (indicators[indicatorObj[indicator.id]][indicatorObj[similarInidcator]] !== undefined) {
            indicators[indicatorObj[indicator.id]][indicatorObj[similarInidcator]] = 1;
        }
    });
});


// initialize square matrix for areas and stash the unique id for each area
var areaMatrix = [],
    areaIds = {};
for (var i = 0; i < areas.length; i++) {
    areaMatrix[i] = [];
    areaIds[areas[i].id] = i;
    for (var j = 0; j < areas.length; j++) {
        areaMatrix[i][j] = 0;
    }
}
// populate the areas matrix
areas.forEach(function(area) {
    data.forEach(function(indicator) {
        areaMatrix[areaIds[indicator.area]][areaIds[area.id]] += parseInt(area.id);
    });
});



const fade = (opacity) => {
    return function(d, i) {
        svg.selectAll('path.chord')
            .filter(function(d) {
                return d.source.index != i && d.target.index != i;
            })
            .transition()
            .style('stroke-opacity', opacity)
            .style('fill-opacity', opacity);
    };
};

const width = 900,
    height = 900,
    outerRadius = Math.min(width, height) / 2 - 20,
    innerRadius = outerRadius - 20,
    currentArea = 0;

const angle = d3.scale.ordinal()
    .domain(d3.range(0, data.length))
    .rangeBands([0, 2 * Math.PI]);

const areasArc = d3.svg.arc()
    .innerRadius(outerRadius - 14)
    .outerRadius(outerRadius + 20);

const areasLayout = d3.layout.chord()
    .padding(0);

const indicatorArc = d3.svg.arc()
    .innerRadius(innerRadius - 24)
    .outerRadius(outerRadius - 14)
    .startAngle(function(d, i) {
        return angle(d.index);
    })
    .endAngle(function(d, i) {
        return angle(d.index) + angle.rangeBand();
    });

const indicatorLayout = d3.layout.chord()
    .padding(0);

const chord = d3.svg.chord()
    .radius(innerRadius - 24)
    .startAngle(function(d, i) {
        return angle(d.index) + (angle.rangeBand() / 2) - 0.05;
    })
    .endAngle(function(d, i) {
        return angle(d.index) + (angle.rangeBand() / 2) + 0.05;
    });

// The color scale
const indicatorFill = d3.scale.category20c();
const areaFill = d3.scale.category10();

// attach svg object to the content well
var svg = d3.select('.svg-holder').selectAll('div')
    .data([indicators])
    .enter()
    .append('div')
    .style('width', width + 'px')
    .style('height', height + 'px')
    .append('svg:svg')
    .attr('width', width)
    .attr('height', height)
    .append('svg:g')
    .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")");

var colors = [];

svg.each(function(matrix, j) {
    var svg = d3.select(this);
    indicatorLayout.matrix(indicators);
    areasLayout.matrix(areaMatrix);

    var indicatorGroups = svg.selectAll('g.indicator-group')
        .data(indicatorLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'indicator-group')
        .on('mouseover', fade(0.1))
        .on('mouseout', fade(0.80));


    indicatorGroups.append('svg:path')
        .style('fill', function(d, i) {
            colors.push(indicatorFill(i));
            return indicatorFill(i);
        })
        .attr('id', function(d, i) {
            return 'indicator-group' + d.index + '-' + j;
        })
        .attr('d', indicatorArc)
        .append('svg:title')
        .text(function(d, i) {
            return data[i].id;
        });


    // add area groups
    var areaGroups = svg.selectAll('g.area-group-main')
        .data(areasLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'area-group-main');

    // Add the area group arc
    areaGroups.append('svg:path')
        .style('fill', function(d, i) {
            return areaFill(d.index);
        })
        .attr('id', function(d, i) {
            return 'area-group-main' + d.index + '-' + j;
        })
        .attr('d', areasArc)
        .append('svg:title')
        .text(function(d, i) {
            return areas[i].metric;
        });


    // add area names
    areaGroups.append('svg:text')
        .attr('x', 6)
        .attr('dy', 15)
        .append('svg:textPath')
        .attr('xlink:href', function(d) {
            return '#area-group-main' + d.index + '-' + j;
        })
        .text(function(d, i) {
            return areas[i].metric;
        });

    // Add chords between indicator
    svg.selectAll('path.chord')
        .data(indicatorLayout.chords)
        .enter()
        .append('svg:path')
        .style('fill', function(d, i) {
            // temporary add d just to render grey color for the chords instead
            return indicatorFill(d);

        })
        .attr('class', 'chord')
        .attr('d', chord)
        .append('svg:title')
        .text(function(d) {
            var title = data[d.source.index].id + ' and ' + data[d.target.index].id + ": " + d.source.value + " plan";
            if (d.source.value > 1) {
                title = title + 's';
            }
            return title;
        });

    // add faculty names
    indicatorGroups.append('svg:text')
        .attr('x', 6)
        .attr('dy', 15)
        .append('svg:textPath')
        .attr("xlink:href", function(d) {
            return "#indicator-group" + d.index + "-" + j;
        })
        .text(function(d, i) {
            return data[i].id;
        });

});
