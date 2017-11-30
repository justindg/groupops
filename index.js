var MODEL_1 = 1;
var MODEL_2 = 2;
var MODEL_3 = 3;
var MODEL_4 = 4;
var MODEL_5 = 5;
var MODEL_6 = 6;

$('.model').on('click', function() {
  $('#home').hide();
  $('#page2').show();
  $('.banner-back').show();
  $('.banner-subtext').hide();
});

$('.page2-footer-top').on('click', function() {
  window.location.href = "#page2";
});

var m1 = $('.m1');
var m2 = $('.m2');
var m3 = $('.m3');
var m4 = $('.m4');
var m5 = $('.m5');
var m6 = $('.m6');

m1.on('click', function() {
  th_m1.click();
});

m2.on('click', function() {
  th_m2.click();
});

m3.on('click', function() {
  th_m3.click();
});

m4.on('click', function() {
  th_m4.click();
});

m5.on('click', function() {
  th_m5.click();
});

m6.on('click', function() {
  th_m6.click();
});

$('.banner-back').on('click', function() {
  $('#home').show();
  $('#page2').hide();
  $('.banner-back').hide();
  $('.banner-subtext').show();
  $('.banner-subtitle').text("Career Model");
  $('.banner-title').text("Group Operations");
});

var deselectMainTableItems = function() {
  $('.main-td').removeClass('main-td-selected');
  $('.main-th').removeClass('main-th-selected');
}

var families = {
  leadership: {
    title: "People Leadership",
    description: "People leaders thrive on helping people fulfill their potential. If you're a people leader, or you aspire to be one, you're motivated by developing, inspiring and engaging others to achieve exceptional customer outcomes. You are energised by seeing others grow and develop. You are a coach, an educator, a captain of business."
  },
  operations: {
    title: "Operations",
    description: "Positions in Operations are focused on seamless execution and delivery of exceptional customer outcomes. In these roles you can make a real difference to our customers' everyday banking experience with every process, every request, and every service performed."
  },
  rcd :{
    title: "RCD",
    description: "Roles in Retail Credit Decisioning (RCD) assess retail lending applications and apply judgement when requests are outside of business rules. This function has frequent interactions with lenders and brokers to provide solutions."
  },
  aroc :{
    title: "AROC",
    description: "Automation and Robotics Operations Centre (AROC) deploys emerging and robotics technologies that helps to transform and digitize our operations businesses to achieve global best-practise. If you are motivated by driving the art of the possible in the digital world and are technically savvy, check out our exciting new roles."
  },
  process_architecture :{
    title: "Process Architecture",
    description: "Process Architecture designs and delivers transformational customer experiences with processes and digital assets that can be reused and standardized across the Group. If you believe process centricity can add value to the Group and our customers and are an excellent collaborator, check  out our exciting roles."
  },
  analytics :{
    title: "Analytics",
    description: "Positions in the GO Analytics function enable data driven, real time insights to support experiences our customers love. If you are motivated by finding the why through data analytics and have a data orientation check out our roles."
  }
};

var updateFamilyText = function(model) {
  $('.h1-model-title').text(model.title);
  $('.p-model-description').text(model.description);
};

var updateFamilyDescription = function(model) {
  switch (model) {
    case MODEL_1:
      updateFamilyText(families.leadership);
      break;
    case MODEL_2:
      updateFamilyText(families.operations);
      break;
    case MODEL_3:
      updateFamilyText(families.rcd);
      break;
    case MODEL_4:
      updateFamilyText(families.aroc);
      break;
    case MODEL_5:
      updateFamilyText(families.process_architecture);
      break;
    case MODEL_6:
      updateFamilyText(families.analytics);
      break;
    default:
      break;
  }
}

var th_m1 = $('.th-m1');
var th_m2 = $('.th-m2');
var th_m3 = $('.th-m3');
var th_m4 = $('.th-m4');
var th_m5 = $('.th-m5');
var th_m6 = $('.th-m6');

var selectCol1 = function() {
  deselectMainTableItems();
  $('.main-td-1').addClass('main-td-selected');
  $('.th-m1').addClass('main-th-selected');
  updateFamilyDescription(MODEL_1);
}

