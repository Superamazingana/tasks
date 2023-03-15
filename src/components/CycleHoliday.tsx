import React, { useState } from "react";
import { Button } from "react-bootstrap";

{
    /* 2/4 test cases passed*/
}
type Holiday =
    | "4thofJuly 🎆"
    | "St Patty's Day ☘️"
    | "Christmas 🎄"
    | "New Year's ✨"
    | "Birthday 🎁";
const holiday_Chronological: Record<Holiday, Holiday> = {
    "St Patty's Day ☘️": "4thofJuly 🎆",
    "4thofJuly 🎆": "Birthday 🎁",
    "Birthday 🎁": "Christmas 🎄",
    "Christmas 🎄": "New Year's ✨",
    "New Year's ✨": "St Patty's Day ☘️"
};
const holiday_alphabetical: Record<Holiday, Holiday> = {
    "Birthday 🎁": "Christmas 🎄",
    "Christmas 🎄": "4thofJuly 🎆",
    "4thofJuly 🎆": "New Year's ✨",
    "New Year's ✨": "St Patty's Day ☘️",
    "St Patty's Day ☘️": "Birthday 🎁"
};

export function CycleHoliday(): JSX.Element {
    // eslint-disable-next-line prefer-const
    let [holiday, setHoliday] = useState<string>("Birthday 🎁");

    function changeByYear(): void {
        const newHoliday = holiday_Chronological[holiday];
        setHoliday(newHoliday);
    }
    function changeByAlphabet(): void {
        const newHoliday = holiday_alphabetical[holiday];
        setHoliday(newHoliday);
    }

    return (
        <>
            <div> Holiday: {holiday}</div>
            <div>
                <Button onClick={changeByYear}>Holiday Through the Year</Button>
                {<div>{holiday}</div>}
            </div>
            <div>
                <Button onClick={changeByAlphabet}>
                    Holiday in Alphabetical Order
                </Button>
                {<div>{holiday}</div>}
            </div>
        </>
    );
}
