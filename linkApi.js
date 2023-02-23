
const key = "AIzaSyBPudgzhotbNOso6UayXgxcC3ZCFshK35o";

const vox_id = "UCckdfYDGrjojJM28n5SHYrA";
const ike_id = "UC4yNIKGvy - YUrwYupVdLDXA";
const shu_id = "UCG0rzBZV_QMP4MtWg6IjhEA";
const mysta_id = "UCIM92Ok_spNKLVB5TsgwseQ";
const luca_id = "UC7Gb7Uawe20QyFibhLl1lzA";

const fulgur_id = "UCGhqxhovNfaPBpxfCruy9EA";
const uki_id = "UChJ5FTsHOu72_5OVx0rvsvQ";
const alban_id = "UCQ1zGxHrfEmmW4CPpBx9-qw";
const sonny_id = "UCuuAb_72QzK0M1USPMEl1yw";

const Maria_id = "UCwaS8_S7kMiKA3izlTWHbQg";

const test_id = "UCwaS8_S7kMiKA3izlTWHbQg";
let live = " ";

const youtubeVideoContainer = document.querySelector(
  ".youtube_video_container"
);

let videoGrop = " ";
//get toutube api
function listVidio(endpoint) {
  fetch(endpoint)
    .then((response) => {
      // console.log(response.json);
      return response.json();
    })
    .then((data) => {
      console.log("data", data); // x ""data"+ data"
      let videos = data.items;
      let count = 0;
      //get each videoid and add html,then grop to gether
      for (videos of videos) {
        //youtubeVideoContainer.innerHTML+=`<img src="${video.snippet.thumbnails.medium.url}">`
        console.log(data.items[count].id.videoId);
        const videoId = data.items[count].id.videoId;
        videoGrop += `<iframe width="400" height="220" class="video" src=https://www.youtube.com/embed/${videoId} ></iframe>`;
        count++;
      }
      //把所有html的code 加到 .html 的文檔中
      youtubeVideoContainer.innerHTML += videoGrop;
    })
    .catch((err) => {
      console.log("rejected", err);
    });
}
function FindLink(id) {
  //test link
  //live = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCGhqxhovNfaPBpxfCruy9EA&maxResults=5&order=date&key=${key}`;

  live = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&type=video&eventType=upcoming&key=${key} `;
  console.log("live:" + live);
  listVidio(live);
}

FindLink(mysta_id);
FindLink(luca_id);
FindLink(shu_id);
FindLink(ike_id);
FindLink(vox_id);

FindLink(fulgur_id);
FindLink(uki_id);
FindLink(sonny_id );
FindLink(alban_id);

//channelId
//upcoming
