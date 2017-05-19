import * as d3 from 'd3';
import * as $ from 'jQuery';

const elements = [{
    element: 'Culture of High Expectations',
    id: '1',
    color: '#62A0CA'
}, {
    element: 'Demanding Curriculum',
    id: '2',
    color: '#FFA556'
}, {
    element: 'Engaging Instruction',
    id: '3',
    color: '#6BBC6B'
}, {
    element: 'Rigorous Assessments',
    id: '4',
    color: '#E26868'
}, {
    element: 'Shared Leadership',
    id: '5',
    color: '#B495D1'
}];

const components = [{
    component: 'College Bound',
    element: '1',
    id: '1'
}, {
    component: 'Character',
    element: '1',
    id: '2'
}, {
    component: 'Student Ownership',
    element: '1',
    id: '3'
}, {
    component: 'Knowledge of Standards and Content',
    element: '2',
    id: '4'
}, {
    component: 'Short-term and Long-term Planning',
    element: '2',
    id: '5'
}, {
    component: 'Student Ownership',
    element: '2',
    id: '6'
}, {
    component: 'Intellectual Engagement - Fostering Curiosity',
    element: '3',
    id: '7'
}, {
    component: 'Responding to Students Needs',
    element: '3',
    id: '8'
}, {
    component: 'Student Ownership',
    element: '3',
    id: '9'
}, {
    component: 'Formative & Summative Assessment',
    element: '4',
    id: '10'
}, {
    component: 'Feedback',
    element: '4',
    id: '11'
}, {
    component: 'Student Ownership',
    element: '4',
    id: '12'
}, {
    component: 'School Development',
    element: '5',
    id: '13'
}, {
    component: 'Team Development',
    element: '5',
    id: '14'
}, {
    component: 'Individual Development',
    element: '5',
    id: '15'
}];

