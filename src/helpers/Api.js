const SopaContext = {
    sopaEndpoint: () => `${Api.baseUrl}/sopas`,
    sopaLista: () => `${SopaContext.sopaEndpoint()}/all-sopas`,
    sopaById: (id) => `${SopaContext.sopaEndpoint()}/one-sopa/${id}`,
    createSopa: () => `${SopaContext.sopaEndpoint()}/create-sopa`,
    updateSopaById: (id) => `${SopaContext.sopaEndpoint()}/update-sopa/${id}`,
    deleteSopaById: (id) => `${SopaContext.sopaEndpoint()}/delete-sopa/${id}`,
  };
  
  export const Api = {
    baseUrl: "https://api-elsopa.herokuapp.com/",
    ...SopaContext,
  };
  
  