var selectCol2 = function() {
  deselectMainTableItems();
  $('.main-td-2').addClass('main-td-selected');
  $('.th-m2').addClass('main-th-selected');
  updateFamilyDescription(MODEL_2);
}

var selectCol3 = function() {
  deselectMainTableItems();
  $('.main-td-3').addClass('main-td-selected');
  $('.th-m3').addClass('main-th-selected');
  updateFamilyDescription(MODEL_3);
}

var selectCol4 = function() {
  deselectMainTableItems();
  $('.main-td-4').addClass('main-td-selected');
  $('.th-m4').addClass('main-th-selected');
  updateFamilyDescription(MODEL_4);
}

var selectCol5 = function() {
  deselectMainTableItems();
  $('.main-td-5').addClass('main-td-selected');
  $('.th-m5').addClass('main-th-selected');
  updateFamilyDescription(MODEL_5);
}

var selectCol6 = function() {
  deselectMainTableItems();
  $('.main-td-6').addClass('main-td-selected');
  $('.th-m6').addClass('main-th-selected');
  updateFamilyDescription(MODEL_6);
}

th_m1.on('click', function() {
  $('#role_description').hide();
  selectCol1();
});

th_m2.on('click', function() {
  $('#role_description').hide();
  selectCol2();
});

th_m3.on('click', function() {
  $('#role_description').hide();
  selectCol3();
});

th_m4.on('click', function() {
  $('#role_description').hide();
  selectCol4();
});

th_m5.on('click', function() {
  $('#role_description').hide();
  selectCol5();
});

th_m6.on('click', function() {
  $('#role_description').hide();
  selectCol6();
});

var td_m1 = $('.main-td-1');
var td_m2 = $('.main-td-2');
var td_m3 = $('.main-td-3');
var td_m4 = $('.main-td-4');
var td_m5 = $('.main-td-5');
var td_m6 = $('.main-td-6');


var updateRoleDescription = function(d) {
  updateFamilyDescription(d.model);
  $('.role-title-text').text(d.title);
  $('.link').text(d.link);
  $('.purpose-body').html(d.purpose);
  $('.responsibility-body').html(d.responsibility);
  $('.experience-body').html(d.experience);
  $('.future-content').html(d.future);
  $('.feeder-content').html(d.feeder);
  $('.capability-content1').html(d.capability);
  $('.capability-content2').html(d.capability2);
};

var scrollToRoleDescription = function() {
  window.location.href = '#role_description';
}

