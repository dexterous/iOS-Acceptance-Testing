#import "jasmine-iphone-uiautomation/jasmine-uiautomation-reporter.js"

describe('Scrolling app', function() {

var target = UIATarget.localTarget()
var app = target.frontMostApp()
var window = app.mainWindow()
var topView = window.scrollViews()[0]
var bottomView = window.scrollViews()[1]

it('should scroll top view', function() {
    topView.dragInsideWithOptions({
        startOffset:{x:0.8, y:0.5},
        endOffset:{x:0.2, y:0.5}
    })
    target.delay(1)
})

it('should scroll top view to last image', function() {
    topView.images()['image5.jpg'].scrollToVisible()
    target.delay(1)
})

it('should flick bottom view diagonally', function() {
    bottomView.flickInsideWithOptions({
        startOffset: {x:0.55, y:0.55},
        endOffset: {x:0.45, y:0.45}
    })
})

})

jasmine.getEnv().addReporter(new jasmine.UIAutomation.Reporter());
jasmine.getEnv().execute();
