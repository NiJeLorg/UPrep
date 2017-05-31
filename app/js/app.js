import * as d3 from 'd3';

const elements = [{
    element: 'Culture of High Expectations',
    id: '1',
    color: '#F1C232',
    tag: 'HIGH EXPECTATIONS PERMEATE EVERY FACET OF OUR WORK',
    body: 'We intentionally cultivate an environment that reflects our values. Ourtraditions, experiences and structures develop engaged,college-bound students.'
}, {
    element: 'Demanding Curriculum',
    id: '2',
    color: '#E69138',
    tag: 'STANDARDS-ALIGNED CURRICULUM THAT PREPARES STUDENTS FOR SUCCESS IN COLLEGE',
    body: 'Grade-level learning experiences are created through a structured teaching, learning, and planning process. Our curriculum is rooted in standards and pushes students to construct their own meaning through rigorous, authentic tasks.'
}, {
    element: 'Engaging Instruction',
    id: '3',
    color: '#45818E',
    tag: 'STUDENTS DO THE HEAVY LIFTING',
    body: 'Discussion-based lessons that foster critical thinking are framed in ways that push students to think deeply about topics of study and compel them to learn more. Instruction is modified to meet the needs of all students.'
}, {
    element: 'Rigorous Assessments',
    id: '4',
    color: '#674EA7',
    tag: 'REFLECTIVE CONVERSATIONS THROUGHOUT THE LEARNING CYCLE',
    body: 'Our work pushes students to construct meaning and master learning targets. We regularly assess the effectiveness of instruction and its impact on student learning. This is done through self-assessment, reflection, and data analysis. Teachers and leaders adjust plans to guide students to mastery'
}, {
    element: 'Shared Leadership',
    id: '5',
    color: '#6AA84F',
    tag: 'SETTING GOALS AND HOLDING EACH OTHER ACCOUNTABLE',
    body: 'Leadership teams use structured time to build, communicate, and implement work plans. Leaders and teachers collaboratively plan professional development to foster an inclusive learning community. Every individual is a leader whose voice contributes to the attainment of school goals. Foundational to our work as leaders is professional trust.',
}];

const components = [{
    component: 'College Bound',
    element: '1',
    id: '1',
    body: 'We ensure our students will be college ready through the development of strong work habits and a growth mindset.Our students understand the significance of a college degree and align their efforts in school with a college-bound trajectory.'
}, {
    component: 'Character',
    element: '1',
    id: '2',
    body: 'U Prep’s core values are developed and harnessed as a means of contributing to the community. Our students take pride in their community and demonstrate their pride through their actions and words. Our visible environment is a reflection of our values.'
}, {
    component: 'Student Ownership',
    element: '1',
    id: '3',
    body: 'Students internalize and value the culture of high expectations within U Prep schools. They reflect on how this culture manifests itself through their academic and character development. Key momentsserve as capstone projects for students.'
}, {
    component: 'Knowledge of Standards and Content',
    element: '2',
    id: '4',
    body: 'Teachers have a deep understanding of the standard and content expectations, and the ability to seamlessly blend the two'
}, {
    component: 'Short-term and Long-term Planning',
    element: '2',
    id: '5',
    body: 'Intentional planning and reflection results in engaged learners and increased student achievement.'
}, {
    component: 'Student Ownership',
    element: '2',
    id: '6',
    body: 'Students have a voice in their own learning.'
}, {
    component: 'Intellectual Engagement - Fostering Curiosity',
    element: '3',
    id: '7',
    body: 'Teaching and learning are exciting. Students think deeply about the topics at hand.'
}, {
    component: 'Responding to Students Needs',
    element: '3',
    id: '8',
    body: 'The teaching and learning process is designed and modified to meet the needs of all students.'
}, {
    component: 'Student Ownership',
    element: '3',
    id: '9',
    body: 'Students become leaders of their own learning.'
}, {
    component: 'Formative & Summative Assessment',
    element: '4',
    id: '10',
    body: 'Our teachers design standards-aligned tasks and assessments that push our students’ learning. We reflect on student learning to improve our instructional practices.'
}, {
    component: 'Feedback',
    element: '4',
    id: '11',
    body: 'Feedback guides students to reflect and improve on their own work.'
}, {
    component: 'Student Ownership',
    element: '4',
    id: '12',
    body: 'Our students have a sense of agency around their learning. As a result, they reflect on their work, set goals, and strive to achieve them.'
}, {
    component: 'School Development',
    element: '5',
    id: '13',
    body: 'Our school-based leadership teams work together within defined systems and structures to achieve their goals, and build and maintain the trust of their staff.'
}, {
    component: 'Team Development',
    element: '5',
    id: '14',
    body: 'We work in teams to help us accomplish our goals and grow our practice. Professional trust is foundational to all team work.'
}, {
    component: 'Individual Development',
    element: '5',
    id: '15',
    body: 'We work to intentionally grow every teacher. Our teachers understand the significance of professional trust and work to demonstrate and develop it in all facets of their work.'
}];

