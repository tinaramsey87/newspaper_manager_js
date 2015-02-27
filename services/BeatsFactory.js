newspaperManager.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addBeat = function() {
    factory.beats.push({ title: factory.beatTitle, section: factory.beatSection, id: factory.beats.length + 1, reporters: [] });
    factory.beatTitle = null;
    factory.beatSection = null;
  };

  return factory;
});
