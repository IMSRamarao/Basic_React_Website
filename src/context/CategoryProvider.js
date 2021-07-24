import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = props => {
    const [categoryData, setCategoryData] = useState(
        [
            {

                name: "Dickens - Franecki",
                address: "12158 Randall Port",
                city: "East Maureenbury",
            },
            {

                name: "Weissnat, Schowalter and Koelpin",
                address: "92027 Murphy Cove",
                city: "Port Malachi",

            },
            {

                name: "Cruickshank, Bayer and Gerlach",
                address: "45974 Paxton Corner",
                city: "Gerlachmouth",
            },
            {
                name: "Boyle LLC",
                address: "54371 Mikel Spurs",
                city: "South Josephland",
            },
            {
                name: "Bernier - Hane",
                address: "45929 Chaya Lane",
                city: "Hettingerchester",
            },
            {
                name: "O'Hara Group",
                address: "582 Metz Harbor",
                city: "North Columbus",

            },
            {
                name: "Bayer and Sons",
                address: "1577 Waters Alley",
                city: "New Sabrinahaven",
            },
            {
                name: "Leannon, Fahey and Sawayn",
                address: "3710 Lew Walk",
                city: "Baileybury",
            },
            {

                name: "Lowe, Wunsch and Stoltenberg",
                address: "93936 Barrows Dale",
                city: "Lake Guido",
            },
            {
                name: "Hodkiewicz Inc",
                address: "45516 Ruben Cove",
                city: "Greenberg",
            },
            {
                name: "Konopelski Inc",
                address: "81835 Willms Drive",
                city: "Harrisonton",
            },
            {
                name: "Nikolaus - Schinner",
                address: "04914 Heaney Turnpike",
                city: "Franeckiside",
            },
            {
                name: "Sipes Inc",
                address: "3190 Braun Rue",
                city: "Lake Adalbertoberg",
            },
            {
                name: "McCullough - Lueilwitz",
                address: "8863 Osinski Views",
                city: "West Rachel",

            },
            {

                name: "Heathcote, Kautzer and Turner",
                address: "3721 Maddison Ville",
                city: "Framishire",

            },
            {
                name: "Konopelski Group",
                address: "476 Minnie Land",
                city: "Walterhaven",

            },
            {
                name: "Metz - Kautzer",
                address: "240 Hoppe Shoal",
                city: "Julesshire",
            },
            {
                name: "Rice Inc",
                address: "264 Jayce Trafficway",
                city: "South Fleta",
            },
            {
                name: "Franecki - Gaylord",
                address: "300 Vandervort Stream",
                city: "Lake Kylechester",
            },
            {

                name: "Oberbrunner, Block and Mills",
                address: "356 Conroy Garden",
                city: "New Aileen",
            },
            {
                name: "Feil, Dooley and Reinger",
                address: "06966 Alfred Ways",
                city: "East Lucio",
            },
            {

                name: "Leuschke, Smith and Conroy",
                address: "604 McKenzie Wall",
                city: "Immanuelview",
            }
        ]);

    return (
        <CategoryContext.Provider value={[categoryData, setCategoryData]}>
            {props.children}
        </CategoryContext.Provider>
    );
};
