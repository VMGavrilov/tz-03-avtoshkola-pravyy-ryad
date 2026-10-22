function doPost(e) {
  // Заголовки для разрешения CORS
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    var data = e.parameter;
    var SPREADSHEET_ID = '1ql5uaftcWL_wvrURTjTZHo77rgIMFba6A0fHHbxPhb8'; // <-- Вставьте ваш ID таблицы
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('leads');
    
    if (!data.name || !data.phone || !data.request_id) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Missing fields' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers); // <-- Добавили заголовки
    }

    sheet.appendRow([
      data.request_id, new Date(), data.name, data.phone, data.email || '',
      data.category || '', data.branch || '', data.utm_source || 'direct',
      data.utm_medium || 'none', data.utm_campaign || 'not_set', data.utm_content || 'not_set', 'new'
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers); // <-- Добавили заголовки
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers); // <-- Добавили заголовки
  }
}

// Эта функция нужна, чтобы браузер мог проверить, разрешена ли отправка (OPTIONS-запрос)
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}