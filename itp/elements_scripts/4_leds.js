export default class LED4 {

    constructor(id)
    {
        this.leds = document.getElementById(id).contentDocument;

        this.led1 = this.leds.getElementById("diode_1_on");
        this.led2 = this.leds.getElementById("diode_2_on");
        this.led3 = this.leds.getElementById("diode_3_on");
        this.led4 = this.leds.getElementById("diode_4_on");
    }

    led_on(led)
    {
        led.setAttribute('visibility', 'visible');
    }

    led_off(led)
    {
        led.setAttribute('visibility', 'hidden');
    }

    create_checkbox(led)
    {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
    
        checkbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                this.led_on(led);
            } else {
                this.led_off(led);
            }
        })
        return checkbox;
    }

    create_checkboxes(id)
    {
        let checkboxes = document.getElementById(id);
        for(let led of [this.led1, this.led2, this.led3, this.led4])
        {        
            checkboxes.appendChild(this.create_checkbox(led));
        }
    }

    notify_input(led, value)
    {
        if (value === 1) {
            this.led_on(led);
        } else {
            this.led_off(led);
        }
    }
    
}