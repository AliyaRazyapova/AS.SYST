function openUrlPopup() {
    var url = prompt("Введите URL-адрес");
    if (url) {
      var textArea = document.getElementById("text");
      textArea.value += url;
    }
  }

function toggleBold() {
    var textBox = document.getElementById("text");
    if (textBox.style.fontWeight === "bold") {
        textBox.style.fontWeight = "normal";
    } else {
        textBox.style.fontWeight = "bold";
    }
}

function toggleUnderline() {
  var input = document.getElementById("text");
  var currentStyle = input.style.textDecoration;
  if (currentStyle === "underline") {
    input.style.textDecoration = "none";
  } else {
    input.style.textDecoration = "underline";
  }
}

function toggleItalic() {
  var input = document.getElementById("text");
  var currentStyle = input.style.fontStyle;
  if (currentStyle === "italic") {
    input.style.fontStyle = "normal";
  } else {
    input.style.fontStyle = "italic";
  }
}

function addBulletPoint() {
  var textarea = document.getElementById("text");
  textarea.value += "\n• ";
}

function openUrlPopup_1() {
    var url = prompt("Введите URL-адрес");
    if (url) {
      var textArea = document.getElementById("text_1");
      textArea.value += url;
    }
  }

function toggleBold_1() {
    var textBox = document.getElementById("text_1");
    if (textBox.style.fontWeight === "bold") {
        textBox.style.fontWeight = "normal";
    } else {
        textBox.style.fontWeight = "bold";
    }
}

function toggleUnderline_1() {
  var input = document.getElementById("text_1");
  var currentStyle = input.style.textDecoration;
  if (currentStyle === "underline") {
    input.style.textDecoration = "none";
  } else {
    input.style.textDecoration = "underline";
  }
}

function toggleItalic_1() {
  var input = document.getElementById("text_1");
  var currentStyle = input.style.fontStyle;
  if (currentStyle === "italic") {
    input.style.fontStyle = "normal";
  } else {
    input.style.fontStyle = "italic";
  }
}

function addBulletPoint_1() {
  var textarea = document.getElementById("text_1");
  textarea.value += "\n• ";
}