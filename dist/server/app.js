function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('😎 Emojis')
    .addItem('Show emojis', 'openSidebar')
    .addToUi();
}

function openSidebar() {
  return SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('ui/index')
  );
}
