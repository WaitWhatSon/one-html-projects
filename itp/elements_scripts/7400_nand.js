import LED4 from "./4_leds.js";
import NAND from "./NAND.js";

export default class NANDs {

    #NANDs

    constructor(id, output_object, output)
    {
        this.nands = document.getElementById(id).contentDocument;

        this.#NANDs = [];

        for(let i = 0; i < 4; i++)
        {
            this.#NANDs.push({
                "gate": new NAND(1, 1), 
                "output_object": output_object[i], 
                "output": output[i]
            });
        }

        this.#init_pins();
    }

    create_checkbox(nand, gate_index, pin_index)
    {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = true;
    
        checkbox.addEventListener('change', (event) => {
            if(event.currentTarget.checked) {
                if(pin_index === 1){
                    nand.gate.set_x1(1);
                }
                else{
                    nand.gate.set_x2(1);
                }
            }
            else {
                if(pin_index === 1){
                    nand.gate.set_x1(0);
                }
                else{
                    nand.gate.set_x2(0);
                }
            }
            nand.gate.check_nand();
            this.notify_y(gate_index);
        })

        return checkbox;
    }

    create_checkboxes(id)
    {
        let checkboxes = document.getElementById(id);
        for(let index = 0; index<4; index++)
        {        
            checkboxes.appendChild(this.create_checkbox(this.#NANDs[index], index, 1));
            checkboxes.appendChild(this.create_checkbox(this.#NANDs[index], index, 2));
        }
    }

    assign_y(index, new_output_object, new_output)
    {
        this.#NANDs[index].output_object = new_output_object;
        this.#NANDs[index].output = new_output;
    }

    notify_y(index)
    {
        this.#NANDs[index].output_object.notify_input(this.#NANDs[index].output, this.#NANDs[index].gate.get_y());
    }

    notify_input(pin, value)
    {
        if(pin.nand_pin === 1){
            this.#NANDs[pin.nand_index].gate.set_x1(value);
        }
        else {
            this.#NANDs[pin.nand_index].gate.set_x2(value);
        }
        this.#NANDs[pin.nand_index].output_object.notify_input(this.#NANDs[pin.nand_index].output, this.#NANDs[pin.nand_index].gate.get_y());
    }

    #init_pins()
    {
        this.pin1 = this.nands.getElementById("pin1"); 
        this.pin1.nand_index = 0;
        this.pin1.nand_pin = 1;
        this.pin2 = this.nands.getElementById("pin2");
        this.pin2.nand_index = 0;
        this.pin2.nand_pin = 2;
        this.pin4 = this.nands.getElementById("pin4");
        this.pin4.nand_index = 1;
        this.pin4.nand_pin = 1;
        this.pin5 = this.nands.getElementById("pin5");
        this.pin5.nand_index = 1;
        this.pin5.nand_pin = 2;
        this.pin9 = this.nands.getElementById("pin9");
        this.pin9.nand_index = 2;
        this.pin9.nand_pin = 1;
        this.pin10 = this.nands.getElementById("pin10");
        this.pin10.nand_index = 2;
        this.pin10.nand_pin = 2;
        this.pin12 = this.nands.getElementById("pin12");
        this.pin12.nand_index = 3;
        this.pin12.nand_pin = 1;
        this.pin13 = this.nands.getElementById("pin13");
        this.pin13.nand_index = 3;
        this.pin13.nand_pin = 2;
    }
}