Feature: I can navigate to the info view
  
  Background:
    Given "NavBar/NavBar.xcodeproj" is loaded in the iphone simulator
  
  Scenario:
   When I tap "info-button"
   Then I should see "Done"

   When I tap "Done"
   Then I should see "NavBar"
