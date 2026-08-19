(function () {
  if (!window.SubwayBuilderAPI) {
    console.error('[Greater Montreal] SubwayBuilderAPI not found');
    return;
  }

  const API = window.SubwayBuilderAPI;
  console.log('[Greater Montreal] loaded, game API version:', API.version);
  API.ui.showNotification('Greater Montreal script executed!', 'success');

  API.hooks.onGameInit(() => {
    console.log('[Greater Montreal] onGameInit fired');
    API.ui.showNotification('Greater Montreal mod loaded!', 'success');
  });
})();