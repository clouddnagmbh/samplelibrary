import EventProvider from "sap/ui/base/EventProvider";
import Event from "sap/ui/base/Event";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ButtonSettings } from "sap/m/Button";

declare module "./CancellationButton" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $CancellationButtonSettings extends $ButtonSettings {
        cancellationState?: boolean | PropertyBindingInfo | `{${string}}`;
        cancel?: (event: CancellationButton$CancelEvent) => void;
    }

    export default interface CancellationButton {

        // property: cancellationState

        /**
         * Gets current value of property "cancellationState".
         *
         * Default value is: false
         * @returns Value of property "cancellationState"
         */
        getCancellationState(): boolean;

        /**
         * Sets a new value for property "cancellationState".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: false
         * @param [cancellationState=false] New value for property "cancellationState"
         * @returns Reference to "this" in order to allow method chaining
         */
        setCancellationState(cancellationState: boolean): this;

        // event: cancel

        /**
         * Attaches event handler "fn" to the "cancel" event of this "CancellationButton".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "CancellationButton" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "CancellationButton" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachCancel(fn: (event: CancellationButton$CancelEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "cancel" event of this "CancellationButton".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "CancellationButton" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "CancellationButton" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachCancel<CustomDataType extends object>(data: CustomDataType, fn: (event: CancellationButton$CancelEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "cancel" event of this "CancellationButton".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachCancel(fn: (event: CancellationButton$CancelEvent) => void, listener?: object): this;

        /**
         * Fires event "cancel" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        fireCancel(parameters?: CancellationButton$CancelEventParameters): this;
    }

    /**
     * Interface describing the parameters of CancellationButton's 'cancel' event.
     */
    // eslint-disable-next-line
    export interface CancellationButton$CancelEventParameters {
    }

    /**
     * Type describing the CancellationButton's 'cancel' event.
     */
    export type CancellationButton$CancelEvent = Event<CancellationButton$CancelEventParameters>;
}
// This module enhances sap.ui.base.Event with Generics, which is needed in UI5 type definition versions below 1.115
declare module "sap/ui/base/Event" {
    export default interface Event<ParamsType extends Record<string, any> = object> {
        constructor(id: string, oSource: EventProvider, parameters: ParamsType);
        getParameters(): ParamsType;
        getParameter<ParamName extends keyof ParamsType>(name: ParamName): ParamsType[ParamName];
    }
}
