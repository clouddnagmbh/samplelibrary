import RenderManager from "sap/ui/core/RenderManager";
import PropertyList from "at/clouddna/samplelibrary/PropertyList";
import Title from "sap/m/Title";
import Item from "sap/ui/core/Item";

/**
 * @namespace at.clouddna.samplelibrary
 * @name at.clouddna.samplelibrary.PropertyListRenderer
 */
export default {
	apiVersion: 2,

	render: function (rm: RenderManager, control: PropertyList) {
        rm.openStart("div", control);
		rm.openEnd();

        //@ts-ignore
        const mainLabel = control.getMainLabel(),
            label = new Title({
                text: mainLabel
            });
        rm.renderControl(label);

        rm.openStart("ul");
        rm.openEnd();
        //@ts-ignore
        const propertyItems: Item[] = control.getPropertyItems();

        propertyItems.forEach(propertyItem => {
            const text = `${propertyItem.getKey()}: ${propertyItem.getText()}`
            rm.openStart("li");
            rm.openEnd();
            rm.text(text)
            rm.close("li");
        });

        rm.close("ul");
		rm.close("div");
	}
};
