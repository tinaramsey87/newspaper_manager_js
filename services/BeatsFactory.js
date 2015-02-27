newspaperManager.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [
    { title: "Crime", section: "Local", id: 1, reporters: [] },
    { title: "Fashion", section: "Living", id: 2, reporters: [] },
    { title: "Gardening", section: "Living", id: 3, reporters: [] },
    { title: "Restaurants", section: "Food", id: 4, reporters: [] },
    { title: "Celebrity Gossip", section: "Entertainment", id: 5, reporters: [] }
  ];
  factory.addBeat = function() {
    factory.beats.push({ title: factory.beatTitle, section: factory.beatSection, id: factory.beats.length + 1, reporters: [] });
    factory.beatTitle = null;
    factory.beatSection = null;
  };

  return factory;
});
