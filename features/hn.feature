Feature: Hacker News homepage behavior

Scenario: Homepage Elements
Given I visit homepage
Then I should see page header
And I should see page content
And I should see page footer

Scenario: News Links
Given I visit homepage
Then I should be presented with 30 items
When I click More Link
Then I should be presented with 30 new items