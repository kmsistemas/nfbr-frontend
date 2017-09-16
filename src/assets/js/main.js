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
    escapeMarkup: function (markup) { return markup; },
    templateResult: formatNCM,
    templateSelection: formatNCMSelection
  });



  $(".js-example-data-ajax").select2({
    ajax: {
      url: "https://api.github.com/search/repositories",
      dataType: 'json',
      delay: 250,
      data: function (params) {
        return {
          q: params.term, // search term
          page: params.page
        };
      },
      processResults: function (data, params) {
        // parse the results into the format expected by Select2
        // since we are using custom formatting functions we do not need to
        // alter the remote JSON data, except to indicate that infinite
        // scrolling can be used
        params.page = params.page || 1;
  
        return {
          results: data.items,
          pagination: {
            more: (params.page * 30) < data.total_count
          }
        };
      },
      cache: true
    },
    placeholder: 'Search for a repository',
    escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
    minimumInputLength: 1,
    templateResult: formatRepo,
    templateSelection: formatRepoSelection
  });
  
  function formatRepo(repo) {
    if (repo.loading) {
      return repo.text;
    }
  
    var markup = ["<div class='select2-result-repository clearfix'><div><span>", repo.full_name, "</span> <span>", repo.forks_count, "</span></div></div>"];
    
    return markup.join('');
  }
  
  function formatRepoSelection(repo) {
    console.log(repo);
    return repo.full_name || repo.text;
  }
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