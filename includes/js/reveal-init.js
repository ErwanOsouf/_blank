(function(){

  Reveal.initialize({
    dependencies : [

        // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        { src: '/includes/lib/js/classList.js', condition: function() { return !document.body.classList; } },

        // Interpret Markdown in <section> elements
        { src: '/includes/lib/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '/includes/lib/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Syntax highlight for <code> elements
        { src: '/includes/lib/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        /*
        // Zoom in and out with Alt+click
        { src: 'lib/reveal/plugin/zoom-js/zoom.js', async: true }
    */]
  });
})();
