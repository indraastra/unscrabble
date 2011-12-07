var ui = ui || {};

ui.kRack     = "#rack";
ui.kScore    = ".score";
ui.kScrabble = "#scrabble";
ui.kSquare   = ".square";
ui.kTile     = ".tile";
ui.kToken    = ".token";

ui.BuildEmptyBoard = function (board_id, xdim, ydim) {
  for (var x = 0; x < xdim; ++x) {
    var rack = $("<div class='rack'></div>").appendTo(board_id);
    for (var y = 0; y < ydim; ++y) {
      $(rack).append("<div class='square'></div>");
    }
  }
}

ui.BuildBoard = function (board_id, board) {
  var xdim = board["xdim"];
  var ydim = board["ydim"];
  for (var x = 0; x < xdim; ++x) {
    var rack = $("<div class='rack'></div>").appendTo(board_id);
    for (var y = 0; y < ydim; ++y) {
      var idx = x * ydim + y;
      var square = $("<div class='square'></div>").appendTo(rack);
      var tile = board["tiles"][idx];
      if (tile.length == 2) {
        square.append(ui.MakeTile(tile[0], tile[1]));
      }
    }
  }
}

ui.GetTile = function(elem) {
  var token = elem.children(ui.kToken).html();
  var score = elem.children(ui.kScore).html();
  return [token, score];
}

ui.MakeTile = function(token, score) {
  var token = $("<span>" + token + "</span>").addClass(ui.kToken.substr(1));
  var score = $("<span>" + score + "</span>").addClass(ui.kScore.substr(1));
  return $("<div></div>").addClass(ui.kTile.substr(1)).append(token).append(score);
}

ui.InitUI = function (size) {
  $(ui.kSquare).sortable({
    accept: ui.kTile,
    dropOnEmpty: true,
    placeholder: "tile highlight",
    connectWith: ui.kRack + "," + ui.kSquare + ":empty"
  });
  $(ui.kRack).sortable({
    accept: ui.kTile,
    placeholder: "tile highlight",
    connectWith: ui.kSquare + ":empty" + "," + ui.kRack,
  });
  $(ui.kScrabble).addClass(size);
}

