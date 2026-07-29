// ===== IFRAME LOADING HANDLER =====
        // Purpose: Hide loading spinner when iframe content has loaded
        // Triggers: iframe onload event
        document.addEventListener('DOMContentLoaded', function() {
            const iframeContainer = document.getElementById('iframe-container');
            const loadingIndicator = document.getElementById('loading-indicator');

            // Hide loading indicator when iframe loads
            iframeContainer.addEventListener('load', function() {
                loadingIndicator.style.display = 'none';
            });

            // Fallback: hide after 5 seconds if iframe doesn't fire load event
            setTimeout(function() {
                if (loadingIndicator.style.display !== 'none') {
                    loadingIndicator.style.display = 'none';
                }
            }, 5000);

            // Handle iframe errors
            iframeContainer.addEventListener('error', function() {
                loadingIndicator.innerHTML = '<div class="text-center"><p class="text-red-400 text-lg font-semibold">Unable to load PayMeGPT Shop</p><p class="text-gray-400 text-sm mt-2">Please check your connection and try again.</p></div>';
            });
        });

        // ===== RESPONSIVE IFRAME RESIZE =====
        // Purpose: Ensure iframe fills entire viewport on resize
        // Triggers: Window resize event
        window.addEventListener('resize', function() {
            const iframeContainer = document.getElementById('iframe-container');
            iframeContainer.style.width = '100%';
            iframeContainer.style.height = '100%';
        });