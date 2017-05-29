import * as d3 from 'd3';

const elements = [{
    element: 'Culture of High Expectations',
    id: '1',
    color: '#F1C232'
}, {
    element: 'Demanding Curriculum',
    id: '2',
    color: '#E69138'
}, {
    element: 'Engaging Instruction',
    id: '3',
    color: '#45818E'
}, {
    element: 'Rigorous Assessments',
    id: '4',
    color: '#674EA7'
}, {
    element: 'Shared Leadership',
    id: '5',
    color: '#6AA84F'
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
        ['Perserverance', '3'],
        ['Formative Assessments', '2'],
        ['Assesement Designs', '4'],
        ['Tasks', '0'],
        ['Feedback', '3'],
        ['Learning Target Reflection', '2'],
        ['Task Reflection', '3'],
        ['Data-Driven Decision Making', '4']
    ]
}, {
    element: '1',
    component: '1',
    id: 'College-Going Culture',
    plans: [
        ['Perserverance', '3'],
        ['Task Reflection', '0'],
    ]
}, {
    element: '1',
    component: '1',
    id: 'High-Quality Work',
    plans: [
        ['Tasks', '2'],
        ['Task Reflection', '4'],
    ]
}, {
    element: '1',
    component: '1',
    id: 'Timeliness and Preparation',
    plans: [
        ['Tasks', '0']
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
        ['Leveraging Learning Targets', '3'],
        ['Teacher as Facilitator', '3'],
        ['Peer Critique and Critical Thinking', '2'],
        ['Differentiation', '3'],
        ['Summative Assessments', '4'],
        ['Assessment Design', '4'],
        ['Tasks', '4']
    ]
}, {
    element: '2',
    component: '5',
    id: 'Unit Planning',
    plans: [
        ['Portfolio Passages', '2'],
        ['Tasks', '2'],
        ['Task Reflection', '3']
    ]
}, {
    element: '2',
    component: '5',
    id: 'Learning Targets',
    plans: [
        ['Student-Led Conferences', '3'],
        ['Leveraging Learning Targets', '4'],
        ['Summative Assessments', '2'],
        ['Formative Assessments', '4'],
        ['Tasks', '4'],
        ['Learning Target Reflection', '3']
    ]
}, {
    element: '2',
    component: '5',
    id: 'Lesson Design',
    plans: [
        ['Teacher as Facilitator', '2'],
        ['Modification in the Moment', '2'],
        ['Asking Questions', '4'],
        ['Formative Assessments', '2'],
        ['Tasks', '1']
    ]
}, {
    element: '2',
    component: '5',
    id: 'Use of Protocols',
    plans: [
        ['Teacher as Facilitator', '3'],
        ['Modification in the Moment', '0'],
        ['Asking Questions', '4']
    ]
}, {
    element: '2',
    component: '5',
    id: 'Reflection',
    plans: [
        ['Collaborative Best Practices', '4'],
        ['Professional Growth', '4']
    ]
}, {
    element: '2',
    component: '6',
    id: 'Task Selection',
    plans: [
        ['Student-Led Conferences', '1'],
        ['Portfolio Passages', '2']
    ]
}, {
    element: '3',
    component: '7',
    id: 'Leveraging Learning Targets',
    plans: [
        ['Feedback', '1'],
    ]
}, {
    element: '3',
    component: '7',
    id: 'Teacher as Facilitator',
    plans: [
        ['Leveraging Crew', '1'],
    ]
}, {
    element: '3',
    component: '7',
    id: 'Peer Critique and Critical Thinking',
    plans: [
        ['Feedback', '3'],
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
        ['Reflection', '3'],
        ['Data-Driven Decision Making', '4']
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
        ['Visible Environment', '3'],
        ['Student-Led Conferences', '4'],
        ['Use of Protocols', '4'],
        ['Task Selection', '4'],
        ['Leveraging Learning Targets', '2'],
        ['Teacher as Facilitator', '4'],
        ['Peer Critique and Critical Thinking', '4'],
        ['Modification in the Moment', '3'],
        ['Differentiation', '4'],
        ['Asking Questions', '3'],
        ['Perseverance', '4']
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
        ['Portfolio Passages', '3'],
        ['Perserverance', '3']
    ]
}, {
    element: '4',
    component: '12',
    id: 'Task Reflection',
    plans: [
        ['Internalizing Routines and Procedures', '0'],
        ['Self-evaluation', '2'],
        ['Student-Led conferences', '4'],
        ['Portfolio Passages', '4']
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
        if (indicators[indicatorObj[indicator.id]][indicatorObj[similarInidcator[0]]] !== undefined) {
            indicators[indicatorObj[indicator.id]][indicatorObj[similarInidcator[0]]] = 1;
        }
    });
});



