import { useEffect, useState, useRef } from "react";
const content = await fetch("/q.html").then((res) => res.text());
function MathJaxHtmlRenderer({ htmlString }) {
  const [html, setHtml] = useState("");
  const containerRef = useRef(null);
  const mathJaxLoadedRef = useRef(false);

  useEffect(() => {
    // Parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Extract scripts
    const scripts = doc.querySelectorAll("script");
    const scriptElements = Array.from(scripts);

    // Separate inline scripts from external scripts
    const inlineScripts = [];
    const externalScripts = [];

    scriptElements.forEach((script) => {
      if (script.src) {
        externalScripts.push({
          src: script.src,
          id: script.id || null,
        });
      } else {
        inlineScripts.push(script.textContent);
      }
      script.remove(); // Remove from HTML
    });

    // Set the HTML without scripts
    setHtml(doc.body.innerHTML);

    // Execute inline scripts first (MathJax config)
    if (inlineScripts.length > 0 && !mathJaxLoadedRef.current) {
      inlineScripts.forEach((scriptContent) => {
        try {
          const script = document.createElement("script");
          script.textContent = scriptContent;
          document.head.appendChild(script);
        } catch (error) {
          console.error("Error executing inline script:", error);
        }
      });
    }

    // Then load external scripts (MathJax library)
    if (externalScripts.length > 0 && !mathJaxLoadedRef.current) {
      externalScripts.forEach(({ src, id }) => {
        // Check if script already exists
        if (id && document.getElementById(id)) {
          mathJaxLoadedRef.current = true;
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        if (id) script.id = id;
        script.async = true;

        script.onload = () => {
          mathJaxLoadedRef.current = true;
          // Trigger MathJax typesetting after load
          if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([containerRef.current]).catch(
              (err) => {
                console.error("MathJax typesetting error:", err);
              }
            );
          }
        };

        document.head.appendChild(script);
      });
    } else if (mathJaxLoadedRef.current && window.MathJax) {
      // If MathJax already loaded, re-typeset the content
      window.MathJax.typesetPromise([containerRef.current]).catch((err) => {
        console.error("MathJax typesetting error:", err);
      });
    }
  }, [htmlString]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
}

// Demo component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="prose max-w-none">
          <MathJaxHtmlRenderer htmlString={content} />
        </div>
      </div>
    </div>
  );
}
