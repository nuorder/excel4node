class Protection {
    /**
     * @class Protection
     * @param {Object} opts Properties of Alignment object
     * @param {Boolean} opts.locked Cell protection locked
     * @returns {Protection}
     */
    constructor(opts) {
        if (opts.locked === true || opts.locked === false) {
            this.locked = opts.locked;
        }
    }

    /**
     * @func Protection.toObject
     * @desc Converts the Protection instance to a javascript object
     * @returns {Object}
     */
    toObject() {
        let obj = {};
        this.locked !== undefined ? obj.locked = this.locked : null;
        return obj;
    }

    /**
     * @alias Protection.addToXMLele
     * @desc When generating Workbook output, attaches style to the styles xml file
     * @func Protection.addToXMLele
     * @param {xmlbuilder.Element} ele Element object of the xmlbuilder module
     */
    addToXMLele(ele) {
        let thisEle = ele.ele('protection');

        this.locked !== undefined ? thisEle.att('locked', this.locked ? 1 : 0) : null;
    }
}

module.exports = Protection;