const data = [{
    element: '1',
    component: '1',
    id: 'Grading',
    plans: [
        'Perserverance', 'Formative Assessments', 'Summative Assessments', 'Assesement Designs', 'Tasks', 'Feedback', 'Learning Target Reflection', 'Task Reflection', ' Data-Driven Decision Making'
    ]
}, {
    element: '1',
    component: '1',
    id: 'College-Going Culture',
    plans: [
        'Perserverance', 'Task Reflection',
    ]
}, {
    element: '1',
    component: '1',
    id: 'High-Quality Work',
    plans: [
        'Tasks', 'Task Reflection',
    ]
}, {
    element: '1',
    component: '1',
    id: 'Timeliness and Preparation',
    plans: [
        'Tasks'
    ]
}, {
    element: '1',
    component: '2',
    id: 'Citizenship',
    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Visible Environment',
    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Internalizing Routines and Procedures',
    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Crew',
    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Leveraging Crew',
    plans: []
}, {
    element: '1',
    component: '3',
    id: 'Self-Evaluation',
    plans: []
}, {
    element: '1',
    component: '3',
    id: 'Student-Led Conferences',
    plans: []
}, {
    element: '1',
    component: '3',
    id: 'Portfolio Passages',
    plans: []
}, {
    element: '2',
    component: '4',
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
    element: '2',
    component: '5',
    id: 'Unit Planning',
    plans: [
        'Portfolio Passages', 'Tasks', 'Task Reflection'
    ]
}, {
    element: '2',
    component: '5',
    id: 'Learning Targets',
    plans: [
        'Student-Led Conferences', 'Leveraging Learning Targets', 'Summative Assessments', 'Formative Assessments', 'Tasks', 'Learning Target Reflection'
    ]
}, {
    element: '2',
    component: '5',
    id: 'Lesson Design',
    plans: [
        'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions', 'Formative Assessments', 'Tasks'
    ]
}, {
    element: '2',
    component: '5',
    id: 'Use of Protocols',
    plans: [
        'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions'
    ]
}, {
    element: '2',
    component: '5',
    id: 'Reflection',
    plans: [
        'Collaborative Best Practices',
        'Professional Growth'
    ]
}, {
    element: '2',
    component: '6',
    id: 'Task Selection',
    plans: [
        'Student-Led Conferences',
        'Portfolio Passages'
    ]
}, {
    element: '3',
    component: '7',
    id: 'Leveraging Learning Targets',
    plans: [
        'Feedback',
    ]
}, {
    element: '3',
    component: '7',
    id: 'Teacher as Facilitator',
    plans: [
        'Leveraging Crew',
    ]
}, {
    element: '3',
    component: '7',
    id: 'Peer Critique and Critical Thinking',
    plans: [
        'Feedback',
    ]
}, {
    element: '3',
    component: '8',
    id: 'Modification in the Moment',
    plans: []
}, {
    element: '3',
    component: '8',
    id: 'Differentiation',
    plans: []
}, {
    element: '3',
    component: '9',
    id: 'Asking Questions',
    plans: []
}, {
    element: '3',
    component: '9',
    id: 'Perseverance',
    plans: []
}, {
    element: '4',
    component: '10',
    id: 'Formative Assessments',
    plans: []
}, {
    element: '4',
    component: '10',
    id: 'Summative Assessments',
    plans: [
        'Reflection', 'Data-Driven Decision Making'
    ]
}, {
    element: '4',
    component: '10',
    id: 'Assessment Design',
    plans: []
}, {
    element: '4',
    component: '10',
    id: 'Tasks',
    plans: [
        'Visible Environment', 'Student-Led Conferences', 'Use of Protocols', 'Task Selection', 'Leveraging Learning Targets', 'Teacher as Facilitator', 'Peer Critique and Critical Thinking', 'Modification in the Moment', 'Differentiation', 'Asking Questions', 'Perseverance'
    ]
}, {
    element: '4',
    component: '11',
    id: 'Feedback',
    plans: []
}, {
    element: '4',
    component: '12',
    id: 'Learning Target Reflection',
    plans: [
        'Portfolio Passages', 'Perserverance'
    ]
}, {
    element: '4',
    component: '12',
    id: 'Task Reflection',
    plans: [
        'Internalizing Routines and Procedures', 'Self-evaluation', 'Student-Led conferences', 'Portfolio Passages'
    ]
}, {
    element: '5',
    component: '13',
    id: 'Progress Monitoring',
    plans: []
}, {
    element: '5',
    component: '13',
    id: 'Data-Driven Decision Making',
    plans: []
}, {
    element: '5',
    component: '13',
    id: 'Work Plan Development',
    plans: []
}, {
    element: '5',
    component: '13',
    id: 'Professional Trust (Leaders)',
    plans: []
}, {
    element: '5',
    component: '14',
    id: 'Work Plan Alignment',
    plans: []
}, {
    element: '5',
    component: '14',
    id: 'Collaborative Best Practices',
    plans: []
}, {
    element: '5',
    component: '14',
    id: 'Professional Trust (Teams)',
    plans: []
}, {
    element: '5',
    component: '15',
    id: 'Professional Growth',
    plans: []
}, {
    element: '5',
    component: '15',
    id: 'Professional Trust (Individual)',
    plans: []
}, ];



const indicatorsWithoutConnection = [];

const findNodesWithoutConnection = () => {
    data.forEach((indicator) => {
        if (indicator.plans < 1) {
            indicatorsWithoutConnection.push(indicator);
        }
    });
};


findNodesWithoutConnection();


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


// initialize square matrix for components and stash the unique id for each component
var componentMatrix = [],
    componentIds = {};
for (var i = 0; i < components.length; i++) {
    componentMatrix[i] = [];
    componentIds[components[i].id] = i;
    for (var j = 0; j < components.length; j++) {
        componentMatrix[i][j] = 0;
    }
}
// populate the areas matrix
components.forEach(function(component) {
    data.forEach(function(indicator) {
        componentMatrix[componentIds[indicator.component]][componentIds[component.id]] += parseInt(component.id);
    });
});

// initialize square matrix for elements and stash the unique id for each element
var elementMatrix = [],
    elementIds = {};
