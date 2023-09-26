#time {
  text-align: center;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
}

@media (max-width: 768px) {
  .logo {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: 28px;
  }

  .desc {
    font-size: 20px;
  }
}

footer img {
  margin-right: 10px;
}

.second-bar {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  background-color: transparent;
  color: #fff;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  color: #ffffff;
  padding: 10px;
  font-size: 14px;
  margin-top: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow-x: auto;
}

.second-bar a {
  color: #fff;
  z-index: 1;
  text-decoration: none;
  margin-right: 10px;
  padding: 8px;
  transition: transform 0.3s ease;
  line-height: 40px;
}

.second-bar a:hover {
  transform: scale(1.1);
}

body {
  background-color: #1a1a1a;
  background-image: url("https://4.bp.blogspot.com/-xmBD1R-vAKU/XDN7mqK7MSI/AAAAAAAADXE/7USV-66lnPQSHDrFELe8uyTdlLpfI9umwCLcBGAs/s1600/Galaxy%2BGifs%2B6.gif");
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  padding-top: 64px;
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards
}

.second-bar a.second-bar-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  transition: transform 0.3s ease;
}

.second-bar a.second-bar-link:hover {
  transform: scale(1.1);
}

.second-bar img {
  display: block;
  max-width: 100%;
  margin-right: 10px;
  height: auto;
}

.second-bar img:hover {
  transform: scale(1.1);
}

footer img:hover {
  transform: scale(1.1);
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.logo {
  width: 150px;
  height: 150px;
  max-width: 80%;
}

h1 {
  margin-top: 20px;
  font-size: 38px;
  font-weight: 700;
  text-align: center;
}

.desc {
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
}

#uv-form {
  margin-top: 30px;
}

#uv-address {
  background: #252525;
  color: white;
  width: 400px;
  height: 45px;
  font-size: 25px;
  padding: 0 12px;
  border: none;
  border-radius: 7px;
}

.uv-address {
  background: #252525;
  color: white;
  width: 400px;
  height: 45px;
  font-size: 25px;
  padding: 0 12px;
  border: none;
  border-radius: 7px;
}

iframe#apploader {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: calc(100% - 85px); 
  border: none;
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

#searchButton {
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  margin-left: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#searchButton:hover {
  background-color: #333;
  transform: scale(1.1);
}

.left-margin {
  margin-left: 20px;
}

.footer-text-container {
  padding-right: 20px; 
}

footer a {
  color: #ffffff;
  text-decoration: none;
  margin-right: 10px;
  transition: transform 0.3s ease;
}

footer a:hover {
  transform: scale(1.1);
}

footer span {
  margin-left: auto;
}

iframe {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: calc(100% - 85px);
  border: none;
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

button,
footer a,
.second-bar a,
#searchButton {
  transition: transform 0.3s ease;
}

button:hover,
footer a:hover,
.second-bar a:hover,
#searchButton:hover {
  transform: scale(1.1);
}

button {
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  margin-left: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

a {
  color: #ffffff;
  text-decoration: none;
  margin-right: 10px;
}

textarea {
  width: 400px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px auto;
  max-width: 800px;
}

.grid-item {
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  opacity: 1;
  transform: scale(1);
  transition: transform 0.3s ease, opacity 0.5s ease-in-out;
}

.grid-item:hover {
  transform: scale(1.1);
}

.grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.fade-out {
  animation: fade-out 0.5s ease-in-out forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.battery-icon {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 10px;
  background-position: center center;
  background-repeat: no-repeat;
}

.battery-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: transparent;
}

.battery-text {
  position: absolute;
  top: 10.5px;
  transform: translate(-100%, -75%);
  font-size: 13px;
  color: white;
}

.battery-icon.low {
  background-image: url('https://sodium-5h8.pages.dev/assets/img/bat-low.png');
}

.battery-icon.medium {
  background-image: url('https://sodium-5h8.pages.dev/assets/img/bat-medium.png');
}

.battery-icon.high {
  background-image: url('https://sodium-5h8.pages.dev/assets/img/bat-high.png');
}

.battery-icon.charging.low {
  background-image: url('https://sodium-5h8.pages.dev/assets/img/bat-charging-low.png');
}

.battery-icon.charging.medium {
  background-image: url('https://sodium-5h8.pages.dev/assets/img/bat-charging-medium.png');
}

.battery-icon.charging.high {
  background-image: url('https://sodium-5h8.pages.dev/assets/img/bat-charging-high.png');
}

.second-bar-link {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-color: transparent;
}

.second-bar-link.home-link {
  background-image: url("https://sodium-5h8.pages.dev/assets/img/house.jpg");
  background-size: 67%;
  background-repeat: no-repeat;
  background-position: center;
}

.second-bar-link.games-link {
  background-image: url("https://sodium-5h8.pages.dev/assets/img/games.jpg");
  background-size: 67%;
  background-repeat: no-repeat;
  background-position: center;
}

.second-bar-link.apps-link {
  background-image: url("https://sodium-5h8.pages.dev/assets/img/apps.jpg");
  background-size: 67%;
  background-repeat: no-repeat;
  background-position: center;
}

.second-bar-link.settings-link {
  background-image: url("https://sodium-5h8.pages.dev/assets/img/settings.jpg");
  background-size: 67%;
  background-repeat: no-repeat;
  background-position: center;
}

.config-label {
  font-weight: bold;
  color: #ffffff;
}

.config-input {
  padding: 5px;
  border: 1px solid #ccc;
  color: #fff;
  background-color: #333;
  border-radius: 4px;
}

.config-select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: white;
  background-color: #333;
}

.column {
  width: 145px;
  transition: all 0.2s ease;
  cursor: pointer;
  background: #252525;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  margin: 0;
}

.column p {
  width: 145px;
  height: 19px;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  padding-top: 136px;
  padding-bottom: 12px;
}