console.log(indicators);

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

const showCorrespondingIndicatorChords = (state) => {

    return (indicator, index) => {
        if (state) {
            svg.selectAll('path.chord')
                .filter((d, i) => {
                    if (d.source.index === index) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .transition()
                .style('opacity', 1);
        } else {
            svg.selectAll('path.chord')
                .filter((d, i) => {
                    if (d.source.index === index) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .transition()
                .style('opacity', 0.03);
        }
    };
};



const showCorrespondingIndicatorChordsComponent = (state) => {
    return (component, index) => {
        if (state) {
            svg.selectAll('path.chord')
                .filter((d, i) => {
                    if (components[index].id === data[d.source.index].component) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .style('opacity', 1);
        } else {
            svg.selectAll('path.chord')
                .filter((d, i) => {
                    if (components[index].id === data[d.source.index].component) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .style('opacity', 0.03);
        }

    };

};



const showCorrespondingIndicatorChordsElement = (state) => {
    return (element, index) => {

        if (state) {
            svg.selectAll('path.chord')
                .filter((d, i) => {
                    if (elements[index].id === data[d.source.index].element) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .style('opacity', 1);
        } else {
            svg.selectAll('path.chord')
                .filter((d, i) => {
                    if (elements[index].id === data[d.source.index].element) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .style('opacity', 0.03);
        }

    };

};


const makeOutlineBolderIndicator = (state) => {
    return (d, i) => {

        if (state) {

            d3.selectAll('.indicator-group > path')
                .filter((d) => {
                    if (d.index === i) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .transition()
                .style('fill', '#eaeaea')
                .style('stroke-width', '2');
        } else {
            d3.selectAll('.indicator-group > path')
                .filter((d) => {
                    if (d.index === i) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .transition()
                .style('stroke-width', '1')
                .style('fill', '#fff');
        }


    };

};


const makeOutlineBolderComponent = (state) => {
    return (d, i) => {

        if (state) {

            d3.selectAll('.component-group-main > path')
                .filter((d) => {
                    if (d.index === i) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .transition()
                .style('fill', '#eaeaea')
                .style('stroke-width', '2');
        } else {
            d3.selectAll('.component-group-main > path')
                .filter((d) => {
                    if (d.index === i) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .transition()
                .style('fill', '#fff')
                .style('stroke-width', '1');
        }


    };

};


const makeOutlineBolderElement = (state) => {
    return (d, i) => {

        if (state) {

            d3.selectAll('.element-group-main > path')
                .filter((d) => {
                    if (d.index === i) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .transition()
                .style('fill-opacity', '1')
                .style('font-weight', 'bolder');
        } else {
            d3.selectAll('.element-group-main > path')
                .filter((d) => {
                    if (d.index === i) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .transition()
                .style('fill-opacity', '0.7')
                .style('font-weight', 'regular');
        }


    };

};









const wrap = (text, width) => {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 12.0, // px
            y = text.attr('y'),
            dy = parseFloat(text.attr('dy')),
            tspan = text.text(null).append('tspan').attr('x', 5).attr('y', y).attr('dy', dy);
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(' '));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(' '));
                line = [word];
                tspan = text.append('tspan').attr('x', 5).attr('y', y).attr('dy', lineHeight + dy).text(word);
            }
        }
    });
};


let width, height;

width = height = window.innerHeight * 0.97;

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
    .innerRadius(outerRadius - 100)
    .outerRadius(outerRadius - 30);

const componentLayout = d3.layout.chord()
    .padding(0);

const indicatorArc = d3.svg.arc()
    .innerRadius(outerRadius - 200)
    .outerRadius(outerRadius - 100)
    .startAngle(function(d, i) {
        return angle(d.index);
    })
    .endAngle(function(d, i) {
        return angle(d.index) + angle.rangeBand();
    });

const indicatorLayout = d3.layout.chord()
    .padding(0);

const chord = d3.svg.chord()
    .radius(outerRadius - 200)
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
        .on('mouseover', showCorrespondingIndicatorChords()(0))
        .on('mouseout', showCorrespondingIndicatorChords()(1));


    indicatorGroups.append('svg:path')
        .style('fill', 'white')
        .style('stroke', 'grey')
        .style('stroke-width', '1')
        .on('mouseover', makeOutlineBolderIndicator(1))
        .on('mouseout', makeOutlineBolderIndicator(0))
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
        .attr('class', 'component-group-main')
        .on('mouseover', showCorrespondingIndicatorChordsComponent(0))
        .on('mouseout', showCorrespondingIndicatorChordsComponent(1));

    // Add the component group arc
    componentGroups.append('svg:path')
        .style('fill', 'white')
        .style('stroke', 'grey')
        .style('stroke-width', '1')
        .on('mouseover', makeOutlineBolderComponent(1))
        .on('mouseout', makeOutlineBolderComponent(0))
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
        .attr('x', 0)
        .attr('dy', 35)
        .attr('font-size', function(d, i) {
            if (components[i].id == 7 || components[i].id == 8 || components[i].id == 9 || components[i].id == 10 || components[i].id == 11 || components[i].id == 12) {
                return 11
            } else {
                return 14
            }
        })
        .append('svg:textPath')
        .attr("startOffset", function(d, i) {
            if (components[i].id == 9 || components[i].id == 11 || components[i].id == 12 || components[i].id == 15) {
                return '1%'
            } else if (components[i].id == 10) {
                return '2.5%'
            } else if ((d.endAngle - d.startAngle) > 0.5) {
                return "20.5%"
            } else {
                return "18%"
            }
        })
        .style("text-anchor", function(d, i) {
            if (components[i].id == 9 || components[i].id == 10 || components[i].id == 11 || components[i].id == 12 || components[i].id == 15) {
                return 'start'
            } else {
                return "middle"
            }
        })
        .attr('xlink:href', function(d) {
            return '#component-group-main' + d.index + '-' + j;
        })
        .text(function(d, i) {
            if (components[i].id != 4 && components[i].id != 6 && components[i].id != 7 && components[i].id != 8 && components[i].id != 15)
                return components[i].component;
        });

    componentGroups.append('svg:text')
        .attr("dy", 0)
        .attr('font-size', 10)
        .attr("transform", function(d, i) {
            var addToAngle;
            if (components[i].id == 7) {
                addToAngle = 30;
            } else if (components[i].id == 8 || components[i].id == 15) {
                addToAngle = 25;
            } else {
                addToAngle = 8;
            }
            return "rotate(" + (((d.startAngle) * 180 + addToAngle) / Math.PI - 90) + ") translate(" + (outerRadius - 100) + ",0)";
        })
        .text(function(d, i) {
            if (components[i].id == 4 || components[i].id == 6 || components[i].id == 7 || components[i].id == 8 || components[i].id == 15) {
                return components[i].component;
            }

        })
        .call(wrap, 62);

    // add element groups
    var elementGroups = svg.selectAll('g.element-group-main')
        .data(elementLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'element-group-main')
        .on('mouseover', showCorrespondingIndicatorChordsElement(0))
        .on('mouseout', showCorrespondingIndicatorChordsElement(1))

    // Add the element group arc
    elementGroups.append('svg:path')
        .style('fill', function(d, i) {
            return elements[i].color;
        })
        .on('mouseover', makeOutlineBolderElement(1))
        .on('mouseout', makeOutlineBolderElement(0))
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
        .attr('font-size', 20)
        .append('svg:textPath')
        .attr("startOffset", '22.5%')
        .style("text-anchor", "middle")
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
            var title = data[d.source.index].id + ' => ' + data[d.target.index].id;
            if (d.source.value > 1) {
                title = title + 's';
            }
            return title;
        });

    // add faculty names
    indicatorGroups.append('svg:text')
        .attr("dy", 0)
        .attr('font-size', 10)
        .attr("transform", function(d) {
            return "rotate(" + ((angle(d.index) * 180 + 12) / Math.PI - 90) + ") translate(" + (outerRadius - 200) + ",0)";
        })
        .text(function(d, i) {
            return data[i].id;
        })
        .call(wrap, 90);

});
