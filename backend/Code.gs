/**
 * Expert Survey Backend — Google Apps Script
 *
 * SETUP:
 *  1. Create a new Google Sheet and copy its ID from the URL
 *     (the long string between /d/ and /edit)
 *  2. Paste the Sheet ID into SPREADSHEET_ID below
 *  3. In Apps Script editor: Deploy → New deployment
 *     - Type: Web App
 *     - Execute as: Me
 *     - Who has access: Anyone
 *  4. Copy the Web App URL and paste it into BACKEND_URL
 *     at the top of session1.html and session2.html
 */

const SPREADSHEET_ID = '1qflZbYMZ0du1Iumg3oAduXSjQFKhJ69ZRE5SOciPF5E';
const NOTIFY_EMAIL   = 'd.shi@qmul.ac.uk';

// ── Entry points ──────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    writeRows(ss, data);
    sendEmail(data);
    return json({ status: 'ok', rows_written: data.rows.length });
  } catch (err) {
    return json({ status: 'error', message: err.toString() });
  }
}

function doGet() {
  return ContentService.createTextOutput('Survey backend is live.');
}

// ── Write helpers ─────────────────────────────────────────────────────────────

function writeRows(ss, data) {
  const isS1 = data.session === 'Session1';
  let sheet = ss.getSheetByName(data.session);

  if (!sheet) {
    sheet = ss.insertSheet(data.session);
    const header = isS1
      ? ['timestamp','evaluator','experience','sample_id','class_code','class_name','sample_num',
         'method_A','method_B','method_C','method_D',
         'choice_1A_pos','choice_1A_method',
         'rating_1B_A','rating_1B_B','rating_1B_C','rating_1B_D',
         'rating_Exp0','rating_Exp1','rating_Exp3','rating_Exp4']
      : ['timestamp','evaluator','experience','image_id','class_code','class_name','sample_num',
         'true_method','is_ai_generated',
         'q1_answer','q1_answer_name','q1_correct',
         'q2_answer','q2_correct'];
    sheet.appendRow(header);
    sheet.setFrozenRows(1);
    const hdr = sheet.getRange(1, 1, 1, header.length);
    hdr.setFontWeight('bold').setBackground('#1a3c5a').setFontColor('white');
  }

  const ts = data.timestamp;
  const ev = data.evaluator;

  if (isS1) {
    data.rows.forEach(r => sheet.appendRow([
      ts, ev, data.experience, r.sample_id, r.class_code, r.class_name, r.sample_num,
      r.method_A, r.method_B, r.method_C, r.method_D,
      r.choice_1A_pos, r.choice_1A_method,
      r.rating_1B_A, r.rating_1B_B, r.rating_1B_C, r.rating_1B_D,
      r.rating_Exp0, r.rating_Exp1, r.rating_Exp3, r.rating_Exp4,
    ]));
  } else {
    data.rows.forEach(r => sheet.appendRow([
      ts, ev, data.experience, r.image_id, r.class_code, r.class_name, r.sample_num,
      r.true_method, r.is_ai,
      r.q1_answer, r.q1_name, r.q1_correct,
      r.q2_answer, r.q2_correct,
    ]));
  }
}

function sendEmail(data) {
  const subject = `[Expert Survey] ${data.session} — ${data.evaluator} — ${data.timestamp.slice(0,10)}`;
  const body = JSON.stringify(data, null, 2);
  MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: subject, body: body });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
