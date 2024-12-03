<script setup>
import { GoogleMap, Marker, MarkerCluster, InfoWindow } from 'vue3-google-map'
const center = { lat: 34.81021275799391, lng: 135.53224115742424 }
const locations = [
  { lat: 34.81021275799391, lng: 135.53224115742424 },
  // { lat: -33.718234, lng: 150.363181 },
  // { lat: -33.727111, lng: 150.371124 },
  // { lat: -33.848588, lng: 151.209834 },
  // { lat: -33.851702, lng: 151.216968 },
  // { lat: -34.671264, lng: 150.863657 },
  // { lat: -35.304724, lng: 148.662905 },
  // { lat: -36.817685, lng: 175.699196 },
  // { lat: -36.828611, lng: 175.790222 },
  // { lat: -37.75, lng: 145.116667 },
  // { lat: -37.759859, lng: 145.128708 },
  // { lat: -37.765015, lng: 145.133858 },
  // { lat: -37.770104, lng: 145.143299 },
  // { lat: -37.7737, lng: 145.145187 },
  // { lat: -37.774785, lng: 145.137978 },
  // { lat: -37.819616, lng: 144.968119 },
  // { lat: -38.330766, lng: 144.695692 },
  // { lat: -39.927193, lng: 175.053218 },
  // { lat: -41.330162, lng: 174.865694 },
  // { lat: -42.734358, lng: 147.439506 },
  // { lat: -42.734358, lng: 147.501315 },
  // { lat: -42.735258, lng: 147.438 },
  // { lat: -43.999792, lng: 170.463352 },
]
const apiKey = import.meta.env.VITE_BASE_GOOGLE
</script>

<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  2024
  <div class="map">
    <GoogleMap :api-key="apiKey" style="width: 800px; height: 500px" :center="center" :zoom="12">
      <MarkerCluster>
        <Marker v-for="(location, i) in locations" :key="i" :options="{ position: location }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">Uluru</h1>
              <div id="bodyContent">
                <p>
                  <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock
                  formation in the southern part of the Northern Territory, central Australia.
                </p>
                <p>
                  Attribution: Uluru,
                  <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
                    https://en.wikipedia.org/w/index.php?title=Uluru</a
                  >
                  (last visited June 22, 2009).
                </p>
              </div>
            </div>
          </InfoWindow>
        </Marker>
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>

<style>
.map {
  display: flex;
  justify-content: center;
}
</style>