const data = [{
    element: '1',
    component: '1',
    id: 'Grading',
    levels: {
        '1': 'Students’ grades accurately reflect their mastery of grade-level standards',
        '2': 'Students receive grades based on both their habits of work and mastery of standards.',
        '3': 'Students receive grades based on their habits of work, habits of mind, and mastery of standards. There is a clear process for determining a student’s grade in a given course.',
        '4': 'Grades reflect habits of work, habits of mind, and mastery of content. A clear, network-approved grading policy is in place and is being used across the entire school. The policy reflects a clear philosophy on grading.'
    },
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
    levels: {
        '1': 'School environment contains college materials. Students have an age-appropriate understanding of the concept and importance of college.',
        '2': 'School environment contains college materials. Students have an age-appropriate understanding of the concept and importance of college. Students at all grade levels are appropriately exposed to colleges. Staff communicate that all students are on a path to a four-year college/university.',
        '3': 'School staff clearly communicate that all students are on a path to a four year college. School environment contains college materials, providing exposure to a plethora of colleges and universities to students. Students at all grade levels are appropriately exposed to college. Grade-span appropriate reflection around academic performance and its implications happens inconsistently.',
        '4': 'Staff clearly communicate that all students are on a path to a four year college. School environment contains college materials, providing exposure to a plethora of colleges and universities to students. Students at all grade levels are appropriately exposed to college. Grade-span appropriate reflection around academic performance and its implications happens consistently. Students demonstrate an age-appropriate level of agency around school.'
    },
    plans: [
        ['Perserverance', '3'],
        ['Task Reflection', '0'],
    ]
}, {
    element: '1',
    component: '1',
    id: 'High-Quality Work',
    levels: {
        '1': 'Students revise major assessments using teacher and/or peer feedback.',
        '2': 'Students use teacher and/or peer feedback to revise major assignments. Non-major assignments display attention to detail and format.',
        '3': 'Students create authentic work that displays a high level of craftsmanship. Students complete multiple drafts and use models of excellence to guide their work.',
        '4': 'Students create complex, authentic work that displays a high level of craftsmanship. Students complete multiple drafts and use models of excellence to guide their work. All submitted work reflects a high level of craftsmanship.'
    },
    plans: [
        ['Tasks', '2'],
        ['Task Reflection', '4'],
    ]
}, {
    element: '1',
    component: '1',
    id: 'Timeliness and Preparation',
    levels: {
        '1': 'Students arrive to class on time and transitioning from one activity to the next without delay',
        '2': 'Students arrive to class on time and meet deadlines for assignments. With reminders, students know and have the materials they need to be prepared for class.',
        '3': 'Students are in class on time and prepared for learning. Work is submitted in a timely manner. ',
        '4': 'Students arrive early and are prepared for learning at the start of class. Work is submitted in a timely manner.'
    },
    plans: [
        ['Tasks', '0']
    ]
}, {
    element: '1',
    component: '2',
    id: 'Citizenship',
    levels: {
        '1': 'A school code of conduct exists, and students abide by it with minimal redirection. ',
        '2': 'With guidance, students begin to demonstrate respect for all, integrity, and compassion. Students see how the code of conduct is a demonstration of these traits.',
        '3': 'Without prompting, students demonstrate respect for all, integrity, and compassion.',
        '4': 'Students demonstrate respect for all, integrity, and compassion. These are the pillars of the school community. Service and service learning are built into the culture of the school as a mean to better the community.'
    },
    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Visible Environment',
    levels: {
        '1': 'The school and classrooms are clean and well maintained. U Prep’s core values are clearly posted throughout the school. ',
        '2': 'The school and classrooms are clean and well maintained. Student work is visible throughout the building. U Prep’s core values are clearly posted throughout the school, and they are consistently addressed during crew.',
        '3': 'The school and classrooms are clean and well maintained. High-quality student work is visible in classrooms and public spaces. U Prep’s core values are demonstrated in student and staff actions.',
        '4': 'The school and classrooms are clean and well maintained. They are rich with high-quality student work and materials to facilitate student learning. Students take responsibility for caring for their environment. U Prep’s core values are clearly visible both through signage and student and staff actions.'
    },
    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Internalizing Routines and Procedures',
    levels: {
        '1': 'School has developed clear routines, procedures, staff and student expectations.',
        '2': 'Students and staff can explain the routines, procedures, and expectations. When prompted, staff and students can reflect on their behavior.',
        '3': 'Students and staff have internalized routines, procedures and expectations as ways of interacting inside the school. When prompted, staff and students can reflect and monitor their behavior, adjusting accordingly.',
        '4': 'Students and staff have internalized routines, procedures and expectations as ways of interacting with the world inside and outside of school. Staff and students routinely reflect, monitor and adjust on their own.'
    },
    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Crew',
    levels: {
        '1': 'Crew meets consistently, although the structures and purpose of crew vary from crew to crew. ',
        '2': 'Crew meets consistently. A clear purpose for crew has been communicated and internalized by staff. ',
        '3': 'Crew meets consistently. Staff and students have internalized the purpose of crew. Staff and students receive support and training to develop themselves as crew leaders.',
        '4': 'Crew serves a clear purpose in the school and is used to foster relationships amongst crew members and leaders. Crew meets consistently and crew leaders receive training and support to be strong crew leaders. Crew leaders structure and plan crew to meet a set of identified goals.'
    },

    plans: []
}, {
    element: '1',
    component: '2',
    id: 'Leveraging Crew',
    levels: {
        '1': 'Staff understand the purpose and structures of crew',
        '2': 'Staff and students understand the purpose and structures of crew.',
        '3': 'Staff and students understand the purpose and structures of crew and can explicitly describe crew’s effects on student achievement.',
        '4': 'Staff and students leverage crew structures to drive student achievement.',
    },
    plans: []
}, {
    element: '1',
    component: '3',
    id: 'Self-Evaluation',
    levels: {
        '1': 'Students use self-evaluation to set character goals',
        '2': 'Students regularly use self-evaluation to set character goals and reflect on their progress. ',
        '3': 'Students regularly and accurately use self-evaluation to set character goals and reflect on their progress.',
        '4': 'Students regularly and accurately use self-evaluation to set goals, monitor their growth, and reflect on their character development. They can communicate with others about their progress',
    },
    plans: []
}, {
    element: '1',
    component: '3',
    id: 'Student-Led Conferences',
    levels: {
        '1': 'During a student-led conference, students present evidence of character growth they’ve collected over the course of the semester. ',
        '2': 'During a student-led conference, students present evidence of character and academic growth they’ve collected over the course of the semester.',
        '3': 'During a student-led conference, students present evidence of character and academic growth, and they refer to complex work to show their mastery',
        '4': 'During a student-led conference, students present evidence of character and academic growth, and they communicate the process they used to master long-term learning targets.',
    },
    plans: []
}, {
    element: '1',
    component: '3',
    id: 'Portfolio Passages',
    levels: {
        '1': 'Crew leaders facilitate the selection of portfolio pieces to present during portfolio passages.',
        '2': 'Crew leaders provide guidelines that students follow when selecting pieces to present during portfolio passages.',
        '3': 'Students select pieces and meet specific benchmarks that are determined by the crew leaders.',
        '4': 'Students internalize the process of portfolio passages and design a presentation in line with expectations.',
    },
    plans: []
}, {
    element: '2',
    component: '4',
    id: 'Interconnectedness of Standards',
    levels: {
        '1': 'Teachers understand the skills that are called for by their grade-level expectations or content standards.',
        '2': 'Teachers attempt to connect appropriate content with the skills required by the standards.',
        '3': 'Teachers connect the most appropriate content to standards-based instruction.',
        '4': 'Teachers can articulate the interconnectedness of standards/skills across multiple grade levels and connect the most appropriate content to standards-based instruction.',
    },
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
    levels: {
        '1': 'Units of study are written in isolation',
        '2': 'Curricula are written to connect multiple units of study around a compelling topic. Portfolio pieces are identified as units are developed. ',
        '3': 'Curricula are written to connect multiple units of study into culminating tasks that highlight content from all units. Tasks become portfolio pieces',
        '4': 'Curricula are written to connect multiple units of study into complex culminating tasks that demonstrate student expertise. Tasks become portfolio pieces.',
    },
    plans: [
        ['Portfolio Passages', '2'],
        ['Tasks', '2'],
        ['Task Reflection', '3']
    ]
}, {
    element: '2',
    component: '5',
    id: 'Learning Targets',
    levels: {
        '1': 'Teachers plan lessons with quality short-term learning targets',
        '2': 'Teachers plan lessons that connect short-term learning targets from one lesson to the next.',
        '3': 'Teachers plan lessons that connect short-term learning targets from one day to the next and that connect the daily learning target to the long-term learning targets in the unit of study.',
    },
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
    levels: {
        '1': 'Teachers use the Workshop 1.0 and 2.0 lesson designs.',
        '2': 'Teachers use a variety of lesson designs that may meet the specified outcomes,',
        '3': 'Teachers employ the appropriate lesson design to meet the specified outcomes.',
        '4': 'Teachers employ the appropriate lesson design to meet the specified outcomes and create exemplars to know when students have produced masterful work.',
    },
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
    levels: {
        '1': 'Teachers use protocols without intentionality. ',
        '2': 'Teachers select/employ the appropriate protocols to engage students in the learning.',
        '3': 'Teachers select/employ the appropriate protocols and intentionally plan components of the protocol to step into a facilitator’s role at times, but miss some key opportunities.',
        '4': 'Teachers select/employ the appropriate protocols to transform learning experiences to ones in which the teacher serves as a facilitator (at strategic moments) while engaging students in rich, substantive learning.',
    },
    plans: [
        ['Teacher as Facilitator', '3'],
        ['Modification in the Moment', '0'],
        ['Asking Questions', '4']
    ]
}, {
    element: '2',
    component: '5',
    id: 'Reflection',
    levels: {
        '1': 'Teachers use a reflection process after a performance task to improve students’ products in the future.',
        '2': 'Teachers use a reflection process to improve their practice, students’ products, and the student experience around the performance tasks.',
        '3': 'Teachers use a structured reflection process to improve their practice, the students’ products, and the student experience around the performance task.',
        '4': 'Teachers use a structured reflection process to improve their practice, the students’ products, and the student experience around performance tasks. Reflection leads teachers to institutionalize best practices and identify/resolve challenges.',
    },
    plans: [
        ['Collaborative Best Practices', '4'],
        ['Professional Growth', '4']
    ]
}, {
    element: '2',
    component: '6',
    id: 'Task Selection',
    levels: {
        '1': 'Teachers select tasks to address authentic and challenging topics, and students demonstrate interest in completing the task.',
        '2': 'Students, when presented with authentic and challenging topics, provide input about the task to complete. Teachers select tasks based on student input.',
        '3': 'Students, when presented with authentic and challenging topics, select a task from a set of choices to convey their knowledge to an appropriate audience.',
        '4': 'Students, when presented with authentic and challenging topics, determine the best task to convey their knowledge to an appropriate audience.',
    },
    plans: [
        ['Student-Led Conferences', '1'],
        ['Portfolio Passages', '2']
    ]
}, {
    element: '3',
    component: '7',
    id: 'Leveraging Learning Targets',
    levels: {
        '1': 'Teachers unpack short-term learning targets as a means to help students understand the day’s learning goals',
        '2': 'Teachers unpack short-term learning targets as a means to help students understand the day’s learning and use activities and tasks throughout the lesson to faciltate mastery of the learning targets. Teachers connect learning targets from previous days to the current learning target in a way that allows students to deepen their understanding of previously learned content/skills.',
        '3': 'Teachers use short-term and long-term learning targets to frame daily learning and connect information across multiple lessons to build toward mastery of standards. Teachers use tasks throughout the lesson to faciliate mastery of the learning targets. ',
        '4': 'Teachers use short-term and long-term learning targets to frame daily learning and connect information across multiple lessons to build toward mastery of standards. Teachers uses tasks throughout the lesson to faciliate mastery of the learning targets. They use their knowledge of content, standards, and students’ interests to compel students to want to learn more about the topic.',
    },
    plans: [
        ['Feedback', '1'],
    ]
}, {
    element: '3',
    component: '7',
    id: 'Teacher as Facilitator',
    levels: {
        '1': 'Teachers facilitate discussions using questions that require students to demonstrate conceptual understanding.',
        '2': 'Teachers facilitate discussions using questions that require students to justify their positions.',
        '3': 'Teachers facilitate effective discussions that include multiple perspectives and/or pathways and push students towardmastery.',
        '4': 'Teachers facilitate effective discussions that include multiple perspectives and/or pathways and reveal student mastery',
    },
    plans: [
        ['Leveraging Crew', '1'],
    ]
}, {
    element: '3',
    component: '7',
    id: 'Peer Critique and Critical Thinking',
    levels: {
        '1': 'Teachers model the skills and practices they would like to see demonstrated when analyzing and critiquing work.',
        '2': 'Teachers develop skills and practices amongst students so that they can critique the work of their peers.',
        '3': 'Teachers develop skills and practices amongst students so that they can think critically and critique the work of their peers.',
        '4': 'Teachers develop skills and practices amongst students so that they can think critically, analyze their work and critique the work of their peers.',
    },
    plans: [
        ['Feedback', '3'],
    ]
}, {
    element: '3',
    component: '8',
    levels: {
        '1': 'Teachers recognize that lesson modifications were needed but were unclear how to implement strategies in the moment.',
        '2': 'Teachers attempt to modify instructional strategies in the moment.',
        '3': 'Teachers modify instructional strategies in the moment to address student needs.',
        '4': 'Teachers modify instructional strategies in the moment to address student needs while maintaining a consistent learning experience.',
    },
    id: 'Modification in the Moment',
    plans: []
}, {
    element: '3',
    component: '8',
    levels: {
        '1': 'Teachers employ the best instructional strategies to meet the needs of most students.',
        '2': 'Teachers differentiate instruction to meet the needs of students within individual lessons. Differentiation doesn’t lead toward mastery of long-term learning targets',
        '3': 'Teachers frequently differentiate instruction for students who are working toward the same long-term learning target, providing extra support for struggling students or more challenging tasks for proficient students.',
        '4': 'Teachers frequently differentiate instruction for students who are working toward the same long-term learning target, providing extra support for struggling students and more challenging tasks for proficient students.',
    },
    id: 'Differentiation',
    plans: []
}, {
    element: '3',
    component: '9',
    levels: {
        '1': 'When asked directly, students respond to teachers’ questions. ',
        '2': 'Students use scripted question stems or discussion prompts to ask questions of texts and/or each other.',
        '3': 'Students independently ask questions of texts and/or each other and generate high-quality oral responses',
        '4': 'Students independently ask questions of texts and/or each other and generate high-quality responses orally and in writing.',
    },
    id: 'Asking Questions',
    plans: []
}, {
    element: '3',
    component: '9',
    id: 'Perseverance',
    levels: {
        '1': 'Students rely on support to identify and persist through challenging learning experiences.',
        '2': 'Students independently identify challenges that prevent them from learning and rely on teacher assistance to work through those challenges.',
        '3': 'Students independently identify challenges that prevent them from learning and persist through them with minimal guidance.',
        '4': 'Students independently identify challenges that prevent them from learning, persist through them and advocate for their needs.',
    },
    plans: []
}, {
    element: '4',
    component: '10',
    id: 'Formative Assessments',
    levels: {
        '1': 'Teachers use 1-2 types of formative assessment within a lesson.',
        '2': 'Teachers use 1-2 types of formative assessment to monitor student progress toward mastery of standards and adjust plans accordingly. ',
        '3': 'Teachers regularly use a variety of formative assessments during the lesson to monitor student progress toward mastery of standards and adjust plans accordingly.',
        '4': 'Teachers regularly use a variety of formative assessments throughout the lesson to monitor student progress toward mastery of standards and adjust plans accordingly.',
    },
    plans: []
}, {
    element: '4',
    component: '10',
    id: 'Summative Assessments',
    levels: {
        '1': 'Teachers analyze summative assessment results to identify levels of mastery and gaps in learning.',
        '2': 'Teachers analyze summative assessment results to determine the level of mastery, identify gaps in learning, and develop short-term reteaching plans.',
        '3': 'Teachers analyze results from multiple summative assessments to determine students’ level of mastery and identify gaps in learning. When developing short-term reteaching plans, teachers identify the impact of those plans on long-term planning.',
        '4': 'Teachers analyze results from multiple summative assessments to determine students’ level of mastery and identify gaps in learning. When developing short-term reteaching plans, teachers also leverage long-term plans for closing gaps.',
    },
    plans: [
        ['Reflection', '3'],
        ['Data-Driven Decision Making', '4']
    ]
}, {
    element: '4',
    component: '10',
    id: 'Assessment Design',
    levels: {
        '1': 'Teachers design and use 1-2 formats of assessment to meaure mastery of either content or standards.',
        '2': 'Teachers use/design 1-2 formats of assessment to measure mastery of standards and content.',
        '3': 'Teachers design assessments using a variety of formats to measure the mastery of standards and content.',
        '4': 'Teachers design assessments using the format that best measures the mastery of standards and content.',
    },
    plans: []
}, {
    element: '4',
    component: '10',
    id: 'Tasks',
    levels: {
        '1': 'Tasks are connected to the standards. They require students to engage with appropriate grade level materials and construct a physical product.',
        '2': 'Standards-based tasks require students to analyze information presented in the lesson and apply their learning. Students engage with appropriate grade-level materials. Tasks are designed to demonstrate mastery of the learning targets.',
        '3': 'Authentic, standards-based tasks require students to analyze new information from the lesson and incorporate the previous learning. Students engage with appropriate grade-level materials. Tasks are designed to demonstrate mastery of the learning targets.',
        '4': 'Tasks lead students to constructing meaning of the major concepts found in the lesson’s targeted standard(s). Ideas build from one task to the next. Tasks are designed to lead to mastery of the learning targets.',
    },
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
    levels: {
        '1': 'Teachers provide prescriptive, actionable feedback to students.',
        '2': 'Teachers provide prescriptive, actionable feedback in a regular and timely fashion.',
        '3': 'Teachers provide regular and timely prescriptive feedback to students to show students where they are on the trajectory of mastery.',
        '4': 'Teachers provide probing and descriptive feedback to help students discover their own mistakes and progress toward mastery.',
    },
    plans: []
}, {
    element: '4',
    component: '12',
    id: 'Learning Target Reflection',
    levels: {
        '1': 'Students reflect on mastery of the learning targets when prompted by the teacher. ',
        '2': 'Students self-assess progress toward short-term learning targets and articulate what they need to work on to master the targets',
        '3': 'Students self-assess progress toward short and long-term learning targets, articulate what they need to work on to master the targets, and make revisions as necessary.',
        '4': 'Students self-assess progress toward short and long-term learning targets, articulate what they need to work on to master the targets, set goals accordingly, and demonstrate self-motivation in making the necessary revisions.',
    },
    plans: [
        ['Portfolio Passages', '3'],
        ['Perserverance', '3']
    ]
}, {
    element: '4',
    component: '12',
    id: 'Task Reflection',
    levels: {
        '1': 'Upon completion of a task, students reflect on the quality of the finalproduct.',
        '2': '',
        '3': 'Upon completion of a task, students reflect on the quality of the finalproduct as well as the process they used to complete their work.',
        '4': '',
    },
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
    levels: {
        '1': 'The administrative team spearheads the development of the work plan and reflects on progress on a quarterly basis.',
        '2': 'The leadership team spearheads the development of the work plan and uses some structures and protocols to get feedback from staff on a quarterly basis.',
        '3': 'The leadership team spearheads the development of the work plan and uses varied structures and protocols to engage staff on a monthly basis. The leadership team makes decisions based on feedback.',
        '4': 'The leadership team spearheads the development of the work plan. When developing and implementing the plan, the team uses a variety of structures and protocols to maintain two-way communication between themselves and the whole staff to monitor progress and solidify action steps. ',
    },
    plans: []
}, {
    element: '5',
    component: '13',
    id: 'Data-Driven Decision Making',
    levels: {
        '1': 'Leaders collect 1-2 sources of data for culture, instruction, and leadership actions to make decisions.',
        '2': 'Leaders analyze information from 1-2 sources of data for culture, instruction, and leadership actions to make decisions.',
        '3': 'Leaders analyze information from multiple sources of data for culture, instruction, and leadership actions to make decisions.',
        '4': 'Leaders communicate the rationale for decisions based on analysis of multiple sources of data for culture, instruction, and leadership actions.',
    },
    plans: []
}, {
    element: '5',
    component: '13',
    id: 'Work Plan Development',
    levels: {
        '1': 'Schools develop a workplan and a PD plan.',
        '2': 'Schools develop comprehensive and coherent work plans.',
        '3': 'Comprehensive and coherent work plans push the school toward demonstrating highly implemented qualities of the Five Elements.',
        '4': 'Comprehensive and coherent work plans align to network priorities and push the school toward demonstrating highly implemented qualities of the Five Elements.',
    },
    plans: []
}, {
    element: '5',
    component: '13',
    id: 'Professional Trust (Leaders)',
    levels: {
        '1': 'Leaders attempt to develop professional trust.',
        '2': 'Leaders demonstrate and develop professional trust through two of the following: consistency, transparency, follow-through, communicating intent',
        '3': 'Leaders demonstrate and develop professional trust through three of the following: consistency, transparency, follow-through, communicating intent',
        '4': 'Leaders demonstrate and develop professional trust through all of the following: consistency, transparency, follow-through, communicating intent',
    },
    plans: []
}, {
    element: '5',
    component: '14',
    id: 'Work Plan Alignment',
    levels: {
        '1': 'Teams use meeting structures to accomplish goals.',
        '2': 'Teams demonstrate a shared understanding of how their work aligns to the work plan and follow a structure for their meetings to accomplish goals.',
        '3': 'Teams demonstrate a shared understanding of how their work aligns to the work plan and use efficient meeting structures to accomplish goals.',
        '4': 'Teams demonstrate a shared understanding of how their work aligns to the work plan and use efficient meeting structures that ensure equity of voice and accomplish goals.',
    },
    plans: []
}, {
    element: '5',
    component: '14',
    id: 'Collaborative Best Practices',
    levels: {
        '1': 'Teachers collaborate to discuss common challenges.',
        '2': 'Teams collaborate to observe each others’ practice and provide feedback around common challenges.',
        '3': 'Teams collaborate to observe each others’ practice, provide feedback to one another, and develop solutions to common challenges.',
        '4': 'Teams collaborate to observe each others’ practice, provide feedback, and develop evidence-based solutions to common challenges.',
    },
    plans: []
}, {
    element: '5',
    component: '14',
    id: 'Professional Trust (Teams)',
    levels: {
        '1': 'Teams attempt to developprofessional trust.',
        '2': 'Teams demonstrate and develop professional trust through two of the following: consistency, transparency, follow-through, communicating intent',
        '3': 'Teams demonstrate and develop professional trust through three of the following: consistency, transparency, follow-through, communicating intent',
        '4': 'Teams demonstrate and develop professional trust through all of the following: consistency, transparency, follow-through, communicating intent',
    },
    plans: []
}, {
    element: '5',
    component: '15',
    id: 'Professional Growth',
    levels: {
        '1': 'Professional development is addressed primarily through whole-staff workshops that focus on topics relevant to the majority of staff members.',
        '2': 'Individualized professional development structures are used to drive professional growth.',
        '3': 'Individualized professional development structures are used to drive professional growth aligned to the Charlotte Danielson rubric.',
        '4': 'Individualized professional development structures are used to drive professional growth aligned to the Charlotte Danielson rubric. Teachers and leaders track individual progress.',
    },
    plans: []
}, {
    element: '5',
    component: '15',
    id: 'Professional Trust (Individual)',
    levels: {
        '1': 'Individuals attempt to develop professional trust.',
        '2': 'Individuals demonstrate and develop professional trust through two of the following: consistency, transparency, follow-through, communicating intent',
        '3': 'Individuals demonstrate and develop professional trust through three of the following: consistency, transparency, follow-through, communicating intent',
        '4': 'Individuals demonstrate and develop professional trust through all of the following: consistency, transparency, follow-through, communicating intent',
    },
    plans: []
}, ];


