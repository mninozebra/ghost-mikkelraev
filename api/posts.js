import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://mikkelhornbechnielsen.ghost.io',
    key: '27cb55a82e1577a58291016376',
    version: "v3"
  });

  export async function getPages() {
    return await api.pages
      .browse({
        limit: "all",
        include: 'tags, authors'
      })
      .catch(err => {
        console.error(err);
      });

  }

  console.log(api);
