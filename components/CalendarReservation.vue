<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
    (function (C, A, L) {
        let p = function (a, ar) {
            a.q.push(ar);
        };
        let d = C.document;
        C.Cal =
            C.Cal ||
            function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () {
                        p(api, arguments);
                    };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // eslint-disable-next-line no-undef
    Cal("init", "30min", { origin: "https://cal.com" });

    // eslint-disable-next-line no-undef
    Cal.ns["30min"]("ui", {
        styles: { branding: { brandColor: "#FF0000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
    });






    // Initialize calendar on mount
    // eslint-disable-next-line no-undef
    Cal("init", "30min", { origin: "https://cal.com" });

    // eslint-disable-next-line no-undef
    Cal.ns["30min"]("ui", {
        styles: {
            branding: {
                brandColor: "red",
            },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
    });
});

onUnmounted(() => {
    // Cleanup if needed
});
</script>

<template>
    <div class="big--button" data-cal-link="annaboiko/30min" data-cal-namespace="30min" data-cal-config='{"layout":"month_view"}'>
      Schedule an Appointment
    </div>
</template>
