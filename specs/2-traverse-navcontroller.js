#import "jasmine-iphone-uiautomation/jasmine-uiautomation-reporter.js"

describe('NavBar app', function() {

var target = UIATarget.localTarget()
var app = target.frontMostApp()
var window = app.mainWindow()
var table = window.tableViews()[0]

it('should select View 4 option', function() {
    table.cells()['View 4'].tap()
    expect(window.navigationBar().segmentedControls().length).toBe(1)
})

it('should select Text option', function() {
    target.delay(0.5)
    window.navigationBar().segmentedControls()[0].tapWithOptions({offset: {x:0.5, y:0.5}})
    target.delay(0.5)
    expect(window.navigationBar().segmentedControls()[0].selectedButton().name()).toMatch('Text')
})

it('should return to main menu', function() {
    window.navigationBar().leftButton().tap()
    expect(window.navigationBar().staticTexts()['NavBar'].isVisible()).toBeTruthy()
})

})

jasmine.getEnv().addReporter(new jasmine.UIAutomation.Reporter());
jasmine.getEnv().execute();
