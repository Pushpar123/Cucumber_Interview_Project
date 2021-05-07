@End2End
Feature: Validate Google search page functionality

Background:
Given User on google page

@Scenario
Scenario: User should ba able to search anything
When User enter the search line "DUCKS"
And User clicks on search button
Then Search result will display 
    