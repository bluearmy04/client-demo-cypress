Feature: Dashboard Page


    Dashboard items Check

Scenario: Dashboard Items check after login
Given I am logged in user 
When I have landed on the dashboard page
Then I should be able to go to the pages shown in the dashboard
And I should be able to check my user information in profile section   