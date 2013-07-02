Feature: Manage rental plans

  Scenario: Add new day range
    Given I have a single day range
    When I update the endpoint of the last range
    Then I should have a new ray range

  Scenario: Remove last day range
    Given I have two day ranges
    When I remove the last day range
    Then I should have only one day range
    And I should see "--" in the endpoint of the last day range

  Scenario: Add new hour range
    Given I have a single day range
    When I update the endpoint of the last range
    Then I should have a new hour range

  Scenario: Remove last hour range
    Given I have a single day range
    Given I have two hour ranges
    When I remove the last hour range
    Then I should have only one hour range
    And I should see "24" in the endpoint of the last hour range

  Scenario: Unallow to remove first range
    Given I have a single day range
    And I have a single hour range
    Then I shouldn't see a button to remove the day range
    And I shouldn't see a button to remove the hour range
