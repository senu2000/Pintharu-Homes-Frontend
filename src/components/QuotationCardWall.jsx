import {
    Button,
    Radio,
    Card,
    Checkbox,
    Label,
    TextInput,
} from "flowbite-react";
import "../css/QuotationCard.css";
import React, {useState} from "react";

export default function QuotationCardWall() {
    const [showEstimate, setShowEstimate] = useState(false);
    const [estimate, setEstimate] = useState("");

    const rates = {
        interior_skimcoatputty: 100,
        interior_filler: 50,
        interior_paint: 75,
        exterior_skimcoatputty: 110,
        exterior_filler: 60,
        exterior_paint: 85,
    };

    const calculateTotalCost = (area, wallType, preferences) => {
        let totalRate = 0;

        preferences.forEach((preference) => {
            const key = `${wallType}_${preference}`;
            totalRate += rates[key];
        });

        const totalCost = totalRate * area;
        return totalCost;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const area = parseFloat(document.getElementById('dimensions').value);
        const wallType = document.querySelector('input[name="walltype"]:checked').value.toLowerCase();
        const preferences = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map((checkbox) => checkbox.id);

        const calculatedEstimate = calculateTotalCost(area, wallType, preferences);
        setEstimate(`Rs ${calculatedEstimate}`);
        setShowEstimate(true);
    };

    return (
        <Card className="max-w-md quotation-card mt-16 mb-20">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="dimensions" value="Desired area for the paint project"/>
                    </div>
                    <TextInput
                        id="dimensions"
                        type="number"
                        placeholder="Enter Your Dimensions in ft²"
                        required
                    />
                </div>
                <div>
                    <fieldset className="flex max-w-md gap-4 preference">
                        <legend className="mb-4">Select Your Wall Type</legend>
                        <div className="flex items-center gap-2">
                            <Radio id="interior" name="walltype" value="Interior"/>
                            <Label htmlFor="interior">Interior</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="exterior" name="walltype" value="Exterior"/>
                            <Label htmlFor="exterior">Exterior</Label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className="mb-4">Add Your Preference</legend>
                        <div className="flex">
                            <div className="flex items-center me-4">
                                <Checkbox id="skimcoatputty"/> &nbsp;
                                <Label htmlFor="skimcoatputty">Skim Coat Putty</Label>
                            </div>
                            <div className="flex items-center me-4">
                                <Checkbox id="filler"/> &nbsp;
                                <Label htmlFor="filler">Filler Coat</Label>
                            </div>
                            <div className="flex items-center me-4">
                                <Checkbox id="paint"/> &nbsp;
                                <Label htmlFor="paint">Paint Coat</Label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <Button type="submit">Calculate</Button>
                {showEstimate && (
                    <div className="justify-center text-center mt-6 mb-4">
                      <div className="inline-flex items-baseline ">
                        <p className="self-center">Estimated Cost :&nbsp;&nbsp;&nbsp; </p>
                        <span className="text-3xl self-center font-bold"> {estimate}.00/= </span>
                      </div>
                      <p className="text-red-800 text-sm">( Note : Price can be negotiable after interruption)</p>
                    </div>
                )}
            </form>
        </Card>
    );
}