var leadership = {
  executive_manager : {
    family: MODEL_1,
    obj: $('.l1'),
    title: "Executive Manager",
    link: '',
    purpose: "<p>The emphasis of this role is the effective running of the department from a Customer Experience, Operational Excellence and people management point of view. This role connects with stakeholders inside and outside the group as a business owner. This is a functional manager role focused on  delivering results in an environment in transformation.</p>",
    responsibility: "<p>You set the strategy for your function. You lead your extended team to achieve a great customer experience by removing road blocks to a truly customer centric culture.</p><p>You lead a complex transformational agenda and are effective at complex stakeholder management across the Group and externally.</p><p>Your outlook is strategic but you can deep dive into the details of your operational business and people as required.</p><p>You proactively drive your area to deliver effective risk management and compliance. </p><p>You lead, coach, inspire and motivate others. Builds change resilience within your area and lead with values.</p>",
    experience: "<div>Manager plus:</div><ul><li>Leading transformational change</li><li>Flexible and connected - proven relationship management</li><li>Innovative thinking and insights</li></ul>",
    feeder: '<ul><li>Other operations EM/Mng roles</li><li>Risk EM</li><li>Customer service EM</li></ul>',
    future: '<ul><li>Other operations EM/GM roles</li><li>EM roles in respective product/brand</li></ul>',
    capability: '<ul><li>Operational Management</li><li>People Leadership</li><li>Risk Management</li><li>Change Management</li></ul>',
    capability2: '<ul><li>Productivity and CI</li><li>Customer Experience</li><li>Agile</li></ul>'
  },
  manager: {
    family: MODEL_1,
    obj: $('.l2'),
    title: "Manager",
    purpose: '<p>This is a manager of managers role and its emphasis is team management and operational  business management. The Manager role ensures the tam is focused on delivering a great customer experience and driving execution of processes in an efficient, effective and risk aware way.</p>',
    responsibility: '<p>As a second line manager, you ensure the organization under your span of control executes work volumes, proactively manages and anticipates operational risks and has the flexibility of resources to deliver performance outcomes for the product or the services in scope. Your focus is equally split between leading and coaching leaders and leading business processing. You drive and empower your team to create a great customer experience while at the same time meeting financial and risk objectives.</p><p>You embed a values based culture, manage change, build resilience within your team and inspire the team to continually improve. You proactively lead teams to deliver effective risk management and compliance. You build change resilience within teams and create motivation for change.</p>',
    experience: '<div>Team Leader plus:</div><ul><li>Performance Driven record with customer focus in large teams/areas</li><li>Resilient, leading motivational change</li><li>Demonstrates values based leadership</li></ul>',
    feeder: '<ul><li>Other operations Mng/TL roles</li><li>Risk Mng</li><li>Customer service Mng</li></ul>',
    future: '<ul><li>Other operations M/EM roles</li><li>Mng roles in respective product/brand</li></ul>',
    capability: '<ul><li>Operational Management</li><li>People Management</li><li>Risk Management</li></ul>',
    capability2: '<ul><li>Change Management</li><li>Productivity and CI</li><li>Customer Experience</li></ul>'
  },
  team_leader: {
    family: MODEL_1,
    obj: $('.l3'),
    title: "Team Leader",
    purpose: '<p>The emphasis of this role is on people management and operational management focusing on reliable and efficient execution of processes with particular attention to customer experience and risk management.</p>',
    responsibility: '<p>You drive the performance of your team in terms of outputs and  customer experience on a daily basis. You lead  a values based culture. You inspire colleagues to drive continuous improvement in service of the customer experience. You lead for customer outcomes and build a customer centric culture. You ensure the team follows all risk management and compliance requirements. You manage change and coach and motivate your team through it.</p>',
    experience: '<ul><li>Proven track record of driving performance with customer focus</li><li>Change enabler</li><li>Adaptability and innovative thinking</li><li>Lives values</li></ul>',
    feeder: '<ul><li>Other operations TL/ roles</li><li>Risk Analyst</li><li>Customer service TL</li></ul>',
    future: '<ul><li>Other operations TL/Mng roles</li><li>TL roles in respective product/brand</li></ul>',
    capability: '<ul><li>Operational Management</li><li>People Management</li><li>Risk Management</li></ul>',
    capability2: '<ul><li>Change Management</li><li>Productivity and CI</li></ul>'
  }
};

