 
// import { data } from "cypress/types/jquery";
import FMS_Login from "../PageObject/FMS_Login";
import 'cypress-mochawesome-reporter/register';

//import FMS_Home from "../../PageObject/FMS_Home";
// import "./commands"


describe('Login ',function(){

    const dayjs=require('dayjs'); 
         const todaysDate = dayjs().format('MM/DD/YYYY');

    

    it('Testcase 2: Login and Dashboard',()=>{

        let excelFilePath="./cypress/testData/testData.xlsx";
        let sheetName="testData";
       cy.task("generateJSONFromExcel",{excelFilePath,sheetName}).then((user)=>{
           console.log("output "+user[0].url)
           cy.visit(user[0].url);
           const gdLogin=new FMS_Login();
          // gdLogin.login(user[0].url,user[0].username,user[0].password);
           gdLogin.setUserName(user[0].username);
            gdLogin.setPassword(user[0].password);
            gdLogin.clickSubmit();
   
           
       })
       
        })
    })

   


    