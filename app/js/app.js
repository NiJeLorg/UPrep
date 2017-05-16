// require('../sass/app.scss');

import * as d3 from 'd3';
import * as $ from 'jQuery';


const groupNames = ['Culture of High Expectations', 'Demanding Curriculum', 'Engaging Instruction', 'Rigorous Assesements'];

const data = [{
        group: 'Culture of High Expectations',
        id: 'Grading',
        plans: [
            'Perserverance', 'Formative Assesements', 'Summative Assesements', 'Assesement Designs', 'Tasks', 'Feedback', 'Learning Target Reflection', 'Task Reflection', ' Data-Driven Decision Making'
        ]
    }, {
        group: 'Culture of High Expectations',
        id: 'College-Going Culture',
        plans: [
            'Perserverance', 'Task Reflection',
        ]
    },

    {
        group: 'Culture of High Expectations',
        id: 'High-Quality Work',
        plans: [
            'Tasks', 'Task Reflection',
        ]
    }, {
        group: 'Culture of High Expectations',
        id: 'Timeliness and Preparation',
        plans: [
            'Tasks'
        ]
    }, {
        group: 'Demanding Curriculum',
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
        group: 'Demanding Curriculum',
        id: 'Unit Planning',
        plans: [
            'Portfolio Passages', 'Tasks', 'Task Reflection'
        ]
    }, {
        group: 'Demanding Curriculum',
        id: 'Learning Targets',
        plans: [
            'Student-Led Conferences', 'Leveraging Learning Targets', 'Summative Assessments', 'Formative Assessments', 'Tasks', 'Learning Target Reflection'
        ]
    }, {
        group: 'Demanding Curriculum',
        id: 'Lesson Design',
        plans: [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions', 'Formative Assessments', 'Tasks'
        ]
    }, {
        group: 'Demanding Curriculum',
        id: 'Use of Protocols',
        plans: [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions'
        ]
    }, {
        group: 'Demanding Curriculum',
        id: 'Reflection',
        plans: [
            'Collaborative Best Practices',
            'Professional Growth'
        ]
    }, {
        group: 'Demanding Curriculum',
        id: 'Task Selection',
        plans: [
            'Student-Led Conferences',
            'Portfolio Passages'
        ]
    }, {
        group: 'Engaging Instruction',
        id: 'Leveraging Learning Targets',
        plans: [
            'Feedback',
        ]
    }, {
        group: 'Engaging Instruction',
        id: 'Teacher as Facilitator',
        plans: [
            'Leveraging Crew',
        ]
    }, {
        group: 'Engaging Instruction',
        id: 'Peer Critique and Critical Thinking',
        plans: [
            'Feedback',
        ]
    }, {
        group: 'Rigorous Assesements',
        id: 'Summative Assesements',
        plans: [
            'Reflection', 'Data-Driven Decision Making'
        ]
    }, {
        group: 'Rigorous Assesements',
        id: 'Tasks',
        plans: [
            'Visible Environment', 'Student-Led Conferences', 'Use of Protocols', 'Task Selection', 'Leveraging Learning Targets', 'Teacher as Facilitator', 'Peer Critique and Critical Thinking', 'Modification in the Moment', 'Differentiation', 'Asking Questions', 'Perseverance'
        ]
    }, {
        group: 'Rigorous Assesements',
        id: 'Learning Target Reflection',
        plans: [
            'Portfolio Passages', 'Perserverance'
        ]
    }, {
        group: 'Rigorous Assesements',
        id: 'Task Reflection',
        plans: [
            'Internalizing Routines and Procedures', 'Self-evaluation', 'Student-Led conferences', 'Portfolio Passages'
        ]
    }
];



const groupRadius = 960 / 2,
    indicatorRadius = groupRadius - 130,
    relativeIndicatorRadius = indicatorRadius - 20;


const svg = d3.select('.svg-holder').append('svg')
    .attr('width', groupRadius * 2.5)
    .attr('height', groupRadius * 2.5)
    .append('g')
    .attr('transform', "translate(" + groupRadius + "," + groupRadius + ")");


const fade = (opacity) => {
    return function(d, i) {
        svg.selectAll("path.chord")
            .filter(function(d) {
                return d.source.index != i && d.target.index != i;
            })
            .transition()
            .style("stroke-opacity", opacity)
            .style("fill-opacity", opacity);
    };
};

const createFirstChordDiagram = () => {

    const chord = d3.layout.chord()
        .padding(0)
        .sortSubgroups(d3.descending)
        .sortChords(d3.descending);

    var fill = d3.scale.category20c();

    const arc = d3.svg.arc()
        .innerRadius(relativeIndicatorRadius)
        .outerRadius(relativeIndicatorRadius + 20);


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

        // g.append("text")
        //     .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
        //     .attr("dy", ".35em")
        //     .attr("transform", function(d) {
        //         return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + (innerRadius + 26) + ")" + (d.angle > Math.PI ? "rotate(180)" : "");
        //     })
        //     .style("text-anchor", function(d) {
        //         return d.angle > Math.PI ? "end" : null;
        //     })
        //     .text(function(d) {
        //         return nameByIndex.get(d.index);
        //     });

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
            .attr("d", d3.svg.chord().radius(relativeIndicatorRadius));

    };

    d3.select(self.frameElement).style("height", indicatorRadius * 2 + "px");


    parseData(data);
};


const createAnotherChordDiagram = () => {


    const chord = d3.layout.chord()
        .padding(0)
        .sortSubgroups(d3.descending)
        .sortChords(d3.descending);

    var fill = d3.scale.category10();

    const arc = d3.svg.arc()
        .innerRadius(indicatorRadius)
        .outerRadius(indicatorRadius + 20);


    const parseData = (dataset) => {

        var indexByName = d3.map(),
            nameByIndex = d3.map(),
            matrix = [],
            n = 0;

        groupNames.forEach((item) => {
            nameByIndex.set(n, item);
            indexByName.set(item, n++);
        });

        groupNames.forEach((item) => {
            let source = indexByName.get(item),
                row = matrix[source];

            if (!row) {
                row = matrix[source] = [];
                for (var i = -1; ++i < n;) row[i] = 0;
                dataset.forEach((d) => {
                    row[indexByName.get(d.group)]++;
                });
            }
        });



        chord.matrix(matrix);


        // draw outer arcs
        var g = svg.selectAll('.another-group')
            .data(chord.groups)
            .enter().append('g')
            .attr('class', 'group');

        g.append("path")
            .style("fill", function(d) {
                return fill(d.index);
            })
            .style("stroke", function(d) {
                return fill(d.index);
            })
            .attr("d", arc);

        // g.append("text")
        //     .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
        //     .attr("dy", ".35em")
        //     .attr("transform", function(d) {
        //         return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + (innerRadius + 26) + ")" + (d.angle > Math.PI ? "rotate(180)" : "");
        //     })
        //     .style("text-anchor", function(d) {
        //         return d.angle > Math.PI ? "end" : null;
        //     })
        //     .text(function(d) {
        //         return nameByIndex.get(d.index);
        //     });

        // svg.selectAll("path.chord")
        //     .data(chord.chords)
        //     .enter().append("path")
        //     .attr("class", "chord")
        //     .style("stroke", function(d) {
        //         return d3.rgb(fill(d.source.index)).darker();
        //     })
        //     .style("fill", function(d) {
        //         return fill(d.source.index);
        //     })
        //     .attr("d", d3.svg.chord().radius(innerRadius));

    };

    // d3.select(self.frameElement).style("height", outerRadius * 2 + "px");



    parseData(data);
};


createFirstChordDiagram();
createAnotherChordDiagram();
