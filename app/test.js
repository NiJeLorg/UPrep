const areas = ['Culture of High Expectations', 'Demanding Curriculum', 'Engaging Instruction', 'Rigorous Assesements'];

const data = [{
        "id": "Grading",
        "plans": [
            'Perserverance', 'Formative Assesements', 'Summative Assesements', 'Assesement Designs', 'Tasks', 'Feedback', 'Learning Target Reflection', 'Task Reflection', ' Data-Driven Decision Making'
        ]
    }, {
        "id": "College-Going Culture",
        "plans": [
            'Perserverance', 'Task Reflection',
        ]
    },

    {
        "id": "High-Quality Work",
        "plans": [
            'Tasks', 'Task Reflection',
        ]
    }, {
        "id": "Timeliness and Preparation",
        "plans": [
            'Tasks'
        ]
    }, {
        "id": "Interconnectedness of Standards",
        "plans": [
            'Leveraging Learning Targets',
            'Teacher as Facilitator',
            'Peer Critique and Critical Thinking',
            'Differentiation',
            'Summative Assessments',
            'Assessment Design',
            'Tasks'
        ]
    }, {
        "id": "Unit Planning",
        "plans": [
            'Portfolio Passages', 'Tasks', 'Task Reflection'
        ]
    }, {
        "id": "Learning Targets",
        "plans": [
            'Student-Led Conferences', 'Leveraging Learning Targets', 'Summative Assessments', 'Formative Assessments', 'Tasks', 'Learning Target Reflection'
        ]
    }, {
        "id": "Lesson Design",
        "plans": [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions', 'Formative Assessments', 'Tasks'
        ]
    }, {
        "id": "Use of Protocols",
        "plans": [
            'Teacher as Facilitator', 'Modification in the Moment', 'Asking Questions'
        ]
    }, {
        "id": "Reflection",
        "plans": [
            'Collaborative Best Practices',
            'Professional Growth'
        ]
    }, {
        "id": "Task Selection",
        "plans": [
            'Student-Led Conferences',
            'Portfolio Passages'
        ]
    }, {
        "id": "Leveraging Learning Targets",
        "plans": [
            'Feedback',
        ]
    }, {
        "id": "Teacher as Facilitator",
        "plans": [
            'Leveraging Crew',
        ]
    }, {
        "id": "Peer Critique and Critical Thinking",
        "plans": [
            'Feedback',
        ]
    }, {
        "id": "Summative Assesements",
        "plans": [
            'Reflection', 'Data-Driven Decision Making'
        ]
    }, {
        "id": "Tasks",
        "plans": [
            'Visible Environment', 'Student-Led Conferences', 'Use of Protocols', 'Task Selection', 'Leveraging Learning Targets', 'Teacher as Facilitator', 'Peer Critique and Critical Thinking', 'Modification in the Moment', 'Differentiation', 'Asking Questions', 'Perseverance'
        ]
    }, {
        "id": "Learning Target Reflection",
        "plans": [
            'Portfolio Passages', 'Perserverance'
        ]
    }, {
        "id": "Task Reflection",
        "plans": [
            'Internalizing Routines and Procedures', 'Self-evaluation', 'Student-Led conferences', 'Portfolio Passages'
        ]
    }
];

var plans = [],
    faculty = {};

for (var i = 0; i < data.length; i++) {
    plans[i] = [];
    faculty[data[i].id] = i;
    for (var j = 0; j < data.length; j++) {
        plans[i][j] = 0;
    }
}