var connectionType = 'both';

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

    if (connectionType === 'both') {

        return (indicator, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return d.source.index != index && d.target.index != index;
                })
                .transition()
                .style('opacity', opacity);

        };
    } else if (connectionType === 'outgoing') {
        return (indicator, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return d.source.index != index;
                })
                .transition()
                .style('opacity', opacity);

        };
    } else {
        return (indicator, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return d.target.index != index;
                })
                .transition()
                .style('opacity', opacity);

        };
    }

};



const showCorrespondingIndicatorChordsComponent = (opacity) => {

    if (connectionType === 'both') {

        return (component, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return components[index].id != data[d.source.index].component && components[index].id != data[d.target.index].component
                })
                .transition()
                .style('opacity', opacity);

        };
    } else if (connectionType === 'outgoing') {
        return (component, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return components[index].id != data[d.source.index].component
                })
                .transition()
                .style('opacity', opacity);

        };
    } else {
        return (component, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return components[index].id != data[d.target.index].component
                })
                .transition()
                .style('opacity', opacity);

        };
    }

};


const showCorrespondingIndicatorChordsElement = (opacity) => {
    if (connectionType === 'both') {

        return (element, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return elements[index].id != data[d.source.index].element && elements[index].id != data[d.target.index].element
                })
                .transition()
                .style('opacity', opacity);

        };
    } else if (connectionType === 'outgoing') {
        return (element, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return elements[index].id != data[d.source.index].element
                })
                .transition()
                .style('opacity', opacity);

        };
    } else {
        return (element, index) => {
            svg.selectAll('path.chord')
                .filter((d) => {
                    return elements[index].id != data[d.target.index].element
                })
                .transition()
                .style('opacity', opacity);

        };
    }

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

