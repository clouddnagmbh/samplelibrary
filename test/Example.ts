//@ts-ignore
import { CancellationButton } from "at/clouddna/samplelibrary/library";
// or import CancellationButton from "../src/CancellationButton";

// create a new instance of the Example control and

const cancellationButton = new CancellationButton({
    cancellationState: false
});

cancellationButton.placeAt("content");