var operations = {
  advanced_operations: {
    family: MODEL_2,
    obj: $('.o1'),
    title: "Advanced Operations",
    purpose: '<p>Delivering great customer experiences for a range of highly variable products and services. May entail supervisory responsibility for the work of others including escalations, exceptions and complex cases. The emphasis of this role is on execution.</p>',
    responsibility: '<p>You are the operations professional who make things happen in an efficient and risk aware way. Advanced processing involving  complex data, investigations and technical expertise. Reliance on acquired knowledge and learning. Able to apply knowledge/problem solving strategies to resolve unfamiliar problems within area of responsibility. Can provide recommendations to support escalations for more complex issues. Provides specialist advice and solutions to stakeholders.</p>',
    experience: '<div>Complex Operations plus</div><ul><li>Expert in technical area</li><li>Innovative thinking/insights</li><li>Change resilient, leading motivational change</li></ul>',
    feeder: '<ul><li>Other advanced/complex operations roles</li><li>Risk Analyst</li><li>Customer service Officer</li></ul>',
    future: '<ul><li>Other advanced operations roles</li><li>SME</li><li>Team leader</li></ul>',
    capability: '<ul><li>Growth Mindset and learning agility</li><li>Change Resilience</li><li>Customer Experience</li><li>Understanding Data</li></ul>',
    capability2: '<ul><li>Understanding Technology</li><li>Creative Problem Solving</li><li>Productivity</li></ul>'
  },
  complex_operations: {
    family: MODEL_2,
    obj: $('.o2'),
    title: "Complex Operations",
    purpose: '<p>Delivering great customer experiences for a broad range products and services. May entail supervisory responsibility for the work of others including escalations, exceptions and complex cases. The emphasis of this role is on execution.</p>',
    responsibility: '<p>You are the operations professional who make things happen in an efficient and risk aware way. Complex processing at times applying acquired knowledge to supplement SOPs. Accountable for own work, may have accountability for others. Able to resolve for common problems using acquired learning. Coaches others to increase technical competence. Representative for projects/stakeholders meetings. Provides specialist advice and solutions to stakeholders.</p>',
    experience: '<div>Standard Operations plus:</div><ul><li>Deep cross business experience</li><li>Knowledge thinking/analytics</li></ul>',
    feeder: '<ul><li>Other complex operations roles</li><li>Risk Analyst</li><li>Customer service Officer</li></ul>',
    future: '<ul><li>Other complex/advanced operations roles</li><li>SME</li><li>Team leader</li></ul>',
    capability: '<ul><li>Growth Mindset and learning agility</li><li>Change Resilience</li><li>Customer Experience</li><li>Understanding Data</li></ul>',
    capability2: '<ul><li>Understanding Technology</li><li>Creative Problem Solving</li><li>Productivity</li></ul>'
  },
  standard_operations: {
    family: MODEL_2,
    obj: $('.o3'),
    title: "Standard Operations",
    purpose: '<p>Delivering great customer experiences for a range of operational work routines and procedures and may be a point of reference for some aspects of work. The emphasis of this role is on execution.</p>',
    responsibility: '<p>You are the operations professional who make things happen in an efficient and risk aware way. Processing following an SOP most of the time, some discretion for problem solving on mainly familiar problems. Accountable for own work as part of a team, may have some oversight of others. Able to resolve familiar problems within a defined scope and with clear point of escalation in place.</p>',
    experience: '<div>Low Complexity plus:</div><ul><li>Value add judgement</li><li>Continuous improvement thinking application</li><li>Understand user experience of process (design thinking)</li></ul>',
    feeder: '<ul><li>Other standard operations roles</li><li>Call centre operator</li><li>Customer service Officer</li></ul>',
    future: '<ul><li>Other standard/ complex operations roles</li><li>SME</li><li>Team leader</li></ul>',
    capability: '<ul><li>Growth Mindset and learning agility</li><li>Change Resilience</li><li>Customer Experience</li><li>Understanding Data</li></ul>',
    capability2: '<ul><li>Understanding Technology</li><li>Creative Problem Solving</li><li>Productivity</li></ul>'
  },
  operations: {
    family: MODEL_2,
    obj: $('.o4'),
    title: "Operations",
    purpose: '<p>Delivering great customer experiences for a range of routine  operational work procedures. The emphasis of this role is on execution.</p>',
    responsibility: '<p>You are the operations professional who make things happen in an efficient and risk aware way.  Processing following a SOP. Some limited discretion for familiar problem solving from a limited range of solutions. Accountable for own work as part of a team to meet output requirements. Escalates problems outside of SOPs and documented solutions.</p>',
    experience: '<ul><li>Customer focused</li><li>Embraces Change</li><li>Self motivated</li></ul>',
    feeder: '<ul><li>Other low complexity operations roles</li><li>Call centre operator</li><li>Customer service Officer</li></ul>',
    future: '<ul><li>Other low complexity/standard operations roles</li><li>SME</li><li>Team leader</li></ul>',
    capability: '<ul><li>Growth Mindset and learning agility</li><li>Change Resilience</li><li>Customer Experience</li><li>Understanding Data</li></ul>',
    capability2: '<ul><li>Understanding Technology</li><li>Creative Problem Solving</li><li>Productivity</li></ul>'
  },
  specialized_sme: {
    family: MODEL_2,
    obj: $('.o5'),
    title: "Specialized SME",
    purpose: '<p>The emphasis of this role is on sharing process knowledge, process  variations and analysis of root causes to deliver exceptional customer outcomes.</p><p>To provide deep product and process knowledge to improve experiences for our employees and customers. SME to represent a team and lead project work, continuous improvement initiatives and problem solving relating to the product/process. This role can stand in for, and has the decision making authority of a Manager.</p>',
    responsibility: '<ul><li>Will develop and implement agreed changes to process including testing, roll out planning, risk control, employee training/coaching, stakeholder mgt etc.</li><li>Will coach employees as needed with complex work items and changes to process and policy.</li><li>Will provide input/decisions on policy and process changes.</li><li>Reference point for escalation from Managers/EMs with decision making authority equivalent to a Manager.</li></ul>',
    experience: '<ul><li>Ability to work independently and deploy time management skills</li><li>Deep experience in a product or process environment</li><li>Experience influencing and negotiating in complex environment e.g./ project team</li><li>Strong customer service, stakeholder management</li><li>Deep knowledge of CBA systems and products</li></ul>',
    feeder: '<ul><li>Advanced operations roles</li><li>Team Leader</li></ul>',
    future: '<ul><li>Manager Operations/Product</li><li>Executive Manager Operations</li></ul>',
    capability: '<ul><li>Lean Productivity - Sound</li><li>Risk assessment & management</li><li>Change Management</li></ul>',
    capability2: '<ul><li>Design Thinking</li><li>Critical Analysis & Insight Generation</li></ul>'
  },
  advanced_sme: {
    family: MODEL_2,
    obj: $('.o6'),
    title: "Advanced SME",
    purpose: '<p>The emphasis of this role is on sharing process knowledge, process  variations and analysis of root causes to deliver exceptional customer outcomes.</p><p>To be a business reference point for complex escalations from Team Leaders/Managers and their teams related to product and process along with day to day technical product and process support to the Manage & team to enhance employee and customer experiences. This role can stand in for, and has the decision making authority of a Team Leader.</p>',
    responsibility: '<ul><li>Assisting the Team leader or Manager in analysing team work performance</li><li>Completes audits of platform data, complex data investigations</li><li>Will coach employees as needed with complex work items and changes to process and policy</li><li>Will represent at project meetings, to problem solves issues</li><li>Coaching team members through the provision of subject matter expertise, observation and feedback</li><li>Will update/maintain process document/SOPs</li></ul>',
    experience: '<ul><li>Experience in team supervision in a product or process environment</li><li>Attention to detail, accuracy and ability to work to deadlines</li><li>Ability to lead and influence without direct line management responsibility</li><li>Ability to work independently and be self-motivated</li><li>Advanced knowledge of CBA systems and products</li></ul>',
    feeder: '<ul><li>Complex/Advanced operations roles</li><li>Team Leader</li></ul>',
    future: '<ul><li>SME A level role</li><li>Team Leader Operations/Product</li><li>Manager Operations</li></ul>',
    capability: '<ul><li>Lean Productivity</li><li>Risk assessment & management</li><li>Production Management</li></ul>',
    capability2: '<ul><li>Growth Mindset and learning agility</li><li>Change Management</li></ul>'
  },
  sme: {
    family: MODEL_2,
    obj: $('.o7'),
    title: "SME",
    purpose: '<p>The emphasis of this role is on sharing process knowledge, process  variations and analysis of root causes to deliver exceptional customer outcomes.</p><p>To be a business reference point for escalations from Team members related to product and process along with day to day technical product and process support to the Team Leader/Manager. This role aims to enhance the employee and customer experience by responding to and managing customer and stakeholder enquiries, complaints and issues.</p>',
    responsibility: '<ul><li>Is a reference point for complex processing escalations from Team Members</li><li>Reference point for projects requiring in-depth knowledge of process and product</li><li>Provide recommendations to the Manager on opportunities to improve the processes based on outcomes of investigations and data reference points</li><li>Undertaking investigations in respect to customer requests and/or as a result of transactional or exception based issues</li></ul>',
    experience: '<ul><li>Prior experience in similar role in a product or process environment</li><li>Demonstrated customer service experience</li><li>Attention to detail</li><li>Working knowledge of CBA system and products</li></ul>',
    feeder: '<ul><li>Standard/Complex operations roles</li></ul>',
    future: '<ul><li>SME B level role</li><li>Team Leader</li></ul>',
    capability: '<ul><li>Lean Productivity</li><li>Risk assessment & management</li><li>Production Management</li><li>Growth Mindset and learning agility</li></ul>',
    capability2: ''
  },
}

