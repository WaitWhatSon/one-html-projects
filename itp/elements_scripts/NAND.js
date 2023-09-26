export default class NAND {
    
    #x1;
    #x2;
    #y;

    constructor(x1, x2)
    {
        this.#x1 = x1;
        this.#x2 = x2;
        this.check_nand();
    }

    check_nand()
    {
        if(this.#x1 == 1 && this.#x2 == 1)
        { 
            this.#y = 0; 
        }
        else 
        { 
            this.#y = 1; 
        }
    }

    set_x1(value)
    {
        this.#x1 = value;
        this.check_nand();
    }

    set_x2(value)
    {
        this.#x2 = value
        this.check_nand();
    }

    get_y()
    {
        return this.#y;
    }
}