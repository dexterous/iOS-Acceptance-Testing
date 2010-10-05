#import "jasmine-iphone-uiautomation/jasmine-uiautomation-reporter.js"

describe('iPhone', function() {

var target = UIATarget.localTarget()

it('should rotate', function() {
    target.delay(1);target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPERIGHT)
    target.delay(1);target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT_UPSIDEDOWN)
    target.delay(1);target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT)
    target.delay(1);target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT)
    target.delay(1);target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_FACEDOWN)
    target.delay(1);target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_FACEUP)
})

it('should lock and unlock', function() {
    target.delay(1);target.lock()
    target.delay(1);target.unlock()
})

})

jasmine.getEnv().addReporter(new jasmine.UIAutomation.Reporter());
jasmine.getEnv().execute();
