

const { defineConfig } = require("cypress");
// const xlsx = require("node-xlsx").default;
const fs = require("fs");
// const path = require("path");
 
// import { defineConfig } from "cypress";
// import * as xlsx from 'xlsx'
const xlsx = require('xlsx');

module.exports = defineConfig({
  // projectId: "ti6oc3",
  projectId: "7nex1c",
  defaultCommandTimeout: 10000,
  reporter:'cypress-mochawesome-reporter',
  video:true,
  reporterOptions: {
    "reportDir": "cypress/results",
    "charts":true,
    "overwrite": false,
    "html": false,
    "json": true
    
  },
  
  
  e2e: {
    setupNodeEvents(on, config) {
      // e2e.testIsolation=false,
      this.testIsolation=
      'none',
      defaultCommandTimeout=10000;
     screenshotonRunfailure=true;
     require('cypress-mochawesome-reporter/plugin')(on); 
      
     
    //  this.testIsolation:false,
     on('task', {
      generateJSONFromExcel: (args) => {
        // Your task logic here
        // This is just an example; adjust it according to your task implementation
        console.log(args.excelFilePath)
        console.log(args.sheetName)
        const workbook = xlsx.readFile(args.excelFilePath)
        const worksheet =workbook.Sheets[args.sheetName]
            // const worksheet = workbook.Sheets(workbook.SheetNames[0])
            const jsonData = xlsx.utils.sheet_to_json(worksheet)
            return jsonData
      }
    });

  }}
})

