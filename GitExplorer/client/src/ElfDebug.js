/**
 * Created by bcuser on 5/2/17.
 */

export default class ElfDebug {

    constructor(showInit = false) {
        this.showData = showInit;

    }

    getFirst(wrapper, element) {

        if (this.showData) {
            const ninep = wrapper.find(element).first().debug();
            console.log(ninep);
        }
    };

    getLast(wrapper, element) {
        if (this.showData) {
            const ninep = wrapper.find(element).last().debug();
            console.log(ninep);
        }
    };

    getAll(wrapper, element) {
        if (this.showData) {
            const ninep = wrapper.find(element).debug();
            console.log(ninep);
        }
    };

    getIndex(wrapper, index) {
        if (this.showData) {
            const ninep = wrapper.find('form').childAt(index).type().value;
            console.log(ninep);
        }
    };
}