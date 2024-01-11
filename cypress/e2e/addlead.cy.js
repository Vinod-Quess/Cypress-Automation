
import 'cypress-mochawesome-reporter/register';
import 'cypress-iframe';
import Leads from  "../Pageobjects/Leads.js";
import 'cypress-iframe';

describe('Regression testcases for Leads in FMS', function () {
  //Use the cy.fixture() method to pull data from fixture file
  let testdata
  before(() =>{
    cy.fixture('dataset').then((data) => {
    testdata = data;
    })
  })

  it('Add New Lead Successful', () => {
    cy.visit('https://fmsqa.goddardschool.com/login.aspx?ReturnUrl=%2f')

    //Login to FMS
    cy.visit("https://fmsqa.goddardschool.com/default.aspx")
    cy.get("#loginName").type(testdata.username);
   cy.get("#loginPass").type(testdata.password);
    cy.get("#loginButton").click();
    cy.get('a:contains("Logout")').should("be.visible")
  
    //Navigate - Leads>Search/View Leads
    cy.get("#leadsTopMenu").click()
    cy.get('a:contains("Search/View Leads")').first().click()    
    cy.wait(3000)
    //Click on + icon
    cy.get('span[class="ui-icon ui-icon-plus"]').last().click()
    cy.wait(3000)

    cy.get('iframe').should('be.visible').wait(2000).then(($iframe) => {
      const iframeDoc = $iframe.contents();
      cy.wrap(iframeDoc).find('input[id="primaryFirstName"]').type(testdata.primaryFirstName);
      cy.wrap(iframeDoc).find('input[id="primaryLastName"]').type(testdata.primaryLastName);
      cy.wrap(iframeDoc).find('select[id="phoneNumberType"]').select('Home');
      cy.wrap(iframeDoc).find('input[id="phoneNumber"]').type(testdata.phoneNumber);
      cy.wrap(iframeDoc).find('input[id="emailAddress"]').type(testdata.emailAddress);
      cy.wrap(iframeDoc).find('input[id="homeAddressLine1"]').type('1480 US Highway 46');
      cy.wrap(iframeDoc).find('input[id="homeAddressLine2"]').type('Apt 357A');
      cy.wrap(iframeDoc).find('input[id="homeAddressZipCode"]').type('07054');
      cy.wrap(iframeDoc).find('input[id="zipcodeLookup"]').click();
      cy.wrap(iframeDoc).find('select[id="leadStatus"]').select(testdata.leadStatus);
      cy.wrap(iframeDoc).find('select[id="leadInquiryMethod"]').select(testdata.leadInquiryMethod);
      cy.wrap(iframeDoc).find('input[id="leadInquiryDate"]').type('10/30/2023');
      cy.wrap(iframeDoc).find('select[id="primaryReferralMethod"]').select(testdata.primaryReferralMethod);
      cy.wrap(iframeDoc).find('select[id="secondaryReferralMethod"]').select(testdata.secondaryReferralMethod);
      cy.wrap(iframeDoc).find('input[id="child1FirstName"]').type(testdata.child1FirstName);      
      cy.wrap(iframeDoc).find('input[id="child1DateOfBirth"]').type(testdata.child1DateOfBirth).type('{enter}');
      cy.wrap(iframeDoc).find('input[id="saveButton"]').click();
      cy.wait(4000);
     // cy.wrap(iframeDoc).find("#mainPLACEHOLDER_inquiryFollowupActivities_detailRepeater_activity_0").select('E Mail Followup');
     cy.wrap(iframeDoc).find('select[id="mainPLACEHOLDER_inquiryFollowupActivities_detailRepeater_activity_0"]').select('E Mail Followup');
      cy.wrap(iframeDoc).find('input[id="mainPLACEHOLDER_inquiryFollowupActivities_detailRepeater_dueDate_0"]').type('11/18/2023');
      cy.wait(4000);
      cy.wrap(iframeDoc).find("#mainPLACEHOLDER_inquiryFollowupActivities_detailRepeater_recipient_0").select('Jon Drialo');
      cy.wrap(iframeDoc).find('input[id="saveNoDuplicateCheckbutton"]').click();
      cy.wait(5000);
      cy.wrap(iframeDoc).get("input[id='gotoLeadCenter']").click();
       

      
    });
   })
 })