// populate the plan matrix
data.forEach(function(facultyMember) {
    facultyMember.plans.forEach(function(destination) {
        //console.log("adding " + destination.count + " plans involving source: " + facultyMember.id  + "(" + faculty[facultyMember.id] + ") and destination " + destination.destination + "(" + faculty[destination.destination] + ")");
        plans[faculty[facultyMember.id]][faculty[destination]];
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
    data.forEach(function(facultyMember) {
        facultyMember.plans.forEach(function(destination) {
            areaMatrix[areaIds[facultyMember.area]][areaIds[data[faculty[destination.destination]].area]] += +destination.count;
        });
    });
});

//console.log(areaMatrix);

var width = 500,
    height = 500,
    outerRadius = Math.min(width, height) / 2 - 20,
    innerRadius = outerRadius - 20,
    colorIncrement = 0.07,
    currentColorIncrement = 0,
    currentArea = 0;

var areasArc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var areasLayout = d3.layout.chord()
    .padding(0.04);

var facultyArc = d3.svg.arc()
    .innerRadius(innerRadius - 24)
    .outerRadius(outerRadius - 24);

var facultyLayout = d3.layout.chord()
    //.sortGroups(d3.descending)
    //.sortSubgroups(d3.descending)
    //.sortChords(d3.descending)
    .padding(0.04);

var chord = d3.svg.chord()
    .radius(innerRadius - 24);

// The color scale, for different categories of "worrisome" risk.
var fill = d3.scale.ordinal()
    .domain([0, 1, 2])
    .range(["#DB704D", "#D2D0C6", "#ECD08D", "#F8EDD3"]);

// attach svg object to the content well
var svg = d3.select(".content").selectAll("div")
    .data([plans])
    .enter()
    .append("div")
    .style("width", width + "px")
    .style("height", height + "px")
    .append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.each(function(matrix, j) {
    var svg = d3.select(this);
    facultyLayout.matrix(plans);
    areasLayout.matrix(areaMatrix);

    //console.log(plans);
    //console.log(facultyLayout.groups());

    // Add faculty groups
    var facultyGroups = svg.selectAll("g.faculty-group")
        .data(facultyLayout.groups)
        .enter()
        .append("svg:g")
        .attr("class", "faculty-group");

    // Add the faculty group arc
    facultyGroups.append("svg:path")
        .style("fill", function(d, i) {
            return areas[areaIds[data[i].area]].color;
        })
        .attr("id", function(d, i) {
            return "faculty-group" + d.index + "-" + j;
        })
        .attr("d", facultyArc)
        .append("svg:title")
        .text(function(d, i) {
            var planCount = 0;
            data[i].plans.forEach(function(plan) {
                planCount += +plan.count;
            });
            return data[i].first_name + ' (' + planCount + ')';
        });
    // add faculty names
    facultyGroups.append("svg:text")
        .attr("x", 6)
        .attr("dy", 15)
        .append("svg:textPath")
        .attr("xlink:href", function(d) {
            return "#faculty-group" + d.index + "-" + j;
        })
        .text(function(d, i) {
            return data[i].first_name;
        });

    // add area groups
    var areaGroups = svg.selectAll("g.area-group")
        .data(areasLayout.groups)
        .enter()
        .append("svg:g")
        .attr("class", "area-group");
    // Add the area group arc
    areaGroups.append("svg:path")
        .style("fill", function(d, i) {
            return areas[i].color;
        })
        .attr("id", function(d, i) {
            return "area-group" + d.index + "-" + j;
        })
        .attr("d", areasArc)
        .append("svg:title")
        .text(function(d, i) {
            return areas[i].area;
        });
    // add area names
    areaGroups.append("svg:text")
        .attr("x", 6)
        .attr("dy", 15)
        .append("svg:textPath")
        .attr("xlink:href", function(d) {
            return "#area-group" + d.index + "-" + j;
        })
        .text(function(d, i) {
            return areas[i].area;
        });

    // Add chords between faculty
    svg.selectAll("path.chord")
        .data(facultyLayout.chords)
        .enter()
        .append("svg:path")
        .attr("class", "chord")
        .style("fill", function(d, i) {
            return areas[areaIds[data[d.source.index].area]].color;
        })
        .style("stroke", function(d) {
            return d3.rgb(areas[areaIds[data[d.source.index].area]].color).darker();
        })
        .attr("d", chord)
        .append("svg:title")
        .text(function(d) {
            var title = data[d.source.index].first_name + ' and ' + data[d.target.index].first_name + ": " + d.source.value + " plan";
            if (d.source.value > 1) {
                title = title + 's';
            }
            return title;
        });

});



