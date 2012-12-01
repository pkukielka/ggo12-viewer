var forksList;

var options = {
	item: 'fork-item',
	plugins: [ [ 'fuzzySearch' ] ]
};

$.getJSON("data/forks.json", function(_forks) {
	var i, length, _results;
	forks = [];
	for (i = 0, length = _forks.length; i < length; i += 1) {
		if (_forks[i].homepage !== "https://github.com/blog/1303-github-game-off") {
			forks.push({
				full_name: '<a href="' + _forks[i].html_url + '">' + _forks[i].full_name + '</a>',
				avatar_url: '<img src="' +  _forks[i].owner.avatar_url + '" height="80" width="80"/>',
				homepage: '<a href="' + _forks[i].homepage + '">' + _forks[i].homepage + '</a>',
				description: _forks[i].description
			});
		}
	}
	$('#counter').html('(' + forks.length + ' entries)')
	forksList = new List('forks-list', options, forks);
});
