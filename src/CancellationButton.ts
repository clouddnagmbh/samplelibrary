import Button from "sap/m/Button";
import MessageBox, { Action } from "sap/m/MessageBox";
import Event from "sap/ui/base/Event";
//@ts-ignore
import type { MetadataOptions } from "sap/ui/core/Element";
/**
 * @namespace at.clouddna.samplelibrary
 * @name at.clouddna.samplelibrary.CancellationButton
 */
export default class CancellationButton extends Button {
    static readonly metadata: MetadataOptions = {
        properties: {
            cancellationState: {
                type: "boolean",
                defaultValue: false
            }
        },
        events: {
            cancel: {}
        },
	}

    constructor(id?: string | $CancellationButtonSettings);
	constructor(id?: string, settings?: $CancellationButtonSettings);
	constructor(id?: string, settings?: $CancellationButtonSettings) {
		super(id, settings);
	}

    init(): void {
        this.attachPress(this.onCancel.bind(this));
     }

    private setCancellationState(cancellationState: boolean){
        this.setProperty("cancellationState", cancellationState, true);

        if(cancellationState == true ){
            this.setText("Already cancelled");
            this.setEnabled(false);
        } else {
            this.setText("Cancel");
            this.setEnabled(true);
        }
    }

    private onCancel(event: Event){
        MessageBox.confirm("Do you want to cancel?",{
            onClose: (action: string)=>{
                if(action == Action.OK){
                    this.fireEvent("cancel", {
                        cancellationState: this.getProperty("cancellationState")
                    })
                }
            }
        })
    }

    renderer = {}
};