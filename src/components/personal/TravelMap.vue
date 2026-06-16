<script setup>
import { onMounted, ref, shallowRef } from "vue";

const props = defineProps({
  cities: { type: Array, required: true },
});

const emit = defineEmits(["markerClick"]);

const mapContainer = ref(null);
const map = shallowRef(null);

function createMarkerHtml(cityName) {
  return `
    <div class="marker-wrapper">
      <div class="marker-pulse"></div>
      <div class="marker-pin">
        <div class="marker-dot"></div>
      </div>
      <div class="marker-label">${cityName}</div>
    </div>
  `;
}

onMounted(async () => {
  const L = await import("leaflet");
  await import("leaflet/dist/leaflet.css");

  map.value = L.map(mapContainer.value, {
    scrollWheelZoom: false,
  }).setView([45, 10], 4);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 18,
    },
  ).addTo(map.value);

  props.cities.forEach((city, index) => {
    const icon = L.divIcon({
      className: "travel-marker",
      html: createMarkerHtml(city.city),
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    });

    const marker = L.marker(city.coordinates, { icon }).addTo(map.value);

    // Stagger the entrance animation
    const el = marker.getElement();
    if (el) {
      el.style.setProperty("--marker-delay", `${index * 60}ms`);
    }

    marker.on("click", () => emit("markerClick", city));
  });
});
</script>

<template>
  <div
    ref="mapContainer"
    class="travel-map h-[500px] w-full border border-charcoal-100 dark:border-charcoal-700 sm:h-[500px]"
    role="img"
    aria-label="Interactive map showing visited cities"
  />
</template>

<style>
/* Marker container - remove default leaflet icon styles */
.travel-marker {
  background: none !important;
  border: none !important;
}

.marker-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: marker-drop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: var(--marker-delay, 0ms);
}

/* The pin (teardrop) shape */
.marker-pin {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 2px 8px rgba(255, 77, 0, 0.35),
    0 1px 3px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
  cursor: pointer;
}

.marker-pin .marker-dot {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  transform: rotate(45deg);
  opacity: 0.9;
}

/* Hover - lift and glow */
.marker-wrapper:hover .marker-pin {
  transform: rotate(-45deg) scale(1.2);
  box-shadow:
    0 4px 16px rgba(255, 77, 0, 0.5),
    0 2px 6px rgba(0, 0, 0, 0.25);
}

/* Pulse ring */
.marker-pulse {
  position: absolute;
  top: 6px;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-left: -8px;
  border-radius: 50%;
  background: rgba(255, 77, 0, 0.25);
  animation: marker-pulse-ring 2.5s ease-out infinite;
  animation-delay: var(--marker-delay, 0ms);
}

/* City label below the pin */
.marker-label {
  margin-top: 4px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #1a1a1a;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(4px);
  border-radius: 3px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  pointer-events: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.marker-wrapper:hover .marker-label {
  opacity: 1;
  transform: translateY(0);
}

/* Drop-in animation */
@keyframes marker-drop {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.5);
  }
  60% {
    opacity: 1;
    transform: translateY(4px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Pulse ring animation */
@keyframes marker-pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.4;
  }
  100% {
    transform: scale(3.5);
    opacity: 0;
  }
}

/* Dark mode adjustments */
.dark .marker-label {
  color: #faf5ef;
  background: rgba(26, 26, 26, 0.9);
}

/* Override leaflet tooltip if still used anywhere */
.travel-map .leaflet-tooltip {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  color: #1a1a1a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}
.travel-map .leaflet-tooltip-top::before {
  border-top-color: rgba(255, 255, 255, 0.95);
}
</style>
