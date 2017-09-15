Index = {
  init: function(){

    // Mobile menu
    $(".menu-trigger").click(function(e) {
      $(".sub-header").toggle();
      e.stopPropagation();
    });

    // Dropdown
    $('.sub-header li').hover(
      function () {
        $('.dropdown', this).show();
      },
      function () {
        $('.dropdown', this).hide();
      }
    );

  }
}

$(document).ready(function() {
  Index.init();

  //
  $('#id-ncm').select2({
    ajax: {
      url: 'http://nfbr.herokuapp.com/api/ncm/?format=json&limit=10',
      data: function (params) {
        var query = {
          search: params.term
        }
        // Query parameters will be ?search=[term]
        return query;
      },
      cache: true,
      dataType: 'json',
      headers: {
        "Authorization": "Basic YWxlc3NhbmRyb0BrbXNpc3RlbWFzLmNvbS5icjpUcm9jQHIxMjM="
      }
    },
    language: "pt-BR",
    placeholder: 'Procure por um NCM',
    templateResult: formatNCM,
    templateSelection: formatNCMSelection,
    escapeMarkup: function (markup) { return markup; }
  });
});

function formatNCMSelection(ncm) {
  return ncm.id_ncm || ncm.text;
}

function formatNCM(ncm) {
  if (ncm.loading) {
    return ncm.text;
  }

  var markup = ["<div class='select2-result-repository clearfix'><div><span>", ncm.codigo, "</span> <span>", ncm.descricao, "</span></div></div>"];

  return markup.join('');
}