for (var i = 0; i < elements.length; i++) {
    elementMatrix[i] = [];
    elementIds[elements[i].id] = i;
    for (var j = 0; j < elements.length; j++) {
        elementMatrix[i][j] = 0;
    }
}
// populate the areas matrix
elements.forEach(function(element) {
    data.forEach(function(indicator) {
        elementMatrix[elementIds[indicator.element]][elementIds[element.id]] += parseInt(element.id);
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


let width, height;

width = height = window.innerWidth * .52;


const outerRadius = Math.min(width, height) / 2 - 20,
    innerRadius = outerRadius - 20,
    currentArea = 0;

const angle = d3.scale.ordinal()
    .domain(d3.range(0, data.length))
    .rangeBands([0, 2 * Math.PI]);

const elementArc = d3.svg.arc()
    .innerRadius(outerRadius - 30)
    .outerRadius(outerRadius);

const elementLayout = d3.layout.chord()
    .padding(0);

const componentArc = d3.svg.arc()
    .innerRadius(outerRadius - 50)
    .outerRadius(outerRadius - 29);

const componentLayout = d3.layout.chord()
    .padding(0);

const indicatorArc = d3.svg.arc()
    .innerRadius(outerRadius - 100)
    .outerRadius(outerRadius - 49)
    .startAngle(function(d, i) {
        return angle(d.index);
    })
    .endAngle(function(d, i) {
        return angle(d.index) + angle.rangeBand();
    });

const indicatorLayout = d3.layout.chord()
    .padding(0);

const chord = d3.svg.chord()
    .radius(outerRadius - 100)
    .startAngle(function(d, i) {
        return angle(d.index) + (angle.rangeBand() / 2) - 0.025;
    })
    .endAngle(function(d, i) {
        return angle(d.index) + (angle.rangeBand() / 2) + 0.025;
    });

// The color scale
const indicatorFill = d3.scale.category20c();
const componentFill = d3.scale.category10();
const elementFill = d3.scale.category10();

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
    componentLayout.matrix(componentMatrix);
    elementLayout.matrix(elementMatrix);

    var indicatorGroups = svg.selectAll('g.indicator-group')
        .data(indicatorLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'indicator-group')
        .on('mouseover', fade(0.05))
        .on('mouseout', fade(0.80));


    indicatorGroups.append('svg:path')
        // .style('fill', function(d, i) {
        //     colors.push(indicatorFill(i));
        //     return indicatorFill(i);
        // })
        .style('fill', 'white')
        .style('stroke', 'grey')
        .style('stroke-width', '1')
        .attr('id', function(d, i) {
            return 'indicator-group' + d.index + '-' + j;
        })
        .attr('d', indicatorArc)
        .append('svg:title')
        .text(function(d, i) {
            return data[i].id;
        });


    // add component groups
    var componentGroups = svg.selectAll('g.component-group-main')
        .data(componentLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'component-group-main');

    // Add the component group arc
    componentGroups.append('svg:path')
        // .style('fill', function(d, i) {
        //     return componentFill(d.index);
        // })
        .style('fill', 'white')
        .style('stroke', 'grey')
        .style('stroke-width', '1')
        .attr('id', function(d, i) {
            return 'component-group-main' + d.index + '-' + j;
        })
        .attr('d', componentArc)
        .append('svg:title')
        .text(function(d, i) {
            return components[i].component;
        });


    // add component names
    componentGroups.append('svg:text')
        .attr('x', 6)
        .attr('dy', 15)
        .append('svg:textPath')
        .attr('xlink:href', function(d) {
            return '#component-group-main' + d.index + '-' + j;
        })
        .text(function(d, i) {
            return components[i].component;
        });

    // add element groups
    var elementGroups = svg.selectAll('g.element-group-main')
        .data(elementLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'element-group-main');

    // Add the element group arc
    elementGroups.append('svg:path')
        .style('fill', function(d, i) {
            return elements[i].color;
        })
        .attr('id', function(d, i) {
            return 'element-group-main' + d.index + '-' + j;
        })
        .attr('d', elementArc)
        .append('svg:title')
        .text(function(d, i) {
            return elements[i].element;
        });

    // add element names
    elementGroups.append('svg:text')
        .attr('x', 6)
        .attr('dy', 20)
        .append('svg:textPath')
        .attr('xlink:href', function(d) {
            return '#element-group-main' + d.index + '-' + j;
        })
        .text(function(d, i) {
            return elements[i].element;
        });

    // Add chords between indicator
    svg.selectAll('path.chord')
        .data(indicatorLayout.chords)
        .enter()
        .append('svg:path')
        .style('fill', function(d, i) {
            return elements[(data[d.source.index].element) - 1].color;
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