var rcd = {
  credit_investigation_analyst: {
    family: MODEL_3,
    obj: $('.r1'),
    title: "Credit Investigation Analyst",
    purpose: '<p>Making sound credit decisions which ensure the ongoing financial wellbeing of our customers, whilst complying with business rules and responsible lending.</p>',
    responsibility: '<p>Assessing retail lending applications and using judgement when requests are outside of business rules. Engage with lenders/brokers to provide solutions. Use a range of tools and resources to ensure responsible lending requirements met e.g. servicing calculators.</p>',
    experience: '<ul><li>Expertise in a credit or lending role</li><li>Sound commercial acumen</li><li>Deep understanding of credit assessment – having exercised a personal credit authority previous is an advantage</li><li>Able to find solutions or alternatives</li></ul>',
    feeder: '<ul><li>Retail Lenders</li><li>GLS verification Officers</li><li>Direct Lending Specialists</li></ul>',
    future: '<ul><li>More complex assessment roles</li><li>Business lending/credit roles</li><li>Leadership roles</li></ul>',
    capability: '<ul><li>Credit skills</li><li>Analytical skills</li><li>Customer experience</li><li>Written and oral communication</li></ul>',
    capability2: '<ul><li>Resilient through regular change</li><li>Growth mindset</li><li>Learning agility</li></ul>'
  }
}

