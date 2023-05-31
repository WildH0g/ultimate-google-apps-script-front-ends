/* eslint-disable no-unused-vars */
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

function saveEmojis() {
  const emojis = Array.from(arguments);
  console.log('💾 Saved emojis: ' + emojis);
  PropertiesService.getDocumentProperties().setProperty(
    'lastUsed',
    JSON.stringify(emojis)
  );
  return emojis;
}

function getSavedEmojis() {
  const emojis =
    PropertiesService.getDocumentProperties().getProperty('lastUsed');
  console.log('📖 Reading emojis: ', emojis);
  return emojis;
}

function printSavedEmojis() {
  console.log(getSavedEmojis());
}

function deleteSavedEmojis() {
  PropertiesService.getDocumentProperties().deleteProperty('lastUsed');
}
