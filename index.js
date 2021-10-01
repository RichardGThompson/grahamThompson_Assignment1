// Include express for web handling
const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.send("Unauthorized endpoint!");
});

// Define the the Honda API endpoint
app.get('/api/honda', (req,res) => {
    res.send(hondaAPIHandler());
});

// Define the the Mazda API endpoint
app.get('/api/mazda', (req,res) => {
    res.send(mazdaAPIHandler());
});

// Listen on the pre-defined port
app.listen(port, () => {
    console.log("Listening on port: ", port);
});

/**
 * Returns the data requested for the Honda API call.
 * @return {Array} List of Honda models.
 */
function hondaAPIHandler(){
    const hondaModelInformation = [
        {
            "Model Name": "Civic Si",
            "Model Generation": "10th Generation",
            "Engine Size": "1.5L Turbo",
            "Horsepower": "205",
            "Image URL": "https://media.ed.edmunds-media.com/honda/civic/2020/oem/2020_honda_civic_coupe_si_fq_oem_1_1280.jpg"
        },
        {
            "Model Name": "Prelude",
            "Model Generation": "5th Generation",
            "Engine Size": "2.2L NA",
            "Horsepower": "200",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2001_Prelude_SE_%28cropped%29.jpg/280px-2001_Prelude_SE_%28cropped%29.jpg"
        },
        {
            "Model Name": "Pilot",
            "Model Generation": "3rd Generation",
            "Engine Size": "3.5L NA",
            "Horsepower": "280",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2017_Honda_Pilot_AWD_front_6.15.18.jpg/280px-2017_Honda_Pilot_AWD_front_6.15.18.jpg"
        },
        {
            "Model Name": "Accord",
            "Model Generation": "10th Generation",
            "Engine Size": "2.0L Turbo",
            "Horsepower": "252",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/%2721_Honda_Accord_Sedan.jpg/200px-%2721_Honda_Accord_Sedan.jpg"
        },
        {
            "Model Name": "Accord",
            "Model Generation": "7th Generation",
            "Engine Size": "2.4L NA",
            "Horsepower": "166",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2006_Honda_Accord_V6L_sedan_%282018-11-02%29.jpg/220px-2006_Honda_Accord_V6L_sedan_%282018-11-02%29.jpg"
        },
        {
            "Model Name": "CRX",
            "Model Generation": "2nd Generation",
            "Engine Size": "1.6L NA",
            "Horsepower": "158",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/1991CRXSi.jpg/280px-1991CRXSi.jpg"
        },
        {
            "Model Name": "CRZ",
            "Model Generation": "1st Generation",
            "Engine Size": "1.5L Hybrid",
            "Horsepower": "121",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2014_Honda_CR-Z_Sport-T_i-VTEC_1.5_Front.jpg/280px-2014_Honda_CR-Z_Sport-T_i-VTEC_1.5_Front.jpg"
        },
        {
            "Model Name": "Passport",
            "Model Generation": "3rd Generation",
            "Engine Size": "3.5L NA",
            "Horsepower": "280",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2019_Honda_Passport_EX-L_3.5L%2C_front_8.27.19.jpg/280px-2019_Honda_Passport_EX-L_3.5L%2C_front_8.27.19.jpg"
        },
        {
            "Model Name": "CR-V",
            "Model Generation": "5th Generation",
            "Engine Size": "2.4L NA",
            "Horsepower": "184",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2019_Honda_CR-V_EX_i-VTEC_1.5.jpg/280px-2019_Honda_CR-V_EX_i-VTEC_1.5.jpg"
        },
        {
            "Model Name": "NSX",
            "Model Generation": "2nd Generation",
            "Engine Size": "3.5L Hybrid",
            "Horsepower": "610",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Honda%2C_Paris_Motor_Show_2018%2C_Paris_%281Y7A1625%29.jpg/280px-Honda%2C_Paris_Motor_Show_2018%2C_Paris_%281Y7A1625%29.jpg"
        },
    ];

    return hondaModelInformation;
}

/**
 * Returns the data requested for the Mazda API call.
 * @return {Array} List of Mazda models.
 */
function mazdaAPIHandler(){
    // TODO: Add functionality.
}