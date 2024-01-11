class leads {
clickleads(){
    cy.get("#leadsTopMenu").click()
}
setSearchViewLeads(){
    cy.get('a:contains("Search/View Leads")').first().click() 
}
clickplus(){
    cy.get('span[class="ui-icon ui-icon-plus"]').last().click()
}
setprimaryFirstName(){
    cy.wrap(iframeDoc).find('input[id="primaryFirstName"]').type(dataset.primaryFirstName);
}
setprimaryLastName(){
    cy.wrap(iframeDoc).find('input[id="primaryLastName"]').type(dataset.primaryLastName);
}
setphoneNumberType(){
    cy.wrap(iframeDoc).find('select[id="phoneNumberType"]').select('Home');
}
setphoneNumber(){
    cy.wrap(iframeDoc).find('input[id="phoneNumber"]').type(dataset.phoneNumber);
}
setemailAddress(){
    cy.wrap(iframeDoc).find('input[id="emailAddress"]').type(dataset.emailAddress);
}
sethomeAddressLine1(){
    cy.wrap(iframeDoc).find('input[id="homeAddressLine1"]').type('1480 US Highway 46');
}
sethomeAddressLine2(){
    cy.wrap(iframeDoc).find('input[id="homeAddressLine2"]').type('Apt 357A');
}
sethomeAddressZipCode(){
    cy.wrap(iframeDoc).find('input[id="homeAddressZipCode"]').type('07054');
}
clickzipcodeLookup(){
    cy.wrap(iframeDoc).find('input[id="zipcodeLookup"]').click();
}
setleadStatus(){
cy.wrap(iframeDoc).find('select[id="leadStatus"]').select(dataset.leadStatus);
}
setleadInquiryMethod(){
    cy.wrap(iframeDoc).find('select[id="leadInquiryMethod"]').select(dataset.leadInquiryMethod);
}
setleadInquiryDate(){
    cy.wrap(iframeDoc).find('input[id="leadInquiryDate"]').type('07/18/2023');
}
setprimaryReferralMethod(){
    cy.wrap(iframeDoc).find('select[id="primaryReferralMethod"]').select(dataset.primaryReferralMethod);
}
setsecondaryReferralMethod(){
    cy.wrap(iframeDoc).find('select[id="secondaryReferralMethod"]').select(dataset.secondaryReferralMethod);
}
setchild1FirstName(){
    cy.wrap(iframeDoc).find('input[id="child1FirstName"]').type(dataset.child1FirstName); 
}
setchild1DateOfBirth(){
    cy.wrap(iframeDoc).find('input[id="child1DateOfBirth"]').type(dataset.child1DateOfBirth).type('{enter}');
}
setsaveButton(){
    cy.wrap(iframeDoc).find('input[id="saveButton"]').click();
}
setEMailFollowup(){
    cy.wrap(iframeDoc).find('select[id="mainPLACEHOLDER_inquiryFollowupActivities_detailRepeater_activity_0"]').select('E Mail Followup');
}
setdueDate(){
    cy.wrap(iframeDoc).find('input[id="mainPLACEHOLDER_inquiryFollowupActivities_detailRepeater_dueDate_0"]').type('07/18/2023');
}
settestuser(){
    cy.wrap(iframeDoc).find('select[id="mainPLACEHOLDER_inquiryFollowupActivities_detailRepeater_recipient_0"]').select('test user');
}
clicksave(){
    cy.wrap(iframeDoc).find('input[id="saveNoDuplicateCheckbutton"]').click();
}

}
export default leads