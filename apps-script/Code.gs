function doPost(e) {
  try {
    var data = e.parameter;
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('leads');
    if (!data.name || !data.phone || !data.request_id) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Missing fields' })).setMimeType(ContentService.MimeType.JSON);
    }
    sheet.appendRow([
      data.request_id, new Date(), data.name, data.phone, data.email || '',
      data.category, data.branch, data.utm_source || 'direct', 'new'
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}