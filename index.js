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
    const mazdaModelInformation = [
        {
            "Model Name": "MX-5",
            "Model Generation": "1st Generation",
            "Engine Size": "1.6L NA",
            "Horsepower": "114",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/1994_Mazda_MX-5_Miata_in_Red%2C_front_right_%28Brooklyn%29.jpg/280px-1994_Mazda_MX-5_Miata_in_Red%2C_front_right_%28Brooklyn%29.jpg"
        },
        {
            "Model Name": "MX-5",
            "Model Generation": "2nd Generation",
            "Engine Size": "1.8L NA",
            "Horsepower": "140",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/MazdaMX5-001.jpg/280px-MazdaMX5-001.jpg"
        },
        {
            "Model Name": "MX-5",
            "Model Generation": "3rd Generation",
            "Engine Size": "2.0L NA",
            "Horsepower": "167",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/3rd_Mazda_MX-5_--_06-14-2010.jpg/280px-3rd_Mazda_MX-5_--_06-14-2010.jpg"
        },
        {
            "Model Name": "MX-5",
            "Model Generation": "4th Generation",
            "Engine Size": "2.0L NA",
            "Horsepower": "181",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2017_Mazda_MX-5_%28ND%29.jpg/280px-2017_Mazda_MX-5_%28ND%29.jpg"
        },
        {
            "Model Name": "RX-7",
            "Model Generation": "3rd Generation",
            "Engine Size": "1.3L Twin Turbo Rotary",
            "Horsepower": "273",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mazda-rx7-3rd-generation01.jpg/280px-Mazda-rx7-3rd-generation01.jpg"
        },
        {
            "Model Name": "3",
            "Model Generation": "4th Generation",
            "Engine Size": "1.8L Turbo",
            "Horsepower": "184",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2019_Mazda3_SE-L_2.0_Front.jpg/280px-2019_Mazda3_SE-L_2.0_Front.jpg"
        },
        {
            "Model Name": "Mazdaspeed 3",
            "Model Generation": "2nd Generation",
            "Engine Size": "2.3L Turbo",
            "Horsepower": "263",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mazda3_MPS_%28BL%29_%E2%80%93_Frontansicht%2C_22._Mai_2011%2C_D%C3%BCsseldorf.jpg/280px-Mazda3_MPS_%28BL%29_%E2%80%93_Frontansicht%2C_22._Mai_2011%2C_D%C3%BCsseldorf.jpg"
        },
        {
            "Model Name": "CX-5",
            "Model Generation": "1st Generation",
            "Engine Size": "2.0L NA",
            "Horsepower": "164",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mazda_CX-5_2.0_SKYACTIV-G_AWD_Sports-Line_%E2%80%93_Frontansicht%2C_3._September_2012%2C_D%C3%BCsseldorf.jpg/280px-Mazda_CX-5_2.0_SKYACTIV-G_AWD_Sports-Line_%E2%80%93_Frontansicht%2C_3._September_2012%2C_D%C3%BCsseldorf.jpg"
        },
        {
            "Model Name": "Rx-3",
            "Model Generation": "1st Generation",
            "Engine Size": "1.6L NA",
            "Horsepower": "70",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mazda_Grand_Familia_20150118-1.JPG/280px-Mazda_Grand_Familia_20150118-1.JPG"
        },
        {
            "Model Name": "RX-8",
            "Model Generation": "1st Generation",
            "Engine Size": "1.3 NA Rotary",
            "Horsepower": "231",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2006_Mazda_RX-8_2.6.jpg/280px-2006_Mazda_RX-8_2.6.jpg"
        }
    ];

    return mazdaModelInformation;
}