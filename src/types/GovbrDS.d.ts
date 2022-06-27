abstract class DefaultDSClass {
    // eslint-disable-next-line no-useless-constructor
    constructor(classname: string, element: HTMLElement, index: string | number) {}
}

declare module '@govbr-ds/core/dist/core' {
    export class BRAccordion extends DefaultDSClass {}
    export class BRAlert extends DefaultDSClass {}
    export class BRBreadcrumb extends DefaultDSClass {}
    export class BRCard extends DefaultDSClass {}
    export class BRCarousel extends DefaultDSClass {}
    export class BRCheckbox extends DefaultDSClass {}
    export class BRCookiebar extends DefaultDSClass {}
    export class BRDateTimePicker extends DefaultDSClass {}
    export class BRFooter extends DefaultDSClass {}
    export class BRHeader extends DefaultDSClass {}
    export class BRInput extends DefaultDSClass {}
    export class BRItem extends DefaultDSClass {}
    export class BRList extends DefaultDSClass {}
    export class BRMenu extends DefaultDSClass {}
    export class BRModal extends DefaultDSClass {}
    export class BRNotification extends DefaultDSClass {}
    export class BRPagination extends DefaultDSClass {}
    export class BRScrim extends DefaultDSClass {}
    export class BRSelect extends DefaultDSClass {}
    export class BRStep extends DefaultDSClass {}
    export class BRTab extends DefaultDSClass {}
    export class BRTable extends DefaultDSClass {}
    export class BRTag extends DefaultDSClass {}
    export class BRTextarea extends DefaultDSClass {}
    export class BRTooltip extends DefaultDSClass {}
    export class BRUpload extends DefaultDSClass {}
    export class BRWizard extends DefaultDSClass {}
}
