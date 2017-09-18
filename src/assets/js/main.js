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
      // url: 'http://localhost:4200/assets/json.json',
      // url: 'http://nfbr.herokuapp.com/api/ncm/?format=json&limit=10',
      url: 'https://nfbr.herokuapp.com/api/lookups/ncm/?format=json',
      data: function (params) {
        var query = {
          search: params.term,
          page: params.page
        }
        // Query parameters will be ?search=[term]
        return query;
      },
      processResults: function (data, params) {
        // parse the results into the format expected by Select2
        // since we are using custom formatting functions we do not need to
        // alter the remote JSON data, except to indicate that infinite
        // scrolling can be used
        params.page = params.page || 1;
        return {
          results: data.results,
          pagination: {
            more: (params.page * 20) < data.count
          }
        };
      },
      cache: true,
      dataType: 'json',
      headers: {
        "Authorization": "Basic YWxlc3NhbmRyb0BrbXNpc3RlbWFzLmNvbS5icjpUcm9jQHIxMjM="
      }
    },
    language: "pt-BR",
    placeholder: 'Procure por um NCM',
    escapeMarkup: function (markup) { return markup; },
    templateResult: formatNCM,
    templateSelection: formatNCMSelection
  });

});

function formatNCMSelection(ncm) {
  return ncm.id_ncm || ncm.text;
}

function formatNCM(ncm) {
  if (ncm.loading) {
    return ncm.text;
  }

  var markup = ["<div class='select2-result-repository clearfix'><div><span>", ncm.text, "</span> <span></span></div></div>"];

  return markup.join('');
}