var aroc = {
  robotics_senior_analyst: {
    family: MODEL_4,
    obj: $('.aroc1'),
    title: "Robotics Senior Analyst",
    purpose: '<p></p>',
    responsibility: '<p></p>',
    experience: '<div></div><ul><li></li></ul>',
    feeder: '<ul><li></li></ul>',
    future: '<ul><li></li></ul>',
    capability: '<ul><li></li></ul>',
    capability2: '<ul><li></li></ul>'
  },
  robotics_analyst: {
    family: MODEL_4,
    obj: $('.aroc2'),
    title: "Robotics Analyst",
    purpose: '<p></p>',
    responsibility: '<p></p>',
    experience: '<div></div><ul><li></li></ul>',
    feeder: '<ul><li></li></ul>',
    future: '<ul><li></li></ul>',
    capability: '<ul><li></li></ul>',
    capability2: '<ul><li></li></ul>'
  },
}

var analytics = {
  senior_analytics_analyst: {
    family: MODEL_6,
    obj: $('.an1'),
    title: "Senior Analytics Analyst",
    purpose: '<p>This role will deliver actionable and utilise advanced analytical skills to allow the business to maximise profitable growth and customer satisfaction outcomes using analytical tools (e.g. SQL, Teradata, R) in conjunction with large data sets. Providing proactive analysis and insights will help maximize our customer experience and enable leaders and colleagues to make data driven decisions.</p>',
    responsibility: '<p>You deliver insights and analytical model in a timely manner and ensure follow up by your stakeholders. You innovate and optimise by providing proactive technical and business optimization solutions complex business problems. The data and insights you provide helps support leaders make data driven decisions.  </p>',
    experience: '<div>Analytics Analyst plus:</div><ul><li>Deep cross business experience</li><li>Knowledge thinking/analytics</li></ul>',
    feeder: '<ul><li>Analyst</li><li>Senior analysts in risk or other disciplines</li></ul>',
    future: '<ul><li>Team leadership</li><li>Robotics roles</li><li>Data science roles</li></ul>',
    capability: '<ul><li>Growth Mindset and learning agility </li><li>Change Resilience</li><li>Understanding Data</li><li>Stakeholder management</li></ul>',
    capability2: '<ul><li>Understanding Technology</li><li>Creative Problem Solving</li><li>Customer Experience</li></ul>'
  },
  analytics_analyst: {
    family: MODEL_6,
    obj: $('.an2'),
    title: "Analytics Analyst",
    purpose: '<p>This role will deliver actionable and utilise analytical skills to allow the business to maximise profitable growth and customer satisfaction outcomes using analytical tools (e.g. SQL, Teradata, R) in conjunction with large data sets. Providing analysis and insights will help maximize our customer experience and enable leaders and colleagues to make data driven decisions.</p>',
    responsibility: '<p>You deliver insights and analytical model in a timely manner and ensure follow up by your stakeholders. You innovate and optimise by providing proactive technical and business optimization solutions for simple business problems. The data and insights you provide helps support leaders make data driven decisions.</p>',
    experience: '<ul><li>Expert in data analysis</li><li>Innovative thinking/insights</li><li>Change resilient</li><li>Curiosity and growth mindset</li></ul>',
    feeder: '<ul><li>Risk Analyst</li></ul>',
    future: '<ul><li>Senior analysis</li><li>Robotics analysts</li><li>Data science roles</li></ul>',
    capability: '<ul><li>Growth Mindset and learning agility </li><li>Change Resilience</li><li>Understanding Data</li><li>Stakeholder management</li></ul>',
    capability2: '<ul><li>Understanding Technology</li><li>Creative Problem Solving</li><li>Customer focus</li></ul>'
  },
}

