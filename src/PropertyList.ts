import Control from "sap/ui/core/Control";
//@ts-ignore
import type { MetadataOptions } from "sap/ui/core/Element";
import PropertyListRenderer from "at/clouddna/samplelibrary/PropertyListRenderer";
/**
 * @namespace at.clouddna.samplelibrary
 * @name at.clouddna.samplelibrary.PropertyList
 */
export default class PropertyList extends Control {
    static readonly metadata: MetadataOptions = {
        properties: {
            mainLabel: {
                type: "string",
                defaultValue: ""
            }
        },
        defaultAggregation: "propertyItems",
        aggregations: {
            propertyItems: {
                type: "sap.ui.core.Item",
                multiple: true,
                singularName: "propertyItem" 
            }
        }
	}

    constructor(id?: string | $PropertyListSettings);
	constructor(id?: string, settings?: $PropertyListSettings);
	constructor(id?: string, settings?: $PropertyListSettings) {
		super(id, settings);
	}

    init(): void {
     }

     static renderer: typeof PropertyListRenderer = PropertyListRenderer;

};