var indicatorGroups, componentGroups, elementGroups;


svg.each(function(matrix, j) {
    var svg = d3.select(this);
    indicatorLayout.matrix(indicators);
    componentLayout.matrix(componentMatrix);
    elementLayout.matrix(elementMatrix);

    indicatorGroups = svg.selectAll('g.indicator-group')
        .data(indicatorLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'indicator-group')
        .on('mouseover', fade(0.1))
        .on('mouseout', fade(1))
        .on('click', (d, i) => {
            $('main .content-holder').css({
                'display': 'block',
                'flex-basis': '25%'
            });

            $('.logo').css({
                'right': '22%'
            });

            appendIndicatorTemplate();
            $('.indicatorTitle').text(data[i].id);
            if (data[i].levels['1']) {
                $('.levelOne').text('Level 1');
                $('.levelOneBody').text(data[i].levels['1']);
            }
            if (data[i].levels['2']) {
                $('.levelTwo').text('Level 2');
                $('.levelTwoBody').text(data[i].levels['2']);
            }
            if (data[i].levels['3']) {
                $('.levelThree').text('Level 3');
                $('.levelThreeBody').text(data[i].levels['3']);
            }
            if (data[i].levels['4']) {
                $('.levelFour').text('Level 4');
                $('.levelFourBody').text(data[i].levels['4']);
            }
            // $('.componentBody').text(components[i].body);
        });



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
    componentGroups = svg.selectAll('g.component-group-main')
        .data(componentLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'component-group-main')
        .on('mouseover', showCorrespondingIndicatorChordsComponent(0.1))
        .on('mouseout', showCorrespondingIndicatorChordsComponent(1))
        .on('click', (d, i) => {
            $('main .content-holder').css({
                'display': 'block',
                'flex-basis': '25%'
            });
            $('.logo').css({
                'right': '22%'
            });
            appendComponentTemplate();
            $('.componentTitle').text(components[i].component);
            $('.componentBody').text(components[i].body);
        });

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
                return 11;
            } else {
                return 14;
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
    elementGroups = svg.selectAll('g.element-group-main')
        .data(elementLayout.groups)
        .enter()
        .append('svg:g')
        .attr('class', 'element-group-main')
        .on('mouseover', showCorrespondingIndicatorChordsElement(0.1))
        .on('mouseout', showCorrespondingIndicatorChordsElement(1))
        .on('click', (d, i) => {
            $('main .content-holder').css({
                'display': 'block',
                'flex-basis': '25%'
            });
            $('.logo').css({
                'right': '22%'
            });
            $('main .content-holder').animate({
                display: 'block',
            }, 3000);
            appendElementTemplate();
            $('.headerColor').css('background', elements[i].color);
            $('.elementTitle').text(elements[i].element);
            $('.elementTag').text(elements[i].tag);
            $('.elementBody').text(elements[i].body);
        });

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




const appendElementTemplate = () => {
    $('.template').remove();
    var html = '<div class="template">' +
        '<div class="headerColor"></div>' +
        '<h2 class="elementTitle"></h2>' +
        '<h5 class="elementTag"></h5>' +
        '<p class="elementBody"></p>' +
        '<div class="headerColor"></div>' + '</div>'
    $('main .content-holder').append(html);
}


const appendComponentTemplate = () => {
    $('.template').remove();
    var html = '<div class="template">' +
        '<h2 class="componentTitle"></h2>' +
        '<p class="componentBody"></p>' + '</div>'
    $('main .content-holder').append(html);
}


const appendIndicatorTemplate = () => {
    $('.template').remove();
    var html = '<div class="template">' +
        '<h2 class="indicatorTitle"></h2>' +
        '<h3 class="indicatorLevelsTitle">LEVELS</h3>' +
        '<h4>' + '<span class="levelOne"> </span>' + '</h4>' +
        '<p class="levelOneBody"> </p>' +
        '<h4>' + '<span class="levelTwo"> </span>' + '</h4>' +
        '<p class="levelTwoBody"> </p>' +
        '<h4>' + '<span class="levelThree"> </span>' + '</h4>' +
        '<p class="levelThreeBody"> </p>' +
        '<h4>' + '<span class="levelFour"> </span>' + '</h4>' +
        '<p class="levelFourBody"> </p>' + '</div>'
    $('main .content-holder').append(html);
}


$(document).ready(() => {
    $('select').change(() => {
        connectionType = $('select').val();
        indicatorGroups.on('mouseover', fade(0.1))
        indicatorGroups.on('mouseout', fade(1))
        componentGroups.on('mouseover', showCorrespondingIndicatorChordsComponent(0.1))
        componentGroups.on('mouseout', showCorrespondingIndicatorChordsComponent(1));
        elementGroups.on('mouseover', showCorrespondingIndicatorChordsElement(0.1))
        elementGroups.on('mouseout', showCorrespondingIndicatorChordsElement(1))
    })
    $('.closeButton').click(() => {
        $('.content-holder').css('display', 'none')
        $('.logo').css({
            'right': '2%'
        });
    })
});
