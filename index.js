(function () {
  if (!window.SubwayBuilderAPI) {
    console.error('[Greater Montreal] SubwayBuilderAPI not found');
    return;
  }

  const API = window.SubwayBuilderAPI;
  console.log('[Greater Montreal] loaded, game API version:', API.version);

  API.registerCity({
    name: 'Montreal',
    code: 'MTL',
    population: 4_300_000,
    initialViewState: {
      zoom: 13.5,
      latitude: 45.5017,
      longitude: -73.5673,
      bearing: 0
    }
  });

  API.hooks.onGameInit(() => {
    console.log('[Greater Montreal] onGameInit fired');
    API.ui.showNotification('Greater Montreal mod loaded!', 'success');
  });
})();