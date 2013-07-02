$(function() {

  var change_farekind = function(input) {
    var kind = $(input).val();
    var dependencies = $("[data-farekind]");
    dependencies.hide();

    dependencies.filter(function() {
      var kinds = $(this).data("farekind").toString().split(',');
      return $.inArray(kind,kinds) !== -1;
    }).show();
  };

  $("#fare-kind").change(function() {
    change_farekind(this);
  });

  change_farekind($("#fare-kind"));

  $("#add-extra-pricing").click(function(e) {
    e.preventDefault();
    $(this).parents("p").before(create_new_row());
    $("#imports .import-start:last").focus();
  });

  $("form").submit(function() {
    $("select").prop("disabled",false);
  });

  var initSelects = function() {
    $(".fare-value-unit")
      .prop("disabled",true)
      .val($("#fare-min-fare-unit").val());
  }
  , create_new_row = function(input,number) {
      var template = "<li class='import'><p><label for='fare-from-amount-{{count}}'>Cantidad</label> <input type='text' name='fare-from-amount' value='{{next_value}}' class='import-start' id='fare-from-amount-{{count}}' size='2' /> &rarr; <input type='text' name='fare-to-amount' class='import-end' value='--' id='fare-to-amount-{{count}}' size='2' /> <select><option>dias</option></select> <label for='fare-value-{{count}}'>Importe</label> <input type='text' name='fare-value' value='' id='fare-value-{{count}}' size='3' /> &euro; / <select><option>fijo</option><option>dia</option></select> <a href='#' class='button inline remove'>&#x2718;</a></p><p class='settings-24'><label for=''>Unidad de importe</label><label><input type='radio' name='imports[0].children_type' value='HOURS' checked='checked'/> Horas</label> <label><input type='radio' name='imports[0].children_type' value='MINUTES'/> Minutos</label> </p><ol></ol></li>"

      , view = { 
        count : $("#imports li").length - 1
      , next_value : number || "--"
      };

    return $.mustache(template,view);
  }
  , create_new_row_24 = function(input,number) {
    var template = "<li class='import-24 indented-checkbox'><input type='text' name='imports[{{count}}].children[{{children_count}}].start' value='{{top}}' class='import-start' size='2'/> &rarr; <input type='text' name='imports[{{count}}].children[{{children_count}}].end' class='import-end' value='{{bottom}}' size='2'/> = <input type='text' name='imports[{{count}}].children[{{children_count}}].amount' size='2'/> &euro; <a href='#' class='button inline remove'>&#x2718;</a></li>"
      , view = { 
          count          : $(input).parents("ol:last").find("> li").length - 1
        , children_count : $(input).parents("ol:first").find("> li").length
        , top            : number
        , bottom         : $(input).parents("li:last").find(".settings-24 :checked").val() 
                            == "HOURS" 
                            ? 24
                            : 1440
        };

    return $.mustache(template,view);
  }

  , append_new_row = function(input,number,kind) {
    var row
      , next_row = $(input).parents("li:first");

    if (kind == "24")
      row = create_new_row_24(input,number);
    else
      row = create_new_row(input,number);
    
    next_row.after(row);

    return next_row.next();
  }
  , update_or_create_next_import = function(input, kind) {
    var _input   = $(input)
      , number   = parseInt($(input).val())
      , row      = _input.parents("li:first")
      , next_row;
        
    if (kind == "24") { next_row = row.next(".import-24");
    } else            { next_row = row.next(".import");
    }

    if (!next_row.length) {
      next_row = append_new_row(input,number + 1,kind);
      next_row.find("ol").append("<li><input type='hidden' id='dummy'/></li>").append(create_new_row_24("#dummy",1));
      $("#dummy").parents("li:first").remove();
    }

  }
  , remove_import = function(button) {
    var row = $(button).parents("li").first().remove();
  }
  , reset_imports = function() {
    $("#imports li:first").find(".import-start").prop("disabled",true).val(1)
      .end()
      .find(".import-end").val("--");
  }
  initSelects();

  $("#fare-min-fare-unit").change(function() {
    initSelects();
  });

  $(".import-end").live("change",function() {
    var params = [this];
    if ($(this).parents("li:first").hasClass("import-24"))
      params.push("24");
    update_or_create_next_import.apply(this,params);
  });

  $("#save_only").click(function(e) {
    e.preventDefault();
    var _this = $(this)
      , previous_text = _this.text();

      _this.text("Salvando...").prop("disabled",true);

      setTimeout(function() {
        _this.text(previous_text).prop("disabled",false);
      },700);

  });

  $("#imports .remove").live("click",function(e) {
    e.preventDefault();
    if ($("#imports li").length > 1)
      remove_import(this);
    else
      reset_imports();
  });

});
