const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {   
           
        baseUrl: "http://localhost:1667",
        viewportWidth: 1024,
        viewportHeight: 768
    
  },
});
