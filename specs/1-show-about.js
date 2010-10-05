#import "jasmine-iphone-uiautomation/jasmine-uiautomation-reporter.js"

describe('NavBar app', function() {

var target = UIATarget.localTarget()
var app = target.frontMostApp()
var window = app.mainWindow()

it('should display Info view', function() {
    window.navigationBar().buttons()[1].tap()
    expect(window.buttons()['Done'].isVisible()).toBeTruthy()
})

it('should return to main menu', function() {
    window.buttons()[0].tap()
    expect(window.navigationBar().staticTexts()['NavBar']).toBeTruthy()
})

})

jasmine.getEnv().addReporter(new jasmine.UIAutomation.Reporter());
jasmine.getEnv().execute();
