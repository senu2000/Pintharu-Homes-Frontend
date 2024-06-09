import {
    Button,
    Radio,
    Card,
    Checkbox,
    Label,
    TextInput,
} from "flowbite-react";
import "../css/QuotationCard.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function QuotationCardWall() {
    const [showEstimate, setShowEstimate] = useState(false);
    const [estimate, setEstimate] = useState("");
    const [interiorSkimcoatputty, setInteriorSkimcoatputty] = useState("");
    const [interiorFiller, setInteriorFiller] = useState("");
    const [interiorPaint, setInteriorPaint] = useState("");
    const [exteriorSkimcoatputty, setExteriorSkimcoatputty] = useState("");
    const [exteriorFiller, setExteriorFiller] = useState("");
    const [exteriorPaint, setExteriorPaint] = useState("");

    useEffect(() => {
        const fetchQuotations = async () => {
            try {
                const response1 = await axios.get('http://localhost:8080/api/quotation/1');
                setInteriorSkimcoatputty(response1.data.unit_price);

                const response2 = await axios.get('http://localhost:8080/api/quotation/2');
                setInteriorFiller(response2.data.unit_price);

                const response3 = await axios.get('http://localhost:8080/api/quotation/3');
                setInteriorPaint(response3.data.unit_price);

                const response4 = await axios.get('http://localhost:8080/api/quotation/4');
                setExteriorSkimcoatputty(response4.data.unit_price);

                const response5 = await axios.get('http://localhost:8080/api/quotation/5');
                setExteriorFiller(response5.data.unit_price);

                const response6 = await axios.get('http://localhost:8080/api/quotation/6');
                setExteriorPaint(response6.data.unit_price);
            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };

        fetchQuotations();
        const intervalId = setInterval(fetchQuotations, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const rates = {
        interior_skimcoatputty: interiorSkimcoatputty,
        interior_filler: interiorFiller,
        interior_paint: interiorPaint,
        exterior_skimcoatputty: exteriorSkimcoatputty,
        exterior_filler: exteriorFiller,
        exterior_paint: exteriorPaint,
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
