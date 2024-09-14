window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "https://swagger.dysolix.dev/lcu/swagger.json",
    url: "https://raw.githubusercontent.com/{{ site.github.repository_nwo }}/main/swagger.json",
	dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
	apisSorter: "alpha",
	operationsSorter: "alpha",
	docExpansion: "none",
	displayOperationId: true,
	
  });

  //</editor-fold>
};
