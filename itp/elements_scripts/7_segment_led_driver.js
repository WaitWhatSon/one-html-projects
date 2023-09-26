import LED7Segment from "./7_segment_led.js";

export default class LED7SegmentDriver {

    constructor(id, displayer)
    {
        this.decoder = document.getElementById(id).contentDocument;
        this.displayer = displayer;
        this.checkboxes = [];
    }

    decode(number)
    {
        for(let i = 0; i<7; i++)
        {
            if( LUT[number][i]=== 1)
            {
                this.displayer.led_on(leds[i]);
            }
            else
            {
                this.displayer.led_off(leds[i]);
            }
        }
    }

    create_checkbox(id)
    {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = true;
        checkbox.name = id;
        checkbox.id = id;
    
        checkbox.addEventListener('change', (event) => {
            
            let number = 0;
            let j = 1;
            for(let i = 0; i<4; i++)
            {
                if(this.checkboxes[i].checked)
                {
                    number += j;
                }
                j *= 2;
            }

            for(let led = 0; led<7; led++)
            {
                if (LUT[number][led]) {
                    this.displayer.led_on(leds[led]);
                } else {
                    this.displayer.led_off(leds[led]);
                }
            }
        })
        return checkbox;
    }

    create_checkboxes(id)
    {
        let checkboxes = document.getElementById(id);
        for(let led of ["D", "C", "B", "A"])
        {
            let checkbox = this.create_checkbox(led);
            checkboxes.insertBefore(checkbox, checkboxes.firstChild);
            this.checkboxes.push(checkbox);
        }
    }
}

const leds = ["A", "B", "C", "D", "E", "F", "G"];

const LUT = [
    [1,1,1,1,1,1,0], //0
    [0,1,1,0,0,0,0], //1
    [1,1,0,1,1,0,1], //2
    [1,1,1,1,0,0,1], //3
    [0,1,1,0,0,1,1], //4
    [1,0,1,1,0,1,1], //5
    [0,0,1,1,1,1,1], //6
    [1,1,1,0,0,0,0], //7
    [1,1,1,1,1,1,1], //8
    [1,1,1,0,0,1,1], //9
    [0,0,0,1,1,0,1], //10
    [0,0,1,1,0,0,1], //11
    [0,1,0,0,0,1,1], //12
    [1,0,0,1,0,1,1], //13
    [0,0,0,1,1,1,1], //14
    [0,0,0,0,0,0,0], //15
];

const ABCD = [
    {"A": 0, "B": 0, "C": 0, "D": 0},
    {"A": 0, "B": 0, "C": 0, "D": 1},
    {"A": 0, "B": 0, "C": 1, "D": 0},
    {"A": 0, "B": 0, "C": 1, "D": 1},
    {"A": 0, "B": 1, "C": 0, "D": 0},
    {"A": 0, "B": 1, "C": 0, "D": 1},
    {"A": 0, "B": 1, "C": 1, "D": 0},
    {"A": 0, "B": 1, "C": 1, "D": 1},
    {"A": 1, "B": 0, "C": 0, "D": 0},
    {"A": 1, "B": 0, "C": 0, "D": 1},
    {"A": 1, "B": 0, "C": 1, "D": 0},
    {"A": 1, "B": 0, "C": 1, "D": 1},
    {"A": 1, "B": 1, "C": 0, "D": 0},
    {"A": 1, "B": 1, "C": 0, "D": 1},
    {"A": 1, "B": 1, "C": 1, "D": 0},
    {"A": 1, "B": 1, "C": 1, "D": 1},
];