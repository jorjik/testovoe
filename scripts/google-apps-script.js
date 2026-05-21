/**
 * Google Apps Script to be deployed as a Web App.
 * Instructions:
 * 1. Open Google Sheet.
 * 2. Extensions -> Apps Script.
 * 3. Paste this code.
 * 4. Deploy -> New Deployment -> Web App.
 * 5. Set "Who has access" to "Anyone".
 */

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Header check (optional)
        if (sheet.getLastRow() === 0) {
            sheet.appendRow([
                'Timestamp', 'Email', 'First Name', 'Last Name',
                'DOB', 'City', 'State', 'Postal Code', 'Address', 'Phone'
            ]);
        }

        const timestamp = new Date();
        const dobString = `${data.dob.month}/${data.dob.day}/${data.dob.year}`;

        sheet.appendRow([
            timestamp,
            data.email,
            data.firstName,
            data.lastName,
            dobString,
            data.city,
            data.state,
            data.postalCode,
            data.address,
            data.phone
        ]);

        return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