var process_architecture = {
  team_leader: {
    family: MODEL_5,
    obj: $('.pa1'),
    title: "??",
    purpose: '<p></p>',
    responsibility: '<p></p>',
    experience: '<div></div><ul><li></li></ul>',
    feeder: '<ul><li></li></ul>',
    future: '<ul><li></li></ul>',
    capability: '<ul><li></li></ul>',
    capability2: '<ul><li></li></ul>'
  },
  team_leader: {
    family: MODEL_5,
    obj: $('.pa2'),
    title: "??",
    purpose: '<p></p>',
    responsibility: '<p></p>',
    experience: '<div></div><ul><li></li></ul>',
    feeder: '<ul><li></li></ul>',
    future: '<ul><li></li></ul>',
    capability: '<ul><li></li></ul>',
    capability2: '<ul><li></li></ul>'
  },
}

leadership.executive_manager.obj.on('click', function() {
  updateRoleDescription(leadership.executive_manager);
  selectCol1();
});

leadership.manager.obj.on('click', function() {
  updateRoleDescription(leadership.manager);
  selectCol1();
});

leadership.team_leader.obj.on('click', function() {
  updateRoleDescription(leadership.team_leader);
  selectCol1();
});

operations.advanced_operations.obj.on('click', function() {
  updateRoleDescription(operations.advanced_operations);
  selectCol2();
});

operations.complex_operations.obj.on('click', function() {
  updateRoleDescription(operations.complex_operations);
  selectCol2();
});

operations.standard_operations.obj.on('click', function() {
  updateRoleDescription(operations.standard_operations);
  selectCol2();
});

operations.operations.obj.on('click', function() {
  updateRoleDescription(operations.operations);
  selectCol2();
});

operations.specialized_sme.obj.on('click', function() {
  updateRoleDescription(operations.specialized_sme);
  selectCol2();
});

operations.advanced_sme.obj.on('click', function() {
  updateRoleDescription(operations.advanced_sme);
  selectCol2();
});

operations.sme.obj.on('click', function() {
  updateRoleDescription(operations.sme);
  selectCol2();
});

rcd.credit_investigation_analyst.obj.on('click', function() {
  updateRoleDescription(rcd.credit_investigation_analyst);
  selectCol3();
});

analytics.senior_analytics_analyst.obj.on('click', function() {
  updateRoleDescription(analytics.senior_analytics_analyst);
  selectCol6();
});

analytics.analytics_analyst.obj.on('click', function() {
  updateRoleDescription(analytics.analytics_analyst);
  selectCol6();
});

$('.main-item').on('click', function() {
  if ($(this).hasClass('main-item-disabled')) {

  } else {
    $('#role_description').show();
    scrollToRoleDescription();
  }
});