<script setup>
import { GoogleMap, Marker, MarkerCluster, InfoWindow } from 'vue3-google-map'
const center = { lat: 34.1435371737675, lng: 133.3325484312326 }
const apiKey = import.meta.env.VITE_BASE_GOOGLE
</script>

<template>
  <br />
  <br />
  <br />
  <br />
  <div class="center">Footsteps</div>
  <br />
  <div class="map">
    <GoogleMap :api-key="apiKey" style="width: 800px; height: 500px" :center="center" :zoom="6">
      <MarkerCluster>
        <Marker :options="{ position: { lat: 34.81021275799391, lng: 135.53224115742424 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">SUMMER SONIC 2024</h1>
              <div id="bodyContent">
                <p>AURORAの待ち時間が1番好きだった。 雪は絶対にリベンジ！！</p>
                <p>(last visited August 17, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.58586700631095, lng: 130.1081782997193 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">SUNSET LIVE 2024</h1>
              <div id="bodyContent">
                <p>中村佳穂さんのステージ良すぎた🥲 写真撮ってもらった後になんか言ってたね＾＾</p>
                <p>(last visited September 7, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.586284725743226, lng: 130.3924793503281 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">秀ちゃんラーメン とんぼ店</h1>
              <div id="bodyContent">
                <p>ここはもっかい行きたい(笑) お金払ってくれてたん嬉しかった〜。</p>
                <p>(last visited September 7, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 32.90076613390865, lng: 131.0873609206943 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">阿蘇山</h1>
              <div id="bodyContent">
                <p>
                  付き合ってから初めて行った場所！
                  ずっと行きたいと思ってて、まさか日菜と行くことになるとは、、、
                </p>
                <p>(last visited September 28, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.243756289623946, lng: 130.957315208521 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">大山ダム</h1>
              <div id="bodyContent">
                <p>こんなにダムに熱量があるとは🙂 黒部ダムはマストだね〜</p>
                <p>(last visited September 28, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.09196855368699, lng: 131.07654186655722 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">喫茶竹の熊</h1>
              <div id="bodyContent">
                <p>
                  水に入らなくてよかったよ。ずっと稲見て「偽物じゃない」って言ってたん面白かった(笑)
                </p>
                <p>(last visited September 28, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.59036760042228, lng: 130.38702198860852 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">OLSEN</h1>
              <div id="bodyContent">
                <p>
                  自分らの次の人は売り切れてたり、いっつもラッキーなこと多い。でも、寒かった！！
                </p>
                <p>(last visited September 28, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.58053221527295, lng: 130.37741511162474 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">您好！朋友</h1>
              <div id="bodyContent">
                <p>コロナになって絶望してたところ。まさかのすぐに来れた。価格設定強気すぎる🫑</p>
                <p>(last visited September 8, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 35.05799778748954, lng: 135.7502887815601 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">鴨川・サバの煮込み弁当</h1>
              <div id="bodyContent">
                <p>やっぱり鴨川🎶 チーズケーキからサバの煮込みに。次は何が食べれるかなー。</p>
                <p>(last visited October 26, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.57760364208316, lng: 130.3750223290859 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">もつ料理月川</h1>
              <div id="bodyContent">
                <p>インターホンなんほんまにおもろい。毎度客になりたい。</p>
                <p>(last visited November 16, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 33.583083078711425, lng: 130.3957831202039 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">うどん杵むら</h1>
              <div id="bodyContent">
                <p>
                  何分作るんにかかってるんやろう🤔
                  食べたいものが似てて、それがシェアできることが嬉しかった。
                </p>
                <p>(last visited November 17, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 34.624430191607956, lng: 135.5083867819461 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">COFFEE LONG SEASON</h1>
              <div id="bodyContent">
                <p>
                  いっつも出かけても時間なくて忙しないこと多かったけど、ゆっくりできて嬉しかった。
                  こういう時間ももっと作っていきたいな〜。
                </p>
                <p>(last visited Decembr 1, 2024).</p>
              </div>
            </div>
          </InfoWindow>
        </Marker>

        <Marker :options="{ position: { lat: 34.659399072587995, lng: 135.50570705644458 } }">
          <InfoWindow>
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">まんだらけ</h1>
              <div id="bodyContent">
                <p>始まりの地。あの場所で長時間居れるんは、やっぱり意味わからん。</p>
                <p>(last visited August 18, 2024).</p>
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
.center {
  text-align: center;
}
</style>
