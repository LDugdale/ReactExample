export default class SpinnerController {

    constructor() {
        this.spinner = null;
    }

    attach(spinner) {
        this.spinner = spinner;
    }

    show() {
        this.spinner.show = true;
    }

    hide() {
        this.spinner.show = false;
    }

    isShowing() {
        return this.spinner.show;
    }
}

const spinnerController = new SpinnerController();  
export { spinnerController }  