/**
 * Created by bcuser on 4/30/17.
 */
import Logger from './elf-logger';
const logger = new Logger(true);

const ElfTestShow = class {

    constructor(showLogInit=false) {
        this.showLog = showLogInit;
    }

    getFirst(wrapper, element) {
        if (this.showLog) {
            const eightp = wrapper.find(element).first().debug();
            logger.log("ENZYME TEST GET FIRST:", eightp);
        }
    }


    getAll(wrapper, element) {
        if (this.showLog) {
            const eightp = wrapper.find(element).debug();
            logger.log("ENZYME DEBUG GET ALL:", eightp);
        }
    }

    getLast(wrapper, element) {
        if (!this.showLog) {
            const eightp = wrapper.find(element).last().debug();
            logger.log("ENZYME TEST GET LAST:", eightp);
        }
    }

};

export default ElfTestShow;