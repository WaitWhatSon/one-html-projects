import LED7Segment from "./elements_scripts/7_segment_led.js"
import LED7SegmentDriver from "./elements_scripts/7_segment_led_driver.js"
import LED4 from "./elements_scripts/4_leds.js"
import NANDs from "./elements_scripts/7400_nand.js";

window.onload = function() {
    init();
};

function init()
{
    let displayer = new LED7Segment("7_segment_led", "#ff0000");
    // displayer.create_checkboxes("led_checkboxes");

    let driver = new LED7SegmentDriver("7_segment_led_driver", displayer);
    driver.create_checkboxes("driver_checkboxes");

    
    let leds_0 = new LED4("leds_0");
    // leds_0.create_checkboxes("leds_checkboxes");

    let nand_0 = new NANDs("nand_0",
        [leds_0, leds_0, leds_0, leds_0],
        [leds_0.led1, leds_0.led2, leds_0.led3, leds_0.led4]);
    nand_0.create_checkboxes("nand_checkboxes");
    
    // nand_0.notify_input(nand_0.pin2, 0);

    // nand_0.assign_y(0, nand_0, nand_0.pin9);
    // nand_0.assign_y(1, nand_0, nand_0.pin10);

    
    // let nand_1 = new NANDs("nand_1", 
    //         {   "y1": leds_0, "y2": leds_0, 
    //             "y3": leds_0, "y4": leds_0             },
    //         {   "y1": leds_0.led1, "y2": leds_0.led2, 
    //             "y3": leds_0.led3, "y4": leds_0.led4   });

    // let nand_0 = new NANDs("nand_0", 
    //         {   "y1": nand_1, "y2": nand_1, 
    //             "y3": nand_1, "y4": nand_1             },
    //         {   "y1": nand_1.get_nand1().x1, "y2": nand_1.get_nand1().x2, 
    //             "y3": nand_1.get_nand2().x1, "y4": nand_1.get_nand2().x2  });
    // nand_0.create_checkboxes("nand_checkboxes");
    
}