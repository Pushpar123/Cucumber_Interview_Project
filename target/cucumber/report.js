$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/GoogleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Google search page functionality",
  "description": "",
  "id": "validate-google-search-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 2782405200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User on google page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDeff.user_on_google_page()"
});
formatter.result({
  "duration": 2734533400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should ba able to search anything",
  "description": "",
  "id": "validate-google-search-page-functionality;user-should-ba-able-to-search-anything",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enter the search line \"DUCKS\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Search result will display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DUCKS",
      "offset": 28
    }
  ],
  "location": "StepDeff.user_enter_the_search_line(String)"
});
formatter.result({
  "duration": 4169809700,
  "status": "passed"
});
formatter.match({
  "location": "StepDeff.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "location": "StepDeff.search_result_will_display()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
});