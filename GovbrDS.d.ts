abstract class DefaultClass {
    // eslint-disable-next-line no-useless-constructor
    constructor(classname: string, element: HTMLElement, index: string | number) {}
}

declare module '@govbr-ds/core/dist/core' {
    export class BRAccordion extends DefaultClass {}
    export class BRAlert extends DefaultClass {}
    export class BRBreadcrumb extends DefaultClass {}
    export class BRCard extends DefaultClass {}
    export class BRCarousel extends DefaultClass {}
    export class BRCheckbox extends DefaultClass {}
    export class BRCookiebar extends DefaultClass {}
    export class BRDateTimePicker extends DefaultClass {}
    export class BRFooter extends DefaultClass {}
    export class BRHeader extends DefaultClass {}
    export class BRInput extends DefaultClass {}
    export class BRItem extends DefaultClass {}
    export class BRList extends DefaultClass {}
    export class BRMenu extends DefaultClass {}
    export class BRModal extends DefaultClass {}
    export class BRNotification extends DefaultClass {}
    export class BRPagination extends DefaultClass {}
    export class BRScrim extends DefaultClass {}
    export class BRSelect extends DefaultClass {}
    export class BRStep extends DefaultClass {}
    export class BRTab extends DefaultClass {}
    export class BRTable extends DefaultClass {}
    export class BRTag extends DefaultClass {}
    export class BRTextarea extends DefaultClass {}
    export class BRTooltip extends DefaultClass {}
    export class BRUpload extends DefaultClass {}
    export class BRWizard extends DefaultClass {}
}
