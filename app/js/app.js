// require('../sass/app.scss');

import * as d3 from 'd3';
import * as $ from 'jQuery';


const data = [{
        id: 'Grading',
        plans: [
            'Perserverance', 'Formative Assesements', 'Summative Assesements', 'Assesement Designs', 'Tasks', 'Feedback', 'Learning Target Reflection', 'Task Reflection', ' Data-Driven Decision Making'
        ]
    }, {
        id: 'College-Going Culture',
        plans: [
            'Perserverance', 'Task Reflection',
        ]
    },

    {
        id: 'High-Quality Work',
        plans: [
            'Tasks', 'Task Reflection',
        ]
    }, {
        id: 'Timeliness and Preparation',
        plans: [
            'Tasks'
        ]
    }, {
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
        id: 'Unit Planning',
        plans: [
            'Portfolio Passages', 'Tasks', 'Task Reflection'
        ]
    }, {
        id: 'Learning Targets',
        plans: [
            'Student-Led Conferences', 'Leveraging Learning Targets', 'Summative Assessments', 'Formative Assessments', 'Tasks', 'Learning Target Reflection'
        ]
    }, {
        id: 'Lesson Design',
        plans: [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions', 'Formative Assessments', 'Tasks'
        ]
    }, {
        id: 'Use of Protocols',
        plans: [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions'
        ]
    }, {
        id: 'Reflection',
        plans: [
            'Collaborative Best Practices',
            'Professional Growth'
        ]
    }, {
        id: 'Task Selection',
        plans: [
            'Student-Led Conferences',
            'Portfolio Passages'
        ]
    }, {
        id: 'Leveraging Learning Targets',
        plans: [
            'Feedback',
        ]
    }, {
        id: 'Teacher as Facilitator',
        plans: [
            'Leveraging Crew',
        ]
    }, {
        id: 'Peer Critique and Critical Thinking',
        plans: [
            'Feedback',
        ]
    }, {
        id: 'Summative Assesements',
        plans: [
            'Reflection', 'Data-Driven Decision Making'
        ]
    }, {
        id: 'Tasks',
        plans: [
            'Visible Environment', 'Student-Led Conferences', 'Use of Protocols', 'Task Selection', 'Leveraging Learning Targets', 'Teacher as Facilitator', 'Peer Critique and Critical Thinking', 'Modification in the Moment', 'Differentiation', 'Asking Questions', 'Perseverance'
        ]
    }, {
        id: 'Learning Target Reflection',
        plans: [
            'Portfolio Passages', 'Perserverance'
        ]
    }, {
        id: 'Task Reflection',
        plans: [
            'Internalizing Routines and Procedures', 'Self-evaluation', 'Student-Led conferences', 'Portfolio Passages'
        ]
    }
];


function fade(opacity) {
    return function(d, i) {
        svg.selectAll("path.chord")
            .filter(function(d) {
                return d.source.index != i && d.target.index != i;
            })
            .transition()
            .style("stroke-opacity", opacity)
            .style("fill-opacity", opacity);
    };
}



// set properties/attributes
const outerRadius = 960 / 2,
    innerRadius = outerRadius - 130;

const chord = d3.layout.chord()
    .padding(.10)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending);

var fill = d3.scale.category20c();

const arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(innerRadius + 20);


const svg = d3.select('.svg-holder').append('svg')
    .attr('width', outerRadius * 2.5)
    .attr('height', outerRadius * 2.5)
    .append('g')
    .attr('transform', "translate(" + outerRadius + "," + outerRadius + ")");


const parseData = (dataset) => {
    var indexByName = d3.map(),
        nameByIndex = d3.map(),
        matrix = [],
        n = 0;

    dataset.forEach((item) => {
        nameByIndex.set(n, item.id);
        indexByName.set(item.id, n++);
    });

    dataset.forEach((item) => {
        let source = indexByName.get(item.id),
            row = matrix[source];

        if (!row) {
            row = matrix[source] = [];
            for (var i = -1; ++i < n;) row[i] = 0;
            item.plans.forEach((d) => {
                row[indexByName.get(d)]++;
            });
        }
    });


    chord.matrix(matrix);


    // draw outer arcs
    var g = svg.selectAll('.group')
        .data(chord.groups)
        .enter().append('g')
        .attr('class', 'group')
        .on('mouseover', fade(0.1))
        .on('mouseout', fade(.80));

    g.append("path")
        .style("fill", function(d) {
            return fill(d.index);
        })
        .style("stroke", function(d) {
            return fill(d.index);
        })
        .attr("d", arc);

    g.append("text")
        .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
        .attr("dy", ".35em")
        .attr("transform", function(d) {
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + (innerRadius + 26) + ")" + (d.angle > Math.PI ? "rotate(180)" : "");
        })
        .style("text-anchor", function(d) {
            return d.angle > Math.PI ? "end" : null;
        })
        .text(function(d) {
            return nameByIndex.get(d.index);
        });

    svg.selectAll("path.chord")
        .data(chord.chords)
        .enter().append("path")
        .attr("class", "chord")
        .style("stroke", function(d) {
            return d3.rgb(fill(d.source.index)).darker();
        })
        .style("fill", function(d) {
            return fill(d.source.index);
        })
        .attr("d", d3.svg.chord().radius(innerRadius));

};

d3.select(self.frameElement).style("height", outerRadius * 2 + "px");




parseData(data);
