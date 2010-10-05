#import "jasmine-iphone-uiautomation/jasmine-uiautomation-reporter.js"

// spec code goes here

jasmine.getEnv().addReporter(new jasmine.UIAutomation.Reporter());
jasmine.getEnv().execute();
