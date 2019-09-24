function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#image_preview').attr('src', e.target.result);
      $('#image_preview').Jcrop({
        onChange: updateInfo,
        onSelect: updateInfo
      });
    }

    reader.readAsDataURL(input.files[0]);
  }
}

function updateInfo(e) {
  $("#x1").val(e.x);
  $("#y1").val(e.y);
  $("#x2").val(e.x2);
  $("#y2").val(e.y2);
}

$(document).ready(
  function () {
    console.log('ready');
    $("#fileToUpload").on('change', function () {
      readURL(this);
    });
  }
);