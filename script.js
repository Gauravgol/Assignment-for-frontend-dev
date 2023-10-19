 

document.addEventListener('DOMContentLoaded', function () {
    const copyBtn = document.getElementById('copyBtn');
    const saveBtn = document.getElementById('saveBtn');
    const lockBtn = document.getElementById('lockBtn');
    const codeArea = document.getElementById('codeArea');
  
    copyBtn.addEventListener('click', function () {
      copyToClipboard(codeArea.innerText);
    });
  
    saveBtn.addEventListener('click', function () {
       
      alert('Code saved!');
    });
  
    lockBtn.addEventListener('click', function () {
      codeArea.contentEditable = codeArea.contentEditable === 'true' ? 'false' : 'true';
      lockBtn.innerText = codeArea.contentEditable === 'true' ? 'Lock' : 'Unlock';
    });
  
    function copyToClipboard(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Code copied to clipboard!');
    }
  });
  