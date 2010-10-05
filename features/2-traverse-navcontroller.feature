Feature: I can open app
  
  Background:
    Given "NavBar/NavBar.xcodeproj" is loaded in the iphone simulator
  
  Scenario:

   When I tap "View 4"
   Then I should see "Text"

   When I tap "Text"
   Then "Text" should be selected
   
   When I tap "NavBar"
   Then I should see "View 1"