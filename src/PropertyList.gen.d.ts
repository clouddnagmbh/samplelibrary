import Item from "sap/ui/core/Item";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./PropertyList" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $PropertyListSettings extends $ControlSettings {
        mainLabel?: string | PropertyBindingInfo;
        propertyItems?: Item[] | Item | AggregationBindingInfo | `{${string}}`;
    }

    export default interface PropertyList {

        // property: mainLabel

        /**
         * Gets current value of property "mainLabel".
         *
         * Default value is: ""
         * @returns Value of property "mainLabel"
         */
        getMainLabel(): string;

        /**
         * Sets a new value for property "mainLabel".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: ""
         * @param [mainLabel=""] New value for property "mainLabel"
         * @returns Reference to "this" in order to allow method chaining
         */
        setMainLabel(mainLabel: string): this;

        // aggregation: propertyItems

        /**
         * Gets content of aggregation "propertyItems".
         */
        getPropertyItems(): Item[];

        /**
         * Adds some propertyItem to the aggregation "propertyItems".
         *
         * @param propertyItem The propertyItem to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addPropertyItem(propertyItems: Item): this;

        /**
         * Inserts a propertyItem into the aggregation "propertyItems".
         *
         * @param propertyItem The propertyItem to insert; if empty, nothing is inserted
         * @param index The "0"-based index the propertyItem should be inserted at; for
         *              a negative value of "iIndex", the propertyItem is inserted at position 0; for a value
         *              greater than the current size of the aggregation, the propertyItem is inserted at
         *              the last position
         * @returns Reference to "this" in order to allow method chaining
         */
        insertPropertyItem(propertyItems: Item, index: number): this;

        /**
         * Removes a propertyItem from the aggregation "propertyItems".
         *
         * @param propertyItem The propertyItem to remove or its index or id
         * @returns The removed propertyItem or "null"
         */
        removePropertyItem(propertyItems: number | string | Item): this;

        /**
         * Removes all the controls from the aggregation "propertyItems".
         * Additionally, it unregisters them from the hosting UIArea.
         *
         * @returns  An array of the removed elements (might be empty)
         */
        removeAllPropertyItems(): Item[];

        /**
         * Checks for the provided "sap.ui.core.Item" in the aggregation "propertyItems".
         * and returns its index if found or -1 otherwise.
         *
         * @param propertyItem The propertyItem whose index is looked for
         * @returns The index of the provided control in the aggregation if found, or -1 otherwise
         */
        indexOfPropertyItem(propertyItems: Item): number;

        /**
         * Destroys all the propertyItems in the aggregation "propertyItems".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyPropertyItems(): this;
    }
}
