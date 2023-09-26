export default class LED7Segment {

    constructor(id, color)
    {
        this.displayer = document.getElementById(id).contentDocument;
        this.color = color;
    }

    led_on(led)
    {
        let LED = this.displayer.getElementById(led);
        LED.setAttribute('style', 'fill:' + this.color);
    }

    led_off(led)
    {
        let LED = this.displayer.getElementById(led);
        LED.setAttribute('style', 'fill:#333333');
    }

    create_checkbox(id)
    {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = id;
        checkbox.id = id;
    
        checkbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                this.led_on(id);
            } else {
                this.led_off(id);
            }
        })
        return checkbox;
    }

    create_checkboxes(id)
    {
        let checkboxes = document.getElementById(id);
        for(let led of ["A", "B", "C", "D", "E", "F", "G", "H"])
        {        
            checkboxes.appendChild(this.create_checkbox(led));
        }
    }

}